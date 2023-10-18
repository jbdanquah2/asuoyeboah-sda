import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoadingService} from '../services/loading.service';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {AsyncPipe, NgIf} from '@angular/common';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: false,

})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean>;

  @Input()
  detectLazyLoading = false;

  constructor(private loadingService: LoadingService,
              private router: Router,
              ) {

    this.loading$ = this.loadingService.loading$;

  }

  ngOnInit() {

    // this.loading$ = this.loadingService.loading$;

    // if (this.detectLazyLoading) {
    //   this.router.events
    //     .pipe(
    //       tap(event => {
    //         if (event instanceof RouteConfigLoadStart) {
    //           this.loadingService.loadingOn();
    //         } else if (event instanceof RouteConfigLoadEnd) {
    //           this.loadingService.loadingOff();
    //         }
    //       })
    //     )
    //     .subscribe();
    // }

  }

}
