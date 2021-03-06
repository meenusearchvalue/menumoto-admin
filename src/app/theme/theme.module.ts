import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme/theme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent} from '../theme/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,

  ],
  declarations: [
    ThemeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class ThemeModule { }
