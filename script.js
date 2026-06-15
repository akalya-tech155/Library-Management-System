let books = [];

function addBook() {
    console.log("Add Book");
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