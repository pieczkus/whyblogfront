import {
  AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, ViewChild, Type,
  AfterContentInit
} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { PostComponentField } from '../../post-component-field';
import { InputComponent } from './input/input.component';
import { InputDirective } from './input.directive';
import { TextComponent } from './input/text/text.component';
import { UrlComponent } from './input/url/url.component';

@Component({
  moduleId: module.id,
  templateUrl: 'fields-edit.dialog.html',
  styleUrls: ['fields-edit.dialog.css']
})
export class EditFieldsDialogComponent implements AfterContentInit {

  fields: PostComponentField[] = [];
  @ViewChild(InputDirective) inputHost: InputDirective;

  constructor(public dialogRef: MdDialogRef<EditFieldsDialogComponent>,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterContentInit(): void {
    this.loadComponent();
  }

  loadComponent() {

    let viewContainerRef = this.inputHost.viewContainerRef;
    viewContainerRef.clear();

    let self = this;
    this.fields.forEach(function (f) {
      let componentFactory = self.componentFactoryResolver.resolveComponentFactory(
        self.resolveInputComponent(f.type));
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<InputComponent>componentRef.instance).field = f;
    });
  }

  saveFields() {
    this.dialogRef.close();
  }

  private resolveInputComponent(inputType: string): Type<any> {
    if (inputType === 'text') {
      return TextComponent;
    } else if (inputType === 'url') {
      return UrlComponent;
    } else {
      return TextComponent;
    }
  }

}
