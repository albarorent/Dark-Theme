const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const indicator = document.querySelector('.indicator');


toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    indicator.classList.toggle('active');
}