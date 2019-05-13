import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WangSleepComponent } from './wang-sleep.component';

describe('WangSleepComponent', () => {
  let component: WangSleepComponent;
  let fixture: ComponentFixture<WangSleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WangSleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WangSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
