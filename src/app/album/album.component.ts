import {Component, Input} from '@angular/core';
import {Album} from "../models/album.model";

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  @Input()
  album: Album = {} as Album

  @Input()
  imageUrl: string = '../assets/img/bg-4.JPG';

  isAdmin: boolean = true;







}
