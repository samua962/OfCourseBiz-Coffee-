import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Echoes of a Lost Gaza – 2024 version',
    content: 'A comprehensive look at the current situation and its impact on coffee culture in the region. Coffee has always been a bridge between cultures, and even in times of conflict, it serves as a reminder of our shared humanity.',
    excerpt: 'Exploring the intersection of coffee culture and current world events.',
    image: 'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg',
    author: 'Editorial Team',
    category: 'News',
    publishedAt: new Date('2024-10-27')
  },
  {
    id: 'blog-2',
    title: 'Interesting ingredients can come into play here',
    content: 'Discover the unique spices and ingredients that make Ethiopian coffee and cuisine so distinctive. From berbere spice blends to traditional brewing methods, learn about the rich culinary heritage.',
    excerpt: 'Exploring the unique flavors and ingredients of Ethiopian cuisine.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg',
    author: 'Chef Almaz',
    category: 'Recipes',
    publishedAt: new Date('2021-07-29')
  },
  {
    id: 'blog-3',
    title: 'The Art of Ethiopian Coffee Ceremony',
    content: 'The Ethiopian coffee ceremony is more than just brewing coffee – it\'s a sacred ritual that brings communities together. Learn about the traditional three-round ceremony and its cultural significance.',
    excerpt: 'Understanding the cultural importance of Ethiopian coffee traditions.',
    image: 'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg',
    author: 'Cultural Expert',
    category: 'Culture',
    publishedAt: new Date('2024-01-15')
  },
  {
    id: 'blog-4',
    title: 'From Bean to Cup: Ethiopian Coffee Regions',
    content: 'Ethiopia is the birthplace of coffee, and each region produces beans with unique characteristics. From the floral notes of Yirgacheffe to the wine-like qualities of Harrar, explore the diverse flavors.',
    excerpt: 'A journey through Ethiopia\'s famous coffee-growing regions.',
    image: 'https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg',
    author: 'Coffee Expert',
    category: 'Coffee Education',
    publishedAt: new Date('2024-02-10')
  }
];