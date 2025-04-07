const owner = 'Zacharia-pal';
const repo = 'DocLibPub';
const basePath = 'guides';
let currentLanguage = 'en'; // Default language

// Map for language suffixes
const langSuffixes = {
  en: 'EN',
  fr: 'FR',
  nl: 'NL'
};

// Init on load
window.onload = () => {
  setupLanguageButtons();
  loadGuideNav();
};

// Setup language switcher
function setupLanguageButtons() {
  document.getElementById('language-selector').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const lang = e.target.getAttribute('data-lang');
      if (lang in langSuffixes) {
        currentLanguage = lang;
        loadGuideNav(); // Reload nav items based on new language
      }
    }
  });
}

// Load nav items from GitHub
function loadGuideNav() {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${basePath}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const navBar = document.getElementById('nav-bar');
      navBar.innerHTML = ''; // Clear old links

      const suffix = langSuffixes[currentLanguage];
      const targetFile = `Repo Transfer_${suffix}.md`;

      const fileItem = data.find(item => item.name === targetFile);
      if (fileItem) {
        createNavLink(fileItem.name.replace('.md', ''), fileItem.download_url);
        loadMarkdown(fileItem.download_url); // Load on init
      } else {
        navBar.innerHTML = `<p>No file found for language "${currentLanguage.toUpperCase()}"</p>`;
        document.getElementById('content').innerHTML = '';
      }
    })
    .catch(err => {
      console.error('Error loading guides:', err);
    });
}

// Create nav link
function createNavLink(label, url) {
  const navBar = document.getElementById('nav-bar');
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = label;
  link.onclick = (e) => {
    e.preventDefault();
    loadMarkdown(url);
  };
  navBar.appendChild(link);
}

// Load and render markdown
function loadMarkdown(url) {
  fetch(url)
    .then(res => res.text())
    .then(markdown => {
      const html = marked.parse(markdown);
      document.getElementById('content').innerHTML = html;
    })
    .catch(err => {
      console.error('Error loading markdown:', err);
      document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
    });
}
