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
