import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import  {shoppingListService} from './shared/shoppinglist.service';
import { RecipeService} from './shared/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipeComponent,
    RecipelistComponent,
    RecipedetailsComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [shoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
