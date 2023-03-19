import { Component, Input, OnInit } from '@angular/core';
import { SecondaryCardData } from 'src/app/model/cards-data';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent implements OnInit {
  @Input() data!: SecondaryCardData;
  constructor() { }

  ngOnInit(): void {
  }

}
