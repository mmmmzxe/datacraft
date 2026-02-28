import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { courses } from "@/data/courses";

const siteUrl = "https://datacraft.sh";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    "",
    "/courses",
    "/programs",
    "/instructors",
    "/about",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" || route === "/blog" || route === "/courses" ? "weekly" : "monthly" as any,
    priority: route === "" ? 1 : route === "/courses" || route === "/programs" ? 0.9 : 0.7,
  }));

  const blogPages = blogs.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as any,
    priority: 0.8,
  }));

  const coursePages = courses.map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    lastModified,
    changeFrequency: "monthly" as any,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...coursePages];
}
