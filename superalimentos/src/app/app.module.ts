import { FiltrarProductesPipe } from './pipes/filtrar-productes.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [AppComponent, FoodListComponent, FiltrarProductesPipe],
  imports: [BrowserModule, MatFormFieldModule, FormsModule, MaterialModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
