const p =
document.getElementById('coming-soon');
let dots = '';
let count = 0;
setInterval(() => {
    count = (count + 1) % 4;
    dots = ' .'.repeat(count);
    p.textContent = `Coming Soon${dots}`;
}, 500);