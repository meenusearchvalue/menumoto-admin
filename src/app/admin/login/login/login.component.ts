import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Store, select } from "@ngrx/store";
import * as AppActions from "src/app/store/actions/app.actions";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../../app.component.scss', './login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  submitted= false;
  forsubmitted= false;
  public loading: boolean= false;
  loginresult;
  forgotData;
  message: boolean= false;
  forsmessage: boolean= false;
  messages: string;
  forgotmessage: string;
  currentUser;
  subRes;
  Firemessage;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)])
  });



  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private service: LoginService,
    private spinnerService: Ng4LoadingSpinnerService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    
    if (localStorage.getItem('menu_token')) {
      this.router.navigate(['/theme']);
    }
  }



  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.spinnerService.show();
      this.service.checkLoginFunction({ email: this.loginForm.value.email, password: this.loginForm.value.password }).pipe().subscribe(
        res=> {
          this.loginresult= res;
          this.message= true;
          console.log(res.data)
          if (this.loginresult.status == 200) {
           
              var logdata= {              
                user_id: this.loginresult.data.id,
              }
              console.log(this.loginresult.data.auth_token);
              this.store.dispatch(new AppActions.UserSignup(logdata));

              localStorage.setItem("menu_token", this.loginresult.data.auth_token);
              this.router.navigate(['/theme/dashboard']);
            }
          } 
      )
    }
  }

 
  get f() {
    return this.loginForm.controls;
  }


}