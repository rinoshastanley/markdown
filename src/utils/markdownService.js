const convertMarkdownToHTML = async (markdown) => {
    try {
        if (!markdown || markdown.length < 0) return ""
        const response = await fetch('http://localhost:3001/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ markdown }),
        });

        if (!response.ok) {
            throw new Error('Conversion failed');
        }

        const { html } = await response.json();


        // Use the 'html' received from the backend to display/render the converted content
        console.log(html); // Display the converted HTML
        return html
        // Update your UI to show the converted HTML (e.g., set it in a state for rendering)
    } catch (error) {
        console.error('Error converting Markdown to HTML:', error.message);
    }
};

module.exports = { convertMarkdownToHTML };
