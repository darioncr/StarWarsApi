import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    StarshipListComponent,
    StarshipDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
