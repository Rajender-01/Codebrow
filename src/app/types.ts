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

// types.ts
export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterData {
  about: {
    text: string;
    email: {
      label: string;
      address: string;
    };
    phone: {
      label: string;
      number: string;
    };
  };
  quickLinks: FooterLink[];
  categories: FooterLink[];
  newsletter: {
    title: string;
    description: string;
    buttonText: string;
  };
  copyrightInfo: {
    logo: string;
    year: number;
    rightsText: string;
  };
  policies: FooterLink[];
}
