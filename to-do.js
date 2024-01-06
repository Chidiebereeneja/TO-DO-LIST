const addForm =  document.forms['addBooks'];
const ul = document.querySelector('ul');

addForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const formInput = addForm.querySelector('input').value;
  if(formInput === '') {
    formInput.preventDefault();
  }
  const li = document.createElement('li');
  const spanBook = document.createElement('span');
  const deleteBtn = document.createElement('span');

  li.appendChild(spanBook);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  spanBook.classList.add('.bookList');
  spanBook.textContent = formInput;
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.textContent = 'X';

})

ul.addEventListener('click', del => {
  if(del.target.className === 'deleteBtn') {
    const list = del.target.parentElement;
    ul.removeChild(list);
  }
})

const filter = document.forms['searchBar'].querySelector('input[type="search"]');
filter.addEventListener('keyup', e => {
  const inputValue = e.target.value.toLowerCase();
  const liTags = ul.getElementsByTagName('li');
  Array.from(liTags).forEach( individualLi => {
    const liTitle = individualLi.firstElementChild.textContent;
    liTitle.toLowerCase().indexOf(inputValue) != -1 ? individualLi.style.display = 'flex' : individualLi.style.display = 'none';
  })
})

const  hideBox = document.forms['searchBar'].querySelector('input[type="checkbox"]');

hideBox.addEventListener('change', hide => {
  (hideBox.checked) ? ul.style.display = 'none' : ul.style.display = 'initial';
})
