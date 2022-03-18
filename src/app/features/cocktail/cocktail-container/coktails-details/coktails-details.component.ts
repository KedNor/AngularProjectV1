import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cocktail } from 'src/app/shared/interfaces/cocktails.interface';
import { CocktailService } from 'src/app/shared/interfaces/services/cocktail.service';
import { PanierService } from 'src/app/shared/interfaces/services/panier.service';

@Component({
  selector: 'app-coktails-details',
  templateUrl: './coktails-details.component.html',
  styleUrls: ['./coktails-details.component.scss'],
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  public subscription: Subscription;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.cocktailService
        .getCocktail(+paramMap.get('index'))
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }

  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
