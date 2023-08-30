//https://www.codewars.com/kata/545cedaa9943f7fe7b000048
//rank 6 kyu

```
Description:

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
Strings
Data Structures
Fundamentals
```
function isPangram(string){
  let arr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i=0; i<alphabet.length; i++) {
    if (arr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}