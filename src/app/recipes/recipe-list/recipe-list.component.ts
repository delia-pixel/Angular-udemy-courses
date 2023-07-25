import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output('selectedRecipe') selectedRecipe= new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void { }
  
  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
