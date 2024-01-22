function manipulateString(str) {
    const uppercaseString = str.toUpperCase();
    function logString() {
      console.log(`The manipulated string is: ${uppercaseString}`);
    }
    return logString;
  }
  
  const logManipulatedString = manipulateString("hello world");
  logManipulatedString();
  