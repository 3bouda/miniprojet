import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctComponent } from './prouct.component';

describe('ProuctComponent', () => {
  let component: ProuctComponent;
  let fixture: ComponentFixture<ProuctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
