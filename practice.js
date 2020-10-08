var price = "0.99";
console.log(typeof price);

"use strict";
var oct = 070;
console.log(oct);

var hex = 0x10;
console.log(hex);

var value = 3.2e4;
console.log(value);

var value = 3.2e-4;
console.log(value);

var n = Number.MAX_VALUE * 2;
console.log(n);

var n = Infinity;
console.log(typeof n);

console.log(Number.POSITIVE_INFINITY + '' + Number.NEGATIVE_INFINITY);

var count;
var price = 5.00;

console.log(price/count);

console.log(typeof NaN);

var n = NaN;
if (isNaN(n))
    console.log('NaN!');

var productType = 'Hardware';
console.log(productType.length);

var productType = '   Hardware   ';
console.log('[' + productType.trim() + ']');