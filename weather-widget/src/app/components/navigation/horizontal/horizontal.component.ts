import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css']
})
export class HorizontalComponent implements OnInit {
  links = ['Dashboard'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {}
}
