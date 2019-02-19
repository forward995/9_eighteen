/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const styles = {
    tab: {
        marginLeft: "12%",
        marginTop: "1%",
        alignItems: "center"
    },
    txt1: {
        fontFamily: 'charter',
        color: '#000000',
        fontSize: 26,
        fontWeight: 700,
    },
    txt2: {
        fontFamily: 'charter',
        opacity: 0.3,
        color: '#000000',
        fontSize: 26,
        fontWeight: 400
    },
    txt3: {
        fontFamily: 'charter',
        color: '#000000',
        fontSize: 14,
        fontWeight: 400,
        textDecoration: 'underline',
        paddingLeft: '40%'
    }
}

class MainHeader extends Component {
    render() {
        return (
            <ul className="nav" style={styles.tab}>
                <li className="nav-item">
                    <a className="nav-link active" href="#" style={styles.txt1}>Cart Driver (Default)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={styles.txt2}>Halfway</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={styles.txt2}>Clubhouse</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={styles.txt3}>Details</a>
                </li>
            </ul>
        );
    }
}

export default MainHeader;