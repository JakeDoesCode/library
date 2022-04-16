const grid = document.querySelector('#grid-container');
let library = [
  {
    title: 'Gates Of Fire',
    author: 'Stephen Pressfield',
    pages: '490',
    id: 0,
  },
  {
    title: 'A Game Of Thrones',
    author: 'George R.R. Martin',
    pages: '694',
    id: 1,
  },
  {
    title: 'Is this WiFi Organic?',
    author: 'Dave Farina',
    pages: '286',
    id: 2,
  },
];

let idNum = 3;

function addBook(title, author, pages, id) {
  const bookDiv = document.createElement('div');
  bookDiv.dataset.bookid = id;
  bookDiv.setAttribute('class', 'cards');

  const bookTitle = document.createElement('h1');
  bookTitle.textContent = title;
  bookTitle.setAttribute('class', 'title');

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = author;

  const bookPages = document.createElement('p');
  bookPages.textContent = pages;

  const bookRemove = document.createElement('button');
  bookRemove.textContent = 'Remove';
  bookRemove.setAttribute('class', 'btn');

  bookRemove.addEventListener('click', () => {
    let indexOfBook = library.findIndex((b) => b.id === id);
    library = [
      ...library.slice(0, indexOfBook),
      ...library.slice(indexOfBook + 1),
    ]; // Remove book from library array
    document.querySelector(`[data-bookid="${id}"]`).remove(); // Remove book from DOM
    console.table(library);
  });
  const bookRead = document.createElement('button');
  bookRead.textContent="Read";
  bookRead.classList.add('readBtn')
  

 bookRead.addEventListener('click', () =>{
  bookRead.classList.toggle('hasRead');
 });

  
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  bookDiv.appendChild(bookRead);
  bookDiv.appendChild(bookRemove);
  grid.appendChild(bookDiv);
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const id = document.getElementById('id');


function book(title, author, pages, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;
}

function newBook() {
  const newBook = new book(title.value, author.value, pages.value, idNum);
  return newBook;
}

function newBookLibrary() {
  newBook();
  library.push(newBook());
}

for (const book of library) {
  addBook(book.title, book.author, book.pages, book.id);
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const author = e.target.author.value;
  const pages = e.target.pages.value;
  newBookLibrary();
  addBook(title, author, pages, idNum++); // Increment the book id counter whenever we make a new book
  e.target.reset();
  console.table(library);
});
console.table(library);


