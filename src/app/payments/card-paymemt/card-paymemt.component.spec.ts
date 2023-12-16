import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaymemtComponent } from './card-paymemt.component';

describe('CardPaymemtComponent', () => {
  let component: CardPaymemtComponent;
  let fixture: ComponentFixture<CardPaymemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPaymemtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPaymemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
