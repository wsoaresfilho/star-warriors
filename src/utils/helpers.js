const getIntFromString = text => {
    const str = text.replace(/[^\d]/g, '');
    return parseInt(str, 10);
};

export default getIntFromString;
