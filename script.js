const repoOwner = 'Zacharia-pal'; // GitHub username
const repoName = 'DocLibPub'; // GitHub repository name
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

let filesData = [];
let currentLanguage = 'EN'; // Default language is English

document.addEventListener('DOMContentLoaded', () => {
    // Fetch files from the GitHub repository
    fetchFiles();

    // Set up language change listener
    document.getElementById('language-selector').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        displayFilteredFiles();
    });
});

// Fetch all files from the repository
async function fetchFiles() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Filter out the markdown files
        filesData = data.filter(file => file.name.endsWith('.md'));

        // Display the files for the default language
        displayFilteredFiles();
    } catch (error) {
        console.error('Error fetching files:', error);
    }
}

// Display files based on the selected language
function displayFilteredFiles() {
    // Filter files based on the language
    const filteredFiles = filesData.filter(file => file.name.includes(`_${currentLanguage}`));

    // Display the filtered files in the content area
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Clear existing content

    if (filteredFiles.length === 0) {
        contentArea.innerHTML = `<p>No files available for language: ${currentLanguage}</p>`;
        return;
    }

    filteredFiles.forEach(file => {
        const fileLink = document.createElement('a');
        fileLink.href = file.download_url;
        fileLink.target = '_blank';
        fileLink.textContent = file.name.replace(`_${currentLanguage}.md`, '');
        contentArea.appendChild(fileLink);
        contentArea.appendChild(document.createElement('br'));
    });
}
