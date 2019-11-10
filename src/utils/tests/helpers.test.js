import getIntFromString from '../helpers';

describe('getIntFromString helper', () => {
    it('when text contains a number should return only int values', () => {
        const value = 'https://blabla.com/testing/23';
        const intValue = getIntFromString(value);
        expect(intValue).toBe(23);
    });
});
