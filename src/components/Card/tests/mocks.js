export const peopleMock = {
    count: 4,
    next: 'https://swapi.co/api/people/?page=2',
    previous: null,
    results: [
        {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            starships: [
                'https://swapi.co/api/starships/12/',
                'https://swapi.co/api/starships/22/',
            ],
        },
        {
            name: 'C-3PO',
            height: '167',
            mass: '75',
            hair_color: 'n/a',
            skin_color: 'gold',
            eye_color: 'yellow',
            birth_year: '112BBY',
            gender: 'n/a',
            starships: [],
            url: 'https://swapi.co/api/people/2/',
        },
        {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, blue',
            eye_color: 'red',
            birth_year: '33BBY',
            gender: 'n/a',
            starships: [],
            url: 'https://swapi.co/api/people/3/',
        },
        {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            gender: 'male',
            starships: ['https://swapi.co/api/starships/13/'],
            url: 'https://swapi.co/api/people/4/',
        },
    ],
};

export const starshipsMock = {
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    length: '150',
    crew: '165',
    passengers: '600',
    starship_class: 'corvette',
};

export const imageMock = {
    items: [
        {
            link: 'http://teste.com/image.png',
        },
    ],
};
