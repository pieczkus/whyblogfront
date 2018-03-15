import { Component, ComponentFactoryResolver, Input, OnChanges, SimpleChanges, Type, ViewChild } from '@angular/core';
import { BodyComponentDirective } from './body-component.directive';
import { PostBodyComponent } from '../../shared/post/post-body-component';
import { ParagraphComponent } from './component/paragraph/paragraph.component';
import { BaseBodyComponent } from './component/base-component';
import { BreakoutComponent } from './component/breakout/breakout.component';
import { QuoteComponent } from './component/quote/quote.component';
import { YoutubeComponent } from './component/youtube/youtube.component';

@Component({
  moduleId: module.id,
  selector: 'wb-post-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css']
})
export class BodyComponent implements OnChanges {

  @Input() components: PostBodyComponent[];
  @ViewChild(BodyComponentDirective) bodyHost: BodyComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['components'].currentValue;
    if (change) {
      const viewContainerRef = this.bodyHost.viewContainerRef;
      viewContainerRef.clear();

      const self = this;
      this.components.forEach(function (c) {
        const componentFactory = self.componentFactoryResolver.resolveComponentFactory(
          self.resolveComponent(c.component));
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<BaseBodyComponent>componentRef.instance).parameters = self.convertToParameterMap(c.parameters);
      });
    }
  }

  resolveComponent(name: string): Type<any> {
    if (name === 'Paragraph') {
      return ParagraphComponent;
    } else if (name === 'Breakout') {
      return BreakoutComponent;
    } else if (name === 'Quote') {
      return QuoteComponent;
    } else if (name === 'YouTube') {
      return YoutubeComponent;
    } else {
      return ParagraphComponent;
    }
  }

  convertToParameterMap(objects: Object[]) {
    const parameters: Map<string, string> = new Map();
    for (const o of objects) {
      for (const property in o) {
        if (o.hasOwnProperty(property)) {
          parameters.set(property, (<any>o)[property]);
        }
      }
    }
    return parameters;
  }


}
