import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

	recipes: Recipe[] = [];
   
  // @Output() recipeDetailsDisplay = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { 

    this.recipes = this.recipeService.getRecipes();

  }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe((recipes : Recipe[]) => {

      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();

  }
  
  onNewRecipe() {

    this.router.navigate(['new'], {relativeTo : this.route} );


  }
}
