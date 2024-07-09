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
