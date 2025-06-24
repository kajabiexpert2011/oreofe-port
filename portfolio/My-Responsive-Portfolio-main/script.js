function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark-theme');
    if(themeToggle) themeToggle.textContent = '☀️';
    if(themeToggleMobile) themeToggleMobile.textContent = '☀️';
  } else {
    body.classList.remove('dark-theme');
    if(themeToggle) themeToggle.textContent = '🌙';
    if(themeToggleMobile) themeToggleMobile.textContent = '🌙';
  }
}

function toggleTheme() {
  const isDark = !body.classList.contains('dark-theme');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if(themeToggle) themeToggle.addEventListener('click', toggleTheme);
if(themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') setTheme(true);
else setTheme(false);

// PROJECT DETAILS MODAL FUNCTIONALITY
(function() {
  const projectData = [
    {
      title: 'Smart Money Mamas',
      img: './assets/Smart.jpg',
      description: 'A truly front-end Travel booking platform.',
      tech: ['Javascript', 'Html', 'TailwindCSS'],
      github: 'https://github.com/SorcererChiragsingh/Project-FirstFlight-Travels',
      live: 'https://firstflighttravels.netlify.app'
    },
    {
      title: 'Upright Health',
      img: './assets/Upright.jpg',
      description: 'A modern blog application for writing, editing, and sharing articles with a rich text editor.',
    },
    {
      title: 'LuLaRoe Fashion Fun',
      img: './assets/LuLa Fashion.jpg',
      description: 'An e-commerce web app with product catalog, cart, and secure checkout.',
    {
      title: 'Life As A Strawberry',
      img: './assets/Easy Recipes.jpg',
    },
    {
      title: 'DailyOM',
      img: './assets/DailyOM.jpg',
      description: 'A browser-based drawing application with multiple tools and color options.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Foundation for Economic Education',
      img: './assets/fee.jpg',
      description: 'A browser-based famous Tic Tca Toe Game.',
    {
      title: 'Media Hack Tools',
      img: './assets/Hak.jpg',
      description: 'A browser-based famous Snake Game to play.',
    },
    {
      title: 'Focus on the Family',
      img: './assets/Home Focus.jpg',
      description: 'A browser-based Notes Taking application.',
    },
    {
      title: 'Handle the Heat',
      img: './assets/handle.jpg',
      description: 'A browser-based Password Generating application with multiple tools.',
    },
    // ...add more projects as needed...
  ];

  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    // Use only visible project cards (not commented out ones)
    const cards = Array.from(document.querySelectorAll('.project-card')).filter(card => card.offsetParent !== null);

    function openProjectModal(index) {
      const project = projectData[index];
      if (!project) return;
      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.img}" alt="${project.title}" style="width:100%;border-radius:1rem;margin:1rem 0;" />
        <p style="margin-bottom:1rem;">${project.description}</p>
        <strong>Tech Stack:</strong>
        <ul style="margin-bottom:1rem;">${project.tech.map(t => `<li>${t}</li>`).join('')}</ul>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
          <a href="${project.github}" target="_blank" class="btn btn-color-2">Github</a>
          <a href="${project.live}" target="_blank" class="btn btn-color-2">Live Demo</a>
        </div>
      `;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    cards.forEach((card, idx) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        openProjectModal(idx);
      });
    });

    if (closeModal) {
      closeModal.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      };
    }
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
})();
