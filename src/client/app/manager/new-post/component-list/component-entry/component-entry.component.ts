import { Component, ComponentFactoryResolver, Input, Output, Type, ViewChild, EventEmitter } from '@angular/core';
import { PostComponent } from '../post-component';
import { PostComponentService } from '../../../../shared/component/post-component.service';
import { InputDirective } from './input.directive';
import { UrlComponent } from './edit/input/url/url.component';
import { TextComponent } from './edit/input/text/text.component';
import { InputComponent } from './edit/input/input.component';

@Component({
  moduleId: module.id,
  selector: 'wb-component-entry',
  templateUrl: 'component-entry.component.html',
  styleUrls: ['component-entry.component.css'],
})
export class ComponentEntryComponent {

  @Input() component: PostComponent;

  @Output() componentChange = new EventEmitter<PostComponent>();

  @ViewChild(InputDirective) inputHost: InputDirective;

  selectedComponent: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private postComponentsService: PostComponentService) {
  }

  selectComponent(componentName: string) {
    this.selectedComponent = componentName;
    const c = this.postComponentsService.getComponent(this.selectedComponent);
    this.component.name = c.name;
    this.component.fields = c.fields;
    this.loadComponent();
  }

  getButtonColor(componentName: string): string {
    console.log('Color for ' + componentName + ' is ' + this.selectedComponent === componentName ? 'warn' : 'primary');
    return this.selectedComponent === componentName ? 'warn' : 'primary';
  }

  loadComponent() {

    const viewContainerRef = this.inputHost.viewContainerRef;
    viewContainerRef.clear();

    const self = this;

    this.component.fields.forEach(function (f) {
      const componentFactory = self.componentFactoryResolver.resolveComponentFactory(
        self.resolveInputComponent(f.type));
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<InputComponent>componentRef.instance).field = f;
    });
  }

  propagateComponentChange(): void {
    this.componentChange.emit(this.component);
  }

  private resolveInputComponent(inputType: string): Type<InputComponent> {
    if (inputType === 'text') {
      return TextComponent;
    } else if (inputType === 'url') {
      return UrlComponent;
    } else {
      return TextComponent;
    }
  }
}
