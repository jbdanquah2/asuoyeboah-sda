import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {formatAMTime} from "../utils";

@Component({
  selector: 'program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit{


  @Input()
  zIndex: string = '';

  @Input()
  isAdmin: boolean = false;

  @Input()
  program: any;

  @Output()
  deleteProgram: EventEmitter<any> = new EventEmitter<any>();

  nextDate: any;

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(private datePipe: DatePipe) {

  }

  ngOnInit() {
    console.log('program', this.program)

    this.nextDate = this.getNextDate(this.program.order);

    this.nextDate = this.program.isPrime ? this.nextDate : this.formatDate(new Date(this.program.date));
  }

  getNextDate(order: number): any {

    const numOfWeekdays = 7;
    const today = new Date();
    const daysUntilNext = (order - today.getDay() + numOfWeekdays) % numOfWeekdays;
    const nextDate = new Date(today);

    nextDate.setDate(today.getDate() + daysUntilNext);

    return this.formatDate(nextDate);
  }

  formatDate(date: any) {

    const dayOfWeek = this.days[date.getDay()];
    const day = date.getDate();
    const month = this.months[date.getUTCMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`
  }

  formatTime(time: any) {
    return formatAMTime(time)
  }

  delete(event: any) {
    event.stopPropagation();
    this.deleteProgram.emit(this.program);
  }
}
