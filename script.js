// MENU BURGER

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(toggle){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ANIMATION AU SCROLL

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

// TRANSITION ENTRE PAGES

document.querySelectorAll("a").forEach(link => {
    if(link.hostname === window.location.hostname){
        link.addEventListener("click", function(e){
            e.preventDefault();
            const href = this.href;

            document.body.classList.remove("loaded");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    }
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
