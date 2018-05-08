import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../shared/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

	
  recipeDisplay: Recipe
	

  constructor(private recipeService: RecipeService) {
   
   this.recipeService.recipeClicked.subscribe((recipe: Recipe) => this.recipeDisplay = recipe);
   }

  ngOnInit() {
  }
  
}
