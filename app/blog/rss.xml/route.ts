import { getBlogPosts } from '@/lib/blog-data';

export async function GET() {
  const posts = getBlogPosts();
  const siteUrl = 'https://creststudyconsult.com';
  const feedUrl = `${siteUrl}/blog/rss.xml`;
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Crest Study Consult Blog</title>
    <description>Expert guidance and insights for international education and study abroad success</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>info@creststudyconsult.com (Crest Study Consult)</managingEditor>
    <webMaster>info@creststudyconsult.com (Crest Study Consult)</webMaster>
    <category>Education</category>
    <category>Study Abroad</category>
    <category>International Education</category>
    <ttl>60</ttl>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>Crest Study Consult</title>
      <link>${siteUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${posts
      .slice(0, 20) // Limit to 20 most recent posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author.social?.email || 'info@creststudyconsult.com'} (${post.author.name})</author>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
      <enclosure url="${post.featuredImage.url}" type="image/jpeg" length="0" />
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}