// Fixed Mobile Hamburger Menu for GitHub Pages
document.addEventListener('DOMContentLoaded', function () {

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {

    // Use both click and touchstart for better mobile support
    function toggleMenu(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      navLinks.classList.toggle('active');

      // Change icon to × when open
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '≡';
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('touchstart', toggleMenu);   // This is the key fix for many mobile cases

    // Close menu when tapping a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '≡';
      });
    });
  }

  // Keep your existing comments code here (if any)
  // ... (no change needed for comments)
});
