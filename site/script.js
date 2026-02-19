/* ================================================================
   DEEP STATE MEDIA — Client-Side Logic
   Handles: Nav scroll, Intersection Observer reveals,
            counter animations, mobile toggle, glitch FX,
            grid canvas, terminal typing
   URL: deepstatemedia.io
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ── Nav scroll behavior ──
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ── Intersection Observer — Reveal on scroll ──
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .stagger');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Animated Counter (Stats bar) ──
  const counterElements = document.querySelectorAll('.ticker__number');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const tickerSection = document.getElementById('ticker');
  if (tickerSection) counterObserver.observe(tickerSection);

  function animateCounters() {
    counterElements.forEach(el => {
      const text = el.textContent;
      // Extract number and suffix
      const match = text.match(/^(\d+)(.*)/);
      if (!match) return;
      const target = parseInt(match[1]);
      const suffix = match[2]; // e.g., "+", "M", "/7"
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        // Rebuild with <span> for suffix
        el.innerHTML = current + '<span>' + suffix + '</span>';

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  // ── Mobile Nav Toggle ──
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  let mobileOpen = false;

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      if (mobileOpen) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(3,3,4,0.98)';
        navLinks.style.padding = '24px';
        navLinks.style.gap = '20px';
        navLinks.style.borderBottom = '1px solid rgba(0, 230, 118, 0.1)';
      } else {
        navLinks.style.display = '';
        navLinks.style.flexDirection = '';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.background = '';
        navLinks.style.padding = '';
        navLinks.style.gap = '';
        navLinks.style.borderBottom = '';
      }
    });
  }

  // ── Smooth Scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Close mobile nav if open
        if (mobileOpen && navToggle) {
          navToggle.click();
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Random Glitch Burst on Hero Title ──
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    setInterval(() => {
      heroTitle.style.textShadow = `
        ${Math.random() * 4 - 2}px ${Math.random() * 2 - 1}px 0 rgba(0, 230, 118, 0.4),
        ${Math.random() * -4 + 2}px ${Math.random() * 2 - 1}px 0 rgba(0, 240, 255, 0.3)
      `;
      setTimeout(() => {
        heroTitle.style.textShadow = 'none';
      }, 80 + Math.random() * 120);
    }, 3000 + Math.random() * 4000);
  }

  // ── Hero Canvas: Flowing Particle Network ──
  const canvas = document.getElementById('hero-grid-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];
    const PARTICLE_COUNT = 120;
    const CONNECTION_DIST = 150;
    let mouseX = -1000;
    let mouseY = -1000;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Track mouse for interactive glow
    canvas.parentElement.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }
    initParticles();

    let time = 0;

    function drawParticleNetwork() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        // Wrap around edges
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Pulse alpha
        const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

        // Mouse proximity glow
        const mDist = Math.sqrt((p.x - mouseX) ** 2 + (p.y - mouseY) ** 2);
        const mouseGlow = mDist < 200 ? (1 - mDist / 200) * 0.6 : 0;

        const finalAlpha = Math.min(pulseAlpha + mouseGlow, 1);
        const finalSize = p.size + mouseGlow * 2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 230, 118, ${finalAlpha})`;
        ctx.fill();

        // Glow effect on brighter particles
        if (finalAlpha > 0.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, finalSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 230, 118, ${finalAlpha * 0.08})`;
          ctx.fill();
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const lineAlpha = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 230, 118, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Subtle horizontal scan line
      const scanY = (time * 80) % (canvas.height + 200) - 100;
      const scanGrad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      scanGrad.addColorStop(0, 'rgba(0, 230, 118, 0)');
      scanGrad.addColorStop(0.5, 'rgba(0, 230, 118, 0.03)');
      scanGrad.addColorStop(1, 'rgba(0, 230, 118, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 40, canvas.width, 80);

      animFrame = requestAnimationFrame(drawParticleNetwork);
    }
    drawParticleNetwork();

    // Pause when not visible
    const heroEl = document.getElementById('hero');
    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animFrame) drawParticleNetwork();
        } else {
          cancelAnimationFrame(animFrame);
          animFrame = null;
        }
      });
    }, { threshold: 0 });
    if (heroEl) gridObserver.observe(heroEl);
  }

  // ── Work card hover tilt ──
  document.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * 4;
      const tiltY = (x - 0.5) * -4;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  // ── Service card hover glitch ──
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = `translateX(${Math.random() * 3 - 1.5}px)`;
      setTimeout(() => {
        card.style.transform = 'translateX(0)';
      }, 60);
    });
  });

  // ── Terminal typing animation ──
  const terminalBody = document.getElementById('terminal-body');
  if (terminalBody) {
    const lines = terminalBody.querySelectorAll('.terminal-line');
    lines.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(8px)';
      line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    const termObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lines.forEach((line, i) => {
            setTimeout(() => {
              line.style.opacity = '1';
              line.style.transform = 'translateY(0)';
            }, i * 200);
          });
          termObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    termObserver.observe(terminalBody);
  }

  // ── Console signature ──
  console.log('%c DEEP STATE MEDIA ', 'background: #00e676; color: #030304; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 2px;');
  console.log('%c deepstatemedia.io ', 'color: #00e676; font-size: 11px; font-family: monospace;');
  console.log('%c Signal Active. ', 'color: #555; font-size: 11px;');
});
