import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fifa15Component } from './fifa15.component';

describe('Fifa15Component', () => {
  let component: Fifa15Component;
  let fixture: ComponentFixture<Fifa15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fifa15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fifa15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
