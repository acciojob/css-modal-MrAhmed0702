document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close-modal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

});
