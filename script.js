const repoOwner = 'Zacharia-pal';  // Replace with your GitHub username
const repoName = 'DocLibPub';      // Replace with your repository name
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

// Function to fetch and filter .md files from the repository
async function fetchMarkdownFiles() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Filter the files to only include .md files
        const mdFiles = data.filter(file => file.name.endsWith('.md'));

        // If there are no markdown files
        if (mdFiles.length === 0) {
            console.log('No markdown files found');
            return;
        }

        // Log the markdown files' names
        console.log('Markdown files in the repository:');
        mdFiles.forEach(file => {
            console.log(file.name);
        });
    } catch (error) {
        console.error('Error fetching files:', error);
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchMarkdownFiles);
