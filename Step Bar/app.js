const steps = document.querySelectorAll('.step');
let current = 1;

const update = () => {
  steps.forEach((s, i) => {
    if (i < current) {
      s.classList.add('completed');
      s.textContent = '✓';
    } else {
      s.classList.remove('completed');
      s.textContent = '✕';
    }
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = s.getAttribute('data-label');
    s.appendChild(label);
  });
};

document.querySelector('.buttons button:first-child').onclick = () => {
  if (current > 1) current--;
  update();
};

document.querySelector('.buttons button:last-child').onclick = () => {
  if (current < steps.length) current++;
  update();
};
update();
