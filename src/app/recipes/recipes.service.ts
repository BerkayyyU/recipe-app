import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Description For Recipe',
      'data:image/jpeg;base64,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'
    ),
    new Recipe(
      'A Test Recipe 2',
      'A Description For Recipe 2',
      'data:image/jpeg;base64,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'
    ),
  ];

  getRecipes() {
    // to return new array which is an exact copy of the one in this file
    return this.recipes.slice();
  }

  constructor() {}
}
