//https://www.codewars.com/kata/525c65e51bf619685c000059
//rank 5 kyu

```
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
```
// this is failing on a random test, but looks right to me! Not sure why I'm getting 'expected 5 to equal +0"
function cakes(recipe, available) {
  let totalCakes;
  
  
  for(let ingredient in recipe) {
      if (available[ingredient]) {
        const possibleCakes = Math.floor(
          available[ingredient] / recipe[ingredient] || 0 
        )
      if (!totalCakes || possibleCakes < totalCakes) {
        totalCakes = possibleCakes
      }
    } else {
      return 0
    }
  }
  return totalCakes
}

//==========================================================

// this one passes the random test. infinity is thrown into the first loop to get val to go
// get the minimum between the objects, returning the previous iteration into itself, writing over Infinity 
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    )
  }, Infinity)
}

// similar solutions:
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)

// more like original idea
function cakes(recipe, available) {

  let result = Infinity;
  
  for (let x in recipe) {
  result = Math.min(Math.floor(available[x] / recipe[x]), result);
  
  };
  
  return result || 0;
}

// another iterable
function cakes(recipe, supplies)
{
  var n = [];
  for (var key in recipe)
    if (key in supplies)
      n.push(Math.floor(supplies[key]/recipe[key]));
    else
      return 0;
  return Math.min.apply(Math, n);
}