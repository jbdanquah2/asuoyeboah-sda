import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit{

  @Input()
  event: any;

  constructor() {
  }

  ngOnInit() {
    console.log('events', this.event)
  }

}
