const navLinks = document.querySelectorAll("header nav a");
const section = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    section.forEach((item) => {
        let top = window.scrollY;
        let offset = item.offsetTop-100;
        let height = item.offsetHeight;
        let id = item.getAttribute("id");

        console.log(top);
        console.log(offset);
        console.log(offset + height);
        if (top >= offset && top < offset + height) {
            navLinks.forEach((item) => {
                item.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
        
    });
});
