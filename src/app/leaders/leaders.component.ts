import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent implements OnInit{


  photos: any[] = [
      {
        title: 'Photo 1',
        imageUrl: '../../assets/members/m-56.jpeg'

      },
      {
        title: 'Photo 2',
        imageUrl: '../../assets/members/m-50.jpeg'
      },
      {
        title: 'Photo 3',
        imageUrl: '../../assets/members/m-51.jpeg'

      },
      {
        title: 'Photo 4',
        imageUrl: '../../assets/members/m-52.jpeg'

      },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/members/m-53.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/members/m-33.jpeg'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/members/m-34.jpeg'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/members/m-35.jpeg'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/members/m-52.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/members/m-36.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/members/m-40.jpeg'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/members/m-41.jpeg'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/members/m-42.jpeg'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/members/m-43.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/members/m-44.jpeg'

    },
  ]

  photo: any = this.photos[0]

  nextPhotos: any[] = [];

  nextIndex: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  nextPhoto() {
    const index = this.photos.indexOf(this.photo)
    this.photo = this.photos[index + 1]
  }


}
