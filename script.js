const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('page');
const addBookBtn = document.getElementById('add-book');
const bookDiv = document.getElementById('book-div');
const bookContainer = document.querySelector('.books-container')

const bookID = crypto.randomUUID();

function Book(title, author, page, id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author; 
  this.page = page;
  this.id = id;
}

Book.prototype.showBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.page}`;
}

const defaultBook = new Book('The Chronicles of Narnia', 'C.S. Lewis', '768', bookID);

const defaultBookAuthor = document.createElement('span');
defaultBookAuthor.textContent = defaultBook.author;
const defaultBookTitle = document.createElement('span')
defaultBookTitle.textContent = defaultBook.title;
const defaultBookPage = document.createElement('span')
defaultBookPage.textContent = defaultBook.page;

bookDiv.appendChild(defaultBookAuthor)
bookDiv.appendChild(defaultBookTitle)
bookDiv.appendChild(defaultBookPage)

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

console.log(displayBooks(myLibrary));
console.log(defaultBook.author);

addBookBtn.addEventListener('click', () => {
  myLibrary.push(addBookToLibrary(title.value, author.value, pages.value, bookID))
  console.log(addBookToLibrary(title.value, author.value, pages.value, bookID));
  console.log(displayBooks(myLibrary));

  const newDiv = document.createElement('div');
  newDiv.style.paddingTop = "20px"
  bookContainer.appendChild(newDiv);

  const newBookDiv = document.createElement('div');
  newBookDiv.id = "book-div";
  newDiv.appendChild(newBookDiv);

  const newBtn1 = document.createElement('button');
  newBtn1.textContent = "haven't read";
  const newBtn2 = document.createElement('button');
  newBtn2.textContent = "reading";
  const newBtn3 = document.createElement('button');
  newBtn3.textContent = "done reading";
  const newBtn4 = document.createElement('button');
  newBtn4.textContent = "Delete";

  const newBtnDiv = document.createElement('div');
  newBtnDiv.id = 'buttons-div';
  newDiv.appendChild(newBtnDiv);

  const first3BtnDiv = document.createElement('div');
  first3BtnDiv.style.display = 'flex';
  first3BtnDiv.style.gap = '20px';
  newBtnDiv.appendChild(first3BtnDiv);

  first3BtnDiv.appendChild(newBtn1);
  first3BtnDiv.appendChild(newBtn2);
  first3BtnDiv.appendChild(newBtn3);
  newBtnDiv.appendChild(newBtn4);
  
  const newBookAuthor = document.createElement('span');
  newBookAuthor.textContent = author.value;
  const newBookTitle = document.createElement('span');
  newBookTitle.textContent = title.value;
  const newBookPage = document.createElement('span');
  newBookPage.textContent = pages.value;

  newBookDiv.appendChild(newBookAuthor);
  newBookDiv.appendChild(newBookTitle);
  newBookDiv.appendChild(newBookPage);

})


