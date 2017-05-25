import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdInputModule, MdOptionModule, MdProgressSpinnerModule, MdSidenavModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCardModule, MdGridListModule, MdInputModule, MdProgressSpinnerModule, MdIconModule, MdOptionModule,
    MdSidenavModule],
  exports: [MdButtonModule, MdCardModule, MdGridListModule, MdInputModule, MdProgressSpinnerModule, MdIconModule, MdOptionModule,
    MdSidenavModule]
})
export class BlogMaterialModule {

}
