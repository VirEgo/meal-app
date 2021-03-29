export class CookingService {

    static API: string = "6023c5399120411485bec4d98ac8f2e9";

    static async getRandomRecipe() {
        return await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${this.API}`)
            .then(res => res.json())
            .then(res => res.recipes[0])
            .catch(err => console.log(err)
            );


    }

    static async getSimilarRecipe(recipeID: number) {
        let results = null;
        return await fetch(`https://api.spoonacular.com/recipes/${recipeID}/similar?apiKey=${this.API}`)
            .then(res => res.json())
            .then(res => {
                results = res;
                return results
            }
            )
    }
}