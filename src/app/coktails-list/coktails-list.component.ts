import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktails.interface';

@Component({
  selector: 'app-coktails-list',
  templateUrl: './coktails-list.component.html',
  styleUrls: ['./coktails-list.component.scss'],
})
export class CoktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://unsplash.com/photos/gtDYwUIr9Vg',
      description:
        'Le mojito, prononcé [moxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche',
    },
    {
      name: 'Cosmoplolitain',
      img: 'https://unsplash.com/photos/gStbrZn8Ew0',
      description:
        'Le Cosmopolitain est un cocktail de couleur rose acidulé. Pour surprendre vos amis, préparez la version avec du jus de cranberry blanc. Vous obtiendrez logiquement un White Cosmopolitain.',
    },
    {
      name: 'Blue Lagoon',
      img: 'https://unsplash.com/photos/2DV8y3LU7Ac',
      description:
        'Vous pouvez décorer le bord du verre avec une rondelle de citron Reconnaissable entre tous les cocktails grâce à sa couleur bleu vif, le Blue Lagoon se déguste frais. Vous pouvez donc rafraîchir le verre avant d y verser le cocktail.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
