import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../types/api-recipe';
import { ExampleRecipe } from '../../services/example-recipe';
import { Card } from '../../shared/component/card/card';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [Card],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  private route = inject(ActivatedRoute);
  id: string | null = null;

  recipe!: Recipe;
  private readonly exampleRecipe = inject(ExampleRecipe);

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.exampleRecipe.fetchRecipeDetail(this.id)
      .subscribe({
        next: (data: Recipe) => {
          this.recipe = data;
          console.log('Fetched recipes:', this.recipe);
        },
        error: (error: any) => {
          console.error('Error fetching recipe details:', error);
        }
      });
  }
  }

