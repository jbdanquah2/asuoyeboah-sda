import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Asuoyeboa SDA';

  users = [
    { name: 'John Doe', email: 'john@example.com', selected: false },
    { name: 'Jane Smith', email: 'jane@example.com', selected: false },
    { name: 'Alice Johnson', email: 'alice@example.com', selected: false }
  ];

  constructor() {
  }

  ngOnInit() { }

  onUserSelected(user:any) {
    console.log('User selected: ', user);
  }
  onDeletedUser(user:any) {
    console.log('Deleted user: ', user);
    this.users = this.users.filter(u => u.name !== user.name)
  }
}
