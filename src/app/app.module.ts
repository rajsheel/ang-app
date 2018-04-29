import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app.header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipeComponent,
    RecipelistComponent,
    RecipedetailsComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
