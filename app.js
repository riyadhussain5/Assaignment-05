const resultFood = () =>{
    const searchHere = document.getElementById('search-here').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchHere}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = foods =>{

    const foodContainer = document.getElementById("food-container");


    
    foods.forEach(food => {
const foodDiv = document.createElement("div");


foodDiv.innerHTML = 

`<div id="foods" class="text-center">
  <img src="${food.strMealThumb}"  alt="...">
</div>



<div class="text-center">
            <p>${food.strMeal}</p>
</div>

<div class="text-center" >
        <button onclick = "ResultFood()"  id="button" class="btn btn-success">Get info</button>
</div>`

        foodContainer.appendChild(foodDiv);
       
        
    }
        
    )
}




//I TRIED A LOT BUT CAN NOT FIND THE RIGHT WAY TO DO NEXT INSTRUCTION.
//I NEED MORE LESSON ABOUT IT.