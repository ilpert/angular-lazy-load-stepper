import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  template: ` lazy1 component `,
})
export class Lazy1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
