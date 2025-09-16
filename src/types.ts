export type PolicyHubAudience = "students" | "teachers" | "parents";
export type PolicyHubArticle = {
  title: string;
  excerpt: string;
  url: string;
  image?: string; // unimplemented for now
};
