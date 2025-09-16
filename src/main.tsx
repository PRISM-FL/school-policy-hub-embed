import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { getFeaturedArticles, getRecentArticles } from "./lib/api.ts";

console.log("recent articles: ", await getRecentArticles());
console.log(
  "featured articles:",
  await getFeaturedArticles("parents"),
  await getFeaturedArticles("teachers"),
  await getFeaturedArticles("students"),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
