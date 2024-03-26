import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { FitnessComponent } from './pages/fitness/fitness.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    NutritionComponent,
    FitnessComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
