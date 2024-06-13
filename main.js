// main.js
document.getElementById('releaseLink').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认的链接跳转行为

    let lastReleaseDate = localStorage.getItem('lastReleaseDate');
    let currentIndex = localStorage.getItem('currentIndex');

    // 设置固定日期（例如：2024年6月11日）
    const fixedDate = new Date('2024-06-09');

    // 获取今天的日期
    const today = new Date();

    // 如果是固定日期，更新索引
    if (!lastReleaseDate || lastReleaseDate !== fixedDate.toISOString().split('T')[0]) {
        // 更新索引
        currentIndex = (parseInt(currentIndex, 10) || 0) % domains.length;
        // 更新上次释放日期为固定日期
        lastReleaseDate = fixedDate.toISOString().split('T')[0];
        localStorage.setItem('lastReleaseDate', lastReleaseDate);
        // 更新当前索引
        localStorage.setItem('currentIndex', currentIndex);
    }

    // 获取当前应该释放的域名
    const domain = domains[currentIndex];
    document.getElementById('releasedDomain').textContent = `正在带您进入: ${domain}`;
    // 跳转到该域名
    window.location.href = domain;
});
