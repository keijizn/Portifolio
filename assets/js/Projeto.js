(() => {
  const carousel = document.querySelector('.carousel');
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const currentEl = document.getElementById('currentSlide');
  const totalEl = document.getElementById('totalSlides');

  if (!carousel || !track || !dotsWrap || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.children);
  let index = 0;
  let startX = null;
  let pointerId = null;

  const formatNumber = value => String(value).padStart(2, '0');

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Projeto ${i + 1}`);
    if (i === 0) dot.setAttribute('aria-current', 'true');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);
  if (totalEl) totalEl.textContent = formatNumber(slides.length);

  function updateUI() {
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => {
      const isCurrent = i === index;
      slide.classList.toggle('current', isCurrent);
      slide.setAttribute('aria-hidden', String(!isCurrent));
      slide.querySelectorAll('a, button').forEach(control => {
        control.tabIndex = isCurrent ? 0 : -1;
      });
    });
    dots.forEach((dot, i) => {
      if (i === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (currentEl) currentEl.textContent = formatNumber(index + 1);
  }

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    updateUI();
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  carousel.addEventListener('keydown', event => {
    if (event.target.matches('input, textarea, select')) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      goTo(slides.length - 1);
    }
  });

  track.addEventListener('pointerdown', event => {
    // Links e botões precisam receber o clique normalmente. O gesto de arraste
    // só começa quando o usuário pressiona uma área não interativa do slide.
    if (event.target.closest('a, button')) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    startX = event.clientX;
    pointerId = event.pointerId;
    track.setPointerCapture?.(pointerId);
  });

  track.addEventListener('pointerup', event => {
    if (startX == null || pointerId !== event.pointerId) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 55) goTo(delta > 0 ? index - 1 : index + 1);
    startX = null;
    pointerId = null;
  });

  track.addEventListener('pointercancel', () => {
    startX = null;
    pointerId = null;
  });

  const updateDotLabels = lang => {
    const isPt = lang !== 'en';
    dots.forEach((dot, i) => dot.setAttribute('aria-label', `${isPt ? 'Projeto' : 'Project'} ${i + 1}`));
  };

  document.addEventListener('langchange', event => updateDotLabels(event.detail?.lang || 'pt'));
  document.addEventListener('DOMContentLoaded', () => updateDotLabels(document.body.dataset.lang || 'pt'));

  updateUI();
})();
