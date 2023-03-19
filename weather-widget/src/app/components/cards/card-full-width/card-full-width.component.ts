import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HourlyCardData } from 'src/app/model/cards-data';
import { Icon } from 'src/app/model/weather-data';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-card-full-width',
  templateUrl: './card-full-width.component.html',
  styleUrls: ['./card-full-width.component.css']
})
export class CardFullWidthComponent implements OnInit {
  @Input() datas$!: Observable<HourlyCardData[]>;
  
  constructor(private iconService: IconService) { }

  ngOnInit(): void {
  }

  getIcon(id: Icon) {
    return this.iconService.getIcon(id);
  }


}
