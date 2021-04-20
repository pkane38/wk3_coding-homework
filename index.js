/* 1.	Create an array called ages that contains the following 
values: 3, 9, 23, 64, 2, 8, 28, 93.
a.	Programmatically subtract the value of the first element in the array from 
the value in the last element of the array (do not use numbers to reference the 
last element, find it programmatically, ages[7] – ages[0] is not allowed). 
Print the result to the console. */
/* var ages = [3,9,23,64,2,8,28,93];
var i = 0
console.log((ages[ages.length -1]) - ages[0]);

/* b.	Add a new age to your array and repeat the step above to ensure it is 
dynamic (works for arrays of different lengths). */
/*var ages = [3,9,23,64,2,8,22,28,93];
var i = 0
console.log((ages[ages.length -1]) - ages[0]);

/*  c.	Use a loop to iterate through the array and calculate the average age. 
Print the result to the console. */

/*formula for avg
avg = sum of element/total number of elements
add every single element of array
use index to access elements
create for loop to access all elements
create variable called sum = total sume of elements
total = length of the array */
/* var ages = [3,9,23,64,2,8,22,28,93];
let sum = 0; 
for(age of ages) {
    sum += age;
}
let total = ages.length;
let avg = sum/total;
console.log(avg); */



/* 2.	Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number 
of letters per name. Print the result to the console. */

//var  names = ['Sam', 'Tommy','Tim','Sally','Buck','Bob']
//let avg= 0;

//let total = 0;

//for (let i = 0; i < names.length; i++) {
 //   total += names[i].length;
//}
//avg = total/names.length;  
//console.log(avg);


//var  names = ['Sam', 'Tommy','Tim','Sally','Buck','Bob']

//console.log(names.join(' '));
//
//var  names = ['Sam', 'Tommy','Tim','Sally','Buck','Bob']
//for (let i=0; i<names.length; i++);
//console.log(names[i< names.length]);


//var  names = ['Sam', 'Tommy','Tim','Sally','Buck','Bob']
/* var last = names [names.length -1]
console.log(last); */

//  5.Create a new array called nameLengths. Write a loop to iterate 
//  over the previously created names array and add the length of 
//  each name to the nameLengths array.

/*var  names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];

let namesLength = [];

for (let i = 0; i < names.length; i++){
namesLength.push(names[i].length);
}
console.log(namesLength); */


/* 6.	Write a loop to iterate over the nameLengths array and calculate the 
sum of all the elements in the array. Print the result to the console. */

/* var nameSum = 0
for (var i = 0; i < namesLength.length; i++) {
    nameSum += namesLength[i];
} console.log (nameSum); */

/* 7.	Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times. (i.e. if I pass 
in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */

/*function wordRepeatNTimes(word, n ){
    var wordRepeat = "";
    while (n > 0) {
    wordRepeat += word;
    n=n-1;}
    return wordRepeat;
}
console.log(wordRepeatNTimes("hello", 3)); */



/* function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
fullName("Patrick", "Kane"); */

/*9.	Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100 */

//let ages = [3,9,23,64,2,8,22,28,93];
/* let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
} if(sum > 100);
console.log('true'); */

/*10.	Write a function that takes an array of numbers and returns the 
average of all the elements in the array. 
let ages = [3,9,23,64,2,8,22,28,93];
findAvg(ages)
function findAvg (array) {
    let sum = 0;
    for (element of array) {
        sum += element;
    }
    let total = array.length;
    let avg = sum/total;
    console.log(avg);
} */

/* 11.	Write a function that takes two arrays of numbers and returns 
true if the average of the elements in the first array is greater than 
the average of the elements in the second array. */



/*function lrgrArray(array1, array2){
var sum1 = 0;
var sum2 = 0;
for(element of array1) {
    sum1 += element;
}
let total1 = array1.length
let avg1= sum1/total1
for(element of array2) {
    sum2 += element;
}
let total2 = array1.length
let avg2= sum2/total2

var sum1Avg = sum1 / total1;
var sum2Avg = sum2 / total2;
if (sum1Avg > sum2Avg) {
    console.log ('true')
    return true;
} else if  (sum1Avg < sum2Avg) {
        console.log ('false')
        return false;
}
} 

let arr1 = [4,5,6];
let arr2 = [1,2,3];
lrgrArray(arr1, arr2); */

/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a 
number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is 
greater than 10.50. */

/* function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
    console.log('true');
    }
}
   console.log(willBuyDrink(true, 18)); */

   /* 13.	Create a function of your own that solves a problem. In comments, write what 
   the function does and why you created it.
   'write a function called continueOnWithBesd that takes the boolean gpaGreaterThan, 
   and avgStudyHours, and returns 'carry_on' if my gpaGreaterThan 80 percent and avgStudyHours
   are less than 25 per Weekx. 
   
   The function solves for 2 variable that play a roll    determining if I should 
   cont. on with the BESD program after the FESD bootcamp' */

   function continueOnWithBesd(gpaGreaterThan, avgStudyHours) {
        if (gpaGreaterThan > 80 || avgStudyHours < 25 ) {
            console.log('carry_on');
        }

   }
console.log(continueOnWithBesd(82, 22));