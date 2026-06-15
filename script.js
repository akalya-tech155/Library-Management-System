let books = [];

function addBook() {
    console.log("Add Book");
}


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