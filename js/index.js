let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
})
