import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { PostComponent } from '../post/post.component';
import { TagComponent } from '../tag/index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: MainComponent},
      {path: 'post/:title', component: PostComponent},
      {path: 'tag/:tag', component: TagComponent}
    ])
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
