// =============================================
// MOBILE HAMBURGER MENU + COMMENTS
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  // ============== HAMBURGER MENU ==============
  const menuToggle = document.getElementById('menuToggle');
  const navLinks   = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function (e) {
      e.stopImmediatePropagation();           // Prevent multiple triggers
      navLinks.classList.toggle('active');

      // Change icon to × when open (nice UX)
      this.textContent = navLinks.classList.contains('active') ? '✕' : '≡';
    });

    // Close menu when clicking any link (good for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuToggle.textContent = '≡';
      });
    });
  }

  // ============== COMMENTS (only runs if form exists) ==============
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    function renderComments() {
      const list = document.getElementById('commentList');
      if (!list) return;
      list.innerHTML = '';
      comments.forEach(c => {
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `
          <div class="comment-header">${c.name}</div>
          <div class="comment-email">${c.email}</div>
          <div class="comment-text">${c.comment.replace(/\n/g, '<br>')}</div>
        `;
        list.appendChild(div);
      });
    }

    commentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const commentText = document.getElementById('comment').value.trim();

      if (name && email && commentText) {
        comments.unshift({ name, email, comment: commentText });
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
        commentForm.reset();
      }
    });

    renderComments();
  }
});
