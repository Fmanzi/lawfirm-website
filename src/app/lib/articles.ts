export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  content: string;
  imageUrl?: string;
};

// Load markdown files in content/articles as raw text (Vite glob)
const mdGlob = import.meta.glob<string>("../content/articles/*.md", { as: "raw" });

async function loadFromMarkdown(): Promise<Article[]> {
  const entries = Object.entries(mdGlob);
  const articles: Article[] = [];

  for (const [path, resolver] of entries) {
    try {
      const raw = await resolver();
      // Simple frontmatter parser to avoid depending on gray-matter at runtime
      const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
      let fm = {} as Record<string, string>;
      let content = raw;
      if (fmMatch) {
        const fmRaw = fmMatch[1];
        content = raw.slice(fmMatch[0].length);
        fmRaw.split(/\n+/).forEach((line) => {
          const idx = line.indexOf(":");
          if (idx === -1) return;
          const key = line.slice(0, idx).trim();
          let val = line.slice(idx + 1).trim();
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
          }
          fm[key] = val;
        });
      }

      const fileName = path.split("/").pop() || "";
      const slug = fileName.replace(/\.md$/, "");

      articles.push({
        slug,
        title: String(fm.title || "Untitled"),
        excerpt: String(fm.excerpt || ""),
        author: String(fm.author || ""),
        date: String(fm.date || "1970-01-01"),
        category: String(fm.category || "General"),
        content: String(content || ""),
        imageUrl: fm.imageUrl ? String(fm.imageUrl) : undefined,
      });
    } catch (err) {
      // ignore individual file parse errors
    }
  }

  // Sort by date desc
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
}

export async function getAllArticles(): Promise<Article[]> {
  const markdownArticles = await loadFromMarkdown();
  return markdownArticles; // return [] if none found
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const all = await getAllArticles();
  return all.find((a) => a.slug === slug);
}
