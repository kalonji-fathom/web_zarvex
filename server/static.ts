import express, { type Express } from "express";
import path from "path";

export function serveStatic(app: Express) {
  // Serve the static HTML/CSS files from the root directory
  app.use(express.static(process.cwd()));
  
  // Fallback to index.html for unknown routes
  // Using a regular expression instead of '*' to avoid path-to-regexp errors
  app.get(/^(?!\/api).+$/, (_req, res) => {
    res.sendFile(path.resolve(process.cwd(), "index.html"));
  });
}
