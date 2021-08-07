let book = ["Atomic habits","You can win","Rich dad poor dad"];
  function showAllBooks(){
       let b = book;
      for(i=0;i<b.length;i++){
        console.log(b[i]);

      }
  }
  function addBook(name){
      //let b = book;
      book.push(name);
      console.log("Book has been added succesfully \n updated list is",book)
  }

module.exports = {
    book:book,
    showAllBooks:showAllBooks,
    addBook:addBook,
}