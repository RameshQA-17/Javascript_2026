let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// Remove 2 elements starting from index 1
fruits.splice(1, 2); 
console.log(fruits);


fruits.splice(1, 0, "mango", "kiwi");  //// Add "mango" and "kiwi" at index 1
console.log(fruits);


fruits.splice(1, 1, "mango");   //// Replace 1 element at index 1 with "mango"
console.log(fruits);