import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CocktailService } from 'src/app/shared/interfaces/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  public cocktail: Cockta;
  public cocktailForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: '',
    ingredients: this.fb.array([], Validators.required),
  });

  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.cocktail = this.cocktailService.getCocktail(index);
    });
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  public submit(): void {
    this.cocktailService.addCocktail(this.cocktailForm.value);
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
