const bookForm = document.querySelector("#book-form");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const bookList = document.querySelector("#book-list");
const emptyMessage = document.querySelector("#empty-message");
// the list of books shown on the page
let state=[];
function makeBookItem(book) {
    const li = document.createElement("li");
    li.className = "book-item";

    const info = document.createElement("div");
    info.className = "book-info";

    const title = document.createElement("div");
    title.className = "book-title";
    title.textContent = book.title;

    const author = document.createElement("div");
    author.className = "book-author";
    author.textContent = book.author;

    const status = document.createElement("span");
    status.className = "status status-to-read";
    status.textContent = "To read";


    info.append(title, author,status);
    li.append(info);
    

    return li;
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