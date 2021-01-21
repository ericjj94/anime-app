import React from 'react';

import AnimeCard  from '../components/AnimeCard/AnimeCard';
import { MemoryRouter } from 'react-router-dom';

const anime = {
    id: 123,
    name: 'SOME NAME',
    description: 'Hello World',
    rating: 2.3,
    img: 'https://picsum.photos/200'
}
export default {
    title:'AnimeCard',
  component: AnimeCard,
  decorators: [(Story) => (<MemoryRouter><Story /></MemoryRouter>)]
};

const Template = (args) => <AnimeCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  anime,
  showDetails: true
};

