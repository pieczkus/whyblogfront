import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PinnedPostComponent } from './pinned-post/pinned-post.component';
import { PostComponent } from '../post/post.component';
import { BodyComponent } from '../post/body/body.component';
import { ParagraphComponent } from '../post/body/component/paragraph/paragraph.component';
import { BodyComponentDirective } from '../post/body/body-component.directive';
import { BreakoutComponent } from '../post/body/component/breakout/breakout.component';
import { QuoteComponent } from '../post/body/component/quote/quote.component';
import { YoutubeComponent } from '../post/body/component/youtube/youtube.component';

@NgModule({
  imports: [MainRoutingModule, SharedModule],
  declarations: [MainComponent, PinnedPostComponent, PostComponent, BodyComponent, ParagraphComponent,
    BodyComponentDirective, BreakoutComponent, QuoteComponent, YoutubeComponent],
  exports: [MainComponent],
  entryComponents: [ParagraphComponent, BreakoutComponent, QuoteComponent, YoutubeComponent]
})
export class MainModule {
}
