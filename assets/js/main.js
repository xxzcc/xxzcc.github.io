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

const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const publicationItems = Array.from(document.querySelectorAll("[data-category]"));
const publicationGroups = Array.from(document.querySelectorAll("[data-publication-group]"));

if (filterButtons.length > 0 && publicationItems.length > 0) {
  const setPublicationFilter = (filter) => {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    publicationItems.forEach((item) => {
      const categories = item.dataset.category?.split(/\s+/) ?? [];
      const shouldShow = filter === "all" || categories.includes(filter);
      item.classList.toggle("is-hidden", !shouldShow);
    });

    publicationGroups.forEach((group) => {
      const visibleItems = group.querySelectorAll("[data-category]:not(.is-hidden)");
      group.classList.toggle("is-hidden", visibleItems.length === 0);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setPublicationFilter(button.dataset.filter || "all");
    });
  });
}

const revealTargets = Array.from(
  document.querySelectorAll(
    ".section-shell, .focus-card, .timeline-item, .map-node, .publication-item"
  )
);

if ("IntersectionObserver" in window && revealTargets.length > 0) {
  revealTargets.forEach((target) => target.classList.add("reveal-on-scroll"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}
