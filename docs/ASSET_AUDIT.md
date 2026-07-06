# Casa di Andrey Asset Audit

Generated during Phase 1 cleanup and updated during Phase 2. No original assets were
deleted or destructively optimized.

## Phase 2 media loading update

The videos remain in `src/assets/` for this GitHub publish to avoid adding a
second duplicate copy of every large MP4. The redesigned components now avoid
autoplay and use `preload="metadata"` or `preload="none"` so media is less
aggressive in the browser.

The large files listed below still need manual compression/transcoding before
launch. A later phase can move optimized versions to `public/` or external media
hosting/CDN.

## Video assets

| Asset | Size | Current use |
| --- | ---: | --- |
| `src/assets/aurora_7weeks.mp4` | 3.0M | `sevenWeekPuppies` data, Eos Aurora card |
| `src/assets/titian_7weeks.mp4` | 3.8M | `sevenWeekPuppies` data, Eros Titan 7-week card |
| `src/assets/egon_7weeks.mp4` | 4.4M | `sevenWeekPuppies` data, Egon Imperius card |
| `src/assets/nova_7weeks.mp4` | 5.1M | `sevenWeekPuppies` data, Elysia Nova card |
| `src/assets/magnus_7weeks.mp4` | 5.3M | `sevenWeekPuppies` data, Eros Magnus card |
| `src/assets/titan_8weeks.mp4` | 18M | `eightWeekPuppies` data, Eros Titan 8-week card |
| `src/assets/video_3.mp4` | 19M | `litters` data, litter update clip 3 |
| `src/assets/video_1.mp4` | 21M | `litters` data, litter update clip 1 |
| `src/assets/video_2.mp4` | 27M | `litters` data, litter update clip 2 |
| `src/assets/egon_8weeks.mp4` | 29M | `eightWeekPuppies` data, Egon Imperius 8-week card |
| `src/assets/aurora_8weeks.mp4` | 31M | `eightWeekPuppies` data, Eos Aurora 8-week card |
| `src/assets/magnus_8weeks.mp4` | 34M | `eightWeekPuppies` data, Eros Magnus 8-week card |
| `src/assets/nova_8weeks.mp4` | 46M | `eightWeekPuppies` data, Elysia Nova 8-week card |
| `src/assets/aurora_5weeks.mp4` | 1.8M | Probable unused older puppy clip |
| `src/assets/egon_5weeks.mp4` | 1.8M | Probable unused older puppy clip |
| `src/assets/magnus_5weeks.mp4` | 1.9M | Probable unused older puppy clip |
| `src/assets/nova_5weeks.mp4` | 1.7M | Probable unused older puppy clip |
| `src/assets/titan_5weeks.mp4` | 1.8M | Probable unused older puppy clip |

## Image and icon assets

| Asset | Size | Current use |
| --- | ---: | --- |
| `src/assets/CASADIANDREY-logo.svg` | 124K | Header logo in light mode |
| `src/assets/CASADIANDREYWHITE-logo.svg` | 76K | Header logo in dark mode and Loader |
| `src/assets/aria-vlajko-meet-new.webp` | 376K | Meeting section hero image, puppy video poster, CSS placeholder background |
| `src/assets/arrow-up.svg` | 4.0K | Back-to-top button |
| `src/assets/lottieflow-social-networks-15-3-000000-easey.json` | 20K | Facebook animation |
| `src/assets/lottieflow-social-networks-15-5-000000-easey.json` | 36K | Instagram animation |
| `src/assets/favicon.ico` | 16K | `index.html` favicon |
| `src/assets/favicon-32x32.png` | 4.0K | `index.html` favicon |
| `src/assets/favicon-16x16.png` | 4.0K | `index.html` favicon |
| `src/assets/apple-touch-icon.png` | 16K | `index.html` Apple touch icon |
| `public/android-chrome-192x192.png` | 16K | `site.webmanifest` icon |
| `public/android-chrome-512x512.png` | 36K | `site.webmanifest` icon |
| `public/aria_puppy.webp` | 472K | Open Graph/Twitter/social image URL target |
| `public/social-card.webp` | 472K | Probable unused duplicate social image |
| `src/assets/CASA DI ANDREY png.png` | 100K | Probable unused logo/image |
| `src/assets/Logo.png` | 92K | Probable unused logo/image |
| `src/assets/React-icon.svg` | 116K | Probable unused starter/template asset |
| `src/assets/aria&xxx.jpg` | 220K | Probable unused dog photo |
| `src/assets/aria-vlajko-meet.webp` | 220K | Probable unused older version of hero image |
| `src/assets/aria_puppy.webp` | 472K | Probable duplicate of `public/aria_puppy.webp`; not imported by current React code |
| `src/assets/aria_vlajko.webp` | 324K | Probable unused dog photo |
| `src/assets/cartier&free.jpg` | 256K | Probable unused dog photo |
| `src/assets/cartier&free.webp` | 1.6M | Probable unused dog photo |
| `src/assets/android-chrome-192x192.png` | 16K | Duplicate of public manifest icon; not needed by manifest path |
| `src/assets/android-chrome-512x512.png` | 36K | Duplicate of public manifest icon; not needed by manifest path |

## Duplicate or near-duplicate candidates

- `public/aria_puppy.webp` and `src/assets/aria_puppy.webp` have the same displayed size and likely duplicate the same social/puppy image.
- `public/social-card.webp` and `public/aria_puppy.webp` have the same displayed size and may duplicate the same social card.
- `src/assets/android-chrome-192x192.png` duplicates `public/android-chrome-192x192.png`.
- `src/assets/android-chrome-512x512.png` duplicates `public/android-chrome-512x512.png`.
- `src/assets/aria-vlajko-meet.webp` appears to be an older/smaller version of `src/assets/aria-vlajko-meet-new.webp`.
- `src/assets/cartier&free.jpg` and `src/assets/cartier&free.webp` are likely alternate formats of the same image.

## Recommendations for a later phase

- Do not bundle large videos through JavaScript imports long term. Move optimized video files to `public/` or external media hosting/CDN and reference them by URL.
- Compress/transcode the 8-week videos and litter update clips before redesign launch. The current largest file is `nova_8weeks.mp4` at 46M.
- Confirm whether unused 5-week clips and unused dog photos should become gallery/archive content before deleting anything.
- Keep only one copy of duplicated manifest icons and social images after confirming deployment paths.
- Replace the unused `React-icon.svg` starter asset if confirmed unnecessary.
