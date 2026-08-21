// Generated Manga API adapter — "SoftKomik"
// Source website: https://softkomik.co/
// Generated at: 2026-08-21T09:09:56.397Z
//
// This adapter scrapes the source website with the adaptive universal parser
// and exposes a standard REST API. It is served live by MangaKu under
// /hcgi/api/gen-api/ct2j67s2yxhgumc
//
// Endpoints:
//   GET /manga            - list manga (from persistent database)
//   GET /search?q=        - search manga (persistent database + live source)
//   GET /manga/:id        - manga detail + chapters
//   GET /manga/:id/chapters
//   GET /chapter/:chapterId - chapter pages (all ordered images)
//
// Data is persisted in PocketBase (gen_manga / gen_chapters). When the source
// is offline, the API keeps serving the last valid data — nothing is deleted.

export const SOURCE = {
  id: "ct2j67s2yxhgumc",
  name: "SoftKomik",
  websiteUrl: "https://softkomik.co/",
};
