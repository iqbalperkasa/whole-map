interface Slider_Item {
  id: string;
  title: string;
  content: string;
}

interface Slider {
  items: Slider_Item[];
}

interface Top_Nav {
  label: string;
  href: string;
}

interface Page {
  title: string;
  subtitle?: string;
  slider?: Slider;
}

export interface ContentResponse {
  pages: Page[];
  top_nav?: Top_Nav;
}
