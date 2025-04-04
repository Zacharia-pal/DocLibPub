const owner = "zacharia-pal";
const repo = "DocLibPub";
const branch = "main"; // Update if necessary
const basePath = ""; // Base repo directory

let currentLanguage = "EN"; // Default language

const folderCustomNames = {
  "PAL_DOC_GIT_repotransfer_EN": "Patronale Life Git Repo Transfer English"
};

// Function to load Markdown file into content area
function loadMarkdown(filePath) {
  const languageSuffix = currentLanguage !== "EN" ? `_${currentLanguage}` : "";
  const fileWithLanguage = filePath.replace(/(.+)\.md$/, `$1${languageSuffix}.md`);
  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fileWithLanguage}`;

  fetch(rawUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error loading ${fileWithLanguage}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(markdown => {
      document.getElementById('content').innerHTML = marked.parse(markdown);
    })
    .catch(error => {
      document.getElementById('content').innerHTML = `<p>${error}</p>`;
    });
}

// Function to build navigation menu dynamically
function buildNavigation(path, parentElement) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(items => {
      items.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1));

      items.forEach(item => {
        if (item.type === "dir") {
          createFolderEntry(item, parentElement);
        } else if (item.type === "file" && item.name.endsWith(".md")) {
          addFileToNav(item, parentElement);
        }
      });
    })
    .catch(error => {
      console.error("Error building navigation:", error);
      parentElement.innerHTML = `<li>Error loading navigation</li>`;
    });
}

// Function to create folder entries in the navigation
function createFolderEntry(folder, parentElement) {
  const li = document.createElement('li');
  li.classList.add('folder');
  
  const folderName = folderCustomNames[folder.name] || folder.name;
  const a = document.createElement('a');
  a.href = "#";
  a.textContent = folderName;

  const subUl = document.createElement('ul');
  subUl.classList.add('hidden');

  a.onclick = function(e) {
    e.preventDefault();
    subUl.classList.toggle('hidden');

    if (!subUl.dataset.loaded) {
      buildNavigation(folder.path, subUl);
      subUl.dataset.loaded = "true";
    }

    // Automatically load index.md if it exists
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder.path}?ref=${branch}`)
      .then(response => response.json())
      .then(files => {
        const indexFile = files.find(file => file.name.toLowerCase() === "index.md");
        if (indexFile) loadMarkdown(indexFile.path);
      });
  };

  li.appendChild(a);
  li.appendChild(subUl);
  parentElement.appendChild(li);
}

// Function to add files to the navigation
function addFileToNav(file, parentElement) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = "#";
  a.textContent = file.name.replace(/\.md$/, '');

  a.onclick = function(e) {
    e.preventDefault();
    loadMarkdown(file.path);
  };

  li.appendChild(a);
  parentElement.appendChild(li);
}

// Function to refresh navigation when switching languages
function refreshNav() {
  document.getElementById('navList').innerHTML = '';
  buildNavigation("", document.getElementById('navList'));
  loadMarkdown("README.md");
}

// Initialize navigation and language switchers
document.addEventListener('DOMContentLoaded', () => {
  buildNavigation("", document.getElementById('navList'));
  loadMarkdown("README.md");

  document.getElementById("englishBtn").addEventListener("click", () => {
    currentLanguage = "EN";
    refreshNav();
  });

  document.getElementById("dutchBtn").addEventListener("click", () => {
    currentLanguage = "NL";
    refreshNav();
  });

  document.getElementById("frenchBtn").addEventListener("click", () => {
    currentLanguage = "FR";
    refreshNav();
  });
});
