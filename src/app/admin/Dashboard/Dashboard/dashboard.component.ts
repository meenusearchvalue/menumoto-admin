import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Renderer } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from "@ngrx/store";
import { AppService } from './../../services/app.service';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./../../../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

  dashCount;
  currentUser;
  logType;
  page: number = 1;
  limit: number = 10;
  prodList: any = [];
  prodCount: number = 0;
  productListStatus: number = 0;
  searchString: string = "";
  searchForm: FormGroup;

  constructor(
    private render: Renderer,
    private ngxservice: NgxUiLoaderService,
    private store: Store<any>,
    private appService: AppService,
    private builder: FormBuilder,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService,
    private service: LoginService,
  ) { }

  ngOnInit() {
    this.searchForm = this.builder.group({
      search: [""]
    });
    this.getReviewsList();
    // let token = localStorage.getItem('menu_token');
    // if (token == null) {
    //   this.router.navigate(['/login']);
    // } else { }
    // this.store.pipe(select('applicationState')).subscribe(
    //   (appState: any) => {
    //     if (appState == undefined) {
    //     } else {
    //       this.currentUser = appState.user;
    //     }
    //   });
    // this.logType = localStorage.getItem("logType");
  }


  searchItem() {

    this.searchString = this.searchForm.value.search;
    this.getReviewsList();
  }
  getReviewsList() {

    this.spinnerService.show();
    this.service.userReviewAllData({ search: this.searchString }).pipe().subscribe(
      res => {
        console.log(res)
        this.prodList = res.data;
      },
    )
  }

  logout() {
    this.appService.logout();
    localStorage.clear();
  }
  actionReview(id,type) {
    this.service.userUpdateReview({id:id, status: type }).pipe().subscribe(
      res => {
        this.getReviewsList();
      },
    )

  }
  actionAllReview() {
    this.service.userUpdateAllReview({}).pipe().subscribe(
      res => {
        this.getReviewsList();
      },
    )

  }

}
