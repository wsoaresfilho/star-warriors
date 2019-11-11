// This key is exposed only while the project gets reviewed!
// It has to be deleted from code as soon as possible.
// Reviewers: please let me know as soon as you finish testing the app
const gsak = 'AIzaSyCFhQn97SQxwxgCTSvFHb1aYxaNoc_KXu4';
const ckk = '002028002876040441306:7gjv47i0lhn';
const apiBase = 'https://swapi.co/api';
const googleImgApi = `https://www.googleapis.com/customsearch/v1?key=${gsak}&cx=${ckk}&searchType=image&imgSize=large&imgType=photo&num=1&q=`;

export const getDataFromApi = async url => {
    const response = await fetch(url || `${apiBase}/people/`);
    const myJson = await response.json();
    return myJson;
};

export const getImageByTermFake = () => {
    const response = new Promise(resolve => {
        setTimeout(() => {
            resolve({
                items: [
                    {
                        link: 'logo-black.svg',
                    },
                ],
            });
        }, 100);
    });
    return response;
};

export const getImageByTerm = async imageTerm => {
    const response = await fetch(`${googleImgApi}${encodeURI(imageTerm)}`);
    if (response.status >= 400) {
        return getImageByTermFake();
    }
    const myJson = await response.json();
    return myJson;
};
