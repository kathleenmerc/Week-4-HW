let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// Part 1
// DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

const mainTitleEl = document.querySelector("#main-title")
mainTitleEl.textContent = "DOM TORETTO"

// Part 2
// Select the body and change the background-color to a new color of your choice.

const bodyEl = document.querySelector("body")
bodyEl.style.backgroundColor = "#2A52BE"

// Part 3
// Select DOM's Favorite Things list and remove the last list item.
const favoriteThingsEl = document.querySelector("#favorite-things")
favoriteThingsEl.removeChild(favoriteThingsEl.lastElementChild)
console.log(favoriteThingsEl)

