import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  text:any = 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog'

  photo: any =  {
    title: 'Photo 1',
    imageUrl: '../../assets/bg-1.png'

  };

  event: any = {
    title: 'Bible Study',
    day: 'Every Sunday',
    date: 'October 15, 2023',
    description: 'Join for weekly bible study.',
    imageUrl: '../../assets/bg-1.png',
    order: 0
  }


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

  }

  async createNewEvent() {
    // const eventId = this.db.createId()
    // return  await this.db.doc(`programs/${eventId}`).set(this.event);
  }


}
