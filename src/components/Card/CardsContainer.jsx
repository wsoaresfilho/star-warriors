import React, { PureComponent } from 'react';
import Card from './Card';
import { getDataFromApi, getImageByTermFake } from '../../api/api';

class CardsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            isFetching: false,
            next: null,
            addedCardsNum: 0,
        };
    }

    componentDidMount() {
        this.fetchCards();
    }

    componentDidUpdate() {
        const { cards, isFetching } = this.state;
        if (cards.length > 0 && !isFetching) {
            this.startLazyLoading();
        }
    }

    getLoadingElement() {
        const { isFetching } = this.state;
        return (
            <div className='loading'>
                {isFetching && <img src='loading.gif' alt='Loading' />}
            </div>
        );
    }

    async fetchCards() {
        this.setState({ isFetching: true });

        const { next: link, cards } = this.state;
        const people = await getDataFromApi(link);
        const { results, next } = people;

        if (results.length > 0) {
            const updatedResults = await Promise.all(
                results.map(async res => {
                    const imageResp = await getImageByTermFake(res.name);
                    const imageUrl =
                        imageResp.items && imageResp.items.length > 0
                            ? imageResp.items[0].link
                            : '';
                    const { starships } = res;

                    const starshipsDetails = await Promise.all(
                        starships.map(async sts => {
                            const starshipsResp = await getDataFromApi(sts);
                            return starshipsResp;
                        })
                    );

                    const teste = {
                        ...res,
                        imgUrl: imageUrl,
                        starshipsDetails,
                    };
                    return teste;
                })
            );
            console.warn(updatedResults);

            this.setState({
                cards: cards.concat(updatedResults),
                isFetching: false,
                next,
                addedCardsNum: results.length,
            });
        }
    }

    startLazyLoading() {
        const { next, addedCardsNum } = this.state;
        const elements = [].slice.call(
            document.querySelectorAll('.cards-container img')
        );

        if ('IntersectionObserver' in window) {
            const lazyImageObserver = new IntersectionObserver(entries => {
                entries.forEach(async entry => {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImageObserver.unobserve(lazyImage);

                        if (next) {
                            this.fetchCards();
                        }
                    }
                });
            });

            elements.slice(-addedCardsNum).forEach((lazyImage, index) => {
                if ((index + 1) % 7 === 0) {
                    lazyImageObserver.observe(lazyImage);
                }
            });
        }
    }

    render() {
        const { cards } = this.state;
        return (
            <div className='cards-container'>
                {cards.map(card => {
                    const props = card;
                    return <Card key={card.name} {...props} />;
                })}
                {this.getLoadingElement()}
            </div>
        );
    }
}

export default CardsContainer;
