import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('App component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(<App />);
    });

    describe('when initializes should render', () => {
        it('app element', () => {
            expect(wrapper.find('.app.light').length).toBe(1);
        });

        it('Header component', () => {
            expect(wrapper.find('Header').length).toBe(1);
        });

        it('app-container element', () => {
            expect(wrapper.find('.app-container').length).toBe(1);
        });

        it('CardsContainer component', () => {
            expect(wrapper.find('CardsContainer').exists()).toBeTruthy();
        });

        it('theme-switch element', () => {
            expect(wrapper.find('.theme-switch').length).toBe(1);
        });

        it('CustomSwitch component', () => {
            expect(wrapper.find('CustomSwitch').length).toBe(1);
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when changes to dark theme', () => {
        it('should render', () => {
            const instance = wrapper.instance();
            instance.handleThemeChange();
            wrapper.update();
            expect(wrapper.exists('.app.dark')).toBeTruthy();
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
