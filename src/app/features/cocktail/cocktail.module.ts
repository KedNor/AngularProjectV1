import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailsDetailsComponent } from './cocktail-container/coktails-details/coktails-details.component';
import { CoktailsListComponent } from './cocktail-container/coktails-list/coktails-list.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { COCKTAIL_ROUTES } from './cocktail.routes';

@NgModule({
  declarations: [
    CoktailsListComponent,
    CocktailsDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(COCKTAIL_ROUTES),
  ],
})
export class CocktailModule {}
