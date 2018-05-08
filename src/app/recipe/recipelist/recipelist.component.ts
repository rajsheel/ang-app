import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

	recipes: Recipe[] = [];
   
  // @Output() recipeDetailsDisplay = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { 

    this.recipes = this.recipeService.getRecipes();

  }

  ngOnInit() {
  }
  
}
