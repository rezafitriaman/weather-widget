import { Component, Input, OnInit } from '@angular/core';
import { SecondaryCardData } from 'src/app/model/cards-data';
import { Icon } from 'src/app/model/weather-data';
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
}
