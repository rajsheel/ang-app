import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

	recipes: Recipe[] = [
       new Recipe("Test Recipe", "Test Recipe Desc","https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg")
        new Recipe("Test Recipe", "Test Recipe Desc","https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg")
         new Recipe("Test Recipe", "Test Recipe Desc","https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg")
	];

  constructor() { }

  ngOnInit() {
  }

}
