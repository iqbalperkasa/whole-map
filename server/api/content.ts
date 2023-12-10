import { ContentResponse } from '@/interfaces/content.interface';

export default defineEventHandler<ContentResponse>((event) => {
  return {
    pages: [
      {
        title: 'LOREM IPSUM DOLOR',
        subtitle:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusamus perspiciatis saepe tenetur reprehenderit odit modi, sapiente corrupti dolore commodi eius aliquid aspernatur.',
      },
      {
        title: 'DONEC NEC JUSTO',
        slider: {
          items: [
            {
              id: 'abc',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
            {
              id: 'bce',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
            {
              id: 'pok',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
            {
              id: 'oij',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
            {
              id: 'eje',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
            {
              id: 'ihj',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
            {
              id: 'whw',
              title: 'Lorem ipsum',
              content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi labore dolor asperiores maxime, incidunt numquam quod autem, nemo at necessitatibus ab aliquam minus quasi sint quisquam vitae nostrum a.',
            },
          ],
        },
      },
    ],
    top_nav: {
      label: 'DISCOVER MORE',
      href: '#',
    },
  };
});
