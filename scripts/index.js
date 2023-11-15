"use strict";



window.onload = init;

const jokesContainer = document.getElementById("jokesContainer");
const categoriesSelect = document.getElementById("categoriesSelect");
const table = document.getElementById("winningTicketsTbl");

function init() {
    const showMeTheJokesBtn = document.getElementById("showMeTheJokesBtn");
    showMeTheJokesBtn.onclick = showMeTheJokesBtnClicked;

    populateCategoriesDropdown();
    loadWinningTicketsTable();


}


function loadWinningTicketsTable() {

    // loop through the array
    let numWinningTickets = winningTickets.length;
    
    for (let i = 0; i < numWinningTickets; i++) {

        addNewRow(winningTickets[i].tixNum, winningTickets[i].prize, winningTickets[i].expires);

    }


}

function addNewRow(ticketNumber, prizeAmount, expires){
            // Create an empty <tr> element and add it to the last
        // position of the table
        let row = table.insertRow(-1);
        // Create new cells (<td> elements) and add text
        let cell1 = row.insertCell(0);
        cell1.innerHTML = ticketNumber;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "$" + prizeAmount.toFixed(2);
        let cell3 = row.insertCell(2);
        cell3.innerHTML = expires;
}

    function populateCategoriesDropdown() {
        //populate categories dropdown with distinct categories from the jokes array;
        let categories = getCategoriesArray();

        for (let category of categories) {
            let newOption = new Option(category, category);
            categoriesSelect.appendChild(newOption);
        }

    }

    function getCategoriesArray() {
        let categories = [];
        for (let dadJoke of jokes.dadJokes) {
            //console.log(dadJoke);
            if (categories.includes(dadJoke.category) != true) {
                categories.push(dadJoke.category);
            }
        }

        //now I have my categories, lets sort them...

        categories.sort();
        console.log(categories);
        return categories;
    }

    function addJokeToContainer(joke) {
        // {
        //     "id": 1,
        //     "setup": "I'm reading a book on anti-gravity.",
        //     "punchline": "It's impossible to put down!",
        //     "category": "Science"
        //   }


        let accordionItemDiv = document.createElement("div");
        accordionItemDiv.className = "accordion-item";

        jokesContainer.appendChild(accordionItemDiv);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        accordionItemDiv.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button collapsed";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");

        let targetId = "flush-collapse-" + joke.id;

        btn.setAttribute("data-bs-target", "#" + targetId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", targetId);

        let btnTextNode = document.createTextNode(joke.setup);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = targetId;
        flushCollapseDiv.className = "accordion-collapse collapse"
        flushCollapseDiv.setAttribute("data-bs-parent", "#jokesContainer");

        let accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body";

        let accordionBodyTextNode = document.createTextNode(joke.punchline);

        accordionBody.appendChild(accordionBodyTextNode);

        flushCollapseDiv.appendChild(accordionBody);

        accordionItemDiv.appendChild(flushCollapseDiv);


    }

    function showMeTheJokesBtnClicked() {
        jokesContainer.innerHTML = "";

        //identify the selected category, and loop through and show those jokes!

        let selectedCategory = categoriesSelect.value;

        for (let dadJoke of jokes.dadJokes) {
            if (dadJoke.category == selectedCategory) {
                addJokeToContainer(dadJoke);
            }
        }

    }



    const winningTickets = [
        { tixNum: "1001001", expires: "2022-09-05", prize: 100000 },
        { tixNum: "1298711", expires: "2022-10-10", prize: 250000 },
        { tixNum: "1111122", expires: "2023-01-15", prize: 50000 },
        { tixNum: "1222233", expires: "2023-02-20", prize: 75000 },
        { tixNum: "1333344", expires: "2023-03-25", prize: 125000 },
        { tixNum: "1444455", expires: "2023-04-30", prize: 10000 },
        { tixNum: "1555566", expires: "2023-05-05", prize: 5000 },
        { tixNum: "1666677", expires: "2023-06-10", prize: 300000 },
        { tixNum: "1777788", expires: "2023-07-15", prize: 500000 },
        { tixNum: "1888899", expires: "2023-08-20", prize: 20000 },
        { tixNum: "1999900", expires: "2023-09-25", prize: 150000 },
        { tixNum: "2002002", expires: "2023-10-30", prize: 80000 },
        { tixNum: "2112112", expires: "2023-11-04", prize: 60000 },
        { tixNum: "2223222", expires: "2023-12-09", prize: 40000 },
        { tixNum: "2334333", expires: "2024-01-13", prize: 35000 },
        { tixNum: "2445444", expires: "2024-02-17", prize: 45000 },
        { tixNum: "2556555", expires: "2024-03-23", prize: 70000 },
        { tixNum: "2667666", expires: "2024-04-27", prize: 90000 },
        { tixNum: "2778777", expires: "2024-05-31", prize: 110000 },
        { tixNum: "2889888", expires: "2024-07-05", prize: 120000 },
        // ... additional entries can be added here
    ];
