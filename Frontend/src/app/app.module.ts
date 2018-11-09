import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GrowlModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }