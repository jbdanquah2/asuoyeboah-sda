import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  showImage: boolean = false;

  photo: any;

  idx: number = 0;

  photos: any[] = [
    {
      title: 'Photo 1',
      imageUrl: '../../assets/bg-1.png'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/bg-2.png'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/bg-3.png'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/6.jpg'

    },
    {
      title: 'Photo 5',
      imageUrl: '../../assets/7.webp'
    },
    {
      title: 'Photo 6',
      imageUrl: '../../assets/8.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/bg-1.png'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/bg-2.png'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/bg-3.png'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/6.jpg'

    },
    {
      title: 'Photo 5',
      imageUrl: '../../assets/7.webp'
    },
    {
      title: 'Photo 6',
      imageUrl: '../../assets/8.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/bg-1.png'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/bg-2.png'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/bg-3.png'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/6.jpg'

    },
    {
      title: 'Photo 5',
      imageUrl: '../../assets/7.webp'
    },
    {
      title: 'Photo 6',
      imageUrl: '../../assets/8.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/bg-1.png'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/bg-2.png'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/bg-3.png'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/6.jpg'

    },
    {
      title: 'Photo 5',
      imageUrl: '../../assets/7.webp'
    },
    {
      title: 'Photo 6',
      imageUrl: '../../assets/8.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/bg-1.png'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/bg-2.png'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/bg-3.png'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/6.jpg'

    },
    {
      title: 'Photo 5',
      imageUrl: '../../assets/7.webp'
    },
    {
      title: 'Photo 6',
      imageUrl: '../../assets/8.jpeg'

    },
    {
      title: 'Photo 1',
      imageUrl: '../../assets/bg-1.png'

    },
    {
      title: 'Photo 2',
      imageUrl: '../../assets/bg-2.png'
    },
    {
      title: 'Photo 3',
      imageUrl: '../../assets/bg-3.png'

    },
    {
      title: 'Photo 4',
      imageUrl: '../../assets/6.jpg'

    },
    {
      title: 'Photo 5',
      imageUrl: '../../assets/7.webp'
    },
    {
      title: 'Photo 6',
      imageUrl: '../../assets/8.jpeg'

    },
  ]

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);

  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.showImage || event.key === 'Escape') {
        this.showImage = false;
    }

    if (event.key === 'ArrowLeft') {
      this.showPreviousImage();
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.showNextImage();
      event.preventDefault();
    }
  }

  toggleImageView(idx: number = 0, check: boolean = false) {

    if (idx < 0) {
       idx = this.photos.length - 1;
    }
    else if (idx >= this.photos.length - 1) {
      idx = 0;
    }

    console.log('current idx:', idx);

    this.photo = this.photos[idx];

    console.log('current photo:', this.photo)

    if (!check) {
      this.showImage = !this.showImage;
    }

    this.idx = idx;
  }

  showPreviousImage() {
    this.toggleImageView(this.idx-1, true);
  }

  showNextImage() {
    this.toggleImageView(this.idx+1, true);
  }
}
