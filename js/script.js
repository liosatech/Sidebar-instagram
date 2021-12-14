var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

const btn = document.querySelector('.menu-bar');
btn.addEventListener('click', function() {
    document.getElementById("menu-bar-box").classList.toggle('active-right');

})