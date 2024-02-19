import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container3Component } from './container3.component';

describe('Container3Component', () => {
  let component: Container3Component;
  let fixture: ComponentFixture<Container3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Container3Component]
    });
    fixture = TestBed.createComponent(Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
