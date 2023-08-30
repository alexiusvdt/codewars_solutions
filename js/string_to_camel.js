// https://www.codewars.com/kata/517abf86da9663f1d2000003
//rank 6 kyu

```
Description:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
```

function toCamelCase(str){
  if (str === ''){
    return ''
  }
  let storage = []
  let splitString = str.replace(/[^A-Z0-9]/ig, "_").split("_")
  let firstElement = storage.push( splitString.splice(0,1) )
  
  for(let word in splitString){
     let splitWords = splitString[word].split('')
     let capitalLetter = splitWords[0].toUpperCase()

     splitWords.splice(0,1, capitalLetter)
     let joinedWord = splitWords.join('')

     storage.push(joinedWord)
     let newSentence = storage.join('')
  }
  return storage.join('')
}