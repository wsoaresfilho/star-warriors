import React from 'react';
import { mount } from 'enzyme';
import Card from '../Card';

describe('Card component', () => {
    let wrapper;
    let instance;

    const defaultProps = {
        name: 'John',
        imgUrl: 'http://teste.com/teste.png',
        birth_year: '1980',
        gender: 'male',
        height: '188',
        mass: '100',
        starshipsDetails: [
            {
                name: 'star',
                model: 'big model',
                starship_class: 'class1',
                passengers: '10',
                length: '20',
            },
            {
                name: 'star2',
                model: 'small model',
                starship_class: 'class2',
                passengers: '2',
                length: '10',
            },
        ],
    };

    beforeEach(() => {
        wrapper = mount(<Card {...defaultProps} />);
        instance = wrapper.instance();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    describe('when initializes should render', () => {
        it('card-container element', () => {
            expect(wrapper.find('.card-container').length).toBe(1);
        });

        it('card-container title', () => {
            expect(wrapper.find('.card-content__title').length).toBe(1);
            expect(wrapper.find('.card-content__title').text()).toBe('John');
        });

        it('card image', () => {
            expect(wrapper.find('.card-container__image').length).toBe(1);
            expect(wrapper.find('.card-container__image img').length).toBe(1);
        });

        it('personal panel', () => {
            expect(wrapper.find('.card-content__panel.personal').length).toBe(
                1
            );
        });

        it('not show starship panel', () => {
            expect(wrapper.find('.card-content__panel-starships').length).toBe(
                0
            );
        });

        it('CustomSwitch component', () => {
            expect(wrapper.find('CustomSwitch').length).toBe(1);
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when changes to starship panel', () => {
        it('should render starship panel', () => {
            instance.setState({ isInPersonalPanel: false });
            wrapper.update();

            expect(wrapper.find('.card-content__panel-starships').length).toBe(
                2
            );
        });

        it('should not render starship panel when there are no starships', () => {
            const newProps = {
                ...defaultProps,
                starshipsDetails: [],
            };
            wrapper = mount(<Card {...newProps} />);
            wrapper.instance().setState({ isInPersonalPanel: false });
            wrapper.update();

            expect(
                wrapper.find('.card-content__panel-nostarships').text()
            ).toBe('There are no starships for this character');
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
