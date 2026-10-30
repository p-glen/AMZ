/* Podstawa v2: tylko zapamiętany motyw (jasny/ciemny). Reszta dochodzi z sekcjami. */
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('amz-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}

  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('amz-theme', next); } catch (e) {}
  });
})();
