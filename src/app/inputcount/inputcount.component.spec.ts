import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcountComponent } from './inputcount.component';

describe('InputcountComponent', () => {
  let component: InputcountComponent;
  let fixture: ComponentFixture<InputcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
