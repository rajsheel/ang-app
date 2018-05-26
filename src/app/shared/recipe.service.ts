import { EventEmitter } from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {Ingredients} from './ingredients.model';

export class RecipeService {

	private recipe: Recipe[] = [
		new Recipe("Test Recipe 1", 
			"Test Recipe Desc 1",
			"https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg",
			[new Ingredients("Chicken" , 3),
			 new Ingredients("Lemon",2)]),
        new Recipe("Test Recipe 2", 
        	       "Test Recipe Desc 2",
        	       "https://d2gk7xgygi98cy.cloudfront.net/5673-3-large.jpg",
        	       [new Ingredients("Chickpea" , 200),
			 		new Ingredients("Lemon",1)]),
         new Recipe("Test Recipe 3", 
         	 	"Test Recipe Desc 3",
         	 	"https://www.chowstatic.com/assets/recipe_photos/29403_gluten_free_pizza_crust2.jpg",
         	 	 [new Ingredients("Pizza" , 1),
			 		new Ingredients("Pepporoni",10)])
	];

	//recipeClicked = new EventEmitter<Recipe>();

	addRecipe(recipe:Recipe) {

		this.recipe.push(recipe);
	}

	getRecipes() {

		return this.recipe.slice();
	}
    
    getRecipeByName(recipeName: string): Recipe {

    	return this.recipe.find(recipe => recipe.name === recipeName);
    }



}