import {
  AfterContentInit,
  AfterViewInit, Compiler, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input,
  ModuleWithComponentFactories,
  NgModule,
  OnInit, Type, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
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
      (<BaseBodyComponent>componentRef.instance).parameters = c.parameters;
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


}
