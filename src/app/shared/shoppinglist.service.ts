import { EventEmitter } from '@angular/core';
import { Ingredients } from './ingredients.model';


export class shoppingListService {

	private ingredient: Ingredients[] = [];
	

	ingredientAdded = new EventEmitter<Ingredients[]>();

	addIngredient (ingredient: Ingredients) {

		this.ingredient.push(ingredient);
		this.ingredientAdded.emit(this.ingredient.slice());
		// var str = JSON.stringify(ingredient)
		// console.log("inside shoppinglist service"+ str);

	}
    
    getIngredients () {

    	return this.ingredient.slice();
    }
}