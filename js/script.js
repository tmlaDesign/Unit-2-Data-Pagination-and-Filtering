/*
These are global variables used in the functions below.
*/
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
let currentStudents = [];
let excludedStudents = [];

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   
const startIndex = (page * 9) - 9;
const endIndex = page * 9


studentList.innerHTML = '';

   
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
      
   studentList.insertAdjacentHTML('beforeend', studentItem);
   
}


/*
Create the addPagination function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

const numOfPages = Math.ceil(list.length / 9);
linkList.innerHTML = '';

let buttons = '';
  for (let i = 1; i <= numOfPages; i++) {
   // Setting the first button in the li to have an active class upon the initial building of the pagination buttons
   if (i === 1) {
      buttons += `<li><button type="button" class="active">${i}</button></li>`

   } else {
      buttons += `<li><button type="button">${i}</button></li>`
   }
   
   }
  
   linkList.insertAdjacentHTML('beforeend', buttons);
   
   // Setting and removing active class upon button click
   linkList.addEventListener("click", (e)  => {
      if (e.target.tagName === 'BUTTON') {
         const activeButton = document.querySelector('.active');
         activeButton.className = '';
         e.target.className = 'active';
      // Selecting which array to use within showPage function
               if(currentStudents.length < 1) {

                  showPage(data, e.target.textContent);

            } else {

               showPage(currentStudents, e.target.textContent);
            } 
      }
   })
 }


 /*
Create the searchBar
This function will create and insert a search bar.
*/

function studentSearchBar() {
   
 // Initial creation of search bar
   const searchBar = document.querySelector('.header');
   let html = ` <label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `
   searchBar.insertAdjacentHTML('beforeend', html);

   const searchInput = document.querySelector('#search');

   searchInput.addEventListener('keyup', () => {
    currentStudents = [];
    excludedStudents = [];
   const userInput = searchInput.value.toLowerCase();
   
   for(let i = 0; i < data.length; i++) {
    const studentFirstName = data[i].name.first.toLowerCase();
    const studentLastName = data[i].name.last.toLowerCase();
// Pushing matches from data array with user input into currentStudents array
         if(studentFirstName.includes(userInput) || studentLastName.includes(userInput)) {
            currentStudents.push(data[i]);
            
         } else if (!studentFirstName.includes(userInput) || !studentLastName.includes(userInput)) {

            excludedStudents.push(data[i]);
         }
      
   }

// Showing results of user search
   if (currentStudents.length > 0) {
         showPage(currentStudents, 1)
         addPagination(currentStudents)
         
      } else {
         const html = `<h3>No Results</h3>`
         studentList.innerHTML = html;
         linkList.innerHTML = ``;
      }

   });

}
   

// Call functions

showPage(data, 1);
addPagination(data);
studentSearchBar();


