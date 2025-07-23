/*=============== SHOW MENU ===============*/

const   toggle = document.querySelector('#nav-toggle'),
        nav = document.querySelector('#nav-menu');

        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu');
            toggle.classList.toggle('show-icon');
});

