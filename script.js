// Configuration variables – adjust these to match your repository
const owner = "zacharia-pal";
const repo = "DocLibPub";
const branch = "main"; // Change if your branch is different
// Use the repository root as the base path
const basePath = "";

// Custom folder names mapping: key = folder name, value = custom display name
const folderCustomNames = {
  "PAL_DOC_GIT_repotransfer_EN": "Patronale Life Git Repo Transfer English"
  // Add more mappings as needed
};

/**
 * Loads a Markdown file using its raw URL and renders it with marked.js.
 * @param {string} filePath - The file path relative to the repository root.
 */
function loadMarkdown(filePath) {
  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
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

/**
 * Builds navigation for files and directories in the given path.
 * Only directories and Markdown files are included.
 * @param {string} path - The folder path relative to the repository root.
 * @param {HTMLElement} parentElement - The DOM element to which nav items will be appended.
 */
function buildNavigation(path, parentElement) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(items => {
      // Sort items: directories first, then files
      items.sort((a, b) => {
        if (a.type === b.type) return a.name.localeCompare(b.name);
        return a.type === "dir" ? -1 : 1;
      });
      items.forEach(item => {
        if (item.type === "dir") {
          buildDirectoryNavigation(item, parentElement);
        } else if (item.type === "file" && item.name.endsWith(".md") && item.name.toLowerCase() !== "index.md") {
          // Add standalone Markdown files (but not index.md)
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

/**
 * Builds a navigation item for a directory.
 * If the directory contains an index.md, clicking the folder loads that file.
 * Also builds a dropdown for any additional items within the directory.
 * @param {Object} item - The directory item from the GitHub API.
 * @param {HTMLElement} parentElement - The DOM element to append this nav item.
 */
function buildDirectoryNavigation(item, parentElement) {
  const li = document.createElement('li');
  li.classList.add('dropdown');
  const a = document.createElement('a');
  // Use custom name if available; otherwise, use the directory name
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
          // Sort subItems: directories first, then files
          subItems.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === "dir" ? -1 : 1;
          });
          // Check if index.md exists; if so, load it when the folder is clicked
          let indexMdItem = subItems.find(si => si.type === "file" && si.name.toLowerCase() === "index.md");
          if (indexMdItem) {
            loadMarkdown(indexMdItem.path);
            // Remove index.md so it doesn't appear as a separate item
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
    }
  };
  parentElement.appendChild(li);
}

// On page load, build the navigation (starting at the repo root) and load a default Markdown file (e.g., README.md)
document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');
  buildNavigation(basePath, navList);
  loadMarkdown("README.md");
});
