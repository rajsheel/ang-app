import { Component, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredients } from '../../shared/ingredients.model';
import { shoppingListService } from '../../shared/shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {


  @ViewChild('f') form: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;


  ingredientEditedSubscription = new Subscription();

  constructor(private shoppingList: shoppingListService) { }

  ngOnInit() {

    this.ingredientEditedSubscription = this.shoppingList.ingredientEdited.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingList.getIngredientByIndex(index);
        this.form.setValue({
          name: this.shoppingList.getIngredientByIndex(index).name,
          amount: this.shoppingList.getIngredientByIndex(index).amount
        })
      });

  }

  ngOnDestroy() {
    this.ingredientEditedSubscription.unsubscribe();
  }
  
  addIngredient(form: NgForm) {

    const ingName = form.value.name;
    const ingAmount = form.value.amount;
    const ing = new Ingredients(ingName, ingAmount);

    if (this.editMode) {

      this.shoppingList.editIngredientByIndex(this.editedItemIndex, ing);
      this.editMode = false;
    } else {
      this.shoppingList.addIngredient(ing);

    }
    form.reset();

  }

  onDelete() {

    this.shoppingList.deleteIngredientByIndex(this.editedItemIndex);
    this.onClear();
  }

  onClear() {

    this.form.reset();
    this.editMode = false;
  }
}
