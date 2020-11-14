// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}



// UI class (contains methods)
class UI {
    // add book to list
    addBookToList(book) {
        const list  = document.getElementById('book-list');

    // create table row to save the book inside it
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete"><i class="far fa-window-close fa-2x"></i></a></td>`

    list.appendChild(row);
    }

    // show alert
    showAlert(message, className) {
        // create a div
    const div = document.createElement('div');
   // add classes to it
    div.className = `alert ${className}`;
   // add text to this div
    div.appendChild(document.createTextNode(message));
   // get the parent
    const container = document.querySelector('.container');
   // get form
    const form = document.querySelector('#book-form');
   // insert alert => using Node.insertBefore
   container.insertBefore(div, form); // this will be added after the h1 directly
   // giding the alert after 2 seconds
    setTimeout(() => {
    document.querySelector('.alert').remove();
    }, 2000);
    }

    // delete book from the list
    deleteBook(target) {
        if(target.parentElement.className === 'delete') {
            // we used parent element twice because <a> tag is generated inside a <td> which is inside a <tr>
            target.parentElement.parentElement.parentElement.remove();
        }
    } 

    // clear fields
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event listeners for the form
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
    console.log(ui);
    // validation
    if(title === '' || author === '' || isbn === '') {
        // error alert 
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // add a book to the list
        ui.addBookToList(book);
        // show alert success when the book is added
        ui.showAlert('Book added successfully', 'success');
        // clear all fields
        ui.clearFields();
    }
});

// Event listener for delete button
// using event delegation
document.getElementById('book-list').addEventListener('click', (e) => {
    // instantiate ui object
    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);

    // show alert after book's deletion
    ui.showAlert('Book Removed', 'error');

    e.preventDefault();
})

