// You a given a number N. You need to print the pattern for the given value of N.
// for N = 2 the pattern will be 
// 2 2 1 1
// 2 1
// for N = 3 the pattern will be 
// 3 3 3 2 2 2 1 1 1
// 3 3 2 2 1 1
// 3 2 1
// Note : Instead of printing new line print a "$" without quotes.

class Solution {
  printPat(n){
    let strings = [];
    let bigString = '';
    for (let i = n; i > 0; i--) {
        let string = `${i} `;
        for (let j = n; j > 1; j--) {
            string += i + ' ';
        }
        strings[i - 1] = string;
    }
    for (let i = 0; i < n; i++) {
        let string = '';
        for (let j = n - 1; j >= 0; j--) {
            string += strings[j];
            strings[j] = strings[j].substring(`${j+1} `.length);
        }
        bigString += string + '$';
    }
    console.log(bigString);
  }
}
