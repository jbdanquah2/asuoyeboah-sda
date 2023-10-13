import { Component } from '@angular/core';

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {

  events = [
    {
      title: 'Bible Study',
      day: 'Every Sunday',
      date: 'October 15, 2023',
      description: 'Join for weekly bible study.',
      imageUrl: '../../assets/bg-1.png',
      order: 0
    },
    {
      title: 'Sabbath Worship',
      day: 'Every Saturday',
      date: 'October 10, 2023',
      description: 'We welcome you to our weekly worship service.',
      imageUrl: '../../assets/bg-2.png',
      order: 6
    },
    {
      title: 'Prayer Service',
      day: 'Every Wednesday',
      date: 'October 15, 2023',
      description: 'Prayer makes the impossible possible. Join us for weekly prayer service.',
      imageUrl: '../../assets/bg-4.jpg',
      order: 3
    },
    {
      title: 'Vesper Service',
      day: 'Every Friday',
      date: 'October 15, 2023',
      description: "Let's join with the angels in singing praises to welcome the Sabbath",
      imageUrl: '../../assets/bg-5.jpeg',
      order: 5
    }
  ];

}
