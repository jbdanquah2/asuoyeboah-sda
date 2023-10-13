import {Component, Input} from '@angular/core';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

  @Input()
  photo: any;

  @Input()
  photos: any;



  constructor() {

  }

}
