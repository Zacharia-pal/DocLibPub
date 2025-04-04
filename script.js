const owner = "zacharia-pal";
const repo = "DocLibPub";
const branch = "main"; // Update this if necessary
const basePath = ""; // Set to repo root
let currentLanguage = "EN"; // Default language

const folderCustomNames = {
  "PAL_DOC_GIT_repotransfer_EN": "Patronale Life Git Repo Transfer English"
};

function loadMarkdown(filePath) {
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

function buildNavigation(path, parentElement) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(items => {
      items.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1));
      
      items.forEach(item => {
        if (item.type === "dir") {
          createDropdown(item, parentElement);
        } else if (item.type === "file" && item.name.endsWith(".md") && !item.name.includes(`_${currentLanguage}`)) {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = "#";
          a.textContent = item.name.replace(/\.md$/, '');
          a.onclick = (e) => {
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

function createDropdown(folder, parentElement) {
  const li = document.createElement('li');
  li.classList.add('dropdown');
  const a = document.createElement('a');
  a.textContent = folderCustomNames[folder.name] || folder.name;
  a.href = "#";

  const subUl = document.createElement('ul');
  subUl.style.display = "none";

  a.onclick = function(e) {
    e.preventDefault();
    if (subUl.style.display === "none") {
      subUl.style.display = "block";
      if (!subUl.dataset.loaded) {
        buildNavigation(folder.path, subUl);
        subUl.dataset.loaded = "true";
      }
    } else {
      subUl.style.display = "none";
    }
  };

  li.appendChild(a);
  li.appendChild(subUl);
  parentElement.appendChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');
  buildNavigation("", navList);
  loadMarkdown("README.md");

  document.getElementById("englishBtn").addEventListener("click", function() {
    currentLanguage = "EN";
    refreshNav();
  });

  document.getElementById("dutchBtn").addEventListener("click", function() {
    currentLanguage = "NL";
    refreshNav();
  });

  document.getElementById("frenchBtn").addEventListener("click", function() {
    currentLanguage = "FR";
    refreshNav();
  });
});

function refreshNav() {
  document.getElementById('navList').innerHTML = '';
  buildNavigation("", document.getElementById('navList'));
  loadMarkdown("README.md");
}
