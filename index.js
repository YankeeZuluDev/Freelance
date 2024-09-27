let sectionButtons = [];

sectionButtons.push(...document.querySelectorAll(".navbar-btns .navbar-btn"));
sectionButtons.push(document.querySelector(".intro-text-container > button"));

console.log(sectionButtons.length);

sectionButtons.forEach((a) => {
    a.addEventListener("click", (e) => {
        const targetSection = document.querySelector(a.getAttribute("data-"));

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});