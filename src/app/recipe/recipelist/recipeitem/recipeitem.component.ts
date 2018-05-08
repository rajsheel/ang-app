import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../../shared/recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {


  @Input() recipe: Recipe;

   @Output() recipeDetails = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onClickItem() {

  	this.recipeService.recipeClicked.emit(this.recipe);

  }

}
