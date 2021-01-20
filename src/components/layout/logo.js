import React from 'react';
import './layout.scss'
import logo from '../../images/sixt-logo.png'

class Logo extends React.Component {

    render() {
        return (
                <h1 className="logo">
                <img src={logo} width="100" alt="Sixt Logo"></img>
                </h1>
        )
    }
} 

export default Logo;