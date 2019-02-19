/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const styles = {
    headerBar: {
        marginTop: '2%',
        marginLeft: '11%',
    },
    logo: {
        width: 58,
        height: 57
    },
    txt1: {
        color: '#000000',
        textDecoration: 'underline',
        fontSize: '14px',
        fontWeight: 400,
        // lineHeight: 41
    },
    txt2: {
        color: '#f32362',
        
        textDecoration: 'underline',
        fontSize: '14px',
        fontWeight: 400,
        // lineHeight: 41
    }
}

class Header extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={styles.headerBar}>
                    <div className="col-sm-4">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} 
                            alt=""
                            style={styles.logo}
                        />
                    </div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" style={{paddingLeft: '7%'}}>
                        <ul className="navbar-nav mr-auto nav_bar">
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={styles.txt1}>
                                    Account Info
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" style={styles.txt2}>
                                    LogOut
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;