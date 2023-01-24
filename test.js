// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];
//   console.log(items);
//   // sort by value
//   items.sort((a, b) => a.value - b.value);

// //   console.log(items);

let expts = [
    ["hello", 3],
    [ "bye", 1],
    ["afternoon", 2]
]
console.log(expts);

//sorting the array: array.sort(function(a, b) {return a[1] - b[1]})- sorts on index 1 in array}
// alternative notation: array.sort((a, b) => a[1] - b[1]). Let's try it on expts array

expts.sort(function(a, b) {
    return a[1] -b[1];
})

exptsSort = expts.sort((a, b)=> a[1] - b[1]);
console.log(exptsSort);
//loops through the array and we can print out each element in the arrays
// for (i = 0; i < expts.length; i++) {
//     const expt = expts[i];
//     // console.log(expt);

// digit = expt[1];

// word = expt[0]

// console.log(word);
// console.log(digit);
// console.log(digit * 2);

// }

//array.sort(array to be sorted, index of first element, index of last element)




// console.log(digit);

// console.log(digit, word);


// //test coding for ordering obects in an array
// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];
  
//   // sort by value
//   sampleSortArray = items.sort((a, b) => a.value - b.value);
//   console.log(sampleSortArray);