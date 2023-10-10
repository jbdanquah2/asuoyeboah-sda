import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  year: number = 2023;

  constructor() {
  }

  ngOnInit() {
    this.year = this.getCurrentYear();
  }

  getCurrentYear() {
    const date = new Date();

    return date.getFullYear();
  }

}
