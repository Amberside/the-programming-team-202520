function listItemClick(item) {
    console.log(item.classList);
    item.classList.toggle("selected");
}

function selectNoneClick() {
    console.log("select none")
    let allItems = document.getElementsByClassName("list-item");
    for(let item of allItems){
        item.classList.remove("selected");
    }
}

function selectAllClick() {
    console.log("select all")
    let allItems = document.getElementsByClassName("list-item");
    for(let item of allItems){
        item.classList.add("selected");
    }
}