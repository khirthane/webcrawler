import React from 'react';
import './layout.scss';
import Logo from './logo';
import intl from '../utils/locales/en.json';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="logo-container">
                        <Logo />
                    </div>
                    <div className="title-container">
                        <h1 className="title">{intl.webCrawler}</h1>
                    </div>
                </header>
            </React.Fragment>
        )
    }
} 

export default Header;