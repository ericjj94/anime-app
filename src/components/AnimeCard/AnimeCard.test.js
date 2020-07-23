import { expect } from 'chai';
import React from 'react';
import { mount,shallow } from '../../../enzyme';

import AnimeCard from './AnimeCard';
const anime = {  
    "name": "Anime Name",
    "description": "Anime Description",
    "rating": "Anime Rating",
    "episode": 500,
    "category": "Anime Category",
    "studio": "Anime Studio",
    "img": "anime-image.jpg"
};

describe('AnimeCard Testing', () => {
    it('Should render a component even if anime is not passed', () => {
        const wrapper = mount(<AnimeCard />);
        expect(wrapper.isEmptyRender()).to.equal(true);
    });
});