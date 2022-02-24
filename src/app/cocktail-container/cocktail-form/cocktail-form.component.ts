import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from 'src/app/shared/interfaces/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm! : FormGroup;
  constructor(private fb : FormBuilder, private cocktailservice : CocktailService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.cocktailForm = this.fb.group({
      name : ['', Validators.required],
      img : ['', Validators.required],
      description : ['', Validators.required],
      ingredients : this.fb.array([Validators.required]),
    })
  }

  public get ingredients(){
    return this.cocktailForm.get('ingredients') as FormArray;
  }
  addIngredient() : void {
    this.ingredients.push(this.fb.group({
      name : ['',Validators.required],
      quantity : [0, Validators.required]
    }))

  }

  submit():void{
    this.cocktailservice.addCocktail(this.cocktailForm.value)
    this.router.navigate(['..'], {relativeTo : this.activatedRoute})
  }

}
