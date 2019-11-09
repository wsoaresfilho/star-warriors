import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import {
    getDataFromLocalStorage,
    saveDataToLocalStorage,
} from '../../utils/localStorage';
import './styles.css';
import themes from '../../enums';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userTheme: getDataFromLocalStorage('theme'),
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
        saveDataToLocalStorage('theme', userTheme);
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
                            <ThemeSwitch
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