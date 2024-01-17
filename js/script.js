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
const studentList = document.querySelector('.student-list');

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

const linkList = document.querySelector('.link-list');

function addPagination(list) {

 const numOfPages = Math.ceil(list.length / 9);


linkList.innerHTML = '';
   
let buttons = '';

  for (let i = 1; i <= numOfPages; i++) {
   buttons += `<li><button type="button">${i}</button></li>`
   }
  
  linkList.insertAdjacentHTML('beforeend', buttons);

      
   let firstButton = document.getElementsByTagName('button')[0];
   firstButton.className = 'active';

   linkList.addEventListener("click", (e)  => {
   
      if (e.target.tagName === 'BUTTON') {
         const activeButton = document.querySelector('.active');
         activeButton.className = '';
         e.target.className = 'active';
         
         showPage(data, e.target.textContent);
      }
   })
 }


 /*
Create the `searchBar` function
This function will create and insert a search bar that can be used to find students in the list and adjust the number of students and pages shown based on input from user.
*/

function searchStudents(list) {

const searchBar = document.querySelector('.header');
let html = ` <label for="search" class="student-search">
<span>Search by name</span>
<input id="search" placeholder="Search by name...">
<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`
searchBar.insertAdjacentHTML('beforeend', html);

const searchInput = document.querySelector('#search');

console.log(searchInput);



// searchInput.addEventListener('keyup', () => {

//    const currentStudent = [];
//    const userInput = searchInput.value.toLowerCase();
   
//    for(let i = 0; i < list.length; i++) {
//       const studentName = list[i].name.toLowerCase();

//          if(studentName.includes(userInput)) {
//             currentStudent.push(list[i]);
            
//          }

//    }

//    if (currentStudent.length > 0) {
//       addPagination(currentStudent)
//       showPage(currentStudent, 1)
//    } else {
// const html = `<h3>No Results</h3>`
// studentList.innerHTML = html;
// linkList.innerHTML = ``;


//    }

// });

}


// Call functions
showPage(data, 1);
addPagination(data);
searchStudents(data);


