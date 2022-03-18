import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { CocktailsDetailsComponent } from './cocktail-container/coktails-details/coktails-details.component';

export const COCKTAIL_ROUTES: Routes = [
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: 'new', component: CocktailFormComponent },
      { path: ':index/edit', component: CocktailFormComponent },

      { path: ':index', component: CocktailsDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
];
