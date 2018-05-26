import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  name: string;
  editMode: boolean = false;

  constructor( private route: ActivatedRoute,
  			   private router: Router) { }

  ngOnInit() {

  	this.route.params.subscribe((param: Params) => {

  		this.name = param['name'],
  		this.editMode = param['name'] != null;
  		console.log(this.editMode);

  	})

  }



}
