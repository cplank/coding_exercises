// @ts-check

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true  ([)]
// Example 2:

// Input: "()[]{}"
// Output: true

// function isValid(str: String): Boolean {

//     if (str.length <= 1) {
//         return false
//     } else {
//         var stack = [];

//         for (var char of str) {
//             if (char === "(" || char === "{" || char === "[") {
//                 stack.push(char)
//             }
//             else {
//                 if (stack[0] === "(" && char === ")") {
//                     stack.pop();
//                 }
//                 if (stack[0] === "{" && char === "}") {
//                     stack.pop();
//                 }
//                 if (stack[0] === "[" && char === "]") {
//                     stack.pop();
//                 }
//             }
//             return false
//         }

//         if (stack.length === 0) {
//             return true;
//         }
//     }
// }



// ////////////////////////////////////////////
// ////     TREES                      ////////
// ////////////////////////////////////////////
// type nodeFn<T> = (node: BTN<T>) => void
// class BTN<T> {
//     item: T;
//     leftBranch: BTN<T> | null;
//     rightBranch: BTN<T> | null;

//     constructor(item, leftBranch, rightBranch) {
//         this.item = item;
//         this.leftBranch = leftBranch;
//         this.rightBranch = rightBranch;
//     }

//     printItem() {
//         console.log(this.item)
//     }
//     leftMostItem(): T {
//         if (this.leftBranch === null) {
//             return this.item
//         }
//         return this.leftBranch.leftMostItem();
//     }

//     treeHeight(): number {
//         if (this.leftBranch === null && this.rightBranch === null) {
//             return 1
//         }
//         if (this.leftBranch === null) {
//             return this.rightBranch.treeHeight() + 1;
//         }
//         if (this.rightBranch === null) {
//             return this.leftBranch.treeHeight() + 1;
//         }
//         var left = this.leftBranch.treeHeight();
//         var right = this.rightBranch.treeHeight();

//         // if (left < right) {
//         //     return right + 1;
//         // }
//         // return left + 1;
//         return Math.max(left, right) + 1;

//     }

//     printEverything(): void {
//         console.log(this.item)
//         if (this.leftBranch != null) {
//             this.leftBranch.printEverything();
//         }
//         if (this.rightBranch != null) {
//             this.rightBranch.printEverything();
//         }
//     }

//     depthFirst(fn: nodeFn<T>) {
//         fn(this);
//         if (this.leftBranch != null) {
//             this.leftBranch.depthFirst(fn);
//         }
//         if (this.rightBranch != null) {
//             this.rightBranch.depthFirst(fn);
//         }
//     }

//     bfHelper(hold: BTN<T>[], counter: number) {
//         //hold.push(this)
//         counter++

//         if (this.leftBranch != null) {
//             hold.push(this.leftBranch)
//         }
//         if (this.rightBranch != null) {
//             hold.push(this.rightBranch)
//         }
//         if (hold[counter]) {
//             hold[counter].bfHelper(hold, counter);
//         } else {
//             console.log("end")
//         }
//     }

//     breadthFirst(fn: nodeFn<T>) {
//         var hold = [this];
//         var counter = 0;
//         this.bfHelper(hold, counter);
//         hold.forEach(fn);

//     }
// }


// Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

// Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words. 

// Example 1:

// Input: queries = ["cbd"], words = ["zaaaz"]
// Output: [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
// Example 2:

// Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// Output: [1,2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").


// Constraints:

// 1 <= queries.length <= 2000
// 1 <= words.length <= 2000
// 1 <= queries[i].length, words[i].length <= 10
// queries[i][j], words[i][j] are English lowercase letters.

// function smallerByFrequency(queries: string[], words: string[]): number[] {
//     var querySmallest: number[] = [];
//     for (var q of queries) {
//         querySmallest.push(countOfSmallestLetter(q))
//     }

//     var wordsSmallest: number[] = [];
//     for (var w of words) {
//         wordsSmallest.push(countOfSmallestLetter(w))
//     }

//     var answers: number[] = [];
//     var answer: number = 0;
//     if (querySmallest.length <= wordsSmallest.length) {
//         for (var o of querySmallest) {
//             answer = compare(o, wordsSmallest)
//             answers.push(answer)
//         }
//     } else {
//         for (var o of wordsSmallest) {
//             console.log(o)
//             console.log(querySmallest)
//             answer = compare(o, querySmallest)
//             answers.push(answer)
//         }

//     }
//     return answers

// }

// function countOfSmallestLetter(s: string): number {
//     var compare: string = s[0];
//     for (var i = 1; i < s.length; i++) {
//         if (s[i] < compare) {
//             compare = s[i];
//         }
//     }
//     return countSmallest(s, compare)
// }

// function countSmallest(s: string, c: string): number {
//     var count = 0;
//     for (var l of s) {
//         if (l === c) {
//             count++;
//         }
//     }
//     return count;
// }

// function compare(n: number, na: number[]): number {
//     var lessThan: number = 0;
//     for (var a of na) {
//         if (n < a) {
//             lessThan++
//         }
//     }
//     return lessThan
// }

// // smallerByFrequency(["cbd"], ["zaaaaz"]);
// smallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]);




