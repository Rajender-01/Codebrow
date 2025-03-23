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

export interface ResponsiveHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavigationItem {
  id: string | number;
  path: string;
  name: string;
}

export interface MobileMenuProps {
  navigationData: NavigationItem[];
}

export interface NewsletterProps {
  title?: string;
  description?: string;
  buttonText?: string;
}