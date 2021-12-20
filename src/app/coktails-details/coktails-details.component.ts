import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktails.interface';

@Component({
  selector: 'app-coktails-details',
  templateUrl: './coktails-details.component.html',
  styleUrls: ['./coktails-details.component.scss'],
})
export class CoktailsDetailsComponent implements OnInit {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
    description:
      'Le mojito, prononcé [moxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
  };

  constructor() {}

  ngOnInit(): void {}
}
