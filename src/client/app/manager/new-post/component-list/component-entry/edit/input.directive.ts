import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[inputHost]',
})
export class InputDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
