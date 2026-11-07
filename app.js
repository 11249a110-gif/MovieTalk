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

// Search Dropdown
const searchDropdown = document.getElementById('searchDropdown');

// Search functionality with autocomplete dropdown
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase();
  clearSearchBtn.hidden = searchQuery.length === 0;
  showSearchDropdown(searchQuery);
  applyFiltersAndRender();
});

searchInput.addEventListener('focus', () => {
  if (searchQuery.length > 0) {
    showSearchDropdown(searchQuery);
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    searchDropdown.hidden = true;
  }
});

function showSearchDropdown(query) {
  if (!query || query.length < 1) {
    searchDropdown.hidden = true;
    return;
  }

  const matches = moviesData.filter(m =>
    m.title.toLowerCase().includes(query) ||
    m.director.toLowerCase().includes(query) ||
    m.year.toString().includes(query) ||
    m.genre.some(g => g.toLowerCase().includes(query))
  ).slice(0, 8);

  if (matches.length === 0) {
    searchDropdown.innerHTML = `
      <div class="search-dropdown-empty">
        <i class="fa-solid fa-search"></i> No movies found for "<strong>${query}</strong>"
      </div>
    `;
    searchDropdown.hidden = false;
    return;
  }

  searchDropdown.innerHTML = `
    <div class="search-dropdown-header">
      <span><i class="fa-solid fa-magnifying-glass"></i> Results for "<strong>${query}</strong>"</span>
      <span class="search-dropdown-count">${matches.length}${matches.length === 8 ? '+' : ''} found</span>
    </div>
    ${matches.map(m => `
      <div class="search-dropdown-item" data-movie-id="${m.id}">
        <img src="${m.poster}" alt="${m.title}" class="search-dropdown-poster" loading="lazy">
        <div class="search-dropdown-info">
          <div class="search-dropdown-title">${highlightMatch(m.title, query)}</div>
          <div class="search-dropdown-meta">
            <span>${m.year}</span>
            <span>•</span>
            <span>${m.genre.join(', ')}</span>
            <span>•</span>
            <span class="search-dropdown-rating"><i class="fa-solid fa-star"></i> ${m.rating}</span>
          </div>
          <div class="search-dropdown-director">${m.director}</div>
        </div>
      </div>
    `).join('')}
  `;

  // Add click handlers
  searchDropdown.querySelectorAll('.search-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const movieId = parseInt(item.dataset.movieId);
      const movie = moviesData.find(m => m.id === movieId);
      if (movie) {
        searchDropdown.hidden = true;
        openMovieDetail(movie);
      }
    });
  });

  searchDropdown.hidden = false;
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  const before = text.substring(0, idx);
  const match = text.substring(idx, idx + query.length);
  const after = text.substring(idx + query.length);
  return `${before}<mark class="search-highlight">${match}</mark>${after}`;
}

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.hidden = true;
  searchDropdown.hidden = true;
  applyFiltersAndRender();
});

// Reset Search
document.getElementById('resetSearchBtn').addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  activeFilter = 'all';
  activeGenre = 'ALL';
  searchDropdown.hidden = true;
  
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

// Streaming platform availability engine
// Assigns platforms based on movie properties (director patterns, genre, year, revenue, etc.)
const STREAMING_PLATFORMS = {
  netflix: {
    id: 'netflix',
    name: 'Netflix',
    type: 'subscription',
    typeLabel: 'Subscription',
    icon: 'fa-solid fa-n',
    color: '#E50914',
    bgColor: 'rgba(229, 9, 20, 0.12)',
    borderColor: 'rgba(229, 9, 20, 0.45)',
    btnGradient: 'linear-gradient(135deg, #e50914 0%, #b80710 100%)',
    quality: '4K Ultra HD • Dolby Atmos',
    priceText: 'Included with plan',
    url: (title) => `https://www.netflix.com/search?q=${encodeURIComponent(title)}`,
    label: 'Watch on Netflix',
    cssClass: 'platform-netflix'
  },
  disney: {
    id: 'disney',
    name: 'Disney+ Hotstar',
    type: 'subscription',
    typeLabel: 'Subscription',
    icon: 'fa-solid fa-wand-magic-sparkles',
    color: '#1CE783',
    bgColor: 'rgba(28, 231, 131, 0.12)',
    borderColor: 'rgba(28, 231, 131, 0.45)',
    btnGradient: 'linear-gradient(135deg, #0f75bd 0%, #1ce783 100%)',
    quality: '4K • IMAX Enhanced • 5.1 Audio',
    priceText: 'Included with membership',
    url: (title) => `https://www.hotstar.com/in/search?q=${encodeURIComponent(title)}`,
    label: 'Watch on Disney+',
    cssClass: 'platform-disney'
  },
  prime: {
    id: 'prime',
    name: 'Prime Video',
    type: 'rent',
    typeLabel: 'Stream / Rent',
    icon: 'fa-solid fa-play',
    color: '#00A8E1',
    bgColor: 'rgba(0, 168, 225, 0.12)',
    borderColor: 'rgba(0, 168, 225, 0.45)',
    btnGradient: 'linear-gradient(135deg, #00a8e1 0%, #007eb9 100%)',
    quality: '4K UHD • HDR10+ • Dolby Atmos',
    priceText: 'Watch on Prime or Rent from $3.99',
    url: (title) => `https://www.primevideo.com/search?phrase=${encodeURIComponent(title)}`,
    label: 'Watch on Prime',
    cssClass: 'platform-prime'
  },
  appletv: {
    id: 'appletv',
    name: 'Apple TV+',
    type: 'rent',
    typeLabel: 'Rent / Buy',
    icon: 'fa-brands fa-apple',
    color: '#FFFFFF',
    bgColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    btnGradient: 'linear-gradient(135deg, #ffffff 0%, #d1d1d1 100%)',
    btnTextColor: '#000',
    quality: '4K Dolby Vision • Spatial Audio',
    priceText: 'Rent $3.99 • Buy $14.99',
    url: (title) => `https://tv.apple.com/search?term=${encodeURIComponent(title)}`,
    label: 'Watch on Apple TV',
    cssClass: 'platform-appletv'
  },
  hbomax: {
    id: 'hbomax',
    name: 'JioCinema',
    type: 'subscription',
    typeLabel: 'Subscription',
    icon: 'fa-solid fa-circle-play',
    color: '#E637BF',
    bgColor: 'rgba(230, 55, 191, 0.12)',
    borderColor: 'rgba(230, 55, 191, 0.45)',
    btnGradient: 'linear-gradient(135deg, #e637bf 0%, #9810fa 100%)',
    quality: '4K Ultra HD • Dolby Audio',
    priceText: 'Included with Premium',
    url: (title) => `https://www.jiocinema.com/search/${encodeURIComponent(title)}`,
    label: 'Watch on JioCinema',
    cssClass: 'platform-jiocinema'
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube Movies',
    type: 'rent',
    typeLabel: 'Rent / Buy',
    icon: 'fa-brands fa-youtube',
    color: '#FF0000',
    bgColor: 'rgba(255, 0, 0, 0.12)',
    borderColor: 'rgba(255, 0, 0, 0.45)',
    btnGradient: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
    quality: 'Full HD • 4K UHD Available',
    priceText: 'Rent from $3.99 • Buy from $9.99',
    url: (title) => `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' full movie')}`,
    label: 'Rent / Buy on YouTube',
    cssClass: 'platform-youtube'
  },
  justwatch: {
    id: 'justwatch',
    name: 'JustWatch',
    type: 'aggregator',
    typeLabel: 'All Providers',
    icon: 'fa-solid fa-magnifying-glass-location',
    color: '#FFD700',
    bgColor: 'rgba(255, 215, 0, 0.08)',
    borderColor: 'rgba(255, 215, 0, 0.35)',
    btnGradient: 'linear-gradient(135deg, #ffd700 0%, #f39c12 100%)',
    btnTextColor: '#000',
    quality: 'Real-Time Price & Platform Finder',
    priceText: 'Compare 50+ streaming platforms',
    url: (title) => `https://www.justwatch.com/us/search?q=${encodeURIComponent(title)}`,
    label: 'Compare on JustWatch',
    cssClass: 'platform-justwatch'
  }
};

function getStreamingPlatforms(movie) {
  const platforms = [];
  const { genre, director, year, rating, revenue, title, id } = movie;
  const genres = genre || [];
  const seed = id * 7 + year;

  // Disney+ Hotstar: Animation, superhero, family, sci-fi adventure (Disney/Marvel/Pixar/Star Wars pattern)
  const disneyGenres = ['Animation', 'Fantasy'];
  const disneyDirectors = ['James Gunn', 'Jon Favreau', 'Taika Waititi', 'Ryan Coogler', 'Anthony Russo', 'Joe Russo', 'Joss Whedon', 'Brad Bird', 'Pete Docter', 'Andrew Stanton', 'Lee Unkrich', 'Rian Johnson', 'J.J. Abrams', 'George Lucas', 'Kenneth Branagh', 'Anna Boden'];
  if (disneyDirectors.includes(director) || 
      genres.some(g => disneyGenres.includes(g)) ||
      (genres.includes('Action') && genres.includes('Adventure') && revenue > 400000000)) {
    platforms.push('disney');
  }

  // Netflix: Wide variety, especially drama, thriller, horror, sci-fi, indie
  const netflixGenres = ['Thriller', 'Horror', 'Mystery', 'Crime'];
  if (netflixGenres.some(g => genres.includes(g)) ||
      (genres.includes('Drama') && rating >= 7.0) ||
      (genres.includes('Sci-Fi') && year >= 2010) ||
      (seed % 5 === 0 && year >= 2005)) {
    platforms.push('netflix');
  }

  // Prime Video: Rent/buy nearly everything, plus originals
  const primeCondition = revenue > 50000000 || rating >= 7.0 || year >= 2008 || seed % 3 === 0;
  if (primeCondition) {
    platforms.push('prime');
  }

  // Apple TV+: Premium movies, award contenders
  if ((rating >= 7.5 && revenue > 100000000) ||
      (genres.includes('Drama') && rating >= 8.0) ||
      (genres.includes('Biography') && rating >= 7.5) ||
      (seed % 7 === 0)) {
    platforms.push('appletv');
  }

  // JioCinema (HBO Max content in India): Warner Bros / DC pattern
  const hboDirectors = ['Christopher Nolan', 'Denis Villeneuve', 'Zack Snyder', 'Peter Jackson', 'Clint Eastwood', 'Todd Phillips', 'Patty Jenkins', 'James Wan', 'David Fincher'];
  if (hboDirectors.includes(director) ||
      (genres.includes('Crime') && genres.includes('Drama')) ||
      (seed % 6 === 0 && year >= 2000)) {
    platforms.push('hbomax');
  }

  // YouTube: Almost all for rent/buy
  if (revenue > 30000000 || seed % 4 === 0) {
    platforms.push('youtube');
  }

  // Ensure at least 2 platforms, always include JustWatch as a fallback
  if (platforms.length < 2) {
    if (!platforms.includes('prime')) platforms.push('prime');
    if (!platforms.includes('netflix') && platforms.length < 2) platforms.push('netflix');
  }

  // Always add JustWatch at the end as a comprehensive finder
  platforms.push('justwatch');

  // Remove duplicates
  return [...new Set(platforms)];
}

function buildWatchItOnHTML(movie) {
  const platformKeys = getStreamingPlatforms(movie);
  
  return platformKeys.map(key => {
    const p = STREAMING_PLATFORMS[key];
    if (!p) return '';
    return `
      <a href="${p.url(movie.title)}" target="_blank" rel="noopener" class="watch-platform-card ${p.cssClass}"
         style="--platform-color: ${p.color}; --platform-bg: ${p.bgColor}; --platform-border: ${p.borderColor};">
        <div class="watch-platform-icon-wrap" style="color:${p.color}; background:${p.bgColor}; border:1px solid ${p.borderColor};">
          <i class="${p.icon}"></i>
        </div>
        <div class="watch-platform-details">
          <div class="watch-platform-title-row">
            <span class="watch-platform-name">${p.name}</span>
            <span class="watch-platform-type-pill" style="color:${p.color}; background:${p.bgColor};">${p.typeLabel}</span>
          </div>
          <span class="watch-platform-quality">${p.quality}</span>
          <span class="watch-platform-price">${p.priceText}</span>
        </div>
        <div class="watch-platform-arrow" style="background:${p.btnGradient}; color:${p.btnTextColor || '#fff'};">
          <span>Watch</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </a>
    `;
  }).join('');
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

  // Vote count formatting
  const votesFormatted = movie.votes >= 1000000 ? (movie.votes / 1000000).toFixed(1) + 'M' : movie.votes >= 1000 ? (movie.votes / 1000).toFixed(0) + 'K' : movie.votes;

  // Runtime estimate (based on genre)
  const runtimeMins = movie.genre.includes('Animation') ? Math.floor(85 + (movie.id % 20)) : Math.floor(110 + (movie.id % 40));
  const runtimeH = Math.floor(runtimeMins / 60);
  const runtimeM = runtimeMins % 60;
  const runtimeStr = `${runtimeH}h ${runtimeM}m`;

  // Find 6 related movies
  const recommendations = moviesData
    .filter(m => m.id !== movie.id && (m.genre.some(g => movie.genre.includes(g)) || m.director === movie.director))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Genre badges with colors
  const genreColors = {
    'Action': '#e50914', 'Adventure': '#2ecc71', 'Animation': '#e67e22', 'Biography': '#9b59b6',
    'Comedy': '#f1c40f', 'Crime': '#95a5a6', 'Drama': '#3498db', 'Horror': '#8e44ad',
    'Mystery': '#1abc9c', 'Romance': '#e91e63', 'Sci-Fi': '#00bcd4', 'Thriller': '#ff5722',
    'Fantasy': '#7c4dff'
  };

  // Streaming platforms
  const watchItOnHTML = buildWatchItOnHTML(movie);

  detailShowcase.innerHTML = `
    <div class="fullpage-detail-container">

      <!-- ========== HERO STAGE ========== -->
      <div class="flagship-hero-stage">
        <div class="flagship-backdrop-blur" style="background-image: url('${movie.poster}')"></div>
        <div class="flagship-hero-gradient"></div>
        <div class="flagship-overlay">
          
          <!-- 3D Parallax Poster -->
          <div class="flagship-poster-box" id="posterContainer">
            <div class="cinematic-poster-wrapper" id="poster3D">
              <img src="${movie.poster}" alt="${movie.title}" class="cinematic-poster">
              <div class="cinematic-poster-glow"></div>
              <div class="poster-rating-badge">
                <i class="fa-solid fa-star"></i> ${movie.rating}
              </div>
            </div>
          </div>

          <!-- Hero Content -->
          <div class="flagship-hero-content">
            
            <!-- Genre Tags -->
            <div class="genre-tag-row">
              ${movie.genre.map(g => `<span class="genre-tag" style="--genre-color: ${genreColors[g] || '#e50914'}">${g}</span>`).join('')}
              <span class="year-tag"><i class="fa-regular fa-calendar"></i> ${movie.year}</span>
              <span class="runtime-tag"><i class="fa-regular fa-clock"></i> ${runtimeStr}</span>
            </div>

            <h1 class="flagship-title">${movie.title}</h1>
            <p class="flagship-tagline">"${movie.tagline}"</p>

            <!-- Director & Tech Badges -->
            <div class="director-badge-row">
              <div class="director-chip">
                <div class="director-avatar"><i class="fa-solid fa-clapperboard"></i></div>
                <div>
                  <span class="director-label">Directed by</span>
                  <span class="director-name">${movie.director}</span>
                </div>
              </div>
              <div class="tech-chips">
                <span class="tech-chip gold"><i class="fa-solid fa-award"></i> 4K UHD</span>
                <span class="tech-chip"><i class="fa-solid fa-tv"></i> HDR10+</span>
                <span class="tech-chip">
                  <i class="fa-solid fa-volume-high"></i> ATMOS
                  <span class="eq-bars">
                    <span class="eq-bar"></span><span class="eq-bar"></span>
                    <span class="eq-bar"></span><span class="eq-bar"></span>
                  </span>
                </span>
              </div>
            </div>

            <!-- Quick Stats Row -->
            <div class="hero-quick-stats">
              <div class="quick-stat">
                <div class="quick-stat-icon" style="background: rgba(255,215,0,0.15);">
                  <i class="fa-solid fa-star" style="color: var(--accent);"></i>
                </div>
                <div>
                  <span class="quick-stat-val">${movie.rating}<span class="quick-stat-sub">/10</span></span>
                  <span class="quick-stat-lbl">${votesFormatted} votes</span>
                </div>
              </div>
              <div class="stat-divider"></div>
              <div class="quick-stat">
                <div class="quick-stat-icon" style="background: rgba(46,204,113,0.15);">
                  <i class="fa-solid fa-sack-dollar" style="color: #2ecc71;"></i>
                </div>
                <div>
                  <span class="quick-stat-val">${formatCurrency(movie.revenue)}</span>
                  <span class="quick-stat-lbl">Box Office</span>
                </div>
              </div>
              <div class="stat-divider"></div>
              <div class="quick-stat">
                <div class="quick-stat-icon" style="background: rgba(229,9,20,0.15);">
                  <i class="fa-solid fa-fire" style="color: var(--primary);"></i>
                </div>
                <div>
                  <span class="quick-stat-val">${masterScoreVal}</span>
                  <span class="quick-stat-lbl">${masterLabel}</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="hero-action-buttons">
              <button onclick="playTrailerById(${movie.id})" class="btn-play-trailer">
                <i class="fa-solid fa-play"></i> Watch Trailer
              </button>

              <button onclick="openWatchItOn(${movie.id})" class="btn-watch-it-on" id="btnWatchItOn_${movie.id}">
                <i class="fa-solid fa-tv"></i> Watch It On
                <span class="watch-count-badge">${getStreamingPlatforms(movie).length - 1}+ apps</span>
              </button>

              <button id="btnWatchlist_${movie.id}" onclick="toggleWatchlist(${movie.id})" class="btn-watchlist-toggle ${inWatchlist ? 'added' : ''}">
                <i class="fa-solid ${inWatchlist ? 'fa-check' : 'fa-plus'}"></i> ${inWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
              </button>
            </div>

            <!-- Watch It On Expandable Panel -->
            <div id="watchItOnPanel_${movie.id}" class="watch-it-on-panel" hidden>
              <div class="watch-it-on-header">
                <div class="watch-it-on-title-area">
                  <h4><i class="fa-solid fa-tv"></i> Where to Watch</h4>
                  <span class="watch-it-on-subtitle">"${movie.title}" is available on these platforms</span>
                </div>
                <button onclick="document.getElementById('watchItOnPanel_${movie.id}').hidden = true" class="watch-it-on-close">&times;</button>
              </div>
              <div class="watch-it-on-grid">
                ${watchItOnHTML}
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ========== SYNOPSIS & INFO CARDS ========== -->
      <div class="detail-info-strip">
        <div class="info-strip-card synopsis-card">
          <div class="info-strip-icon"><i class="fa-solid fa-scroll"></i></div>
          <div>
            <h4>Synopsis</h4>
            <p>${movie.synopsis}</p>
          </div>
        </div>
        <div class="info-strip-card">
          <div class="info-strip-icon" style="background: rgba(255,215,0,0.15);"><i class="fa-solid fa-trophy" style="color: var(--accent);"></i></div>
          <div>
            <h4>Box Office Performance</h4>
            <div class="mini-bar-wrap">
              <div class="mini-bar-track">
                <div class="mini-bar-fill" style="width: ${revenuePercent}%"></div>
              </div>
              <span class="mini-bar-label">${formatCurrency(movie.revenue)} • ${revenuePercent}% of $1B</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== NAVIGATION TABS ========== -->
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

      <!-- TAB 1: EDITORIAL REVIEWS -->
      <div id="editorialTab" class="tab-panel active">
        
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

        <div class="reviewers-cards-grid">
          
          <div class="reviewer-card">
            <div class="reviewer-profile">
              <div class="reviewer-avatar">BS</div>
              <div class="reviewer-details">
                <h4>Balaji Shankar <i class="fa-solid fa-circle-check verified-badge" title="Verified Lead Analyst"></i></h4>
                <span class="reviewer-role">Lead Film Analyst & Critic</span>
              </div>
            </div>
            <div class="reviewer-quote">${balaji.quote}</div>
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

          <div class="reviewer-card">
            <div class="reviewer-profile">
              <div class="reviewer-avatar" style="background: linear-gradient(135deg, #e50914 0%, #3498db 100%); color:#fff;">SK</div>
              <div class="reviewer-details">
                <h4>Sai Kumar <i class="fa-solid fa-circle-check verified-badge" title="Verified Tech Critic"></i></h4>
                <span class="reviewer-role">Co-Founder & Audio-Visual Critic</span>
              </div>
            </div>
            <div class="reviewer-quote">${sai.quote}</div>
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
              <li><strong>Runtime:</strong> ${runtimeStr}</li>
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

      <!-- ========== RECOMMENDED MOVIES ========== -->
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

// (Theater mode removed)

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

// Current active movie for watch options modal
let currentWatchMovie = null;
let currentWatchFilter = 'all';

// Watch It On Modal & Panel
function openWatchItOn(movieId) {
  const movie = moviesData.find(m => m.id === movieId);
  if (!movie) return;

  currentWatchMovie = movie;
  currentWatchFilter = 'all';
  renderWatchModal(movie, 'all');

  const modal = document.getElementById('watchModal');
  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  // Also toggle inline panel if available
  const panel = document.getElementById(`watchItOnPanel_${movieId}`);
  if (panel) {
    panel.hidden = false;
  }
}

function renderWatchModal(movie, filterType = 'all') {
  const container = document.getElementById('watchModalContent');
  if (!container) return;

  currentWatchFilter = filterType;
  const platformKeys = getStreamingPlatforms(movie);
  const allPlatforms = platformKeys.map(k => STREAMING_PLATFORMS[k]).filter(Boolean);

  const subPlatforms = allPlatforms.filter(p => p.type === 'subscription');
  const rentPlatforms = allPlatforms.filter(p => p.type === 'rent');

  let filtered = allPlatforms;
  if (filterType === 'subscription') {
    filtered = subPlatforms;
  } else if (filterType === 'rent') {
    filtered = rentPlatforms;
  }

  container.innerHTML = `
    <!-- Modal Header -->
    <div class="watch-modal-hero">
      <img src="${movie.poster}" alt="${movie.title}" class="watch-modal-poster">
      <div class="watch-modal-header-info">
        <div class="watch-modal-badge">
          <i class="fa-solid fa-circle-play"></i> OFFICIAL STREAMING AVAILABILITY
        </div>
        <h2 class="watch-modal-title">${movie.title}</h2>
        <div class="watch-modal-meta">
          <span><i class="fa-regular fa-calendar"></i> ${movie.year}</span>
          <span class="meta-dot">•</span>
          <span>${movie.genre.join(', ')}</span>
          <span class="meta-dot">•</span>
          <span class="watch-modal-rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
          <span class="meta-dot">•</span>
          <span>Directed by ${movie.director}</span>
        </div>
        <p class="watch-modal-subtitle">Choose your preferred authorized streaming service or digital store below to watch directly.</p>
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="watch-modal-tabs">
      <button class="watch-modal-tab ${filterType === 'all' ? 'active' : ''}" onclick="filterWatchPlatforms('all')">
        <i class="fa-solid fa-layer-group"></i> All Options (${allPlatforms.length})
      </button>
      <button class="watch-modal-tab ${filterType === 'subscription' ? 'active' : ''}" onclick="filterWatchPlatforms('subscription')">
        <i class="fa-solid fa-play"></i> Subscription (${subPlatforms.length})
      </button>
      <button class="watch-modal-tab ${filterType === 'rent' ? 'active' : ''}" onclick="filterWatchPlatforms('rent')">
        <i class="fa-solid fa-tag"></i> Rent & Buy (${rentPlatforms.length})
      </button>
    </div>

    <!-- Platform Cards Grid -->
    <div class="watch-modal-grid">
      ${filtered.length === 0 ? `
        <div class="watch-modal-empty">
          <i class="fa-solid fa-circle-exclamation"></i>
          <p>No platforms found in this category.</p>
        </div>
      ` : filtered.map(p => `
        <a href="${p.url(movie.title)}" target="_blank" rel="noopener" class="watch-modal-card platform-${p.id}"
           style="--card-color:${p.color}; --card-bg:${p.bgColor}; --card-border:${p.borderColor};">
          <div class="watch-card-glow" style="background: radial-gradient(circle at top right, ${p.color}26 0%, transparent 70%);"></div>
          
          <div class="watch-card-top-row">
            <div class="watch-card-icon" style="color:${p.color}; background:${p.bgColor}; border-color:${p.borderColor};">
              <i class="${p.icon}"></i>
            </div>
            <span class="watch-card-badge" style="color:${p.color}; background:${p.bgColor}; border: 1px solid ${p.borderColor};">
              ${p.typeLabel}
            </span>
          </div>

          <div class="watch-card-content">
            <h3 class="watch-card-title">${p.name}</h3>
            <div class="watch-card-quality">
              <i class="fa-solid fa-sliders"></i> ${p.quality}
            </div>
            <div class="watch-card-pricing">
              <i class="fa-solid fa-circle-check"></i> ${p.priceText}
            </div>
          </div>

          <div class="watch-card-btn" style="background:${p.btnGradient}; color:${p.btnTextColor || '#ffffff'};">
            <span>${p.label}</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </a>
      `).join('')}
    </div>

    <!-- Modal Footer -->
    <div class="watch-modal-footer">
      <div class="watch-modal-footer-info">
        <i class="fa-solid fa-shield-halved" style="color:#2ecc71;"></i>
        <span>Direct links open officially in provider web apps or native mobile/TV stores.</span>
      </div>
      <a href="https://www.justwatch.com/us/search?q=${encodeURIComponent(movie.title)}" target="_blank" rel="noopener" class="justwatch-pill-btn">
        <i class="fa-solid fa-magnifying-glass-location"></i> View on JustWatch
      </a>
    </div>
  `;
}

function filterWatchPlatforms(type) {
  if (currentWatchMovie) {
    renderWatchModal(currentWatchMovie, type);
  }
}

function closeWatchModal() {
  const modal = document.getElementById('watchModal');
  if (modal) {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
}

// Watch modal event listeners
document.getElementById('closeWatchModalBtn')?.addEventListener('click', closeWatchModal);
document.getElementById('watchModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'watchModal') closeWatchModal();
});

function playTrailerById(movieId) {
  const movie = moviesData.find(m => m.id === movieId);
  if (!movie) return;
  
  const modal = document.getElementById('trailerModal');
  const iframe = document.getElementById('trailerIframe');
  
  let videoId = null;

  if (movie.trailer) {
    // Handle youtube.com/watch?v=XXXX format
    if (movie.trailer.includes('v=')) {
      videoId = movie.trailer.split('v=')[1].split('&')[0];
    }
    // Handle youtu.be/XXXX short format
    else if (movie.trailer.includes('youtu.be/')) {
      videoId = movie.trailer.split('youtu.be/')[1].split('?')[0];
    }
    // Handle youtube.com/embed/XXXX format
    else if (movie.trailer.includes('/embed/')) {
      videoId = movie.trailer.split('/embed/')[1].split('?')[0];
    }
  }

  if (videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modal.hidden = false;
  } else {
    // Fallback: search on YouTube directly
    const query = encodeURIComponent(`${movie.title} ${movie.year} official trailer`);
    // Try to embed a YouTube search result via a smart search embed
    iframe.src = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(movie.title + ' ' + movie.year + ' official trailer')}&autoplay=1`;
    modal.hidden = false;
    
    // If embed fails, after 3 seconds offer a direct link
    setTimeout(() => {
      if (modal && !modal.hidden) {
        const fallbackLink = document.createElement('div');
        fallbackLink.className = 'trailer-fallback-link';
        fallbackLink.innerHTML = `
          <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" class="btn-play-trailer" style="font-size:0.9rem; padding:0.7rem 1.5rem; text-decoration:none; display:inline-flex;">
            <i class="fa-brands fa-youtube"></i> Open on YouTube
          </a>
        `;
        const existingFallback = modal.querySelector('.trailer-fallback-link');
        if (!existingFallback) {
          modal.querySelector('.modal-content').appendChild(fallbackLink);
        }
      }
    }, 3000);
  }
}

// Modal closing handlers
document.getElementById('closeTrailerBtn')?.addEventListener('click', closeTrailerModal);
document.getElementById('trailerModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'trailerModal') closeTrailerModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTrailerModal();
    closeWatchModal();
  }
});

function closeTrailerModal() {
  const modal = document.getElementById('trailerModal');
  const iframe = document.getElementById('trailerIframe');
  if (iframe) iframe.src = '';
  if (modal) {
    modal.hidden = true;
    // Clean up any fallback links
    const fallback = modal.querySelector('.trailer-fallback-link');
    if (fallback) fallback.remove();
  }
}

// Init
applyFiltersAndRender();


