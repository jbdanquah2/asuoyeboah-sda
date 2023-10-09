import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit{

  @Input()
  event: any;

  nextDate: any;

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {

  }

  ngOnInit() {
    console.log('events', this.event)

    this.nextDate = this.getNextDate(this.event.order);
  }

  getNextDate(order: number): any {

    const numOfWeekdays = 7;
    const today = new Date();
    const daysUntilNext = (order - today.getDay() + numOfWeekdays) % numOfWeekdays;
    const nextDate = new Date(today);

    nextDate.setDate(today.getDate() + daysUntilNext);

    const dayOfWeek = this.days[nextDate.getDay()];
    const day = nextDate.getDate();
    const month = this.months[nextDate.getUTCMonth()];
    const year = nextDate.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  }



}
