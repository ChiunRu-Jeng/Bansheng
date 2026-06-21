/* ===== 伴生乳酪 · 一口乳酪球 產品 LP — QDM 自訂 JS 欄 ===== */
(function () {
  var root = document.getElementById('bsLp');
  if (!root) return;

  // flavor switcher
  var flavorData = [
    { ko: 'Original', name: '經典原味', color: '#E7C98C',
      desc: '以北海道奶油乳酪為基底，烘烤出微酥外殼與濕潤內芯。純粹的乳香與恰到好處的鹹甜，是伴生最初、也最受歡迎的味道。' },
    { ko: 'Uji Matcha', name: '宇治抹茶', color: '#8E9C5E',
      desc: '選用日本宇治抹茶，茶香在乳酪的綿密中緩緩展開，微苦回甘的尾韻，是大人系的優雅選擇。' },
    { ko: 'Chocolat', name: '比利時巧克力', color: '#6B4A33',
      desc: '融入比利時調溫巧克力，可可的醇厚與乳酪的酸香交織，濃郁而不膩，是甜點控的心頭好。' },
    { ko: 'Lemon', name: '西西里檸檬', color: '#E4D86A',
      desc: '點綴西西里檸檬皮屑，清新酸香劃過綿密乳酪，明亮而爽口，最適合炎炎午後的一口清爽。' },
    { ko: 'Berry', name: '綜合莓果', color: '#C56B7A',
      desc: '草莓、藍莓與覆盆子交織的酸甜，與乳酪交融出粉嫩浪漫的滋味，是少女心的最佳代名詞。' }
  ];
  var fImg = document.getElementById('fImg');
  var fKo = document.getElementById('fKo');
  var fName = document.getElementById('fName');
  var fDesc = document.getElementById('fDesc');
  root.querySelectorAll('.flavor').forEach(function (f) {
    f.addEventListener('click', function () {
      var act = root.querySelector('.flavor.active');
      if (act) act.classList.remove('active');
      f.classList.add('active');
      var d = flavorData[+f.dataset.i];
      if (fImg) {
        fImg.style.backgroundColor = d.color;
        var s = fImg.querySelector('span');
        if (s) s.textContent = '[ 乳酪球 · ' + d.name + ' ]';
      }
      if (fKo) fKo.textContent = d.ko;
      if (fName) { fName.textContent = d.name; fName.style.color = d.color; }
      if (fDesc) fDesc.textContent = d.desc;
    });
  });

  // FAQ accordion
  root.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
    });
  });

  // reveal on scroll
  var reveals = root.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    root.classList.add('js-anim');
    var reveal = function (el) { el.classList.add('in'); };
    reveals.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) reveal(el);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: .14 });
    reveals.forEach(function (el) { if (!el.classList.contains('in')) io.observe(el); });
    setTimeout(function () { reveals.forEach(reveal); }, 2500);
  }
})();
