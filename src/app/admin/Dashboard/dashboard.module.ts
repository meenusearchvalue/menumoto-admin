import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { DashboardrouterComponent } from './dashboardrouter/dashboardrouter.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const pageRoutes: Routes = [
    {
        path: "",
        component: DashboardrouterComponent,
        children: [

            { path: '', component: DashboardComponent },
        ],data: { moduleId: 1 }

    }
];

@NgModule({
    imports: [
        CommonModule,
        Ng4LoadingSpinnerModule,
        RouterModule.forChild(pageRoutes),
        SharedModule,
        NgxPaginationModule,
        FormsModule, NgbModule,
        ReactiveFormsModule
       
    ],
    declarations: [
        DashboardComponent,
        DashboardrouterComponent,
        
        
    ],

    entryComponents: [],
})
export class DashboardModule { }