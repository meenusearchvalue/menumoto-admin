import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment as ENV } from './../../../environments/environment';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  [x: string]: any;
  loggedIn: boolean = false;
  private options= {
    //  headers:this.headers,
  }

  data: any;
  comm: any;

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res) {
    return res || {};
  }

  checkLoginFunction(val): Observable<any> {
    return this.http.post<any>(`${ENV.API_URL}user/adminlogin`, val)
      .pipe(map(res => {
        this.data= res;
        return this.data;
      }))
  }

  userReviewAllData(val): Observable<any> {
    return this.http.post<any>(`${ENV.API_URL}restaurant/reviews`, val)
      .pipe(map(res => {
        this.data= res;
        return this.data;
      }))
  }
  userUpdateReview(val): Observable<any> {
    return this.http.post<any>(`${ENV.API_URL}restaurant/reviewStatus`, val)
      .pipe(map(res => {
        this.data= res;
        return this.data;
      }))
  }
  userUpdateAllReview(val): Observable<any> {
    return this.http.post<any>(`${ENV.API_URL}restaurant/updateAllReviewStatus`, val)
      .pipe(map(res => {
        this.data= res;
        return this.data;
      }))
  }
 

  userProfileData(): Observable<any> {
    return this.http.get<any>(`${ENV.API_URL}/user/adminprofile`).pipe(
      tap((res) => { }),
      map(this.extractData),
      catchError(this.handleError)
    );
  }


}