"use strict";

window.onload = init;

function init(){
    const showMeTheJokesBtn = document.getElementById("showMeTheJokesBtn");
    showMeTheJokesBtn.onclick = showMeTheJokesBtnClicked;

    populateCategoriesDropdown();


}


function populateCategoriesDropdown(){
    //populate categories dropdown with distinct categories from the jokes array;
    let categories = getCategoriesArray();

    for(let category of categories){
        const categoriesSelect = document.getElementById("categoriesSelect");
        let newOption = new Option(category, category);
        categoriesSelect.appendChild(newOption);
    }

}

function getCategoriesArray(){
    let categories = [];
    for( let dadJoke of jokes.dadJokes){
        //console.log(dadJoke);
        if(categories.includes(dadJoke.category) != true){
            categories.push(dadJoke.category);
        }
    }

    //now I have my categories, lets sort them...

    categories.sort();
console.log(categories);
    return categories;
}


function showMeTheJokesBtnClicked(){
    //identify the selected category, and loop through and show those jokes!


}