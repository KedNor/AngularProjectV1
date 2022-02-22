import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Cocktail } from "src/app/shared/interfaces/cocktails.interface";
import { CocktailService } from "src/app/shared/interfaces/services/cocktail.service";
import { PanierService } from "src/app/shared/interfaces/services/panier.service";

@Component({
  selector: "app-coktails-details",
  templateUrl: "./coktails-details.component.html",
  styleUrls: ["./coktails-details.component.scss"]
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cocktail = this.cocktailService.getCocktail(+this.activatedRoute.snapshot.paramMap.get('index')!);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }

  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }
}
