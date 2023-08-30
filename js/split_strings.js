// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// rank 6 kyu

```
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

keywords:
Regular Expressions
Strings
Algorithm
```

function solution(str){
  let result = [];
  let i = 0;
  
  if (str.length % 2 !== 0){
    str += "_"
  }
  while (i < str.length) {
    result.push(str[i] + str[i+1])    
    i += 2
  }
  return result
}