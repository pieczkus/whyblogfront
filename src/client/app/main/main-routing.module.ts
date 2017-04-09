import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { PostComponent } from '../post/post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: MainComponent},
      {path: 'post/:id', component: PostComponent}
    ])
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
