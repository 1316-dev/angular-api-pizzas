import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRecipe } from '../types/api-recipe';


const API_RECIPES_URL = environment.apiRecipesUrl;

@Injectable({
  providedIn: 'root',
})
export class ExampleRecipe {
  private readonly http: HttpClient = inject(HttpClient);

  fetchRecipes(): Observable<ApiRecipe> {
    return this.http.get<ApiRecipe>(API_RECIPES_URL);
  }
  
}
