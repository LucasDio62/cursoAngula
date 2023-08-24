import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasEstrututaisComponent } from './diretivas-estrututais.component';

describe('DiretivasEstrututaisComponent', () => {
  let component: DiretivasEstrututaisComponent;
  let fixture: ComponentFixture<DiretivasEstrututaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasEstrututaisComponent]
    });
    fixture = TestBed.createComponent(DiretivasEstrututaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
