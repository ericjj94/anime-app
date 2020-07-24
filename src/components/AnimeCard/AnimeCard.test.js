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

    it('Should contain a card rendered if anime Object is passed', () => {
        const wrapper = mount(<AnimeCard anime={anime} />);
        expect(wrapper.find('.card').length).to.equal(1);
    });

    it('Should render the anime image', () => {
        const wrapper = mount(<AnimeCard anime={anime} />);
        expect(wrapper.find('.card-img-top').length).to.equal(1);
        expect(wrapper.find('.card-img-top').props().src).to.equal('anime-image.jpg');
    });

    it('Should render the anime title', () => {
        const wrapper = mount(<AnimeCard anime={anime} />);
        expect(wrapper.find('.card-title').length).to.equal(1);
        expect(wrapper.find('.card-title').props().children).to.equal('Anime Name');
    });
    
    it('Should render the complete description if string length is less than 150 ', () => {
        const wrapper = mount(<AnimeCard anime={anime} />);
        expect(wrapper.find('.card p').props().children[0]).to.equal('Anime Description');
    });

    it('Should render the formatted description if string length is greater than 150 ', () => {
        const description= "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.";
        anime.description = description;
        const wrapper = mount(<AnimeCard anime={anime} />);
        expect(wrapper.find('.card p').props().children[0].length).to.equal(153);
    });
});