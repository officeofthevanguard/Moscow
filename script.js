const year = document.querySelector('#year');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const republicMap = document.querySelector('#republicMap');
const republicCount = document.querySelector('#republicCount');
const decreaseRepublics = document.querySelector('#decreaseRepublics');
const increaseRepublics = document.querySelector('#increaseRepublics');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach((counter) => {
    const target = Number(counter.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 24));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = current;
    }, 35);
  });
}

function renderRepublics(total = 30) {
  republicMap.innerHTML = '';
  republicCount.textContent = total;

  for (let index = 1; index <= total; index += 1) {
    const cell = document.createElement('div');
    cell.className = 'republic-cell';
    cell.textContent = String(index).padStart(2, '0');
    cell.title = `Republic ${index}`;
    republicMap.appendChild(cell);
  }
}

decreaseRepublics.addEventListener('click', () => {
  const nextTotal = Math.max(1, Number(republicCount.textContent) - 1);
  renderRepublics(nextTotal);
});

increaseRepublics.addEventListener('click', () => {
  const nextTotal = Math.min(30, Number(republicCount.textContent) + 1);
  renderRepublics(nextTotal);
});

animateCounters();
renderRepublics(30);
