import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import './styles.css';

const themes = {
    LIGHT: 'light',
    DARK: 'dark',
};

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userTheme: themes.LIGHT,
        };
    }

    isLightTheme() {
        const { userTheme } = this.state;
        return userTheme === themes.LIGHT;
    }

    render() {
        const { userTheme } = this.state;
        const appClassnames = classNames({
            app: true,
            light: userTheme === themes.LIGHT,
            dark: userTheme === themes.DARK,
        });
        const logo = this.isLightTheme ? 'logo-yellow.svg' : 'logo-black.svg';

        return (
            <div className={appClassnames}>
                <Header logo={logo} />
                {userTheme !== '' && (
                    <div className='app-container'>Container</div>
                )}
            </div>
        );
    }
}

export default App;
