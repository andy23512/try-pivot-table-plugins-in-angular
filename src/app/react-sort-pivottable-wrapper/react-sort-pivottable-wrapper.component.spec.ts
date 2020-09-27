import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactSortPivottableWrapperComponent } from './react-sort-pivottable-wrapper.component';

describe('ReactSortPivottableWrapperComponent', () => {
  let component: ReactSortPivottableWrapperComponent;
  let fixture: ComponentFixture<ReactSortPivottableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactSortPivottableWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactSortPivottableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
