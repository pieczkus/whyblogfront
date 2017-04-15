import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerPostListComponent } from './manager-post-list/manager-post-list.component';
import { ManagerToolbarComponent } from './manager-toolbar/manager-toolbar.component';

@NgModule({
  imports: [ManagerRoutingModule, SharedModule],
  declarations: [ManagerComponent, ManagerPostListComponent, ManagerToolbarComponent],
  exports: [ManagerComponent],
})
export class ManagerModule {
}
