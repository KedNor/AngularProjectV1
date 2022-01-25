import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoktailsListComponent } from './cocktail-container/coktails-list/coktails-list.component';
import { CoktailsDetailsComponent } from './cocktail-container/coktails-details/coktails-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CoktailsListComponent, CoktailsDetailsComponent, CocktailContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
