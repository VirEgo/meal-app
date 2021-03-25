import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent implements OnInit {
  constructor() { }
  ngOnInit() {

    this.getData()
  }
  private API: string = "6023c5399120411485bec4d98ac8f2e9";
  // public servings: number = 0;
  // public title: string = '';
  public recipe: any = {
  }

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
    this.recipeCardCover != undefined ? this.recipeCardCover.nativeElement.classList.toggle('recipe-card__cover--open') : null
    this.recipeCardContentContainer != undefined ? this.recipeCardContentContainer.nativeElement.classList.toggle('recipe-card__content-container--open') : null
    this.recipeCardInfo != undefined ? this.recipeCardInfo.nativeElement.classList.toggle('recipe-card__info--show') : null
    this.recipeCardDuration != undefined ? this.recipeCardDuration.nativeElement.classList.toggle('recipe-card__duration--show') : null
    this.recipeCardServings != undefined ? this.recipeCardServings.nativeElement.classList.toggle('recipe-card__servings--show') : null
  }
  showPreparations() {
    this.ingredientsTab != undefined ? this.ingredientsTab.nativeElement.classList.remove('active') : null;
    this.preparationsTab != undefined ? this.preparationsTab.nativeElement.classList.add('active') : null;
    this.recipeCardContentIngredients != undefined ? this.recipeCardContentIngredients.nativeElement.classList.remove('recipe-card__content--active') : null;
    this.recipeCardContentPreparations != undefined ? this.recipeCardContentPreparations.nativeElement.classList.add('recipe-card__content--active') : null;
  }
  showIngridients() {
    this.ingredientsTab != undefined ? this.ingredientsTab.nativeElement.classList.add('active') : null;
    this.preparationsTab != undefined ? this.preparationsTab.nativeElement.classList.remove('active') : null;
    this.recipeCardContentIngredients != undefined ? this.recipeCardContentIngredients.nativeElement.classList.add('recipe-card__content--active') : null;
    this.recipeCardContentPreparations != undefined ? this.recipeCardContentPreparations.nativeElement.classList.remove('recipe-card__content--active') : null;
  }

  getData() {
    const data = fetch(`https://api.spoonacular.com/recipes/random?apiKey=${this.API}`)
      .then(res => res.json())
      .then(res => {
        this.recipe = res.recipes[0];
        console.log(this.recipe);

        // this.createMeal(res.recipes[0])
      });

  }


  createMeal(recipe: any) {
    for (let key in recipe) {
      this.recipe[key] = recipe[key]
    }
  }

  parseHTML(string: string) {
    const parser = new DOMParser();
    let res = parser.parseFromString(string, 'text/html');
    return this.recipeCardDescription != undefined ? this.recipeCardDescription.nativeElement.innerHTML = res.body.innerHTML : null

  }

}
