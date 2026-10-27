import { MetadataRoute } from 'next';
import { DETAILED_TREATMENTS } from '@/data/treatmentsData';
import { ALL_BRANCHES_DATA } from '@/data/branchesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://32smiles.in';
  const currentDate = new Date();

  // Static Core Landing Pages
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/treatments', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/branches', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/book-appointment', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/doctors', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/patient-reviews', priority: 0.85, changeFrequency: 'daily' as const },
    { path: '/pricing', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/emi-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/technology', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/smile-gallery', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // All 18 Treatment Pages
  const treatmentRoutes = Object.keys(DETAILED_TREATMENTS).map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // All 9 Branch Pages
  const branchRoutes = ALL_BRANCHES_DATA.map((branch) => ({
    url: `${baseUrl}/branches/${branch.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...branchRoutes];
}
