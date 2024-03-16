// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);

  // push()
  function pushExample(arr, ...elements) {
    console.log("Original Array:", arr);
  
    arr.push(...elements);
    console.log("After push:", arr);
  }
  
  pushExample([1, 2], 3, 4);
  
  
  // pop()
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]);
  
  // shift()
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]);
  
  // unshift()
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // concat()
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  
  // forEach()
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);

 // splice()
    function spliceExample(arr, index, count, ...elements) {
        console.log("Original Array:", arr);
    
        arr.splice(index, count, ...elements);
        console.log("After splice:", arr);
    }
    spliceExample([1, 2, 3, 4, 5], 2, 2, 6, 7);
    
    // slice()
    function sliceExample(arr, start, end) {
        console.log("Original Array:", arr);
    
        let newArr = arr.slice(start, end);
        console.log("After slice:", newArr);
    }
    sliceExample([1, 2, 3, 4, 5], 2, 4);
    
    // reduce()
    function reduceExample(arr) {
        console.log("Original Array:", arr);
    
        let sum = arr.reduce(function(accumulator, item) {
        return accumulator + item;
        }, 0);
        console.log("After reduce:", sum);
    }
    reduceExample([1, 2, 3, 4, 5]);
    
    // reduce()
    function reduceExample(arr) {
        console.log("Original Array:", arr);
    
        let sum = arr.reduce(function(accumulator, item) {
        return accumulator + item;
        }, 0);
        console.log("After reduce:", sum);
    }
    reduceExample([1, 2, 3, 4, 5]);

    // indexOf()
    function indexOfExample(arr, element) {
        console.log("Original Array:", arr);
    
        let index = arr.indexOf(element);
        console.log("Index of", element, ":", index);
    }
    indexOfExample([1, 2, 3, 4, 5], 3);

    // lastIndexOf()
    function lastIndexOfExample(arr, element) {
        console.log("Original Array:", arr);
    
        let index = arr.lastIndexOf(element);
        console.log("Last index of", element, ":", index);
    }
    lastIndexOfExample([1, 2, 3, 4, 5, 3], 3);

    // includes()
    function includesExample(arr, element) {
        console.log("Original Array:", arr);
    
        let isElementPresent = arr.includes(element);
        console.log(element, "is present:", isElementPresent);
    }

    includesExample([1, 2, 3, 4, 5], 3);

    // every()
    function everyExample(arr) {
        console.log("Original Array:", arr);
    
        let isGreaterThanZero = arr.every(function(item) {
        return item > 0;
        });
        console.log("Every item is greater than zero:", isGreaterThanZero);
    }
    everyExample([1, 2, 3, 4, 5]);

    // some()
    function someExample(arr) {
        console.log("Original Array:", arr);
    
        let isGreaterThanZero = arr.some(function(item) {
        return item > 0;
        });
        console.log("Some items are greater than zero:", isGreaterThanZero);
    }
    someExample([1, 2, 3, 4, 5]);

    // findIndex()
    function findIndexExample(arr) {
        console.log("Original Array:", arr);
    
        let index = arr.findIndex(function(item) {
        return item > 3;
        });
        console.log("Index of first item greater than 3:", index);
    }

    findIndexExample([1, 2, 3, 4, 5]);

    //join()
    function joinExample(arr) {
        console.log("Original Array:", arr);
    
        let str = arr.join(" ");
        console.log("After join:", str);
    }
    joinExample([1, 2, 3, 4, 5]);

    //reverse()
    function reverseExample(arr) {
        console.log("Original Array:", arr);
    
        arr.reverse();
        console.log("After reverse:", arr);
    }

    reverseExample([1, 2, 3, 4, 5]);

    
   