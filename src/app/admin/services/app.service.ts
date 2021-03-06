import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as AppActions from 'src/app/store/actions/app.actions';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class AppService {
  blocked: Subject<boolean> = new Subject();

  constructor(private router: Router,
    private store: Store<any>,
    @Inject(DOCUMENT) private document: any) {
  }

  logout() {
    localStorage.removeItem('menu_token');
    localStorage.clear();
    this.store.dispatch(new AppActions.UserLogout());
    this.router.navigate(['/login']); 
  }
  doblocked() {
    this.blocked.next(true);
  }

}
