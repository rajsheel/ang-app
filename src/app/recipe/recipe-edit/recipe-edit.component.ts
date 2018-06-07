import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl,FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipe: Recipe;
  recipeForm: FormGroup;



  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {

    this.route.params.
      subscribe(
        (param: Params) => {
          this.id = param['id'],
            this.editMode = param['id'] != null;
          this.initForm();
        }
      )


  }
  private onSubmit() {
    //console.log(this.recipeForm.value);
    //this.recipe.name = this.recipeForm.get('name').value;
    this.recipeService.addRecipe(this.recipeForm.value);
    this.router.navigate(['../'], {relativeTo: this.route});
    

  }

  private onAddIngredient() {

    (<FormArray>this.recipeForm.get('ingredients')).push(

      new FormGroup({

        'name': new FormControl(null,[Validators.required]),
        'amount': new FormControl(null,[Validators.required])
      }))}

  private onRemoveIngredient(index: number) {

    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }

  private onCancel() {

    this.recipeForm.reset();
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  private initForm() {

    let ingredientsCtrl = new FormArray([]);

    if (this.editMode) {

      this.recipe = this.recipeService.getRecipeById(this.id);
      
      if (this.recipe['ingredients']) {

        for (let ingredient of this.recipe.ingredients) {
          //console.log(this.recipe.ingredients);
          ingredientsCtrl.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,[Validators.required]),
              'amount': new FormControl(ingredient.amount,[Validators.required])
            })
          )
        }
      }
    } else {

      this.recipe = {
        name: '',
        description: '',
        imagePath: '',
        ingredients: []
      }
    }

    this.recipeForm =
      new FormGroup(
        {
          'name': new FormControl(this.recipe.name,[Validators.required]),
          'description': new FormControl(this.recipe.description, [Validators.required]),
          'imagePath': new FormControl(this.recipe.imagePath, [Validators.required]),
          'ingredients': ingredientsCtrl


        }
      )
  }
}
