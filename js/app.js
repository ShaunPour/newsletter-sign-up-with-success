const container = document.querySelector('.container');
const mobile = document.querySelector('.mobile-img');
const desktop = document.querySelector('.desktop-img');
const main = document.querySelector('.main');
const form = document.querySelector('form');
const email = document.querySelector('input');
const btn = document.querySelector('button');
const success = document.querySelector('.success');
const successBtn = document.querySelector('.success button');
const error = document.querySelector('.error-msg');

form.addEventListener('click', (e) => {
    e.preventDefault();
});

btn.addEventListener('click', () => {
        if(email.value.includes('@')) {
            container.classList.toggle('hide');
            main.classList.toggle('hide');
            mobile.classList.toggle('hide');
            desktop.style.display = 'none';
            container.style.paddingBottom = '46vh';
            container.style.width = '33.33%';
            container.style.left = '30vw';
            success.classList.toggle('success-show');
            email.classList.remove('form-error');
            error.classList.toggle('hide');
        } else {
            email.classList.toggle('form-error');
            error.classList.toggle('hide');
        }
    });

    successBtn.addEventListener('click', () => {
        if(email.value.includes('@')) {
            container.classList.toggle('hide');
            mobile.classList.toggle('hide');
            desktop.style.display = 'initial';
            container.style.paddingBottom = '0';
            container.style.width = '75vw';
            container.style.left = '8vw';
            main.classList.toggle('hide');
            success.classList.toggle('success-show');
            email.value = '';
            email.classList.remove('form-error');
            error.classList.add('hide');
        }
    });