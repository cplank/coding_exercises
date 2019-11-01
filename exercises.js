//@ts-check

// //////////////////////////////////////////////////////
//                                                     //
//         Medium Edabit Exercises                     //   
//                                                     //
////////////////////////////////////////////////////////

// Given a total due and an arry representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be respresented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25,20,5,0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50

// function changeEnough(arr, total) {
//     arrAsChange = [];
//     arrAsChange.push(arr[0] * .25, arr[1] * .10, arr[2] * .05, arr[3] * .01)

//     const reducer = (accumulator, currentValue) => accumulator + currentValue;

//     if (arrAsChange.reduce(reducer) >= total) {
//         return true;
//     }
//     return false;
// }

// console.log(changeEnough([5, 20, 5, 0], 4.25))

////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements. 

// Examples:

// testJackpot(["@", "@", "@", "@"]) returns true
// testJackpot(["abc", "abc", "abc","abc"]) returns true
//  testJackpot(["&&", "&", "&&&", "&&&&"]) returns false

// function isJackpot(arr) {
//     if (arr[1] && arr[2] && arr[3] === arr[0]) {
//         return true
//     }
//     return false
// }

// function testJackpot(result) {
//     return new Set(result).size === 1
// }

// console.log(testJackpot(["123", "123", "123", "123"]))

//////////////////////////////////////////////////////////////////////////////////

// Create a function that returns true if two arrays contain identical values, and false otherwise. 

// To solve this question, your friend writes the following code:

// function checkEquals(arr1, arr2) {
//     if (arr1 === arr2) {
//         return true
//     } else {
//         return false
//     }
// }

// But testing the code, you see that something is not quite right. Running the code yields the following results:

// console.log(checkEquals([1, 2], [1, 3])) yields false
// console.log(checkEquals([1, 2], [1, 2])) yields false

/////////////////////////////////////////////////////////////////////////////

// Rewrite your firend's code so that it correctly checks if two arrays are equal. 

// function checkEquals(arr1, arr2) {
//     const arr1String = arr1.toString();
//     const arr2String = arr2.toString();

//     if (arr1String === arr2String) {
//         return true
//     }

//     return false
// }

// function checkEquals(arr1, arr2) {
//     return arr1.toString() == arr2.toString();
// }

// console.log(checkEquals([1, 2], [1, 2]))

/////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of items, removes all duplicate items and returns an array in the same sequential order as the old array (minus duplicates).

// Ex: removeDups(["John", "Taylor", "John"]) returns ["John", "Taylor"]
// Ex: removeDups([1, 0, 1, 0]) returns [1, 0]

// function removeDups(arr) {
//     return unique = [...new Set(arr)]

// }

// console.log(removeDups(["John", "Taylor", "John"]))

/////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false. Return a boolean value, the string can contain any chracter, when no x and no o are present in the string, return true. 

// Ex: XO("ooxx") return true
// Ex: XO ("xooxx") return false

// function XO(str) {
//     str = str.toLowerCase();
//     const arrayOfCharacters = str.split("");
//     const countX = arrayOfCharacters.reduce(function (n, val) {
//         return n + (val === "x")
//     }, 0)

//     console.log(countX)

//     const countO = arrayOfCharacters.reduce(function (n, val) {
//         return n + (val === "o")
//     }, 0)

//     console.log(countO)

//     if (countX === countO) {
//         return true
//     }

//     if (countX === 0 && countO === 0) {
//         return true;
//     }

//     return false
// }

// console.log(XO("x"));

////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. if the word's lenth is even, return the middle two characters. 

// EX: getMiddle("test") returns "es"
// Ex: getMiddle("testing") retunrs "t"

// function getMiddle(str) {
//     const middle = str.length / 2
//     if (str.length % 2 === 0) {
//         return str.substring(middle - 1, middle + 1)
//     }
//     return str.substring(middle, middle + 1)
// }

// console.log(getMiddle("testing"))

////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a number as its argument and returns an array of all its factors. 

// Ex: factorize(12) returns [1,2,3,4,6,12]
// Ex: factorize(4) returns [1,2,4]

// const factors = number => Array
//     .from(Array(number + 1), (_unused, i) => i)
//     .filter(i => number % i === 0)

// console.log(factors(12));

// function factorize(num) {
//     let factors = [];
//     for (i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i)
//         }
//     }
//     return factors
// }

// console.log(factorize(12));

////////////////////////////////////////////////////////////////////////////////////////

// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day. 

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days. 

// Ex: progressDays([3,4,1,2]) returns 2
// There are two progress days, (3 -> 4) and (1 -> 2)
// Ex: progressDays([10,11,12,9,10]) returns 3

// function progressDays(arr) {
//     let progressDays = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1])
//             progressDays++
//     }
//     return progressDays
// }

// console.log(progressDays([3, 4, 1, 2]))

/////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. 

// Ex: hackerSpeak("javascript is cool") returns "j4v45sc1pt 15 c00l"

// In order to work properly, the function should replace all "a's" with 4, "e's" with 3, "i's" with 1, and "o's" with 0, and "s's" with 5.

// function hackerSpeak(str) {
//     let chars = { "a": "4", "e": "3", "i": "1", "o": "0", "s": "5" };
//     str = str.replace(/[aeios]/g, letter => chars[letter]);
//     return str;
// }

// console.log(hackerSpeak("javascript is cool"))

//////////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of names and returns an array with the first letter capitalized.

// Ex: capMe(["mavis", "senaida", "letty"]) returns ["Mavis", "Senaida", "Letty"]

// Don't change the order of the original array. 

// function capMe(arr) {
//     const toLower = arr.map(word => word.toLowerCase());
//     const nowCap = toLower.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return nowCap;
// }

// console.log(capMe(['mARIANN', 'jOI', 'gEORGEANN']));

/////////////////////////////////////////////////////////////////////////////////////

// Create a function that alternates the case of the characters in a string. In the final string, the case should be the opposite for every adjacent letter.

// Ex: alternatingCaps("Hello") returns "HeLlO"
// Ex: alternatingCaps("Hey, how are you?") returns "HeY, hOw aRe yOu?"
// Ex: alternatingCaps("OMG!!! This website is awesome!!") returns "OmG!!! tHiS WeBsItE Is aWeSoMe!!"

// The first character should always be UPPPERCASE

// function alternatingCaps(str) {
//     //change string to an array and make all lower case
//     let strArr = str.toLowerCase().split("")
//     //make index 0 be upper case
//     strArr[0] = strArr[0].toUpperCase();
//     console.log(strArr)
//     //loop through rest of the array, starting at index 2 (we know index 1 will need to be lower case, because we know index 0 is upper case)
//     for (let i = 2; i < strArr.length; i += 2) {
//         strArr[i] = strArr[i].toUpperCase();
//     }
//     return strArr.join("");
// }
// console.log(alternatingCaps("Hello"));

/////////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes three integer arguments (a,b,c) and returns the number of equal values.

// Ex: equal(3,4,3) returns 2
// Ex: equal(1,1,1) returns 3
// Ex: equal(3,4,1) returns 0

// This was my first guess, but it doesn't work

// function equal(num1, num2, num3) {
//     const set = new Set([num1, num2, num3])
//     return set.size
// }

// console.log(equal(1, 1, 1))

///////////////////////////////////////////////////////////////////////////////////////////////

// GUESS TWO
// function equal(num1, num2, num3) {
//     if (num1 && num2 === num3) {
//         return 3
//     }
//     if (num1 === num2 && num1 != num3 || num1 === num3 && num1 != num2) {
//         return 2
//     }
//     // if (num1 === num3 && num1 != num2) {
//     //     return 2
//     // }
//     else {
//         return 0
//     }
// }

// console.log(equal(3, 4, 3))

//////////////////////////////////////////////////////////////////////////////////////////////////

// Given an array of numbers, write a function that returns an array that:

// 1 - has all duplicate elements removed.
// 2 - is sorted from least to greatest value.

// Ex: uniqueSort([1,2,4,3]) returns [1,2,3,4]
// Ex: uniqueSort([1,4,4,4,4,4,4,3,2,1,2]) returns [1,2,3,4]
// Ex: uniqueSort([6,7,3,2,1]) returns [1,2,3,6,7]

// Helper function for the bubble sort
// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }
// function uniqueSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[j - 1] > arr[j]) {
//                 swap(arr, j - 1, j);
//             }
//         }
//     }
//     return Array.from(new Set(arr))

// }

// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 4, 3, 2, 1, 2]))

////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0

// Ex: flip(1) returns 0
// Ex: flip(0) returns 1

// Try completing this challenge without using any:
// Conditionals, ternary operators, negations, bit operators

// function flip(y) {
//     return Number(!y)

// }

// console.log(flip(0))
// console.log(flip(1))

////////////////////////////////////////////////////////////////////////////////////////

// Suppose you add all of the page numbers in a book. If the total is 21, the book would have only 6 pages because 1 + 2+ 3+ 4+ 5+ 6 = 21. If I had said the total is 25, that would be impossible because the next number in the series is 28 (21+7).

// Create a function that has as it's argument the sum of all the page numbers and returns true if it is a valid number and false if it is not. 

// Can you devise a solution that is more efficient than simply adding consecutive integers as I did above?

// Ex: pagesInBook(5) returns false
// Ex: pagesInBook(4005) returns true
// Ex: pagesInBook(9453) returns true

// function pagesInBook(num) {
//     let counter = 0
//     let nextNum = 0
//     while (counter <= num) {
//         nextNum += 1
//         console.log("Nextnum", nextNum)
//         console.log("counter", counter)
//         counter = nextNum + counter
//         if (counter === num) {
//             return true
//         }
//     }
//     return false
// }

// console.log(pagesInBook(4005));

///////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a word and returns true if the word as two consecutive identical letters.

// Ex: doubleLetters("loop") returns true
// Ex: doubleLetters("yummy") returns true
// Ex: doubleLetters("orange") returns false

// function doubleLetters(word) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === word[i - 1]) {
//             return true
//         }
//     }
//     return false
// }

// console.log(doubleLetters("loop"))
// console.log(doubleLetters("yummy"))
// console.log(doubleLetters("orange"))

////////////////////////////////////////////////////////////////////////////////////////////

// Suppose you have a guest list of students and the counrty they are from, stores as key-value pairs in an object. 

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

// Write a function that takes in a name and returns a name tage that should read: 

// "Hi! I'm [name], and I'm from [country]''
// If the name is not in the object, return:
// "Hi! I'm a guest."

// Ex: greeting("Randy") returns "Hi! I'm Randy, and I'm from Germany."

// function greeting(name) {
//     let keys = Object.keys(GUEST_LIST)
//     for (let i = 0; i < keys.length; i++) {
//         if (keys[i] === name) {
//             return (`"Hi! I'm ${name} and I'm from ${GUEST_LIST[name]}."`)
//         }
//     }
//     return ("Hi! I'm a guest.")
// }

// console.log(greeting("Randy"))
// console.log(greeting("Monti"))

//////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a number as an argument and returns a string formatted to separate thousands.

// Ex: formatNum(1000) returns "1,333"
// Ex: formatNum(100000) returns "100,000"

// function formatNum(num) {
//     let numArr = num.toString().split("")
//     if (numArr.length < 4) {
//         return num.toString();
//     }
//     console.log(numArr)
//     let newArr = []
//     let i = 0;
//     while (numArr.length != 0) {
//         newArr.unshift(numArr.pop())
//         i++
//         if (i % 3 === 0 && numArr.length > 0) {
//             newArr.unshift(",")
//         }
//         console.log(newArr)
//     }
//     return newArr.join('');
// }

// console.log(formatNum(222133))

/////////////////////////////////////////////////////////////////////////////////////


// function fizzbuzz(n) {
//     let newArr = []
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             newArr.push("FizzBuzz")
//         }
//         else if (i % 3 === 0) {
//             newArr.push("Fizz")
//         }
//         else if (i % 5 === 0) {
//             newArr.push("Buzz")
//         }
//         else {
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

////////////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3]

// function factory(x) {
//     function secondFunction(arr) {
//         let newArr = [];
//         for (let i = 0; i < arr.length; i++) {
//             newArr.push(arr[i] * x)
//         }
//         // console.log(newArr)
//         return newArr
//     }
//     return secondFunction(arr)
// }

////////////////////////////////////////////////////////////////

// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

// Ex: incrementToTop([3,4,5]) returns 3
// 3 increments: 3 -> 4, 4 -> 5 ; 4 -> 5
// Ex: incrementToTop([4,3,4]) returns 1
// 1 increment: 3 -> 4
// Ex: incrementToTop([3,3,3]) returns 0
// Ex: incrementToTop([3, 10, 3]) returns 14

// function incrementToTop(arr) {
//     let top = Math.max(...arr)
//     let map1 = arr.map(x => top - x)
//     let reducer = (a, b) => a + b;
//     return map1.reduce(reducer)
// }

// console.log(incrementToTop([3, 4, 5]))

////////////////////////////////////////////////////////////////////////////////

// Write a function that returns the longest sequence of consecutive zeroes in a binary string

// Ex: longestZero("01100001011000") returns "0000"

// function longestZero(str) {
//     let zeroString = "0"
//     let zeroArr = [];
//     let zeroCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str.endsWith(0)) {
//             str = str + "1"
//         }
//         if (str[i] === "0") {
//             zeroCount++
//         }
//         if (str[i] === "1") {
//             zeroArr.push(zeroCount)
//             zeroCount = 0;
//         }
//     }
//     let streak = (Math.max(...zeroArr))
//     let repeatStreak = zeroString.repeat(streak)
//     return repeatStreak
// }

// console.log(longestZero("100001110000100000"))

////////////////////////////////////////////////////////////////////////////////////

// Create a function that returns true if an asterisk is inside a box.

// Ex: inBox(["###", "#*#", "###"]) returns true
// Ex: inbox(["###", "# #", "###"]) returns false

// function inBox(arr) {
//     let str = arr.join("")
//     if (str.includes("*")) {
//         return true
//     }
//     return false
// }

// console.log(inBox([
//     "###",
//     "# #",
//     "###"
// ]))

///////////////////////////////////////////////////////////////////////////////////////

// Suppose an image can be represented as a 2D array of 0's and 1's. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Ex: reverseImage([
//     [1,0,0],
//     [0,1,0],
//     [0,0,1]
// ]) returns 
// [
//     [0,1,1],
//     [1,0,1],
//     [1,1,0]
// ]

// function reverseImage(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === 1) {
//                 arr[i][j] = 0;
//             } else if (arr[i][j] === 0) {
//                 arr[i][j] = 1;
//             }
//         }
//     }
//     return arr
// }

// console.log(reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ]))

// //////////////////////////////////////////////////////
//                                                     //
//         Hard Edabit Exercises                       //   
//                                                     //
////////////////////////////////////////////////////////

// You are given two inputs: 
// 1. An array of abbrevitions. 
// 2. An array of words.

// Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise. 

// Ex: uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) returns false because "ho" and "h" are ambiguous and can identifiy either "house" or "hope".

// function uniqueAbbrev(abbrevs, words) {
//     let notUniqueCount = 0;
//     for (let i = 0; i < abbrevs.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (words[j].startsWith(abbrevs[i])) {
//                 notUniqueCount++
//                 console.log(notUniqueCount)
//             }
//         }
//     }
//     if (notUniqueCount <= words.length) {
//         return true
//     }
//     return false
// }

// console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]))
// console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]))

/////////////////////////////////////////////////////////////////////////////////////

// Create a Book constructor that has two properties:
// 1. Title
// 2. Author
// and two methods:
// 1. A getter for title that returns "Title: " + the instance of the title.
// 2. A getter for the author that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:
// 1. Pride and Prejudice - Jane Austen (PP)
// 2. Hamlet - William Shakespeare (H)
// 3. War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respecitvely. 

// For instance, if I instantiated the following book using this Book constructor function: 
// Harry Potter - J.K Rowling (HP)
// I would get the following properties and methods: 

// Ex: Hp.title -> "Harry Potter"
// Ex: Hp.author -> "J.K Rowling"
// Ex: HP.getTitle() -> "Title: Harry Potter"
// Ex: HP.getAuthor() -> "Author: J.K Rowling"

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     getTitle() {
//         return "Title: " + this.title
//     }
//     getAuthor() {
//         return "Author: " + this.author
//     }
// }


// let PP = new Book("Pride and Prejudice", "Jane Austen")
// let H = new Book("Hamlet", "William Shakespeare")
// let WP = new Book("War and Peace", "Leo Tolstoy")

// console.log(PP.title)
// console.log(PP.getTitle())

///////////////////////////////////////////////////////////////////////////////////

// Create a function that takes two dates and returns the number of days between the firsta nd second date. 

// Ex: getDays(
//     new Date("June 14, 2019")
//     new Date("June 20, 2019")
// ) returns 6

// function getDays(date1, date2) {
//     let distance = date2 - date1
//     let seconds = distance / 1000
//     let minutes = seconds / 60
//     let hours = minutes / 60
//     let days = hours / 24

//     return days
// }

// console.log(getDays(new Date("June 01, 2019"), new Date("June 30, 2019")))

//////////////////////////////////////////////////////////////////////////////////////

// There are three towers. Object of the game is to move all the disks over to tower #3. But you cannot place a larger disk onto a smaller disk. 
//@ts-check
// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game. 

// Ex: towerHanoi(3) returns 7
// Ex: towerHanoi(5) returns 31

// function towerHanoi(discs) {

// }

// console.log(towerHanoi(5))

// function moveTower2(from, to, discs) {

// }

////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

// Ex: Calling makePlusFunction(5) returns a new function that takes an input and returns the result when adding 5 to it. 

// const plusFive = makePlusFunction(5)
// plusFive(2) returns 7
// plusFive(-8) returns -3

// Calling makePlusFunction(10) returns a new function that takes an input, and returns the result when adding 10 to it. 

// const plusTen = partial(add, 10)
// plusTen(0) returns 10
// plusTen(188) returns 198
// plusFive(plusTen(0)) returns 15

// function makePlusFunction(baseNum) {
//     function secondFunction(newArg) {
//         return newArg + baseNum
//     }
//     return secondFunction
// }
// const plusTen = makePlusFunction(10)
// console.log(plusTen(0))

////////////////////////////////////////////////////////////////////////////////////

// Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array. 

// [1,2,3,4,5,6], 3
// [[1,3,5],[2,4,6]]
// Divide array into group of size 3

// Ex: group([1,2,3,4],2) returns [[1,3],[2,4]]
// Ex: group([1,2,3,4,5,6,7],4) returns [[1,3,5,7],[2,4,6]]
// Ex: group([1,2,3,4,5,6],4) returns [[1,3,5], [2,4,6]]

// Notes: the size parameter represents the maximum size for each sub-array (see ex 3). You should try to fill each sub-array evenly. In other words, ex 3 should be [[1,3,5],[2,4,6]] NOT [[1,3,5,6],[2,4]].
// Keep the relative order of the numbers in each sub-array the same order as  the order in the origiinal array. 

// function group(arr, size) {

// }

// console.log(group([1, 2, 3, 4], 2))

///////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of numbers and retur "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Ex: sevenBoom([1,2,3,4,5,6,7]) returns "Boom!"
// Ex: sevenBoom([8,6,33,100]) returns "there is no 7 in the array"
// Ex: sevenBoom([2,55,60,97,86]) returns "Boom!"

// function sevenBoom(arr) {
//     let arrString = arr.toString()
//     if (arrString.includes("7")) {
//         console.log(arrString)
//         return "Boom!"
//     }
//     return "there is no 7 in the array"
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
// console.log(sevenBoom([1, 2, 3, 4, 5, 6]))

////////////////////////////////////////////////////////////////////////////////////////

// You are in the process of creating a chat application and want to add an anonymous name feature. This anonymous name feature will create an alias that consists of two capitalized words beginning with the same letter as the users first name. 

// Create a function that determines if the array of users is mapped to an array of anonymous names correctly. 

// Ex: isCorrectAlias(["Adrian M.", "Harriet S.", "Mandy T."],["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse",] ) returns true

// Note: Both words in the alias should be capitalized

// function isCorrectAlias(names, aliases) {
//     let allAliasesCounter = 0;
//     if (names.length != aliases.length) {
//         return false
//     }
//     for (let i = 0; i < names.length; i++) {
//         if (isAliasCorrect(names[i], aliases[i])) {
//             allAliasesCounter++
//         }
//     }
//     if (allAliasesCounter === names.length) {
//         return true
//     }
//     return false
// }

// function isAliasCorrect(name, alias) {
//     let aliasCounter = 0;
//     if (name.charAt(0) === alias.charAt(0)) {
//         aliasCounter++
//     }
//     for (let i = 0; i < alias.length; i++) {
//         if (alias[i] === " ") {
//             if (alias[i + 1] === name.charAt(0)) {
//                 aliasCounter++
//             }
//         }
//     }
//     if (aliasCounter === 2) {
//         return true;
//     }
//     return false
// }


// console.log(isCorrectAlias(["Adrian M.", "Harriet S.", "Mandy T."], ["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse"]))
// console.log(isAliasCorrect("Adrian M.", "Amazing Artichoke"))

/////////////////////////////////////////////////////////////////////////////////////////////

// Create a function that returns the frequency distribution of an array. This function should return an object, where keys are the unique elements and the values are teh frequency in which those elements occur. 

// Ex: getFrequencies(["A", "B", "A", "A"]) returns {A: 4, B:1}
// Ex: getFrequencies([1,2,3,3,2]) returns {1:1, 2:2, 3:2}
// Ex: getFrequencies([true, false, true, false, false]) returns {true: 2, false: 3}

// function getFrequencies(arr) {
//     let callback = (result, value) => {
//         if (Object.keys(result).indexOf(value.toString()) > -1) {
//             result[value]++
//         } else {
//             result[value] = 1
//         }
//         return result
//     }
//     let result = arr.reduce(callback, {});
//     return result
// }

// console.log(getFrequencies([1, 2, 3, 3, 2]))

/////////////////////////////////////////////////////////////////////////////////////////

//  Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array. 

// [1,2,3,4,5,6], 3
// [[1,3,5], [2,4,6]]
// Divide array into groups of size 3

// [1,2,3,4,5,6], 2
// [[1,4],[2,5],[3,6]]
// Divid an array into groups of size 2

// [1,2,3,4,5,6,7,8,9,10,11], 4
// [[1,4,7,10],[2,5,8,11],[3,6,9]]
// Leftover arrays are okay

// function group(arr, size) {
//     let makeArrs = function (num) {
//         let allArrs = []
//         for (let i = 0; i < num; i++) {
//             allArrs.push([])
//         }
//         return allArrs;
//     }
//     let totalArrs = makeArrs(arr.length / size)
//     let fillArrs = function (originalArr, currentArr, size, i) {
//         for (i; i < originalArr.length; i++) {
//             if (currentArr.length < size) {
//                 currentArr.push(originalArr[i])
//             } else {
//                 return i
//             }
//         }
//     }
//     let j = 0;
//     for (let i = 0; i < totalArrs.length; i++) {
//         j = fillArrs(arr, totalArrs[i], size, j)
//     }
//     return totalArrs

// console.log(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4))

// let makeArrs = function (num) {
//     let allArrs = []
//     for (let i = 0; i < num; i++) {
//         allArrs.push([])
//     }
//     return allArrs;
// }

// console.log((makeArrs(2)))

///////////////////////////////////////////////////////////////////////////////

// A function takes a two digit integer. Return the sum of the two digits.

// function sum(n) {
//     var both = n.toString().split("");
//     return +both[0] + +both[1]

// }

// console.log(sum(29))

//////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array. 

// Ex: numInStr(["1a", "a", "2b", "b"]) returns ["1a", "2b"]

// The strings can contain white space or any type of characters.

// function numInStr(arr) {
//     let numStr = []
//     let hasNumber = /\d/;

//     for (let i = 0; i < arr.length; i++) {
//         if (hasNumber.test(arr[i])) {
//             numStr.push(arr[i])
//         }
//     }

//     return numStr
// }

// console.log(numInStr(["1a", "a", "2b", "b"]))

////////////////////////////////////////////////////////////////////////////////

// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Ex: reverseOdd("Bananas") returns "sananaB"
// Ex: reverseOdd("One two three four") returns "eno owt eerht four"

// function reverseHelper(str) {
//     return str.split("").reverse().join("")

// }

// function reverseOdd(str) {
//     let reversed = []
//     let split = str.split(" ")
//     for (let i = 0; i < split.length; i++) {
//         if (split[i].length % 2 != 0) {
//             reversed.push(reverseHelper(split[i]))
//         } else {
//             reversed.push(split[i])
//         }
//     }
//     return reversed.join(" ")
// }

// console.log(reverseOdd("One two three four"))

////////////////////////////////////////////////////////////////////////////

