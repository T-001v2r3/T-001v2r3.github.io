import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  
  return rss({
    title: 'T-001v2r3 Blog',
    description: 'Personal blog by T-001v2r3 - thoughts on technology, development, and more',
    site: context.site || 'https://T-001v2r3.github.io',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}
