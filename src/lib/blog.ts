import { batchA } from "./blog-data/batch-a";
import { batchB } from "./blog-data/batch-b";
import { batchC } from "./blog-data/batch-c";
import { batchD } from "./blog-data/batch-d";
import { batchE } from "./blog-data/batch-e";

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSubsection {
  heading: string;
  body: string[];
}

export interface BlogSection {
  heading: string;
  /** Plain paragraphs. Mutually exclusive with `ordered` in practice, but both may be read. */
  body?: string[];
  /** When true, `body` items are rendered as a numbered step list instead of paragraphs. */
  ordered?: boolean;
  /** Optional H3 subsections nested under this H2. */
  subsections?: BlogSubsection[];
}

export type SearchIntent =
  | "Informational"
  | "Commercial"
  | "Troubleshooting"
  | "Commercial / Informational"
  | "Informational / Troubleshooting";

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: SearchIntent;
  excerpt: string;
  date: string;
  readTime: string;
  h1: string;
  intro: string;
  sections: BlogSection[];
  faqs?: BlogFaq[];
  relatedSlugs: string[];
  imageAlt: string;
  imageSuggestion: string;
}

export const blogCategories = [
  "IPTV Guides",
  "Firestick",
  "Smart TV",
  "Android",
  "iPhone & Apple TV",
  "Windows & Mac",
  "Troubleshooting",
  "Streaming & Technology",
] as const;

export const blogPosts: BlogPost[] = [...batchA, ...batchB, ...batchC, ...batchD, ...batchE];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}
