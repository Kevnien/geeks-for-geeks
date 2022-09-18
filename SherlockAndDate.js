/*  Problem
Watson gives a date to Sherlock and asks him what is the date on the previous day. Help Sherlock. You are given date in DD MM YYYY format. DD is an integer without leading zeroes. MM is one of the "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November" and "December" (all quotes for clarity). YYYY is also an integer between 1600 and 2000 without leading zeroes. You have to print the date of the previous day in same format.

Input and Output
First line, T (≤ 100), the number of testcases. Each testcase consists of date in specified format. For each testcase, print the required answer in one line. Given date will be a valid date.

Sample Input
3
23 July 1914
2 August 2000
5 November 1999

Sample Output
22 July 1914
1 August 2000
4 November 1999
*/

const months = [
    { month: 'January', days: 31 },
    { month: 'February', days: 28 },
    { month: 'March', days: 31 },
    { month: 'April', days: 30 },
    { month: 'May', days: 31 },
    { month: 'June', days: 30 },
    { month: 'July', days: 31 },
    { month: 'August', days: 31 },
    { month: 'September', days: 30 },
    { month: 'October', days: 31 },
    { month: 'November', days: 30 },
    { month: 'December', days: 31 }
];

let daysInMonthTable = {};

function main(input) {
    daysInMonthTable = getDaysInMonthTable();
    const dates = getDates(input);
    dates.forEach((date) => console.log(getPreviousDay(date)));
}

function getPreviousDay(date) {
    let day = date.day - 1;
    let month = date.month;
    let year = date.year;
    if (day === 0) {
        const monthAsNumber = daysInMonthTable[month].monthAsNumber;
        month = months[(monthAsNumber + 11) % 12].month;
        if (monthAsNumber === 0) year--;
        day = daysInMonthTable[month].days;
        if (day === 28 && year % 4 === 0 && year % 100 > 0) day++;
    }
    return `${day} ${month} ${year}`;
}

function getDates(input) {
    let dates = [];
    dates = input.split('\n');
    dates.shift();
    dates = dates.map((dateString => {
        const splitDate = dateString.split(' ');
        return { day: splitDate[0], month: splitDate[1], year: splitDate[2] };
    }));
    return dates;
}

function getDaysInMonthTable() {
    let daysInMonthTable = {};
    months.forEach(((month, i) => {
        daysInMonthTable[month.month] = { days: month.days, monthAsNumber: i };
    }));
    return daysInMonthTable;
}
