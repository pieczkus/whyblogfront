import {
  AfterContentInit,
  AfterViewInit, Compiler, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input,
  ModuleWithComponentFactories,
  NgModule,
  OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'wb-post-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  animations: [
    trigger('coverState', [
      state('inactive', style({opacity: 1})),
      state('active', style({opacity: 1})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class BodyComponent implements AfterContentInit {

  @Input() body: string;
  @ViewChild('bodyContainer', {read: ViewContainerRef}) bodyContainer: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private compiler: Compiler) {
  }

  ngAfterContentInit(): void {
    this.compileTemplate();
  }

  compileTemplate() {

    let metadata = {
      selector: `runtime-component-sample`,
      template: this.body
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.bodyContainer.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class BodyComponent {
        name: string = 'Denys';
      };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({imports: [CommonModule], declarations: [decoratedCmp]})
    class RuntimeComponentModule {
    }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}
