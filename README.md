# Star Wars Characters App

This project was created as a requirement for a job interview.

It is a React Application that shows cards of Star Wars Characters from an API. It lazy loads the list of characters, and gets the card images using the Google Search API.

OBS.: For the Google Serach API feature works, a key has to be added into the code.

## Features:

-   Shows Star Wars character cards got from an API
-   Lazy loads the cards 10 by 10 on scrolling of the cards list
-   Get card images from the Search Google API based on the character name and add into the card
-   Theme switch that togles between 2 different styling themes: Light and Dark
-   The theme chosen and all the transactions registered are saved in browser's localSorage

## Future features:

-   Add filters
-   Add new ways of showing more characters data (tabs, sliders, ...)
-   Show card detail page by clicking on a card

## Development tools used:

For Unit Tests, this project uses:

-   [Jest](https://jestjs.io/): JavaScript Testing Framework
-   [Enzyme](https://airbnb.io/enzyme/): JavaScript Testing utility for React that makes it easier to test your React Components' output

For E2E Tests, this project uses:

-   [Cypress](https://www.cypress.io/): A JavaScript E2E Testing Framework for testing anything that runs in a browser.

For development optimization and code quality assurance, this tools are also used:

-   [Prettier](https://prettier.io/): An code formatter that integrates with most editors, helps saving time and keep code style consistent
-   [ESLint](https://eslint.org/): ESLint is tool created to provide a pluggable linting utility for JavaScript
-   [Husky](https://www.npmjs.com/package/husky): Creates Git hooks in an easy way preventing bad commits and bad pushes.

Husky was configured to run Pretty and ESLint in pre commit git hook and to run Unit Tests in pre push git hook

## Running the app in development mode:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Make sure that you have NodeJS installed: `node -v`

Running the app on a local server: `npm start`

### In the project directory, you can:

Run Unit tests: `npm test`

Run Unit tests and generate code coverage: `npm run test:coverage`

Run E2E tests: `npm run cypress:open` (needs to have the app running already)

### Deployment

Find nore about this subject in here: https://facebook.github.io/create-react-app/docs/deployment
