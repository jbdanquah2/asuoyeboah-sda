import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  text:any = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'

  photo: any =  {
    title: 'Photo 1',
    imageUrl: '../../assets/bg-1.png'

  };

  event: any = {
    title: 'Bible Study',
    day: 'Every Sunday',
    date: 'October 15, 2023',
    description: 'Join for weekly bible study.',
    imageUrl: '../../assets/bg-1.png',
    order: 0
  }


  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }


}
