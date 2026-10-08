# Crochet Pal

No-build static site. Open `index.html` through any static server (`python3 -m http.server`). There's no package.json, bundler or JSX source.

## Layout

The `.js` files are compiled `React.createElement` output exported from a design tool. Edit them by hand in the same style. `index.html` loads them as classic scripts, in this order:

- `react.js`, `react-dom.js`: vendored React UMD builds. Don't edit.
- `ios-frame.js`: `IOSDevice` and `IOSStatusBar`, the desktop phone mockup frame.
- `tweaks-panel.js`: design-tool tweak panel (`useTweaks`, `TweaksPanel`).
- `data.js`: `PATTERNS` and other placeholder sample data.
- `ui.js`: shared components (`Chip`, `SectionHead`, `HeartBtn`, `PatternCard`, `Tag`, `NavBtn`, `ProjectShot`) and the `loadJSON`/`saveJSON` localStorage helpers.
- `screens-a.js`: Home, Search, Results, Saved.
- `screens-b.js`: Detail, Mystery, Learn.
- `screens-c.js`: Make tab (dictate rows, Groq write-up, My patterns).
- `app.js`: `App`, routing via the `route.name` switch, `BottomNav`, phone vs desktop shell.

## Conventions

- Every file shares one global scope. Each file exports via `Object.assign(window, {...})`, and top-level `const`s must not collide across files, which is why React hooks are aliased per file (`useStateB`, `useStateC`, `useAppState`).
- A new screen goes in a `screens-*.js` file loaded before `app.js`, plus a `case` in `App`'s switch and an item in `BottomNav`.
- All styles are inline objects. Palette: ink `#1F1A2C`, cream `#FFF8F0`, yellow `#F5B83D`, pink `#E8516E`, violet `#7B7CE0`, green `#7BA88B`. Headings use Bricolage Grotesque; body text uses Plus Jakarta Sans.
- localStorage keys use a `cp.` prefix: `cp.saved`, `cp.draft`, `cp.myPatterns`, `cp.groqKey`. The user's Groq key lives only in localStorage. Never hardcode or commit a key.
- Viewports up to 600px wide render full screen (`useIsPhone` in `app.js`). Wider viewports render inside `IOSDevice`. The owner uses a Samsung S25 Ultra (Chrome on Android, about 412px wide).

## Checking changes

- Run `node --check <file>.js` on every edited file. A stray `)` in compiled output kills the whole file silently, and every screen it defines then crashes at runtime.
- Test with Playwright at 412x915 and fail on any `pageerror` or console error. Playwright is installed globally (`require(\`${npm root -g}/playwright\`)`), with Chromium at `/opt/pw-browsers`.
- Chrome 139+ exposes `SpeechRecognition` unprefixed, so a test mock must replace both `window.SpeechRecognition` and `window.webkitSpeechRecognition`.
- The cloud container's proxy blocks `api.groq.com`. Mock it with `context.route`.
- In nav buttons, a badge count becomes part of the accessible name (for example "2 Saved"). Match with a regex rather than `exact`.

## Gotchas learned

- Chrome on Android repeats results with `continuous = true`. `useDictation` recognises one utterance at a time and restarts on `end` while the mic is on.
- An effect that persists state won't run if the same render unmounts the component. Clear storage directly before navigating away (see `RecordView.save`).
- Groq retired `llama-3.3-70b-versatile` on 2026-08-16. `GROQ_MODEL` in `screens-c.js` is `openai/gpt-oss-120b`.
