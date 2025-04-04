const owner = "zacharia-pal";
const repo = "DocLibPub";
const branch = "main"; // Update if necessary
const basePath = ""; // Base repo directory

let currentLanguage = "EN"; // Default language

const folderCustomNames = {
  "PAL_DOC_GIT_repotransfer_EN": "Patronale Life Git Repo Transfer English"
};

// Check if a file matches the current language
function isCorrectLanguage(fileName) {
  if (currentLanguage === "EN") {
    return !fileName.includes("_NL.md") && !fileName.includes("_FR.md");
  }
  return fileName.endsWith(`_${currentLanguage}.md`);
}

// Remove _NL, _FR, _EN from file names
function cleanFileName(fileName) {
  return fileName.replace(/(_EN|_NL|_FR)?\.md$/, "");
}

// Load Markdown file into the content area
function loadMarkdown(filePath) {
  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;

  fetch(rawUrl)
    .then(response => {
      if (!response.ok) throw new Error(`Error loading ${filePath}: ${response.statusText}`);
      return response.text();
    })
    .then(markdown => {
      document.getElementById('content').innerHTML = marked.parse(markdown);
    })
    .catch(error => {
      document.getElementById('content').innerHTML = `<p>${error}</p>`;
    });
}

// Build navigation dynamically
function buildNavigation(path, parentElement) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(items => {
      items.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1));

      items.forEach(item => {
        if (item.type === "dir") {
          createFolderEntry(item, parentElement);
        } else if (item.type === "file" && item.name.endsWith(".md") && isCorrectLanguage(item.name)) {
          addFileToNav(item, parentElement);
        }
      });
    })
    .catch(error => {
      console.error("Error building navigation:", error);
      parentElement.innerHTML = `<li>Error loading navigation</li>`;
    });
}

// Create folder entries in the navigation
function createFolderEntry(folder, parentElement) {
  const li = document.createElement('li');
  li.classList.add('folder');

  const folderName = folderCustomNames[folder.name] || folder.name;
  const a = document.createElement('a');
  a.href = "#";
  a.textContent = folderName;

  const subUl = document.createElement('ul');
  subUl.classList.add('hidden');

  a.onclick = function (e) {
    e.preventDefault();
    subUl.classList.toggle('hidden');

    if (!subUl.dataset.loaded) {
      buildNavigation(folder.path, subUl);
      subUl.dataset.loaded = "true";
    }

    // Load index.md of selected language inside folder
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folder.path}?ref=${branch}`)
      .then(response => response.json())
      .then(files => {
        let indexFile = files.find(file => file.name.toLowerCase() === `index_${currentLanguage}.md`);
        if (!indexFile && currentLanguage === "EN") {
          indexFile = files.find(file => file.name.toLowerCase() === "index.md");
        }
        if (indexFile) loadMarkdown(indexFile.path);
      });
  };

  li.appendChild(a);
  li.appendChild(subUl);
  parentElement.appendChild(li);
}

// Add files to the navigation
function addFileToNav(file, parentElement) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = "#";
  a.textContent = cleanFileName(file.name);

  a.onclick = function (e) {
    e.preventDefault();
    loadMarkdown(file.path);
  };

  li.appendChild(a);
  parentElement.appendChild(li);
}

// Refresh navigation when switching languages
function refreshNav() {
  document.getElementById('navList').innerHTML = '';
  buildNavigation("", document.getElementById('navList'));
  loadMarkdown(`README${currentLanguage === "EN" ? "" : `_${currentLanguage}`}.md`);
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

// Debugging Log
console.log("JavaScript Loaded Successfully!");
