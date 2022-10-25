let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

////////// Accessing DOM Elements (Querying) //////////

// Part 1:
// DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
const mainTitleEl = document.querySelector("#main-title")
mainTitleEl.textContent = "DOM TORETTO"


// Part 2:
// Select the body and change the background-color to a new color of your choice.
const bodyEl = document.querySelector("body")
bodyEl.style.backgroundColor = "#2A52BE"


// Part 3:
// Select DOM's Favorite Things list and remove the last list item.
const favoriteThingsEl = document.querySelector("#favorite-things")
favoriteThingsEl.removeChild(favoriteThingsEl.lastElementChild)
//console.log(favoriteThingsEl)


// Part 4:
// Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
const specialTitleEl = document.querySelectorAll(".special-title")
//console.log(specialTitleEl)

// using forEach method:
specialTitleEl.forEach( (title) => {
  title.style.fontSize = "2rem"
})

                                              // using for loop method:
                                              // for (let i = 0; i < specialTitleEl.length; i++){
                                              //   specialTitleEl[i].style.fontSize = "2rem"
                                              // }


// Part 5:
// Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
const liPastRacesEl = document.querySelectorAll("#past-races li")
liPastRacesEl[3].remove()
//console.log(liPastRacesEl)



////////// Creating New DOM Elements //////////

// Part 6:
// Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
const pastRacesEl = document.querySelector("#past-races")
let newCity = document.createElement("li")
newCity.textContent = "Barcelona"
pastRacesEl.append(newCity)
console.log(pastRacesEl)



// Part 7:
// Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
// Note: The directions say to make new <h2>, but I think they meant new <h1> to match the rest of each blog post.

const divMainEl = document.querySelector("div.main")
const newDiv = document.createElement("div")
newDiv.classList.add("blog-post")
newDiv.classList.add("purple")
console.log(newDiv)
newDiv.innerHTML = "<h1>Paris</h1> <p>I RACED AROUND THE EIFFEL TOWER!</p>" 
divMainEl.append(newDiv)



