document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === null) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        savedTheme = prefersDark ? "dark" : "light";
        localStorage.setItem("theme", savedTheme);
    }

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeIcon.src = "./images/sun.png";
    } else {
        body.classList.remove("dark-mode");
        themeIcon.src = "./images/moon.png";
    }
});

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    themeIcon.classList.add("rotating");

    const isDark = body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    setTimeout(() => {
        themeIcon.src = isDark ? "./images/sun.png" : "./images/moon.png";
        themeIcon.classList.remove("rotating");
    }, 500);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

window.onscroll = function() {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const backToTopButton = document.getElementById("back-to-top");

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (scrollIndicator) {
        scrollIndicator.style.width = scrolled + "%";
    }

    if (backToTopButton) {
        if (winScroll > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function toggleMenu() {
    let menu = document.querySelector(".menu-items");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
}

  document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;
    let cleanPath = path.replace(/\.(png|jpg|jpeg|html|css|js)$/i, "");
    let CustomUrl = "ThunderTeamMC-Studios.github.io" + cleanPath + window.location.search + window.location.hash;

    document.title = CustomUrl;
    window.history.replaceState(null, null, CustomUrl);