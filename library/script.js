const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").checked;
let newBook = new Book(title, author, pages, read);

function addBookToLibrary(title, author, pages, read) {}

const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
let newBookForm = document.querySelector(".form-control");

addBtn.addEventListener("click", () => {
  newBookForm.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  newBookForm.style.display = "none";
});
