document.addEventListener('DOMContentLoaded', function () {

  // Hamburger Menu Fix for Mobile
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      
      navLinks.classList.toggle('active');

      // Change icon to × when open
      this.textContent = navLinks.classList.contains('active') ? '✕' : '≡';
    });

    // Close menu when tapping any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '≡';
      });
    });
  }

  // Comments (keeps working as before)
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

    renderComments();
  }
});
