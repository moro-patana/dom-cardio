// Make a div

const myDiv = document.createElement(`div`);

// add a class of wrapper to it

myDiv.classList.add(`wrapper`);

// put it into the body

document.body.appendChild(myDiv);

// make an unordered list

const unorderedList = document.createElement(`ul`);

// add three list items with the words "one, two three" in them

const firstList = document.createElement(`li`);
const secondList = document.createElement(`li`);
const thirdList = document.createElement(`li`);

firstList.textContent = `One`;
secondList.textContent = `Two`;
thirdList.textContent = `Three`;


// put that list into the above wrapper

unorderedList.appendChild(firstList);
unorderedList.appendChild(secondList);
unorderedList.appendChild(thirdList);

document.body.insertAdjacentElement(`afterbegin`, unorderedList);


// create an image

const image = document.createElement(`img`);

// set the source to an image

image.src = "./image/puppy.jpg";
// set the width to 250

image.setAttribute(`width`, `250`);

// add a class of cute

image.classList.add(`cute`);

// add an alt of Cute Puppy

image.setAttribute(`alt`, `Cute Pupy`);

// Append that image to the wrapper

myDiv.appendChild(image);
console.log(myDiv);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const myHTML = `
<div id="warning">
  <p>One</p>
  <p>Two</p>
</div>`;


unorderedList.insertAdjacentHTML('beforebegin', myHTML);



// add a class to the second paragraph called warning
// remove the first paragraph

const sel = document.querySelector(`#warning`);
sel.children[1].classList.add(`warning`);
sel.children[0].remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height

const generatePlayerCard = (name, age, height) => {
  return `<div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button type="button" class="delete">Delete</button>
            </div>`;
}


// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

const newDiv = document.createElement(`div`);
newDiv.classList.add(`cards`);


// Have that function make 4 cards

const firstCard = generatePlayerCard("bully", 3, "70 cm");
const secondCard = generatePlayerCard("dolly", 4, "70 cm");
const thirdCard = generatePlayerCard("Skinny", 3, "60 cm");
const fourthCard = generatePlayerCard("jeddy", 1, "30 cm");


// append those cards to the div

newDiv.innerHTML = firstCard + secondCard + thirdCard + fourthCard;

// put the div into the DOM just before the wrapper element

myDiv.insertAdjacentElement(`beforebegin`, newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!

const deleteButtons = document.querySelectorAll(`button`);

// make out delete function

const deleteFunction = ($event) => {
  $event.currentTarget.parentElement.remove();
};


// loop over them and attach a listener

deleteButtons.forEach((button) => {
  button.addEventListener(`click`, deleteFunction);
});
