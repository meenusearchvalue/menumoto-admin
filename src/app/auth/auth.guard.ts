import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppActions from 'src/app/store/actions/app.actions';
import { AppService } from './../admin/services/app.service';
import { LoginService } from './../admin/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private appSer: AppService,
    private LoginService: LoginService
  ) { }

  // here route is used for get the route
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
      if (!localStorage.getItem('menu_token')) {
        localStorage.clear();
        this.router.navigate(['']);
        resolve(false);
      } else {
        this.LoginService.userProfileData().subscribe(res => {
          if (res.Success == true) {
            this.store.dispatch(new AppActions.UserSignup(res.Result));
            localStorage.setItem("menu_token", res.Result.token);
            resolve(true);
          } else {
            this.appSer.logout();
            resolve(false);
          }
        },(err) => {
          this.appSer.logout();
          resolve(false);
        }
      );
      }
    });
  }
}
