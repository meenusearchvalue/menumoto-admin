import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { RouterModule, Routes } from '@angular/router';
const pageRoutes: Routes = [
        {
            path: "",
            component: AlertsComponent,
            children: [
                { path: '', component: AlertsComponent },
            ]
        }
]
@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ]
})
export class AlertsModule { }
