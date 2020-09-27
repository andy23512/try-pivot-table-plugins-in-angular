import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuePivottableWrapperComponent } from './vue-pivottable-wrapper.component';

describe('VuePivottableWrapperComponent', () => {
  let component: VuePivottableWrapperComponent;
  let fixture: ComponentFixture<VuePivottableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuePivottableWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuePivottableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
