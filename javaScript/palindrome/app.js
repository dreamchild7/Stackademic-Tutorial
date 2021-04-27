//Write a function to check if a string is a palindrome


//Solution

//Create a function
// If input is not a word return false
// set the word to check
// set the reverse word
// compare the clean word to the reverse word

//Get the HMTL DOM for manipulation
// const form = document.querySelector('#form')

const display = document.querySelector('.display')
const check = document.querySelector('.check-btn')

function getVal(){
    const val = document.querySelector('input').value
    console.log(val) // test to see that the function is working


    const cleanWord = val.toLowerCase().replace(/[.,'!\ -\"]/g, "") // cnverts all your inputs to lowercase and replaces the whitespaces and symbols with empty qoute

    const reversedWord = cleanWord.split("").reverse().join("") // splits the string into an array, reverses the array and join the array objects to form a string

    if(val === ""){ // checks if input is empty
        display.innerHTML = "Please Enter a word or Phrase to check !!!"
        display.style.color='#ff0101'
    }else
    
    if(cleanWord === reversedWord){ // checks if the string is a palindrome
        display.innerHTML =`${cleanWord} is a palindrome`
        display.style.color ='#010101'
    }else{
        display.innerHTML =`${reversedWord} is not the same as ${cleanWord}`
        display.style.color='#ff0101'
    }
}

check.addEventListener('click', function(event){//listens for a click event

     event.preventDefault() //revents form default

})



    
//     const cleanWord = palindromeInput.toLowerCase().replace(/[.,'!\ -\"]/g, "")

//     const reverseWord = cleanWord.split("").reversed().join("")

//     if(cleanWord === reverseWord){
//         display.innerHTML = `${cleanWord} is a palindrome`
//     } else{
//         display.innerHTML =`${reverseWord} is not a match for ${cleanWord}`
//     }
//display.innerHTML ="Working on a palindrome"
//  })



// display.innerHTML=`${cleanWord} is a palindrome`

// function isPalindrome(word){
//     if(word !== palindromeInput){
//         return false
//     }


//     const cleanWord = word.toLowerCase().replace(/[.,'!?\- \"]/g, "") //convert the string to lowercase
//     const reverseWord = cleanWord.split("").reverse().join("")

//     console.log(cleanWord)
//     console.log(reverseWord)

//  return cleanWord === reverseWord? true:false
// }

// console.log(isPalindrome('nurses run'))
// console.log(isPalindrome("Madam"))
// console.log(isPalindrome('nurses run, nurses run'))


//Get the ASCII value of a string and return its average

// let x = "asaba bfsda"

// let sum = 0

// for(char of x){
//     sum = Math.floor(x.charCodeAt())
// }

// average = sum + x.length

// console.log(average)