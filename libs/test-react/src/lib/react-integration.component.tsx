import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactLabel } from './react.component';

@Component({
  selector: 'react-integration-test',
  template: `
    <div></div>
  `,
  styles: [``]
})
export class AngularReactLabel implements AfterViewInit {

  constructor(private hostRef: ElementRef) { }

  ngAfterViewInit(): void {
    const hostElement = this.hostRef.nativeElement;
    const LabelToShow = () => (
      // Actual use here, might include data-binding in a real world scenario
      <ReactLabel></ReactLabel>
    );
    ReactDOM.render(<LabelToShow />, hostElement);
  }

}
