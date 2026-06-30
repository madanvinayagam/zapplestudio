/* ============================
   script.js – Zapple Studio (Tailwind edition)
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  let hasEngaged = false;

  /* ---- NAVBAR SCROLL ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ---- HAMBURGER / MOBILE MENU ---- */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      closeMenu();
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  /* ---- SMOOTH SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- SCROLL ANIMATIONS (AOS-like) ---- */
  const animatedEls = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatedEls.forEach(el => observer.observe(el));

  /* ---- SERVICE CARDS ENTRANCE ---- */
  const serviceCards = document.querySelectorAll(
    '#service-newborn, #service-baby, #service-toddler, #service-maternity'
  );
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  serviceCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.35s ease, border-color 0.35s ease`;
    cardObserver.observe(card);
  });

  /* ---- GALLERY LIGHTBOX ---- */
  const galleryItems   = document.querySelectorAll('.gallery-grid .gallery-item');
  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightboxImg');
  const lightboxClose  = document.getElementById('lightboxClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---- ENQUIRY FORM ---- */
  const form        = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    const required = form.querySelectorAll('[required]');

    required.forEach(field => {
      field.classList.remove('border-red-500');
      if (!field.value.trim()) {
        field.classList.add('border-red-500');
        valid = false;
        field.classList.add('shake');
        setTimeout(() => field.classList.remove('shake'), 400);
      }
    });

    if (!valid) return;

    const btn     = document.getElementById('submit-enquiry-btn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoad = btn.querySelector('.btn-loading');

    btnText.classList.add('hidden');
    btnLoad.classList.remove('hidden');
    btn.disabled = true;

    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      form.style.display = 'none';
      formSuccess.classList.remove('hidden');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // If hasEngaged is defined globally, mark true
      if (typeof hasEngaged !== 'undefined') hasEngaged = true;
    })
    .catch(error => {
      console.error('Form submission error:', error);
      btnText.classList.remove('hidden');
      btnLoad.classList.add('hidden');
      btn.disabled = false;
      alert("There was an error submitting your enquiry. Please try again or contact us on WhatsApp.");
    });
  });

  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('border-red-500'));
  });

  /* ---- COUNTER ANIMATION (HERO STATS) ---- */
  const counters = document.querySelectorAll('.stat-num');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el   = entry.target;
      const text = el.textContent;
      const match = text.match(/^(\d+)/);
      if (match) {
        const target   = parseInt(match[1]);
        const suffix   = text.replace(match[1], '');
        let current    = 0;
        const step     = target / (1800 / 16);
        const timer    = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + suffix;
        }, 16);
      }
      counterObs.unobserve(el);
    });
  }, { threshold: 0.8 });
  counters.forEach(c => counterObs.observe(c));

  /* ---- BRANCH CARD 3D HOVER ---- */
  const branchCards = document.querySelectorAll('#branch-arumbakkam, #branch-keelkatalai');
  branchCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- ACTIVE NAV LINK ON SCROLL ---- */
  const sections    = document.querySelectorAll('section[id]');
  const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"], #navbar ul a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    document.querySelectorAll('#navbar ul a:not(#nav-book-btn)').forEach(link => {
      link.classList.toggle('nav-link-active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  /* ---- WHATSAPP WIDGET ---- */
  const whatsappToggle = document.getElementById('whatsapp-toggle');
  const whatsappPopup = document.getElementById('whatsapp-popup');
  const chatCloseBtn = document.getElementById('chat-close-btn');

  if (whatsappToggle && whatsappPopup && chatCloseBtn) {
    whatsappToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.toggle('active');
      whatsappPopup.classList.toggle('opacity-0');
      whatsappPopup.classList.toggle('invisible');
      whatsappPopup.classList.toggle('translate-y-4');
    });

    chatCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.remove('active');
      whatsappPopup.classList.add('opacity-0', 'invisible', 'translate-y-4');
    });

    // Close when clicking outside the widget
    document.addEventListener('click', (e) => {
      const widget = document.getElementById('whatsapp-widget');
      if (widget && !widget.contains(e.target)) {
        whatsappPopup.classList.remove('active');
        whatsappPopup.classList.add('opacity-0', 'invisible', 'translate-y-4');
      }
    });
  }

  /* ---- SMART LEAD POPUP ---- */
  const leadPopup = document.getElementById('lead-popup');
  const leadPopupContent = document.getElementById('lead-popup-content');
  const leadPopupBg = document.getElementById('lead-popup-bg');
  const leadPopupClose = document.getElementById('lead-popup-close');
  const leadForm = document.getElementById('lead-form');
  const leadFormContainer = document.getElementById('lead-form-container');
  const leadSuccess = document.getElementById('lead-success');

  function showLeadPopup() {
    if (hasEngaged || sessionStorage.getItem('zapplePopupShown')) return;
    
    leadPopup.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
    setTimeout(() => {
      leadPopupContent.classList.remove('scale-95');
      leadPopupContent.classList.add('scale-100');
    }, 10);
    
    sessionStorage.setItem('zapplePopupShown', 'true');
  }

  function closeLeadPopup() {
    leadPopupContent.classList.remove('scale-100');
    leadPopupContent.classList.add('scale-95');
    leadPopup.classList.add('opacity-0', 'invisible', 'pointer-events-none');
  }

  if (leadPopup) {
    leadPopupClose.addEventListener('click', closeLeadPopup);
    leadPopupBg.addEventListener('click', closeLeadPopup);
    
    // Trigger 1: Exit Intent (Desktop)
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 0) showLeadPopup();
    });

    // Trigger 2: Inactivity (Mobile/All)
    setTimeout(() => {
      showLeadPopup();
    }, 15000);

    // Trigger 3: Scroll Up (Mobile/All)
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll - 50 && currentScroll > 500) {
        showLeadPopup();
      }
      lastScroll = currentScroll;
    }, { passive: true });
    
    // Handle form submission
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('lead-submit-btn');
      const btnText = btn.querySelector('.btn-text');
      const btnLoad = btn.querySelector('.btn-loading');
      
      btnText.classList.add('hidden');
      btnLoad.classList.remove('hidden');
      btn.disabled = true;

      const formData = new FormData(leadForm);

      fetch(leadForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        leadFormContainer.classList.add('hidden');
        leadSuccess.classList.remove('hidden');
        hasEngaged = true;
        setTimeout(closeLeadPopup, 4000);
      })
      .catch(error => {
        console.error('Popup submit error:', error);
        btnText.classList.remove('hidden');
        btnLoad.classList.add('hidden');
        btn.disabled = false;
        alert("There was an error. Please contact us on WhatsApp.");
      });
    });
  }

  /* ---- TRACK ENGAGEMENT ---- */
  document.querySelectorAll('#whatsapp-toggle, #whatsapp-btn, #nav-book-btn, #hero-book-btn').forEach(btn => {
    btn.addEventListener('click', () => { hasEngaged = true; });
  });

});
