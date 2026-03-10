export const initForm = () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    try {
      submitBtn.textContent = 'Відправка...';
      submitBtn.disabled = true;

      const formData = new FormData(form);
      const queryParams = new URLSearchParams(formData).toString();

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Помилка сервера');

      alert('Дякуємо! Ваші дані успішно відправлено.');
      form.reset();

    } catch (error) {
      console.error('Помилка відправки:', error);
      alert('Сталася помилка при відправці. Спробуйте пізніше.');
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
};