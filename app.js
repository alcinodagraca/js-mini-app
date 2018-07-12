// var titles = document.getElementsByClassName('title');

//Checar se é ou não um Array
//console.log(Array.isArray(titles));

//Transformar em um Array
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item) {
//   console.log(item);
// });

// var list = document.querySelectorAll('#book-list li .name');
//
// Array.from(list).forEach(function (book) {
//   book.textContent += ' (book title)';
// });
//
// const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>list and list and more list</h2>';
// bookList.innerHTML += '<p>This is how you add some html</p>';


// console.log('The parent node is: ', bookList.parentNode);
// console.log('The parent node is: ', bookList.parentElement.parentElement);
//
// bookList.parentElement.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';

// var btns = document.querySelectorAll('#book-list .delete');
//
// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//
//     //li targered from .delete button
//     const li = e.target.parentElement;
//
//     //ul targered from .delete button
//     li.parentNode.removeChild(li);
//
//   });
// });
//
// var link = document.getElementById('google');
//
// link.addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('the navigation to '+e.target.textContent+' was prevented!');
// }, false);

//Delete books
var list = document.querySelector('#book-list ul');

list.addEventListener('click', function (e) {

    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
    }

});

//Add Books
var addForms = document.forms['add-book'];

addForms.addEventListener('submit', function (e) {

    e.preventDefault();
    const value = addForms.querySelector('input[type="text"]').value;


    //Create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add Contet
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add class
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //Append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});

// hide Books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e) {
  if (hideBox.checked) {
    list.style.display = "none";
  }else {
    list.style.display = "initial";
  }
});

//Filter Books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e) {
  //Pegar o termo digitado no input e colocar em LowerCase
  const term = e.target.value.toLowerCase();
  //Pegar as o titulo dos livros a comparar
  var books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
    //Armazenar os titulo numa constante
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});
