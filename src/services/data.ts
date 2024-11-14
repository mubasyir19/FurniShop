import { FooterMenu, Product } from '@/data-types';

export const ListFooter: FooterMenu[] = [
  {
    parent: 'Our Products',
    child: [{ point: 'The Support Suite' }, { point: 'The Sales Suite' }, { point: 'Support' }, { point: 'Guide' }],
  },
  {
    parent: 'Top Features',
    child: [
      { point: 'Ticketing System' },
      { point: 'Knowledge Base' },
      { point: 'Community Forums' },
      { point: 'Help Desk Software' },
    ],
  },
  {
    parent: 'Resources',
    child: [
      { point: 'Product Support' },
      { point: 'Request Demo' },
      { point: 'Library' },
      { point: 'Peoplepower Blog' },
    ],
  },
  {
    parent: 'Company',
    child: [{ point: 'About Us' }, { point: 'Press' }, { point: 'Investors' }, { point: 'Events' }],
  },
  {
    parent: 'Favourite Things',
    child: [
      { point: 'For Enterprise' },
      { point: 'For Startups' },
      { point: 'For Benchmark' },
      { point: 'For Small Business' },
    ],
  },
];

export const ListProduct: Product[] = [
  {
    images: '/images/ceiling-light.png',
    name: 'Ceiling Light',
    price: 82.0,
    discount: 75.0,
  },
  {
    images: '/images/wood-chair.png',
    name: 'Wood Chair',
    price: 70.0,
    discount: 50.0,
  },
  {
    images: '/images/papper-cupboard.png',
    name: 'Papper Cupboard',
    price: 120.0,
    discount: 105.0,
  },
  {
    images: '/images/spring-bed.png',
    name: 'Ole Gundorse Spring Bed',
    price: 100.0,
    discount: 82.0,
  },
  {
    images: '/images/drawer.png',
    name: 'Treos Seroes 911',
    price: 210.0,
    discount: 200.0,
  },
  {
    images: '/images/frame.png',
    name: 'Multi Bilderman Slibber',
    price: 50.0,
    discount: 45.0,
  },
  {
    images: '/images/desk.png',
    name: 'XORA Corner Desk',
    price: 325.0,
    discount: 320.0,
  },
  {
    images: '/images/cots.png',
    name: 'Black Forest Series Wood',
    price: 240.0,
    discount: 225.0,
  },
];
