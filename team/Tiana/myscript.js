// //run this code once the page fully loads . can do it this way instead of in the html
// window.onload = function() {
//     //get all elements with class "list-item"
//     const items = document.getElementsByClassName("list-item");
//     // for each item attach a click event listener
//     for (let item of items) {
//         item.addEventListener("click", function() {
//             listItemClick(item); //call function when clicked
//         });
//     }
// }

//this function toggles the "selected" class
function listItemClick(item) {
    console.log(item.classList); //can use classlist to get an array of classes attached to that element
    //if selected, unselect, if unselected, select
    item.classList.toggle("selected");

    //get the topping ID from the data attribute
    const toppingKey = item.getAttribute("data-topping");
    const toppingImg = document.getElementById("topping-" + toppingKey);

    if(!toppingImg) return; //if no image, skip

    // show or hide topping image based on selection
    if (item.classList.contains("selected")) {
        toppingImg.style.display = "block";
    } else {
        toppingImg.style.display = "none";
    }

}

//called when "select none" button is clicked
function selectNoneClick() {
    console.log('select none');
    const allItems = document.getElementsByClassName("list-item");
    for(let item of allItems){
        item.classList.remove("selected"); //remove selected class from all
        const toppingKey = item.getAttribute("data-topping");
        const toppingImg = document.getElementById("topping-" + toppingKey);
        if (toppingImg) toppingImg.style.display = "none";
    }
}

// called when "select all" button is clicked
function selectAllClick() {
    console.log('select all');
    const allItems = document.getElementsByClassName("list-item");
    for(let item of allItems){
        item.classList.add("selected"); //add selected class to all
        const toppingKey = item.getAttribute("data-topping");
        const toppingImg = document.getElementById("topping-" + toppingKey);
        if (toppingImg) toppingImg.style.display = "block";
    }
}