(function() {

  // ── Inject Footer Styles ───────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    ":root {",
    "  --charcoal:     #1A1410;",
    "  --charcoal-mid: #252018;",
    "  --rose:         #823348;",
    "  --rose-light:   #9B3D57;",
    "  --teal:         #2BA5B4;",
    "  --cream:        #FAF7F2;",
    "  --font-serif:   'Playfair Display', Georgia, serif;",
    "  --font-ui:      'Instrument Sans', system-ui, sans-serif;",
    "  --white-60:     rgba(255,255,255,0.60);",
    "  --white-40:     rgba(255,255,255,0.40);",
    "  --white-20:     rgba(255,255,255,0.20);",
    "  --white-10:     rgba(255,255,255,0.10);",
    "  --white-06:     rgba(255,255,255,0.06);",
    "}",

    ".footer-cta {",
    "  background: var(--rose);",
    "  padding: clamp(48px,7vw,72px) clamp(24px,6vw,80px);",
    "  text-align: center;",
    "}",
    ".footer-cta-inner { max-width: 680px; margin: 0 auto; }",
    ".footer-cta-eyebrow {",
    "  font-family: var(--font-ui); font-size: 11px; font-weight: 600;",
    "  letter-spacing: 0.14em; text-transform: uppercase;",
    "  color: rgba(255,255,255,0.65); margin-bottom: 16px;",
    "}",
    ".footer-cta h2 {",
    "  font-family: var(--font-serif); font-size: clamp(28px,4.5vw,44px);",
    "  font-weight: 400; color: #fff; line-height: 1.25; margin: 0 0 16px;",
    "}",
    ".footer-cta h2 em { font-style: italic; }",
    ".footer-cta p {",
    "  font-family: var(--font-ui); font-size: 16px; font-weight: 300;",
    "  color: rgba(255,255,255,0.8); line-height: 1.75; margin: 0 0 32px;",
    "}",
    ".footer-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }",
    ".footer-cta-btns a {",
    "  display: inline-block; font-family: var(--font-ui); font-size: 13px;",
    "  font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;",
    "  text-decoration: none; padding: 14px 28px; border-radius: 2px; transition: all 0.2s;",
    "}",
    ".cta-white { background: #fff; color: var(--rose); }",
    ".cta-white:hover { background: rgba(255,255,255,0.92); }",
    ".cta-outline-w { border: 1px solid rgba(255,255,255,0.5); color: #fff; background: transparent; }",
    ".cta-outline-w:hover { background: rgba(255,255,255,0.1); }",

    ".footer {",
    "  background: var(--charcoal);",
    "  padding: clamp(48px,7vw,64px) clamp(24px,6vw,80px) clamp(28px,4vw,40px);",
    "}",
    ".footer-inner { max-width: 1200px; margin: 0 auto; }",
    ".footer-top {",
    "  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;",
    "  gap: clamp(32px,5vw,56px); margin-bottom: 40px;",
    "  padding-bottom: 40px; border-bottom: 1px solid var(--white-10);",
    "}",
    ".footer-brand-name {",
    "  font-family: var(--font-serif); font-size: 22px; font-weight: 400;",
    "  color: #fff; letter-spacing: 0.02em; margin: 0 0 4px;",
    "}",
    ".footer-brand-name em { font-style: italic; color: rgba(255,255,255,0.7); }",
    ".footer-tagline {",
    "  font-family: var(--font-ui); font-size: 11px; font-weight: 600;",
    "  letter-spacing: 0.12em; text-transform: uppercase;",
    "  color: var(--teal); margin: 0 0 16px;",
    "}",
    ".footer-brand-desc {",
    "  font-family: var(--font-ui); font-size: 14px; font-weight: 300;",
    "  line-height: 1.75; color: var(--white-40); max-width: 260px; margin: 0 0 24px;",
    "}",
    ".footer-social { display: flex; gap: 12px; align-items: center; }",
    ".footer-social a {",
    "  display: flex; align-items: center; justify-content: center;",
    "  width: 34px; height: 34px; border-radius: 50%;",
    "  border: 1px solid var(--white-20); color: var(--white-40);",
    "  text-decoration: none; transition: border-color 0.2s, color 0.2s;",
    "}",
    ".footer-social a:hover { border-color: var(--rose-light); color: #fff; }",
    ".footer-social a svg { width: 14px; height: 14px; fill: currentColor; }",
    ".footer-col h4 {",
    "  font-family: var(--font-ui); font-size: 10px; font-weight: 600;",
    "  letter-spacing: 0.14em; text-transform: uppercase;",
    "  color: var(--white-40); margin: 0 0 16px;",
    "}",
    ".footer-col a {",
    "  display: block; font-family: var(--font-ui); font-size: 14px;",
    "  font-weight: 300; color: var(--white-60); text-decoration: none;",
    "  margin-bottom: 11px; transition: color 0.2s; line-height: 1.4;",
    "}",
    ".footer-col a:hover { color: #fff; }",
    ".footer-col a.footer-accent { color: var(--teal); }",
    ".footer-col a.footer-accent:hover { color: #fff; }",
    ".footer-bottom {",
    "  display: flex; justify-content: space-between; align-items: center;",
    "  flex-wrap: wrap; gap: 12px;",
    "}",
    ".footer-bottom p {",
    "  font-family: var(--font-ui); font-size: 12px; font-weight: 300;",
    "  color: rgba(255,255,255,0.25); margin: 0;",
    "}",
    ".footer-bottom-links { display: flex; gap: 0; }",
    ".footer-bottom-links a {",
    "  font-family: var(--font-ui); font-size: 12px; font-weight: 300;",
    "  color: rgba(255,255,255,0.25); text-decoration: none;",
    "  margin-left: 20px; transition: color 0.2s;",
    "}",
    ".footer-bottom-links a:hover { color: rgba(255,255,255,0.6); }",
    ".footer-elements { display: flex; gap: 6px; align-items: center; margin-bottom: 20px; }",
    ".el-dot { width: 6px; height: 6px; border-radius: 50%; }",
    ".el-earth { background: #6B8E5A; }",
    ".el-water { background: #5B8FB9; }",
    ".el-air   { background: #C5B8A0; }",
    ".el-fire  { background: #823348; }",
    ".el-ether { background: #9370B8; }",
    ".footer-cards-row { display: flex; align-items: center; gap: 8px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--white-06); flex-wrap: wrap; }",
    ".footer-cards-label { font-family: var(--font-ui); font-size: 10px; color: rgba(255,255,255,0.25); letter-spacing: 0.08em; text-transform: uppercase; margin-right: 2px; }",
    ".footer-card-svg { border-radius: 3px; display: inline-block; vertical-align: middle; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }",
    "@media (max-width: 960px) {",
    "  .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }",
    "  .footer-brand { grid-column: 1 / -1; }",
    "  .footer-brand-desc { max-width: 480px; }",
    "}",
    "@media (max-width: 600px) {",
    "  .footer-top { grid-template-columns: 1fr 1fr; gap: 32px 24px; }",
    "  .footer-brand { grid-column: 1 / -1; }",
    "  .footer-cta-btns { flex-direction: column; align-items: center; }",
    "  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }",
    "  .footer-bottom-links { flex-wrap: wrap; gap: 4px; }",
    "  .footer-bottom-links a { margin-left: 0; margin-right: 16px; }",
    "}",
    "@media (max-width: 400px) {",
    "  .footer-top { grid-template-columns: 1fr; }",
    "}"
  ].join("\n");
  document.head.appendChild(style);

  // ── Inject Footer HTML ─────────────────────────────────────────
  var html = '<section class="footer-cta">'
    + '<div class="footer-cta-inner">'
    + '<div class="footer-cta-eyebrow">Start Here — It’s Always Free</div>'
    + '<h2>The Garden is growing.<br><em>Be part of it.</em></h2>'
    + '<p>Upload your photo and complete your Attunement Profile. Your personal readiness results arrive by email. When The Garden reaches 250, you’ll be first in line — and the people who love you will be ready to begin.</p>'
    + '<div class="footer-cta-btns">'
    + '<a href="/member-introduction-page" class="cta-white">Create My Introduction — It’s Free →</a>'
    + '<a href="/love-team" class="cta-outline-w">Learn about the Love Team</a>'
    + '</div>'
    + '<p style="font-family:\'Instrument Sans\',sans-serif;font-size:11px;color:rgba(255,255,255,0.45);margin-top:20px;font-style:italic;">No credit card. No commitment. Your Introduction is always free.</p>'
    + '</div></section>'
    + '<footer class="footer">'
    + '<div class="footer-inner">'
    + '<div class="footer-top">'
    + '<div class="footer-brand">'
    + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1121.02 327.7" style="height:56px;width:auto;display:block;margin-bottom:14px;" aria-label="TrueLuvTake2"> <defs> <style> .fc1 { fill: #89181a; } .fc2 { fill: #fff; } .fc3 { fill: #231f20; opacity: 0; } </style> </defs> <g id="Layer_1"> <g> <rect class="fc3" width="1121.02" height="327.7"/> <g> <g> <path class="fc2" d="M364.86,206.2v-56.71l14.23-.75v10.89c1.48-3.72,4.8-6.29,7.8-8.49,2.51-1.85,5.38-2.79,8.53-2.79s5.39.91,6.91,2.69c1.58,1.86,2.35,4.04,2.35,6.68s-.73,4.58-2.16,6.15c-1.42,1.54-3.31,2.32-5.63,2.32s-4.1-.57-5.42-1.73c-1.28-1.12-1.69-2.65-1.92-4.6-.49-4.26-3.31-4.6-4.16-4.6-1.01,0-2.06.39-2.74,1.02-2.62,2.4-3.55,6.46-3.55,9.45v40.48h-14.23Z"/> <path class="fc2" d="M943.21,207.78c-7.64,0-13.78-2.45-18.26-7.29-4.5-4.86-6.78-12.2-6.78-21.81s2.45-17.44,7.28-22.6c4.81-5.14,11.32-7.74,19.34-7.74,12.35,0,20.5,10.64,20.82,27.12h-31.61v.16c-.81.33-.81,1.43-.81,2.04,0,5.07.73,9.37,2.16,12.79,1.46,3.47,3.4,6.05,5.77,7.66.99.67,3.7,1.67,7.12,1.67s9.62-1.05,13.8-8.03l2.95,1.11c-2.79,9.07-11.31,14.92-21.79,14.92ZM944.97,151.89c-9.82,0-10.52,11.19-10.98,18.59l-.12,1.91h20.75l.03-.97c.12-4.84-1.09-13.47-4.91-17.4-1.38-1.41-2.98-2.13-4.77-2.13Z"/> <path class="fc2" d="M502.11,207.78c-7.64,0-13.78-2.45-18.26-7.29-4.5-4.86-6.78-12.19-6.78-21.81s2.45-17.44,7.28-22.6c4.81-5.14,11.32-7.74,19.33-7.74,12.35,0,20.5,10.64,20.82,27.12h-31.61v.16c-.81.33-.81,1.43-.81,2.04,0,5.07.73,9.38,2.16,12.79,1.46,3.47,3.4,6.05,5.77,7.66.99.67,3.7,1.67,7.12,1.67s9.62-1.05,13.8-8.03l2.95,1.11c-2.79,9.07-11.31,14.92-21.79,14.92ZM503.86,151.89c-9.82,0-10.52,11.18-10.98,18.59l-.12,1.91h20.75l.03-.97c.12-4.84-1.09-13.47-4.91-17.4-1.38-1.41-2.98-2.13-4.77-2.13Z"/> <path class="fc2" d="M689.74,206.42l-22.76-56.5h15.67l12.51,41.3,1.13-2.23s2.44-4.85,6.79-15.93c3.76-9.58,4.46-17.7,4.9-23.15h11.41l-24.65,56.5h-4.99Z"/> <path class="fc2" d="M840.58,206.98c-3.83,0-6.52-.74-7.98-2.19-1.47-1.47-2.23-3.43-2.3-5.97l-.1-3.34-1.75,2.85c-3.54,5.74-8.82,8.65-15.71,8.65-4.51,0-7.89-1.15-10.04-3.41-2.18-2.28-3.28-5.35-3.28-9.12,0-3.14.82-5.75,2.44-7.77,1.66-2.09,3.7-3.73,6.07-4.86,2.53-1.2,5.74-2.47,9.54-3.79,4.24-1.46,7.27-2.77,9.27-3.98,2.22-1.35,3.35-3.25,3.35-5.65v-8.79c0-3.7,0-9.89-8.33-9.89-2.63,0-4.88,1.01-5.87,2.63-.49.8-.89,2.11-.03,3.78l.15.29c.76,1.48,1.49,2.87,1.49,4.54,0,2.27-.74,4.02-2.25,5.34-1.54,1.33-3.44,2.01-5.65,2.01-2.34,0-4.09-.7-5.34-2.14-1.26-1.46-1.9-3.32-1.9-5.54,0-1.88.45-3.49,1.35-4.79.92-1.34,2.4-2.63,4.37-3.83,1.93-1.14,4.35-2.05,7.2-2.7,2.86-.65,6.06-.99,9.52-.99s6.72.37,9.32,1.09c2.53.71,4.66,1.91,6.33,3.58,1.51,1.52,2.54,3.41,3.06,5.62.54,2.34.81,5.56.81,9.58v38.48c-1.18.21-2.43.31-3.73.31ZM828.22,175.67c-.82,1.36-2.64,2.91-5.42,4.62-4.87,2.99-9.38,6.45-9.38,11.46,0,3.12.75,7.27,7.27,7.27,3.09,0,7.16-1.68,9.29-6.4l.09-.2v-19.84l-1.86,3.09Z"/> <path class="fc2" d="M895.38,206.2l-12.66-22.9c-.11-.18-.22-.39-.34-.64-.96-1.88-2.96-5.79-7.58-6.33l-1.12-.13v30h-14.23v-85.46l14.23-.75v51.06l1.18-.02c3.96-.06,8.54-2.34,11.41-5.68,3.51-4.09,7.92-12.67,9.3-15.43h10.59c-3.7,6.53-8.28,12.34-13.63,17.28-1.4,1.29-2.87,2.54-4.38,3.72l-.75.59,24.65,34.69h-16.67Z"/> <path class="fc2" d="M619.02,207.77c-5.32,0-9.2-1.36-11.54-4.05-1.09-1.29-1.9-3.02-2.43-5.16-.54-2.21-.82-5.18-.82-8.84v-40.24l14.23-.75v40.56c0,3.38.51,5.87,1.56,7.61,1.12,1.9,3.2,2.86,6.2,2.86,3.29,0,6.15-1.39,8.48-4.13,2.29-2.69,3.45-6.04,3.45-9.95v-36.2l14.23-.75v57.9l-14.23.75v-11.3c-3.31,6.69-11.11,11.69-19.14,11.69Z"/> <path class="fc2" d="M430.57,207.77c-5.32,0-9.2-1.36-11.54-4.05-1.09-1.29-1.91-3.03-2.43-5.16-.54-2.21-.82-5.18-.82-8.84v-40.24l14.23-.75v40.56c0,3.38.51,5.87,1.56,7.61,1.12,1.9,3.2,2.86,6.2,2.86,3.29,0,6.15-1.39,8.48-4.13,2.29-2.69,3.45-6.04,3.45-9.95v-36.2l14.23-.75v57.9l-14.23.75v-9.49l-1.72-.4-.18.35c-3.26,6.59-9.06,9.93-17.25,9.93Z"/> <path class="fc2" d="M315.04,206.2v-73.18h-1.1c-5.13,0-12.59,1.12-18.97,6.48-1.57,1.33-2.99,2.84-4.21,4.5h-1.1l-.4-15.61h67.51l-.4,15.61h-1.11c-1.22-1.65-2.63-3.16-4.21-4.49-6.38-5.36-13.83-6.48-18.97-6.48h-1.1v73.18h-15.93Z"/> <path class="fc2" d="M753.87,206.2v-73.18h-1.1c-5.13,0-12.59,1.12-18.97,6.48-1.58,1.33-2.99,2.84-4.21,4.5h-1.11l-.4-15.61h67.51l-.4,15.61h-1.1c-1.22-1.65-2.63-3.17-4.21-4.49-6.38-5.36-13.83-6.48-18.97-6.48h-1.1v73.18h-15.93Z"/> <path class="fc2" d="M977.72,206.2l-.42-2.05c2.82-3.11,16.06-17.77,22.74-26.03,8.05-9.94,20.61-28.59,14.33-41.75-3.17-6.64-9.95-9-14.79-9-4.25,0-7.92,1.62-9.8,4.33-1.33,1.9.03,3.35.94,4.32.22.23.41.43.58.64.77.92,1.3,2.06,1.52,3.3.47,2.52-.34,5.06-2.12,6.63-1.49,1.33-3.33,2-5.47,2-2.28,0-4.01-.69-5.29-2.1-1.31-1.44-1.94-3.12-1.94-5.13,0-8.34,8.76-16.78,25.5-16.78s24.34,8.62,25.74,16c3.33,17.54-13.74,32.15-28.8,45.04-3.85,3.3-7.43,6.36-10.6,9.39l-1.95,1.86,29.83-1.51c4.29-.23,8.2-2.23,10.74-5.48h1.22l.42,16.32h-52.38Z"/> <path class="fc2" d="M539.01,206.2v-77.81h15.93v71.17h1.11c.88,0,21.7-.07,29.33-6.48,1.58-1.33,3-2.85,4.21-4.5h1.1l.41,17.61h-52.09Z"/> </g> <path class="fc1" d="M169.54,238.31l-19.82-19.83c2.76-2.35,6.27-3.63,9.91-3.63,1.43,0,2.86.2,4.26.59,2.43.68,4.74,2.07,6.7,4.03l3.65,3.65,59.68-59.68.63-.6v-.04c6.19-6.4,9.25-14.83,8.63-23.77-1.09-15.5-13.62-27.84-29.14-28.71-.59-.03-1.18-.05-1.76-.05-17.08,0-30.99,13.9-31,30.99,0,9.27-2.79,18.16-8.06,25.73-1.55,2.21-3.28,4.27-5.14,6.14l-31.85,31.85-10.83-10.82-21.03-21.03c-17.55-17.57-17.55-46.15,0-63.72,8.51-8.51,19.83-13.2,31.86-13.2s23.35,4.69,31.85,13.2c1.86,1.86,3.59,3.93,5.14,6.14l1.02,1.46,1.02-1.46c1.55-2.21,3.28-4.27,5.14-6.14,8.51-8.51,19.82-13.2,31.86-13.2s22.8,4.47,31.23,12.58c8.6,8.28,13.4,19.55,13.52,31.73.12,12.41-4.81,24.53-13.53,33.25l-69.24,69.24-4.68-4.69ZM136.2,185.08l21.54-21.54h.71l.02-.74c5.54-5.71,8.64-13.24,8.72-21.21.01-.21.01-.47,0-.74-.09-8.56-3.63-16.51-9.97-22.38-5.73-5.3-13.2-8.21-21.03-8.21h-.28c-9.34.09-18.08,4.35-23.98,11.71-3.73,4.65-6,10.26-6.57,16.22-.87,9.11,2.25,18.07,8.56,24.6v.72l.73.02,21.55,21.55Z"/> </g> </g> </g> </svg>'
    + '<p class="footer-tagline">People-First · Adults 50+</p>'
    + '<div class="footer-elements" title="The Five Elements of Connection">'
    + '<div class="el-dot el-earth"></div><div class="el-dot el-water"></div>'
    + '<div class="el-dot el-air"></div><div class="el-dot el-fire"></div>'
    + '<div class="el-dot el-ether"></div>'
    + '</div>'
    + '<p class="footer-brand-desc">The first platform where the people who love you most lead the search. No swiping. No algorithms. No pretending.</p>'
    + '<div class="footer-social">'
    + '<a href="https://www.instagram.com/trueluvtake2" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>'
    + '<a href="https://www.facebook.com/trueluvtake2" aria-label="Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>'
    + '<a href="https://www.linkedin.com/company/trueluvtake2" aria-label="LinkedIn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>'
    + '</div></div>'
    + '<div class="footer-col"><h4>Navigate</h4>'
    + '<a href="/">Home</a>'
    + '<a href="/how-it-works">Seeker Journey</a>'
    + '<a href="/love-team">Love Team</a>'
    + '<a href="/membership">Membership</a>'
    + '<a href="/about">Meet the Founder</a>'
    + '<a href="/faq">FAQ</a>'
    + '</div>'
    + '<div class="footer-col"><h4>Resources</h4>'
    + '<a href="https://go.trueluvtake2.com/reflections" target="_blank" rel="noopener" class="footer-accent">Reflections Blog</a>'
    + '<a href="/five-elements">5 Elements</a>'
    + '<a href="/love-team">The Love Team</a>'
    + '</div>'
    + '<div class="footer-col"><h4>Connect</h4>'
    + '<a href="/member-introduction-page" class="footer-accent">Begin My Introduction →</a>'
    + '<a href="https://connect.trueluvtake2.com" target="_blank" rel="noopener">Member Sign In</a>'
    + '<a href="/love-team">Support a Loved One</a>'
    + '<a href="mailto:hello@trueluvtake2.com">hello@trueluvtake2.com</a>'
    + '</div>'
    + '</div>'
    + '<div class="footer-bottom">'
    + '<p>© 2026 TrueLuvTake2. All rights reserved. Built with intention for adults who deserve better.</p>'
    + '<div class="footer-bottom-links">'
    + '<a href="/privacy-policy">Privacy Policy</a>'
    + '<a href="/terms-of-service">Terms of Use</a>'
    + '<a href="/cookie-policy">Cookie Policy</a>'
    + '<a href="mailto:hello@trueluvtake2.com">Contact</a>'
    + '</div></div>'
    + '<div class="footer-cards-row">'
    + '<span class="footer-cards-label">Secure Payment</span>'
    + '<svg class="footer-card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" width="40" height="26" aria-label="Visa"><rect width="40" height="26" rx="3" fill="#1A1F71"/><text x="20" y="17" font-family="Arial,sans-serif" font-size="11" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">VISA</text></svg>'
    + '<svg class="footer-card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" width="40" height="26" aria-label="Mastercard"><rect width="40" height="26" rx="3" fill="#F6F6F6"/><circle cx="15" cy="13" r="8" fill="#EB001B"/><circle cx="25" cy="13" r="8" fill="#F79E1B" opacity="0.92"/></svg>'
    + '<svg class="footer-card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" width="40" height="26" aria-label="American Express"><rect width="40" height="26" rx="3" fill="#2E77BC"/><text x="20" y="15" font-family="Arial,sans-serif" font-size="7.5" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">AMEX</text></svg>'
    + '<svg class="footer-card-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" width="40" height="26" aria-label="Discover"><rect width="40" height="26" rx="3" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="0.5"/><circle cx="29" cy="13" r="9" fill="#F76F20"/><text x="5" y="14" font-family="Arial,sans-serif" font-size="5" font-weight="700" fill="#231F20" dominant-baseline="middle">DISC</text><text x="5" y="20" font-family="Arial,sans-serif" font-size="4" font-weight="600" fill="#231F20">OVER</text></svg>'
    + '</div>'
    + '</div></footer>';

  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  while (tmp.firstChild) {
    document.body.appendChild(tmp.firstChild);
  }

})();
