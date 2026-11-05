/* Strona v2: postęp przypiętych sekcji (--p), pojawianie się elementów, liczniki,
   podgląd zdjęć przy liście wystąpień, obsługa widżetu Calendesk. */
(function () {
  var root = document.documentElement;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* --- 0e. Panel haseł 4x2: słowa wymieniają się z jednym ukrytym (jak partnerzy na liście) --- */
  (function () {
    var grid = document.querySelector('.slogans'); if (!grid || calm) return;
    var cells = [].slice.call(grid.children), pool = [grid.dataset.pool], visible = false, last = -1;
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.2 }).observe(grid);
    setInterval(function () {
      if (!visible || document.hidden) return;
      var i; do { i = Math.floor(Math.random() * cells.length); } while (i === last);
      last = i;
      var cell = cells[i], sc = cell.firstElementChild;
      cell.classList.add('out');
      setTimeout(function () { pool.push(sc.textContent); sc.textContent = pool.shift(); cell.classList.remove('out'); }, 300);
    }, 1500);
  })();

  /* --- 0c. Przełączniki Kolor / Styl (narzędzie robocze) --- */
  [].forEach.call(document.querySelectorAll('[data-pick]'), function (btn) {
    btn.addEventListener('click', function () {
      var k = btn.dataset.pick, v = btn.dataset.val;
      root.dataset[k] = v;
      try { localStorage.setItem('amz3-' + k, v); } catch (e) {}
      mark();
    });
  });
  function mark() {
    [].forEach.call(document.querySelectorAll('[data-pick]'), function (b) { b.setAttribute('aria-pressed', root.dataset[b.dataset.pick] === b.dataset.val); });
  }
  mark();

  /* --- 0d. Nagłówki: słowa wysuwają się spod maski przy wejściu w kadr --- */
  function splitHeads() {
    if (calm) return;
    [].forEach.call(document.querySelectorAll('.h2, .statement, .intro__big'), function (el) {
      if (el.classList.contains('split')) { var plain = el.textContent; el.classList.remove('split'); el.textContent = plain; }
      var words = el.textContent.trim().split(/\s+/);
      el.setAttribute('aria-label', el.textContent.trim());
      el.innerHTML = words.map(function (w, i) { return '<span class="w" aria-hidden="true"><span style="--i:' + i + '">' + w + '</span></span>'; }).join(' ');
      el.classList.add('split');
      if (!el.classList.contains('reveal')) { var o = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { el.classList.add('in'); o.disconnect(); } }); }, { threshold: 0.3 }); o.observe(el); }
    });
  }

  /* --- 0b. Przełącznik gradientu w tle hero (narzędzie robocze) --- */
  var gt = document.getElementById('glow-toggle');
  function setGlow(on) {
    document.body.classList.toggle('no-glow', !on);
    if (gt) gt.setAttribute('aria-pressed', on);
    try { localStorage.setItem('amz3-glow', on ? '1' : '0'); } catch (e) {}
  }
  var glowOn = true; try { glowOn = localStorage.getItem('amz3-glow') !== '0'; } catch (e) {}
  setGlow(glowOn);
  if (gt) gt.addEventListener('click', function () { setGlow(gt.getAttribute('aria-pressed') !== 'true'); });

  /* --- 0a. Przełącznik motywu (jasny domyślnie) --- */
  var tt = document.getElementById('theme-toggle');
  if (tt) tt.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('amz3-theme', next); } catch (e) {}
  });

  /* --- 0. Hero: ekran środkowy kratki; sąsiednie ekrany pojawiają się przy oddalaniu (scroll) --- */
  (function () {
    var world = document.querySelector('.hero__world'); if (!world) return;
    var imgs = ['p-teal-front', 'mata-pge', 'p-orange-look', 'going-tixy', 'czb-ruch', 'rapstacja', 'p-moody-teal', 'zarcie'];
    var words = ['20 lat w branży', 'Tysiące wydarzeń', 'Sponsoring', 'PR, media, marketing', 'Ticketing', 'Produkcja', 'Skalowanie biznesu', 'Relacje'];
    var n = 0, w = 0, html = '';
    for (var j = -1; j <= 1; j++) for (var i = -1; i <= 1; i++) {
      if (!i && !j) continue;
      var t = ((i + 2) * 7 + (j + 2) * 3) % 4, st = ' style="--i:' + i + ';--j:' + j + '"';
      if (false) html += '<div class="hero__nb hero__nb--accent"' + st + '><span>' + words[w++ % words.length] + '</span></div>';
      else html += '<div class="hero__nb"' + st + '><img src="assets/img/' + imgs[n++ % imgs.length] + '.jpg" alt="" loading="lazy"></div>';
    }
    world.insertAdjacentHTML('afterbegin', html);
    var auras = '<div class="hero__aura" style="--i:0;--j:0"><img src="' + document.querySelector('.hero__img').getAttribute('src') + '" alt=""></div>';
    [].forEach.call(world.querySelectorAll('.hero__nb'), function (nb) {
      auras += '<div class="hero__aura" style="' + nb.getAttribute('style') + '"><img src="' + nb.querySelector('img').getAttribute('src') + '" alt=""></div>';
    });
    world.insertAdjacentHTML('afterbegin', '<div class="hero__auras" aria-hidden="true">' + auras + '</div>');
  })();

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

  /* --- 4b. Wersja tekstów: A (obecne), B (z dokumentu 1), C (z dokumentu „nowy konspekt") ---
     Elementy z data-b / data-c podmieniają tekst; bez atrybutu zostaje tekst A.
     Bloki .b-only / .c-only widać tylko w danej wersji, .ab-only znika w C. */
  var modeBtns = [].slice.call(document.querySelectorAll('[data-copy-mode]'));
  var swapEls = [].slice.call(document.querySelectorAll('[data-b], [data-c]'));
  function setCopy(mode) {
    swapEls.forEach(function (el) {
      if (el.dataset.a === undefined) el.dataset.a = el.textContent;
      var t = el.dataset.a;
      if (mode === 'b' && el.dataset.b !== undefined) t = el.dataset.b;
      if (mode === 'c' && el.dataset.c !== undefined) t = el.dataset.c;
      el.textContent = t;
    });
    document.body.classList.toggle('txt-b', mode === 'b');
    document.body.classList.toggle('txt-c', mode === 'c');
    modeBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.copyMode === mode); });
    try { localStorage.setItem('amz3-copy', mode); } catch (e) {}
    splitHeads();
  }
  if (modeBtns.length) {
    modeBtns.forEach(function (b) { b.addEventListener('click', function () { setCopy(b.dataset.copyMode); }); });
    var saved = 'c'; try { saved = localStorage.getItem('amz3-copy') || 'c'; } catch (e) {} setCopy(saved);
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
