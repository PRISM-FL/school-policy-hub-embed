import type { PolicyHubArticle, PolicyHubAudience } from "../types";
import { faker } from "@faker-js/faker";
import { toTitleCase } from "./utils";

import { items } from "@wix/data";
import { posts } from "@wix/blog";
import { createClient, OAuthStrategy } from "@wix/sdk";

const postCategories = {
  main: "7ca73e7d-c56b-43ef-a7d5-d5dbb035e37e",
  students: "3fcdc54c-0a34-44ce-a3ee-0f6b1493b5fd",
  parents: "1e402caf-4c60-4dd5-8694-edff940df516",
  teachers: "ff167ce0-abea-4d78-9e0f-9d912f553103",
};
const clientId = "2a02cb95-332b-4c81-a07b-1a898adcfbb9";
//To access the Wix APIs, create a client with the createClient() function imported from the @wix/sdk package.
const wixClient = createClient({
  modules: { items, posts },
  auth: OAuthStrategy({ clientId }),
});

let policyHubArticles: undefined | posts.Post[] = undefined;
async function getAllPolicyHubArticles() {
  if (policyHubArticles) {
    return policyHubArticles;
  }
  const { items } = await wixClient.posts
    .queryPosts()
    .hasSome("categoryIds", [postCategories.main])
    .find();
  policyHubArticles = items;
  return items;
}

// TODO: add wix api calls - this file is all dummy info rn
const dummyArticle = () => ({
  title: toTitleCase(faker.lorem.sentence()),
  excerpt: faker.lorem.sentences(4),
  url: faker.internet.url(),
});

const dummyFeaturedArticles: {
  [audience in PolicyHubAudience]: [PolicyHubArticle, PolicyHubArticle];
} = {
  students: [dummyArticle(), dummyArticle()],
  parents: [dummyArticle(), dummyArticle()],
  teachers: [dummyArticle(), dummyArticle()],
};
const dummyRecentArticles: [
  PolicyHubArticle,
  PolicyHubArticle,
  PolicyHubArticle,
] = [dummyArticle(), dummyArticle(), dummyArticle()];

export async function getFeaturedArticles(
  audience: PolicyHubAudience,
  limit?: number,
): Promise<PolicyHubArticle[] | null> {
  const articles = await getAllPolicyHubArticles();
  const audienceArticles = articles.filter(
    (article) =>
      article.categoryIds?.includes(postCategories[audience]) &&
      article.featured,
  );

  return audienceArticles
    .map((article) => ({
      title: article.title ?? "Not Found",
      excerpt: article.excerpt ?? "Not Found",
      url: article.url ?? "https//prismfl.org/404",
    }))
    .slice(0, limit ?? 2);
}

export async function getRecentArticles(
  limit?: number,
): Promise<PolicyHubArticle[] | null> {
  const articles = await getAllPolicyHubArticles();
  const recentArticles = articles
    .sort(
      (a, b) =>
        (a.lastPublishedDate?.getTime() ?? Date.now()) -
        (b.lastPublishedDate?.getTime() ?? Date.now()),
    )
    .map((article) => ({
      title: article.title ?? "Not Found",
      excerpt: article.excerpt ?? "Not Found",
      url: article.url ?? "https//prismfl.org/404",
    }));

  return recentArticles.slice(0, limit ?? 3);
}
