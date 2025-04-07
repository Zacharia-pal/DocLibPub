const repoOwner = 'Zacharia-pal';  // GitHub username
const repoName = 'DocLibPub';      // GitHub repository name
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

// Function to fetch and filter .md files from the repository
async function fetchMarkdownFiles() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Filter the files to only include .md files
        const mdFiles = data.filter(file => file.name.endsWith('.md'));

        // Display markdown files in the #file-list div
        const fileListDiv = document.getElementById('file-list');
        fileListDiv.innerHTML = ''; // Clear previous content

        // If no markdown files are found, display a message
        if (mdFiles.length === 0) {
            fileListDiv.innerHTML = 'No markdown files found';
            return;
        }

        // Loop through each file and create a link
        mdFiles.forEach(file => {
            const fileElement = document.createElement('div');
            fileElement.classList.add('file-item');
            
            // Create a link to the raw markdown file
            const fileLink = document.createElement('a');
            fileLink.href = file.download_url;
            fileLink.target = '_blank';
            fileLink.textContent = file.name;
            
            fileElement.appendChild(fileLink);
            fileListDiv.appendChild(fileElement);
        });
    } catch (error) {
        console.error('Error fetching files:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchMarkdownFiles);
