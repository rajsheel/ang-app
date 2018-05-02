import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {

	@ViewChild('nameInput') ingredientNameInput : ElementRef;
	@ViewChild('amountInput') ingredientAmountInput : ElementRef;

	@Output() ingredientInput = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }
  addIngredient() {
     
    const ingName = this.ingredientNameInput.nativeElement.value;
    const ingAmount = this.ingredientAmountInput.nativeElement.value);
    const ing = new Ingredients(ingName, ingAmount);
    
  	this.ingredientInput.emit(ing);

  }
}
