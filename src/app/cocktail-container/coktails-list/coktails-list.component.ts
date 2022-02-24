import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktails.interface';

@Component({
  selector: 'app-coktails-list',
  templateUrl: './coktails-list.component.html',
  styleUrls: ['./coktails-list.component.scss'],
})
export class CoktailsListComponent implements OnInit {
  @Input() public cocktails?: Cocktail[];

  constructor() {}

  ngOnInit(): void {}

}
