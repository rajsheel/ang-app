import { EventEmitter } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { Subject } from 'rxjs/Subject';


export class shoppingListService {

	private ingredient: Ingredients[] = [];
	

	ingredientChanged = new Subject<Ingredients[]>();
	ingredientEdited = new Subject<number>();
	// = new EventEmitter<Ingredients[]>();

	addIngredient (ingredient: Ingredients) {

		this.ingredient.push(ingredient);
		this.ingredientChanged.next(this.ingredient.slice());
		// var str = JSON.stringify(ingredient)
		// console.log("inside shoppinglist service"+ str);

	}
	addIngredients(ingredients: Ingredients[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredient.push(...ingredients);
    //this.ingredientAdded.next(this.ingredient.slice());
  }
    
    getIngredients () {

    	return this.ingredient.slice();
    }

    getIngredientByIndex(index : number) {
    	return this.ingredient[index];
    }

    deleteIngredientByIndex(index: number) {

        this.ingredient.splice(index,1);
        this.ingredientChanged.next(this.ingredient.slice());

    }

    editIngredientByIndex(index: number, ingredient: Ingredients) {

    	this.ingredient[index] = ingredient;
    	this.ingredientChanged.next(this.ingredient.slice());


    }


}