import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: "./admin/login/login.module#LoginModule" },
  { path: 'login', loadChildren: "./admin/login/login.module#LoginModule" },
  { path: 'theme', loadChildren: "./theme/theme.module#ThemeModule",data: { moduleId: '' }, canLoad: [] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      useHash: true, 
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }