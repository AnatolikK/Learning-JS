const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach((box) =>{
    box.addEventListener('click', boxHandler)
});

function boxHandler(event){
    let currentBox = event.target.closest('.box');
    let currentContent = event.target.nextElementSibling;

    currentBox.classList.toggle('active')
};