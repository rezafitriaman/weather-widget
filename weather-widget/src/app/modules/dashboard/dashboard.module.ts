import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HorizontalComponent } from 'src/app/components/navigation/horizontal/horizontal.component';
import { CardBaseComponent } from 'src/app/components/cards/card-base/card-base.component';
import { CardXsComponent } from 'src/app/components/cards/card-xs/card-xs.component';
import { CardSmComponent } from 'src/app/components/cards/card-sm/card-sm.component';
import { CardFullWidthComponent } from 'src/app/components/cards/card-full-width/card-full-width.component';
import { SearchComponent } from 'src/app/components/search/search.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    CardBaseComponent,
    CardXsComponent,
    CardSmComponent,
    CardFullWidthComponent,
    DashboardComponent,
    SearchComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class DashboardModule { }
