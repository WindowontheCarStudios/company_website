const games = [
  {
    title: "Gerald's First Job",
    url: "https://window-on-the-car-studios.itch.io/geralds-first-job",
    image: "https://img.itch.zone/aW1nLzI2NTMxNzUyLnBuZw%3D%3D/315x250%23c/wnwa0%2B.png",
    genre: "Platformer",
    platform: "Windows",
    type: "Download",
    description: "A small, funny platformer about taking on different jobs.",
    tags: ["3D", "Funny", "PSX"]
  },
  {
    title: "Can Clash",
    url: "https://window-on-the-car-studios.itch.io/can-clash",
    image: "https://img.itch.zone/aW1nLzI2MTUyODU3LnBuZw%3D%3D/315x250%23c/XoVbB%2B.png",
    genre: "Fighting",
    platform: "Windows",
    type: "Download",
    description: "A 2–4 player local multiplayer soda-can smackdown.",
    tags: ["Local", "2–4 players", "Godot"]
  },
  {
    title: "0's n' 1's",
    url: "https://window-on-the-car-studios.itch.io/0s-n-1s",
    image: "https://img.itch.zone/aW1nLzI1NjY4NDU0LnBuZw%3D%3D/315x250%23c/oT1Bzj.png",
    genre: "Puzzle",
    platform: "HTML5",
    type: "Play in browser",
    description: "Flip every button until the board is all zeros or all ones.",
    tags: ["Puzzle", "Short", "Browser"]
  },
  {
    title: "Little Fishing Trip",
    url: "https://window-on-the-car-studios.itch.io/little-fishing-trip",
    image: "https://img.itch.zone/aW1nLzI0ODQ3OTIwLnBuZw%3D%3D/315x250%23c/Czmlko.png",
    genre: "Adventure",
    platform: "Windows",
    type: "Download",
    description: "A short horror fishing game where something waits under the surface.",
    tags: ["Horror", "Fishing", "PS1"]
  },
  {
    title: "Rollin' Wheel",
    url: "https://window-on-the-car-studios.itch.io/rollin",
    image: "https://img.itch.zone/aW1nLzIyNTk3NjY0LnBuZw%3D%3D/315x250%23c/tc%2FW0g.png",
    genre: "Platformer",
    platform: "HTML5",
    type: "Play in browser",
    description: "A retro platformer built around rolling, movement, and momentum.",
    tags: ["Pixel", "Retro", "Browser"]
  },
  {
    title: "Back to pea",
    url: "https://window-on-the-car-studios.itch.io/back-to-pea",
    image: "https://img.itch.zone/aW1nLzIyNDUxMzk1LnBuZw%3D%3D/315x250%23c/cAVp0V.png",
    genre: "Adventure",
    platform: "HTML5",
    type: "Play in browser",
    description: "A little adventure about a pea resetting over and over to save the baby pea.",
    tags: ["Adventure", "Jam", "Browser"]
  }
];

const grid = document.querySelector("[data-games-grid]");

function gameCard(game) {
  const tags = game.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  return `
    <article class="game-card reveal">
      <a class="game-art-wrap" href="${game.url}" target="_blank" rel="noopener" aria-label="Open ${game.title} on itch.io">
        <img class="game-art" src="${game.image}" alt="${game.title} cover art" loading="lazy">
        <div class="game-tags" aria-label="Tags">${tags}</div>
      </a>
      <div class="game-body">
        <h3>${game.title}</h3>
        <div class="game-meta">${game.genre} • ${game.platform}</div>
        <p>${game.description}</p>
        <div class="game-footer">
          <a class="text-link" href="${game.url}" target="_blank" rel="noopener">${game.type}</a>
          <span class="badge">itch.io</span>
        </div>
      </div>
    </article>
  `;
}

if (grid) {
  grid.innerHTML = games.map(gameCard).join("");
}

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", event => {
    if (event.target.matches("a")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const header = document.querySelector("[data-header]");
function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add("is-visible"));
}
