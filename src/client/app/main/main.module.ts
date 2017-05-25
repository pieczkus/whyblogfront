import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PinnedPostComponent } from './pinned-post/pinned-post.component';
import {
  PostComponent,
  BodyComponent,
  ParagraphComponent,
  BodyComponentDirective,
  BreakoutComponent,
  QuoteComponent,
  YoutubeComponent,
  PostNavComponent,
  PostTagsComponent,
  PostTagLinkComponent,
  CommentsComponent,
  CommentComponent,
  CommentEditorComponent
} from '../post/index';
import { ReactiveFormsModule } from '@angular/forms';
import { TagComponent } from '../tag/tag.component';
import { BlogMaterialModule } from '../shared/blog-material.module';

@NgModule({
  imports: [MainRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [MainComponent, PinnedPostComponent, PostComponent, BodyComponent, ParagraphComponent,
    BodyComponentDirective, BreakoutComponent, QuoteComponent, YoutubeComponent, PostNavComponent,
    PostTagsComponent, PostTagLinkComponent, CommentsComponent, CommentComponent, CommentEditorComponent,
    TagComponent],
  exports: [MainComponent, BlogMaterialModule],
  entryComponents: [ParagraphComponent, BreakoutComponent, QuoteComponent, YoutubeComponent]
})
export class MainModule {
}
