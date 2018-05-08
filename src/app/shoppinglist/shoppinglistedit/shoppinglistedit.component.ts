import { Component, OnInit, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import  {shoppingListService} from '../../shared/shoppinglist.service';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {

	@ViewChild('nameInput') ingredientNameInput : ElementRef;
	@ViewChild('amountInput') ingredientAmountInput : ElementRef;

	//@Output() ingredientInput = new EventEmitter<Ingredients>();

  constructor(private shoppingList : shoppingListService) { }

  ngOnInit() {
  }
  addIngredient() {
     
    const ingName = this.ingredientNameInput.nativeElement.value;
    const ingAmount = this.ingredientAmountInput.nativeElement.value;
    const ing = new Ingredients(ingName, ingAmount);
    //console.log(ing);
    this.shoppingList.addIngredient(ing);
    this.shoppingList.ingredientAdded.emit(ing);

  	
   // console.log(this.shoppingList.ingredient);


  }
}
