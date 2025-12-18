import express from "express";
import cors from "cors";

export function createServer(frontendOrigin: string) {
  const app = express();

  app.use(cors({ origin: frontendOrigin }));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  // Placeholder for later:
  // GET /api/stores/nearby?lat=...&lng=...&radius=...
  app.get("/api/stores/nearby", (req, res) => {
    res.json({
      stores: [],
      params: {
        lat: req.query.lat ?? null,
        lng: req.query.lng ?? null,
        radius: req.query.radius ?? null
      }
    });
  });

  return app;
}
