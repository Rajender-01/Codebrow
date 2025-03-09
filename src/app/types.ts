export interface NewsCardProps {
  id?: number;
  title: string;
  image: string;
  category: string;
  likes: number;
  views: number;
  slug: string;
  isFeatured?: boolean;
}

export interface StatIconProps {
  icon: string;
  value: number;
}