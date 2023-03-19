import { Component, Input, OnInit } from '@angular/core';
import { DailyCardData } from 'src/app/model/cards-data';
import { Icon } from 'src/app/model/weather-data';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-card-xs',
  templateUrl: './card-xs.component.html',
  styleUrls: ['./card-xs.component.css']
})
export class CardXsComponent implements OnInit {
  @Input() data!: DailyCardData;
  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

  getIcon(id: Icon) {
    return this.iconService.getIcon(id);
  }
}
