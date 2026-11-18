const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('newsletter-thanks').classList.remove('d-none');
  });
}

const hiveSignupForm = document.getElementById('hiveSignupForm');

if (hiveSignupForm) {
  const hiveSignupThanks = document.getElementById('hiveSignupThanks');
  const hiveSignupModal = document.getElementById('hiveSignupModal');

  hiveSignupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!hiveSignupForm.checkValidity()) {
      hiveSignupForm.reportValidity();
      return;
    }

    hiveSignupForm.classList.add('d-none');
    hiveSignupThanks.classList.remove('d-none');
  });

  hiveSignupModal.addEventListener('hidden.bs.modal', () => {
    hiveSignupForm.reset();
    hiveSignupForm.classList.remove('d-none');
    hiveSignupThanks.classList.add('d-none');
  });
}
