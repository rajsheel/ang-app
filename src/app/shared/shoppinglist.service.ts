import { EventEmitter } from '@angular/core';
import { Ingredients } from './ingredients.model';


export class shoppingListService {

	ingredient: Ingredients;
	

	ingredientAdded = new EventEmitter<Ingredients>();

	addIngredient (ingredient: Ingredients) {

		this.ingredient = ingredient;
		//console.log("inside shoppinglist service");

	}

}