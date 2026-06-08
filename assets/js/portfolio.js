/* ============================================================
   PORTAFOLIO · MELANIE ALBÁN — lógica e interacciones
   ============================================================ */
(function () {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- DATOS: SKILLS ---------- */
  const SKILLS = [
    { group: 'frontend', items: [
      { name: 'HTML5',      icon: 'devicon-html5-plain colored',      lvl: 'Intermedio' },
      { name: 'CSS3',       icon: 'devicon-css3-plain colored',       lvl: 'Intermedio' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', lvl: 'Intermedio' },
      { name: 'Angular',    icon: 'devicon-angularjs-plain colored',  lvl: 'Intermedio' },
      { name: 'Vue',        icon: 'devicon-vuejs-plain colored',      lvl: 'Intermedio' },
    ]},
    { group: 'backend', items: [
      { name: 'Java',        icon: 'devicon-java-plain colored',   lvl: 'Avanzado' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored', lvl: 'Intermedio' },
      { name: 'Python',      icon: 'devicon-python-plain colored', lvl: 'Básico' },
    ]},
    { group: 'bases de datos', items: [
      { name: 'MySQL',      icon: 'devicon-mysql-plain colored',             lvl: 'Intermedio' },
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored',lvl: 'Intermedio' },
      { name: 'Oracle',     icon: 'devicon-oracle-original colored',         lvl: 'Básico' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored',        lvl: 'Básico' },
    ]},
    { group: 'herramientas', items: [
      { name: 'Git',    icon: 'devicon-git-plain colored',   lvl: 'Intermedio' },
      { name: 'GitHub', icon: 'ph ph-github-logo',           lvl: 'Intermedio' },
      { name: 'Docker', icon: 'devicon-docker-plain colored',lvl: 'Básico' },
      { name: 'CVS',    text: 'CVS',                         lvl: 'Básico' },
    ]},
  ];

  /* ---------- DATOS: PROYECTOS (repos reales de GitHub) ---------- */
  const PROJECTS = [
    { title: 'Sistema de Seguros · API REST', path: 'melanieAlban/insurance-back',
      desc: 'Backend con Spring Boot para la gestión de seguros: arquitectura por capas, lógica de negocio, documentación de endpoints con Swagger y despliegue con Docker.',
      tags: ['Java', 'Spring Boot', 'Docker'], badge: { t: 'backend', k: '' },
      demo: null, repo: 'https://github.com/melanieAlban/insurance-back' },

    { title: 'Gestión Financiera · Frontend', path: 'melanieAlban/finance-management-front',
      desc: 'Aplicación web construida con Angular 19 para administrar finanzas: interfaz responsiva, componentes reutilizables y consumo de una API REST.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'], badge: { t: 'frontend', k: '' },
      demo: null, repo: 'https://github.com/melanieAlban/finance-management-front' },

    { title: 'Hatun Bus · Reservas', path: 'melanieAlban/hatunbus-front-web',
      desc: 'Frontend web para la gestión y reserva de boletos de transporte en bus: rutas, horarios, selección de asientos y compra de pasajes. Desarrollado en equipo.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'], badge: { t: 'en equipo', k: '' },
      demo: null, repo: 'https://github.com/melanieAlban/hatunbus-front-web' },

    { title: 'Reservas de Aulas', path: 'FreddyA12/reservas-aulas-front',
      desc: 'Frontend del sistema de reserva de aulas implementado para la universidad: consulta de disponibilidad de espacios, reservas y gestión de horarios académicos.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'], badge: { t: 'en equipo', k: '' }, collab: 'FreddyA12',
      demo: null, repo: 'https://github.com/FreddyA12/reservas-aulas-front' },

    { title: 'Facturación · Junta de Agua', path: 'junta-agua-uta/ja-facturacion-front',
      desc: 'Proyecto de vinculación con la sociedad: frontend de un sistema de facturación para una junta administradora de agua potable, digitalizando el cobro y la emisión de comprobantes.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'], badge: { t: 'vinculación', k: 'vinc' }, collab: 'junta-agua-uta',
      demo: null, repo: 'https://github.com/junta-agua-uta/ja-facturacion-front' },

    { title: 'Sistema · Centro de Salud', path: 'rafaelsoriano04/gestor-centro-de-salud',
      desc: 'Plataforma para gestionar pacientes, usuarios, citas y consultas médicas, optimizando los procesos administrativos de un centro de salud.',
      tags: ['Java', 'Spring Boot', 'Oracle'], badge: { t: 'en equipo', k: '' }, collab: 'rafaelsoriano04',
      demo: null, repo: 'https://github.com/rafaelsoriano04/gestor-centro-de-salud' },

    { title: 'TaskMaster · Gestión de Tareas', path: 'rafaelsoriano04/gestor-tareas',
      desc: 'Tablero estilo Kanban para crear, asignar y seguir tareas en tiempo real, con gestión de usuarios y estados (asignado → en curso → revisión → finalizado).',
      tags: ['Spring Boot', 'JavaScript', 'MySQL'], badge: { t: 'en equipo', k: '' }, collab: 'rafaelsoriano04',
      demo: null, repo: 'https://github.com/rafaelsoriano04/gestor-tareas' },

    { title: 'Hotel Agave · Web', path: 'web · netlify',
      desc: 'Sitio web responsivo para un hotel: navegación fluida, presentación de habitaciones y servicios, y formulario de reservas.',
      tags: ['HTML', 'CSS', 'JavaScript'], badge: { t: 'en vivo', k: 'live' },
      demo: 'https://hotel-agave.netlify.app/', repo: null },

    { title: 'MathMaster Challenge', path: 'melanieAlban/mathmaster',
      desc: 'Juego interactivo para resolver ecuaciones matemáticas básicas de forma divertida y agudizar las habilidades numéricas.',
      tags: ['JavaScript', 'HTML', 'CSS'], badge: { t: 'juego', k: '' }, demo: null, repo: null },

    { title: 'Kardex · Inventario', path: 'melanieAlban/kardex',
      desc: 'Sistema de control de inventario tipo Kardex: gestión de productos, stock y búsqueda por código para la toma de decisiones de almacén.',
      tags: ['Java', 'SQL Server'], badge: { t: 'privado', k: 'priv' }, demo: null, repo: null },

    { title: 'Portafolio Personal', path: 'melanieAlban/melanieAlban.github.io',
      desc: 'Este portafolio: diseño dev/terminal, cursor personalizado, animaciones, temas claro/oscuro y panel de estilos. HTML, CSS y JavaScript puro.',
      tags: ['HTML', 'CSS', 'JavaScript'], badge: { t: 'en vivo', k: 'live' },
      demo: 'https://melaniealban.github.io/', repo: 'https://github.com/melanieAlban/melanieAlban.github.io' },
  ];

  /* ---------- RENDER: SKILLS ---------- */
  function renderSkills() {
    const wrap = $('#skills-groups');
    if (!wrap) return;
    wrap.innerHTML = SKILLS.map(g => `
      <div class="skill-group reveal">
        <div class="skill-group__head">// <b>${g.group}</b></div>
        <div class="skill-cards">
          ${g.items.map(s => `
            <div class="skill-card" tabindex="0">
              ${s.text ? `<span class="skill-card__fallback">${s.text}</span>`
                       : `<i class="${s.icon}"></i>`}
              <span class="skill-card__name">${s.name}</span>
              <span class="skill-card__lvl" data-lvl="${s.lvl}">${s.lvl}</span>
            </div>`).join('')}
        </div>
      </div>`).join('');
  }

  /* ---------- RENDER: PROYECTOS ---------- */
  const TECH_ICON = {
    'Java': 'devicon-java-plain colored', 'Spring Boot': 'devicon-spring-plain colored',
    'Python': 'devicon-python-plain colored', 'Vue': 'devicon-vuejs-plain colored',
    'Angular': 'devicon-angularjs-plain colored', 'JavaScript': 'devicon-javascript-plain colored',
    'TypeScript': 'devicon-typescript-plain colored', 'Docker': 'devicon-docker-plain colored',
    'HTML': 'devicon-html5-plain colored', 'CSS': 'devicon-css3-plain colored',
    'MySQL': 'devicon-mysql-plain colored', 'Oracle': 'devicon-oracle-original colored',
    'SQL Server': 'devicon-microsoftsqlserver-plain colored', 'PostgreSQL': 'devicon-postgresql-plain colored',
  };

  function renderProjects() {
    const grid = $('#proj-grid');
    if (!grid) return;
    const cards = PROJECTS.map((p, i) => {
      const num = String(i + 1).padStart(2, '0');
      const repoPath = p.path.includes('/')
        ? `<b>${p.path.split('/').pop()}</b>`
        : `<b>${p.path}</b>`;
      const badge = p.badge
        ? `<span class="proj-card__badge ${p.badge.k ? 'proj-card__badge--' + p.badge.k : ''}">${p.badge.t}</span>` : '';
      const demo = p.demo
        ? `<a href="${p.demo}" ${p.demo.startsWith('#') ? '' : 'target="_blank" rel="noopener"'} class="proj-link proj-link--demo magnetic"><i class="ph ph-arrow-up-right"></i> Demo</a>`
        : '';
      const repo = p.repo
        ? `<a href="${p.repo}" target="_blank" rel="noopener" class="proj-link proj-link--repo magnetic"><i class="ph ph-github-logo"></i> Código</a>`
        : (!p.demo ? `<span class="proj-link proj-link--off"><i class="ph ph-lock-simple"></i> Privado</span>` : '');
      const collab = p.collab
        ? `<span class="proj-card__collab"><i class="ph ph-git-fork"></i> en equipo con <a href="https://github.com/${p.collab}" target="_blank" rel="noopener">@${p.collab}</a></span>` : '';
      const stack = p.tags.map(t => {
        const ic = TECH_ICON[t];
        return `<span class="stack-chip">${ic ? `<i class="${ic}"></i>` : '<span class="stack-chip__dot"></span>'}${t}</span>`;
      }).join('');
      return `
      <article class="proj-card reveal">
        <span class="proj-card__num">${num}</span>
        <div class="proj-card__head">
          <span class="proj-card__folder"><i class="ph ph-folder-notch-open"></i></span>
          <span class="proj-card__repo">~/${repoPath}</span>
          ${badge}
        </div>
        <h3 class="proj-card__title">${p.title}</h3>
        <p class="proj-card__desc">${p.desc}</p>
        ${collab}
        <span class="proj-card__stacklbl">// stack</span>
        <div class="proj-card__stack">${stack}</div>
        <div class="proj-card__links">${demo}${repo}</div>
      </article>`;
    }).join('');

    const adder = `
      <a href="#contact" class="proj-add reveal magnetic">
        <i class="ph ph-plus-circle"></i>
        <span>Más en camino</span>
        <small>Nuevos proyectos en desarrollo — ¿colaboramos?</small>
      </a>`;
    grid.innerHTML = cards + adder;
  }

  /* ---------- TYPED: ROL (hero) ---------- */
  function typedRole() {
    const el = $('#typed-role');
    if (!el) return;
    const words = ['Full Stack Developer', 'Ingeniera de Software', 'Java · Spring · Angular', 'Vue & SQL'];
    if (reduce) { el.textContent = words[0]; return; }
    let w = 0, c = 0, del = false;
    (function tick() {
      const word = words[w];
      el.textContent = del ? word.slice(0, --c) : word.slice(0, ++c);
      let t = del ? 45 : 85;
      if (!del && c === word.length) { t = 1600; del = true; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; t = 300; }
      setTimeout(tick, t);
    })();
  }

  /* ---------- TERMINAL ---------- */
  function typeTerminal() {
    const body = $('#terminal-body');
    if (!body) return;
    const PR = '<span class="t-user">melanie@portfolio</span>:<span class="t-path">~</span>$ ';
    const seq = [
      { p: true,  cls: 't-cmd', text: 'whoami' },
      { p: false, cls: 't-out', text: 'Melanie Albán — Full Stack Developer' },
      { p: true,  cls: 't-cmd', text: 'cat objetivo.txt' },
      { p: false, cls: 't-out', text: 'Desarrollo · Ciberseguridad · Análisis de datos' },
      { p: true,  cls: 't-cmd', text: 'ls ./skills' },
      { p: false, cls: 't-key', text: 'java  spring  angular  vue  sql  git' },
      { p: true,  cls: 't-cmd', text: 'status --now' },
      { p: false, cls: 't-out', text: '● Pasantía @ EEASA — disponible para proyectos' },
    ];
    if (reduce) {
      body.innerHTML = seq.map(s => `<div class="t-line">${s.p ? PR : '<span class="t-out">&gt; </span>'}<span class="${s.cls}">${s.text}</span></div>`).join('');
      return;
    }
    let i = 0;
    function nextLine() {
      if (i >= seq.length) { setTimeout(() => { i = 0; body.innerHTML = ''; nextLine(); }, 6000); return; }
      const s = seq[i];
      const line = document.createElement('div');
      line.className = 't-line';
      line.innerHTML = s.p ? PR : '<span class="t-out">&gt; </span>';
      const span = document.createElement('span');
      span.className = s.cls;
      const caret = document.createElement('span');
      caret.className = 't-caret';
      line.appendChild(span); line.appendChild(caret);
      body.appendChild(line);
      let c = 0;
      const speed = s.p ? 55 : 22;
      (function typ() {
        span.textContent = s.text.slice(0, ++c);
        if (c < s.text.length) setTimeout(typ, speed);
        else { caret.remove(); i++; setTimeout(nextLine, s.p ? 260 : 600); }
      })();
    }
    nextLine();
  }

  /* ---------- CONTADORES ---------- */
  function countUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = +el.dataset.count, suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const dur = 1400, t0 = performance.now();
    (function step(now) {
      const k = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
    setTimeout(() => { el.textContent = target + suffix; }, dur + 250); // settle (rAF puede congelarse)
  }

  /* ---------- SCROLL REVEAL ---------- */
  function reveals() {
    const els = $$('.reveal');
    els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i % 6, 5) * 0.05) + 's'; });
    const show = (el) => {
      if (el.dataset.shown) return;
      el.dataset.shown = '1';
      el.classList.add('in');
      el.style.transform = 'none';
      // "Settle": fija el estado final sin transición. setTimeout corre aunque
      // el documento no se esté pintando, garantizando la posición correcta.
      setTimeout(() => { el.style.transition = 'none'; el.style.transform = 'none'; }, 720);
      $$('.stat__num[data-count]', el).forEach(countUp);
      if (el.matches('.stat')) { const n = $('.stat__num', el); if (n) countUp(n); }
    };
    if (!('IntersectionObserver' in window)) { els.forEach(show); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    // Fallback robusto: revela lo que ya está en pantalla aunque el observer
    // no dispare (p. ej. iframe fuera de viewport en herramientas de captura).
    const fold = () => els.forEach(el => { const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.95 && r.bottom > 0) { show(el); io.unobserve(el); } });
    fold();
    setTimeout(fold, 400);
    addEventListener('scroll', fold, { passive: true });
  }

  /* ---------- NAV: sticky, hide, active ---------- */
  function navBehavior() {
    const header = $('#header');
    let last = 0;
    const sections = $$('main section[id]');
    const links = $$('.nav__link');
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-stuck', y > 20);
      if (y > last && y > 400) header.classList.add('is-hidden');
      else header.classList.remove('is-hidden');
      last = y;
      $('#to-top').classList.toggle('is-shown', y > 600);
      // active
      let cur = 'home';
      sections.forEach(s => { if (y >= s.offsetTop - 160) cur = s.id; });
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + cur));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- BURGER ---------- */
  function burger() {
    const b = $('#nav-burger'), list = $('#nav-list');
    if (!b) return;
    b.addEventListener('click', () => { b.classList.toggle('is-open'); list.classList.toggle('is-open'); });
    $$('.nav__link', list).forEach(l => l.addEventListener('click', () => { b.classList.remove('is-open'); list.classList.remove('is-open'); }));
  }

  /* ---------- TEMA ---------- */
  function theme() {
    const root = document.documentElement, btn = $('#theme-toggle');
    const saved = localStorage.getItem('ma-theme');
    if (saved) root.setAttribute('data-theme', saved);
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('ma-theme', next);
      syncStyler();
    });
  }

  /* ---------- CURSOR ---------- */
  function cursor() {
    if (matchMedia('(pointer:coarse)').matches) return;
    const dot = $('.cursor-dot'), ring = $('.cursor-ring');
    document.body.classList.add('has-cursor');
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
    addEventListener('mousedown', () => ring.classList.add('is-down'));
    addEventListener('mouseup', () => ring.classList.remove('is-down'));
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hov = 'a,button,input,textarea,.skill-card,.proj-card,.magnetic,.sw';
    document.addEventListener('mouseover', e => { if (e.target.closest(hov)) ring.classList.add('is-hover'); });
    document.addEventListener('mouseout', e => { if (e.target.closest(hov)) ring.classList.remove('is-hover'); });
  }

  /* ---------- MAGNETIC ---------- */
  function magnetic() {
    if (matchMedia('(pointer:coarse)').matches) return;
    document.addEventListener('mousemove', e => {
      const m = e.target.closest('.magnetic');
      $$('.magnetic').forEach(el => { if (el !== m) el.style.transform = ''; });
      if (m) {
        const r = m.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        m.style.transform = `translate(${dx * 0.22}px,${dy * 0.28}px)`;
      }
    });
    document.addEventListener('mouseleave', () => $$('.magnetic').forEach(el => el.style.transform = ''));
  }

  /* ---------- FORMULARIO ---------- */
  function contactForm() {
    const form = $('#contact-form'), note = $('#form-note');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = form.checkValidity();
      note.hidden = false;
      if (ok) {
        note.textContent = '✓ ¡Mensaje listo! Conecta tu servicio de correo para enviarlo de verdad.';
        note.style.cssText = '';
        form.reset();
      } else {
        note.textContent = '⚠ Completa todos los campos correctamente.';
        note.style.background = 'rgba(255,95,87,.12)';
        note.style.color = '#ff5f57';
        note.style.borderColor = 'rgba(255,95,87,.3)';
        form.reportValidity();
      }
    });
  }

  /* ---------- PANEL DE ESTILOS (Tweaks vanilla + host protocol) ---------- */
  function styler() {
    const root = document.documentElement;
    const saved = JSON.parse(localStorage.getItem('ma-style') || '{}');
    if (saved.accent) root.setAttribute('data-accent', saved.accent);
    if (saved.bg) root.setAttribute('data-bg', saved.bg);

    const panel = document.createElement('div');
    panel.className = 'styler';
    panel.innerHTML = `
      <div class="styler__hd"><b>Estilos</b><button class="styler__x" aria-label="Cerrar">✕</button></div>
      <div class="styler__body">
        <div class="styler__row">
          <label>Color de acento</label>
          <div class="styler__swatches" id="st-accent">
            <button class="sw" data-accent="violet"></button>
            <button class="sw" data-accent="cyan"></button>
            <button class="sw" data-accent="magenta"></button>
            <button class="sw" data-accent="lime"></button>
          </div>
        </div>
        <div class="styler__row">
          <label>Tema</label>
          <div class="seg" id="st-theme">
            <button data-theme="dark">Oscuro</button>
            <button data-theme="light">Claro</button>
          </div>
        </div>
        <div class="styler__row">
          <label>Fondo</label>
          <div class="seg" id="st-bg">
            <button data-bg="grid">Grid</button>
            <button data-bg="plain">Liso</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(panel);

    const persist = () => localStorage.setItem('ma-style', JSON.stringify({
      accent: root.getAttribute('data-accent'),
      bg: root.getAttribute('data-bg'),
    }));

    window.syncStyler = function () {
      $$('#st-accent .sw').forEach(b => b.classList.toggle('is-on', b.dataset.accent === root.getAttribute('data-accent')));
      $$('#st-theme button').forEach(b => b.classList.toggle('is-on', b.dataset.theme === root.getAttribute('data-theme')));
      $$('#st-bg button').forEach(b => b.classList.toggle('is-on', b.dataset.bg === root.getAttribute('data-bg')));
    };

    $('#st-accent').addEventListener('click', e => { const b = e.target.closest('.sw'); if (!b) return; root.setAttribute('data-accent', b.dataset.accent); persist(); syncStyler(); });
    $('#st-theme').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; root.setAttribute('data-theme', b.dataset.theme); localStorage.setItem('ma-theme', b.dataset.theme); syncStyler(); });
    $('#st-bg').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; root.setAttribute('data-bg', b.dataset.bg); persist(); syncStyler(); });
    panel.querySelector('.styler__x').addEventListener('click', () => { panel.classList.remove('is-open'); try { parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {} });

    // Host protocol (toolbar "Tweaks")
    addEventListener('message', e => {
      const t = e && e.data && e.data.type;
      if (t === '__activate_edit_mode') { panel.classList.add('is-open'); syncStyler(); }
      else if (t === '__deactivate_edit_mode') panel.classList.remove('is-open');
    });
    try { parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
    syncStyler();
  }

  /* ---------- TOAST ---------- */
  function toast(msg) {
    let t = $('#ma-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'ma-toast';
      t.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:var(--bg-3);color:var(--text);border:1px solid var(--line-2);border-radius:12px;padding:13px 20px;font-family:var(--font-mono);font-size:.84rem;z-index:9500;box-shadow:var(--shadow);opacity:0;transition:opacity .3s,transform .3s;max-width:88vw;text-align:center';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(t._h);
    t._h = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(20px)'; }, 3600);
  }

  /* ---------- BOTÓN CV (descarga elegante si falta el PDF) ---------- */
  function cvGuard() {
    $$('.nav__cv').forEach(cv => {
      cv.addEventListener('click', async (e) => {
        const href = cv.getAttribute('href');
        if (!/\.pdf$/i.test(href)) return; // el CV en HTML se abre normal
        try { const r = await fetch(href, { method: 'HEAD' }); if (!r.ok) throw 0; }
        catch (_) { e.preventDefault(); toast('Sube tu CV a ' + href + ' para activar la descarga'); }
      });
    });
  }

  /* ---------- INIT ---------- */
  function init() {
    renderSkills();
    renderProjects();
    typedRole();
    typeTerminal();
    reveals();
    navBehavior();
    burger();
    theme();
    cursor();
    magnetic();
    contactForm();
    cvGuard();
    styler();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
