import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { Lazy2aComponent } from './lazy2a.component';
import { Lazy2bComponent } from './lazy2b.component';

@Component({
  template: ` lazy2 component `,
})
export class Lazy2Component implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactorya = this.cfr.resolveComponentFactory(Lazy2aComponent);
    const componentFactoryb = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.viewContainerRef.createComponent(componentFactorya);
    this.viewContainerRef.createComponent(componentFactoryb);
  }
}
