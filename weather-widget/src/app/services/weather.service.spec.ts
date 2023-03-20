import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient
      ],
      imports: [
        HttpClientTestingModule
      ]  
    })
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
