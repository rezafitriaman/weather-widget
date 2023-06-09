import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSmComponent } from './card-sm.component';

describe('CardSmComponent', () => {
  let component: CardSmComponent;
  let fixture: ComponentFixture<CardSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSmComponent ],
      providers: [],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});