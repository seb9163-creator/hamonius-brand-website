document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileClose = document.querySelector(".mobile-menu__close");
    const navLinks = document.querySelectorAll(".site-nav a");
    const mobileLinks = document.querySelectorAll(".mobile-menu__nav a");
    const pageName = body.dataset.page;

    if (header) {
        const syncHeader = () => {
            body.classList.toggle("is-scrolled", window.scrollY > 24);
        };

        syncHeader();
        window.addEventListener("scroll", syncHeader, { passive: true });
    }

    navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `${pageName}.html`;
        link.classList.toggle("is-active", isCurrent);
    });

    const openMenu = () => {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.add("is-open");
        mobileMenu.setAttribute("aria-hidden", "false");
        menuToggle.setAttribute("aria-expanded", "true");
        body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        if (!mobileMenu || !menuToggle) return;
        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
        menuToggle.setAttribute("aria-expanded", "false");
        body.style.overflow = "";
    };

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            if (mobileMenu && mobileMenu.classList.contains("is-open")) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener("click", closeMenu);
    }

    if (mobileMenu) {
        mobileMenu.addEventListener("click", (event) => {
            if (event.target === mobileMenu) {
                closeMenu();
            }
        });
    }

    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    document.querySelectorAll(".reveal-up, .text-mask").forEach((element) => {
        if (!element.classList.contains("active")) {
            revealObserver.observe(element);
        }
    });

    const dots = document.querySelectorAll(".dot");
    const sections = document.querySelectorAll("main section[id]");

    if (dots.length && sections.length) {
        const setActiveDot = () => {
            let currentId = sections[0].id;

            sections.forEach((section) => {
                const top = section.offsetTop - window.innerHeight * 0.35;
                if (window.scrollY >= top) {
                    currentId = section.id;
                }
            });

            dots.forEach((dot) => {
                dot.classList.toggle("active", dot.dataset.target === currentId);
            });
        };

        setActiveDot();
        window.addEventListener("scroll", setActiveDot, { passive: true });

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                const target = document.getElementById(dot.dataset.target);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });
    }

    const workFilters = document.querySelectorAll(".works-filter");
    const workItems = document.querySelectorAll(".works-featured[data-category], .works-video-card[data-category]");

    if (workFilters.length && workItems.length) {
        const syncWorkFilter = (selectedFilter) => {
            workFilters.forEach((filterButton) => {
                filterButton.classList.toggle("is-active", filterButton.dataset.filter === selectedFilter);
            });

            workItems.forEach((item) => {
                const categories = (item.dataset.category || "").split(/\s+/).filter(Boolean);
                const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
                item.classList.toggle("is-hidden", !shouldShow);
            });
        };

        workFilters.forEach((filterButton) => {
            filterButton.addEventListener("click", () => {
                syncWorkFilter(filterButton.dataset.filter || "all");
            });
        });

        syncWorkFilter("all");
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
