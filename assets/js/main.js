const root = document.documentElement;
const storedTheme = window.localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  if (nextTheme === "dark") {
    root.dataset.theme = "dark";
  } else {
    delete root.dataset.theme;
  }
  window.localStorage.setItem("theme", nextTheme);
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sectionById = new Map(
  navLinks
    .map((link) => [link.hash.slice(1), link])
    .filter(([id]) => id)
);
const observedSections = Array.from(sectionById.keys())
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const hero = document.querySelector(".hero");
const siteHeader = document.querySelector(".site-header");
const canObserveSections = "IntersectionObserver" in window && observedSections.length > 0;

if (canObserveSections) {
  const setActiveNav = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", Boolean(id) && link.hash === `#${id}`);
    });
  };

  const isInHero = () => {
    if (!hero) {
      return false;
    }
    const headerOffset = siteHeader?.offsetHeight ?? 0;
    return hero.getBoundingClientRect().bottom > headerOffset;
  };

  const updateTopState = () => {
    if (isInHero()) {
      setActiveNav(null);
    }
  };

  try {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isInHero()) {
          setActiveNav(null);
          return;
        }

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveNav(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    observedSections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateTopState, { passive: true });
    updateTopState();
  } catch {
    navLinks.forEach((link) => link.classList.remove("is-active"));
  }
} else {
  // No-op fallback: anchor navigation still works; active section state is disabled.
}
