document.addEventListener('DOMContentLoaded', function () {
    const fileList = document.getElementById('file-list');
    const mdContent = document.getElementById('md-content');

    // Sample function to simulate retrieving all markdown files from the server
    function getMarkdownFiles() {
        // This is a mock data structure simulating your repository's file structure
        // Replace this part with actual server-side logic if you're using Node.js, Python, etc.
        return [
            { path: 'folder1/file1.md', name: 'file1.md' },
            { path: 'folder1/file2.md', name: 'file2.md' },
            { path: 'folder2/file3.md', name: 'file3.md' },
            { path: 'folder3/subfolder1/file4.md', name: 'file4.md' },
            // More files here...
        ];
    }

    // Function to display the files in the sidebar
    function populateSidebar(files) {
        files.forEach(file => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = file.name;
            a.dataset.filePath = file.path;
            a.addEventListener('click', function() {
                loadMarkdownContent(file.path);
            });
            li.appendChild(a);
            fileList.appendChild(li);
        });
    }

    // Function to fetch the markdown content (you'd fetch the real content here)
    function loadMarkdownContent(filePath) {
        // This is a mock of fetching markdown content
        // Replace this with an actual fetch request to your server, e.g., fetch(`path/to/${filePath}`)
        mdContent.innerHTML = `
            <h2>Viewing: ${filePath}</h2>
            <p>This is where the markdown content would go. Replace with actual fetch logic.</p>
        `;
    }

    // Initialize the sidebar with all files
    const files = getMarkdownFiles();
    populateSidebar(files);
});
