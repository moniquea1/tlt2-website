(function() {

  // ── Vercel Speed Insights (static site: load the script directly) ──
  (function(){
    if (document.getElementById('vercel-speed-insights')) return;
    var si = document.createElement('script');
    si.id = 'vercel-speed-insights';
    si.defer = true;
    si.src = '/_vercel/speed-insights/script.js';
    document.head.appendChild(si);
  })();

  // ── Inject Nav Styles ──────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = "\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   DESIGN TOKENS\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n:root {\n  --bg:           #F9F6F0;\n  --text-head:    #1a1614;\n  --text-muted:   #5a524e;\n  --brand:        #823348;\n  --brand-dark:   #6d2a3d;\n  --teal:         #2BA5B4;\n  --border-faint: rgba(130,51,72,0.06);\n}\n*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\nbody { margin: 0; padding: 0; font-family: 'Instrument Sans', system-ui, sans-serif; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   NAV SHELL\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.tl2-nav {\n  position: fixed;\n  top: 0; left: 0; right: 0;\n  z-index: 9999;\n  background: rgba(249,246,240,0.96);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border-bottom: 1px solid transparent;\n  transition: border-color 0.4s, box-shadow 0.4s;\n}\n.tl2-nav.scrolled {\n  border-color: var(--border-faint);\n  box-shadow: 0 1px 0 rgba(130,51,72,0.05), 0 6px 24px rgba(130,51,72,0.07);\n}\n.tl2-nav.scrolled::after {\n  content: '';\n  position: absolute;\n  bottom: -20px; left: 50%; transform: translateX(-50%);\n  width: 60%; height: 20px;\n  background: radial-gradient(ellipse, rgba(130,51,72,0.07) 0%, transparent 70%);\n  pointer-events: none;\n  animation: navGlowPulse 4s ease-in-out infinite;\n}\n@keyframes navGlowPulse {\n  0%, 100% { opacity: 0.5; }\n  50%       { opacity: 1; }\n}\n.nav-container {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 1.125rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   LOGO\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-logo {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n  opacity: 1;\n  transition: opacity 0.25s;\n}\n.nav-logo:hover { opacity: 0.82; }\n.nav-logo-img {\n  height: 58px;\n  width: auto;\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   TOP-LEVEL NAV LINKS\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  list-style: none;\n}\n.nav-links > li {\n  position: relative;\n}\n.nav-links > li > a {\n  position: relative;\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  text-decoration: none;\n  padding: 0.35rem 0.75rem;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: color 0.2s, background 0.2s;\n  white-space: nowrap;\n}\n.nav-links > li > a:hover {\n  color: var(--text-head);\n  background: rgba(130,51,72,0.04);\n}\n.nav-links > li > a.nav-active {\n  color: var(--brand);\n  font-weight: 500;\n}\n\n/* Chevron icon for dropdown parents */\n.nav-chevron {\n  width: 12px; height: 12px;\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  opacity: 0.5;\n}\n.nav-has-dropdown:hover .nav-chevron { transform: rotate(180deg); opacity: 1; }\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   DROPDOWN PANEL\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(-6px);\n  background: #FAF7F2;\n  border: 1px solid rgba(130,51,72,0.09);\n  border-radius: 10px;\n  box-shadow: 0 12px 40px rgba(26,20,16,0.13), 0 2px 8px rgba(26,20,16,0.06);\n  min-width: 210px;\n  padding: 8px 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.18s ease, visibility 0.18s ease, transform 0.18s ease;\n  pointer-events: none;\n  z-index: 100;\n}\n\n/* Show on hover (desktop) */\n.nav-has-dropdown:hover .nav-dropdown,\n.nav-has-dropdown:focus-within .nav-dropdown {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0);\n  pointer-events: auto;\n}\n\n/* Small notch/bridge so mouse can travel to dropdown */\n.nav-dropdown-bridge {\n  position: absolute;\n  top: -8px; left: 0; right: 0;\n  height: 8px;\n}\n\n/* Category label inside dropdown */\n.nav-dropdown-label {\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 9px;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(130,51,72,0.45);\n  padding: 6px 18px 4px;\n  display: block;\n}\n\n.nav-dropdown a {\n  display: block;\n  padding: 9px 18px;\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 0.84rem;\n  color: var(--text-muted);\n  text-decoration: none;\n  transition: color 0.18s, background 0.18s;\n  white-space: nowrap;\n}\n.nav-dropdown a:hover {\n  color: var(--brand);\n  background: rgba(130,51,72,0.04);\n}\n\n/* Subtle rule between dropdown groups */\n.nav-dropdown-rule {\n  height: 1px;\n  background: rgba(130,51,72,0.07);\n  margin: 6px 18px;\n}\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   NAV RIGHT (Sign In + CTA)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.nav-signin {\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  text-decoration: none;\n  padding: 0.35rem 0;\n  transition: color 0.25s;\n  white-space: nowrap;\n}\n.nav-signin:hover { color: var(--brand); }\n\n.nav-cta {\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 0.65rem 1.5rem;\n  background: #823348;\n  color: #fff;\n  border-radius: 50px;\n  text-decoration: none;\n  box-shadow: 0 2px 10px rgba(130,51,72,0.2);\n  transition: background 0.25s, box-shadow 0.25s, transform 0.2s;\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.nav-cta::before {\n  content: '';\n  position: absolute;\n  top: 0; left: -100%;\n  width: 60%; height: 100%;\n  background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);\n  transition: left 0.45s ease;\n}\n.nav-cta:hover::before { left: 160%; }\n.nav-cta:hover {\n  background: var(--brand-dark);\n  box-shadow: 0 4px 18px rgba(130,51,72,0.32);\n  transform: translateY(-1px);\n}\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   HAMBURGER (mobile only)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  width: 32px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  padding: 4px;\n}\n.nav-hamburger span {\n  display: block;\n  height: 1.5px;\n  background: var(--text-head);\n  border-radius: 2px;\n  transition: transform 0.3s, opacity 0.3s, background 0.25s;\n}\n.nav-hamburger:hover span { background: var(--brand); }\n.nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }\n.nav-hamburger.open span:nth-child(2) { opacity: 0; }\n.nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   MOBILE OVERLAY\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-mobile {\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  background: rgba(249,246,240,0.98);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  z-index: 9998;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.35s, visibility 0.35s;\n  overflow-y: auto;\n  padding: 7rem 2rem 4rem;\n}\n.nav-mobile.open { opacity: 1; visibility: visible; }\n.nav-mobile::before {\n  content: '';\n  position: absolute;\n  top: 30%; left: 50%; transform: translate(-50%, -50%);\n  width: 500px; height: 500px;\n  background: radial-gradient(circle, rgba(130,51,72,0.06) 0%, transparent 65%);\n  border-radius: 50%;\n  filter: blur(40px);\n  pointer-events: none;\n  animation: mobileOrb 5s ease-in-out infinite;\n}\n@keyframes mobileOrb {\n  0%, 100% { transform: translate(-50%, -50%) scale(1); }\n  50%       { transform: translate(-50%, -50%) scale(1.1); }\n}\n\n/* Primary mobile links \u2014 Playfair, large */\n.nav-mobile > a,\n.nav-mobile > .mob-group > a.mob-primary {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: 1.8rem;\n  color: var(--text-head);\n  text-decoration: none;\n  transition: color 0.25s, transform 0.25s;\n  position: relative;\n  padding: 0.6rem 0;\n  text-align: center;\n  display: block;\n}\n.nav-mobile > a:hover,\n.nav-mobile > .mob-group > a.mob-primary:hover {\n  color: var(--brand);\n  transform: translateX(6px);\n  font-style: italic;\n}\n\n/* Mobile sub-links \u2014 Instrument Sans, smaller */\n.mob-sub-links {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  padding: 4px 0 8px;\n}\n.mob-sub-links a {\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  text-decoration: none;\n  padding: 5px 16px;\n  border-radius: 4px;\n  transition: color 0.2s, background 0.2s;\n}\n.mob-sub-links a:hover {\n  color: var(--brand);\n  background: rgba(130,51,72,0.05);\n}\n\n.mobile-divider {\n  width: 40px; height: 1px;\n  background: rgba(130,51,72,0.2);\n  margin: 0.75rem auto;\n}\n\n.nav-mobile .btn-primary-mob {\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  padding: 1rem 2.5rem;\n  background: var(--brand);\n  color: #fff;\n  border-radius: 50px;\n  text-decoration: none;\n  font-style: normal !important;\n  margin-top: 1.25rem;\n  display: inline-block;\n  transition: background 0.25s, transform 0.2s;\n}\n.nav-mobile .btn-primary-mob:hover { background: var(--brand-dark); transform: translateY(-2px) !important; }\n\n.nav-mobile .btn-signin-mob {\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 0.65rem 1.75rem;\n  background: none;\n  color: var(--text-muted);\n  border-radius: 50px;\n  text-decoration: none;\n  font-style: normal !important;\n  border: 1px solid rgba(130,51,72,0.2);\n  margin-top: 0.75rem;\n  display: inline-block;\n  transition: border-color 0.25s, color 0.25s;\n}\n.nav-mobile .btn-signin-mob:hover { border-color: rgba(130,51,72,0.5); color: var(--brand); }\n\n.nav-mobile-close {\n  position: absolute;\n  top: 1.5rem; right: 1.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-head);\n  transition: color 0.25s, transform 0.3s;\n  z-index: 1;\n}\n.nav-mobile-close:hover { color: var(--brand); transform: rotate(90deg); }\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   NAV OFFSET\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.nav-offset { height: 78px; }\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   FOUNDING CIRCLE BAR\n   TO UPDATE WHEN NEW MEMBERS JOIN:\n   1. Change the number inside <span id=\"fcCount\">16</span>\n   2. Update style=\"width: X%\" on .fc-progress-fill\n      Formula: members \u00f7 250 \u00d7 100  (e.g. 20 members = 8%)\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.fc-bar {\n  background: #C4860A;\n  position: relative;\n  overflow: hidden;\n}\n.fc-bar-inner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  height: 36px;\n  padding: 0 1rem;\n}\n.fc-text {\n  color: rgba(255,255,255,0.92);\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.fc-text strong {\n  color: white;\n  font-weight: 700;\n}\n.fc-cta {\n  background: white;\n  color: #1A1410;\n  padding: 4px 14px;\n  border-radius: 50px;\n  font-family: 'Instrument Sans', system-ui, sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.2s, color 0.2s;\n  flex-shrink: 0;\n}\n.fc-cta:hover { background: rgba(255,255,255,0.85); color: #1A1410; }\n.fc-cta-ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.55); }\n.fc-cta-ghost:hover { background: rgba(255,255,255,0.12); color: #fff; }\n.fc-progress-track {\n  height: 2px;\n  background: rgba(255,255,255,0.2);\n}\n.fc-progress-fill {\n  height: 100%;\n  background: rgba(255,255,255,0.5);\n  transition: width 0.8s ease;\n}\n\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n   RESPONSIVE\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n@media (max-width: 900px) {\n  .nav-links, .nav-cta, .nav-signin { display: none; }\n  .nav-hamburger { display: flex; }\n  .nav-offset { height: 72px; }\n  .nav-container { padding: 0.65rem 1.25rem; }\n  .nav-logo-img { height: 42px; }\n}\n@media (max-width: 640px) {\n  .fc-bar-inner { gap: 8px; }\n  .fc-text { font-size: 10px; }\n  .fc-text .fc-hide-mobile { display: none; }\n  .fc-cta { font-size: 10px; }\n}\n@media (max-width: 380px) {\n  .fc-bar-inner { height: 22px; }\n}\n\n\n\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n";
  document.head.appendChild(style);

  // ── Inject Nav HTML ────────────────────────────────────────────
  var tmp = document.createElement('div');
  tmp.innerHTML = "<header class=\"tl2-nav\" id=\"tl2Nav\">\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       FOUNDING CIRCLE BAR\n       UPDATE WHEN NEW MEMBERS JOIN:\n       1. Change the number in <span id=\"fcCount\">16</span>\n       2. Update width % on fc-progress-fill (members \u00f7 250 \u00d7 100)\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"fc-bar\">\n    <div class=\"fc-bar-inner\">\n      <span class=\"fc-text\" id=\"fcText\">The founding circle is forming&nbsp;·&nbsp;<strong>250 opens the Garden</strong></span>\n      <a href=\"https://www.trueluvtake2.com/member-introduction-page\" class=\"fc-cta\">Join free \u2192</a>\n      <a href=\"https://www.trueluvtake2.com/founding-member\" class=\"fc-cta fc-cta-ghost\">Founding \u2192</a>\n    </div>\n    <div class=\"fc-progress-track\">\n      <div class=\"fc-progress-fill\" style=\"width: 4.8%\"></div>\n    </div>\n  </div>\n\n  <div class=\"nav-container\">\n\n    <!-- Logo -->\n    <a href=\"https://www.trueluvtake2.com/\" class=\"nav-logo\" aria-label=\"TrueLuvTake2 \u2014 Home\">\n      <img\n        src=\"https://www.trueluvtake2.com/assets/logo.png\"\n        alt=\"TrueLuvTake2\"\n        class=\"nav-logo-img\"\n      />\n    </a>\n\n    <!-- Desktop nav -->\n    <ul class=\"nav-links\" role=\"navigation\" aria-label=\"Main navigation\">\n\n      <!-- HOW TO ENGAGE \u2014 dropdown -->\n      <li class=\"nav-has-dropdown\">\n        <a href=\"https://www.trueluvtake2.com/how-it-works\" aria-haspopup=\"true\">\n          How to Engage\n          <svg class=\"nav-chevron\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M2 4L6 8L10 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </a>\n        <div class=\"nav-dropdown\" role=\"menu\">\n          <div class=\"nav-dropdown-bridge\"></div>\n          <span class=\"nav-dropdown-label\">Explore TLT2</span>\n          <a href=\"https://www.trueluvtake2.com/how-it-works\" role=\"menuitem\">The Seeker Journey</a>\n          <a href=\"https://www.trueluvtake2.com/the-garden\" role=\"menuitem\">The Garden</a>\n          <a href=\"https://www.trueluvtake2.com/five-elements\" role=\"menuitem\">The 5 Elements</a>\n          <a href=\"https://go.trueluvtake2.com/profiles\" role=\"menuitem\">Attunement Profile</a>\n          <a href=\"https://www.trueluvtake2.com/love-team\" role=\"menuitem\">Love Team</a>\n        </div>\n      </li>\n\n      <!-- MEMBERSHIP \u2014 dropdown -->\n      <li class=\"nav-has-dropdown\">\n        <a href=\"https://www.trueluvtake2.com/founding-member\" aria-haspopup=\"true\">\n          Membership\n          <svg class=\"nav-chevron\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M2 4L6 8L10 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </a>\n        <div class=\"nav-dropdown\" role=\"menu\">\n          <div class=\"nav-dropdown-bridge\"></div>\n          <span class=\"nav-dropdown-label\">Join TLT2</span>\n          <a href=\"https://www.trueluvtake2.com/founding-member\" role=\"menuitem\">Founding Member</a>\n          <a href=\"https://go.trueluvtake2.com/membership\" role=\"menuitem\">Membership Overview</a>\n        </div>\n      </li>\n\n      <!-- ABOUT \u2014 dropdown -->\n      <li class=\"nav-has-dropdown\">\n        <a href=\"https://www.trueluvtake2.com/about\" aria-haspopup=\"true\">\n          About\n          <svg class=\"nav-chevron\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n            <path d=\"M2 4L6 8L10 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </a>\n        <div class=\"nav-dropdown\" role=\"menu\">\n          <div class=\"nav-dropdown-bridge\"></div>\n          <span class=\"nav-dropdown-label\">Our Story</span>\n          <a href=\"https://www.trueluvtake2.com/about\" role=\"menuitem\">Meet Monique</a>\n          <a href=\"https://www.trueluvtake2.com/faq\" role=\"menuitem\">FAQ</a>\n          <div class=\"nav-dropdown-rule\"></div>\n          <a href=\"https://go.trueluvtake2.com/reflections\" target=\"_blank\" rel=\"noopener\" role=\"menuitem\">Reflections</a>\n        </div>\n      </li>\n\n      <!-- MEDIA -->\n      <li>\n        <a href=\"https://www.trueluvtake2.com/media\">Media</a>\n      </li>\n\n      <!-- PARTNER WITH US -->\n      <li>\n        <a href=\"https://www.trueluvtake2.com/partner-with-us\">Partner with Us</a>\n      </li>\n\n    </ul>\n\n    <!-- Right: sign in + CTA -->\n    <div class=\"nav-right\">\n      <a href=\"https://connect.trueluvtake2.com/login\" class=\"nav-signin\">Member Sign In</a>\n      <a href=\"https://www.trueluvtake2.com/join\" class=\"nav-cta\">Begin Here</a>\n      <!-- Hamburger (mobile) -->\n      <button class=\"nav-hamburger\" id=\"navHamburger\" aria-label=\"Open menu\" aria-expanded=\"false\">\n        <span></span><span></span><span></span>\n      </button>\n    </div>\n\n  </div>\n</header>\n";
  document.body.insertBefore(tmp.firstElementChild, document.body.firstChild);

  // ── Inject Nav Offset ─────────────────────────────────────────
  var offset = document.createElement('div');
  offset.className = 'nav-offset';
  // Insert nav-offset right after the nav (which is now firstChild)
  document.body.insertBefore(offset, document.body.firstChild.nextSibling);


  // ── Inject Mobile Overlay ─────────────────────────────────────
  var mobileOverlay = document.createElement('div');
  mobileOverlay.id = 'navMobile';
  mobileOverlay.className = 'nav-mobile';
  mobileOverlay.innerHTML = [
    '<button id="navClose" class="nav-mobile-close" aria-label="Close menu">',
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
      '</svg>',
    '</button>',

    '<div class="mob-group">',
      '<a href="https://www.trueluvtake2.com/how-it-works" class="mob-primary">How to Engage</a>',
      '<div class="mob-sub-links">',
        '<a href="https://www.trueluvtake2.com/how-it-works">The Seeker Journey</a>',
        '<a href="https://www.trueluvtake2.com/the-garden">The Garden</a>',
        '<a href="https://www.trueluvtake2.com/five-elements">The 5 Elements</a>',
        '<a href="https://go.trueluvtake2.com/profiles">Attunement Profile</a>',
        '<a href="https://www.trueluvtake2.com/love-team">Love Team</a>',
      '</div>',
    '</div>',

    '<div class="mobile-divider"></div>',
    '<div class="mob-group">',
      '<a href="https://go.trueluvtake2.com/membership" class="mob-primary">Membership</a>',
      '<div class="mob-sub-links">',
        '<a href="https://www.trueluvtake2.com/founding-member">Founding Member</a>',
        '<a href="https://go.trueluvtake2.com/membership">Membership Overview</a>',
      '</div>',
    '</div>',
    '<div class="mobile-divider"></div>',

    '<div class="mob-group">',
      '<a href="https://www.trueluvtake2.com/about" class="mob-primary">About</a>',
      '<div class="mob-sub-links">',
        '<a href="https://www.trueluvtake2.com/about">Meet Monique</a>',
        '<a href="https://www.trueluvtake2.com/faq">FAQ</a>',
        '<a href="https://go.trueluvtake2.com/reflections" target="_blank" rel="noopener">Reflections</a>',
      '</div>',
    '</div>',

    '<div class="mobile-divider"></div>',
    '<a href="https://www.trueluvtake2.com/media" class="mob-primary">Media</a>',
    '<div class="mobile-divider"></div>',
    '<a href="https://www.trueluvtake2.com/partner-with-us" class="mob-primary">Partner with Us</a>',
    '<div class="mobile-divider"></div>',

    '<a href="https://www.trueluvtake2.com/join" class="btn-primary-mob">Begin Here</a>',
    '<a href="https://connect.trueluvtake2.com/login" class="btn-signin-mob">Member Sign In</a>'
  ].join('');
  document.body.appendChild(mobileOverlay);

  // ── Nav Behaviour ─────────────────────────────────────────
  var nav       = document.getElementById('tl2Nav');
  var hamburger = document.getElementById('navHamburger');
  var mobile    = document.getElementById('navMobile');
  var closeBtn  = document.getElementById('navClose');

  if (!nav || !hamburger || !mobile) {
    console.warn('TL2 Nav: required elements not found');
  } else {

    // Scroll shadow
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    function openMobile() {
      mobile.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobile() {
      mobile.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    window.closeMobile = closeMobile;

    // Hamburger opens menu
    hamburger.addEventListener('click', function () {
      mobile.classList.contains('open') ? closeMobile() : openMobile();
    });

    // Close button
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMobile);
    }

    // Tap backdrop to close
    mobile.addEventListener('click', function (e) {
      if (e.target === mobile) closeMobile();
    });

    // Escape key closes
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobile.classList.contains('open')) closeMobile();
    });

    // Active page highlight
    var currentPath = window.location.pathname.replace(/\/$/, '');
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var linkPath = href.replace(/\/$/, '').replace('https://trueluvtake2.com', '').replace('https://www.trueluvtake2.com', '');
      if (linkPath && currentPath === linkPath) {
        link.classList.add('nav-active');
      }
    });

    // Live Founding Circle Counter
    fetch('https://tlt2-garden.vercel.app/api/count')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var n = data.count || 0;
        if (n >= 50) {
          var t = document.getElementById('fcText');
          if (t) t.innerHTML = 'Founding Members &nbsp;·&nbsp; <strong>' + n + ' of 250</strong> spots claimed <span class="fc-hide-mobile">&nbsp;·&nbsp; Garden opens at 250</span>';
          var fillEl = document.querySelector('.fc-progress-fill');
          if (fillEl) fillEl.style.width = ((data.percentage || Math.round(n/250*100))) + '%';
        }
      })
      .catch(function() {});
  }

})();
