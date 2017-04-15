import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { LoginComponent } from '../shared/login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'manager', component: ManagerComponent, canActivate: [AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
}
