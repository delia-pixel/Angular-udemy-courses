import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output('addItem') addItem= new EventEmitter<Ingredients>();
  constructor() {}

  addShoppingItem(ingredient: Ingredients) {
    console.log(ingredient);
    this.addItem.emit(ingredient);
  }
}
