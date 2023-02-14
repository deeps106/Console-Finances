var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

/*pseudocode:

Need to write a Js program that will
1.calculate the total number of months in the dataset
2.calculate net total amount of Profit/Losses over the entire period
3. Average changes in Profit/Losses over the entire period
4. Greatest increase in profits (date and amount) over entire period
5. Greatest decrease in profits (date and amount) over entire period*/

//Total numbe of months
// the finances array is one that contains arrays within it. To access
//the data within each array you would need to use index 0 and 1 into the
//index of the array (e.g. finances[0][0] or [0][1] for the 0 array/1st array)

//Define variables

let totalMonths = finances.length; //1. The total number of months
let initialValue = finances[0][1];


/*2. Net total amount of profit/losses over the entire period. To access the nubmers within
//the finances array you would need to index into each array and opt for finances[i][1].
//iterate through finances array using for loop:*/

for (let i = 1; i < finances.length; i++) {// in order to work out the finances profit/loss you would need to start from the second array and add/subtract from the first array- hence i=1
    const finance = finances[i][1];

    console.log(finance);

    total = initialValue += finance;/* console.log("total:" + " " + total);*/

    changes = initialValue -= finance;// this works; console.log("Profit change:" + " " + "$" + changes);


}
//average changes in profit/losses is given by subtracting profit/losses monthly to give
//a total and divide by number of months
//1.
//2. number of months is given by finances.length which is assigned the variable totalMonths
//formula is then total/totalMonths
//numerator/total use subtraction assignment -= 
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment



averageChange = changes / totalMonths;

console.log("Average Change:" + " " + "$" + averageChange.toFixed(2));

/* toFixed(digits) rounds a number to specified number of digits after the decimal point



to determine the greatest increase and decrease in profits will need to sort the array
into descending order. After sorting, greatest increase will therefore be finances  0 array with index 0, 1
decrease will be finances 86 array with index 0, 1

documentation for sorting an array: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://www.youtube.com/watch?v=UxrSeTSI8z0 - shows how to sort a nested  array
 */

// sorting the finances array: Methods:

/* 1. financesSorted = finances.sort(function (a, b) {
    return a[1] - b[1];//syntax will sort greatest to least
});
console.log(financesSorted1);*///Method 1

/* 2. */ financesSorted = finances.sort((a, b) => a[1] - b[1]); //using the second index which is number
    console.log(financesSorted);

let greatestRiseInProfits = financesSorted[85]; // console.log(finances[85]) - test ;

let greatestDecreaseInProfits = financesSorted[0];//gives the key and value


// Display in console by concatenating strings and variables

console.log("Financial Analysis");
console.log("------------------");
console.log("Total Months" + " " + totalMonths);
console.log("Total:" + " " + "$" + total);
console.log("Average Change:" + " " + "$" + averageChange.toFixed(2));
console.log("Greatest Increase in Profits: " +
    greatestRiseInProfits[0] + " " + "(" + greatestRiseInProfits[1] + ")");
console.log("Greatest Decrease in Profits: " +
    greatestDecreaseInProfits[0] + " " + "(" + greatestDecreaseInProfits[1] + ")");

//adding an h1 to html with js
//1.create the element
let h1El = document.createElement("h1")

//2. give the element content
h1El.textContent = "🤑💰💵 Check your finances with 'CTRL + SHIFT + J' 💵💰🤑"

//3. append the content to html
document.body.append(h1El)

//4. css style the h1
h1El.setAttribute("style", "text-align: center")
