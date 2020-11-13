// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}





// UI Constructor => will contain methods to deal with UI
function UI() {}

// add a book to the list
UI.prototype.addBookToList = function(book) {
    const list  = document.getElementById('book-list');

    // create table row to save the book inside it
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row);

}

// clear fields function
    UI.prototype.clearFields = function() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }


// Event listeners
document.getElementById('book-form').addEventListener('submit',function(e) {
    e.preventDefault();

    // get forms fields and their values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // inistantiate book from book constructor
    const book = new Book(title, author, isbn);   

    // insitantiate ui object from UI constructor
    const ui = new UI();


    // add a book to the list
    ui.addBookToList(book);

    // clear all fields
    ui.clearFields();
});