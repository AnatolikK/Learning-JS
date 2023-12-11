const tabNav = document.querySelectorAll('.tabs-nav-item');
const tabContent = document.querySelectorAll('.tab')
let tabActive;

tabNav.forEach((tab) =>{
    tab.addEventListener('click', selectTabNav);
});

function selectTabNav(){
    tabNav.forEach((tab) =>{
        tab.classList.remove('active');
    });

    this.classList.add('active');

    tabActive = this.getAttribute('data-tab-name');
    
    selectTabContent(tabActive);
};

function selectTabContent(tabActive){
    tabContent.forEach(nav =>{
        if(nav.classList.contains(tabActive)){
            nav.classList.add('active')
        }
        else{
            nav.classList.remove('active')
        }
    });
};