// State
let currentMovies = [...moviesData];
let watchlist = new Set();
let activeFilter = 'all';
let activeGenre = 'ALL';
let searchQuery = '';
let sortBy = 'rating-desc';

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const resultsCount = document.getElementById('resultsCount');
const catalogView = document.getElementById('catalogView');
const detailViewPage = document.getElementById('detailViewPage');
const detailShowcase = document.getElementById('detailShowcase');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortBySelect = document.getElementById('sortBySelect');
const noResultsState = document.getElementById('noResultsState');

// Navigation
document.getElementById('homeNavBtn').addEventListener('click', () => {
  catalogView.hidden = false;
  detailViewPage.hidden = true;
});

document.getElementById('backToCatalogBtn').addEventListener('click', () => {
  catalogView.hidden = false;
  detailViewPage.hidden = true;
});

// Search functionality
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase();
  clearSearchBtn.hidden = searchQuery.length === 0;
  applyFiltersAndRender();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.hidden = true;
  applyFiltersAndRender();
});

// Reset Search
document.getElementById('resetSearchBtn').addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  activeFilter = 'all';
  activeGenre = 'ALL';
  
  document.querySelectorAll('.collection-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.collection-pill[data-filter="all"]').classList.add('active');
  
  document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.genre-pill[data-genre="ALL"]').classList.add('active');
  
  applyFiltersAndRender();
});

// Filter Pills (Collections)
document.querySelectorAll('.collection-pill').forEach(pill => {
  pill.addEventListener('click', (e) => {
    document.querySelectorAll('.collection-pill').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');
    activeFilter = e.target.dataset.filter;
    applyFiltersAndRender();
  });
});

// Genre Pills
document.querySelectorAll('.genre-pill').forEach(pill => {
  pill.addEventListener('click', (e) => {
    document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');
    activeGenre = e.target.dataset.genre;
    applyFiltersAndRender();
  });
});

// Sort Select
sortBySelect.addEventListener('change', (e) => {
  sortBy = e.target.value;
  applyFiltersAndRender();
});

// Keyboard shortcut (Press / to search)
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// Core Render Logic
function applyFiltersAndRender() {
  let filtered = [...moviesData];

  // 1. Apply Search
  if (searchQuery) {
    filtered = filtered.filter(m => 
      m.title.toLowerCase().includes(searchQuery) ||
      m.director.toLowerCase().includes(searchQuery) ||
      m.year.toString().includes(searchQuery) ||
      m.genre.some(g => g.toLowerCase().includes(searchQuery))
    );
  }

  // 2. Apply Genre Filter
  if (activeGenre !== 'ALL') {
    filtered = filtered.filter(m => m.genre.includes(activeGenre));
  }

  // 3. Apply Collection Filter
  if (activeFilter === 'top-rated') {
    filtered = filtered.filter(m => m.rating >= 8.0);
  } else if (activeFilter === 'blockbuster') {
    filtered = filtered.filter(m => m.revenue >= 200000000);
  } else if (activeFilter === 'fan-favorite') {
    filtered = filtered.filter(m => m.votes >= 300000);
  } else if (activeFilter === 'watchlist') {
    filtered = filtered.filter(m => watchlist.has(m.id));
  }

  // 4. Apply Sort
  filtered.sort((a, b) => {
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    if (sortBy === 'votes-desc') return b.votes - a.votes;
    if (sortBy === 'revenue-desc') return b.revenue - a.revenue;
    if (sortBy === 'year-desc') return b.year - a.year;
    if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
    return 0;
  });

  currentMovies = filtered;
  renderMovies(currentMovies);
}

// Format Currency
function formatCurrency(num) {
  if (num >= 1000000000) return '$' + (num / 1000000000).toFixed(1) + 'B';
  if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
  return '$' + num.toLocaleString();
}

function renderMovies(movies) {
  resultsCount.textContent = movies.length;
  movieGrid.innerHTML = '';

  if (movies.length === 0) {
    movieGrid.hidden = true;
    noResultsState.hidden = false;
    return;
  }

  movieGrid.hidden = false;
  noResultsState.hidden = true;

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openMovieDetail(movie);

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
      <div class="movie-info">
        <h3 class="movie-title" title="${movie.title}">${movie.title}</h3>
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
        </div>
      </div>
    `;
    movieGrid.appendChild(card);
  });
}

// Watchlist Navigation
document.getElementById('watchlistNavBtn')?.addEventListener('click', () => {
  activeFilter = 'watchlist';
  document.querySelectorAll('.collection-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.collection-pill[data-filter="watchlist"]')?.classList.add('active');
  catalogView.hidden = false;
  detailViewPage.hidden = true;
  applyFiltersAndRender();
});

// Watchlist toggle helper
function toggleWatchlist(movieId) {
  if (watchlist.has(movieId)) {
    watchlist.delete(movieId);
  } else {
    watchlist.add(movieId);
  }
  
  const badge = document.getElementById('watchlistCountBadge');
  if (badge) badge.textContent = watchlist.size;
  
  // Update button if on detail page
  const btn = document.getElementById(`btnWatchlist_${movieId}`);
  if (btn) {
    if (watchlist.has(movieId)) {
      btn.classList.add('added');
      btn.innerHTML = `<i class="fa-solid fa-check"></i> In Watchlist`;
    } else {
      btn.classList.remove('added');
      btn.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Watchlist`;
    }
  }
  
  if (activeFilter === 'watchlist') {
    applyFiltersAndRender();
  }
}

// Editorial Review Generators
function generateBalajiReview(movie) {
  const rating = movie.rating;
  let quote = "";
  let directionScore = Math.min(10, (rating * 1.1).toFixed(1));
  let screenplayScore = Math.min(10, (rating * 1.05).toFixed(1));
  let performanceScore = Math.min(10, (rating * 1.08).toFixed(1));

  if (rating >= 8.0) {
    quote = `"${movie.title} is a cinematic masterpiece. ${movie.director}'s directional vision creates an unmatched atmospheric depth that leaves you mesmerized."`;
  } else if (rating >= 7.0) {
    quote = `"${movie.title} stands out as a thrilling high-octane experience. Excellent character work and compelling story beats make it a must-watch."`;
  } else {
    quote = `"A fascinating entry in the ${movie.genre.join('/')} genre. Solid direction by ${movie.director} with great standout sequence highlights."`;
  }

  return {
    quote,
    directionScore,
    screenplayScore,
    performanceScore
  };
}

function generateSaiReview(movie) {
  const rating = movie.rating;
  let quote = "";
  let visualsScore = Math.min(10, (rating * 1.12).toFixed(1));
  let soundScore = Math.min(10, (rating * 1.06).toFixed(1));
  let pacingScore = Math.min(10, (rating * 1.02).toFixed(1));

  if (rating >= 8.0) {
    quote = `"Visually staggering and acoustically transcendent! The sound design and cinematography of ${movie.title} set a gold standard for modern Hollywood cinema."`;
  } else if (rating >= 7.0) {
    quote = `"Exceptional production values and crisp pacing. ${movie.title} delivers stunning camera work and an immersive audio score throughout."`;
  } else {
    quote = `"Strong visual aesthetics paired with memorable set pieces. A great technical effort that showcases modern filmmaking capabilities."`;
  }

  return {
    quote,
    visualsScore,
    soundScore,
    pacingScore
  };
}

// // Main Full-Screen Flagship Movie Detail Page Renderer
function openMovieDetail(movie) {
  catalogView.hidden = true;
  detailViewPage.hidden = false;
  window.scrollTo(0, 0);

  // Turn off theater mode if navigating
  document.body.classList.remove('theater-active');

  const balaji = generateBalajiReview(movie);
  const sai = generateSaiReview(movie);
  const inWatchlist = watchlist.has(movie.id);

  // Compute master score
  const masterScoreVal = (movie.rating * 1.05 > 10 ? 9.8 : movie.rating * 1.05).toFixed(1);
  let masterLabel = "MUST WATCH";
  if (movie.rating >= 8.5) masterLabel = "CINEMATIC MASTERPIECE";
  else if (movie.rating >= 7.5) masterLabel = "HIGHLY RECOMMENDED";
  else if (movie.rating >= 6.5) masterLabel = "WORTH WATCHING";

  // Box office percentage vs 1 Billion benchmark
  const revenuePercent = Math.min(100, Math.max(10, ((movie.revenue / 1000000000) * 100).toFixed(0)));

  // Find 4 related movies
  const recommendations = moviesData
    .filter(m => m.id !== movie.id && (m.genre.some(g => movie.genre.includes(g)) || m.director === movie.director))
    .slice(0, 4);

  // Key Scene Filmstrip Beats
  const sceneBeats = [
    { title: "Opening Sequence", time: "00:04:12", desc: `Introduction to the world of ${movie.title} with director ${movie.director}'s signature visual style.` },
    { title: "Rising Conflict", time: "00:38:45", desc: `High stakes drama unfolds as character motives clash in pivotal storyline twist.` },
    { title: "Climactic Confrontation", time: "01:24:10", desc: `The breathtaking main climax featuring state-of-the-art sound design and audio score.` },
    { title: "Epilogue & Resolution", time: "02:05:30", desc: `Unforgettable closing chapter delivering emotional resonance and critical acclaim.` }
  ];

  detailShowcase.innerHTML = `
    <div class="fullpage-detail-container">

      <!-- Full-Screen Flagship Hero Stage -->
      <div class="flagship-hero-stage">
        <div class="flagship-backdrop-blur" style="background-image: url('${movie.poster}')"></div>
        <div class="flagship-overlay">
          
          <!-- 3D Parallax Poster Container -->
          <div class="flagship-poster-box" id="posterContainer">
            <div class="cinematic-poster-wrapper" id="poster3D">
              <img src="${movie.poster}" alt="${movie.title}" class="cinematic-poster">
              <div class="cinematic-poster-glow"></div>
            </div>
          </div>

          <!-- Hero Main Content -->
          <div style="flex-grow:1;">
            <h1 class="flagship-title">${movie.title}</h1>
            <p class="flagship-tagline">"${movie.tagline}"</p>

            <div class="cinematic-badge-row">
              <span class="tech-badge gold"><i class="fa-solid fa-award"></i> 4K ULTRA HD</span>
              <span class="tech-badge"><i class="fa-solid fa-tv"></i> HDR10+</span>
              <span class="tech-badge">
                <i class="fa-solid fa-volume-high"></i> DOLBY ATMOS
                <span class="eq-bars">
                  <span class="eq-bar"></span>
                  <span class="eq-bar"></span>
                  <span class="eq-bar"></span>
                  <span class="eq-bar"></span>
                </span>
              </span>
              <span class="tech-badge"><i class="fa-solid fa-user-ninja"></i> ${movie.director}</span>
              <span class="tech-badge"><i class="fa-solid fa-calendar"></i> ${movie.year}</span>
            </div>

            <div class="cinematic-stats-grid" style="margin-top: 1.5rem;">
              <div class="cinematic-stat">
                <span class="cinematic-stat-val"><i class="fa-solid fa-star" style="color:var(--accent)"></i> ${movie.rating}</span>
                <span class="cinematic-stat-lbl">${movie.votes.toLocaleString()} IMDb Votes</span>
              </div>
              <div class="cinematic-stat">
                <span class="cinematic-stat-val">${formatCurrency(movie.revenue)}</span>
                <span class="cinematic-stat-lbl">Global Box Office</span>
              </div>
              <div class="cinematic-stat">
                <span class="cinematic-stat-val">${movie.genre.join(', ')}</span>
                <span class="cinematic-stat-lbl">Classified Genre</span>
              </div>
            </div>

            <div class="cinematic-action-row" style="margin-top: 2rem;">
              <button onclick="playTrailerById(${movie.id})" class="btn-play-trailer">
                <i class="fa-solid fa-play"></i> Watch Trailer
              </button>

              <button id="btnTheaterMode" onclick="toggleTheaterMode()" class="btn-theater-mode">
                <i class="fa-solid fa-lightbulb"></i> Theater Lighting Mode
              </button>

              <button id="btnWatchlist_${movie.id}" onclick="toggleWatchlist(${movie.id})" class="btn-watchlist-toggle ${inWatchlist ? 'added' : ''}">
                <i class="fa-solid ${inWatchlist ? 'fa-check' : 'fa-plus'}"></i> ${inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- FILM REEL & KEY SCENE BEATS STAGE -->
      <div class="filmstrip-section">
        <div class="filmstrip-header">
          <h3 style="color:#fff; font-size:1.4rem; display:flex; align-items:center; gap:0.5rem;">
            <i class="fa-solid fa-film" style="color:var(--primary)"></i> Key Scene Beats & Timeline Breakdown
          </h3>
          <span style="color:var(--text-muted); font-size:0.85rem;">Filmstrip highlights</span>
        </div>

        <div class="filmstrip-track">
          ${sceneBeats.map((beat, idx) => `
            <div class="film-frame-card">
              <img src="${movie.poster}" alt="${beat.title}" class="film-frame-thumb">
              <div class="film-frame-body">
                <span class="film-frame-time">${beat.time} • SCENE ${idx + 1}</span>
                <h4 class="film-frame-title">${beat.title}</h4>
                <p class="film-frame-desc">${beat.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- BOX OFFICE & POPULARITY METRICS STAGE -->
      <div class="metrics-visualizer-section">
        <h3 style="color:#fff; font-size:1.4rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">
          <i class="fa-solid fa-chart-line" style="color:var(--accent)"></i> Box Office & Popularity Metrics
        </h3>
        <p style="color:var(--text-muted); font-size:0.9rem;">Global commercial performance benchmarked against Hollywood $1 Billion blockbusters</p>

        <div class="benchmark-bar-container">
          <div style="display:flex; justify-content:space-between; font-size:0.9rem; font-weight:700; color:#fff;">
            <span>Gross Revenue: ${formatCurrency(movie.revenue)}</span>
            <span>Blockbuster Benchmark ($1.0B)</span>
          </div>
          <div class="benchmark-bar-bg">
            <div class="benchmark-bar-fill" style="width: ${revenuePercent}%"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted);">
            <span>${movie.title} Box Office</span>
            <span>${revenuePercent}% of $1 Billion Milestone</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="cinematic-tabs-container">
        <button class="cinematic-tab-btn active" onclick="switchDetailTab('editorialTab', this)">
          <i class="fa-solid fa-award"></i> Cinematic Reviews by Us (Balaji & Sai)
        </button>
        <button class="cinematic-tab-btn" onclick="switchDetailTab('overviewTab', this)">
          <i class="fa-solid fa-align-left"></i> Full Synopsis & Cast
        </button>
        <button class="cinematic-tab-btn" onclick="switchDetailTab('communityTab', this)">
          <i class="fa-solid fa-comments"></i> Community Reviews
        </button>
      </div>

      <!-- TAB 1: EDITORIAL REVIEWS (Balaji Shankar & Sai Kumar) -->
      <div id="editorialTab" class="tab-panel active">
        
        <!-- Editorial Master Banner -->
        <div class="editorial-header-banner">
          <div class="editorial-header-title">
            <div class="editorial-badge-icon"><i class="fa-solid fa-star"></i></div>
            <div>
              <h3 style="font-size: 1.5rem; color:#fff;">MovieTalk Editorial Verdict</h3>
              <p style="color:var(--text-muted); font-size:0.9rem;">Exclusive in-depth film analysis by lead critics Balaji Shankar & Sai Kumar</p>
            </div>
          </div>

          <div class="editorial-master-score">
            <div class="svg-gauge-wrapper">
              <svg class="svg-gauge" viewBox="0 0 80 80">
                <circle class="gauge-bg" cx="40" cy="40" r="35"></circle>
                <circle class="gauge-fill" id="gaugeFill" cx="40" cy="40" r="35"></circle>
              </svg>
              <div class="svg-gauge-text">${masterScoreVal}</div>
            </div>

            <div class="master-score-label">
              <div>Score</div>
              <div style="color:#fff; font-weight:700;">${masterLabel}</div>
            </div>
          </div>
        </div>

        <!-- Reviewer Cards Grid -->
        <div class="reviewers-cards-grid">
          
          <!-- Balaji Shankar Review Card -->
          <div class="reviewer-card">
            <div class="reviewer-profile">
              <div class="reviewer-avatar">BS</div>
              <div class="reviewer-details">
                <h4>Balaji Shankar <i class="fa-solid fa-circle-check verified-badge" title="Verified Lead Analyst"></i></h4>
                <span class="reviewer-role">Lead Film Analyst & Critic</span>
              </div>
            </div>

            <div class="reviewer-quote">
              ${balaji.quote}
            </div>

            <div class="reviewer-breakdown">
              <div class="metric-row">
                <span class="metric-name">Direction & Vision</span>
                <div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${balaji.directionScore * 10}%"></div></div>
                <span class="metric-score">${balaji.directionScore}/10</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">Screenplay & Story</span>
                <div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${balaji.screenplayScore * 10}%"></div></div>
                <span class="metric-score">${balaji.screenplayScore}/10</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">Acting Performance</span>
                <div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${balaji.performanceScore * 10}%"></div></div>
                <span class="metric-score">${balaji.performanceScore}/10</span>
              </div>
            </div>
          </div>

          <!-- Sai Kumar Review Card -->
          <div class="reviewer-card">
            <div class="reviewer-profile">
              <div class="reviewer-avatar" style="background: linear-gradient(135deg, #e50914 0%, #3498db 100%); color:#fff;">SK</div>
              <div class="reviewer-details">
                <h4>Sai Kumar <i class="fa-solid fa-circle-check verified-badge" title="Verified Tech Critic"></i></h4>
                <span class="reviewer-role">Co-Founder & Audio-Visual Critic</span>
              </div>
            </div>

            <div class="reviewer-quote">
              ${sai.quote}
            </div>

            <div class="reviewer-breakdown">
              <div class="metric-row">
                <span class="metric-name">Cinematography</span>
                <div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${sai.visualsScore * 10}%"></div></div>
                <span class="metric-score">${sai.visualsScore}/10</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">Sound & Score</span>
                <div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${sai.soundScore * 10}%"></div></div>
                <span class="metric-score">${sai.soundScore}/10</span>
              </div>
              <div class="metric-row">
                <span class="metric-name">Pacing & Edit</span>
                <div class="metric-bar-bg"><div class="metric-bar-fill" style="width: ${sai.pacingScore * 10}%"></div></div>
                <span class="metric-score">${sai.pacingScore}/10</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- TAB 2: OVERVIEW & SPECS -->
      <div id="overviewTab" class="tab-panel">
        <div class="overview-grid">
          <div class="overview-box">
            <h3><i class="fa-solid fa-align-left" style="color:var(--primary)"></i> Full Synopsis</h3>
            <p class="overview-text">${movie.synopsis}</p>

            <h3 style="margin-top: 2rem;"><i class="fa-solid fa-masks-theater" style="color:var(--accent)"></i> Production Breakdown</h3>
            <p class="overview-text">
              Directed by <strong>${movie.director}</strong> and released in <strong>${movie.year}</strong>. Categorized as <strong>${movie.genre.join(', ')}</strong> with over <strong>${movie.votes.toLocaleString()}</strong> verified audience ratings and global revenue reaching <strong>${formatCurrency(movie.revenue)}</strong>.
            </p>
          </div>

          <div class="overview-box">
            <h3><i class="fa-solid fa-circle-info" style="color:var(--accent)"></i> Spec Sheet</h3>
            <ul style="list-style: none; display:flex; flex-direction:column; gap:1rem; color:#d1d1d1; margin-top:1rem;">
              <li><strong>Director:</strong> ${movie.director}</li>
              <li><strong>Release Year:</strong> ${movie.year}</li>
              <li><strong>IMDb Score:</strong> ⭐ ${movie.rating} / 10</li>
              <li><strong>Total Votes:</strong> ${movie.votes.toLocaleString()}</li>
              <li><strong>Box Office:</strong> ${formatCurrency(movie.revenue)}</li>
              <li><strong>Audio/Video:</strong> 4K HDR Dolby Atmos</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- TAB 3: COMMUNITY REVIEWS -->
      <div id="communityTab" class="tab-panel">
        <div class="community-reviews-wrapper">
          
          <div class="add-review-card">
            <h3><i class="fa-solid fa-pen-to-square" style="color:var(--primary)"></i> Write a Review</h3>
            
            <div class="star-rating-input" id="starRatingInput">
              <i class="fa-solid fa-star" data-rating="1"></i>
              <i class="fa-solid fa-star" data-rating="2"></i>
              <i class="fa-solid fa-star" data-rating="3"></i>
              <i class="fa-solid fa-star" data-rating="4"></i>
              <i class="fa-solid fa-star" data-rating="5"></i>
            </div>

            <form id="userReviewForm" onsubmit="handleReviewSubmit(event, ${movie.id})">
              <div class="review-form-group">
                <label>Your Name</label>
                <input type="text" id="reviewerNameInput" class="review-input-field" placeholder="e.g. Alex Harrison" required>
              </div>
              
              <div class="review-form-group">
                <label>Your Review</label>
                <textarea id="reviewTextInput" class="review-input-field" placeholder="What did you think of the movie?" required></textarea>
              </div>

              <button type="submit" class="btn-submit-review">Submit Review</button>
            </form>
          </div>

          <div class="user-reviews-list" id="userReviewsList_${movie.id}">
            <!-- Dynamic Community Reviews Render Here -->
          </div>

        </div>
      </div>

      <!-- RECOMMENDED MOVIES SECTION -->
      <div class="recommendations-section">
        <div class="recommendations-header">
          <h3 style="color:#fff; font-size:1.3rem;"><i class="fa-solid fa-clapperboard" style="color:var(--primary)"></i> You Might Also Like</h3>
          <span style="color:var(--text-muted); font-size:0.85rem;">Based on genre & director</span>
        </div>
        
        <div class="recommendations-grid">
          ${recommendations.map(rec => `
            <div class="rec-card" onclick="openMovieDetailById(${rec.id})">
              <img src="${rec.poster}" alt="${rec.title}" class="rec-poster" loading="lazy">
              <div class="rec-info">
                <div class="rec-title" title="${rec.title}">${rec.title}</div>
                <div class="rec-meta">
                  <span>${rec.year}</span>
                  <span>⭐ ${rec.rating}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // Initialize interactive features
  init3DParallax();
  initSVGGauge(parseFloat(masterScoreVal));
  initStarInput();
  renderCommunityReviews(movie.id);
}

// 3D Parallax Poster Tilt Effect
function init3DParallax() {
  const container = document.getElementById('posterContainer');
  const card = document.getElementById('poster3D');
  if (!container || !card) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
}

// SVG Radial Score Gauge Animation
function initSVGGauge(score) {
  setTimeout(() => {
    const gaugeFill = document.getElementById('gaugeFill');
    if (!gaugeFill) return;
    const circumference = 220; // 2 * PI * 35 ~ 220
    const offset = circumference - (circumference * (score / 10));
    gaugeFill.style.strokeDashoffset = offset;
  }, 100);
}

// Theater Mode Toggle
function toggleTheaterMode() {
  document.body.classList.toggle('theater-active');
  const btn = document.getElementById('btnTheaterMode');
  if (btn) {
    if (document.body.classList.contains('theater-active')) {
      btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Turn On Lights`;
    } else {
      btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Theater Lighting Mode`;
    }
  }
}

// Open Movie Detail by ID helper
function openMovieDetailById(movieId) {
  const movie = moviesData.find(m => m.id === movieId);
  if (movie) openMovieDetail(movie);
}


// Tab Switcher
function switchDetailTab(tabId, btnElem) {
  document.querySelectorAll('.cinematic-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  
  btnElem.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');
}

// Star Rating Interactive Input
let selectedRating = 5;
function initStarInput() {
  const container = document.getElementById('starRatingInput');
  if (!container) return;

  const stars = container.querySelectorAll('i');
  stars.forEach(star => {
    star.addEventListener('click', (e) => {
      selectedRating = parseInt(e.target.dataset.rating);
      updateStarsUI(stars, selectedRating);
    });

    star.addEventListener('mouseenter', (e) => {
      const hoverRating = parseInt(e.target.dataset.rating);
      updateStarsUI(stars, hoverRating);
    });
  });

  container.addEventListener('mouseleave', () => {
    updateStarsUI(stars, selectedRating);
  });

  updateStarsUI(stars, selectedRating);
}

function updateStarsUI(stars, rating) {
  stars.forEach(star => {
    const val = parseInt(star.dataset.rating);
    if (val <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Community Review Management
function getStoredReviews(movieId) {
  try {
    const data = localStorage.getItem(`movietalk_reviews_${movieId}`);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function renderCommunityReviews(movieId) {
  const listElem = document.getElementById(`userReviewsList_${movieId}`);
  if (!listElem) return;

  const reviews = getStoredReviews(movieId);

  if (reviews.length === 0) {
    listElem.innerHTML = `
      <div class="user-review-item" style="text-align:center; padding: 3rem 1rem;">
        <i class="fa-solid fa-comment-dots" style="font-size: 2.5rem; color:var(--text-muted); margin-bottom:1rem;"></i>
        <h4 style="color:#fff;">No community reviews yet</h4>
        <p style="color:var(--text-muted); font-size:0.9rem;">Be the first film enthusiast to review this movie!</p>
      </div>
    `;
    return;
  }

  listElem.innerHTML = reviews.map((rev, idx) => `
    <div class="user-review-item">
      <div class="user-review-header">
        <div class="user-review-author">
          <div class="user-avatar">${rev.author.substring(0, 2).toUpperCase()}</div>
          <div>
            <div style="font-weight:700; color:#fff;">${rev.author}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${rev.date}</div>
          </div>
        </div>
        <div class="user-review-stars">
          ${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}
        </div>
      </div>
      <div class="user-review-body">
        "${rev.text}"
      </div>
      <div class="user-review-footer">
        <span><i class="fa-solid fa-shield-halved" style="color:#2ecc71"></i> Verified Audience</span>
        <button class="btn-like-review" onclick="likeUserReview(${movieId}, ${idx})">
          <i class="fa-solid fa-thumbs-up"></i> Helpful (${rev.likes || 0})
        </button>
      </div>
    </div>
  `).join('');
}

function handleReviewSubmit(e, movieId) {
  e.preventDefault();
  const nameInput = document.getElementById('reviewerNameInput');
  const textInput = document.getElementById('reviewTextInput');

  if (!nameInput.value.trim() || !textInput.value.trim()) return;

  const newReview = {
    author: nameInput.value.trim(),
    rating: selectedRating,
    text: textInput.value.trim(),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    likes: 0
  };

  const current = getStoredReviews(movieId);
  current.unshift(newReview);
  localStorage.setItem(`movietalk_reviews_${movieId}`, JSON.stringify(current));

  nameInput.value = '';
  textInput.value = '';

  renderCommunityReviews(movieId);
}

function likeUserReview(movieId, index) {
  const current = getStoredReviews(movieId);
  if (current[index]) {
    current[index].likes = (current[index].likes || 0) + 1;
    localStorage.setItem(`movietalk_reviews_${movieId}`, JSON.stringify(current));
    renderCommunityReviews(movieId);
  }
}

function playTrailerById(movieId) {
  const movie = moviesData.find(m => m.id === movieId);
  if (!movie) return;
  
  const modal = document.getElementById('trailerModal');
  const iframe = document.getElementById('trailerIframe');
  
  if (movie.trailer && movie.trailer.includes('v=')) {
    const videoId = movie.trailer.split('v=')[1].split('&')[0];
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.hidden = false;
  } else {
    const query = encodeURIComponent(`${movie.title} ${movie.year} official trailer`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  }
}

// Modal closing handlers
document.getElementById('closeTrailerBtn')?.addEventListener('click', closeTrailerModal);
document.getElementById('trailerModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'trailerModal') closeTrailerModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTrailerModal();
});

function closeTrailerModal() {
  const modal = document.getElementById('trailerModal');
  const iframe = document.getElementById('trailerIframe');
  if (iframe) iframe.src = '';
  if (modal) modal.hidden = true;
}

// Init
applyFiltersAndRender();


