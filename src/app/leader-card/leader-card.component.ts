import {Component, Input} from '@angular/core';

@Component({
  selector: 'leader-card',
  templateUrl: './leader-card.component.html',
  styleUrls: ['./leader-card.component.scss']
})
export class LeaderCardComponent {

  @Input() photo: any;


}
