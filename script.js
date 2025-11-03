const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('page');
const addBookBtn = document.getElementById('add-book');
const bookDiv = document.getElementById('book-div');
const bookContainer = document.querySelector('.books-container')
const form = document.getElementById('form');

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

const defaultBook = new Book('The Chronicles of Narnia', 'C.S. Lewis', '768', crypto.randomUUID());
const defaultBook1 = new Book('The Chronicles of Narnia', 'C.S. Lewis', '768', crypto.randomUUID());

const defaultBookAuthor = document.createElement('span');
defaultBookAuthor.textContent = defaultBook.author;
const defaultBookTitle = document.createElement('span')
defaultBookTitle.style.fontWeight = "bold";
defaultBookTitle.style.fontSize = "1.15rem";
defaultBookTitle.textContent = defaultBook.title;
const defaultBookPage = document.createElement('span')
defaultBookPage.textContent = defaultBook.page;

bookDiv.appendChild(defaultBookAuthor)
bookDiv.appendChild(defaultBookTitle)
bookDiv.appendChild(defaultBookPage)

let myLibrary = [defaultBook];

addBookBtn.addEventListener('click', () => {
  const newBook = new Book(title.value, author.value, pages.value, crypto.randomUUID());
  myLibrary.push(newBook);

  console.log(myLibrary);

  const newDiv = document.createElement('div');
  newDiv.id = newBook.id
  newDiv.style.paddingTop = "20px"
  bookContainer.appendChild(newDiv);

  const newBookDiv = document.createElement('div');
  newBookDiv.id = "book-div";
  newDiv.appendChild(newBookDiv);

  const newBtn1 = document.createElement('button');
  newBtn1.textContent = "haven't read";
  newBtn1.id = 'hr'
  const newBtn2 = document.createElement('button');
  newBtn2.textContent = "reading";
  newBtn2.id = 'r'
  const newBtn3 = document.createElement('button');
  newBtn3.textContent = "done reading";
  newBtn3.id = 'dr'
  const newBtn4 = document.createElement('button');
  newBtn4.textContent = "Remove";
  newBtn4.style.backgroundColor = "black";
  newBtn4.style.color = "white";
  newBtn4.style.width = "100px";
  newBtn4.style.cursor = "pointer";

  const newBtnDiv = document.createElement('div');
  newBtnDiv.id = 'buttons-div';
  newDiv.appendChild(newBtnDiv);

  const first3BtnDiv = document.createElement('div');
  newBtnDiv.appendChild(first3BtnDiv);

  first3BtnDiv.appendChild(newBtn1);
  first3BtnDiv.appendChild(newBtn2);
  first3BtnDiv.appendChild(newBtn3);
  newBtnDiv.appendChild(newBtn4);

  newBtn1.addEventListener('click', () => {
  console.log("havent read button 'clicked'");
  newBookDiv.style.backgroundColor = "#d9d9d9";
  newBookTitle.style.color = "black";
  newBookAuthor.style.color = "black";
  newBookPage.style.color = "black";
  })

  newBtn2.addEventListener('click', () => {
  console.log("reading button 'clicked'");
  newBookTitle.style.color = "black";
  newBookAuthor.style.color = "black";
  newBookPage.style.color = "black";
  newBookDiv.style.backgroundColor = "#9d9d9d"
  })

  newBtn3.addEventListener('click', () => {
  console.log("done reading button 'clicked'");
  newBookDiv.style.backgroundColor = "#9d9d9d";
  newBookTitle.style.color = "white";
  newBookAuthor.style.color = "white";
  newBookPage.style.color = "white";
  });

  newBtn4.addEventListener('click', () => {
  console.log("Remove button 'clicked'");
  newBtn4.id = newDiv.id
  myLibrary = myLibrary.filter(book => book.id !== newBtn4.id)
  console.log(myLibrary);
  newDiv.remove();
  })
  
  const newBookAuthor = document.createElement('span');
  newBookAuthor.textContent = author.value;
  const newBookTitle = document.createElement('span');
  newBookTitle.style.fontWeight = "bold";
  newBookTitle.style.fontSize = "1.15rem"
  newBookTitle.textContent = title.value;
  const newBookPage = document.createElement('span');
  newBookPage.textContent = pages.value;

  newBookDiv.appendChild(newBookAuthor);
  newBookDiv.appendChild(newBookTitle);
  newBookDiv.appendChild(newBookPage);

  form.reset();
})
