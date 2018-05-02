import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

	ingredients: Ingredients [] = [];

  constructor() { }

  ngOnInit() {
  }
  addIngredientToList(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

}
