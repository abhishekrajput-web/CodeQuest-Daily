// challenges.js
const challenges = [
  { 
    text: "Write a function to reverse a string.",
    difficulty: "Easy",
    hint: "Think about splitting and joining the string."
  },
  { 
    text: "Implement a function to check if a number is prime.",
    difficulty: "Medium",
    hint: "A number is prime if it's only divisible by 1 and itself."
  },
  { 
    text: "Create a function that returns the Fibonacci sequence up to a given number.",
    difficulty: "Medium",
    hint: "Use recursion or a loop to add the last two numbers."
  },
  { 
    text: "Write a function to check if a string is a palindrome.",
    difficulty: "Easy",
    hint: "A palindrome reads the same backward and forward."
  },
  { 
    text: "Build a function to find the maximum value in an array.",
    difficulty: "Easy",
    hint: "You could use a loop or JavaScript's Math.max method."
  },
  { 
    text: "Create a function that sorts an array without using built-in methods.",
    difficulty: "Hard",
    hint: "Try the bubble sort or quicksort algorithm."
  },
];

function getRandomChallenge() {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}
