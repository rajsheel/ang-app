import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import  {shoppingListService} from '../shared/shoppinglist.service';
import { ActivatedRoute, Params, Router,NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
  
})
export class ShoppinglistComponent implements OnInit, OnDestroy {

	ingredients: Ingredients [] = [];

  ingredientsChangedSubscription = new Subscription();

  constructor(private shoppingList : shoppingListService,
              private route: ActivatedRoute) { 

    
    
  }

  ngOnInit() {

   // this.router.isActive().events.subscribe( event => console.log(event instanceof NavigationC));
   // this.route.params.subscribe( (param: Params) => {
   //   this.ingredients = this.shoppingList.getIngredients();
   // })

    this.ingredients = this.shoppingList.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingList.ingredientChanged.subscribe((ingredients: Ingredients[]) => this.ingredients = ingredients);
    
  }

  ngOnDestroy() {

    this.ingredientsChangedSubscription.unsubscribe();
  }

  onEditRecipe(index : number) {
    
    //console.log("Subscription NeXT "+ this.shoppingList.getIngredientByIndex(index).name);

    this.shoppingList.ingredientEdited.next(index);
    

  }

  // console.log("Inside shoppinglist component got ingredient as"+this.shoppingList.ingredient);
  //   this.ingredients.push(this.shoppingList.ingredient);
  

}
