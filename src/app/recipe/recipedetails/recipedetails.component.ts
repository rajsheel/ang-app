import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { shoppingListService } from '../../shared/shoppinglist.service';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {

	recipe: Recipe;
  recipeIndex: number;

  constructor(private shoppingList: shoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      //console.log(params);
      this.recipeIndex = params['id'];
      this.recipe = this.recipeService.getRecipeById(this.recipeIndex);

    });
  }
 addIngrediettoShoppingList() {

    this.shoppingList.addIngredients(this.recipe.ingredients);
    //this.shoppingList.ingredientAdded.emit(ingredient);

  }

  onEditRecipe() {
   //console.log("Inside Edit Recipe"+this.recipe);
    //this.recipeService.recipeChanged.next(this.recipe);
    this.router.navigate(['edit'], {relativeTo: this.route});


  }

  onDeleteRecipe() {

    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(['../'], {relativeTo: this.route});


  }
}
