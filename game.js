/* ============================
   DATA GAME
   ============================ */
const LEVELS = [
  {
    id: 1,
    name: "Hutan Tropis",
    ecosystem: "Hutan",
    icon: "🌳",
    desc: "Di hutan tropis Indonesia, setiap makhluk memiliki perannya. Susun rantai makanan yang benar dari produsen hingga predator puncak.",
    organisms: [
      { id: "daun",    emoji: "🍃", name: "Daun & Rumput",   role: "producer",  order: 0, eats: "Energi matahari & mineral tanah", desc: "Tumbuhan hijau mengubah sinar matahari menjadi energi melalui fotosintesis. Dasar dari seluruh rantai makanan." },
      { id: "ulat",    emoji: "🐛", name: "Ulat",            role: "consumer1", order: 1, eats: "Daun & Rumput",  desc: "Ulat memakan daun secara besar-besaran. Meskipun kecil, populasinya sangat besar dan penting bagi ekosistem." },
      { id: "katak",   emoji: "🐸", name: "Katak",           role: "consumer2", order: 2, eats: "Ulat & serangga", desc: "Katak adalah predator serangga yang efisien. Kulitnya yang lembap membutuhkan lingkungan yang basah dan hijau." },
      { id: "elang",   emoji: "🦅", name: "Elang",           role: "apex",      order: 3, eats: "Katak & ular",  desc: "Elang adalah predator puncak yang mengendalikan populasi hewan di bawahnya. Penglihatan tajamnya bisa melihat mangsa dari ratusan meter." },
      // Pengecoh
      { id: "jamur",   emoji: "🍄", name: "Jamur",           role: "decomposer", order: -1, eats: "Bahan organik mati", desc: "Jamur adalah pengurai yang memecah bahan organik mati. Bukan bagian dari rantai utama produsen-konsumen." },
      { id: "rusa",    emoji: "🦌", name: "Rusa",            role: "consumer1", order: -1, eats: "Rumput & dedaunan", desc: "Rusa adalah herbivora, bukan bagian dari rantai ini. Tapi ia memang memakan produsen!" },
    ],
    chain: ["daun", "ulat", "katak", "elang"],
    funFact: "Seekor elang jawa (Nisaetus bartelsi) bisa terbang sejauh 100 km mencari mangsa. Kini mereka terancam punah akibat deforestasi.",
    stars: 0,
  },
  {
    id: 2,
    name: "Laut Dangkal",
    ecosystem: "Laut",
    icon: "🌊",
    desc: "Laut biru menyimpan jaringan kehidupan yang kompleks. Dari fitoplankton mikroskopis hingga hiu yang mendominasi, susun rantai makanan laut yang benar.",
    organisms: [
      { id: "fitoplankton", emoji: "🦠", name: "Fitoplankton",  role: "producer",  order: 0, eats: "Sinar matahari & nutrisi laut", desc: "Organisme mikroskopis penghasil oksigen terbesar di bumi. 70% oksigen bumi dihasilkan oleh fitoplankton di lautan." },
      { id: "zooplankton",  emoji: "🦐", name: "Zooplankton",   role: "consumer1", order: 1, eats: "Fitoplankton",   desc: "Hewan renik yang mengapung di lautan dan memakan fitoplankton. Makanan utama bagi ikan-ikan kecil." },
      { id: "ikanKecil",    emoji: "🐟", name: "Ikan Kecil",    role: "consumer2", order: 2, eats: "Zooplankton",   desc: "Ikan-ikan kecil seperti sarden berenang dalam kelompok besar untuk melindungi diri dari predator." },
      { id: "hiu",          emoji: "🦈", name: "Hiu",           role: "apex",      order: 3, eats: "Ikan & mamalia laut", desc: "Hiu telah ada sejak 450 juta tahun lalu. Sebagai predator puncak, hiu menjaga kesehatan ekosistem laut." },
      // Pengecoh
      { id: "bintangLaut",  emoji: "⭐", name: "Bintang Laut",  role: "consumer2", order: -1, eats: "Kerang & moluska", desc: "Bintang laut bukan bagian dari rantai ini. Ia adalah predator kerang dan moluska, bukan ikan kecil." },
      { id: "paus",         emoji: "🐋", name: "Paus Biru",     role: "apex",      order: -1, eats: "Krill/Zooplankton", desc: "Paus biru memakan krill secara langsung, melewati rantai ini. Hewan terbesar yang pernah ada di bumi!" },
    ],
    chain: ["fitoplankton", "zooplankton", "ikanKecil", "hiu"],
    funFact: "Hiu memakan sekitar 11 kg makanan per minggu — jauh lebih sedikit dari yang dibayangkan. Mereka lebih takut pada manusia daripada sebaliknya.",
    stars: 0,
  },
  {
    id: 3,
    name: "Padang Sabana",
    ecosystem: "Padang",
    icon: "🏜️",
    desc: "Sabana Afrika terkenal dengan drama predasi yang epik. Dari rumput kering hingga singa yang berkuasa, bangun rantai makanan sabana.",
    organisms: [
      { id: "rumput",  emoji: "🌾", name: "Rumput Sabana",  role: "producer",  order: 0, eats: "Sinar matahari & air hujan", desc: "Rumput sabana tumbuh cepat dan menjadi sumber makanan utama bagi jutaan herbivora Afrika." },
      { id: "zebra",   emoji: "🦓", name: "Zebra",          role: "consumer1", order: 1, eats: "Rumput & semak", desc: "Zebra memiliki pola garis unik seperti sidik jari manusia. Mereka bermigrasi ribuan kilometer mengikuti hujan dan rumput." },
      { id: "cheetah", emoji: "🐆", name: "Cheetah",        role: "consumer2", order: 2, eats: "Zebra & antelop", desc: "Cheetah adalah hewan darat tercepat, bisa berlari 112 km/jam. Tapi mereka sering kehilangan mangsanya ke predator yang lebih besar." },
      { id: "singa",   emoji: "🦁", name: "Singa",          role: "apex",      order: 3, eats: "Zebra, cheetah & wildebeest", desc: "Singa hidup berkelompok (pride) dan berburu secara kooperatif. Betina singa adalah pemburu utama kawanan." },
      // Pengecoh
      { id: "jerapah", emoji: "🦒", name: "Jerapah",        role: "consumer1", order: -1, eats: "Daun akasia", desc: "Jerapah makan daun dari pohon akasia tinggi, bukan rumput sabana. Bukan bagian dari rantai ini." },
      { id: "hyena",   emoji: "🐺", name: "Hyena",          role: "apex",      order: -1, eats: "Bangkai & hewan hidup", desc: "Hyena adalah pemulung dan predator sekaligus. Dalam ekosistem ini, singa yang mendominasi sebagai apex predator." },
    ],
    chain: ["rumput", "zebra", "cheetah", "singa"],
    funFact: "Singa adalah satu-satunya kucing yang hidup berkelompok. Auman singa dapat terdengar dari jarak 8 kilometer dan berfungsi untuk menandai wilayah.",
    stars: 0,
  },
  {
    id: 4,
    name: "Rawa Gambut",
    ecosystem: "Rawa",
    icon: "🌿",
    desc: "Ekosistem rawa gambut Indonesia adalah hutan tersembunyi yang kaya. Susun rantai makanan di balik permukaan air cokelat yang gelap.",
    organisms: [
      { id: "ganggang", emoji: "🌱", name: "Ganggang Air",   role: "producer",  order: 0, eats: "Sinar matahari & mineral air", desc: "Ganggang dan tumbuhan air mengapung di permukaan, menghasilkan oksigen dan menjadi dasar ekosistem rawa." },
      { id: "udang",    emoji: "🦀", name: "Udang Air Tawar", role: "consumer1", order: 1, eats: "Ganggang & detritus", desc: "Udang air tawar berperan ganda: memakan produsen dan juga membersihkan bahan organik yang membusuk." },
      { id: "ikanGabus",emoji: "🐡", name: "Ikan Gabus",    role: "consumer2", order: 2, eats: "Udang & ikan kecil", desc: "Ikan gabus adalah predator rakus di rawa. Di Indonesia, ikan ini juga diolah menjadi berbagai produk makanan bernilai tinggi." },
      { id: "buaya",    emoji: "🐊", name: "Buaya Muara",   role: "apex",      order: 3, eats: "Ikan besar & mamalia", desc: "Buaya muara adalah reptil terbesar dan paling berbahaya di dunia. Predator puncak rawa yang telah ada sejak zaman dinosaurus." },
      // Pengecoh
      { id: "bangau",   emoji: "🦢", name: "Bangau",         role: "consumer2", order: -1, eats: "Ikan & katak", desc: "Bangau adalah predator ikan yang datang dari luar rawa. Dalam rantai ini, ikan gabus yang menjadi konsumen ikan kecil." },
      { id: "ecengGondok", emoji: "🌺", name: "Eceng Gondok", role: "producer", order: -1, eats: "Nutrisi air & sinar matahari", desc: "Eceng gondok adalah tumbuhan invasif yang bisa merusak ekosistem rawa jika terlalu banyak. Bukan bagian dari rantai utama ini." },
    ],
    chain: ["ganggang", "udang", "ikanGabus", "buaya"],
    funFact: "Buaya muara Indonesia (Crocodylus porosus) bisa mencapai panjang 7 meter dan hidup lebih dari 70 tahun. Mereka memiliki gigitan terkuat di antara semua hewan.",
    stars: 0,
  },
];

const ROLE_LABELS = {
  producer:   "Produsen",
  consumer1:  "Konsumen I",
  consumer2:  "Konsumen II",
  apex:       "Konsumen Puncak",
  decomposer: "Pengurai",
};

/* ============================
   STATE GLOBAL
   ============================ */
let state = {
  currentLevel: null,
  slots: [],         // Array of { orgId | null }
  score: 0,
  completed: {},     // { levelId: stars }
  dragging: null,    // { orgId, fromSlot | null }
};

// Load simpanan
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("foodchain_save") || "{}");
    state.completed = saved.completed || {};
    state.score     = saved.score     || 0;
  } catch {}
}

function saveState() {
  localStorage.setItem("foodchain_save", JSON.stringify({
    completed: state.completed,
    score:     state.score,
  }));
}

/* ============================
   NAVIGASI SCREEN
   ============================ */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showMenu()        { showScreen("screen-menu"); }
function showHowToPlay()   { showScreen("screen-howto"); }
function showLevelSelect() { renderLevelGrid(); showScreen("screen-levels"); }
function showModule()      { switchTab("pengertian"); showScreen("screen-module"); }

/* ============================
   MODUL — SWITCH TAB
   ============================ */
function switchTab(tabId) {
  document.querySelectorAll(".module-tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".module-tab").forEach(el => el.classList.remove("active"));

  const content = document.getElementById("tab-" + tabId);
  if (content) content.classList.add("active");

  const tabs = document.querySelectorAll(".module-tab");
  const tabOrder = ["pengertian", "tingkatan", "ekosistem", "fakta"];
  const idx = tabOrder.indexOf(tabId);
  if (idx !== -1 && tabs[idx]) tabs[idx].classList.add("active");
}

/* ============================
   LEVEL GRID
   ============================ */
function renderLevelGrid() {
  const grid = document.getElementById("level-grid");
  grid.innerHTML = "";

  LEVELS.forEach((level, i) => {
    const isLocked    = i > 0 && !state.completed[LEVELS[i - 1].id];
    const starsEarned = state.completed[level.id] || 0;

    const card = document.createElement("div");
    card.className = "level-card" + (isLocked ? " locked" : "") + (starsEarned > 0 ? " completed" : "");
    card.innerHTML = `
      <div class="level-icon">${level.icon}</div>
      <div class="level-name">${level.name}</div>
      <div class="level-eco">${level.ecosystem}</div>
      <div class="stars">${renderStars(starsEarned)}</div>
    `;
    if (!isLocked) card.onclick = () => startLevel(level.id);
    grid.appendChild(card);
  });
}

function renderStars(n) {
  return [0,1,2].map(i => `<span class="${i < n ? "" : "empty"}">★</span>`).join("");
}

/* ============================
   START LEVEL
   ============================ */
function startLevel(levelId) {
  const level = LEVELS.find(l => l.id === levelId);
  state.currentLevel = level;
  state.slots = new Array(level.chain.length).fill(null);

  // HUD
  document.getElementById("hud-level-name").textContent = `${level.icon} ${level.name}`;
  document.getElementById("hud-score").textContent = state.score;

  // Deskripsi
  document.getElementById("level-desc").textContent = level.desc;

  // Render organisme (dikocok)
  renderOrganismPanel();

  // Render slots
  renderChainSlots();

  // Info panel
  document.getElementById("info-content").innerHTML = `
    <div class="info-placeholder">
      <span>👆</span>
      <p>Klik organisme untuk melihat informasinya</p>
    </div>`;

  showScreen("screen-game");
}

/* ============================
   PANEL ORGANISME
   ============================ */
function renderOrganismPanel() {
  const level = state.currentLevel;
  const list = document.getElementById("organism-list");
  list.innerHTML = "";

  const shuffled = [...level.organisms].sort(() => Math.random() - 0.5);

  shuffled.forEach(org => {
    const isUsed = state.slots.includes(org.id);
    const item = document.createElement("div");
    item.className = "org-item" + (isUsed ? " used" : "");
    item.dataset.orgId = org.id;
    item.draggable = true;
    item.innerHTML = `<span class="org-emoji">${org.emoji}</span><span class="org-name">${org.name}</span>`;

    // Klik: tampilkan info
    item.addEventListener("click", () => showOrgInfo(org));

    // Drag events
    item.addEventListener("dragstart", e => {
      if (isUsed) { e.preventDefault(); return; }
      state.dragging = { orgId: org.id, fromSlot: null };
      item.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", org.id);
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));

    // Touch drag
    item.addEventListener("touchstart", e => {
      if (isUsed) return;
      startTouch(e, org.id, null);
    }, { passive: true });

    list.appendChild(item);
  });
}

/* ============================
   CHAIN SLOTS
   ============================ */
const SLOT_LABELS = ["Produsen", "Konsumen I", "Konsumen II", "Konsumen Puncak"];

function renderChainSlots() {
  const container = document.getElementById("chain-container");
  container.innerHTML = "";
  const level = state.currentLevel;

  level.chain.forEach((_, i) => {
    // Arrow sebelum slot (kecuali pertama)
    if (i > 0) {
      const arrow = document.createElement("div");
      arrow.className = "chain-arrow";
      arrow.textContent = "→";
      container.appendChild(arrow);
    }

    const slotWrap = document.createElement("div");
    slotWrap.className = "chain-slot";

    const label = document.createElement("div");
    label.className = "slot-label";
    label.textContent = SLOT_LABELS[i] || `Slot ${i+1}`;

    const box = document.createElement("div");
    box.className = "slot-box" + (state.slots[i] ? " filled" : "");
    box.dataset.slotIndex = i;

    const orgId = state.slots[i];
    if (orgId) {
      const org = level.organisms.find(o => o.id === orgId);
      box.innerHTML = `
        <span class="slot-emoji">${org.emoji}</span>
        <span class="slot-name">${org.name}</span>
        <button class="slot-remove" onclick="removeFromSlot(${i})" title="Hapus">✕</button>
      `;
      box.addEventListener("click", () => showOrgInfo(org));
    } else {
      box.innerHTML = `<span class="slot-placeholder">+ Letakkan</span>`;
    }

    // Drag-over events
    box.addEventListener("dragover", e => {
      e.preventDefault();
      box.classList.add("drag-over");
    });
    box.addEventListener("dragleave", () => box.classList.remove("drag-over"));
    box.addEventListener("drop", e => {
      e.preventDefault();
      box.classList.remove("drag-over");
      const orgId = e.dataTransfer.getData("text/plain") || (state.dragging && state.dragging.orgId);
      if (orgId) dropOrgToSlot(orgId, i, state.dragging && state.dragging.fromSlot);
    });

    // Touch drop target
    box.addEventListener("touchend", e => {
      if (state.dragging) {
        const touch = e.changedTouches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);
        const slotEl = el && el.closest(".slot-box");
        if (slotEl) {
          const idx = parseInt(slotEl.dataset.slotIndex);
          dropOrgToSlot(state.dragging.orgId, idx, state.dragging.fromSlot);
        }
        endTouch();
      }
    });

    slotWrap.appendChild(label);
    slotWrap.appendChild(box);
    container.appendChild(slotWrap);
  });
}

function dropOrgToSlot(orgId, slotIndex, fromSlot) {
  // Jika slot sudah terisi, tukar
  const existingOrgId = state.slots[slotIndex];
  if (fromSlot !== null && fromSlot !== undefined) {
    // Dari slot ke slot: tukar
    state.slots[fromSlot] = existingOrgId;
  } else {
    // Dari panel: kalau sudah ada di slot lain, hapus dari sana
    const existingIdx = state.slots.indexOf(orgId);
    if (existingIdx !== -1) state.slots[existingIdx] = null;
  }
  state.slots[slotIndex] = orgId;

  renderChainSlots();
  renderOrganismPanel();
  clearSlotFeedback();
}

function removeFromSlot(slotIndex) {
  state.slots[slotIndex] = null;
  renderChainSlots();
  renderOrganismPanel();
  clearSlotFeedback();
}

function clearSlotFeedback() {
  document.querySelectorAll(".slot-box").forEach(b => {
    b.classList.remove("correct", "wrong");
  });
}

/* ============================
   TOUCH DRAG (mobile)
   ============================ */
let ghost = null;

function startTouch(e, orgId, fromSlot) {
  state.dragging = { orgId, fromSlot };
  ghost = document.getElementById("drag-ghost");
  if (!ghost) {
    ghost = document.createElement("div");
    ghost.id = "drag-ghost";
    document.body.appendChild(ghost);
  }
  const org = state.currentLevel.organisms.find(o => o.id === orgId);
  ghost.textContent = org.emoji;
  ghost.style.display = "block";
  moveTouchGhost(e.touches[0]);

  document.addEventListener("touchmove", onTouchMove, { passive: false });
  document.addEventListener("touchend", onTouchEnd);
}

function onTouchMove(e) {
  e.preventDefault();
  moveTouchGhost(e.touches[0]);
}

function moveTouchGhost(touch) {
  if (ghost) {
    ghost.style.left = touch.clientX + "px";
    ghost.style.top  = touch.clientY + "px";
  }
}

function onTouchEnd(e) {
  if (ghost) ghost.style.display = "none";
  const touch = e.changedTouches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  const slotEl = el && el.closest(".slot-box");
  if (slotEl && state.dragging) {
    const idx = parseInt(slotEl.dataset.slotIndex);
    dropOrgToSlot(state.dragging.orgId, idx, state.dragging.fromSlot);
  }
  endTouch();
}

function endTouch() {
  document.removeEventListener("touchmove", onTouchMove);
  document.removeEventListener("touchend", onTouchEnd);
  state.dragging = null;
}

/* ============================
   INFO PANEL
   ============================ */
function showOrgInfo(org) {
  const panel = document.getElementById("info-content");
  panel.innerHTML = `
    <div class="org-info-card">
      <div class="org-info-emoji">${org.emoji}</div>
      <div class="org-info-name">${org.name}</div>
      <div class="org-info-role role-${org.role}">${ROLE_LABELS[org.role]}</div>
      <p class="org-info-desc">${org.desc}</p>
      <p class="org-info-eats"><strong>Memakan:</strong> ${org.eats}</p>
    </div>
  `;
}

/* ============================
   CEK JAWABAN
   ============================ */
function checkAnswer() {
  const level = state.currentLevel;

  // Pastikan semua slot terisi
  if (state.slots.some(s => s === null)) {
    showModal("⚠️", "Belum Lengkap", "Isi semua slot rantai makanan terlebih dahulu!", [
      { label: "Lanjut", action: hideModal },
    ]);
    return;
  }

  let correct = 0;
  const boxes = document.querySelectorAll(".slot-box");

  state.slots.forEach((orgId, i) => {
    const isCorrect = orgId === level.chain[i];
    if (isCorrect) correct++;
    boxes[i].classList.remove("correct", "wrong");
    boxes[i].classList.add(isCorrect ? "correct" : "wrong");
  });

  const allCorrect = correct === level.chain.length;
  const stars = allCorrect ? 3 : correct >= 2 ? 2 : 1;
  const pointsEarned = allCorrect ? 300 : correct * 50;

  if (allCorrect) {
    state.score += pointsEarned;
    state.completed[level.id] = Math.max(state.completed[level.id] || 0, stars);
    saveState();
    document.getElementById("hud-score").textContent = state.score;

    setTimeout(() => showResult(true, stars, pointsEarned), 600);
  } else {
    showModal("❌", `${correct} dari ${level.chain.length} benar`,
      "Beberapa posisi masih salah. Merah = salah, hijau = benar. Coba lagi!", [
      { label: "Coba Lagi", action: hideModal },
      { label: "Reset", action: () => { hideModal(); resetSlots(); } },
    ]);
  }
}

function resetSlots() {
  state.slots = new Array(state.currentLevel.chain.length).fill(null);
  renderChainSlots();
  renderOrganismPanel();
  clearSlotFeedback();
}

/* ============================
   RESULT SCREEN
   ============================ */
function showResult(win, stars, points) {
  const level = state.currentLevel;
  const nextLevel = LEVELS.find(l => l.id === level.id + 1);

  const reviewHtml = level.chain.map((orgId, i) => {
    const org = level.organisms.find(o => o.id === orgId);
    return `
      ${i > 0 ? '<span class="review-arrow">→</span>' : ""}
      <div class="review-item">
        <div class="review-emoji">${org.emoji}</div>
        <div class="review-name">${org.name}</div>
      </div>
    `;
  }).join("");

  document.getElementById("result-container").innerHTML = `
    <div class="result-icon">${win ? "🎉" : "😔"}</div>
    <h2 class="result-title" style="color: ${win ? "var(--cyan)" : "var(--text)"}">
      ${win ? "Sempurna!" : "Hampir!"}
    </h2>
    <p class="result-subtitle">
      ${win ? `Rantai makanan ${level.name} berhasil kamu susun dengan benar!` : "Coba lagi dan perhatikan urutan lebih baik."}
    </p>
    <div class="result-score-big">+${points} poin</div>
    <div class="result-stars">${renderStars(stars)}</div>

    <div class="result-chain-review">${reviewHtml}</div>

    <div class="result-fact">
      <div class="result-fact-label">💡 Tahukah kamu?</div>
      <p>${level.funFact}</p>
    </div>

    <div class="result-buttons">
      ${nextLevel ? `<button class="btn-primary" onclick="startLevel(${nextLevel.id})">Level Berikutnya →</button>` : ""}
      <button class="btn-secondary" onclick="startLevel(${level.id})">Ulangi</button>
      <button class="btn-secondary" onclick="showLevelSelect()">Pilih Level</button>
    </div>
  `;

  showScreen("screen-result");
}

/* ============================
   MODAL
   ============================ */
function showModal(icon, title, text, buttons) {
  const box = document.getElementById("modal-box");
  box.innerHTML = `
    <div class="modal-icon">${icon}</div>
    <div class="modal-title">${title}</div>
    <div class="modal-text">${text}</div>
    <div class="modal-buttons">
      ${buttons.map(b => `<button class="btn-${b.primary !== false ? "primary" : "secondary"} modal-btn">${b.label}</button>`).join("")}
    </div>
  `;

  const btns = box.querySelectorAll(".modal-btn");
  buttons.forEach((b, i) => btns[i].addEventListener("click", b.action));

  document.getElementById("feedback-modal").classList.remove("hidden");
}

function hideModal() {
  document.getElementById("feedback-modal").classList.add("hidden");
}

/* ============================
   KONFIRMASI KEMBALI
   ============================ */
function confirmBack() {
  showModal("🚪", "Keluar Level?", "Progress level ini akan hilang. Yakin ingin kembali?", [
    { label: "Kembali", action: () => { hideModal(); showLevelSelect(); }, primary: false },
    { label: "Tetap Main", action: hideModal },
  ]);
}

function confirmResetProgress() {
  showModal("🗑️", "Reset Semua Progress?",
    "Semua bintang, poin, dan level yang terbuka akan dihapus permanen. Tindakan ini tidak bisa dibatalkan.",
    [
      { label: "Ya, Reset", action: () => { hideModal(); resetAllProgress(); }, primary: false },
      { label: "Batal", action: hideModal },
    ]
  );
}

function resetAllProgress() {
  state.completed = {};
  state.score = 0;
  saveState();
  renderLevelGrid();
  document.getElementById("hud-score").textContent = 0;
}

/* ============================
   INIT
   ============================ */
loadState();
showMenu();
