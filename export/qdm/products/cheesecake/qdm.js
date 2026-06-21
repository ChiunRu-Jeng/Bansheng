/* ===== 伴生乳酪 · 冷藏生乳酪蛋糕 產品 LP — QDM 自訂 JS 欄 ===== */
(function () {
  var root = document.getElementById('bsLp');
  if (!root) return;

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
