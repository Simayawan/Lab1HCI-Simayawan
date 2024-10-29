//Question 1

//while loop

let i = 10;

while(i < 40){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++
}

//for loop

for(let i = 10; i < 40; i++){
    if(i % 2 !== 0){
        console.log(i);
    }  
}

//Question 2

const MyArray = ["a", "b", "c", "d"]

function PrintReverse(array){
    for(i = array.length - 1; i >= 0; i--){
        console.log(array[i])
    }
}

PrintReverse(MyArray)

//Question 3

const movies = [
    { title: "In Bruges", rating: 5, hasWatched: true },
    { title: "Frozen", rating: 4.5, hasWatched: false },
    { title: "Mad Max Fury Road", rating: 5, hasWatched: true },
    { title: "Les Miserables", rating: 3.5, hasWatched: false }
  ];
  
  movies.forEach(movie => {
    const watchedStatus = movie.hasWatched ? "have watched" : "have not seen";
    console.log(`You ${watchedStatus} "${movie.title}" - ${movie.rating} stars`);
  });

//Question 4 

function isUniform(array) {
    if (array.length === 0) return true; 
  
    const firstElement = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== firstElement) {
        return false;
      }
    }
    return true;
  }
  
//Question 5

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Example
  console.log(sumArray([1, 2, 3]));        // Output: 6
  console.log(sumArray([10, 3, 10, 4]));   // Output: 27
  
//Question 6

function palindrome(str) {
    // Convert string to lowercase to make the check case-insensitive
    str = str.toLowerCase();
    
    // Reverse the string and compare it to the original
    const reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
  }
  
  // Example
  console.log(palindrome("racecar")); // Output: true
  console.log(palindrome("hello"));   // Output: false
  console.log(palindrome("Level"));   // Output: true (case-insensitive)
  
