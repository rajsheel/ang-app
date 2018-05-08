import { EventEmitter } from '@angular/core';
import {Recipe} from '../recipe/recipe.model';

export class RecipeService {

	recipe: Recipe[] = [new Recipe("Test Recipe 1", "Test Recipe Desc 1","https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg"),
        new Recipe("Test Recipe 2", "Test Recipe Desc 2","https://d2gk7xgygi98cy.cloudfront.net/5673-3-large.jpg"),
         new Recipe("Test Recipe 3", "Test Recipe Desc 3","https://www.chowstatic.com/assets/recipe_photos/29403_gluten_free_pizza_crust2.jpg")
	];

	recipeClicked = new EventEmitter<Recipe>();

	addRecipe(recipe:Recipe) {

		this.recipe.push(recipe);
	}

	getRecipes() {

		return this.recipe;
	}




}