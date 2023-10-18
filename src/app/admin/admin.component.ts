import {Component, OnInit, Output} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {noop} from "rxjs";
import {LoadingService} from "../shared/services/loading.service";
import {ProgramService} from "../services/program.service";
import {Program} from "../models/program.model";


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

  constructor(private afs:AngularFireAuth,
              private db: AngularFirestore,
              private loading: LoadingService,
              private programService: ProgramService) { }

  ngOnInit(): void {

    window.scrollTo(0, 0);

   this.programService.getAllRealTimePrograms()
     .subscribe((programs: any[]) => {
        this.programs = programs;
        console.log('programs', this.programs);
     });
  }

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

    setTimeout(() => {
      this.loading.loadingOff();
    }, 500)

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
