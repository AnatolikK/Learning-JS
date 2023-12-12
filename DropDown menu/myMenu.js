const button = document.querySelector(".dropdown__button");
const list = document.querySelector(".dropdown__list");
const listItems = document.querySelectorAll(".dropdown__list-item");

// Нажатие на кнопку открыть/ закрыть выпадающий список

button.addEventListener("click", function () {
  list.classList.toggle("dropdown__list--visible");
  this.classList.add("dropdown__button--active");
});

// При выборе из выпадающего списка запиисывать в button 

listItems.forEach(item =>{
    item.addEventListener('click', function(){
        button.innerText = item.innerText;
        list.classList.remove('dropdown__list--visible');
    });
});

// Закрытие dropdown по клику вне 
document.addEventListener('click', event =>{
    if(!(event.target === button)){
        button.classList.remove('dropdown__button--active');
        list.classList.remove('dropdown__list--visible');
    }
});

// Закрытий dropdown по escape или по tab

document.addEventListener('keydown', event =>{
    if(event.key === 'Tab' || event.key === 'Escape'){
        button.classList.remove('dropdown__button--active');
        list.classList.remove('dropdown__list--visible');
    }
});