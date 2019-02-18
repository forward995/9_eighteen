/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const styles = {
    card: {
        width: "344px",
        // height: "225px",
        borderRadius: "10px",
        backgroundColor: "#ffffff"
    },
    txt1: {
        fontFamily: 'Charter - Bold',
        fontSize: 14,
        fontWeight: 700,
        color: '#000000'
    },
    txt2: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 400,
        textDecoration: 'underline',
        fontFamily: 'Charter - Roman',
        paddingRight: 15, 
    },
    txt3: {
        color: '#f32362',
        fontFamily: 'Charter - Roman',
        fontSize: 12,
        fontWeight: 400,
        textDecoration: 'underline'
    },
    hrLine: {
        width: '91%',
        marginTop: 0
    },
    icon: {
        width: 30,
        height: 30,
    }
}

class MainHeaderModal extends Component {
    render() {
        return (
            <div style={styles.card}>
                <div className="col-sm-12" style={{padding:0, paddingTop:10, display: 'flex', alignItems: 'baseline'}}>
                    <div className="col-sm-6">
                        <p style={styles.txt1}>Cart Driver(Default)</p>
                    </div>
                    <div className="col-sm-6" style={{textAlign: 'right'}}>
                        <a style={styles.txt2}>Edit</a>
                        <a style={styles.txt3}>Delete</a>
                    </div> 
                </div>
                <hr style={styles.hrLine}></hr>
                <div className="col-sm-12" style={{padding:0, display: 'flex', alignItems: 'baseline'}}>
                    <div className="col-sm-6">
                        <p style={styles.txt1}>Halfway House</p>
                    </div>
                    <div className="col-sm-6" style={{textAlign: 'right'}}>
                        <a style={styles.txt2}>Edit</a>
                        <a style={styles.txt3}>Delete</a>
                    </div>
                </div>
                <hr style={styles.hrLine}></hr>
                <div className="col-sm-12" style={{padding:0, display: 'flex', alignItems: 'baseline'}}>
                    <div className="col-sm-6">
                        <p style={styles.txt1}>Clubhouse</p>
                    </div>
                    <div className="col-sm-6" style={{textAlign: 'right'}}>
                        <a style={styles.txt2}>Edit</a>
                        <a style={styles.txt3}>Delete</a>
                    </div>
                </div>
                <hr style={styles.hrLine}></hr>

                <div className="col-sm-12" style={{display:'flex', paddingBottom: 12}}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6" style={{display:'flex', justifyContent:'center'}}>
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/plus.png`}
                            alt=""
                            style={styles.icon}
                        />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <hr style={styles.hrLine}></hr>
            </div>
        );
    }
}

export default MainHeaderModal;