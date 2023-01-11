var data = [10,1000,1,59.10,120,4,-1,30];

// Using the Math.min.apply() and Math.max.apply() methods
var min = Math.min.apply(null, data);
var max = Math.max.apply(null, data);

console.log("Minimum value: " + min);
console.log("Maximum value: " + max);