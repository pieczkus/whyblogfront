import { AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { PostComponentField } from '../../post-component-field';
import { InputComponent } from './input.component';
import { InputDirective } from './input.directive';

@Component({
  moduleId: module.id,
  templateUrl: 'fields-edit.dialog.html',
  styleUrls: ['fields-edit.dialog.css']
})
export class EditFieldsDialogComponent implements AfterViewInit, OnDestroy {

  fields: PostComponentField[] = [];
  @ViewChild(InputDirective) inputHost: InputDirective;

  constructor(public dialogRef: MdDialogRef<EditFieldsDialogComponent>,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  loadComponent() {

    let viewContainerRef = this.inputHost.viewContainerRef;
    viewContainerRef.clear();


    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);



    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<InputComponent>componentRef.instance).field = adItem.data;
  }

  // chooseWarehouse() {
  // if (this.selectedWarehouse && this.selectedWarehouse != '') {
  //   this.dialogRef.close(this.selectedWarehouse);
  // }
  // }

}
