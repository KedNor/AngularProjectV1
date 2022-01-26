import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktails.interface';
import { CocktailService } from '../shared/interfaces/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [];
  public selectedCocktail: this.cocktail
  constructor(private cocktailService : CocktailService) {}


  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  public chooseCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
