import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {


  @Input() recipe: Recipe;

   @Output() recipeDetails = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClickItem() {

  	this.recipeDetails.emit();

  }

}
