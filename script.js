const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navigation');
const dialog = document.querySelector('#inquiry-dialog');
const dialogCopy = document.querySelector('#dialog-copy');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.navigation a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.inquire').forEach((button) => button.addEventListener('click', () => {
  dialogCopy.textContent = `${button.dataset.product} är tyvärr fortsatt helt otillgänglig. Precis som du förväntade dig.`;
  dialog.showModal();
}));

document.querySelectorAll('.close-dialog, .dialog-ok').forEach((button) => button.addEventListener('click', () => dialog.close()));

document.querySelector('#waitlist-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = event.currentTarget.querySelector('.form-success');
  message.textContent = 'Ansökan mottagen. Vi ignorerar den med största möjliga omsorg.';
  event.currentTarget.reset();
});

const soundToggle = document.querySelector('.sound-toggle');
soundToggle?.addEventListener('click', () => {
  const on = soundToggle.textContent.includes('På');
  soundToggle.textContent = on ? 'Ljud: Av' : 'Ljud: På (fortfarande tyst)';
});
