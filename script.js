const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
function syncTheme(){ themeIcon.textContent = root.classList.contains('dark') ? '☀' : '☾'; }
syncTheme();
themeToggle.addEventListener('click', () => { root.classList.toggle('dark'); localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light'; syncTheme(); });
document.getElementById('year').textContent = new Date().getFullYear();

const roleReel = document.getElementById('role-reel');
if (roleReel && !roleReel.dataset.cloned) {
  roleReel.innerHTML += roleReel.innerHTML;
  roleReel.dataset.cloned = 'true';
}

const navShell = document.getElementById('nav-shell');
const highlighter = document.getElementById('nav-highlighter');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
function updateNav(){
  let active = sections[0];
  for (const section of sections) if (scrollY + 160 >= section.offsetTop) active = section;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+active.id));
  const activeLink = document.querySelector('.nav-link.active') || navLinks[0];
  if (activeLink && highlighter && navShell) {
    const shell = navShell.getBoundingClientRect();
    const box = activeLink.getBoundingClientRect();
    highlighter.style.left = `${box.left - shell.left}px`;
    highlighter.style.width = `${box.width}px`;
    highlighter.style.opacity = 1;
  }
}
addEventListener('scroll', updateNav, {passive:true}); addEventListener('resize', updateNav); setTimeout(updateNav, 100);

function renderMedia(project){
  const src = project.image || '';
  if (src.endsWith('.mp4')) return `<video src="${src}" autoplay muted loop playsinline></video>`;
  if (src) return `<img src="${src}" alt="${project.title}">`;
  return `<div class="w-full h-full flex items-center justify-center text-secondary text-center p-6">Project media placeholder</div>`;
}
function statusClass(status){
  const normalized = (status || '').toLowerCase();
  if (normalized.includes('complete')) return 'status-completed';
  if (normalized.includes('progress')) return 'status-progress';
  return 'status-neutral';
}
function statusLabel(status){
  return (status || '').replace(/\w/g, c => c.toUpperCase());
}
const projectGrid = document.getElementById('project-grid');

function projectTitle(project){
  return project.title || project.name || 'Project';
}

function projectImage(project, index){
  if(project.image) return project.image;
  return additionalPlaceholder({name: projectTitle(project)}, index);
}

function projectCardMedia(project, index){
  const src = projectImage(project, index);
  if(src.endsWith('.mp4')) return `<video src="${src}" autoplay muted loop playsinline></video>`;
  return `<img src="${src}" alt="${escapeHtml(projectTitle(project))} image" loading="lazy">`;
}

function mediaObjectMarkup(media, title, active=false, project={}){
  const src = media.src || media;
  const type = media.type || (String(src).endsWith('.mp4') ? 'video' : 'image');
  const activeClass = active ? 'active' : '';
  if(type === 'video') {
    const poster = media.poster || (project.image && !project.image.endsWith('.mp4') ? project.image : '');
    const mutedAttr = media.muted === false ? '' : 'muted';
    return `<div class="project-slideshow-item ${activeClass}" data-project-slide-item><video class="additional-modal-video" src="${src}" ${active ? 'autoplay' : ''} ${mutedAttr} playsinline controls preload="auto" poster="${poster}"></video><button type="button" class="additional-replay-button" data-replay-additional-video hidden>Replay</button></div>`;
  }
  return `<div class="project-slideshow-item ${activeClass}" data-project-slide-item><img src="${src}" alt="${escapeHtml(title)} image"></div>`;
}

function projectModalMedia(project, index){
  if(Array.isArray(project.modalMedia) && project.modalMedia.length) {
    const title = projectTitle(project);
    const slides = project.modalMedia.map((media, mediaIndex) => mediaObjectMarkup(media, title, mediaIndex === 0, project)).join('');
    const dots = project.modalMedia.map((_, mediaIndex) => `<button type="button" class="additional-gallery-dot ${mediaIndex === 0 ? 'active' : ''}" data-project-media-dot="${mediaIndex}" aria-label="Show media ${mediaIndex + 1}"></button>`).join('');
    return `<div class="project-slideshow" data-project-slideshow data-project-slide-index="0">${slides}<button type="button" class="additional-gallery-control additional-gallery-prev" data-project-media-prev aria-label="Previous media">‹</button><button type="button" class="additional-gallery-control additional-gallery-next" data-project-media-next aria-label="Next media">›</button><div class="additional-gallery-count" data-project-media-count>1 / ${project.modalMedia.length}</div><div class="additional-gallery-dots">${dots}</div></div>`;
  }
  const src = project.modalVideo || projectImage(project, index);
  if(src.endsWith('.mp4')) {
    return `<div class="additional-modal-video-wrap"><video class="additional-modal-video" src="${src}" autoplay muted playsinline controls preload="auto" poster="${project.image && !project.image.endsWith('.mp4') ? project.image : ''}"></video><button type="button" class="additional-replay-button" data-replay-additional-video hidden>Replay</button></div>`;
  }
  return `<img src="${src}" alt="${escapeHtml(projectTitle(project))} image">`;
}

function ensureProjectModal(){
  let modal = document.getElementById('project-modal');
  if(modal) return modal;
  modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.className = 'additional-modal project-modal';
  modal.setAttribute('aria-hidden', 'true');
  document.body.appendChild(modal);
  modal.addEventListener('click', event => {
    if(event.target === modal || event.target.closest('[data-close-project-modal]')) closeProjectModal();
  });
  return modal;
}

function openProjectModal(index){
  const project = window.PORTFOLIO_DATA.projects[index];
  if(!project) return;
  const modal = ensureProjectModal();
  const title = projectTitle(project);
  const techTags = (project.tech || []).map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join('');
  const screenshotModalTitles = ['zkPHIRE', 'The EM Algorithm in Information Geometry'];
  const scrollTextTitles = ['The EM Algorithm in Information Geometry', 'AgileNavigator', 'Immersion.AI', 'BeamHear', 'Adversarial Sim'];
  const modalFitClass = `${screenshotModalTitles.includes(title) ? ' screenshot-contain-modal' : ''}${scrollTextTitles.includes(title) ? ' scroll-text-modal' : ''}`;
  const extraLinks = (project.extraLinks || []).map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="gold-button">${escapeHtml(link.label)}</a>`).join('');
  modal.innerHTML = `<div class="additional-modal-panel${modalFitClass}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)} details"><button type="button" class="additional-modal-close" data-close-project-modal aria-label="Close project">×</button><div class="additional-modal-media">${projectModalMedia(project, index)}</div><div class="additional-modal-copy"><p class="text-accent-border uppercase tracking-[.18em] text-xs font-extrabold mb-2">Major Project</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(project.description || '')}</p><div class="detail-actions"><span class="project-tag">${escapeHtml(project.category || '')}</span>${techTags}${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="gold-button">View on GitHub</a>` : '<span></span>'}${extraLinks}</div></div></div>`;
  const modalVideo = modal.querySelector('.additional-modal-video');
  const replayButton = modal.querySelector('[data-replay-additional-video]');
  if(modalVideo && replayButton) {
    modalVideo.addEventListener('ended', () => { replayButton.hidden = false; });
    replayButton.addEventListener('click', () => {
      replayButton.hidden = true;
      modalVideo.currentTime = 0;
      modalVideo.play();
    });
    modalVideo.play().catch(() => {});
  }
  const projectSlideshow = modal.querySelector('[data-project-slideshow]');
  if(projectSlideshow && Array.isArray(project.modalMedia) && project.modalMedia.length) {
    const slides = [...projectSlideshow.querySelectorAll('[data-project-slide-item]')];
    const dots = [...projectSlideshow.querySelectorAll('[data-project-media-dot]')];
    const count = projectSlideshow.querySelector('[data-project-media-count]');
    let slideIndex = 0;
    const pauseSlideVideos = () => slides.forEach(slide => slide.querySelectorAll('video').forEach(video => video.pause()));
    const setupVideoReplay = slide => {
      const video = slide.querySelector('video');
      const replay = slide.querySelector('[data-replay-additional-video]');
      if(!video || !replay || video.dataset.replayReady) return;
      video.dataset.replayReady = 'true';
      video.addEventListener('ended', () => { replay.hidden = false; });
      replay.addEventListener('click', () => {
        replay.hidden = true;
        video.currentTime = 0;
        video.play();
      });
    };
    const showSlide = nextIndex => {
      slideIndex = (nextIndex + slides.length) % slides.length;
      pauseSlideVideos();
      slides.forEach((slide, index) => slide.classList.toggle('active', index === slideIndex));
      dots.forEach((dot, index) => dot.classList.toggle('active', index === slideIndex));
      if(count) count.textContent = `${slideIndex + 1} / ${slides.length}`;
      const activeSlide = slides[slideIndex];
      setupVideoReplay(activeSlide);
      const activeVideo = activeSlide.querySelector('video');
      const activeReplay = activeSlide.querySelector('[data-replay-additional-video]');
      if(activeVideo) {
        if(activeReplay) activeReplay.hidden = true;
        activeVideo.currentTime = 0;
        activeVideo.play().catch(() => {});
      }
    };
    slides.forEach(setupVideoReplay);
    projectSlideshow.querySelector('[data-project-media-prev]').addEventListener('click', () => showSlide(slideIndex - 1));
    projectSlideshow.querySelector('[data-project-media-next]').addEventListener('click', () => showSlide(slideIndex + 1));
    dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.projectMediaDot))));
    showSlide(0);
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const closeButton = modal.querySelector('[data-close-project-modal]');
  if(closeButton) closeButton.focus({preventScroll:true});
}

function closeProjectModal(){
  const modal = document.getElementById('project-modal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

window.PORTFOLIO_DATA.projects.forEach((project, index) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'project-card major-project-card card-hover-effect';
  card.setAttribute('aria-label', `Open ${projectTitle(project)} project`);
  const cardTags = (project.cardTags || []).map(tag => `<span class="status-dot inline-status major-card-extra-tag">${escapeHtml(tag)}</span>`).join('');
  card.innerHTML = `<div class="project-media"><span class="status-dot inline-status major-card-status ${statusClass(project.status)}">${statusLabel(project.status)}</span>${cardTags}${projectCardMedia(project, index)}</div><div class="project-content"><h3>${escapeHtml(projectTitle(project))}</h3></div>`;
  card.addEventListener('click', () => openProjectModal(index));
  projectGrid.appendChild(card);
});

const additionalGrid = document.getElementById('additional-grid');
const additionalDetail = document.getElementById('additional-detail');
const additionalPrev = document.getElementById('additional-prev');
const additionalNext = document.getElementById('additional-next');
let selectedAdditionalIndex = 0;
let additionalAutoPaused = false;
let additionalResumeTimer = null;
let additionalAnimationFrame = null;
let lastAdditionalFrame = 0;

if(additionalDetail) additionalDetail.remove();

function escapeHtml(value){
  return String(value || '').replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
}

function additionalPlaceholder(item, index){
  const title = escapeHtml(item.name || 'Project');
  const initials = (item.name || 'P').split(/\s+/).filter(Boolean).slice(0,3).map(word => word[0]).join('').toUpperCase();
  const hue = (index * 43 + 28) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="hsl(${hue},62%,26%)"/><stop offset="1" stop-color="hsl(${(hue + 46) % 360},72%,58%)"/></linearGradient><radialGradient id="r" cx="50%" cy="30%" r="70%"><stop stop-color="#fff" stop-opacity=".32"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="900" height="560" rx="48" fill="url(#g)"/><rect width="900" height="560" rx="48" fill="url(#r)"/><circle cx="138" cy="128" r="76" fill="#fff" opacity=".16"/><circle cx="780" cy="430" r="118" fill="#000" opacity=".11"/><text x="50%" y="45%" text-anchor="middle" dominant-baseline="middle" font-family="Inter,Arial,sans-serif" font-size="112" font-weight="900" fill="#fff">${escapeHtml(initials)}</text><text x="50%" y="66%" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="38" font-weight="800" fill="#fff">${title}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function additionalImage(item, index){
  return item.image || additionalPlaceholder(item, index);
}

function additionalModalMedia(item, index){
  if(Array.isArray(item.modalMedia) && item.modalMedia.length) {
    const slides = item.modalMedia.map((media, mediaIndex) => mediaObjectMarkup(media, item.name, mediaIndex === 0, item)).join('');
    const dots = item.modalMedia.map((_, mediaIndex) => `<button type="button" class="additional-gallery-dot ${mediaIndex === 0 ? 'active' : ''}" data-project-media-dot="${mediaIndex}" aria-label="Show media ${mediaIndex + 1}"></button>`).join('');
    return `<div class="project-slideshow" data-project-slideshow data-project-slide-index="0">${slides}<button type="button" class="additional-gallery-control additional-gallery-prev" data-project-media-prev aria-label="Previous media">‹</button><button type="button" class="additional-gallery-control additional-gallery-next" data-project-media-next aria-label="Next media">›</button><div class="additional-gallery-count" data-project-media-count>1 / ${item.modalMedia.length}</div><div class="additional-gallery-dots">${dots}</div></div>`;
  }
  if(item.modalVideo) {
    const mutedAttr = item.modalMuted === false ? '' : 'muted';
    return `<div class="additional-modal-video-wrap"><video class="additional-modal-video" src="${item.modalVideo}" autoplay ${mutedAttr} playsinline controls preload="auto" poster="${additionalImage(item, index)}"></video><button type="button" class="additional-replay-button" data-replay-additional-video hidden>Replay</button></div>`;
  }
  if(Array.isArray(item.modalImages) && item.modalImages.length) {
    const firstImage = item.modalImages[0];
    const dots = item.modalImages.map((_, imageIndex) => `<button type="button" class="additional-gallery-dot ${imageIndex === 0 ? 'active' : ''}" data-gallery-dot="${imageIndex}" aria-label="Show image ${imageIndex + 1}"></button>`).join('');
    return `<div class="additional-gallery" data-gallery-index="0"><img src="${firstImage}" alt="${escapeHtml(item.name)} image" data-gallery-image><button type="button" class="additional-gallery-control additional-gallery-prev" data-gallery-prev aria-label="Previous image">‹</button><button type="button" class="additional-gallery-control additional-gallery-next" data-gallery-next aria-label="Next image">›</button><div class="additional-gallery-count" data-gallery-count>1 / ${item.modalImages.length}</div><div class="additional-gallery-dots">${dots}</div></div>`;
  }
  return `<img src="${additionalImage(item, index)}" alt="${escapeHtml(item.name)} image">`;
}

function additionalCardMarkup(item, index, clone=false){
  return `<button type="button" class="additional-card carousel-card card-hover-effect" data-project-index="${index}" data-clone="${clone ? 'true' : 'false'}" aria-label="Open ${escapeHtml(item.name)} project"><span class="status-dot inline-status additional-card-status ${statusClass(item.status)}">${statusLabel(item.status)}</span><div class="additional-card-image"><img src="${additionalImage(item, index)}" alt="${escapeHtml(item.name)} image" loading="lazy"></div><h3>${escapeHtml(item.name)}</h3></button>`;
}

function ensureAdditionalModal(){
  let modal = document.getElementById('additional-modal');
  if(modal) return modal;
  modal = document.createElement('div');
  modal.id = 'additional-modal';
  modal.className = 'additional-modal';
  modal.setAttribute('aria-hidden', 'true');
  document.body.appendChild(modal);
  modal.addEventListener('click', event => {
    if(event.target === modal || event.target.closest('[data-close-additional-modal]')) closeAdditionalModal();
  });
  return modal;
}

function openAdditionalModal(index){
  selectedAdditionalIndex = (index + window.PORTFOLIO_DATA.additional.length) % window.PORTFOLIO_DATA.additional.length;
  const item = window.PORTFOLIO_DATA.additional[selectedAdditionalIndex];
  if(!item) return;
  additionalAutoPaused = true;
  clearTimeout(additionalResumeTimer);
  const modal = ensureAdditionalModal();
  const screenshotContainNames = ['Music Recommender System', 'ModAlg', 'PowerNap', 'ReducedGridSearchCV', 'SLAM Experiments'];
  const additionalScrollTextNames = ['PowerNap', 'SLAM Experiments', 'Traffic Light LED Control'];
  const modalFitClass = `${screenshotContainNames.includes(item.name) ? ' screenshot-contain-modal' : ''}${item.name === 'ReducedGridSearchCV' ? ' reduced-grid-title-modal' : ''}${additionalScrollTextNames.includes(item.name) ? ' scroll-text-modal' : ''}`;
  const itemExtraLinks = (item.extraLinks || []).map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="gold-button">${escapeHtml(link.label)}</a>`).join('');
  modal.innerHTML = `<div class="additional-modal-panel${modalFitClass}" role="dialog" aria-modal="true" aria-label="${escapeHtml(item.name)} details"><button type="button" class="additional-modal-close" data-close-additional-modal aria-label="Close project">×</button><div class="additional-modal-media">${additionalModalMedia(item, selectedAdditionalIndex)}</div><div class="additional-modal-copy"><p class="text-accent-border uppercase tracking-[.18em] text-xs font-extrabold mb-2">Additional Project</p><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.detail || item.description || '')}</p><div class="detail-actions"><span class="project-tag">${escapeHtml(item.language || '')}</span>${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="gold-button">View on GitHub</a>` : '<span></span>'}${itemExtraLinks}</div></div></div>`;
  const modalVideo = modal.querySelector('.additional-modal-video');
  const replayButton = modal.querySelector('[data-replay-additional-video]');
  if(modalVideo && replayButton) {
    if(typeof item.modalVolume === 'number') modalVideo.volume = Math.max(0, Math.min(1, item.modalVolume));
    modalVideo.addEventListener('ended', () => { replayButton.hidden = false; });
    replayButton.addEventListener('click', () => {
      replayButton.hidden = true;
      modalVideo.currentTime = 0;
      modalVideo.play();
    });
    modalVideo.play().catch(() => {});
  }
  const gallery = modal.querySelector('.additional-gallery');
  if(gallery && Array.isArray(item.modalImages) && item.modalImages.length) {
    const image = gallery.querySelector('[data-gallery-image]');
    const count = gallery.querySelector('[data-gallery-count]');
    const dots = [...gallery.querySelectorAll('[data-gallery-dot]')];
    let galleryIndex = 0;
    const showGalleryImage = nextIndex => {
      galleryIndex = (nextIndex + item.modalImages.length) % item.modalImages.length;
      image.src = item.modalImages[galleryIndex];
      image.alt = `${item.name} image ${galleryIndex + 1}`;
      if(count) count.textContent = `${galleryIndex + 1} / ${item.modalImages.length}`;
      dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === galleryIndex));
    };
    gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => showGalleryImage(galleryIndex - 1));
    gallery.querySelector('[data-gallery-next]').addEventListener('click', () => showGalleryImage(galleryIndex + 1));
    dots.forEach(dot => dot.addEventListener('click', () => showGalleryImage(Number(dot.dataset.galleryDot))));
  }
  const projectSlideshow = modal.querySelector('[data-project-slideshow]');
  if(projectSlideshow && Array.isArray(item.modalMedia) && item.modalMedia.length) {
    const slides = [...projectSlideshow.querySelectorAll('[data-project-slide-item]')];
    const dots = [...projectSlideshow.querySelectorAll('[data-project-media-dot]')];
    const count = projectSlideshow.querySelector('[data-project-media-count]');
    let slideIndex = 0;
    const pauseSlideVideos = () => slides.forEach(slide => slide.querySelectorAll('video').forEach(video => video.pause()));
    const setupVideoReplay = slide => {
      const video = slide.querySelector('video');
      const replay = slide.querySelector('[data-replay-additional-video]');
      if(!video || !replay || video.dataset.replayReady) return;
      video.dataset.replayReady = 'true';
      video.addEventListener('ended', () => { replay.hidden = false; });
      replay.addEventListener('click', () => {
        replay.hidden = true;
        video.currentTime = 0;
        video.play();
      });
    };
    const showSlide = nextIndex => {
      slideIndex = (nextIndex + slides.length) % slides.length;
      pauseSlideVideos();
      slides.forEach((slide, index) => slide.classList.toggle('active', index === slideIndex));
      dots.forEach((dot, index) => dot.classList.toggle('active', index === slideIndex));
      if(count) count.textContent = `${slideIndex + 1} / ${slides.length}`;
      const activeSlide = slides[slideIndex];
      setupVideoReplay(activeSlide);
      const activeVideo = activeSlide.querySelector('video');
      const activeReplay = activeSlide.querySelector('[data-replay-additional-video]');
      if(activeVideo) {
        if(activeReplay) activeReplay.hidden = true;
        activeVideo.currentTime = 0;
        activeVideo.play().catch(() => {});
      }
    };
    slides.forEach(setupVideoReplay);
    projectSlideshow.querySelector('[data-project-media-prev]').addEventListener('click', () => showSlide(slideIndex - 1));
    projectSlideshow.querySelector('[data-project-media-next]').addEventListener('click', () => showSlide(slideIndex + 1));
    dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.projectMediaDot))));
    showSlide(0);
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const closeButton = modal.querySelector('[data-close-additional-modal]');
  if(closeButton) closeButton.focus({preventScroll:true});
}

function closeAdditionalModal(){
  const modal = document.getElementById('additional-modal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  additionalResumeTimer = setTimeout(() => { additionalAutoPaused = false; }, 900);
}

function renderAdditionalProjects(){
  const originalCards = window.PORTFOLIO_DATA.additional.map((item, index) => additionalCardMarkup(item, index, false)).join('');
  const clonedCards = window.PORTFOLIO_DATA.additional.map((item, index) => additionalCardMarkup(item, index, true)).join('');
  additionalGrid.innerHTML = originalCards + clonedCards;
  additionalGrid.querySelectorAll('[data-project-index]').forEach(card => {
    card.addEventListener('click', () => openAdditionalModal(Number(card.dataset.projectIndex)));
  });
}

function pauseAdditionalTemporarily(ms=3500){
  additionalAutoPaused = true;
  clearTimeout(additionalResumeTimer);
  additionalResumeTimer = setTimeout(() => { additionalAutoPaused = false; }, ms);
}

function selectAdditionalProject(index, pauseAuto=false){
  selectedAdditionalIndex = (index + window.PORTFOLIO_DATA.additional.length) % window.PORTFOLIO_DATA.additional.length;
  if(pauseAuto) pauseAdditionalTemporarily();
  const card = additionalGrid.querySelector(`[data-project-index="${selectedAdditionalIndex}"][data-clone="false"]`);
  if(card) card.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
}

function nudgeAdditional(direction){
  pauseAdditionalTemporarily();
  selectAdditionalProject(selectedAdditionalIndex + direction, false);
}

function normalizeAdditionalLoop(){
  const halfway = additionalGrid.scrollWidth / 2;
  if(halfway > 0 && additionalGrid.scrollLeft >= halfway) {
    additionalGrid.scrollLeft = additionalGrid.scrollLeft - halfway;
  }
}

function animateAdditionalCarousel(timestamp){
  if(!lastAdditionalFrame) lastAdditionalFrame = timestamp;
  const delta = timestamp - lastAdditionalFrame;
  lastAdditionalFrame = timestamp;
  if(!additionalAutoPaused) {
    normalizeAdditionalLoop();
    // Slow, continuous movement. Delta-based so it works consistently across browsers.
    additionalGrid.scrollLeft += delta * 0.1;
  }
  additionalAnimationFrame = requestAnimationFrame(animateAdditionalCarousel);
}

additionalPrev.addEventListener('click', () => nudgeAdditional(-1));
additionalNext.addEventListener('click', () => nudgeAdditional(1));
additionalGrid.addEventListener('mouseenter', () => { additionalAutoPaused = true; clearTimeout(additionalResumeTimer); });
additionalGrid.addEventListener('focusin', () => { additionalAutoPaused = true; clearTimeout(additionalResumeTimer); });
additionalGrid.addEventListener('mouseleave', () => { if(!document.body.classList.contains('modal-open')) additionalAutoPaused = false; });
additionalGrid.addEventListener('focusout', () => { if(!document.body.classList.contains('modal-open')) additionalAutoPaused = false; });
document.addEventListener('keydown', event => { if(event.key === 'Escape') { closeAdditionalModal(); closeProjectModal(); } });
renderAdditionalProjects();
requestAnimationFrame(animateAdditionalCarousel);

const skillTabs = document.getElementById('skill-category-tabs');
const skillsGrid = document.getElementById('skills-grid');
const cycleToggle = document.getElementById('skill-cycle-toggle');
const skillGroups = window.PORTFOLIO_DATA.skills;
let activeSkillGroup = skillGroups[0].id;
let isCyclingSkills = true;
let skillTimer = null;

function renderSkillTabs(){
  skillTabs.innerHTML = skillGroups.map(group => `<button data-skill-tab="${group.id}" class="skill-tab ${group.id === activeSkillGroup ? 'active' : ''}"><img src="${group.cardImageUrl}" alt=""><span>${group.title.replace('\n','<br>')}</span></button>`).join('');
  skillTabs.querySelectorAll('[data-skill-tab]').forEach(button => {
    button.addEventListener('click', () => {
      isCyclingSkills = false;
      syncCycleButton();
      setSkillGroup(button.dataset.skillTab);
    });
  });
}

function setSkillGroup(groupId){
  activeSkillGroup = groupId;
  const group = skillGroups.find(g => g.id === groupId) || skillGroups[0];
  renderSkillTabs();
  skillsGrid.classList.add('is-transitioning');
  setTimeout(() => {
    const maxCount = Math.max(...skillGroups.map(g => g.items.length));
    const cards = group.items.map((item, index) => `<article class="skill-detail-card" style="transition-delay:${index * 38}ms"><div class="skill-detail-heading"><img src="${item.imageUrl}" alt="${item.name} logo"><h3>${item.name}</h3></div><p>${item.description}</p></article>`);
    for(let i = group.items.length; i < maxCount; i++) cards.push('<div aria-hidden="true"></div>');
    skillsGrid.innerHTML = cards.join('');
    requestAnimationFrame(() => skillsGrid.classList.remove('is-transitioning'));
  }, 180);
}

function syncCycleButton(){
  cycleToggle.textContent = isCyclingSkills ? '⏸' : '▶';
  cycleToggle.className = `p-2 rounded-full transition-all duration-300 ${isCyclingSkills ? 'bg-accent/20 text-accent ring-2 ring-accent' : 'bg-surface text-secondary hover:bg-border/60'}`;
  cycleToggle.setAttribute('aria-label', isCyclingSkills ? 'Stop cycling skills' : 'Cycle through skills');
  cycleToggle.title = isCyclingSkills ? 'Stop cycling skills' : 'Cycle through skills';
}

cycleToggle.addEventListener('click', () => { isCyclingSkills = !isCyclingSkills; syncCycleButton(); });
renderSkillTabs();
setSkillGroup(activeSkillGroup);
syncCycleButton();
skillTimer = setInterval(() => {
  if(!isCyclingSkills) return;
  const idx = skillGroups.findIndex(g => g.id === activeSkillGroup);
  setSkillGroup(skillGroups[(idx + 1) % skillGroups.length].id);
}, 5000);

// Subtle Matter.js background, matching the sample site's dependency without making it visually noisy.
(function(){
  const canvas = document.getElementById('matter-canvas');
  if (!canvas || !window.Matter || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const {Engine, Render, Runner, Bodies, Composite} = Matter;
  const engine = Engine.create(); engine.gravity.y = 0;
  const render = Render.create({canvas, engine, options:{width:innerWidth,height:innerHeight,wireframes:false,background:'transparent',pixelRatio:devicePixelRatio || 1}});
  const colors = ['#D9C06C','#F0E8D0','#B9A149'];
  for (let i=0;i<16;i++) Composite.add(engine.world, Bodies.circle(Math.random()*innerWidth, Math.random()*innerHeight, 5+Math.random()*12, {render:{fillStyle:colors[i%3]},frictionAir:.02}));
  Render.run(render); Runner.run(Runner.create(), engine);
  function resize(){ render.canvas.width = innerWidth; render.canvas.height = innerHeight; render.options.width = innerWidth; render.options.height = innerHeight; }
  addEventListener('resize', resize);
})();
