import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = props => {
    const { name, imgUrl } = props;
    return (
        <div className='card__container'>
            <div className='card__image'>
                <img src={imgUrl} alt={name} />
            </div>
            <div className='card__content'>{`Name: ${name}`}</div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default Card;
