import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule, MdOptionModule, MdProgressSpinnerModule,
  MdSelectModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCardModule, MdGridListModule, MdInputModule, MdProgressSpinnerModule, MdIconModule, MdOptionModule,
    MdSidenavModule, MdToolbarModule, MdListModule, MdSelectModule],
  exports: [MdButtonModule, MdCardModule, MdGridListModule, MdInputModule, MdProgressSpinnerModule, MdIconModule, MdOptionModule,
    MdSidenavModule, MdToolbarModule, MdListModule, MdSelectModule]
})
export class BlogMaterialModule {

}
