export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationColumn {
  title: string;
  links: NavigationLink[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown?: boolean;
  columns?: NavigationColumn[];
}