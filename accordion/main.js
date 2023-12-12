const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion =>{
    accordion.addEventListener('click', (event) =>{
        const self = event.currentTarget;
        const control = self.querySelector('.accordion-control');
        const content = self.querySelector('.accordion-content');

        self.classList.toggle('open')

        if(self.classList.contains('open')){
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
        }
    });
});