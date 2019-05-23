// Book Class: Represent a Book
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks(){
    // Hardcoded Array of Books
    // const StoredBooks = [{
    //   title: 'Book One',
    //   author: 'John Doe',
    //   isbn: '111111'
    // },
    // {
    //   title: 'Book Two',
    //   author: 'Jane Doe',
    //   isbn: '222222'
    // }];

    // Setting books on that Array
    // const books = StoredBooks;
    const books = Store.getBooks();

    // Looping and passing books into the class Book
    books.forEach((book) => UI.addBookToList(book))
  }

  // Method for adding each book to the list
  static addBookToList(book){
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td align="right">
        <a href="#" class="btn btn-danger btn-sm delete">🗑</a>
        <a href="#" class="btn btn-success btn-sm success">✎</a>
      </td>
    `;
    list.appendChild(row);
  }

  // Method for Showing Modal
  static editBook(el){
    if(el.classList.contains('success')){
      document.getElementById('book-modal').style.display='block';

      document.querySelector('#modal-title').value = el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
      document.querySelector('#modal-author').value = el.parentElement.previousElementSibling.previousElementSibling.textContent;
      document.querySelector('#modal-isbn').value = el.parentElement.previousElementSibling.textContent;
      document.querySelector('#modal-isbn').disabled = true;
      console.log();
    }
  }

  // Method for Deleting a record
  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
      return true;
    }
    return false;
  }

  // Show Alert for incomplete field
  static showAlert(message, className){
    // prepare the Alert message
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    // grab the parent container
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // insert the Prepared Alert Message
    container.insertBefore(div,form);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  // Method for Clearing the input fields
  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
// Store Class: Handles Storage
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }

  static updateBook(title, author, isbn){
    const books = Store.getBooks();
    for(let book of books){
      if(book.isbn === isbn){
        book.title = title;
        book.author = author;
      }
    }
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books At load
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // get Form Values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if(title === '' || author === '' || isbn === ''){
    UI.showAlert('Please Fill in all fields', 'danger')
  } else{
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Add book to Store
    Store.addBook(book);

    // Show Success message
    UI.showAlert('Book Added!', 'success');

    // Clear Fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e)=>{
  // Remove Book From UI
  if(UI.deleteBook(e.target)){
    // Remove Book From Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    // Show Success message
    UI.showAlert('Book Removed!', 'success')
  }
})

// Event: Edit an entry
document.querySelector('#book-list').addEventListener('click', (e)=>{
  UI.editBook(e.target);
})

// Event: Save Edit entry
document.querySelector('#modal-form').addEventListener('submit', (e)=>{
  // Prevent actual submit
  e.preventDefault();
  // get Form Values
  const title = document.querySelector('#modal-title').value;
  const author = document.querySelector('#modal-author').value;
  const isbn = document.querySelector('#modal-isbn').value;

  Store.updateBook(title, author, isbn);

  document.getElementById('book-modal').style.display='none';

  window.location.reload();
})