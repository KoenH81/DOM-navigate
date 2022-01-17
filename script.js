let x = document.querySelector('ol').children[0];
console.log(x);
let y = document.querySelector('ol').firstElementChild;
console.log(y);

let a = document.querySelector('ol').children[0];
let b = document.querySelector('ol').children[4];
let c = document.querySelector('ol');

c.insertBefore(b, a);

console.log(document.querySelector('ol').children[0]);

