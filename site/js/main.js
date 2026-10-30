/* Strona v2: postęp przypiętych sekcji (--p), pojawianie się elementów, liczniki,
   podgląd zdjęć przy liście wystąpień, obsługa widżetu Calendesk. */
(function () {
  var root = document.documentElement;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- 1. Postęp sekcji przypiętych: 0 (początek) .. 1 (koniec) --- */
  var pins = [].slice.call(document.querySelectorAll('.pin'));
  var ticking = false;
  function updatePins() {
    ticking = false;
    var vh = window.innerHeight;
    pins.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) return;           // poza zasięgiem
      var total = r.height - vh;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      el.style.setProperty('--p', p.toFixed(4));
    });
  }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(updatePins); } }
  if (!calm) {
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    updatePins();
  }

  /* --- 2. Pojawianie się elementów --- */
  var reveals = [].slice.call(document.querySelectorAll('.reveal, .work'));
  if ('IntersectionObserver' in window && !calm) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- 3. Liczniki (miejsce na końcową liczbę zarezerwowane niewidocznym „duchem") --- */
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function runCounter(el) {
    var num = el.querySelector('.cnt-num'), to = +el.dataset.to, t0 = null, dur = 1700;
    if (calm) { num.textContent = fmt(to); el.classList.add('done'); return; }
    function f(ts) {
      if (t0 === null) t0 = ts;
      var u = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - u, 3);
      num.textContent = fmt(Math.round(to * e));
      if (u < 1) requestAnimationFrame(f); else el.classList.add('done');
    }
    requestAnimationFrame(f);
  }
  var counters = [].slice.call(document.querySelectorAll('.cnt'));
  if ('IntersectionObserver' in window) {
    var ioc = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { ioc.unobserve(x.target); runCounter(x.target); } });
    }, { threshold: 0.9 });
    counters.forEach(function (c) { ioc.observe(c); });
  } else {
    counters.forEach(function (c) { c.querySelector('.cnt-num').textContent = fmt(+c.dataset.to); c.classList.add('done'); });
  }

  /* --- 4. Podgląd zdjęcia przy najechaniu na wiersz listy wystąpień --- */
  var preview = document.getElementById('preview');
  var pimg = preview && preview.querySelector('img');
  var rows = [].slice.call(document.querySelectorAll('#talks [data-img]'));
  if (preview && pimg && rows.length && window.matchMedia('(hover: hover)').matches) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    function follow() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      preview.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px)';
      raf = preview.classList.contains('on') ? requestAnimationFrame(follow) : 0;
    }
    rows.forEach(function (row) {
      row.addEventListener('mouseenter', function (e) {
        pimg.src = row.dataset.img; tx = cx = e.clientX + 24; ty = cy = e.clientY - 80;
        preview.classList.add('on'); if (!raf) raf = requestAnimationFrame(follow);
      });
      row.addEventListener('mousemove', function (e) { tx = e.clientX + 24; ty = e.clientY - 80; });
      row.addEventListener('mouseleave', function () { preview.classList.remove('on'); });
    });
  }

  /* --- 5. Calendesk: dopasowanie wysokości ramki i przewijanie do kroku --- */
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || (d.type !== 'calendesk-resize' && d.type !== 'calendesk-scroll')) return;
    var frames = document.querySelectorAll('.calendesk-frame');
    for (var i = 0; i < frames.length; i++) {
      var f = frames[i];
      if (f.contentWindow !== e.source) continue;
      if (d.type === 'calendesk-resize' && typeof d.height === 'number') f.style.height = d.height + 'px';
      if (d.type === 'calendesk-scroll' && typeof d.top === 'number') {
        var r = f.getBoundingClientRect();
        var margin = parseFloat(getComputedStyle(f).scrollMarginTop) || 0;
        window.scrollTo(0, Math.max(0, window.pageYOffset + r.top + d.top - margin));
      }
    }
  });
})();
