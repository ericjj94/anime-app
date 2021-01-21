import React from 'react';

import AnimeRating  from '../components/AnimeRating/AnimeRating';

export default {
    title:'AnimeRating',
  component: AnimeRating,
  rating: 4.5
};

const Template = (args) => <AnimeRating {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  rating: 4.5
};

