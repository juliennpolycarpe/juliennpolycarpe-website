/* Shared sidebar + nav behavior for every page.
   Each page must define `window.SITE_ROOT` ("./" for top-level pages,
   "../" for pages one folder deep) and `window.CURRENT_PAGE` (a nav id)
   before loading this script. */

(function () {
  const ROOT = window.SITE_ROOT || "./";
  const CURRENT = window.CURRENT_PAGE || "";

  const ICON = (paths) =>
    `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

  const NAV_ITEMS = [
    {
      id: "home", label: "Home", href: ROOT + "index.html",
      icon: ICON('<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1H10v-5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v5h3.5a1 1 0 0 0 1-1V9.5"/>'),
    },
    {
      id: "about", label: "About", href: ROOT + "about.html",
      icon: ICON('<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.4-4.2 3.4-6.2 6.5-6.2s6.1 2 6.5 6.2"/>'),
    },
    {
      id: "experience", label: "Experience", href: ROOT + "experience.html",
      icon: ICON('<rect x="3.5" y="8" width="17" height="11" rx="1.2"/><path d="M8.5 8V6.2A1.7 1.7 0 0 1 10.2 4.5h3.6A1.7 1.7 0 0 1 15.5 6.2V8"/><path d="M3.5 13h17"/>'),
    },
    {
      id: "projects", label: "Projects", href: ROOT + "projects.html",
      icon: ICON('<rect x="8" y="8" width="8" height="8" rx="1"/><path d="M8 10.5H4.5M8 13.5H4.5M16 10.5h3.5M16 13.5h3.5M10.5 8V4.5M13.5 8V4.5M10.5 16v3.5M13.5 16v3.5"/>'),
    },
    {
      id: "coursework", label: "Coursework", href: ROOT + "coursework.html",
      icon: ICON('<path d="M4 5.2c2.6-.9 5-.5 8 1 3-1.5 5.4-1.9 8-1v13.6c-2.6-.9-5-.5-8 1-3-1.5-5.4-1.9-8-1Z"/><path d="M12 6.2v13.6"/>'),
    },
    {
      id: "skills", label: "Skills", href: ROOT + "skills.html",
      icon: ICON('<circle cx="12" cy="13" r="7"/><path d="M12 13 15.2 9.4"/><path d="M12 6.2V8"/>'),
    },
    {
      id: "contact", label: "Contact", href: ROOT + "contact.html",
      icon: ICON('<rect x="3.5" y="5.5" width="17" height="13" rx="1.2"/><path d="M4 6.5 12 13l8-6.5"/>'),
    },
  ];

  const BOTTOM_ITEMS = [
    {
      label: "Email", href: "mailto:juliennpolycarpe@gmail.com", external: false,
      icon: ICON('<rect x="3" y="5.5" width="18" height="13" rx="1.2"/><path d="M3.5 6.5 12 12.8l8.5-6.3"/>'),
    },
    {
      label: "LinkedIn", href: "https://www.linkedin.com/in/juliennpolycarpe917", external: true,
      icon: ICON('<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.1" fill="currentColor" stroke="none"/><path d="M9 12v5M13 17v-3.3c0-1.2.8-1.9 1.8-1.9s1.7.7 1.7 1.9V17"/>'),
    },
    {
      label: "GitHub", href: "https://github.com/juliennpolycarpe", external: true,
      icon: ICON('<circle cx="7" cy="8" r="2"/><circle cx="17" cy="8" r="2"/><circle cx="12" cy="17" r="2"/><path d="M8.6 9.3 10.6 15.4M15.4 9.3 13.4 15.4"/>'),
    },
  ];

  const navHTML = NAV_ITEMS.map(item => `
    <a href="${item.href}" class="sidenav-link${item.id === CURRENT ? " active" : ""}" aria-label="${item.label}" title="${item.label}">
      ${item.icon}<span class="full">${item.label}</span>
    </a>`).join("");

  const bottomHTML = BOTTOM_ITEMS.map(item => `
    <a href="${item.href}"${item.external ? ' target="_blank" rel="noopener"' : ""} aria-label="${item.label}" title="${item.label}">
      ${item.icon}<span class="full">${item.label}</span>
    </a>`).join("");

  const sidebarHTML = `
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-top-row">
          <a href="${ROOT}index.html" class="mark">JP</a>
          <button class="collapse-toggle" id="collapseToggle" aria-label="Collapse sidebar">
            <span class="chev">‹</span>
          </button>
        </div>
        <p class="mark-sub">ECE&nbsp;+&nbsp;CS</p>
      </div>

      <nav class="sidenav" aria-label="Section navigation">${navHTML}</nav>

      <div class="sidebar-bottom">${bottomHTML}</div>
    </aside>`;

  document.body.insertAdjacentHTML("afterbegin", sidebarHTML);

  const sidebar = document.getElementById("sidebar");
  const navToggle = document.getElementById("navToggle");
  const collapseToggle = document.getElementById("collapseToggle");

  // Mobile off-canvas toggle
  navToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  sidebar.querySelectorAll(".sidenav-link, .sidebar-bottom a").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Desktop collapse toggle, persisted
  const applyCollapsed = (collapsed) => {
    document.documentElement.classList.toggle("collapsed", collapsed);
    collapseToggle.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
  };

  applyCollapsed(localStorage.getItem("sidebarCollapsed") === "1");

  collapseToggle.addEventListener("click", () => {
    const collapsed = !document.documentElement.classList.contains("collapsed");
    applyCollapsed(collapsed);
    localStorage.setItem("sidebarCollapsed", collapsed ? "1" : "0");
  });
})();
