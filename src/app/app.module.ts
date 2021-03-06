import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from './store/reducers/app.reducer';
import { HttpConfigInterceptor } from './_interceptor/httpconfig.interceptor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppService } from './admin/services/app.service';
import { PreventDoubleSubmitModule } from 'ngx-prevent-double-submission';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    PreventDoubleSubmitModule.forRoot(),
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    StoreModule.forRoot({
      applicationState: appReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton:true,
      progressBar:true,
      newestOnTop:true,
      maxOpened:1
    }),
    BrowserAnimationsModule,
    ToastContainerModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpConfigInterceptor, 
      multi: true 
    },
    AppService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }