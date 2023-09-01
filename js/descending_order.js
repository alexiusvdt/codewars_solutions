//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/
//rank 7 kyu
```
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
Fundamentals
```

function descendingOrder(n){
  if (n<10){
    return n
  }
  let string = n.toString()
  let arr = string.split('')
  arr = arr.sort(function (a, b) {  return b - a;  });
  let joined = arr.join('')
  let out = Number(joined)

  return out
}