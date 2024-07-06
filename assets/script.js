// Function to get recipes from localStorage or return empty array
function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes')) || [];
}

// Function to save recipes to localStorage
function saveRecipes(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Function to load DOM content
document.addEventListener('DOMContentLoaded', function() {

// Modal element will be declared here to get the modal

// Declaring variable for the "Add New Recipe" button that opens the modal
const addNewRecipeBtn = document.getElementById('addNewRecipe');

// Function for modal/form pop up when "Add New Recipe" button is clicked
addNewRecipeBtn.addEventListener('click', function() {
    
});


// Function for form submission
const form = document.getElementById('recipeForm');
form.addEventListener('submit', function(event) {
    event.preventDefault (); // Prevent default form submission

// Retrieve values of form
const title = document.getElementById('recipeTitle').value.trim();
const directions = document.getElementById('directions').value.trim();
const cookingTime = document.getElementById('cookingTime').value.trim();

// Close modal

})
});

// Function to display recipe on the sidebar

// Function to add a delete button for each recipe

// Function to sort recipes by cooking time

