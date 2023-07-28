import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  
  constructor(
    private shoppingListService: ShoppingListService
  ) {}

  addShoppingItem(ingredient: Ingredients) {    
    this.shoppingListService.onIngredientAdded(ingredient);
    
  }
}
