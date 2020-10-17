export const charity = {
  id: 1,
  name: 'Charity 1',
  email: 'charity@charity.org',
  password: 'charity123',
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat.`,
  website: 'https://charity.org',
  projects: [
    {
      id: 1,
      type: 'ads',
      deadline: '11/2/2020',
      deadline_flexibility: 'right away',
      details: 'details about this project',
    },

    {
      id: 2,
      type: 'website',
      deadline: '12/2/2020',
      deadline_flexibility: 'flexible',
      details: 'details',
    },
  ],
};
