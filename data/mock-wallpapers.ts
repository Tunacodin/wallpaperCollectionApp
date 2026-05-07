import type { Category, Wallpaper } from "@/types/wallpaper";

export const categories: Category[] = [
  {
    id: "nature",
    name: "Doğa",
    emoji: "🌿",
    coverUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    count: 0,
  },
  {
    id: "abstract",
    name: "Soyut",
    emoji: "🎨",
    coverUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    count: 0,
  },
  {
    id: "minimal",
    name: "Minimal",
    emoji: "⚪",
    coverUrl: "https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=800&q=80",
    count: 0,
  },
  {
    id: "city",
    name: "Şehir",
    emoji: "🏙️",
    coverUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    count: 0,
  },
  {
    id: "space",
    name: "Uzay",
    emoji: "🌌",
    coverUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    count: 0,
  },
  {
    id: "anime",
    name: "Anime",
    emoji: "🎌",
    coverUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
    count: 0,
  },
  {
    id: "cars",
    name: "Otomobil",
    emoji: "🚗",
    coverUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    count: 0,
  },
  {
    id: "animals",
    name: "Hayvanlar",
    emoji: "🐾",
    coverUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80",
    count: 0,
  },
];

const raw: Omit<Wallpaper, "id" | "downloads">[] = [
  { title: "Misty Forest", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=70", categoryId: "nature", author: "Lukasz Szmigiel", width: 1200, height: 1800, tags: ["forest", "fog"] },
  { title: "Mountain Lake", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70", categoryId: "nature", author: "Pietro De Grandi", width: 1200, height: 800, tags: ["mountain", "lake"] },
  { title: "Sunset Beach", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70", categoryId: "nature", author: "Sean O.", width: 1200, height: 1600, tags: ["beach", "sunset"] },
  { title: "Forest Path", imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=70", categoryId: "nature", author: "Casey Horner", width: 1200, height: 1800, tags: ["forest", "path"] },

  { title: "Color Splash", imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=70", categoryId: "abstract", author: "Pawel Czerwinski", width: 1200, height: 1500, isPremium: true, tags: ["color", "fluid"] },
  { title: "Liquid Marble", imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=70", categoryId: "abstract", author: "Pawel Czerwinski", width: 1200, height: 1700, tags: ["marble", "fluid"] },
  { title: "Neon Waves", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=70", categoryId: "abstract", author: "Solen Feyissa", width: 1200, height: 1900, tags: ["neon", "wave"] },

  { title: "White Wall", imageUrl: "https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=600&q=70", categoryId: "minimal", author: "Henry & Co.", width: 1200, height: 1500, tags: ["white", "minimal"] },
  { title: "Geometric Light", imageUrl: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=70", categoryId: "minimal", author: "Henry & Co.", width: 1200, height: 1800, tags: ["geometry"] },
  { title: "Soft Curves", imageUrl: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=70", categoryId: "minimal", author: "Pawel Czerwinski", width: 1200, height: 1600, tags: ["curve", "minimal"] },

  { title: "Tokyo Night", imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=70", categoryId: "city", author: "Andre Benz", width: 1200, height: 1700, tags: ["tokyo", "night"] },
  { title: "City Lights", imageUrl: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=70", categoryId: "city", author: "Robert Bye", width: 1200, height: 1800, isPremium: true, tags: ["city", "lights"] },
  { title: "Skyscraper", imageUrl: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?w=600&q=70", categoryId: "city", author: "Wojtek Witkowski", width: 1200, height: 1600, tags: ["skyscraper"] },

  { title: "Galaxy", imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=70", categoryId: "space", author: "Jeremy Thomas", width: 1200, height: 1900, isPremium: true, tags: ["galaxy", "stars"] },
  { title: "Nebula", imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=70", categoryId: "space", author: "Jeremy Thomas", width: 1200, height: 1600, tags: ["nebula"] },
  { title: "Milky Way", imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&q=70", categoryId: "space", author: "Vincentiu Solomon", width: 1200, height: 1800, tags: ["stars", "milkyway"] },

  { title: "Sakura Girl", imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=70", categoryId: "anime", author: "Anonymous", width: 1200, height: 1700, tags: ["anime", "sakura"] },
  { title: "Neon Tokyo", imageUrl: "https://images.unsplash.com/photo-1554941426-c0f4cd147e60?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1554941426-c0f4cd147e60?w=600&q=70", categoryId: "anime", author: "Anonymous", width: 1200, height: 1800, isPremium: true, tags: ["anime", "neon"] },

  { title: "Sports Car", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=70", categoryId: "cars", author: "Vlad B", width: 1200, height: 1600, tags: ["sports", "car"] },
  { title: "Vintage Ride", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=70", categoryId: "cars", author: "Tim Mossholder", width: 1200, height: 1800, tags: ["vintage"] },

  { title: "Lion", imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=70", categoryId: "animals", author: "Mika Brandt", width: 1200, height: 1700, tags: ["lion", "wildlife"] },
  { title: "Fox", imageUrl: "https://images.unsplash.com/photo-1474511019411-3414a26addbc?w=1200&q=80", thumbnailUrl: "https://images.unsplash.com/photo-1474511019411-3414a26addbc?w=600&q=70", categoryId: "animals", author: "Erik Mclean", width: 1200, height: 1900, tags: ["fox"] },
];

export const wallpapers: Wallpaper[] = raw.map((w, i) => ({
  ...w,
  id: `wp-${i + 1}`,
  downloads: Math.floor(Math.random() * 9000) + 100,
}));

categories.forEach((cat) => {
  cat.count = wallpapers.filter((w) => w.categoryId === cat.id).length;
});

export function getWallpaper(id: string): Wallpaper | undefined {
  return wallpapers.find((w) => w.id === id);
}

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getWallpapersByCategory(categoryId: string): Wallpaper[] {
  return wallpapers.filter((w) => w.categoryId === categoryId);
}

export function searchWallpapers(query: string): Wallpaper[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return wallpapers.filter(
    (w) =>
      w.title.toLowerCase().includes(q) ||
      w.author.toLowerCase().includes(q) ||
      w.tags?.some((t) => t.toLowerCase().includes(q)) ||
      categories.find((c) => c.id === w.categoryId)?.name.toLowerCase().includes(q)
  );
}
