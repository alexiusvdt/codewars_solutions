//https://www.codewars.com/kata/523f5d21c841566fde000009
// rank 6 kyu

```
Description:

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Arrays
Fundamentals
Algorithms
```

function arrayDiff(a, b) {
  let answer = a.filter(x => !b.includes(x))
  return answer
}