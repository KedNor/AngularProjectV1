import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';

const routes: Routes = [
{ path: "", redirectTo: "cocktails", pathMatch: "full" },
{ path: "cocktails", component: CocktailContainerComponent },
{ path: "panier", component: PanierContainerComponent }

];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
