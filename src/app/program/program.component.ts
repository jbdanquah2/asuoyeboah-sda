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
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/bg-1.png',
      order: 0
    },
    {
      title: 'Sabbath Worship',
      day: 'Every Saturday',
      date: 'October 10, 2023',
      description: 'Join us for our weekly Sunday worship service.',
      imageUrl: '../../assets/bg-2.png',
      order: 6
    },
    {
      title: 'Prayer Service',
      day: 'Every Wednesday',
      date: 'October 15, 2023',
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/bg-4.jpg',
      order: 3
    },
    {
      title: 'Vesper Service',
      day: 'Every Friday',
      date: 'October 15, 2023',
      description: "Let's join with the angels in singing praises and welcome the Sabbath",
      imageUrl: '../../assets/bg-5.jpeg',
      order: 5
    },
    // {
    //   title: 'Kwame weds Akosua',
    //   day: 'Sunday',
    //   date: 'October 15, 2023',
    //   description: 'Help us make a positive impact in the community.',
    //   imageUrl: '../../assets/fotor_bird.jpg'
    // },
  ];

}
