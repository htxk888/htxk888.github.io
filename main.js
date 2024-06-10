// main.js
document.getElementById('releaseLink').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认的链接跳转行为

    let lastReleaseDate = localStorage.getItem('lastReleaseDate');
    let currentIndex = localStorage.getItem('currentIndex');

    const today = new Date().toISOString().split('T')[0];

    if (!lastReleaseDate || !currentIndex) {
        lastReleaseDate = today;
        currentIndex = 0;
        localStorage.setItem('lastReleaseDate', lastReleaseDate);
        localStorage.setItem('currentIndex', currentIndex);
    } else {
        currentIndex = parseInt(currentIndex, 10);
    }

    if (today !== lastReleaseDate) {
        lastReleaseDate = today;
        currentIndex++;
        localStorage.setItem('lastReleaseDate', lastReleaseDate);
        localStorage.setItem('currentIndex', currentIndex);
    }

    if (currentIndex < domains.length) {
        const domain = domains[currentIndex];
        document.getElementById('releasedDomain').textContent = `正在跳转到最新网址:http:// ${domain}`;
        window.location.href = domain; // 跳转到释放的域名
    } else {
        document.getElementById('releasedDomain').textContent = '请访问riniba.com';
    }
});
