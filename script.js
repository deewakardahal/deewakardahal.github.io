// Hamburger menu (works on every page)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Comments only on comments.html
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

if (commentForm && commentList) {
  let comments = JSON.parse(localStorage.getItem('comments')) || [];

  function renderComments() {
    commentList.innerHTML = '';
    comments.forEach(c => {
      const div = document.createElement('div');
      div.className = 'comment';
      div.innerHTML = `
        <div class="comment-header">${c.name}</div>
        <div class="comment-email">${c.email}</div>
        <div class="comment-text">${c.comment.replace(/\n/g, '<br>')}</div>
      `;
      commentList.appendChild(div);
    });
  }

  commentForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && email && comment) {
      comments.unshift({ name, email, comment });
      localStorage.setItem('comments', JSON.stringify(comments));
      renderComments();
      commentForm.reset();
    }
  });
// Auto-sort article cards by date (newest first) on pages with .articles-grid
document.addEventListener('DOMContentLoaded', function () {
  // ... your existing code (hamburger, comments, etc.) stays here ...

  const grid = document.querySelector('.articles-grid');
  if (grid) {
    const cards = Array.from(grid.querySelectorAll('.card'));

    // Sort cards by data-date descending (newest → oldest)
    cards.sort((a, b) => {
      const dateA = a.getAttribute('data-date') || '0000-00-00'; // fallback
      const dateB = b.getAttribute('data-date') || '0000-00-00';
      return dateB.localeCompare(dateA); // string compare works for YYYY-MM-DD
    });

    // Remove old cards and re-add in sorted order
    grid.innerHTML = ''; // clear current content
    cards.forEach(card => grid.appendChild(card));
  }
});
  renderComments();
}
