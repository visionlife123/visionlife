import { create } from 'zustand';

export type PageName = 'home' | 'about-us' | 'programs' | 'ministries' | 'events' | 'give' | 'gallery' | 'contact-us' | 'copyright' | 'privacy';

const pageToSlug: Record<PageName, string> = {
  home: 'home',
  'about-us': 'about-us',
  programs: 'programs',
  ministries: 'ministries',
  events: 'events',
  give: 'give',
  gallery: 'gallery',
  'contact-us': 'contact-us',
  copyright: 'copyright',
  privacy: 'privacy',
};

const slugToPage: Record<string, PageName> = Object.fromEntries(
  Object.entries(pageToSlug).map(([page, slug]) => [slug, page as PageName]),
);

const getPageFromLocation = (): PageName => {
  if (typeof window === 'undefined') return 'home';

  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!pathname) return 'home';

  return slugToPage[pathname] || 'home';
};

const getUrlForPage = (page: PageName): string => page === 'home' ? '/' : `/${pageToSlug[page]}`;

interface NavigationState {
  currentPage: PageName;
  previousPage: PageName | null;
  setCurrentPage: (page: PageName, options?: { history?: 'push' | 'replace' | 'none' }) => void;
  initializeFromLocation: () => void;
}

export const useNavigation = create<NavigationState>((set) => ({
  currentPage: 'home',
  previousPage: null,
  setCurrentPage: (page, options) => set((state) => {
    if (typeof window !== 'undefined' && options?.history !== 'none') {
      const nextUrl = getUrlForPage(page);
      if (window.location.pathname !== nextUrl) {
        const method = options?.history === 'replace' ? 'replaceState' : 'pushState';
        window.history[method](null, '', nextUrl);
      }
    }

    return { previousPage: state.currentPage, currentPage: page };
  }),
  initializeFromLocation: () => {
    const page = getPageFromLocation();
    set((state) => ({ previousPage: state.currentPage, currentPage: page }));
  },
}));
