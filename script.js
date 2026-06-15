let books = [];

function addBook() {
    console.log("Add Book");
}




//ADDED NEW FEATURES IN JAVASCRIPT

let books = [];

function addBook() {

    const bookName =
        document.getElementById("bookName").value;

    books.push(bookName);

    displayBooks();
 
}

function displayBooks() {

    let output = "";

    books.forEach(book => {
        output += `<div class="book">${book}</div>`;
    });

    document.getElementById("bookList").innerHTML = output;




    
//UPDATE SCRIPT.JS


function updateBookCount() {

    document.getElementById("bookCount")
        .innerText =
        `Total Books: ${books.length}`;
}

 function addBook() {

    const bookName =
        document.getElementById("bookName").value;

    books.push(bookName);

    displayBooks();

    updateBookCount();
 }}