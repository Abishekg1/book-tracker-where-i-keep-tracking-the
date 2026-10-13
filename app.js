const bookForm = document.querySelector("#book-form");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const bookList = document.querySelector("#book-list");
const emptyMessage = document.querySelector("#empty-message");
// the list of books shown on the page
function loadBooks() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === null) {
        return [];
    }

    return JSON.parse(saved);
}
function saveBooks() {
    const saved = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, saved);
}
const STORAGE_KEY = "bookTrackerBooks";
const STATUSES = ["to-read", "reading", "finished"];
const STATUS_LABELS = {
    "to-read": "To read",
    "reading": "Reading",
    "finished": "Finished"
};

let state=loadBooks();
function makeBookItem(book) {
    const li = document.createElement("li");
    li.className = "book-item";

    const info = document.createElement("div");
    info.className = "book-info";
    info.addEventListener("click", function() {
    toggleStatus(book.id);
});

    const title = document.createElement("div");
    title.className = "book-title";
    title.textContent = book.title;

    const author = document.createElement("div");
    author.className = "book-author";
    author.textContent = book.author;

    const status = document.createElement("span");
    status.className = "status status-" + book.status;
    status.textContent = STATUS_LABELS[book.status];



    info.append(title, author,status);
    const deleteButton = makeDeleteButton(book.id);
    li.append(info, deleteButton);
    

    return li;
}

function toggleStatus(id){
    const book=state.find(function(item){
        return item.id === id;
    });
    if(!book){
        return;
    }
    const position = STATUSES.indexOf(book.status);
    const nextPosition = (position + 1) % STATUSES.length;
    book.status = STATUSES[nextPosition];
    saveBooks();
    render();
}
function removeBook(id) {
    state = state.filter(function(book) {
        return book.id !== id;
    });

    saveBooks();
    render();
}
function makeDeleteButton(id) {
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "delete-button";
    button.addEventListener("click", function() {
        removeBook(id);
    });
    return button;
}
function render(){
    bookList.innerHTML = "";
    state.forEach(function(book){
        bookList.appendChild(makeBookItem(book));
    });
    
    if (state.length === 0){
        emptyMessage.style.display = "block";
    }else{
        emptyMessage.style.display="none";
    }
}
function makeBook(title,author){
    return{
        id: Date.now(),
        title: title,
        author: author,
        status: "to-read"
    }
}
function addBook(title , author){
    const book = makeBook(title,author);
    console.log(book);
    state.push(book);
    saveBooks();
    render();
    
    
}
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Add book clicked");
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    if (title=== "" || author === "") {
    return;
}
addBook(title, author);
bookForm.reset();
titleInput.focus();
}

console.log(`Books at startup: ${state.length}`);
render();
bookForm.addEventListener("submit", handleFormSubmit);