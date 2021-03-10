// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

stringA.replace(/\W/g, '')
stringB.replace(/\W/g, '')
stringA.toLowerCase();
stringB.toLowerCase();
stringA.split(' ').join('')
stringB.split(' ').join('')

let charMap = {};

for(let char of stringA){
  if(!charMap[char]){
    charMap[char] = 1;
  } else {
    charMap[char]++;
  }
}

for(let char of stringB){
if(!charMap[char]){
  return "Not an Anagram";
} else {
 charMap[char]--;
} 
}

for(let char in charMap){
  if(charMap[char] == 0){
    return "We have an Anagram"
  } else {
    "No Anagram here."
  }
}


}


 anagrams('RAIL! SAFETY!', 'fairy tales')
