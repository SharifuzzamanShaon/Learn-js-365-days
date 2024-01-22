// let utcDate = new Date(); // this will be a date in UTC
// let localDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'America/New_York' }));

// console.log('UTC: ' + utcDate);
// console.log('Local: ' + localDate);



const value = Math.floor(Date.now());
// console.log(value);


// const date = new Date();
// console.warn(typeof date);
// console.warn(date.toString());
// console.warn(date.toDateString());
// console.warn(date.toLocaleString());

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getHours());


///**********Convart time to plain Number *********

let d = new Date();
let d2 = Date.now()
console.log("d",d); //2023-08-09T16:46:18.004Z
console.log("d",d.getTime());  // 1691600002814
console.log("d2",d2); /// 1691600002814
console.warn(d.toLocaleString()); // 8/9/2023, 11:02:42 PM

// convart to mili sec.

console.log(Math.floor(new Date()/1000));