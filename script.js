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



//Update addBook():
//Prevent empty book names.


function addBook() {

    const bookName =
        document.getElementById("bookName").value;

    if (bookName.trim() === "") {

        alert("Book name cannot be empty");

        return;
    }

    books.push(bookName);

    displayBooks();
}

// UPDATED JS FILE

function displayBooks() {

    let output = "";

    books.forEach(book => {

        output += `
        <div class="book">
            ${book}
            <button
                class="borrow-btn"
                onclick="borrowBook('${book}')">
                Borrow
            </button>
        </div>`;
    });

    document.getElementById("bookList").innerHTML = output;
}

 
