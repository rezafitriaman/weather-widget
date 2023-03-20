import { Component, Input, OnInit } from '@angular/core';
import { SecondaryCardData, ValueElement } from 'src/app/model/cards-data';
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

  ngOnInit(): void {
  }

  getStyle(value: any) {
    return `transform: rotate(${value}deg)`;
  }

  getIcon(id: string ) {
    return this.iconService.getIcon((id as Icon));
  }

  getDate(num: number | Snow[] | Rain[] | Icon) {
    return (num as number * 1000);
  }

  snowOrRain(item: ValueElement) {
    return (item.value as unknown as {"1h": number;})['1h'];
  }
}