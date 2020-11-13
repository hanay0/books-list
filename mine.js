// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// building UI Constructor
function UI() {}

// create a prototype in UI
UI.prototype.addBookToList = function(book) {
    
    // selecting book list table
    const list = document.getElementById('book-list');

    // add table rows to the list 
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete"><i class="far fa-window-close fa-2x"></i></a></td>
        `
        // appending this row to the list as a child
        list.appendChild(row);
}

// clear inputs values after adding a book
UI.prototype.clearInputs = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function(e) {

    // prevent function's default
    e.preventDefault();

    // get input fields and their values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // instantiate book object from Book Constructor
    const book = new Book(title, author, isbn);

    // instantiate ui object from UI Constructor
    const ui = new UI();

    // adding book to the list
    ui.addBookToList(book);

    // clear inputs fields value
    ui.clearInputs();
});