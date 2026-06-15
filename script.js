let books = [];

function addBook() {
    console.log("Add Book");
}


//UPDATE SCRIPT.JS


function updateBookCount() {

    document.getElementById("bookCount")
        .innerText =
        `Total Books: ${books.length}`;
}