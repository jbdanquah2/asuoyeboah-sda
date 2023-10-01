import {Component, EventEmitter, Input, Output} from '@angular/core';

interface User {
  name: string;
  email: string;
  selected: boolean;
}
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {

  @Input()
  users: User[] = [];
  @Input()
  buttonLabel: string = 'Delete';
  @Input()
  title: string = 'Users';
  @Output()
  userSelected: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  userDeleted: EventEmitter<User> = new EventEmitter<User>();

  handleUserSelected(user: User) {
    user.selected = !user.selected;
    this.userSelected.emit(user);
  }

  handleUserDeleted(user: User) {
    user.selected = false;
    this.userDeleted.emit(user);
  }

}
