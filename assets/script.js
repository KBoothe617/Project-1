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

// Function for modal/form pop up when "Add New Recipe" button is clicked

// Function for form submission

// Function to display recipe on the sidebar

// Function to add a delete button for each recipe

// Function to sort recipes by cooking time

});