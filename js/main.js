$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
// isotop

// init Isotope
var $grid = $('.grid').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
//   isotop end
// ------------------------mixdup-------------
// var containerEl = document.querySelector(".portfolioz");

// var mixer = mixitup(containerEl);

// ------------------------mixdup-------------

//-------wow js-----
new WOW().init();
// ------------------------SCROLL TO TOP-------------

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".go-top").fadeIn(200);
        } else {
            $(".go-top").fadeOut(200);
        }
    });

    // Animate the scroll to top
    $(".go-top").click(function(event) {
        event.preventDefault();

        $("html, body").animate({
                scrollTop: 0
            },
            700
        );
    });
});
// ------------------------SCROLL TO TOP-------------

// ------------------------SMOOTH NAV-------------
$("#my-nav a").click(function(e) {
    e.preventDefault();
    var hash = this.hash;
    var position = $(hash).offset().top;
    $("html").animate({
            scrollTop: position
        },
        600
    );
});
// ------------------------SMOOTH NAV-------------
// ------------------------SCROLL TO HIDE-------------
var lastScrollTop = 0;
navbar + document.getElementById("navbar");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
// ------------------------SCROLL TO HIDE-------------
$(document).ready(function() {
    $("ul.theme_colors li").click(function() {
        $("body").css("background", $(this).css("color"));

        $("p.theme-btn").click(function() {
            $(".color").toggleClass(".active");
        });
    });
});
var preloader = document.getElementById("loading");

function loadFunction() {
    preloader.style.display = "none";
}