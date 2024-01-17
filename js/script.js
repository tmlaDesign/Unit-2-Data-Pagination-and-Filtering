/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



 // create two variables that will represent the index for the first and last student on the page

  // select the element with a class of `student-list` and assign it to a variable

  // set the innerHTML property of the variable you just created to an empty string

  // loop over the length of the `list` parameter
    // inside the loop create a conditional to display the proper students
      // inside the conditional:
        // create the elements needed to display the student information
        // insert the above elements

const studentList = document.querySelector('.student-list');
studentList.innerHTML = '';

function showPage(list, page) {
   
const startIndex = (page * 9) - 9;
const endIndex = page * 9

   
   let studentItem = '';
      for (let i = 0 ; i < list.length; i++) {

         if (i >= startIndex && i < endIndex) {
            studentItem += `<li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="${list[i].name.first}">
            <h3>${list[i].name.first}</h3>
            <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
            </div>
            </li>`;

         }
        
      }
      
   return studentItem;
   
}


/*
Create the addPagination function
This function will create and insert/append the elements needed for the pagination buttons
*/

const linkList = document.querySelector('.link-list');
linkList.innerHTML = '';



function addPagination(list) {
   // create a variable to calculate the number of pages needed
 const numOfPages = Math.ceil(list.length / 9);
   // select the element with a class of `link-list` and assign it to a variable
 
   // set the innerHTML property of the variable you just created to an empty string
 
   // loop over the number of pages needed
     // create the elements needed to display the pagination button
     // insert the above elements
let buttons = '';

  for (let i = 1; i <= numOfPages; i++) {

      buttons += `<li><button type="button">${i}</button></li>`

  }
 
 
   // give the first pagination button a class of "active"
 
   // create an event listener on the `link-list` element
     // if the click target is a button:
       // remove the "active" class from the previous button
       // add the active class to the clicked button
       // call the showPage function passing the `list` parameter and page to display as arguments
       return buttons;

 }




// Call functions
studentList.insertAdjacentHTML('beforeend', showPage(data, 1));
linkList.insertAdjacentHTML('beforeend', addPagination(data));

// let firstButton = document.querySelector('button');
let firstButton = document.getElementsByTagName('button')[0];
console.log(firstButton);
firstButton.className = 'active';


linkList.addEventListener("click", (e)  => {


if (e.target.tagName === 'BUTTON') {
   const activeButton = document.querySelector('.active');
   activeButton.className = '';
   e.target.className = 'active';
   
   console.log(showPage(data, e.target.textContent));
}

});
