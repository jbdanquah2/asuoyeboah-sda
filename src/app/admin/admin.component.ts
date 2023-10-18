import {Component, OnInit, Output} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {forkJoin, noop, Observable, of} from "rxjs";
import {LoadingService} from "../shared/services/loading.service";
import {ProgramService} from "../services/program.service";
import {Program} from "../models/program.model";
import {AlbumService} from "../services/album.service";
import {catchError} from "rxjs/operators";
import {Album} from "../models/album.model";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Output()
  isAdminPage: boolean = false;

  isViewerOpen: boolean = false;

  currentItem: any = {};

  text:any = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'

  photo: any =  {
    title: 'Photo 1',
    imageUrl: '../../assets/bg-1.png'

  };

  programs!: any[];

  showConfirmDialog: boolean = false;

  albums: any[] = [];

  showAlbums: boolean = true;

  currentAlbum: Album = {} as Album;

  photosByAlbumId: any[] = [];

  constructor(private afs:AngularFireAuth,
              private db: AngularFirestore,
              private loading: LoadingService,
              private programService: ProgramService,
              private albumService: AlbumService) { }

  ngOnInit(): void {

    window.scrollTo(0, 0);

    this.albumService.getAlbums()
      .subscribe((albums: any[]) => {
        this.albums = albums;
        console.log('albums', this.albums);
      });

   this.programService.getAllRealTimePrograms()
     .subscribe((programs: any[]) => {
        this.programs = programs;
        console.log('programs', this.programs);
     });
  }

  // PROGRAMS
  onViewProgram(program: any) {
    this.currentItem = program;
    this.isViewerOpen = true;

    console.log('Admin: onViewProgram', this.currentItem)
  }

  openCreateNewProgram() {
    this.currentItem = {};
    this.isViewerOpen = true;
  }

  async createNewPrograms(program: Program) {
    const programId = this.db.createId()
    return  await this.db.doc(`programs/${programId}`).set(program);
  }

  async updateProgram(changes: any) {
    console.log('##changes', changes)
    return  await this.db.doc(`programs/${this.currentItem.id }`).update(changes);
  }

  async onEditProgram(event: any) {

    this.loading.loadingOn();
    console.log('##$event', event);

    if (this.currentItem.id) {
      await this.updateProgram(event);
    } else {
      await this.createNewPrograms(event);
    }

    this.currentItem = event;
    this.isViewerOpen = false;

    this.loading.loadingOff();


  }

  async deleteProgram(event: any) {

    this.showConfirmDialog = true;
    this.loading.loadingOn()

    if (!event) {
      return;
    }

    console.log('Admin: deleting program', this.currentItem.id);

    await this.programService.deleteProgram(this.currentItem.id);

    console.log('program deleted');

    this.showConfirmDialog = false;

    this.loading.loadingOff();
  }

  // GALLERY

  async onViewAlbum(album: any) {
    this.showAlbums = false;
    this.currentAlbum = album;

    this.photosByAlbumId = await this.getPhotosByAlbumId(album.id);
    console.log('<<<>>photosByAlbumId', this.photosByAlbumId);
  }

  async getPhotosByAlbumId(albumId: string): Promise<any> {
    const photoRef = await this.db.firestore
      .collection(`photos/`)
      .where('albumId', '==', albumId)
      .get();

    return photoRef.docs.map((snap) => {
      return {
        id: snap.id,
        ...(<any>snap.data()),
      };
    })
  }

  openConfirmDialog(program: Program) {
    this.currentItem = program;
    this.showConfirmDialog = true;
  }

  closeViewer($event: any) {
    this.isViewerOpen = false;
  }

  closeConfirm() {
    this.showConfirmDialog = false;
    this.loading.loadingOff();
  }
}
