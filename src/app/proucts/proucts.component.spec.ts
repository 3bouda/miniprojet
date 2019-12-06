import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctsComponent } from './proucts.component';

describe('ProuctsComponent', () => {
  let component: ProuctsComponent;
  let fixture: ComponentFixture<ProuctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
