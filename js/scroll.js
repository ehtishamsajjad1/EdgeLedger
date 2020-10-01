const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove("top");
        if (!scrolled) {
            navbar.style.transform = "translateY(-70px)";
        }
        setTimeout(function () {
            navbar.style.transform = "translateY(0)";
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add("top");
        scrolled = false;
    }
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        if (window.innerWidth > 768) {
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 100,
                },
                800
            );
        } else {
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 125,
                },
                800
            );
        }
    }
});
