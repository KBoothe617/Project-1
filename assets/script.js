// Function to get recipes from localStorage or return empty array
function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes')) || [];
}