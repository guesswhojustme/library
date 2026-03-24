const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('page');
const readingStatus = document.getElementById('status');
const addBookBtn = document.getElementById('add-book');
const bookDiv = document.getElementById('book-div');
const bookContainer = document.querySelector('.books-container')
const form = document.getElementById('form');

class Book {
  constructor(title, author, page, id, status){
    this.title = title;
    this.author = author; 
    this.page = page;
    this.id = id;
    this.status = status;
  }

}

Book.prototype.showBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.page}`;
}

let myLibrary = [];

const defaultBook = new Book('The Chronicles of Narnia', 'C.S. Lewis', '768', crypto.randomUUID(), 'read');

myLibrary.push(defaultBook)

function displayDefaultBook(){
    const defaultBookAuthor = document.createElement('span');
    defaultBookAuthor.textContent = defaultBook.author;

    const defaultBookTitle = document.createElement('span')
    defaultBookTitle.classList.add('bookStyle')
    defaultBookTitle.textContent = defaultBook.title;

    const defaultBookPage = document.createElement('span')
    defaultBookPage.textContent = defaultBook.page;

    bookDiv.append(defaultBookAuthor, defaultBookTitle, defaultBookPage)
}

displayDefaultBook();

function addBookToLibrary() {
  if(title.value == '' || author.value == '' || pages.value == '') {
    alert("MISSING INPUT!");
    return
  }

  const newBook = new Book(title.value, author.value, pages.value, crypto.randomUUID(), readingStatus.value)
  myLibrary.push(newBook);

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
  newBtn4.textContent = "remove"
  newBtn4.classList.add('btn4Style')

  const newBtnDiv = document.createElement('div');
  newBtnDiv.id = 'buttons-div';
  newDiv.appendChild(newBtnDiv);

  const first3BtnDiv = document.createElement('div');
  newBtnDiv.appendChild(first3BtnDiv);

  first3BtnDiv.append(newBtn1, newBtn2, newBtn3)
  newBtnDiv.appendChild(newBtn4);

  newBtn1.addEventListener('click', () => {
    console.log("havent read button 'clicked'");
    myLibrary.forEach(book => {
      if(book.id == newDiv.id){
        book.status = "havent read"
      }
    })
    newBookDiv.style.backgroundColor = "#d9d9d9";
    newBookTitle.style.color = "black";
    newBookAuthor.style.color = "black";
    newBookPage.style.color = "black";
    displayBook();
  })

  newBtn2.addEventListener('click', () => {
    console.log("reading button 'clicked'");
    myLibrary.forEach(book => {
      if(book.id == newDiv.id){
        book.status = "reading";
      }
    })
    newBookDiv.style.backgroundColor = "#9d9d9d"
    newBookTitle.style.color = "black";
    newBookAuthor.style.color = "black";
    newBookPage.style.color = "black";
    displayBook();
  })

  newBtn3.addEventListener('click', () => {
    console.log("done reading button 'clicked'");
    myLibrary.forEach(book => {
      if(book.id == newDiv.id){
        book.status = "done reading";
      }
    })
    newBookDiv.style.backgroundColor = "#9d9d9d";
    newBookTitle.style.color = "white";
    newBookAuthor.style.color = "white";
    newBookPage.style.color = "white";
    displayBook();
  });

  newBtn4.addEventListener('click', () => {
  console.log("Remove button 'clicked'");
  myLibrary.filter(book => book.id !== newDiv.id)
  console.log(myLibrary);
  displayBook();
  newDiv.remove();
  })
  
  const newBookAuthor = document.createElement('span');
  newBookAuthor.textContent = author.value;

  const newBookTitle = document.createElement('span');
  newBookTitle.classList.add('bookStyle');

  newBookTitle.textContent = title.value;
  const newBookPage = document.createElement('span');
  newBookPage.textContent = pages.value;

  newBookDiv.append(newBookAuthor, newBookTitle, newBookPage)
  form.reset();
}

function displayBook (){
  myLibrary.forEach(book => {
    console.log(book);
  })
}

console.log(myLibrary[0].showBookInfo());

addBookBtn.addEventListener('click', () => {
  addBookToLibrary();
  displayBook();
})

