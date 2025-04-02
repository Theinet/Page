AOS.init();
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  fetch('https://formspree.io/f/mjvjkdzp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    alert('Спасибо! Ваше сообщение отправлено.');
    document.getElementById('contact-form').reset();
  })
  .catch(error => {
    alert('Ошибка! Не удалось отправить сообщение.');
  });
});
