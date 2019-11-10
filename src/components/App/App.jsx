import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import CardsContainer from '../Card/CardsContainer';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
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
                <div className='app-container'>
                    <CardsContainer />
                    <div className='theme-switch'>
                        <CustomSwitch
                            onChange={this.handleThemeChange}
                            isChecked={!this.isLightTheme()}
                            isSmall={false}
                            leftText='Light Theme'
                            rightText='Dark Theme'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
