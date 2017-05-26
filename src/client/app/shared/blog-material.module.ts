import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdInputModule, MdOptionModule, MdProgressSpinnerModule, MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCardModule, MdGridListModule, MdInputModule, MdProgressSpinnerModule, MdIconModule, MdOptionModule,
    MdSidenavModule, MdToolbarModule],
  exports: [MdButtonModule, MdCardModule, MdGridListModule, MdInputModule, MdProgressSpinnerModule, MdIconModule, MdOptionModule,
    MdSidenavModule, MdToolbarModule]
})
export class BlogMaterialModule {

}
