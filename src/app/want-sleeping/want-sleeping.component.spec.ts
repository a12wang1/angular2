import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantSleepingComponent } from './want-sleeping.component';

describe('WantSleepingComponent', () => {
  let component: WantSleepingComponent;
  let fixture: ComponentFixture<WantSleepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantSleepingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantSleepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
