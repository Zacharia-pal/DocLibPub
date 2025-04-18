document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.getElementById('file-list');
    const mdContent = document.getElementById('md-content');

    const repoOwner = 'Zacharia-pal';  // GitHub username
    const repoName = 'DocLibPub';      // Repository name

    // Function to fetch files from GitHub repository
    function getMarkdownFiles() {
        // GitHub API URL to get repository contents (replace with your actual repo details)
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data); // Debugging line
                const mdFiles = [];
                data.forEach(item => {
                    if (item.type === 'file' && item.name.endsWith('.md')) {
                        mdFiles.push({
                            name: item.name,
                            path: item.path
                        });
                    } else if (item.type === 'dir') {
                        // Recursively look for .md files in subdirectories
                        fetchMarkdownFilesInDir(item.path, mdFiles);
                    }
                });
                populateSidebar(mdFiles);
            })
            .catch(error => {
                console.error('Error fetching files from GitHub:', error);
                mdContent.innerHTML = `<p>Error loading files.</p>`;
            });
    }

    // Function to fetch markdown files in subdirectories
    function fetchMarkdownFilesInDir(dirPath, mdFiles) {
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${dirPath}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('Directory API Response:', data); // Debugging line
                data.forEach(item => {
                    if (item.type === 'file' && item.name.endsWith('.md')) {
                        mdFiles.push({
                            name: item.name,
                            path: item.path
                        });
                    } else if (item.type === 'dir') {
                        fetchMarkdownFilesInDir(item.path, mdFiles); // Recurse into subdirectories
                    }
                });
                populateSidebar(mdFiles);
            })
            .catch(error => {
                console.error('Error fetching directory contents:', error);
            });
    }

    // Function to populate the sidebar with markdown files
    function populateSidebar(files) {
        console.log('Files to display:', files); // Debugging line
        fileList.innerHTML = ''; // Clear the sidebar
        if (files.length === 0) {
            fileList.innerHTML = '<p>No markdown files found.</p>';
        }
        files.forEach(file => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = file.name;
            a.dataset.filePath = file.path;
            a.addEventListener('click', function () {
                loadMarkdownContent(file.path);
            });
            li.appendChild(a);
            fileList.appendChild(li);
        });
    }

    // Function to fetch the markdown content and render it
    function loadMarkdownContent(filePath) {
        const apiUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${filePath}`;

        fetch(apiUrl)
            .then(response => response.text())
            .then(markdown => {
                mdContent.innerHTML = marked(markdown);  // Render the markdown content
            })
            .catch(error => {
                mdContent.innerHTML = `<p>Error loading file: ${error}</p>`;
            });
    }

    // Initialize the sidebar with markdown files
    getMarkdownFiles();
});
