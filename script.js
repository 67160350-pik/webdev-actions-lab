document.getElementById('helloBtn').addEventListener('click', () => {
  document.getElementById('status').innerText = 'Hello from GitHub Actions!';
});

const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.innerText = '☀️';
  } else {
    themeBtn.innerText = '🌙';
  }
});

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert('คัดลอกอีเมลเรียบร้อยแล้ว: ' + text);
}