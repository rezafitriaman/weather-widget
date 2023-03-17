import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardXsComponent } from './card-xs.component';

describe('CardXsComponent', () => {
  let component: CardXsComponent;
  let fixture: ComponentFixture<CardXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
