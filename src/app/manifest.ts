import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '32 Smiles Multispeciality Dental Clinics Bangalore',
    short_name: '32 Smiles',
    description: 'Premier Dental Healthcare Network across 9 locations in Bangalore. Painless Root Canal, Dental Implants, Invisalign & Smile Makeovers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF4EA',
    theme_color: '#795900',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}
