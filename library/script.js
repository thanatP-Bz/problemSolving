let formSumit = document.getElementById("new-book-form");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
let newBookForm = document.querySelector(".form-control");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/* add book to library */
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);

  /* add book to library */
  myLibrary.push(newBook);

  /* add book to local storage */
  addBookToLocalStorage();

  render();

  /* set all values to defualt */
  formSumit.reset();
}

/* addbook to local storage */
function addBookToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

/* retreive item from local storage */
function getBookFromLocalStorage() {
  let storedBook = localStorage.getItem("myLibrary");

  if (storedBook) {
    myLibrary = JSON.parse(storedBook);
    render();
  } else {
    myLibrary = [];
  }

  return myLibrary;
}

/* delete item from local storage */
function removeItemFromLocalStorage(index) {
  let items = getBookFromLocalStorage();

  if (items.length > 0) {
    items = items.filter(function (item, i) {
      return i !== index;
    });

    localStorage.setItem("myLibrary", JSON.stringify(items));
  }
}

/* load item from local storage */
window.addEventListener("load", () => {
  getBookFromLocalStorage();
});

function render() {
  let cardControl = document.querySelector(".card-control");
  cardControl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let cardContainer = document.createElement("div");
    let cardTitle = document.createElement("div");
    let cardAuthor = document.createElement("div");
    let cardPages = document.createElement("div");
    let cardRead = document.createElement("div");
    let deleteButton = document.createElement("button");

    /* style */
    cardContainer.className = "card";
    cardTitle.className = "card-title";
    cardAuthor.className = "card-author";
    cardPages.className = "card-pages";
    cardRead.className = "card-read";

    cardTitle.innerHTML = "<h3>title:</h3><p>" + book.title + "</p>";
    cardAuthor.innerHTML = "<h3>author:</h3><p>" + book.author + "</p>";
    cardPages.innerHTML = "<h3>pages:</h3><p>" + book.pages + "</p>";

    cardRead.innerHTML = book.read
      ? 'Read <i class="fa fa-check read-icon"></i>'
      : 'Not read yet <i class="fa-regular fa-clock not-read-icon"></i>';

    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      removeItemFromLocalStorage(i);
      deleteBook(i);
    });

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPages);
    cardContainer.appendChild(cardRead);
    cardContainer.appendChild(deleteButton);

    cardControl.appendChild(cardContainer);
  }
}

/* delete book */
function deleteBook(index) {
  myLibrary.splice(index, 1);

  render();

  showAlert("the book has been deleted");
}

function areAllInputsEmpty(form) {
  let inputs = form.querySelectorAll(
    'input[type="text"], input[type="number"], input[type="checkbox"]'
  );

  for (let input of inputs) {
    if (input.type === "checkbox") {
      if (input.checked) {
        return false;
      }
    } else {
      if (input.value.trim() === "") {
        return true;
      }
    }
  }

  return false;
}

/* alert */
let interValId;
let alert = document.querySelector(".alert");
let alertMessage = document.createElement("div");
function showAlert(message) {
  alertMessage.innerHTML = "";
  alertMessage.innerText = message;

  alert.appendChild(alertMessage);

  alert.classList.add("show-alert");

  interValId = setInterval(() => {
    alert.classList.remove("show-alert");
    clearInterval(interValId);
  }, 3000);
}

/* form submit */

formSumit.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLocalStorage(); // Update local storage after modification
  render();

  if (areAllInputsEmpty(formSumit)) {
    showAlert("please provide all values!");
  } else {
    addBookToLibrary();
    showAlert("new book added :)");
  }

  newBookForm.style.display = "none";
});

addBtn.addEventListener("click", () => {
  newBookForm.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  newBookForm.style.display = "none";
});
