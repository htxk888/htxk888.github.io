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
        document.getElementById('releasedDomain').textContent = `正在打开: ${domain}`;
        window.location.href = `http://${domain}`; // 确保使用绝对路径跳转
    } else {
        document.getElementById('releasedDomain').textContent = '所有域名已释放完毕';
    }
});
