import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktails.interface';

@Component({
  selector: 'app-coktails-list',
  templateUrl: './coktails-list.component.html',
  styleUrls: ['./coktails-list.component.scss'],
})
export class CoktailsListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];
  @Input() selectedCocktail!: Cocktail;
  
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    console.log(index);
    this.changeCocktail.emit(index);
  }
}
