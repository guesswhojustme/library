const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('page');
const addBookBtn = document.getElementById('add-book')


const bookID = crypto.randomUUID();

function Book(title, author, page, id) {
  this.title = title;
  this.autohor = author; 
  this.page = page;
  this.id = id;
}

Book.prototype.showBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.autohor}, Pages: ${this.page}`;
}

const defaultBook = new Book('The Chronicles of Narnia', 'C.S. Lewis', '768', bookID);

function addBookToLibrary(title, author, page){
    const addedBook = new Book(title, author, page, bookID)
 
    return addedBook;
}

const myLibrary = [defaultBook];

function displayBooks(library){
  for(i = 0; i < library.length; i++){
    library[i]
  }
  return library;
}

myLibrary.push(addBookToLibrary('Test', 'Test', 123))
myLibrary.push(addBookToLibrary('Test1', 'Test1', 1234))

console.log(displayBooks(myLibrary));

addBookBtn.addEventListener('click', () => {
  myLibrary.push(addBookToLibrary(title.value, author.value, pages.value, bookID))
  console.log(addBookToLibrary(title.value, author.value, pages.value, bookID));
  console.log(displayBooks(myLibrary));
})


