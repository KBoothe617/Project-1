// Declare modal variable and get the modal element by ID
const modal = document.getElementById("addRecipeModal");

// Declare btn variable and get the button element by ID that opens the modal
const btn = document.getElementById("addNewRecipe");

// Declare span variable and get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on "Add New Recipe" button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Function for form submission
const form = document.getElementById('recipeForm');
form.addEventListener('submit', function(event) {
    event.preventDefault (); // Prevents default form submission

// Retrieve values of form
const title = document.getElementById('title').value.trim();
const ingredients = document.getElementById('ingredients').value.trim();
const directions = document.getElementById('directions').value.trim();
const cookingTime = document.getElementById('cookingTime').value.trim();

   
// Validate and add to local storage
if(title && ingredients && directions && cookingTime) {
    const recipe = {
        name: title,
        ingredients: ingredients,
        directions: directions,
        cookingTime: cookingTime
    };

// Get existing recipes from local storage or initialize and emtpy array
const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
recipes.push(recipe);

// Save recipes to local storage
localStorage.setItem('recipes', JSON.stringify(recipes));

// Clear form
document.getElementById('recipeForm').reset();

// Display recipes
displayRecipes();

}
});

// Function to display recipes from local storage
function displayRecipes() {
    var recipeListDiv = document.getElementById('recipeList');
    recipeListDiv.innerHTML = '';

    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Sort recipes by their cooking time (quickest to longest)
// parseInt converts the cooking time values to integers to ensure correct sorting
recipes.sort((a, b) => parseInt(a.cookingTime) - parseInt(b.cookingTime));

// forEach loop interates through the sorted recipes array and construct HTML for each recipe card, which is appended to the recipeListDiv
recipes.forEach(function(recipe, index) {
    var recipeCard = `
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">${recipe.name}</h5>
          <h6 class="card-ingredients">Ingredients:</h6>
          <p class="card-text">${recipe.ingredients}</p>
          <h6 class="card-directions">Directions:</h6>
          <p class="card-text">${recipe.directions}</p>
          <p class="card-text"><strong>Cooking Time:</strong> ${recipe.cookingTime} minutes</p>
          <button type="button" class="btn btn-delete" onclick="deleteRecipe(${index})">Delete</button>
        </div>
      </div>
    `;
    recipeListDiv.innerHTML += recipeCard;
  });
}

// Function to delete a recipe
function deleteRecipe(index) {
    var recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    displayRecipes();
  }

//Initial display
//displayRecipes function is being called inside the DOMContentLoaded event listener to make sure that when page loads/reloads, recipes are correctly displayed
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes();
});

