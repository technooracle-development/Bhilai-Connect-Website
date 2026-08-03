/* ============================================================
   BHILAI CONNECT — script.js
   Vanilla JS only. No dependencies, no backend calls.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky nav shadow on scroll ---------- */
  const siteNav = document.getElementById('siteNav');
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    if (!siteNav) return;
    if (window.scrollY > 12) siteNav.classList.add('scrolled');
    else siteNav.classList.remove('scrolled');

    if (backToTop) {
      if (window.scrollY > 500) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.innerHTML = isOpen
        ? '<i class="ri-close-line" aria-hidden="true"></i>'
        : '<i class="ri-menu-3-line" aria-hidden="true"></i>';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="ri-menu-3-line" aria-hidden="true"></i>';
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.classList.contains('open')) return;
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="ri-menu-3-line" aria-hidden="true"></i>';
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- "Coming soon" download buttons ---------- */
  const downloadBtnIds = ['navDownloadBtn', 'heroDownloadBtn', 'ctaDownloadBtn'];
  downloadBtnIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        showToast('Bhilai Connect is coming soon! We will announce the download link here first.');
      });
    }
  });

  /* ---------- Simple toast ---------- */
  function showToast(text) {
    let toast = document.querySelector('.bc-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'bc-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      Object.assign(toast.style, {
        position: 'fixed',
        left: '50%',
        bottom: '28px',
        transform: 'translateX(-50%) translateY(20px)',
        background: '#0B1B32',
        color: '#fff',
        padding: '14px 22px',
        borderRadius: '999px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 14px 30px rgba(0,0,0,0.25)',
        zIndex: '999',
        opacity: '0',
        transition: 'opacity .3s ease, transform .3s ease',
        maxWidth: '90vw',
        textAlign: 'center'
      });
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 3200);
  }

  /* ---------- FAQ accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;

    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        const otherA = other.querySelector('.faq-a');
        if (otherA) otherA.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Support form (UI only, no backend) ---------- */
  const supportForm = document.getElementById('supportForm');
  const formSuccess = document.getElementById('formSuccess');

  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!supportForm.checkValidity()) {
        supportForm.reportValidity();
        return;
      }
      const submitBtn = supportForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ri-loader-4-line" aria-hidden="true"></i> Sending...';
      }

      setTimeout(() => {
        if (formSuccess) formSuccess.classList.add('show');
        supportForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="ri-send-plane-fill" aria-hidden="true"></i> Send Message';
        }
      }, 700);
    });
  }

  /* ---------- Active nav link on current page ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (href === currentPage) link.classList.add('active');
  });

});
