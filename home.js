btn = document.querySelector('.burger');
navlist = document.querySelector('ul');
btn.addEventListener('click', ()=> {
    navlist.classList.toggle('clipped')
})