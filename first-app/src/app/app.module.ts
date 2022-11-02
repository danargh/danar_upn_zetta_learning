import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZettaComponent } from './angular-day2/zetta.component';

@NgModule({
   declarations: [AppComponent, ZettaComponent],
   imports: [BrowserModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
