//Делегирование событий 

// const allNavButtons = document.querySelectorAll('.main-navigation__button-item')
// allNavButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         allNavButtons.forEach(button =>{
//             button.classList.remove('main-navigation__button-item_selected')
//         })
//         const {target} = event;
//         target.classList.add('main-navigation__button-item_selected')
    
//     });
// })
const allNavButtons = document.querySelectorAll('.main-navigation__button-item')
const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.addEventListener('click', (event) => {
    console.log('target', event.target);
    const isNavButton = event.target.closest('.main-navigation__button-item');
    if(isNavButton) {
        //do someThing
        allNavButtons.forEach(button =>{
            button.classList.remove('main-navigation__button-item_selected')
        })
        const {target} = event;
        target.classList.add('main-navigation__button-item_selected')
    };
});