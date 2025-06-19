Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const button = document.getElementById('send-btn');

button.addEventListener('click', (e) => {
    e.preventDefault(); // чтобы не отправлялась форма по умолчанию

    const forma = {
        firstName: document.getElementById('q-firstname').value,
        lastName: document.getElementById('q-lastname').value,
        email: document.getElementById('q-email').value,
        phone: document.getElementById('q-phone').value,
        message: document.getElementById('q-message').value
    };

    console.log(forma);
});