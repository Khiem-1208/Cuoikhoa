let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && message) {
      const comment = document.createElement('div');
      comment.className = 'comment';
      comment.innerHTML = `<strong>${name}:</strong> ${message}`;
      document.getElementById('comments').appendChild(comment);
      document.getElementById('comment-form').reset();
    }
  });
  