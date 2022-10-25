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
mainTitleEl.textContent = "DOM TORETTO'S SITE"


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
specialTitleEl.forEach((title) => {
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
newCity.textContent = "Paris"
pastRacesEl.append(newCity)
//console.log(pastRacesEl)


// Part 7:
// Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
// Note: The directions say to make new <h2>, but I think they meant new <h1> to match the rest of each blog post.
const divMainEl = document.querySelector("div.main")
const newDiv = document.createElement("div")
newDiv.classList.add("blog-post")
newDiv.classList.add("purple")
//console.log(newDiv)
newDiv.innerHTML = "<h1>Paris</h1> <p>I RACED AROUND THE EIFFEL TOWER!</p>"
divMainEl.append(newDiv)



////////// Event Handlers //////////

// Part 8:
// When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:
const randomQuote = function () {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

// Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
const quoteTitleEl = document.querySelector("#quote-title")
quoteTitleEl.addEventListener("click", randomQuote)


// Part 9:
// Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red
// Test it out!
// Hint: Remember the document node property .classList and the document node method .toggle().

const blogPostEls = document.querySelectorAll(".blog-post")
//console.log(blogPostEls)

blogPostEls.forEach((parentBlog) => {

  parentBlog.addEventListener("mouseenter", () => {
    // toggle off purple class and adding class red to each blog post
    parentBlog.classList.toggle("purple")
    parentBlog.classList.add("red")

    // checking mouseenter
    // console.log("PARENT BLOG MOUSE ENTER")
  })


  parentBlog.addEventListener("mouseout", () => {
    // toggle off class red in each blog post and toggle on class purple
    parentBlog.classList.toggle("red")
    parentBlog.classList.toggle("purple")

    // checking mouseout
    // console.log("PARENT BLOG MOUSE OUT")
  })


  // Need to iterate through all the children of each blog post, so that the children's background colors match the parentBlog's background colors, whenever mouseenters in or mouseouts of the children elements (h1 and p) of each parent element (class blog-post)
  const blogChildren = parentBlog.querySelectorAll("h1, p")   //querySelecting all children(h1 and p) of the blog-post class
  //console.log(blogChildren)

  blogChildren.forEach((blogChild) => {

    blogChild.addEventListener("mouseenter", () => {
      // adding class red to each parentBlog and to each child in a parentBlog
      parentBlog.classList.add("red")
      blogChild.classList.add("red")

      // checking mouseenter 
      // console.log("BLOG CHILDREN MOUSE ENTER")
    })

    blogChild.addEventListener("mouseout", () => {
      // toggle off class red in each parentBlog and in each child of a parentBlog
      parentBlog.classList.toggle("red")
      blogChild.classList.toggle("red")

      // checking mouseout
      // console.log("BLOG CHILDREN MOUSE OUT")
    })

  })

} //end of blogPostsEl forEach call back function
) //end of blogPostsEl forEach method

