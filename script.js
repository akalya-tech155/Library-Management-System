let books = [];

function addBook() {
    console.log("Add Book");
}


//ADDED NEW FEATURES IN JS FILE
function searchBook() {

    const searchText =
        document.getElementById("searchBook")
        .value
        .toLowerCase();

    const books =
        document.querySelectorAll(".book");

    books.forEach(book => {

        if (
            book.innerText
                .toLowerCase()
                .includes(searchText)
        ) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });
}