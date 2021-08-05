$(document).ready(function () {
    registerFaqItemsClickCallback();
    registerMenuClickCallback();
});

function registerFaqItemsClickCallback() {
    document.querySelectorAll('.question').forEach(function (element) {
        element.nextElementSibling.style.display = 'none';
        element.addEventListener('click', function () {
            if (element.classList.contains('expanded')) {
                element.classList.remove('expanded');
            } else {
                element.classList.add('expanded');
                document.querySelectorAll('.question').forEach(function (f) {
                    if(f != element){
                        f.classList.remove('expanded');
                        $(f.nextElementSibling).slideUp();
                    }
                });
            }
            $(element.nextElementSibling).slideToggle();
        });
    });
}

function registerMenuClickCallback() {
    var navbar = document.querySelector('#navbar');
    var menuBtn = document.querySelector('#menu-button');
    if (menuBtn != null) {
        menuBtn.addEventListener('click', function () {
            if (navbar.classList.contains('expanded')) {
                navbar.classList.remove('expanded');
                $('#menu').fadeOut(300);
            } else {
                navbar.classList.add('expanded');
                $('#menu').fadeIn(300);
            }
        });
    }
}

function hideMenu() {
    document.querySelector('#navbar').classList.remove('expanded');
    document.querySelector('#menu').style = "display: none;"
}