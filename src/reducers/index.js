//static list of books
//static arry, no arguments needed, no action because this won't be changed
const booksReducer = () = {
  return [
    { title: 'The Martian', author: 'Andy Weir', publishedDate: 2011, genre: 'Science Fiction' pages: 369 },
    { title: 'Red Sparrow', author: 'Jason Matthews' publishedDate: 2013 genre: 'Spy Thriller' pages: 434 },
    { title: 'I Know This Much is True' author: 'Wally Lamb' publishedDate: 1998 genre: 'Psychological Fiction' pages: 912 },
    { title: "Through Grandpa's Eyes" author: 'Patricia MacLachlan' publishedDate: 1980 genre: 'Fiction' pages: 40 },
    { title: 'The Last Night of the Earth Poems' author: 'Charles Bukowski' publishedDate: 1992 genre: 'Poetry' pages: 408 },
    { title: 'Honey and Milk' author: ' Rupi Kaur' publishedDate: 2014 genre: 'Poetry' pages: 208 }
  ]
}

//selected book
//currently the IF statement isn't needed because there is only one action type
//BUT legitimate React Redux apps will have many actions
const selectedBookReducer = (selectedBook=null, action) => {
  if (action.type === 'BOOK_SELECTED') {
    return action.payload
  }
  return selectedBook
}
