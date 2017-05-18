import {
  AfterContentInit,
  Component, ComponentFactoryResolver, Input, Type, ViewChild
} from '@angular/core';
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
export class BodyComponent implements AfterContentInit {

  @Input() components: PostBodyComponent[];
  @ViewChild(BodyComponentDirective) bodyHost: BodyComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterContentInit(): void {
    this.loadComponent();
  }

  loadComponent() {

    let viewContainerRef = this.bodyHost.viewContainerRef;
    viewContainerRef.clear();

    let self = this;
    this.components.forEach(function (c) {
      let componentFactory = self.componentFactoryResolver.resolveComponentFactory(
        self.resolveComponent(c.component));
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<BaseBodyComponent>componentRef.instance).parameters = self.convertToParameterMap(c.parameters);
    });
  }

  resolveComponent(name: string): Type<any> {
    if (name === 'ParagraphComponent') {
      return ParagraphComponent;
    } else if (name === 'BreakoutComponent') {
      return BreakoutComponent;
    } else if (name === 'QuoteComponent') {
      return QuoteComponent;
    } else if (name === 'YoutubeComponent') {
      return YoutubeComponent;
    } else {
      return ParagraphComponent;
    }
  }

  convertToParameterMap(objects: Object[]) {
    let parameters: Map<string, string> = new Map();
    for (let o of objects) {
      for (let property in o) {
        if (o.hasOwnProperty(property)) {
          parameters.set(property, (<any>o)[property]);
        }
      }
    }
    return parameters;
  }


}
