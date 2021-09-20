// // alert('hello, js');
// // console.log('1');

// // let age = 25;
// // let year = 2010;

// // console.log(age , year);

// // age = 30;
// // console.log(age);

// // const points = 100;
// // // points = 40; doesn't work
// // console.log(points);

// // var score = 75;
// // console.log(score);

// // //strings
// // console.log('hello, world');
// // let email = 'mario@gmail.com'
// // console.log(email);
// // //string concatenation

// // let firstName = 'Brandon';
// // let lastName = 'Sanderson';

// // let fullName = firstName + ' ' + lastName ;
// // console.log(fullName);

// // //getting characters

// // console.log(fullName[0]);
// // console.log(fullName[2]);

// // //string length

// // console.log(fullName.length);

// // // string methods

// // console.log(fullName.toUpperCase());
// // let result = fullName.toLowerCase();

// // console.log(result , fullName);

// // let index = email.indexOf('@');
// // console.log(index);

// // //common string methods
// // let emails = 'mario@gmail.com.uk';

// // //let results = email.lastIndexOf('g');
// // //let results = email.slice(0 , 8);

// // //let results = emails.substr(4,9);
// // let results = emails.replace('m','w');


// // console.log(results);

// let radius = 10;
// const pi = 3.14;
// // console.log(radius , pi);

// //math operators + , - , * , / , **, %

// // console.log(10 / 2);

// // let result = radius % 3;
// // let result = pi * radius **2;

// //order of operation - BIDMAS 

// // let result = 5 *(10-3) **2;

// // console.log(result);

// let likes = 10;

// // likes = likes + 1;
// // likes++;
// // likes--;
// // likes +=10;
// //  likes -=5;
// // likes *=2;
// // likes /=2;

// // console.log(likes);
// //NaN - not a number
// // console.log(5/'hello');

// let result = 'the blog has ' +likes + ' likes ';
// console.log(result);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way

//let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';


//template string way

let result = `the blog called ${title} by ${author} has ${likes} likes`;

console.log(result);

let html = `
<h2> ${title} </h2>
<p> ${author} </p>
<span> The blog has ${likes} likes </span>
`;

console.log(html);

