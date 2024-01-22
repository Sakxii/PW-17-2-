
function greetWithPromise(name) {
    return new Promise((resolve) => {
      resolve(`Hello, ${name}!`);
    });
  }
  
  const name = "Mithun";
  
  greetWithPromise(name)
    .then((greeting) => console.log(greeting));
  