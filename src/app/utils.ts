import {DatePipe} from "@angular/common";

const datePipe = new DatePipe('en-US');

export function formatAMTime(time: any) {
  const timeParts = time.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return datePipe.transform(date, 'hh:mm a');
}
