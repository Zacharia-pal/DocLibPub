// Configuration variables
const owner = "zacharia-pal";
const repo = "DocLibPub";
const branch = "main"; // Change if your branch is different
const basePath = ""; // Use the repo root as the base path

// Language selection (default: English)
let currentLanguage = "EN";

// Custom folder names mapping: key = folder name, value = custom display name
const folderCustomNames = {
  "PAL_DOC_GIT_repotransfer_EN": "Patronale Life Git Repo Transfer English"
  // Add more mappings as needed
};

// Load the appropriate Markdown file based on language
function loadMarkdown(filePath) {
  // Add language suffix based on the current language
  const languageSuffix = currentLanguage !== "EN" ? `_${currentLanguage}` : "";
  const fileWithLanguage = filePath.replace(/(.+)\.md$/, `$1${languageSuffix}.md`);
  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fileWithLanguage}`;
  
  fetch(rawUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error loading ${filePath}: ${response.statusText}`);
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

// Build navigation for files and directories in the given path
function buildNavigation(path, parentElement) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(items => {
      items.sort((a, b) => {
        if (a.type === b.type) return a.name.localeCompare(b.name);
        return a.type === "dir" ? -1 : 1;
      });
      items.forEach(item => {
        if (item.type === "dir") {
          buildDirectoryNavigation(item, parentElement);
        } else if (item.type === "file" && item.name.endsWith(".md") && item.name.toLowerCase() !== "index.md") {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = "#";
          a.textContent = item.name;
          a.onclick = function(e) {
            e.preventDefault();
            loadMarkdown(item.path);
          };
          li.appendChild(a);
          parentElement.appendChild(li);
        }
      });
    })
    .catch(error => {
      console.error("Error building navigation:", error);
      parentElement.innerHTML = `<li>Error loading navigation</li>`;
    });
}

// Build navigation for a directory, including a dropdown for nested items
function buildDirectoryNavigation(item, parentElement) {
  const li = document.createElement('li');
  li.classList.add('dropdown');
  const a = document.createElement('a');
  a.textContent = folderCustomNames[item.name] || item.name;
  a.href = "#";
  li.appendChild(a);

  a.onclick = function(e) {
    e.preventDefault();
    li.classList.toggle('open');
    if (!li.dataset.loaded) {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${item.path}?ref=${branch}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(subItems => {
          subItems.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === "dir" ? -1 : 1;
          });
          // Check for index.md and load it when the folder is clicked
          let indexMdItem = subItems.find(si => si.type === "file" && si.name.toLowerCase() === "index.md");
          if (indexMdItem) {
            loadMarkdown(indexMdItem.path);
            subItems = subItems.filter(si => si !== indexMdItem);
          }
          if (subItems.length > 0) {
            const subUl = document.createElement('ul');
            subItems.forEach(subItem => {
              if (subItem.type === "dir") {
                buildDirectoryNavigation(subItem, subUl);
              } else if (subItem.type === "file" && subItem.name.endsWith(".md") && subItem.name.toLowerCase() !== "index.md") {
                const liFile = document.createElement('li');
                const aFile = document.createElement('a');
                aFile.href = "#";
                aFile.textContent = subItem.name;
                aFile.onclick = function(e) {
                  e.preventDefault();
                  loadMarkdown(subItem.path);
                };
                liFile.appendChild(aFile);
                subUl.appendChild(liFile);
              }
            });
            li.appendChild(subUl);
          }
          li.dataset.loaded = "true";
        })
        .catch(error => {
          console.error("Error loading directory:", error);
        });
    };
  };
  parentElement.appendChild(li);
}

// Initialize language buttons and set default language
document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');
  buildNavigation("", navList);  // Build navigation from the root directory

  // Load the default language (English)
  loadMarkdown("README.md");

  // Language button event listeners
  document.getElementById("englishBtn").addEventListener("click", function() {
    currentLanguage = "EN";
    document.getElementById('navList').innerHTML = '';  // Clear the nav
    buildNavigation("", navList);  // Rebuild the nav for English
    loadMarkdown("README.md");  // Load the English version
  });

  document.getElementById("dutchBtn").addEventListener("click", function() {
    currentLanguage = "NL";
    document.getElementById('navList').innerHTML = '';  // Clear the nav
    buildNavigation("", navList);  // Rebuild the nav for Dutch
    loadMarkdown("README.md");  // Load the Dutch version
  });

  document.getElementById("frenchBtn").addEventListener("click", function() {
    currentLanguage = "FR";
    document.getElementById('navList').innerHTML = '';  // Clear the nav
    buildNavigation("", navList);  // Rebuild the nav for French
    loadMarkdown("README.md");  // Load the French version
  });
});
