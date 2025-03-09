export interface NewsCardProps {
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