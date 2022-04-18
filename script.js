document.querySelector('button').addEventListener('click',getCocktail)

function getCocktail(){
    let littyCocktail = document.querySelector('button').value

  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php' , {
  
       headers:{
           'accept':  'application/json'
       }
   }).then(res => res.json()) // parse response as JSON
   .then(data => {
       console.log(data.drinks)
       document.querySelector('img').src= data.drinks.strDrinkThumb
       document.querySelector('p').innerText=data.drinks.strIngredients
       document.querySelector('h6').innerText=data.drinks.strInstructions
   })
     
   
}