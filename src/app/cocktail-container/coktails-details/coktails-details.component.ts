import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/cocktails.interface';

@Component({
  selector: 'app-coktails-details',
  templateUrl: './coktails-details.component.html',
  styleUrls: ['./coktails-details.component.scss'],
})
export class CoktailsDetailsComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  constructor() {}
  ngOnInit(): void {
    console.log(this.cocktail);
  }
}
