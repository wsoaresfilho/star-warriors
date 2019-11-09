import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import Switch from '../Switch/Switch';
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

        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    isLightTheme() {
        const { userTheme } = this.state;
        return userTheme === themes.LIGHT;
    }

    handleThemeChange() {
        const userTheme = this.isLightTheme() ? themes.DARK : themes.LIGHT;
        this.setState({
            userTheme,
        });
    }

    render() {
        const { userTheme } = this.state;
        const appClassnames = classNames({
            app: true,
            light: userTheme === themes.LIGHT,
            dark: userTheme === themes.DARK,
        });
        const logo = this.isLightTheme() ? 'logo-yellow.svg' : 'logo-black.svg';

        return (
            <div className={appClassnames}>
                <Header logo={logo} />
                {userTheme !== '' && (
                    <div className='app-container'>
                        <div className='theme-switch'>
                            <Switch
                                onChange={this.handleThemeChange}
                                isChecked={!this.isLightTheme()}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
