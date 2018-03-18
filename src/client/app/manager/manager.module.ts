import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerPostListComponent } from './manager-post-list/manager-post-list.component';
import { ManagerToolbarComponent } from './manager-toolbar/manager-toolbar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ComponentListComponent } from './new-post/component-list/component-list.component';
import { ComponentEntryComponent } from './new-post/component-list/component-entry/component-entry.component';
import { EditFieldsDialogComponent } from './new-post/component-list/component-entry/edit/fields-edit.dialog';
import { TextComponent } from './new-post/component-list/component-entry/edit/input/text/text.component';
import { InputDirective } from './new-post/component-list/component-entry/input.directive';
import { UrlComponent } from './new-post/component-list/component-entry/edit/input/url/url.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublishedPostComponent } from './manager-post-list/published-post/published-post.component';
import { NotPublishedPostComponent } from './manager-post-list/not-published-post/not-published-post.component';
import { TagSelectComponent } from './new-post/tag-select/tag-select.component';

@NgModule({
  imports: [ManagerRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [ManagerComponent, ManagerPostListComponent, ManagerToolbarComponent, NewPostComponent,
    ComponentListComponent, ComponentEntryComponent, EditFieldsDialogComponent, TextComponent,
    InputDirective, UrlComponent, PublishedPostComponent, NotPublishedPostComponent, TagSelectComponent],
  exports: [ManagerComponent],
  entryComponents: [EditFieldsDialogComponent, TextComponent, UrlComponent]
})
export class ManagerModule {
}
