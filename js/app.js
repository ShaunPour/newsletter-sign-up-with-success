const header = document.querySelector('header');
const main = document.querySelector('main');
const form = document.querySelector('form');
const email = document.querySelector('input');
const btn = document.querySelector('button');
const success = document.querySelector('.success');

form.addEventListener('click', (e) => {
    e.preventDefault();

    btn.addEventListener('click', () => {
        if(email.value.includes('@')) {
            header.classList.toggle('hide');
            main.classList.toggle('hide');
            success.classList.toggle('success-show');
        }
    })
})