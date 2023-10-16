import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import {BehaviorSubject, from, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  private showLoginButtonSubject = new BehaviorSubject<boolean>(true);
  showLoginButton$ = this.showLoginButtonSubject.asObservable();

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {

    this.afAuth.authState.subscribe((user) => {

      const isAuthenticated = !!user;
      this.isAuthenticatedSubject.next(isAuthenticated);

      if (isAuthenticated) {
        console.log('AuthService: User is logged in', user?.email, user?.displayName);
        from(this.router.navigate(['/task-list'])).subscribe();
      }
    });
  }

  get currentUser() {
    return this.afAuth.authState;
  }

  async setShowLoginButton(value: boolean) {
    this.showLoginButtonSubject.next(value);
  }

  async signInWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  async signUpWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // async addUserToDatabase(user: any) {
  //   const data: User = {
  //     id: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified,
  //   }
  //   return await this.db.firestore.doc(`users/${data.id}`).set(data)
  // }

}
