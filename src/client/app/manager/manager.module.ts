import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerPostListComponent } from './manager-post-list/manager-post-list.component';
import { ManagerToolbarComponent } from './manager-toolbar/manager-toolbar.component';
import {NewPostComponent} from './new-post/new-post.component';
import { ComponentListComponent } from './new-post/component-list/component-list.component';
import { ComponentEntryComponent } from './new-post/component-list/component-entry/component-entry.component';
import { EditFieldsDialogComponent } from './new-post/component-list/component-entry/edit/fields-edit.dialog';

@NgModule({
  imports: [ManagerRoutingModule, SharedModule],
  declarations: [ManagerComponent, ManagerPostListComponent, ManagerToolbarComponent, NewPostComponent,
    ComponentListComponent, ComponentEntryComponent, EditFieldsDialogComponent],
  exports: [ManagerComponent],
  entryComponents: [EditFieldsDialogComponent]
})
export class ManagerModule {
}
