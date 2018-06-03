import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTripComponent } from './end-trip.component';

describe('EndTripComponent', () => {
  let component: EndTripComponent;
  let fixture: ComponentFixture<EndTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
