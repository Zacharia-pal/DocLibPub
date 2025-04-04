// Configuration variables – adjust these to match your repository
const owner = "zacharia-pal";
const repo = "DocLibPub";
const branch = "main"; // Change if your branch is different
// Use the repository root as the base path
const basePath = "";

/**
 * Loads a Markdown file using its raw URL and renders it using marked.js.
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
 * Recursively builds a navigation menu by fetching the GitHub API contents for a given path.
 * @param {string} path - The folder path relative to the repository root.
 * @param {HTMLElement} parentElement - The DOM element (usually a <ul>) to which navigation items will be appended.
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
        // Filter to show only directories and Markdown files.
        if (item.type !== "dir" && !(item.type === "file" && item.name.endsWith(".md"))) {
          return;
        }
        const li = document.createElement('li');
        if (item.type === "dir") {
          // Create a dropdown for directories
          li.classList.add('dropdown');
          const a = document.createElement('a');
          a.href = "#";
          a.textContent = item.name;
          a.onclick = function(e) {
            e.preventDefault();
            li.classList.toggle('open');
            // If not already built, fetch and build its submenu
            if (!li.dataset.loaded) {
              const subUl = document.createElement('ul');
              li.appendChild(subUl);
              buildNavigation(item.path, subUl);
              li.dataset.loaded = "true";
            }
          };
          li.appendChild(a);
        } else if (item.type === "file" && item.name.endsWith(".md")) {
          // Create a link for Markdown files
          const a = document.createElement('a');
          a.href = "#";
          a.textContent = item.name;
          a.onclick = function(e) {
            e.preventDefault();
            loadMarkdown(item.path);
          };
          li.appendChild(a);
        }
        parentElement.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error building navigation:", error);
      parentElement.innerHTML = `<li>Error loading navigation</li>`;
    });
}

// When the page loads, build the navigation and load a default Markdown file.
document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('navList');
  buildNavigation(basePath, navList);
  // Optionally load a default Markdown file, e.g., "README.md" from the repo root
  loadMarkdown("README.md");
});
