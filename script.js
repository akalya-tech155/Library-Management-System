let books = [];

function addBook() {
    console.log("Add Book");
}

// UPDATED JS FILE

output += `
<div class="book">
    ${book}

    <button
        class="borrow-btn"
        onclick="borrowBook('${book}')">
        Borrow
    </button>

    <button
        class="return-btn"
        onclick="returnBook('${book}')">
        Return
    </button>

</div>`;