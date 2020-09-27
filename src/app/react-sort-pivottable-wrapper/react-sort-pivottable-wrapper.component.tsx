import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ReactSortPivottableWrapper } from './react-sort-pivottable-wrapper';

const containerElementName = 'reactSortPivottableWrapper';

@Component({
  selector: 'app-react-sort-pivottable-wrapper',
  template: `<div #${containerElementName}></div>`,
  styleUrls: ['./react-sort-pivottable-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactSortPivottableWrapperComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild(containerElementName, { static: false }) containerRef: ElementRef;
  @Input() public data: any;
  constructor() {}

  public ngOnChanges(_: SimpleChanges): void {
    this.render();
  }

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.render();
  }

  public ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render(): void {
    const { data } = this;
    console.log(this.containerRef.nativeElement);

    ReactDOM.render(
      <ReactSortPivottableWrapper data={data} />,
      this.containerRef.nativeElement
    );
  }
}
