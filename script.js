document.querySelector("button").addEventListener("click", getCocktail);

function getCocktail() {
  let littyCocktail = document.querySelector("button").value;

  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      let drink = data.drinks;
      console.log(drink);
      let instructions = `${
        drink[0].strInstructions ? drink[0].strInstructions : "No instructions"
      }`;
      

      let ingredients = `${drink[0].strIngredient1 &&
        drink[0].strIngredient1}, ${drink[0].strIngredient2 &&
        drink[0].strIngredient2}, ${drink[0].strIngredient3 &&
        drink[0].strIngredient3}, ${drink[0].strIngredient4 &&
        drink[0].strIngredient4}, ${drink[0].strIngredient5 &&
        drink[0].strIngredient5}`;
       

       document.getElementById("drinkNm").innerText=drink[0].strDrink;
      document.querySelector("img").src = drink[0].strDrinkThumb;

      document.getElementById("ing-list").innerText = ingredients;
      document.getElementById("ins-h").innerText = instructions;
      

      //was trying to do something complex below, but nah
      /*let ingrArray = ingredients.split(",");
      for (let i = 0; i < ingrArray.length; i++) {
        const element = ingrArray[i];
      }*/
    })
    .catch((err) => {
      console.log(err);
    });
}
