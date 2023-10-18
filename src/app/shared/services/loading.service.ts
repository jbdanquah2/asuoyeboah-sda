import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, delay, finalize, switchMap, tap} from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoader<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingSubject.next(true)),
        switchMap(() => obs$),
        tap(() => this.loadingSubject.next(false)),
        catchError(err => {
          this.loadingSubject.next(false);
          return throwError(err);
        })
      );
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingSubject.next(true)),
        switchMap(() => obs$),
        delay(100),
        finalize(() => {
          this.loadingSubject.next(false);
        })
      );
  }


  /*
  *
  * useful for giving the user some visual feedback, in situations where the operation is either too fast or is being performed in the background
  *
  * */

  showLoading(delayMs = 300) {
    return this.showLoader(of(null).pipe(delay(delayMs)));
  }


  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    setTimeout(() => {
      this.loadingSubject.next(false);
    },100);

  }


}
