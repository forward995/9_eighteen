/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import MainHeader from './MainHeader'
import MainContent from './MainContent';
import MainSidebar from './MainSidebar';

class Main extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state({
    //         isOpen: false
    //     })
    // }
    // handleClick = () => {
    //     this.setState({
    //         isOpen: this.props.isOpen
    //     })
    // }
    render() {
        return (
            <div>
                <MainHeader />
                <div className="col-sm-12" style={{display: 'flex', marginTop: '1%'}}>
                    <div className="col-sm-8">
                        <MainContent />
                    </div>
                    <div className="col-sm-4">
                        <MainSidebar />
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;