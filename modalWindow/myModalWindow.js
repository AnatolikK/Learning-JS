const modal = document.querySelector('.modal');
const btn = document.querySelector('.myBtn');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', ()  => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) =>{
    if(event.target === modal){
        modal.style.display = 'none';
    }
});
