import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

  @Input()
  photo: any;

  @Input()
  idx: number = 0;

  pic: any;




  constructor() {

  }

  // ngOnInit(): void {
  //   this.pic = this.photo;
  //   console.log('hiiii',this.pic);
  // }

}
