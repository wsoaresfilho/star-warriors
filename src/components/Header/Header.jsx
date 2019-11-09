import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = props => {
    const { logo } = props;
    return (
        <header className='header'>
            <div className='header__container'>
                <a href='/'>
                    <img className='header__logo' alt='Logo' src={logo} />
                </a>
            </div>
        </header>
    );
};

Header.propTypes = {
    logo: PropTypes.string.isRequired,
};

export default Header;
