import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

	ingredients: Ingredients [] = [
		new Ingredients('Apple' , 5),
		new Ingredients('Chicken', 2)
	]

  constructor() { }

  ngOnInit() {
  }

}
