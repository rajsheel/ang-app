import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipeitemComponent } from './recipe/recipelist/recipeitem/recipeitem.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
//import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: ShoppinglistComponent },
  { path: 'recipe', component: RecipeComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipedetailsComponent, pathMatch: 'full'},
    { path: ':id/edit', component: RecipeEditComponent}
  ]  },
  { path: 'shoppinglist', component: ShoppinglistComponent }
  // { path: 'users', component: UsersComponent, children: [
  //   { path: ':id/:name', component: UserComponent }
  // ] }
  // {
  //   path: 'servers',
  //   //canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: ServersComponent,
  //   children: [
  //   { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //   { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  // ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
