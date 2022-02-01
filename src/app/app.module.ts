import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoktailsListComponent } from './cocktail-container/coktails-list/coktails-list.component';
import { CoktailsDetailsComponent } from './cocktail-container/coktails-details/coktails-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { SelectedDirective } from './shared/interfaces/directives/selected.directive';
import { FormsModule } from '@angular/forms';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    CoktailsListComponent,
    CoktailsDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
