import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectedDirective } from './shared/interfaces/directives/selected.directive';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { PanierService } from './shared/interfaces/services/panier.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CocktailModule } from './features/cocktail/cocktail.module';
import { PanierModule } from './features/panier/panier.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    CocktailModule,
    PanierModule,
  ],
  declarations: [AppComponent, HeaderComponent, SelectedDirective],
  bootstrap: [AppComponent],
  providers: [PanierService],
})
export class AppModule {}
