import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "../shared/services/loading.service";
import {CookieService} from 'ngx-cookie-service';
// import {MatSnackBar} from "@angular/material/snack-bar";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private loading: LoadingService,
            ) {

    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {

  }

  async signInWithEmail(): Promise<void> {

    this.loading.loadingOn();

    const val = this.form.value;

    try {
      const res : any = await this.authService.signInWithEmail(val.email, val.password);

      if (res.user) {

        console.log('Successfully logged in!');
        console.log('res###: ', res.user);


        await this.router.navigate(['/admin']);

        await this.authService.addUserToDatabase(res.user);

        this.loading.loadingOff();

        this.authService.setShowLoginButton(true).then( res => console.log('awesome login compo'));
        // this.snackbar.open('Successfully logged in!', 'Close', {duration:3000});
      }

    } catch (error:any) {

      if (error.code == 'auth/network-request-failed') {
        // this.snackbar.open('Unable to login. Please  check your network!', 'Close', {duration:3000});
        this.loading.loadingOff();
        return;
      }

      this.loading.loadingOff();
      // this.snackbar.open('Failed to login!', 'Close', {duration:3000});
    }

  }

  async signInWithGoogle(): Promise<void> {

    this.loading.loadingOn();

    try {
      const res: any = await this.authService.signInWithGoogle()
      if (res.user) {

        console.log('Successfully logged in!');

        this.email  = res.user.email;
        this.password = res.user.uid;

        console.log('res###: ', res);

        await this.router.navigate(['/']);

        await this.router.navigate(['/admin']);

        await this.authService.addUserToDatabase(res.user);

        this.loading.loadingOff();
        // this.snackbar.open('Successfully logged in!', 'Close', {duration:3000});
      }
    } catch (error:any) {

      console.log('Error! ', error.message);

      this.loading.loadingOff();
      // this.snackbar.open('Failed to login!', 'Close', {duration:3000});
    }
  }

}
