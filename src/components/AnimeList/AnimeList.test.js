import chai, { expect } from 'chai';
import React, { Component } from 'react';
import fetchMock from 'fetch-mock';
import { mount } from '../../../enzyme';

import AnimeList from './AnimeList';

// TODO: fix the warning for act(....) when making APi call from test.

describe('AnimeList Testing', () => {
    it('Should call the API to fetch animeList and should not render anything if not present', done => {
        const url = 'http://localhost:8080/services/getAnimes?currentPage=1';
        fetchMock.get(url,[]);
        const wrapper  = mount(<AnimeList />);
        expect(fetchMock.calls(url).length).to.equal(1);
        expect(wrapper.isEmptyRender()).to.equal(true);
        fetchMock.restore();
        done();
    });

    it('Should call the API to fetch animeList and should render AnimeCard', done => {
        const url = 'http://localhost:8080/services/getAnimes?currentPage=1';
        const fakeResponse = {
            "code": 200,
            "data": [
              {
                "_id": "5f19821a5cca533884a000bd",
                "name": "Naruto: Shippuuden",
                "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
                "rating": "8.16",
                "episode": 500,
                "category": "Animation | Drama | Adventure",
                "studio": "Studio Pierrot",
                "img": "https://cdn.myanimelist.net/images/anime/6/54815.jpg",
                "__v": 0
              }
            ]
          }
          
        fetchMock.get(url,fakeResponse);
        const wrapper  = mount(<AnimeList />);
            setImmediate(() => {
            wrapper.update();
            expect(fetchMock.calls(url).length).to.equal(1);
            expect(wrapper.find('AnimeCard').length).to.equal(1)
            fetchMock.restore();
            done();
        });
    });
});