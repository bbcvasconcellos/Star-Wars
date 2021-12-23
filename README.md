# Getting Started

### First things first! 
Let's start by cloning this repo:

`git clone` https://github.com/bbcvasconcellos/Star-Wars.git

Once you are done, simply run `yarn` or `npm` install to setup the packages.

# About this Project

It's a frontend project that consumes the **API** from https://swapi.dev/ to display all six first movies from the series, and the characters that make an appearance in each respective movie. The questions section is based on some logic exercises on questions presented on the **utils** folder.

It has three routes:   
 /home  
 /movies  
 /questions  

# The Stack Behind the Project

- `ReactJS` -> https://reactjs.org/
- `Sass` -> https://sass-lang.com/
- `vanilla JavaScript`


# Logic Questions

1. Find the smallest non negative and non zero integer that is not present inside a given array.   
  **Example:** `A = [1, 3, 6, 4, 1, 2]` the expected answer should be 5  
  **Example 2:** `A = [1, 2, 3]` the expected answer should be 4  
  **Example 3:** `A = [−1, −3]` the expected answer should be 1

2. Using the **Fibonacci Sequece**, find the sum of all even numbers smaller than 4 million. 

3. Find the winner of a cards game which consists of 2 players (A and B) and 5 cards for each. The cards value should respect the following order: 
  `A > K > Q > J > 0 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2`  
 Respecting the order and position in the array, the player that holds the highest valued cards win.   
   If player A wins, the function returns 1  
   If player B wins, the function returns -1  
   Tie returns 0  
   **Example: `A = [4, 'Q', 'J', 2, 5]` and `B = ['A', 0, 9, 3, 2]` -> returns 1**     
   **Example: `A = [5, 3, 'J', 6, 7]` and `B = ['K', 'Q', 0, 9, 4]` -> returns -1**      
   



