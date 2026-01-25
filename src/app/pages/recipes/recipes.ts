import { Component, inject, OnInit } from '@angular/core';
import { ApiRecipe, Recipe } from '../../types/api-recipe';
import { ExampleRecipe } from '../../services/example-recipe';
import { Card } from '../../shared/component/card/card';
import { Button } from '../../shared/component/button/button';


@Component({
  selector: 'app-recipes',
  imports: [Card, Button],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes implements OnInit {
  recipes!: Recipe[];
  private readonly exampleRecipe = inject(ExampleRecipe);


   
  private  minId = Math.floor(Math.random() * 30);
  private  maxId = this.minId + 9;

  

  ngOnInit() {
    if (this.maxId > 30) {
    this.minId = 21;
    this.maxId = 30;
  }
    this.exampleRecipe.fetchRecipes()
      .subscribe({
        next: (data: ApiRecipe) => {
          this.recipes = data.recipes.slice(this.minId, this.maxId);
          console.log('Fetched recipes:', this.recipes);
        },
        error: (error: any) => {
          console.error('Error fetching recipes:', error);
        }
      });
  }

}
