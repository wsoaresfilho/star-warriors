import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header wrapper', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Header logo='light' />);
    });

    describe('should render', () => {
        it('header element', () => {
            expect(wrapper.find('.header').length).toBe(1);
        });

        it('header__container element', () => {
            expect(wrapper.find('.header__container').length).toBe(1);
        });

        it('logo link with image', () => {
            expect(wrapper.find('a img.header__logo').length).toBe(1);
        });

        it('light logo image when using light theme', () => {
            expect(wrapper.find('img.header__logo').prop('src')).toBe('light');
        });

        it('dark logo image when using dark theme', () => {
            wrapper.setProps({ logo: 'dark' });
            expect(wrapper.find('img.header__logo').prop('src')).toBe('dark');
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
