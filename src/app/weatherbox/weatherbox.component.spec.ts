import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherboxComponent } from './weatherbox.component';

describe('WeatherboxComponent', () => {
  let component: WeatherboxComponent;
  let fixture: ComponentFixture<WeatherboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
