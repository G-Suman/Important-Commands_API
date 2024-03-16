// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc..

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

//replace - remove the whitespaces between of Strings
function trimMiddleSpaces(str) {
  console.log("Original String:", str);
  console.log("After middle trim:", str.replace(/\s+/g, ''));
}

trimMiddleSpaces(" He llo Worl d");  

// concat
function concatenateStrings(str1, str2) {
  console.log("Concatenating:", str1, str2);
  console.log("After concat:", str1.concat(str2));
}
concatenateStrings("Hello", " World");

// charAt
function getCharAt(str, index) {
  console.log("Original String:", str);
  console.log("Character at index", index, ":", str.charAt(index));
}
getCharAt("Hello World", 6);

// charCodeAt
function getCharCodeAt(str, index) {
  console.log("Original String:", str);
  console.log("Character code at index", index, ":", str.charCodeAt(index));
}
getCharCodeAt("Hello World", 6);

// startsWith
function startsWithString(str, searchString) {
  console.log("Original String:", str);
  console.log("Starts with", searchString, "?", str.startsWith(searchString));
}
startsWithString("Hello World", "Hello");

// endsWith
function endsWithString(str, searchString) {
  console.log("Original String:", str);
  console.log("Ends with", searchString, "?", str.endsWith(searchString));
}
endsWithString("Hello World", "World");

// includes
function includesString(str, searchString) {
  console.log("Original String:", str);
  console.log("Includes", searchString, "?", str.includes(searchString));
}
includesString("Hello World", "Hello");

// repeat
function repeatString(str, count) {
  console.log("Original String:", str);
  console.log("Repeated", count, "times:", str.repeat(count));
}
repeatString("Hello", 3);

