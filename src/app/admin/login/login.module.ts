import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

const pageRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(pageRoutes),
        SharedModule,
        Ng4LoadingSpinnerModule
    ],
    declarations: [
        LoginComponent,
    ],
    entryComponents: []
})
export class LoginModule { }