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
    }
}

class MainContent extends Component {
    render() {
        return (
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
                    <button className="tablinks" style={styles.bg}>
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
        );
    }
}

export default MainContent;