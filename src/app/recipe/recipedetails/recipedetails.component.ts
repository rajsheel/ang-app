import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import  {shoppingListService} from '../../shared/shoppinglist.service';



@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {

	@Input() recipe: Recipe;

  constructor(private shoppingList: shoppingListService) { }

  ngOnInit() {
  }
  addIngrediettoShoppingList() {
    
    
    	this.shoppingList.addIngredients(this.recipe.ingredients);
    	//this.shoppingList.ingredientAdded.emit(ingredient);
	
  }
}
