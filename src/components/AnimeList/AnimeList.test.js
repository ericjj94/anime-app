import chai, { expect } from 'chai';
import React from 'react';
import fetchMock from 'fetch-mock';
import { mount } from '../../helpers/helpers';

import AnimeList from './AnimeList';

describe('AnimeList Testing', () => {

  afterEach(() => {
    fetchMock.restore();
  })
    it('Should call the API to fetch animeList and should not render anything if not present', done => {
        const url = 'http://localhost:8080/services/animes?currentPage=1';
        fetchMock.get(url,{data:[]});
        const { component } = mount(<AnimeList />, {searchReducer: {animeList:[]}});
        expect(fetchMock.calls(url).length).to.equal(1);
        expect(component.isEmptyRender()).to.equal(true);
        done();
    });

    it('Should call the API to fetch animeList and should render AnimeCard', done => {
        const url = 'http://localhost:8080/services/animes?currentPage=1';
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
        const { component }  = mount(<AnimeList />, { searchReducer: {animeList:[]}} );
            setImmediate(() => {
            component.update();
            expect(component.find('AnimeCard').length).to.equal(1)
            done();
        });
    });
});