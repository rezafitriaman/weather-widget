import { Component, Input, OnInit } from '@angular/core';
import { SecondaryCardData, ValueData } from 'src/app/model/cards-data';
import { Icon, Rain, Snow } from 'src/app/model/weather-data';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent implements OnInit {
  @Input() data!: SecondaryCardData;
  constructor(private iconService: IconService) { }

  ngOnInit(): void {}

  getStyle(value: number | Snow | Rain | Icon) {
    return `transform: rotate(${(value as number)}deg)`;
  }

  getIcon(id: string ) {
    return this.iconService.getIcon((id as Icon));
  }

  getDate(num: number | Snow | Rain | Icon) {
    return (num as number * 1000);
  }

  snowOrRain(item: ValueData) {
    return (item.value as Snow | Rain)['1h'];
  }
}