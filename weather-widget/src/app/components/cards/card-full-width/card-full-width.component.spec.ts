import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFullWidthComponent } from './card-full-width.component';

describe('CardFullWidthComponent', () => {
  let component: CardFullWidthComponent;
  let fixture: ComponentFixture<CardFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
