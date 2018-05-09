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
	addIngredients(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredient.push(...ingredients);
    this.ingredientAdded.emit(this.ingredient.slice());
  }
    
    getIngredients () {

    	return this.ingredient.slice();
    }
}