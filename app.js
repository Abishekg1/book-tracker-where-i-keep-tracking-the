const bookForm = document.querySelector("#book-form");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const bookList = document.querySelector("#book-list");
const emptyMessage = document.querySelector("#empty-message");
// the list of books shown on the page
let state=[];

function render(){
    if (state.length === 0){
        emptyMessage.style.display = "block";
    }else{
        emptyMessage.style.display="none";
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Add book clicked");
    if (titleInput.value === "" || authorInput.value === "") {
    return;
}

}

console.log(`Books at startup: ${state.length}`);
render();
bookForm.addEventListener("submit", handleFormSubmit);