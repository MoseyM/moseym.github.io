
document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.getElementById('wrap');
    var height = element.offsetHeight;
    if (height < screen.height) {
        document.getElementsByClassName("footer")[0].classList.add('stickybottom');
    }
}, false);