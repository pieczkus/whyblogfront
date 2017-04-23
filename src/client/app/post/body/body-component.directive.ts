import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bodyHost]',
})
export class BodyComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
