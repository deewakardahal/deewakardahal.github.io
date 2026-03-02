const articles = [
    { title: "The First Prophecy", desc: "Exploring the intersection of ancient wisdom and modern thought..." },
    { title: "Stoic Echoes", desc: "How the voices of the past shape our digital silence today." },
    { title: "The Delphic Maxims", desc: "147 ancient rules to live a balanced life." },
    { title: "Plato's Shadow", desc: "Understanding reality in a world of digital screens." },
    { title: "The Eternal Flame", desc: "Why philosophy never truly dies, it only evolves." }
];

function loadArticles() {
    const container = document.getElementById('article-container');
    container.innerHTML = ''; // Clear current content

    articles.forEach(art => {
        const card = `
            <div class="article-card">
                <div style="width:60px; height:60px; background:#e8e2d6; flex-shrink:0;"></div>
                <div class="article-info">
                    <h3 style="font-family:'Cinzel', serif; margin:0;">${art.title}</h3>
                    <p style="margin:5px 0 0 0;">${art.desc}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function showSection(sectionId) {
    const container = document.getElementById('article-container');
    if (sectionId === 'home') {
        loadArticles();
    } else {
        container.innerHTML = `<h2 style="text-align:center; font-family:'Cinzel'">${sectionId.toUpperCase()}</h2><p style="text-align:center">The archives for ${sectionId} are currently being transcribed...</p>`;
    }
}

// Initialize Home Page with 5 articles
window.onload = loadArticles;
