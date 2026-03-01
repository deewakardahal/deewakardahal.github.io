function showSection(sectionId) {
    const contentArea = document.getElementById('content-area');
    
    // Simple logic to change content based on button click
    if (sectionId === 'home') {
        contentArea.innerHTML = '<h2>Welcome, Seeker</h2><p>The temple doors are open.</p>';
    } else if (sectionId === 'articles') {
        contentArea.innerHTML = '<h2>Articles</h2><p>Browsing the archives...</p>';
    } else if (sectionId === 'about') {
        contentArea.innerHTML = '<h2>About the Oracle</h2><p>History and lore of this blog.</p>';
    } else if (sectionId === 'comments') {
        contentArea.innerHTML = '<h2>Comments</h2><p>What do the people say?</p>';
    }
}
