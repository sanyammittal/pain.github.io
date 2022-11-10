function shownav() {
    let a = document.getElementById("nav");
    a.style.height = "350px";
}

function hidenav() {
    let b = document.getElementById("nav");
    b.style.height = "0px";
}

function togglehs() {
    let c = document.getElementById("more");
    if (c.style.display == "block") {
        c.style.display = "none";
    }
    else {
        c.style.display = "block";
    }
}

flag = 0;
show(flag);
function show(num) {
    let slides = document.getElementsByClassName('pic-1');
    for (let y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "grid";
}
function change(m) {
    flag = m;
    show(flag);
}

window.onscroll = function () { scroll() };

function scroll() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("navigation").style.top = "0px";
    }
    else {
        document.getElementById("navigation").style.top = "-70px";
    }
}
