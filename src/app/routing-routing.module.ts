import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'cocktails', component: CocktailContainerComponent },
  { path: 'panier', component: PanierContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
