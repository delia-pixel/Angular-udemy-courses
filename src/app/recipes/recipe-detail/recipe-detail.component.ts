import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input('recipeDetail') recipeDetail: Recipe;
  
  toggle = false;
  constructor(
    private recipeService:RecipesService
  ) { }
  
  addIngredientToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeDetail.ingredients);
   }

}
