import React from 'react';
import { mount } from 'enzyme';
import CardsContainer from '../CardsContainer';
import * as api from '../../../api/api';
import { peopleMock, imageMock, starshipsMock } from './mocks';

describe('CardsContainer component', () => {
    let wrapper;

    beforeEach(() => {
        api.getDataFromApi = jest.fn(
            url =>
                new Promise(resolve => {
                    if (url && url.includes('starships')) {
                        resolve(starshipsMock);
                    } else {
                        resolve(peopleMock);
                    }
                })
        );
        api.getImageByTerm = jest.fn(
            () =>
                new Promise(resolve => {
                    resolve(imageMock);
                })
        );

        wrapper = mount(<CardsContainer />);
    });

    describe('when initializes should render', () => {
        it('cards-main element', done => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper.find('.cards-main').length).toBe(1);
                done();
            });
        });

        it('cards-container title', done => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper.find('.cards-container__title').text()).toBe(
                    'Star Wars Characters'
                );
                done();
            });
        });

        it('Cards', done => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper.find('Card').length).toBe(4);
                done();
            });
        });

        it('snapshot correctly', done => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper).toMatchSnapshot();
                done();
            });
        });
    });

    describe('when fetching should render', () => {
        it('loading element', done => {
            setImmediate(() => {
                wrapper.setState({ isFetching: true });
                wrapper.update();
                expect(wrapper.find('.loading').length).toBe(1);
                done();
            });
        });

        it('snapshot correctly', done => {
            setImmediate(() => {
                wrapper.update();
                expect(wrapper).toMatchSnapshot();
                done();
            });
        });
    });
});
