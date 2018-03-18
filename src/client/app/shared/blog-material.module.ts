import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatStepperModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule, MatIconModule, MatOptionModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatSelectModule, MatDialogModule, MatExpansionModule, MatStepperModule,
    MatChipsModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule, MatIconModule, MatOptionModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatSelectModule, MatDialogModule, MatExpansionModule, MatStepperModule,
    MatChipsModule]
})
export class BlogMaterialModule {

}
