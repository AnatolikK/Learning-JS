const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));


function handlerScript(event){
    // 1. Убрать показ tabpanel
    tabPanels.forEach((tab) =>{
        tab.hidden = true;
    });

    // 2. Убрать выделение tab
    tabButtons.forEach((tab) =>{    
        tab.setAttribute('aria-selected', false);
    });

    // 3. Сделать выделение нажатого tab
    event.currentTarget.setAttribute('aria-selected', 'true');

    // 4. Показать соответствующую tabpanel
    const {id} = event.currentTarget;

    tabPanels.find(panel =>{
        if(panel.getAttribute('aria-labelledby') === id){
            panel.hidden = false;
        }
    })
}


tabButtons.forEach(button => {
    button.addEventListener('click', handlerScript);
});