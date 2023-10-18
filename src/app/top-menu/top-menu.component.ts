import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {LoadingService} from "../shared/services/loading.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit{

  isLoggedIn: boolean = false;
  hideLoginButton: boolean = false;


  constructor(public authService: AuthService,
              private loading: LoadingService,
              private router: Router,
              private afAuth: AngularFireAuth) {
  }

  ngOnInit() {

    this.authService.isAuthenticated$
      .subscribe((value) => {
        this.isLoggedIn = value;
        console.log('isLoggedIn', this.isLoggedIn);
      })

  }

  async logOut() {

    this.isLoggedIn = false;

    this.loading.loadingOn()

    await this.afAuth.signOut();

    this.loading.loadingOff();

    if (!this.isLoggedIn && this.checkIfOnAdminPage()) {
      this.hideLoginButton = true;
    }

    await this.router.navigate(['/']);
  }

  checkIfOnAdminPage() {
    return this.router.url === '/admin';
  }
}
