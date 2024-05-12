 // create an array and store 3 names of cars in it
      // storing values in array
      const arr = ["civic", "corolla", "audi"];
      // accessing values in array values can be accessed by index
      console.log(arr[2]);
      // lenght of arr
      let size = arr.length;
      console.log(arr.length);
      // pop()--if we need last element we conoslo.log new varaible in which array is poped & if we need to remove last element from array then we console.log arr
      let dellastelement = arr.pop();
      console.log(dellastelement);
      console.log(arr);
      // The push() method adds a new element to an array (at the end):
      let pushelement = arr.push("swift");
      console.log(arr);
      // The first parameter (2) defines the position where new elements should be added (spliced in).
      // The second parameter (0) defines how many elements should be removed(after insertating elements).
      // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
      const arr1 = ["apple", "bnana", "mango", "pineapple", "guava"];
      console.log(arr1);
      let ok = arr1.splice(2, 0, "kiwi", "lemon", "lala", "fruita");
      console.log(arr1);

      // The shift() method removes the first array element and "shifts" all other elements to a lower index.
      const fruits = ["banana", "orange", "apple", "mango"];
      let removefruits = fruits.shift();
      console.log(fruits);
      console.log(fruits[0]);

      // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
      let addelementstart = fruits.unshift("khajoor");
      console.log(fruits);

      // The indexOf() method in JavaScript is used to search an array for a specific element and returns the first index at which the element is found, or -1 if the element is not found.
      let fruitss = ["apple", "banana", "cherry", "date"];
      console.log(fruitss.indexOf("cherry"))

      // +1 will increase the position of cheery
      let index = fruitss.indexOf("cherry") + 1;
      console.log(index); // Output: 3

      // Array.includes() to arrays. This allows us to check if an element is present in an array if present then it will show "true" otherwise "false" (including NaN, unlike indexOf).
      const fruitsss = ["banana", "orange", "apple", "mango"];
      let include = fruitsss.includes("orange");
      console.log(include);

      // De-Structuring of array

      let [top1, , top3] = fruitsss;
      console.log(
        `My favourite fruit is ${top1} and most favourite is ${top3}`
      );

      // swapping values in array

      // 1. `const edibles = ["food", "fruits"];`: Initializes an array `edibles` containing two elements, `"food"` and `"fruits"`.
      // 2. `let [positionOne, positionTwo] = edibles;`: Destructures the `edibles` array, assigning `"food"` to `positionOne` and `"fruits"` to `positionTwo`.
      // 3. `const temp = positionOne;`: Stores the value of `positionOne` (which is `"food"`) in a temporary variable `temp`.
      // 4. `positionOne = positionTwo;`: Assigns the value of `positionTwo` (`"fruits"`) to `positionOne`, effectively swapping their values.
      // 5. `positionTwo = temp;`: Assigns the value of `temp` (`"food"`) to `positionTwo`, completing the swap.
      // 6. `console.log(positionOne, positionTwo);`: Outputs the swapped values of `positionOne` and `positionTwo`, which are now `"fruits"` and `"food"` respectively.
      // So, the output of this code will be `"fruits, food"`, showing that the values at the two positions have been successfully swapped in the array `edibles`.

      const shoes = ["black shoes", "blues shoes"];
      let [position1, position2] = shoes;
      const temp = position1;
      position1 = position2;
      position2 = temp;
      console.log(position1, position2);

    // Write a function that takes an array as input and removes the last element using the pop method. Return the modified array
      const brr=[1,2,3,4]
      const fun=(abc)=>{
        return brr.pop();
      }
      const crr=brr.pop()
      console.log(brr)

     //Write a function that takes an array of objects as input.
    //Use array destructuring to extract specific properties from each object
    //and perform some operations based on those properties.
    const obj1={
        name: "Ali",
        age: 24
    };
    const obj2={
        name: "Hassan",
        age: 25
    };
    const obj3={
        name: "Adil",
        age: 22
    };
    const obj4={
        name: "Tahir",
        age: 32
    };
    const arrObj=[obj1,obj2,obj3,obj4];
    const [a,b]=arrObj;
    console.log(a,b);
    const {age:front}=a;
    const {name:back}=b;
    console.log(front,back);
    

    