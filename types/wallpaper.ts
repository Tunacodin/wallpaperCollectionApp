export interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  categoryId: string;
  author: string;
  width: number;
  height: number;
  downloads: number;
  isPremium?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  coverUrl: string;
  count: number;
}
