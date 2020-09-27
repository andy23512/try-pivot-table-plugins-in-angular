import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Vue from 'vue/dist/vue';
import { Pivot } from 'vue-pivot-table-plus';
import { Input } from '@angular/core';

@Component({
  selector: 'app-vue-pivottable-wrapper',
  template: `<div #vuePivottableWrapper></div>`,
  styleUrls: ['./vue-pivottable-wrapper.component.scss'],
})
export class VuePivottableWrapperComponent implements OnInit, AfterViewInit {
  @ViewChild('vuePivottableWrapper', { static: false })
  containerRef: ElementRef;
  @Input()
  public data: any;
  vm: any;

  constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    const { data } = this;
    this.vm = new Vue({
      el: this.containerRef.nativeElement,
      components: { Pivot },
      data() {
        return {
          data,
          fields: {
            availableFields: [],
            rowFields: [
              {
                getter: (item) => item.user,
                label: 'User',
              },
              {
                getter: (item) => item.time,
                label: 'Time',
              },
            ],
            colFields: [
              {
                getter: (item) => item.slide,
                label: 'Slide',
              },
            ],
            fieldsOrder: {},
          },
          reducer: (sum: number, item: any) => sum + item.value,
          defaultShowSettings: true,
          tableHeight: '400px',
        };
      },
      template: `
        <div>
          <Pivot
            :data="data"
            v-model="fields"
            :reducer="reducer"
            :default-show-settings="defaultShowSettings"
            >
          </Pivot>
        </div>
      `,
    });
  }
}
