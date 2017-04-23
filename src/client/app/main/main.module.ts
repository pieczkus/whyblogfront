import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PinnedPostComponent } from './pinned-post/pinned-post.component';
import { PostComponent } from '../post/post.component';
import { BodyComponent } from '../post/body/body.component';
import { ParagraphComponent } from '../post/body/component/paragraph/paragraph.component';
import { BodyComponentDirective } from '../post/body/body-component.directive';

@NgModule({
  imports: [MainRoutingModule, SharedModule],
  declarations: [MainComponent, PinnedPostComponent, PostComponent, BodyComponent, ParagraphComponent, BodyComponentDirective],
  exports: [MainComponent],
  entryComponents: [ParagraphComponent]
})
export class MainModule {
}
