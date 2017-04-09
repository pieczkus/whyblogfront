import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PinnedPostComponent } from './pinned-post/pinned-post.component';
import { PostComponent } from '../post/post.component';
import { BodyComponent } from '../post/body/body.component';

@NgModule({
  imports: [MainRoutingModule, SharedModule],
  declarations: [MainComponent, PinnedPostComponent, PostComponent, BodyComponent],
  exports: [MainComponent],
  providers: [NameListService]
})
export class MainModule { }
