(function () {
  'use strict';
  var D = window.PORTFOLIO;
  if (!D) { document.body.insertAdjacentHTML('afterbegin', '<p style="padding:20px">Không tải được data/content.js</p>'); return; }

  var $ = function (id) { return document.getElementById(id); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var lang = store.get('pf-lang');
  if (lang !== 'vi' && lang !== 'en') lang = 'vi';

  var t = function (o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.vi)); };
  var ui = function (k) { return t(D.ui[k]); };
  var list = function (o) { return Array.isArray(o) ? o : (o[lang] || o.vi || []); };
  var ul = function (arr, cls) { return '<ul class="' + (cls || 'bul') + '">' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; };

  var NAV = ['about', 'results', 'projects', 'experience', 'skills', 'testimonials', 'contact'];
  var currentProject = null;
  var lastFocus = null;

  /* ---------- Render ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.title = t(D.meta.title);
    var md = document.querySelector('meta[name="description"]'); if (md) md.content = t(D.meta.description);

    $('skip-link').textContent = ui('skipToContent');
    $('nav').innerHTML = NAV.map(function (id) { return '<a href="#' + id + '" data-sec="' + id + '">' + esc(t(D.ui.nav[id])) + '</a>'; }).join('');
    $('lang-label').textContent = lang === 'vi' ? 'EN' : 'VI';
    $('lang-btn').setAttribute('aria-label', ui('langSwitch'));
    updateThemeLabel();

    var p = D.profile;
    $('hero-badge').textContent = ui('openToWork');
    $('hero-name').textContent = p.name;
    $('hero-role').textContent = t(p.role);
    $('hero-tag').textContent = t(p.tagline);
    $('hero-loc').textContent = t(p.location);
    $('cta-projects').textContent = ui('heroCtaProjects');
    $('cta-contact').textContent = ui('heroCtaContact');
    var cv = $('cta-cv'); cv.textContent = ui('heroCtaCv') + ' (PDF)'; cv.href = D.contact.cv;
    var img = $('hero-img'); img.src = p.photo; img.alt = t(p.photoAlt);

    $('hero-stats').innerHTML = D.heroStats.map(function (s) {
      return '<li><strong data-count="' + s.value + '" data-suffix="' + esc(s.suffix || '') + '">' + s.value + esc(s.suffix || '') + '</strong><span>' + esc(t(s.label)) + '</span></li>';
    }).join('');

    $('about-kicker').textContent = ui('aboutKicker');
    $('about-title').textContent = ui('aboutTitle');
    $('about-summary').textContent = t(p.summary);
    $('about-approach').textContent = t(p.approach);
    $('about-outside').textContent = t(p.outside);
    $('interests-title').textContent = ui('interestsTitle');
    $('interests').innerHTML = p.interests.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    $('principles-title').textContent = ui('principlesTitle');
    $('principles').innerHTML = D.principles.map(function (x) { return '<li><h4>' + esc(x.title) + '</h4><p>' + esc(t(x.text)) + '</p></li>'; }).join('');

    $('results-title').textContent = ui('resultsTitle');
    $('results-sub').textContent = ui('resultsSub');
    $('highlights').innerHTML = D.highlights.map(function (h) {
      return '<button type="button" class="result reveal" data-project="' + h.project + '"><b>' + esc(h.big) + '</b><i>' + esc(t(h.unit)) + '</i><p>' + esc(t(h.text)) + '</p></button>';
    }).join('');

    $('projects-title').textContent = ui('projectsTitle');
    $('projects-sub').textContent = ui('projectsSub');
    $('project-cards').innerHTML = D.projects.map(function (pr) {
      return '<button type="button" class="pcard reveal" data-project="' + pr.id + '">' +
        '<img src="' + pr.image + '" alt="' + esc(t(pr.imageAlt)) + '" loading="lazy" width="1000" height="750">' +
        '<span class="pcard-body"><span class="pmeta">' + esc(pr.period) + ' · ' + esc(pr.role) + '</span>' +
        '<h3>' + esc(pr.title) + '</h3><p>' + esc(t(pr.headline)) + '</p>' +
        '<span class="pmore">' + esc(ui('viewDetails')) + ' →</span></span></button>';
    }).join('');

    $('experience-title').textContent = ui('experienceTitle');
    $('timeline').innerHTML = D.experience.map(function (e) {
      return '<li class="reveal"><h3>' + esc(e.role) + '</h3><p class="t-meta">' + esc(t(e.company)) + ' · ' + esc(t(e.period)) + '</p>' + ul(list(e.points), '') + '</li>';
    }).join('');

    $('skills-title').textContent = ui('skillsTitle');
    $('skills-grid').innerHTML = D.skills.map(function (g) {
      return '<div class="skillbox reveal"><h3>' + esc(t(g.group)) + '</h3><ul class="chips">' + g.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
    $('education-title').textContent = ui('educationTitle');
    var ed = D.education;
    $('education').innerHTML =
      '<div class="edu-card reveal"><h4>' + esc(ed.degree) + '</h4><p>' + esc(ed.school) + ' · ' + esc(ed.period) + '</p><p class="muted small" style="margin-top:8px">' + esc(t(ed.note)) + '</p></div>' +
      '<div class="edu-card reveal"><ul>' + D.certificates.map(function (c) { return '<li><span>' + esc(c.name) + '</span><span>' + esc(c.year) + '</span></li>'; }).join('') + '</ul></div>';

    $('testimonials-title').textContent = ui('testimonialsTitle');
    $('quotes').innerHTML = D.testimonials.map(function (q) {
      return '<figure class="quote reveal" style="margin:0"><blockquote>' + esc(t(q.quote)) + '</blockquote><footer><strong>' + esc(q.name) + '</strong><span>' + esc(q.title) + ' · ' + esc(q.company) + '</span></footer></figure>';
    }).join('');

    $('contact-title').textContent = ui('contactTitle');
    $('opp-intro').textContent = t(D.opportunities.intro);
    $('opp-title').textContent = ui('oppTitle');
    $('opp-list').innerHTML = D.opportunities.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
    $('contact-links').innerHTML =
      '<li><a href="mailto:' + esc(D.contact.email) + '">✉ ' + esc(D.contact.email) + '</a></li>' +
      '<li><a href="' + esc(D.contact.linkedin) + '" target="_blank" rel="noopener">in ' + esc(D.contact.linkedinLabel) + '</a></li>' +
      '<li><a href="' + esc(D.contact.cv) + '" download>⬇ ' + esc(ui('heroCtaCv')) + ' (PDF)</a></li>';
    $('lbl-name').textContent = ui('formName');
    $('lbl-email').textContent = ui('formEmail');
    $('lbl-msg').textContent = ui('formMessage');
    $('f-send').textContent = ui('formSend');
    $('f-hint').textContent = D.contact.sheetUrl ? ui('formPrivacy') : ui('formHint');

    $('year').textContent = new Date().getFullYear();
    $('demo-note').textContent = t(D.meta.demoNote);
    $('print-btn').textContent = ui('print');
    $('top-link').textContent = ui('backToTop');
    $('modal-close').setAttribute('aria-label', ui('close'));
    $('modal-prev').setAttribute('aria-label', ui('prev'));
    $('modal-next').setAttribute('aria-label', ui('next'));

    observeReveal();
    countUp();
    if (currentProject) renderModal(currentProject);
    spy();
  }

  /* ---------- Project modal ---------- */
  function findProject(id) { return D.projects.filter(function (p) { return p.id === id; })[0]; }
  function renderModal(id) {
    var p = findProject(id); if (!p) return;
    var steps = p.steps ? '<ol class="flow">' + list(p.steps).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' : '';
    $('modal-body').innerHTML =
      '<div class="modal-hero"><img src="' + p.image + '" alt="' + esc(t(p.imageAlt)) + '"></div>' +
      '<div class="modal-content"><h2 id="modal-title">' + esc(p.title) + '</h2>' +
      '<dl class="facts"><div><dt>' + esc(ui('periodLabel')) + '</dt><dd>' + esc(p.period) + '</dd></div>' +
      '<div><dt>' + esc(ui('roleLabel')) + '</dt><dd>' + esc(p.role) + '</dd></div>' +
      '<div><dt>' + esc(ui('companyLabel')) + '</dt><dd>' + esc(p.company) + '</dd></div></dl>' +
      '<p class="headline">' + esc(t(p.headline)) + '</p>' +
      '<div class="msec"><h3>' + esc(ui('secContext')) + '</h3><p>' + esc(t(p.context)) + '</p></div>' +
      '<div class="msec"><h3>' + esc(ui('secProblem')) + '</h3>' + ul(list(p.problems)) + '</div>' +
      '<div class="msec"><h3>' + esc(ui('secRole')) + '</h3>' + ul(list(p.myRole)) + '</div>' +
      '<div class="msec"><h3>' + esc(ui('secSolution')) + '</h3><p>' + esc(t(p.solution)) + '</p>' + steps + '</div>' +
      '<div class="msec"><h3>' + esc(ui('secResults')) + '</h3>' + ul(list(p.results), 'bul result-list') + '</div>' +
      '<div class="msec"><h3>' + esc(ui('secSkills')) + '</h3><ul class="chips">' + p.skills.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div></div>';
  }
  function openProject(id, fromHash) {
    if (!findProject(id)) return;
    var wasOpen = !$('modal').hidden;
    if (!wasOpen) lastFocus = document.activeElement;
    currentProject = id;
    renderModal(id);
    $('modal').hidden = false;
    document.body.classList.add('lock');
    $('modal-panel').scrollTop = 0;
    $('modal-panel').focus();
    if (!fromHash && location.hash !== '#project-' + id) history.replaceState(null, '', '#project-' + id);
  }
  function closeProject(fromHash) {
    if (!currentProject) return;
    currentProject = null;
    $('modal').hidden = true;
    document.body.classList.remove('lock');
    if (!fromHash && /^#project-/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search + '#projects');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function stepProject(d) {
    var i = D.projects.map(function (p) { return p.id; }).indexOf(currentProject);
    var n = (i + d + D.projects.length) % D.projects.length;
    openProject(D.projects[n].id);
  }
  function fromHash() {
    var m = /^#project-(.+)$/.exec(location.hash);
    if (m && findProject(m[1])) openProject(m[1], true); else if (currentProject) closeProject(true);
  }

  /* ---------- Theme ---------- */
  function isDark() {
    var a = document.documentElement.getAttribute('data-theme');
    if (a) return a === 'dark';
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function updateThemeLabel() { $('theme-btn').setAttribute('aria-label', isDark() ? ui('themeToLight') : ui('themeToDark')); }

  /* ---------- Reveal / count / scroll spy ---------- */
  var io;
  function observeReveal() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    if (!io) io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  }
  var counted = false;
  function countUp() {
    var nums = document.querySelectorAll('[data-count]');
    if (reduceMotion || counted) return;
    counted = true;
    nums.forEach(function (el) {
      var end = +el.getAttribute('data-count'), suf = el.getAttribute('data-suffix') || '', t0 = null;
      function step(ts) { if (!t0) t0 = ts; var k = Math.min((ts - t0) / 900, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); }
      el.textContent = '0' + suf; requestAnimationFrame(step);
    });
  }
  function spy() {
    var y = window.scrollY + 120, cur = '';
    NAV.forEach(function (id) { var el = $(id); if (el && el.offsetTop <= y) cur = id; });
    document.querySelectorAll('#nav a').forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-sec') === cur); });
    $('topbar').classList.toggle('scrolled', window.scrollY > 8);
  }

  /* ---------- Events ---------- */
  document.addEventListener('click', function (e) {
    var card = e.target.closest('[data-project]');
    if (card) { openProject(card.getAttribute('data-project')); return; }
    if (e.target.closest('[data-close]')) { closeProject(); return; }
    if (e.target.closest('#nav a')) { $('nav').classList.remove('open'); $('menu-btn').setAttribute('aria-expanded', 'false'); }
  });
  $('modal-prev').addEventListener('click', function () { stepProject(-1); });
  $('modal-next').addEventListener('click', function () { stepProject(1); });
  document.addEventListener('keydown', function (e) {
    if ($('modal').hidden) return;
    if (e.key === 'Escape') closeProject();
    else if (e.key === 'ArrowLeft') stepProject(-1);
    else if (e.key === 'ArrowRight') stepProject(1);
    else if (e.key === 'Tab') {
      var f = $('modal-panel').querySelectorAll('button, a[href]');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === $('modal-panel'))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('hashchange', fromHash);
  window.addEventListener('scroll', spy, { passive: true });

  $('lang-btn').addEventListener('click', function () { lang = lang === 'vi' ? 'en' : 'vi'; store.set('pf-lang', lang); render(); });
  $('theme-btn').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next); store.set('pf-theme', next); updateThemeLabel();
  });
  $('menu-btn').addEventListener('click', function () {
    var open = $('nav').classList.toggle('open'); this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $('print-btn').addEventListener('click', function () { window.print(); });

  $('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('f-name').value.trim(), m = $('f-email').value.trim(), msg = $('f-msg').value.trim(), err = $('form-err');
    if (!n || !m || !msg || !/^\S+@\S+\.\S+$/.test(m)) { err.textContent = ui('required'); err.hidden = false; return; }
    err.hidden = true;
    var ok = $('form-ok'); ok.hidden = true;
    function viaMail() {
      var body = msg + '\n\n— ' + n + ' (' + m + ')';
      location.href = 'mailto:' + D.contact.email + '?subject=' + encodeURIComponent(ui('emailSubject') + ' — ' + n) + '&body=' + encodeURIComponent(body);
    }
    if ($('f-hp').value) { ok.textContent = ui('formSuccess'); ok.hidden = false; return; } // bot: giả vờ thành công
    if (!D.contact.sheetUrl) { viaMail(); return; }
    var btn = $('f-send'); btn.disabled = true; btn.textContent = ui('formSending');
    var data = new URLSearchParams({ name: n, email: m, message: msg });
    fetch(D.contact.sheetUrl, { method: 'POST', mode: 'no-cors', body: data })
      .then(function () { ok.textContent = ui('formSuccess'); ok.hidden = false; $('contact-form').reset(); })
      .catch(function () { err.textContent = ui('formFail'); err.hidden = false; setTimeout(viaMail, 1200); })
      .then(function () { btn.disabled = false; btn.textContent = ui('formSend'); });
  });

  render();
  fromHash();
})();
