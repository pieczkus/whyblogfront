import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { LoginComponent } from '../shared/login/login.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'manager', component: ManagerComponent, canActivate: [AuthGuard]},
      {path: 'manager/new', component: NewPostComponent, canActivate: [AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
}
