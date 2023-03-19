import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { PrimaryCardData } from 'src/app/model/cards-data';
import { Icon, Icon_map } from 'src/app/model/weather-data';
import { IconService } from 'src/app/services/icon.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card-base',
  templateUrl: './card-base.component.html',
  styleUrls: ['./card-base.component.css']
})
export class CardBaseComponent implements OnInit {
  @Input() data$!: Observable<PrimaryCardData>;

  constructor(private iconService: IconService) {

  }

  ngOnInit(): void {

  }

  getIcon(id: Icon) {
    return this.iconService.getIcon(id);
  }
}
