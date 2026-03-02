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

  renderComments();
}
