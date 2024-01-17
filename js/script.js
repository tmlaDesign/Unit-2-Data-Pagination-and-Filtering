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

const studentList = document.querySelector('ul');


function showStudents(arr) {
   let students = '';
      for (let i = 0 ; i < arr.length; i++) {
         students += `<li class="student-item cf">
         <div class="student-details">
         <img class="avatar" src="${arr[i].picture.large}" alt="${arr[i].name.first}">
         <h3>${arr[i].name.first}</h3>
         <span class="email">${arr[i].email}</span>
         </div>
         <div class="joined-details">
         <span class="date">${arr[i].registered.date}</span>
         </div>
         </li>`;
      }
   return students;

}





console.log(showStudents(data));

studentList.insertAdjacentHTML('beforeend', showStudents(data));
/*
Create the addPagination function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
