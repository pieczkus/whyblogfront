import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule, MatIconModule, MatOptionModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatSelectModule, MatDialogModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule, MatIconModule, MatOptionModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatSelectModule, MatDialogModule]
})
export class BlogMaterialModule {

}
