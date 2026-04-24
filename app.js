// ─────────────────────────────────────────────────────────────
//  WEB.OPS — Rexburg CRM  |  app.js
// ─────────────────────────────────────────────────────────────

// ── Constants ─────────────────────────────────────────────────

const STATUSES = [
  'Not Contacted',
  'Contacted',
  'Meeting Set',
  'Proposal Sent',
  'In Progress',
  'Completed',
  'Passed'
];

const PAGES = [
  'index', 'menu', 'about', 'contact', 'services',
  'gallery', 'booking', 'blog', 'portfolio', 'FAQ'
];

const STACKS    = ['HTML', 'React', 'Next.js'];
const DELIVERY  = ['Design', 'Build', 'Review', 'Delivered'];
const PRIORITIES = ['HIGH', 'MEDIUM', 'LOW'];
const PRIORITY_SORT_ORDER = { HIGH: 0, MEDIUM: 1, LOW: 2 };
const PRICE_LIMIT = 10000;


// ── Lead data ──────────────────────────────────────────────────

const leads = [
  {
    id: 1,
    name: 'Littlefield Appliance Repair',
    url: 'littlefieldappliancerepair.com',
    phone: '(208) 528-9555',
    score: 18,
    lo: 1200, hi: 1800,
    priority: 'HIGH',
    issues: [
      'No mobile optimization',
      'Outdated design (pre-2018)',
      'Missing contact form',
      'No Google Business integration',
      'Slow load times'
    ],
    pitch: "Your competitors are booking jobs online while customers bounce off your site. A clean, fast site with online scheduling could double your inbound leads.",
    scope: [
      'Responsive landing page',
      'Service list with pricing',
      'Online booking form',
      'Google Maps embed',
      'Photo gallery',
      'Contact + call CTA'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 2,
    name: 'Gringos Restaurant & Bar',
    url: 'gringos-rexburg.square.site',
    phone: '(208) 356-9400',
    score: 12,
    lo: 1500, hi: 2200,
    priority: 'HIGH',
    issues: [
      'Square.site = no custom domain',
      'No menu SEO',
      'No reservation system',
      'Generic template, zero brand feel',
      'Not indexed on Google'
    ],
    pitch: "You're running a real restaurant off a Square freebie. Let's build something that shows your vibe and gets you on page one for 'Mexican food Rexburg.'",
    scope: [
      'Full menu page with photos',
      'Online reservations',
      'Brand-matched design',
      'Custom domain setup',
      'Instagram feed embed',
      'Hours + events section'
    ],
    status: 'Not Contacted',
    notes: 'Preview site already built.',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 3,
    name: 'Rexburg Plumbing & Heating',
    url: '',
    phone: '(208) 356-8770',
    score: 0,
    lo: 900, hi: 1400,
    priority: 'HIGH',
    issues: [
      'No web presence at all',
      'Zero Google discoverability',
      'Missing from online directories',
      'Competitors ranking for local searches',
      'No way for customers to request quotes'
    ],
    pitch: "If someone Googles 'plumber Rexburg' right now, you don't exist. One solid landing page with a quote form puts you on the map overnight.",
    scope: [
      'Service landing page',
      'Quote request form',
      'Google Business setup',
      'Emergency contact banner',
      'Trust badges / license info',
      'SEO meta setup'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 4,
    name: 'Hunter Repair',
    url: '',
    phone: '(208) 360-1178',
    score: 0,
    lo: 1000, hi: 1600,
    priority: 'HIGH',
    issues: [
      'No website',
      'No online presence',
      'Phone-only business',
      'Missing all local SEO',
      'No reviews funnel'
    ],
    pitch: "Every job you get is word-of-mouth — great. A site with reviews and a clear services list turns that word-of-mouth into a 24/7 sales machine.",
    scope: [
      'Services overview page',
      'Customer testimonials section',
      'Click-to-call mobile button',
      'Google Reviews integration',
      'Contact + quote form',
      'Basic SEO'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 5,
    name: 'Artesian Sprinklers & Landscaping',
    url: '',
    phone: 'Directory only',
    score: 0,
    lo: 1200, hi: 1800,
    priority: 'HIGH',
    issues: [
      'Directory listing only',
      'No branded site',
      'No project photo showcase',
      'No seasonal service CTAs',
      'Zero lead capture'
    ],
    pitch: "Spring is your money season. A site with a before/after gallery and a 'Get a free estimate' form could fill your calendar months out.",
    scope: [
      'Project photo gallery',
      'Seasonal service pages',
      'Free estimate form',
      'Service area map',
      'Before/after comparisons',
      'Newsletter opt-in'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 6,
    name: 'Rockie Mountain STARS Dance',
    url: '',
    phone: 'Directory only',
    score: 0,
    lo: 1000, hi: 1600,
    priority: 'MEDIUM',
    issues: [
      'No website',
      'Parents cannot find class schedules online',
      'No registration system',
      'Missing from Google search',
      'No social proof visible'
    ],
    pitch: "Dance parents search online for class times and registration. Without a site you are losing students to studios that have one.",
    scope: [
      'Class schedule page',
      'Online registration form',
      'Instructor bios',
      'Performance photos',
      'Parent FAQ',
      'Contact + location'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 7,
    name: 'Independence Fence Idaho',
    url: 'indfenceidaho.com',
    phone: '',
    score: 35,
    lo: 1500, hi: 2500,
    priority: 'MEDIUM',
    issues: [
      'No quote request form',
      'Gallery has broken images',
      'Not mobile-friendly',
      'Missing service area pages',
      'Weak on-page SEO'
    ],
    pitch: "You have a decent foundation but customers leave because they cannot get a quote online. Fix the basics and you will convert 3x more visitors.",
    scope: [
      'Mobile redesign',
      'Online quote request',
      'Project photo gallery fix',
      'Service area pages',
      'Before/after showcase',
      'SEO metadata'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  },
  {
    id: 8,
    name: 'Western Fence Inc.',
    url: 'westernfence.net',
    phone: '(208) 356-3362',
    score: 42,
    lo: 1800, hi: 2800,
    priority: 'MEDIUM',
    issues: [
      'Dated design (2015 era)',
      'No online quoting',
      'Slow page speed (4.2s load)',
      'No Google Analytics',
      'Missing structured data for local SEO'
    ],
    pitch: "Your site works but it is costing you leads. Modernizing the design and adding a quote tool alone could increase conversions by 40%.",
    scope: [
      'Full visual redesign',
      'Speed optimization',
      'Online quote calculator',
      'Analytics setup',
      'Local SEO structured data',
      'Testimonials page'
    ],
    status: 'Not Contacted',
    notes: '',
    pages: {},
    stack: '',
    delivery: '',
    invoice: '',
    paid: false
  }
];


// ── State ──────────────────────────────────────────────────────

let selectedId = null;
let sortMode = 'default';
const siteEditState = {};
const siteDraftState = {};
const listDraftState = { issues: {}, scope: {} };
const listEditIndexState = { issues: {}, scope: {} };
const leadOriginalOrder = new Map(leads.map((lead, index) => [lead.id, index]));


// ── Score helpers ──────────────────────────────────────────────

function scoreColor(s) {
  if (s === 0) return '#b65d4a';
  if (s < 30)  return '#b67a3a';
  if (s < 50)  return '#a5894d';
  if (s < 70)  return '#738255';
  return '#4f7f5f';
}

function scoreGradient(s) {
  if (s === 0) return 'linear-gradient(90deg, #9f4c3d, #b65d4a)';
  if (s < 30)  return 'linear-gradient(90deg, #9d6432, #b67a3a)';
  if (s < 50)  return 'linear-gradient(90deg, #8d7240, #a5894d)';
  if (s < 70)  return 'linear-gradient(90deg, #66754b, #738255)';
  return 'linear-gradient(90deg, #406650, #4f7f5f)';
}

function scoreGrade(s) {
  if (s < 20) return { g: 'F', c: '#b65d4a' };
  if (s < 40) return { g: 'D', c: '#b67a3a' };
  if (s < 60) return { g: 'C', c: '#a5894d' };
  if (s < 80) return { g: 'B', c: '#738255' };
  return { g: 'A', c: '#4f7f5f' };
}

function statusClass(status) {
  const map = {
    'Not Contacted': 's-not',
    'Contacted':     's-con',
    'Meeting Set':   's-meet',
    'Proposal Sent': 's-prop',
    'In Progress':   's-prog',
    'Completed':     's-comp',
    'Passed':        's-pass'
  };
  return map[status] || 's-not';
}

function priorityColor(priority) {
  if (priority === 'HIGH') return 'var(--red)';
  if (priority === 'MEDIUM') return 'var(--orange)';
  return 'var(--blue)';
}

function midPrice(lead) {
  return Math.round((lead.lo + lead.hi) / 2);
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function formatMoney(value) {
  return '$' + Number(value).toLocaleString();
}

function formatPriceRange(lead) {
  return `${formatMoney(lead.lo)} - ${formatMoney(lead.hi)}`;
}

function normalizePriceValue(value) {
  const digits = String(value).replace(/[^0-9]/g, '');
  const amount = digits ? parseInt(digits, 10) : 0;
  return Math.max(0, Math.min(PRICE_LIMIT, amount));
}

function normalizeScoreValue(value) {
  const digits = String(value).replace(/[^0-9]/g, '');
  const score = digits ? parseInt(digits, 10) : 0;
  return Math.max(0, Math.min(100, score));
}

function normalizeExternalUrl(value) {
  const trimmed = String(value ?? '').trim();
  if (!trimmed) return '';

  const withProtocol = /^[a-z]+:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (!['http:', 'https:'].includes(parsed.protocol)) return '';
    return parsed.href;
  } catch {
    return '';
  }
}

function siteDisplayText(value) {
  const href = normalizeExternalUrl(value);
  const raw = String(value ?? '').trim();
  if (!href) return raw || 'No website';

  try {
    const parsed = new URL(href);
    const host = parsed.hostname.replace(/^www\./, '');
    const path = parsed.pathname && parsed.pathname !== '/'
      ? parsed.pathname.replace(/\/$/, '')
      : '';
    return `${host}${path}`;
  } catch {
    return raw || 'No website';
  }
}

function isSiteEditing(lead) {
  return siteEditState[lead.id] ?? !lead.url;
}

function getSiteDraft(lead) {
  if (!(lead.id in siteDraftState)) siteDraftState[lead.id] = lead.url || '';
  return siteDraftState[lead.id];
}

function getListDraft(id, field) {
  return listDraftState[field]?.[id] ?? '';
}

function getListEditIndex(id, field) {
  return listEditIndexState[field]?.[id] ?? -1;
}

function syncSiteEditor(id) {
  const lead = leads.find(l => l.id === id);
  const draft = siteDraftState[id] ?? lead?.url ?? '';
  const hint = document.querySelector(`.site-status[data-lead-id="${id}"]`);
  const saveBtn = document.querySelector(`.site-save-btn[data-lead-id="${id}"]`);
  const href = normalizeExternalUrl(draft);
  const canSave = !draft.trim() || Boolean(href);

  if (hint) {
    hint.textContent = !draft.trim()
      ? 'Save empty to clear the site link.'
      : href
        ? 'Will open in a new tab.'
        : 'Enter a valid web address.';
  }

  if (saveBtn) saveBtn.disabled = !canSave;
}

function syncPriceControls(id) {
  const lead = leads.find(l => l.id === id);
  const editor = document.querySelector(`.price-editor[data-lead-id="${id}"]`);
  if (!lead || !editor) return;

  editor.querySelectorAll('[data-price-bound="lo"]').forEach(el => {
    if (el.value !== String(lead.lo)) el.value = lead.lo;
  });

  editor.querySelectorAll('[data-price-bound="hi"]').forEach(el => {
    if (el.value !== String(lead.hi)) el.value = lead.hi;
  });

  const summary = editor.querySelector('.price-summary');
  if (summary) summary.textContent = formatPriceRange(lead);

  document.querySelectorAll(`[data-price-mid="${id}"]`).forEach(el => {
    el.textContent = formatMoney(midPrice(lead));
  });

  document.querySelectorAll(`[data-price-range="${id}"]`).forEach(el => {
    el.textContent = formatPriceRange(lead);
  });
}

function syncScoreControls(id) {
  const lead = leads.find(l => l.id === id);
  const input = document.querySelector(`.score-input[data-lead-id="${id}"]`);
  const meta = document.querySelector(`.score-meta[data-lead-id="${id}"]`);
  if (!lead) return;

  if (input && input.value !== String(lead.score)) input.value = lead.score;

  if (meta) {
    const grade = scoreGrade(lead.score);
    meta.textContent = `GRADE ${grade.g} · ${lead.score}/100`;
    meta.style.color = scoreColor(lead.score);
  }

  const grade = scoreGrade(lead.score);
  const heroScore = document.querySelector(`[data-hero-score="${id}"]`);
  const heroScoreNote = document.querySelector(`[data-hero-score-note="${id}"]`);
  const heroScoreBar = document.querySelector(`[data-hero-score-bar="${id}"]`);
  const heroGrade = document.querySelector(`[data-hero-grade="${id}"]`);

  if (heroScore) {
    heroScore.textContent = `${lead.score}/100`;
    heroScore.style.color = scoreColor(lead.score);
  }

  if (heroScoreNote) heroScoreNote.textContent = `${grade.g} grade potential`;
  if (heroScoreBar) {
    heroScoreBar.style.width = `${lead.score}%`;
    heroScoreBar.style.background = scoreGradient(lead.score);
  }

  if (heroGrade) {
    heroGrade.textContent = grade.g;
    heroGrade.style.color = scoreColor(lead.score);
  }
}

function renderSiteField(lead) {
  const editing = isSiteEditing(lead);
  const draft = getSiteDraft(lead);
  const draftHref = normalizeExternalUrl(draft);
  const savedHref = normalizeExternalUrl(lead.url);
  const canSave = !draft.trim() || Boolean(draftHref);

  if (editing) {
    return `
      <div class="site-control">
        <button class="action-btn subtle" type="button" onclick="toggleSiteEdit(${lead.id})">
          ${lead.url ? 'Cancel' : 'Close'}
        </button>
        <div class="site-panel">
          <div class="site-input-row">
            <input
              class="info-input"
              type="text"
              value="${escapeHTML(draft)}"
              aria-label="Current site"
              placeholder="example.com"
              oninput="setSiteDraft(${lead.id}, this.value)"
              onkeydown="handleSiteDraftKey(event, ${lead.id})"
            >
            <button
              class="action-btn site-save-btn"
              type="button"
              data-lead-id="${lead.id}"
              onclick="saveSiteUrl(${lead.id})"
              ${canSave ? '' : 'disabled'}
            >
              Save
            </button>
          </div>
          <div class="field-meta site-status" data-lead-id="${lead.id}">
            ${!draft.trim()
              ? 'Save empty to clear the site link.'
              : draftHref
                ? 'Will open in a new tab.'
                : 'Enter a valid web address.'}
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="site-control">
      <button class="action-btn subtle" type="button" onclick="toggleSiteEdit(${lead.id})">Edit</button>
      <div class="site-panel">
        <div class="site-link-shell">
          ${savedHref
            ? `<a class="field-link" href="${escapeHTML(savedHref)}" target="_blank" rel="noopener noreferrer">${escapeHTML(siteDisplayText(lead.url))}</a>`
            : '<span class="empty-list-note">No site saved yet.</span>'}
        </div>
      </div>
    </div>`;
}

function renderListCards(lead, field) {
  const items = lead[field] || [];

  if (!items.length) {
    return '<div class="empty-list-note">No items added yet.</div>';
  }

  return items.map((item, index) => {
    const text = escapeHTML(item);

    if (field === 'issues') {
      return `
        <div class="issue">
          <span class="issue-dot">&#9670;</span>
          <span class="list-item-text">${text}</span>
          <div class="list-item-actions">
            <button class="chip-action" type="button" onclick="startListItemEdit(${lead.id}, '${field}', ${index})">Edit</button>
            <button class="chip-action danger" type="button" onclick="removeListItem(${lead.id}, '${field}', ${index})">Remove</button>
          </div>
        </div>`;
    }

    return `
      <div class="scope-item">
        <span class="scope-num">${String(index + 1).padStart(2, '0')}.</span>
        <span class="list-item-text">${text}</span>
        <div class="list-item-actions">
          <button class="chip-action" type="button" onclick="startListItemEdit(${lead.id}, '${field}', ${index})">Edit</button>
          <button class="chip-action danger" type="button" onclick="removeListItem(${lead.id}, '${field}', ${index})">Remove</button>
        </div>
      </div>`;
  }).join('');
}


// ── Mobile sidebar ─────────────────────────────────────────────

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}


// ── Stats ──────────────────────────────────────────────────────

function calcStats() {
  let pipeline = 0, contacted = 0, activeBuilds = 0, collected = 0;

  leads.forEach(lead => {
    if (lead.status !== 'Passed') pipeline += midPrice(lead);

    if (['Contacted','Meeting Set','Proposal Sent','In Progress','Completed'].includes(lead.status)) {
      contacted++;
    }

    if (lead.status === 'In Progress') activeBuilds++;

    if (lead.paid && lead.invoice) {
      const val = parseFloat(lead.invoice.replace(/[^0-9.]/g, ''));
      if (!isNaN(val)) collected += val;
    }
  });

  document.getElementById('s-rev').textContent = '$' + Math.round(collected).toLocaleString();
  document.getElementById('s-pip').textContent = '$' + pipeline.toLocaleString();
  document.getElementById('s-bld').textContent = activeBuilds;
  document.getElementById('s-con').textContent = contacted;
}


// ── Cycle status by clicking the pill ─────────────────────────

function cycleStatus(id, event) {
  event.stopPropagation();
  const lead = leads.find(l => l.id === id);
  const currentIndex = STATUSES.indexOf(lead.status);
  lead.status = STATUSES[(currentIndex + 1) % STATUSES.length];
  renderList();
  calcStats();
  if (selectedId === id) renderDetail(id);
}

function cyclePriority(id, event) {
  event.stopPropagation();
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  const currentIndex = PRIORITIES.indexOf(lead.priority);
  const nextPriority = PRIORITIES[(currentIndex + 1) % PRIORITIES.length];
  setPriority(id, nextPriority);
}

function updateSortButton() {
  const button = document.getElementById('sort-btn');
  if (!button) return;

  const active = sortMode === 'priority';
  button.textContent = active ? 'SORT: PRIORITY' : 'SORT: DEFAULT';
  button.classList.toggle('active', active);
}

function getRenderedLeads() {
  const ordered = [...leads];

  if (sortMode === 'priority') {
    ordered.sort((a, b) => {
      const priorityDiff = (PRIORITY_SORT_ORDER[a.priority] ?? 99) - (PRIORITY_SORT_ORDER[b.priority] ?? 99);
      if (priorityDiff !== 0) return priorityDiff;
      return leadOriginalOrder.get(a.id) - leadOriginalOrder.get(b.id);
    });
    return ordered;
  }

  ordered.sort((a, b) => leadOriginalOrder.get(a.id) - leadOriginalOrder.get(b.id));
  return ordered;
}

function togglePrioritySort() {
  sortMode = sortMode === 'priority' ? 'default' : 'priority';
  updateSortButton();
  renderList();
}


// ── Render sidebar list ────────────────────────────────────────

function renderList() {
  document.getElementById('lead-count').textContent = leads.length;
  updateSortButton();

  document.getElementById('lead-list').innerHTML = getRenderedLeads().map(lead => {
    const g = scoreGrade(lead.score);
    const isActive = selectedId === lead.id;
    const siteText = siteDisplayText(lead.url);

    return `
      <div class="lead-card${isActive ? ' active' : ''}" onclick="selectLead(${lead.id})">
        <div class="lead-top">
          <div class="lead-name">${escapeHTML(lead.name)}</div>
          <span class="badge badge-action ${lead.priority}" onclick="cyclePriority(${lead.id}, event)" title="Click to change priority">${lead.priority}</span>
        </div>
        <div class="lead-meta-row">
          <span class="lead-meta">${escapeHTML(siteText)}</span>
          <span class="lead-meta lead-meta-price">${formatMoney(midPrice(lead))}</span>
        </div>
        <div class="score-row">
          <div class="score-bar">
            <div class="score-fill" style="width:${lead.score}%; background:${scoreGradient(lead.score)}"></div>
          </div>
          <span class="score-grade" style="color:${g.c}">${g.g}</span>
          <span class="score-num">${lead.score}/100</span>
        </div>
        <div>
          <span class="status-pill ${statusClass(lead.status)}" onclick="cycleStatus(${lead.id}, event)">
            ${lead.status}
          </span>
        </div>
      </div>`;
  }).join('');
}


// ── Select a lead ──────────────────────────────────────────────

function selectLead(id) {
  selectedId = id;
  renderList();
  renderDetail(id);
  if (window.innerWidth <= 768) closeSidebar();
}


// ── Render detail panel ────────────────────────────────────────

function renderDetail(id) {
  const lead = leads.find(l => l.id === id);
  if (!lead) {
    document.getElementById('content').innerHTML = emptyStateHTML();
    return;
  }

  const g = scoreGrade(lead.score);
  const showInventory = ['In Progress', 'Completed'].includes(lead.status);
  const issuesDraft = getListDraft(id, 'issues');
  const issuesEditIndex = getListEditIndex(id, 'issues');
  const scopeDraft = getListDraft(id, 'scope');
  const scopeEditIndex = getListEditIndex(id, 'scope');
  const siteText = siteDisplayText(lead.url);

  document.getElementById('content').innerHTML = `

    <!-- Lead profile -->
    <div class="section hero-card">
      <div class="hero-shell">
        <div class="hero-main">
          <div class="hero-kicker">LEAD PROFILE</div>
          <input
            class="hero-name-input"
            type="text"
            value="${escapeHTML(lead.name)}"
            aria-label="Business name"
            oninput="setLeadText(${id}, 'name', this.value, true)"
          >
          <div class="hero-chip-row">
            <span class="status-pill ${statusClass(lead.status)}" onclick="cycleStatus(${id}, event)">
              ${lead.status}
            </span>
            <span class="badge badge-action ${lead.priority}" onclick="cyclePriority(${lead.id}, event)" title="Click to change priority">${lead.priority}</span>
            <span class="hero-chip">Midpoint <strong data-price-mid="${id}">${formatMoney(midPrice(lead))}</strong></span>
            <span class="hero-chip">Grade <strong data-hero-grade="${id}" style="color:${scoreColor(lead.score)}">${g.g}</strong></span>
          </div>
          <div class="hero-contact-grid">
            <div class="hero-contact-card">
              <div class="info-key">CURRENT SITE</div>
              ${renderSiteField(lead)}
            </div>
            <div class="hero-contact-card">
              <div class="info-key">PHONE</div>
              <input
                class="info-input"
                type="text"
                value="${escapeHTML(lead.phone)}"
                aria-label="Phone number"
                placeholder="(208) 000-0000"
                oninput="setLeadText(${id}, 'phone', this.value)"
              >
            </div>
          </div>
        </div>
        <div class="hero-metrics">
          <div class="hero-metric">
            <span class="hero-metric-label">Score</span>
            <span class="hero-metric-value" data-hero-score="${id}" style="color:${scoreColor(lead.score)}">${lead.score}/100</span>
            <span class="hero-metric-note" data-hero-score-note="${id}">${g.g} grade potential</span>
            <div class="hero-score-track">
              <div class="hero-score-fill" data-hero-score-bar="${id}" style="width:${lead.score}%; background:${scoreGradient(lead.score)}"></div>
            </div>
          </div>
          <div class="hero-metric">
            <span class="hero-metric-label">Range</span>
            <span class="hero-metric-value" data-price-mid="${id}">${formatMoney(midPrice(lead))}</span>
            <span class="hero-metric-note" data-price-range="${id}">${formatPriceRange(lead)}</span>
          </div>
          <div class="hero-metric">
            <span class="hero-metric-label">Priority</span>
            <span class="hero-metric-value" style="color:${priorityColor(lead.priority)}">${lead.priority}</span>
            <span class="hero-metric-note">Current pursuit level</span>
          </div>
          <div class="hero-metric">
            <span class="hero-metric-label">Web Presence</span>
            <span class="hero-metric-value hero-metric-site">${escapeHTML(lead.url ? siteText : 'No site')}</span>
            <span class="hero-metric-note">${lead.url ? 'Live site recorded' : 'Needs a website'}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pipeline status -->
    <div class="section">
      <div class="section-title">PIPELINE STATUS</div>
      <div class="section-hint">Move the lead through the sales flow, then adjust score, priority, and pricing.</div>
      <div class="pipe-steps">
        ${STATUSES.map(s => {
          let cls = 'pipe-step';
          if (lead.status === s)  cls += ' act';
          if (s === 'Passed')     cls += ' pass-s';
          return `<div class="${cls}" onclick="setStatus(${id}, '${s}')">${s}</div>`;
        }).join('')}
      </div>
      <div class="info-grid">
        <div class="info-cell">
          <div class="info-key">SCORE</div>
          <input
            class="info-input score-input"
            type="number"
            min="0"
            max="100"
            step="1"
            value="${lead.score}"
            data-lead-id="${id}"
            aria-label="Lead score"
            oninput="setScore(${id}, this.value)"
          >
          <div class="field-meta score-meta" data-lead-id="${id}" style="color:${scoreColor(lead.score)}">
            GRADE ${g.g} · ${lead.score}/100
          </div>
        </div>
        <div class="info-cell info-cell-price">
          <div class="info-key">PRICE RANGE</div>
          <div class="price-editor" data-lead-id="${id}">
            <div class="price-inputs">
              <label class="price-field">
                <span class="price-label">MIN</span>
                <div class="price-input-wrap">
                  <span class="price-currency">$</span>
                  <input
                    class="price-input"
                    type="number"
                    min="0"
                    max="${PRICE_LIMIT}"
                    step="1"
                    value="${lead.lo}"
                    data-price-bound="lo"
                    aria-label="Minimum price"
                    onchange="setPriceBound(${id}, 'lo', this.value)"
                  >
                </div>
              </label>
              <label class="price-field">
                <span class="price-label">MAX</span>
                <div class="price-input-wrap">
                  <span class="price-currency">$</span>
                  <input
                    class="price-input"
                    type="number"
                    min="0"
                    max="${PRICE_LIMIT}"
                    step="1"
                    value="${lead.hi}"
                    data-price-bound="hi"
                    aria-label="Maximum price"
                    onchange="setPriceBound(${id}, 'hi', this.value)"
                  >
                </div>
              </label>
            </div>
            <div class="price-sliders">
              <input
                class="price-slider"
                type="range"
                min="0"
                max="${PRICE_LIMIT}"
                step="1"
                value="${lead.lo}"
                data-price-bound="lo"
                aria-label="Minimum price slider"
                oninput="setPriceBound(${id}, 'lo', this.value)"
              >
              <input
                class="price-slider"
                type="range"
                min="0"
                max="${PRICE_LIMIT}"
                step="1"
                value="${lead.hi}"
                data-price-bound="hi"
                aria-label="Maximum price slider"
                oninput="setPriceBound(${id}, 'hi', this.value)"
              >
            </div>
            <div class="price-summary">${formatPriceRange(lead)}</div>
          </div>
        </div>
        <div class="info-cell">
          <div class="info-key">PRIORITY</div>
          <select
            class="info-select"
            aria-label="Priority"
            onchange="setPriority(${id}, this.value)"
          >
            ${PRIORITIES.map(priority => `
              <option value="${priority}" ${lead.priority === priority ? 'selected' : ''}>${priority}</option>
            `).join('')}
          </select>
          <div class="field-meta" style="color:${priorityColor(lead.priority)}">CURRENT PRIORITY</div>
        </div>
      </div>
    </div>

    <!-- Site issues -->
    <div class="section">
      <div class="section-title">SITE ISSUES</div>
      <div class="section-hint">${issuesEditIndex >= 0 ? 'Updating selected issue.' : 'Add one issue at a time.'}</div>
      <div class="list-builder">
        <input
          class="info-input"
          type="text"
          value="${escapeHTML(issuesDraft)}"
          placeholder="Add a site issue..."
          aria-label="Add site issue"
          oninput="setListDraft(${id}, 'issues', this.value)"
          onkeydown="handleListDraftKey(event, ${id}, 'issues')"
        >
        <button class="action-btn" type="button" onclick="submitListDraft(${id}, 'issues')">
          ${issuesEditIndex >= 0 ? 'Update' : 'Add'}
        </button>
        ${issuesEditIndex >= 0
          ? `<button class="action-btn subtle" type="button" onclick="clearListDraft(${id}, 'issues')">Cancel</button>`
          : ''}
      </div>
      <div class="issues">
        ${renderListCards(lead, 'issues')}
      </div>
    </div>

    <!-- Pitch -->
    <div class="section">
      <div class="section-title">PITCH LINE</div>
      <textarea
        class="editor-area pitch-editor"
        placeholder="Write the pitch line..."
        oninput="setLeadText(${id}, 'pitch', this.value)"
      >${escapeHTML(lead.pitch)}</textarea>
    </div>

    <!-- Scope -->
    <div class="section">
      <div class="section-title">SCOPE</div>
      <div class="section-hint">${scopeEditIndex >= 0 ? 'Updating selected scope item.' : 'Add one scope item at a time.'}</div>
      <div class="list-builder">
        <input
          class="info-input"
          type="text"
          value="${escapeHTML(scopeDraft)}"
          placeholder="Add a scope item..."
          aria-label="Add scope item"
          oninput="setListDraft(${id}, 'scope', this.value)"
          onkeydown="handleListDraftKey(event, ${id}, 'scope')"
        >
        <button class="action-btn" type="button" onclick="submitListDraft(${id}, 'scope')">
          ${scopeEditIndex >= 0 ? 'Update' : 'Add'}
        </button>
        ${scopeEditIndex >= 0
          ? `<button class="action-btn subtle" type="button" onclick="clearListDraft(${id}, 'scope')">Cancel</button>`
          : ''}
      </div>
      <div class="scope-list">
        ${renderListCards(lead, 'scope')}
      </div>
    </div>

    ${showInventory ? `
    <!-- Project inventory -->
    <div class="section">
      <div class="section-title">PROJECT INVENTORY</div>

      <div class="sub-lbl">PAGES BUILT</div>
      <div class="pages-grid">
        ${PAGES.map(page => `
          <div class="page-check${lead.pages[page] ? ' ck' : ''}" onclick="togglePage(${id}, '${page}')">
            <input type="checkbox" ${lead.pages[page] ? 'checked' : ''}>
            <span>${page}</span>
          </div>`).join('')}
      </div>

      <div class="sub-lbl">STACK</div>
      <div class="stack-opts">
        ${STACKS.map(s => `
          <div class="stack-opt${lead.stack === s ? ' sel' : ''}" onclick="setStack(${id}, '${s}')">${s}</div>`
        ).join('')}
      </div>

      <div class="sub-lbl">DELIVERABLE STATUS</div>
      <div class="deliv-steps">
        ${DELIVERY.map((step, i) => {
          const doneIndex = DELIVERY.indexOf(lead.delivery);
          let cls = 'deliv-step';
          if (i < doneIndex)       cls += ' dnd';
          if (step === lead.delivery) cls += ' acd';
          return `<div class="${cls}" onclick="setDelivery(${id}, '${step}')">${step}</div>`;
        }).join('')}
      </div>

      <div class="sub-lbl">INVOICE</div>
      <div class="invoice-row">
        <span class="inv-cur">$</span>
        <input
          class="inv-input"
          type="text"
          placeholder="0.00"
          value="${escapeHTML(lead.invoice)}"
          oninput="setInvoice(${id}, this.value)"
        >
        <div class="inv-right">
          <span class="paid-lbl" style="color:${lead.paid ? 'var(--green)' : 'var(--text-muted)'}">
            ${lead.paid ? 'PAID' : 'UNPAID'}
          </span>
          <div class="toggle${lead.paid ? ' on' : ''}" onclick="togglePaid(${id})">
            <div class="toggle-knob"></div>
          </div>
        </div>
      </div>
    </div>` : ''}

    <!-- Notes -->
    <div class="section">
      <div class="section-title">NOTES</div>
      <textarea
        class="notes-area"
        placeholder="Type notes here..."
        oninput="saveNote(${id}, this.value)"
      >${escapeHTML(lead.notes)}</textarea>
    </div>`;
}


// ── Empty state ────────────────────────────────────────────────

function emptyStateHTML() {
  return `
    <div class="empty-state">
      <div class="empty-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="1.5"
             stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      </div>
      <p>SELECT A LEAD</p>
    </div>`;
}


// ── Mutators ───────────────────────────────────────────────────

function setStatus(id, status) {
  leads.find(l => l.id === id).status = status;
  renderList();
  calcStats();
  renderDetail(id);
}

function setLeadText(id, field, value, refreshList = false) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;
  lead[field] = value;
  if (refreshList) renderList();
}

function setSiteDraft(id, value) {
  siteDraftState[id] = value;
  syncSiteEditor(id);
}

function toggleSiteEdit(id) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  if (isSiteEditing(lead)) {
    siteDraftState[id] = lead.url || '';
    siteEditState[id] = false;
  } else {
    siteDraftState[id] = lead.url || '';
    siteEditState[id] = true;
  }

  renderDetail(id);
}

function handleSiteDraftKey(event, id) {
  if (event.key === 'Enter') {
    event.preventDefault();
    saveSiteUrl(id);
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    toggleSiteEdit(id);
  }
}

function saveSiteUrl(id) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  const draft = (siteDraftState[id] ?? lead.url ?? '').trim();
  if (draft && !normalizeExternalUrl(draft)) {
    syncSiteEditor(id);
    return;
  }

  lead.url = draft;
  siteDraftState[id] = draft;
  siteEditState[id] = false;
  renderList();
  renderDetail(id);
}

function setListDraft(id, field, value) {
  if (!listDraftState[field]) listDraftState[field] = {};
  listDraftState[field][id] = value;
}

function clearListDraft(id, field) {
  if (listDraftState[field]) listDraftState[field][id] = '';
  if (listEditIndexState[field]) delete listEditIndexState[field][id];
  renderDetail(id);
}

function handleListDraftKey(event, id, field) {
  if (event.key === 'Enter') {
    event.preventDefault();
    submitListDraft(id, field);
  }

  if (event.key === 'Escape' && getListEditIndex(id, field) >= 0) {
    event.preventDefault();
    clearListDraft(id, field);
  }
}

function submitListDraft(id, field) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  const draft = (listDraftState[field]?.[id] ?? '').trim();
  if (!draft) return;

  const editIndex = getListEditIndex(id, field);
  if (editIndex >= 0) {
    lead[field][editIndex] = draft;
    delete listEditIndexState[field][id];
  } else {
    lead[field].push(draft);
  }

  listDraftState[field][id] = '';
  renderDetail(id);
}

function startListItemEdit(id, field, index) {
  const lead = leads.find(l => l.id === id);
  if (!lead || !lead[field]?.[index]) return;

  listDraftState[field][id] = lead[field][index];
  listEditIndexState[field][id] = index;
  renderDetail(id);
}

function removeListItem(id, field, index) {
  const lead = leads.find(l => l.id === id);
  if (!lead || !lead[field]?.[index]) return;

  lead[field].splice(index, 1);

  const editIndex = getListEditIndex(id, field);
  if (editIndex === index) {
    listDraftState[field][id] = '';
    delete listEditIndexState[field][id];
  } else if (editIndex > index) {
    listEditIndexState[field][id] = editIndex - 1;
  }

  renderDetail(id);
}

function setScore(id, value) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;
  lead.score = normalizeScoreValue(value);
  renderList();
  syncScoreControls(id);
}

function setPriority(id, value) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;
  lead.priority = value;
  renderList();
  renderDetail(id);
}

function saveNote(id, value) {
  leads.find(l => l.id === id).notes = value;
}

function togglePage(id, page) {
  const lead = leads.find(l => l.id === id);
  lead.pages[page] = !lead.pages[page];
  renderDetail(id);
}

function setStack(id, stack) {
  leads.find(l => l.id === id).stack = stack;
  renderDetail(id);
}

function setDelivery(id, step) {
  leads.find(l => l.id === id).delivery = step;
  renderDetail(id);
}

function setInvoice(id, value) {
  leads.find(l => l.id === id).invoice = value;
  calcStats();
}

function setPriceBound(id, bound, value) {
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  const nextValue = normalizePriceValue(value);

  if (bound === 'lo') {
    lead.lo = nextValue;
    if (lead.hi < lead.lo) lead.hi = lead.lo;
  } else {
    lead.hi = nextValue;
    if (lead.lo > lead.hi) lead.lo = lead.hi;
  }

  calcStats();
  renderList();
  syncPriceControls(id);
}

function togglePaid(id) {
  const lead = leads.find(l => l.id === id);
  lead.paid = !lead.paid;
  calcStats();
  renderDetail(id);
}


// ── Init ───────────────────────────────────────────────────────

renderList();
calcStats();
updateSortButton();
