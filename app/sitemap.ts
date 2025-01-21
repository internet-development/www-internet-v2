import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://internet.dev',
      lastModified: new Date(),
    },
  ];
}
