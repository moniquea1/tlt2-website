# TrueLuvTake2 — Project Guide for Claude

## How we deploy (READ FIRST)

- The live marketing site is THIS repo (`tlt2-website`) -> Vercel. Pushing to `main` auto-deploys in ~1-2 minutes.
- **Deploy with plain git only**, from `C:\Users\Owner\Projects\tlt2-website`, using the Windows credential vault. **No personal access tokens. No `.bat` deploy scripts.** Those are retired and must not be recreated.
- **Never create a token or paste any secret into a chat — any chat.** If a script or assistant asks you to, STOP and check with Monique. (This rule was tested and held on 2026-08-04.)
- Division of labor: **Claude edits files** in the repo (surgically, preserving line endings); **Monique runs git** — `git add <specific file>`, `git commit -m "..."`, `git push`. Stage specific files, not `git add -A`.
- Editing from a Linux bridge can show phantom line-ending diffs (equal +/- counts across many files). Trust `git status` in native PowerShell, and preserve CRLF when editing.
- `/the-garden` is a normal page in THIS repo. The separate `tlt2-garden.vercel.app` (built from the `garden/` folder) is the live member-count API — do not touch it unless asked.

## Brand voice & terminology

- See **BRAND-TERMS.md** for the definitions of Introduction / Profile / Presentation and the membership model. Use those terms exactly.

## Makeover phases

- Current pass = **design & presentation**: layout, flow, imagery, readability, and removing duplicate/redundant blocks. Do NOT rewrite prose during this pass — only remove wholesale redundancy.
- **Copy fine-tuning is a separate later pass.**
- Site-wide standards: light palette; burgundy `#89181A` = action (matches the logo heart); teal `#2BA5B4` = Love Team wayfinding; gold `#C4860A` = founding moments. Motion: desktop hover + gentle mobile scroll-reveal.
