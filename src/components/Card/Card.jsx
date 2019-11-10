import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
import './styles.css';

class Card extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isInPersonalPanel: true,
        };

        this.handlePanelChange = this.handlePanelChange.bind(this);
    }

    handlePanelChange() {
        const { isInPersonalPanel } = this.state;
        this.setState({
            isInPersonalPanel: !isInPersonalPanel,
        });
    }

    render() {
        const {
            name,
            imgUrl,
            birth_year,
            gender,
            height,
            mass,
            starshipsDetails,
        } = this.props;
        const { isInPersonalPanel } = this.state;
        const hasStarships = starshipsDetails.length > 0;
        return (
            <div className='card-container'>
                <div className='card-container__image'>
                    <img src={imgUrl} alt={name} />
                </div>
                <div className='card-content'>
                    <h1 className='card-content__title'>{name}</h1>
                    {isInPersonalPanel && (
                        <div className='card-content__panel personal'>
                            <div className='card-content__info'>{`Gender: ${gender}`}</div>
                            <div className='card-content__info'>{`Birth Year: ${birth_year}`}</div>
                            <div className='card-content__info'>{`Height: ${height} cm`}</div>
                            <div className='card-content__info'>{`Weight: ${mass} Kg`}</div>
                        </div>
                    )}
                    {!isInPersonalPanel && (
                        <div className='card-content__panel'>
                            {!hasStarships && (
                                <div className='card-content__panel-nostarships'>
                                    There are no starships for this character
                                </div>
                            )}
                            {hasStarships &&
                                starshipsDetails.map(starship => {
                                    return (
                                        <div
                                            key={starship.name}
                                            className='card-content__panel-starships'
                                        >
                                            <div className='card-content__info'>
                                                {starship.name}
                                            </div>
                                            <div className='card-content__info'>{`Model: ${starship.model}`}</div>
                                            <div className='card-content__info'>{`Class: ${starship.starship_class}`}</div>
                                            <div className='card-content__info'>{`Num passengers: ${starship.passengers}`}</div>
                                            <div className='card-content__info'>{`Length: ${starship.length}`}</div>
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                    <div className='card-content__panel-switch'>
                        <CustomSwitch
                            onChange={this.handlePanelChange}
                            isChecked={!isInPersonalPanel}
                            isSmall
                            leftText='Personal'
                            rightText='Starships'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    starshipsDetails: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            model: PropTypes.string,
            starship_class: PropTypes.string,
            passengers: PropTypes.string,
            length: PropTypes.string,
        })
    ).isRequired,
};

export default Card;
