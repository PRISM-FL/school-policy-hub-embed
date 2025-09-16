import type { PolicyHubArticle, PolicyHubAudience } from "../types";
import { faker } from "@faker-js/faker";
import { toTitleCase } from "./utils";

// TODO: add wix api calls - this file is all dummy info rn
const dummyArticle = () => ({
  title: toTitleCase(faker.lorem.sentence()),
  excerpt: faker.lorem.sentences(2),
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
): Promise<[PolicyHubArticle, PolicyHubArticle] | null> {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(dummyFeaturedArticles[audience]),
      1000 * Math.random(),
    ),
  );
}

export async function getRecentArticles(): Promise<
  [PolicyHubArticle, PolicyHubArticle, PolicyHubArticle] | null
> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(dummyRecentArticles), 1000 * Math.random()),
  );
}
