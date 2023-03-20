import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HorizontalComponent } from 'src/app/components/navigation/horizontal/horizontal.component';
import { CardBaseComponent } from 'src/app/components/cards/card-base/card-base.component';
import { CardXsComponent } from 'src/app/components/cards/card-xs/card-xs.component';
import { CardSmComponent } from 'src/app/components/cards/card-sm/card-sm.component';
import { CardFullWidthComponent } from 'src/app/components/cards/card-full-width/card-full-width.component';
import { SearchComponent } from 'src/app/components/search/search.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        WeatherService,
        HttpClient
      ],
      declarations: [ 
        DashboardComponent,
        CardBaseComponent,
        CardXsComponent,
        CardSmComponent,
        CardFullWidthComponent,
        SearchComponent,
        HorizontalComponent
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        MatProgressSpinnerModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});