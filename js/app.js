/* app.js - perusalustus navigationille, lomakekäsittelijöille, hakudebouncelle ja admin-demoille */

const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));
const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

function initApp() {
    initNav();
    markActiveLink();
    initGlobalFormHandlers();
    initSearchDebounced();
    initAdminActions();
}

/* NAV */
function initNav() {
    const btn = qs('.nav-toggle');
    const navList = qs('.nav-list');
    if (!btn || !navList) return;

    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        navList.classList.toggle('show');
    });

    // sulje nav klikkauksella sivulle
    document.addEventListener('click', (e) => {
        if (!navList.classList.contains('show')) return;
        if (e.target === btn || navList.contains(e.target)) return;
        navList.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
    });

    // Esc sulkee navin
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('show')) {
            navList.classList.remove('show');
            btn.setAttribute('aria-expanded', 'false');
            btn.focus();
        }
    });
}

/* Aseta aktiivinen linkki URL:in perusteella */
function markActiveLink() {
    const links = qsa('.nav-list a');
    if (!links.length) return;
    const path = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
        const href = a.getAttribute('href') || '';
        if (href === path || (href === 'index.html' && path === '')) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        } else {
            a.classList.remove('active');
            a.removeAttribute('aria-current');
        }
    });
}

/* Lomakekäsittely: estä oikea lähetys demoympäristössä ja näytä viesti */
function initGlobalFormHandlers() {
    qsa('form').forEach(form => {
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            // client-side validointi
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                // löydä ensimmäinen virheellinen kenttä ja fokusoi
                const firstInvalid = form.querySelector(':invalid');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            // estä kaksoislähetys ja palauta demoilmoitus
            const submitBtn = form.querySelector('[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            // Simuloitu lähetys — korvaa fetch-API-kutsulla backendiin
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());
            console.log('Lähetetään (demo):', payload);

            const successMsg = document.createElement('div');
            successMsg.className = 'card';
            successMsg.style.marginTop = '12px';
            successMsg.textContent = 'Lomake tallennettu (demo). Tarkista konsoli.';
            form.parentElement.insertBefore(successMsg, form.nextSibling);

            // vapauta nappi muutaman sekunnin jälkeen
            setTimeout(() => {
                if (submitBtn) submitBtn.disabled = false;
            }, 1200);
        });
    });
}

/* Debounce util */
function debounce(fn, wait = 300) {
    let t;
    return function (...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

/* Haku: debounced ja simuloitu render */
function initSearchDebounced() {
    const input = qs('#searchInput');
    if (!input) return;
    const doSearch = async (term) => {
        const out = qs('#searchResults');
        if (!term || term.length < 2) {
            out.innerHTML = '<p class="muted">Kirjoita vähintään 2 merkkiä nähdäksesi hakutulokset.</p>';
            return;
        }
        // Demo: simuloidaan tuloksia
        const fake = [
            { title: `${term} Cup — U12 — Uusimaa` },
            { title: `${term} Festival — U14 — Pirkanmaa` },
        ];
        out.innerHTML = fake.map(r => `<div class="result-card">${r.title}</div>`).join('');
    };

    input.addEventListener('input', debounce(ev => doSearch(ev.target.value.trim()), 300));
}

/* Admin-demo: nappien toiminnallisuus */
function initAdminActions() {
    const adminLog = qs('#adminLog');
    if (!adminLog) return;
    qsa('.admin-actions [data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const time = new Date().toLocaleTimeString();
            const row = document.createElement('div');
            row.className = 'result-card';
            row.textContent = `${time} — Suoritettiin: ${action}`;
            adminLog.prepend(row);
        });
    });
}

/* Käynnistys */
document.addEventListener('DOMContentLoaded', initApp);

/* test-export (node/tästaukseen) */
if (typeof module !== 'undefined') {
    module.exports = { initApp, initNav, markActiveLink };
}
