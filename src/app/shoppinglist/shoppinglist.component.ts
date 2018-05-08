import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import  {shoppingListService} from '../shared/shoppinglist.service';


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
  providers:[shoppingListService]
})
export class ShoppinglistComponent implements OnInit {

	ingredients: Ingredients [] = [];

  constructor(private shoppingList : shoppingListService) { 

    this.shoppingList.ingredientAdded.subscribe((ing: Ingredients) => this.ingredients.push(ing));
    
  }

  ngOnInit() {
    
  }

  // console.log("Inside shoppinglist component got ingredient as"+this.shoppingList.ingredient);
  //   this.ingredients.push(this.shoppingList.ingredient);
  

}
