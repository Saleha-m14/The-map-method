  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

/* Using a for loop
let results = [];
let nums = [1, 2, 3, 4, 5, 6];
for(let num of nums){
  results.push(num * 2);
}
console.log(results);
*/



// Using map()
let nums = [1, 2, 3, 4, 5, 6];
const multiplyByTwo = function(num) {
  return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);



// Simplified w/ map()
const simplifiedMap = nums.map(function (num) {return num * 2});
console.log(simplifiedMap); 


// Simplfied w/ map() + arrow function
const simplifiedMapArrow = nums.map(num => num * 2);
console.log(simplifiedMapArrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
students[0].push(age: 21);
console.log(students[0]);
const studentsWithIds = students.map(student => [students.name, students.id]);
console.log(studentsWithIds);
