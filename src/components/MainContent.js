/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Contents from './Contents'

const styles = {
    bg: {
        background: '#ffffff',
        borderTopLeftRadius: '10px 10px',
        borderBottomLeftRadius: '10px 10px',
        marginBottom: 10,
    },
    bgActive: {
        background: '#ffffff',
        borderTopLeftRadius: '10px 10px',
        borderBottomLeftRadius: '10px 10px',
        marginBottom: 10,
        opacity: 1
    },
    icon: {
        width: 30,
        height: 30
    },
    modal: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.7)'
    },
}

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <div style={{paddingLeft: '17.5%', boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)"}}>
                    {/* <div style={styles.bg}>
                        asd
                    </div> */}
                    <div className="tab">
                        <button className="tablinks" style={styles.bgActive}>
                            A
                        </button>
                        <button className="tablinks" style={styles.bg}>
                            B
                        </button>
                        <button className="tablinks" style={styles.bg}>
                            C
                        </button>
                        <button className="tablinks" style={styles.bg}>
                            D
                        </button>
                        <button onClick={this.handleClick} className="tablinks" style={styles.bg}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/plus.png`}
                                alt=""
                                style={styles.icon}
                            />
                        </button>
                    </div>
                    <div className="tabcontent">
                        <Contents />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;