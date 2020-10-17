const projects = [
  {
    id: 1,
    charity_id: 1,
    type: 'website',
    deadline: '1/2/2020',
    deadline_flexibility: 'flexible',
    details: 'details',
  },

  {
    id: 2,
    charity_id: 2,
    type: 'website',
    deadline: '1/2/2020',
    deadline_flexibility: 'flexible',
    details: 'details',
  },
  {
    id: 3,
    charity_id: 1,
    type: 'website',
    deadline: '1/2/2020',
    deadline_flexibility: 'flexible',
    details: 'details',
  },
  {
    id: 4,
    charity_id: 2,
    type: 'website',
    deadline: '1/2/2020',
    deadline_flexibility: 'flexible',
    details: 'details',
  },
];

const charities = [
  {
    id: 1,
    name: 'Charity 1',
    email: 'charity@charity.org',
    password: 'charity123',
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    website: 'https://charity.org',
  },
  {
    id: 2,
    name: 'Charity 2',
    email: 'charity2@charity.org',
    password: 'charity1232',
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    website: 'https://charity2.org',
  },
];

module.exports = { projects, charities };
