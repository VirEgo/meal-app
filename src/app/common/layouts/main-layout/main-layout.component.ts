import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { CookServiceService } from '../../services/cook-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private cookService: CookServiceService) { }

  randomRecipe$: Observable<Recipe[]> = this.cookService.getRandomRecipe();

  ngOnInit(): void {
  }

}
