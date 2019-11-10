const apiBase = 'https://swapi.co/api';
const googleImgApi =
    'https://www.googleapis.com/customsearch/v1?key=AIzaSyCFhQn97SQxwxgCTSvFHb1aYxaNoc_KXu4&cx=002028002876040441306:7gjv47i0lhn&searchType=image&imgSize=large&imgType=photo&num=1&q=';

export const getDataFromApi = async url => {
    const response = await fetch(url || `${apiBase}/people/`);
    const myJson = await response.json();
    return myJson;
};

export const getImageByTerm = async imageTerm => {
    const response = await fetch(`${googleImgApi}${encodeURI(imageTerm)}`);
    const myJson = await response.json();
    return myJson;
};

export const getImageByTermFake = () => {
    const response = new Promise(resolve => {
        setTimeout(() => {
            resolve({
                items: [
                    {
                        link:
                            'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/C-3PO_droid.png/220px-C-3PO_droid.png',
                    },
                ],
            });
        }, 300);
    });
    return response;
};
