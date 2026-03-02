// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu after clicking a link
    navLinks.classList.remove('active');
  });
});

// Comments system (client-side only – stored in localStorage)
let comments = JSON.parse(localStorage.getItem('comments')) || [];

function renderComments() {
  const list = document.getElementById('commentList');
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

document.getElementById('commentForm').addEventListener('submit', e => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (name && email && comment) {
    comments.unshift({ name, email, comment, date: new Date().toLocaleString() });
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
    e.target.reset();
  }
});

// Load saved comments when page loads
renderComments();
