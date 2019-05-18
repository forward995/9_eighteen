/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main'

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default Home;