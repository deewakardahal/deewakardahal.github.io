function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

function showSection(sectionId) {
    // Keep your previous logic here to swap content
    console.log("Navigating to: " + sectionId);
    // Add logic to close mobile menu after clicking a link
    document.getElementById('nav-links').classList.remove('active');
}
