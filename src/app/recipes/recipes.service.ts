import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://iasbh.tmgrup.com.tr/78d2fd/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2021/09/30/hamburger-tarifi-evde-hamburger-nasil-yapilir-1633000765331.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('French Fries', 20),
        new Ingredient('Meat', 1),
      ]
    ),
    new Recipe(
      'Pizza',
      'Delicious pizza will make your eat fingers!',
      'https://cdn.yemek.com/mnresize/1250/833/uploads/2017/01/ev-usulu-pizza-yeni.jpg',
      [
        new Ingredient('Pepperoni', 1),
        new Ingredient('Pizza Bread', 1),
        new Ingredient('Sausage', 12),
      ]
    ),
  ];

  getRecipes() {
    // to return new array which is an exact copy of the one in this file
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) {}
}
