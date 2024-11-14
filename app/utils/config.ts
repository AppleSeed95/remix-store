import {
  faUser,
  faCartShopping,
  faClose,
  faMagnifyingGlass,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

export const Languages = [
  {
    key: 'en',
    name: 'English'
  },
  {
    key: 'fr',
    name: 'France'
  }
];

export const AccountMenu = [
  {
    key: 'my_account',
    name: 'My Account',
    path: '/my_account'
  },
  {
    key: 'my_wishlist',
    name: 'My Wishlist',
    path: '/my_wishlist'
  },
  {
    key: 'my_cart',
    name: 'My Cart',
    path: '/my_cart'
  },
  {
    key: 'checkout',
    name: 'Checkout',
    path: '/checkout'
  },
]

export const MobileMenu = [
  {
    key : 'search',
    name : 'Search',
    icon: faSearch
  },
  {
    key: 'account',
    name: 'Account',
    icon: faUser
  },
  {
    key: 'cart',
    name: 'Cart',
    icon: faCartShopping
  },
]

export const FooterMenu = [
  {
    key: 'company',
    name: 'company',
    subMenu: [
      {
        key: 'about_us',
        name: 'about us',
        path: '/'
      },
      {
        key: 'contact_us',
        name: 'contact us',
        path: '/'
      },
      {
        key: 'customer_service',
        name: 'customer service',
        path: '/'
      },
      {
        key: 'privacy_policy',
        name: 'privacy policy',
        path: '/'
      },
      {
        key: 'shopping_policy',
        name: 'shopping policy',
        path: '/'
      },
    ],
  },
  {
    key: 'quick_links',
    name: 'quick links',
    subMenu: [
      {
        key: 'sitemap',
        name: 'sitemap',
        path: '/'
      },
      {
        key: 'search_terms',
        name: 'search terms',
        path: '/'
      },
      {
        key: 'advanced_search',
        name: 'advanced search',
        path: '/'
      },
    ],
  },
  {
    key: 'account',
    name: 'account',
    subMenu: [
      {
        key: 'my_account',
        name: 'my account',
        path: '/'
      },
      {
        key: 'orders_and_returns',
        name: 'orders and returns',
        path: '/'
      },
    ],
  }
]
