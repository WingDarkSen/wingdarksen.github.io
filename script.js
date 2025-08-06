
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('modeToggle');

  if (localStorage.getItem('darkMode') === null) {
    const hour = new Date().getHours();
    const autoDark = hour >= 18 || hour < 6;
    localStorage.setItem('darkMode', autoDark);
  }

  const isDark = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', isDark);
  checkbox.checked = isDark;

  checkbox.addEventListener('change', () => {
    const active = checkbox.checked;
    document.body.classList.toggle('dark-mode', active);
    localStorage.setItem('darkMode', active);
  });
});
