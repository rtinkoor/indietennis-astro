import rss from '@astrojs/rss';
import { posts } from '../data/posts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'IndieTennis — The Independent Tennis Network',
    description: 'Independent tennis coverage — shows, commentary, and writing for people who love the game beyond the broadcast.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishedDate),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
