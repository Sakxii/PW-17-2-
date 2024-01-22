function arrangeTitlesAlphabetically(books, callback) {
    const titles = books.map(book => book.title);
    const sortedTitles = titles.sort();
    callback(sortedTitles);
  }
  
  const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ];
  
  arrangeTitlesAlphabetically(books, (sortedTitles) => {
    console.log("Titles in alphabetical order:", sortedTitles);
  });
  