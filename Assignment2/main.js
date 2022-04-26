// Assignment #2:
// 1. Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as a parameter to the callback function.
const all = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
};

// Sample:
const allAreLessThanSeven = all([1, 2, 9], (num) => num < 7);
console.log(allAreLessThanSeven); // false

// 2. Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
const contains = (obj, value) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (contains(obj[key], value)) {
        return true;
      }
    } else if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

// Sample Object:
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const searcheInNestedObject = contains(nestedObject, "foo2");
console.log(searcheInNestedObject); //true
