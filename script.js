const owner = 'Zacharia-pal';
const repo = 'DocLibPub';
const basePath = 'Guides/Repo_Transfer';
let currentLanguage = 'en'; // Default

// Language suffix map
const langSuffixes = {
  en: 'EN',
  fr: 'FR',
  nl: 'NL'
};

// On page load
window.onload = () => {
  setupLanguageButtons();
  loadGuideNav();
};

// Handle language selection
function setupLanguageButtons() {
  const selector = document.getElementById('language-selector');
  selector.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const lang = e.target.getAttribute('data-lang');
      if (lang in langSuffixes) {
        currentLanguage = lang;
        loadGuideNav();
      }
    }
  });
}

// Load navigation
function loadGuideNav() {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${basePath}`;
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const navBar = document.getElementById('nav-bar');
      navBar.innerHTML = ''; // Clear previous

      const suffix = langSuffixes[currentLanguage];
      const targetFile = `Repo Transfer_${suffix}.md`;

      const fileItem = data.find(item => item.name === targetFile);

      if (fileItem) {
        createNavLink('Repo Transfer', fileItem.download_url);
        loadMarkdown(fileItem.download_url);
      } else {
        navBar.innerHTML = `<p style="color: white;">File not found for ${currentLanguage.toUpperCase()}</p>`;
        document.getElementById('content').innerHTML = '';
      }
    })
    .catch(err => {
      console.error('Error loading guides:', err);
    });
}

// Create link in sidebar
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

// Load and display markdown
function loadMarkdown(url) {
  fetch(url)
    .then(res => res.text())
    .then(markdown => {
      const html = marked.parse(markdown);
      document.getElementById('content').innerHTML = html;
    })
    .catch(err => {
      console.error('Markdown load error:', err);
      document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
    });
}
