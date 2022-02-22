import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CoktailsDetailsComponent } from "./cocktail-container/coktails-details/coktails-details.component";
import { PanierContainerComponent } from "./panier-container/panier-container.component";

export const routes : Routes = [
  {path : "", redirectTo: "cocktails", pathMatch :"full"},
  {path : "cocktails", component: CocktailContainerComponent,
  children :[
    {
    path: 'index', component : CoktailsDetailsComponent
  },
  {path : '', redirectTo: '0', pathMatch: 'full'}
],
},
  {path : "panier", component: PanierContainerComponent},
];


