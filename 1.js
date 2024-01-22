function doubleWithCallback(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleWithCallback(numbers, (num) => num * 2);
  console.log(doubledNumbers);
  