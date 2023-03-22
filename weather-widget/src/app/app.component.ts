import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private snackBar: SnackbarService) {}

  ngOnInit(): void {
    this.snackBar.snackbarMessage.subscribe(message => {
      this.snackBar.showSnackBar(message);
    });
  }
}