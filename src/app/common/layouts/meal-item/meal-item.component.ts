import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { CookServiceService } from '../../services/cook-service.service';
import { Observable } from 'rxjs';
import { RootObject, Recipe } from './../../../models/recipe.model';
@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent {
  @Input() recipe: Recipe;

  constructor() { }
  similarRecipe: any = [];
  similarRecipeID: number = 0;


  @ViewChild('recipeCardCover') recipeCardCover: ElementRef<HTMLElement> | undefined;
  @ViewChild('recipeCardInfo') recipeCardInfo: ElementRef<HTMLElement> | undefined;
  @ViewChild('recipeCardDuration') recipeCardDuration: ElementRef<HTMLElement> | undefined;
  @ViewChild('recipeCardServings') recipeCardServings: ElementRef<HTMLElement> | undefined;
  @ViewChild('recipeCardContentContainer') recipeCardContentContainer: ElementRef<HTMLElement> | undefined;
  @ViewChild('ingredientsTab') ingredientsTab: ElementRef<HTMLElement> | undefined;
  @ViewChild('preparationsTab') preparationsTab: ElementRef<HTMLElement> | undefined;
  @ViewChild('ingredientsContent') recipeCardContentIngredients: ElementRef<HTMLElement> | undefined;
  @ViewChild('preparationsContent') recipeCardContentPreparations: ElementRef<HTMLElement> | undefined;
  @ViewChild('recipeCardDescription') recipeCardDescription: ElementRef<HTMLElement> | undefined;





  showRecipeInfo() {
    toggleClassName(this.recipeCardCover, 'recipe-card__cover--open');
    toggleClassName(this.recipeCardContentContainer, 'recipe-card__content-container--open');
    toggleClassName(this.recipeCardInfo, 'recipe-card__info--show');
    toggleClassName(this.recipeCardDuration, 'recipe-card__duration--show');
    toggleClassName(this.recipeCardServings, 'recipe-card__servings--show');
  }

  showPreparations() {
    toggleClassName(this.ingredientsTab, 'active', 'remove');
    toggleClassName(this.preparationsTab, 'active', 'add');
    toggleClassName(this.recipeCardContentIngredients, 'recipe-card__content--active', 'remove');
    toggleClassName(this.recipeCardContentPreparations, 'recipe-card__content--active', 'add');
  }

  showIngridients() {

    toggleClassName(this.ingredientsTab, 'active', 'add');
    toggleClassName(this.preparationsTab, 'active', 'remove');
    toggleClassName(this.recipeCardContentIngredients, 'recipe-card__content--active', 'add');
    toggleClassName(this.recipeCardContentPreparations, 'recipe-card__content--active', 'remove');
  }

  parseHTML(string: string) {
    const parser = new DOMParser();
    let res = parser.parseFromString(string, 'text/html');
    return this.recipeCardDescription != undefined ? this.recipeCardDescription.nativeElement.innerHTML = res.body.innerHTML : null
  }

}


function toggleClassName(elem: ElementRef<HTMLElement> | undefined, className: string, method: 'add' | 'remove' | 'toggle' = 'toggle') {
  !!elem && elem.nativeElement.classList[method](className);
}
