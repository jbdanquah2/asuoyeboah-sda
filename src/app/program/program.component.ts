import { Component } from '@angular/core';

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {

  events = [
    {
      title: 'Sunday Worship',
      date: 'October 10, 2023',
      description: 'Join us for our weekly Sunday worship service.',
      imageUrl: '../../assets/fotor_bird.jpg',
      index: 0
    },
    {
      title: 'Community Outreach',
      date: 'October 15, 2023',
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/fotor_bird.jpg',
      index: 1
    },
    {
      title: 'Youth Day Out',
      date: 'October 15, 2023',
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/fotor_bird.jpg'
    },
    {
      title: 'Pathfinders Sabbath',
      date: 'October 15, 2023',
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/fotor_bird.jpg'
    },
    {
      title: 'Games',
      date: 'October 15, 2023',
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/fotor_bird.jpg'
    },
    {
      title: 'Church Building works',
      date: 'October 15, 2023',
      description: 'Help us make a positive impact in the community.',
      imageUrl: '../../assets/fotor_bird.jpg'
    },
  ];

}
