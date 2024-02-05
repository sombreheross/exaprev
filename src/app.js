"use strict";
import User from './User.js';
const userTab = [];

async function getUserData() {
    try {
        const USERPROFILE = await fetch("https://randomuser.me/api/?results=20");

        const USERDATA = await USERPROFILE.json();

        const sortedResults = USERDATA.results.sort((a, b) => a.name.last.localeCompare(b.name.last));

        sortedResults.forEach(user => {
            const newUser = new User(user.name.title, user.name.first, user.name.last, user.location.city, user.location.country, user.dob.age, user.email, user.picture.large);
            userTab.push(newUser);
            newUser.render();
        })
    } catch (error) {
        console.log("Couldn't render Users or reach API");
    }

}

getUserData();

const sortNameButton = document.querySelector('#sort--name');
const sortAgeButton = document.querySelector('#sort--age');

sortNameButton.addEventListener("click", (e)=> {
    if (!e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    sortAgeButton.classList.remove("selected");
    
    userTab.sort((a,b) => {
        return a.last.localeCompare(b.last);
    });

    userTab.forEach((user) => {
        user.render();
    });

} else {
    console.log("Alreaddy sorted by name");
}
})

sortAgeButton.addEventListener("click", (e)=> {
    if (!e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    sortNameButton.classList.remove("selected");
    
    userTab.sort((a,b) => {
        return a.age-b.age;
    });

    userTab.forEach((user) => {
        user.render();
    });

} else {
    console.log("Alreaddy sorted by age");
}
})