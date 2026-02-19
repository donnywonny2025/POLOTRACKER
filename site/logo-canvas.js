/* ================================================================
   BEYOND BLACK BUDGET — Canvas Logo Generator
   Replicates the screenshot: VHS noise, scan lines,
   chromatic aberration, bold stacked text with underline
   ================================================================ */

(function () {
    const canvas = document.getElementById('hero-logo-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // ── Draw the full logo ──
    function drawLogo() {
        // 1) Black background
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, W, H);

        // 2) Horizontal noise lines (subtle static)
        for (let y = 0; y < H; y += 2) {
            const brightness = Math.random() * 18;
            ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${0.3 + Math.random() * 0.3})`;
            ctx.fillRect(0, y, W, 1);
        }

        // 3) Random noise dots
        const noiseData = ctx.createImageData(W, H);
        for (let i = 0; i < noiseData.data.length; i += 4) {
            const v = Math.random() * 30;
            noiseData.data[i] = v;
            noiseData.data[i + 1] = v;
            noiseData.data[i + 2] = v;
            noiseData.data[i + 3] = Math.random() * 40;
        }
        ctx.putImageData(noiseData, 0, 0);

        // Re-darken with semi-transparent black
        ctx.fillStyle = 'rgba(5, 5, 5, 0.6)';
        ctx.fillRect(0, 0, W, H);

        // 4) More prominent scan lines
        for (let y = 0; y < H; y += 4) {
            ctx.fillStyle = `rgba(255, 255, 255, ${0.01 + Math.random() * 0.02})`;
            ctx.fillRect(0, y, W, 1);
        }

        // 5) Title text config
        const fontSize = Math.floor(W * 0.115);
        const lineHeight = fontSize * 1.05;
        const textX = W * 0.08;
        const textStartY = H * 0.35;
        const words = ['BEYOND', 'BLACK', 'BUDGET'];

        ctx.textBaseline = 'top';
        ctx.font = `900 ${fontSize}px "Anton", "Impact", "Arial Black", sans-serif`;

        // 6) Draw chromatic aberration layers (behind main text)
        words.forEach((word, i) => {
            const y = textStartY + i * lineHeight;

            // Cyan offset (left-shifted)
            ctx.fillStyle = 'rgba(0, 240, 255, 0.35)';
            ctx.fillText(word, textX - 4, y + 1);

            // Red/magenta offset (right-shifted)
            ctx.fillStyle = 'rgba(255, 0, 64, 0.35)';
            ctx.fillText(word, textX + 4, y - 1);
        });

        // 7) Main white text
        ctx.fillStyle = '#f0f0f0';
        words.forEach((word, i) => {
            const y = textStartY + i * lineHeight;
            ctx.fillText(word, textX, y);
        });

        // 8) White underline bar below text
        const underlineY = textStartY + words.length * lineHeight + fontSize * 0.25;
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(textX, underlineY, fontSize * 0.55, 5);

        // 9) Random glitch bars (horizontal displacement)
        for (let g = 0; g < 3; g++) {
            const gy = Math.random() * H;
            const gHeight = 1 + Math.random() * 3;
            const shift = (Math.random() - 0.5) * 8;
            const slice = ctx.getImageData(0, gy, W, gHeight);
            ctx.putImageData(slice, shift, gy);
        }

        // 10) Subtle vignette
        const vGrad = ctx.createRadialGradient(W / 2, H / 2, W * 0.25, W / 2, H / 2, W * 0.75);
        vGrad.addColorStop(0, 'rgba(0,0,0,0)');
        vGrad.addColorStop(1, 'rgba(0,0,0,0.5)');
        ctx.fillStyle = vGrad;
        ctx.fillRect(0, 0, W, H);
    }

    // ── Initial draw ──
    drawLogo();

    // ── Periodic glitch redraw (subtle) ──
    setInterval(() => {
        drawLogo();
    }, 4000 + Math.random() * 3000);

    // ── Also export as image for nav logo usage ──
    try {
        const logoImg = canvas.toDataURL('image/png');
        // Store for potential reuse
        window.__bbbLogoData = logoImg;
    } catch (e) {
        // Canvas tainted or export not supported
    }

})();
