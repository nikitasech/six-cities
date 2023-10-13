import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/7.jpg'
    },
    rating: 3,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2023-08-20T06:52:02.230Z'
  },
  {
    id: 2,
    user: {
      id: 17,
      isPro: false,
      name: 'Emely',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/8.jpg'
    },
    rating: 4,
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2023-08-20T06:52:02.231Z'
  },
  {
    id: 3,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/7.jpg'
    },
    rating: 4,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2023-08-20T06:52:02.231Z'
  }
];
