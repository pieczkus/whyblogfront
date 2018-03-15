import { Component, Input } from '@angular/core';
import { PostComponent } from '../post-component';
import { EditFieldsDialogComponent } from './edit/fields-edit.dialog';
import { MatDialog } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'wb-component-entry',
  templateUrl: 'component-entry.component.html',
  styleUrls: ['component-entry.component.css'],
})
export class ComponentEntryComponent {

  @Input() component: PostComponent;
  @Input() seq: number;

  constructor(public dialog: MatDialog) {
  }

  openFieldsDialog() {
    const dialogRef = this.dialog.open(EditFieldsDialogComponent, {
      height: '400px',
      width: '600px',
      disableClose: true
    });
    dialogRef.componentInstance.fields = this.component.fields;
  }
}
