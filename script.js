// Input string
let input = "Hello, World!";

// Function to reverse the string after a delay of 2 seconds
setTimeout(() => {
    // Reversing the string
    let reversedString = input.split('').reverse().join('');
    
    // Printing the reversed string
    console.log(reversedString);
}, 2000); // Delay in milliseconds (2000ms = 2 seconds)
