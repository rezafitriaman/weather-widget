import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiKeyInterceptor } from './services/api-key.interceptor';

import { SearchComponent } from './components/search/search.component';
import { CardFullWidthComponent } from './components/cards/card-full-width/card-full-width.component';
import { CardBaseComponent } from './components/cards/card-base/card-base.component';
import { CardSmComponent } from './components/cards/card-sm/card-sm.component';
import { CardXsComponent } from './components/cards/card-xs/card-xs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    CardBaseComponent,
    CardXsComponent,
    CardSmComponent,
    CardFullWidthComponent,
    SearchComponent,
    CardFullWidthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
