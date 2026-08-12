export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function processArticleContent(htmlContent: string): {
  processedContent: string;
  tocItems: TocItem[];
} {
  const tocItems: TocItem[] = [];
  let index = 0;

  // Process <h2> and <h3> tags to extract title and ensure unique id attribute
  const processedContent = htmlContent.replace(
    /<h([23])([^>]*)>(.*?)<\/h\1>/gi,
    (match, levelStr, attrs, titleHtml) => {
      index++;
      const level = parseInt(levelStr, 10);
      const cleanTitle = titleHtml.replace(/<[^>]+>/g, "").trim();

      // Check if id already exists in attrs
      const idMatch = /id=["']([^"']+)["']/i.exec(attrs);
      let id = idMatch ? idMatch[1] : "";

      if (!id) {
        id = cleanTitle
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .substring(0, 60);

        if (!id) id = `section-${index}`;

        // Add id attribute to heading
        attrs = `${attrs} id="${id}"`;
      }

      // Add scroll margin class for smooth offset under fixed header
      if (!attrs.includes("scroll-mt-")) {
        attrs = `${attrs} class="scroll-mt-28"`;
      }

      tocItems.push({ id, title: cleanTitle, level });

      return `<h${levelStr}${attrs}>${titleHtml}</h${levelStr}>`;
    }
  );

  return { processedContent, tocItems };
}
