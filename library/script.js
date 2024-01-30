let formSumit = document.getElementById("new-book-form");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
let newBookForm = document.querySelector(".form-control");

const myLibrary = [];
console.log(myLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);

  newBookForm.style.display = "none";

  myLibrary.push(newBook);
  render();
}

function render() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

formSumit.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
});

addBtn.addEventListener("click", () => {
  newBookForm.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  newBookForm.style.display = "none";
});
