import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoktailsListComponent } from './cocktail-container/coktails-list/coktails-list.component';
import { CocktailsDetailsComponent } from './cocktail-container/coktails-details/coktails-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { SelectedDirective } from './shared/interfaces/directives/selected.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES} from './app.routes';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { PanierService } from './shared/interfaces/services/panier.service';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HeaderComponent,
    CoktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PanierService],
})
export class AppModule {}
