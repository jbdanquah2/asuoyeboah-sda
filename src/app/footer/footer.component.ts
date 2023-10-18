import {AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterContentChecked {

  isAdminPage: boolean = false;

  year: number = 2023;

  constructor() {
  }

  ngOnInit() {
    this.year = this.getCurrentYear();

    this.isAdminPage = window.location.pathname.includes('admin');
  }

  ngAfterContentChecked() {
    this.isAdminPage = window.location.pathname.includes('admin');
  }

  getCurrentYear() {
    const date = new Date();

    return date.getFullYear();
  }

}
