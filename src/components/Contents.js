/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const styles = {
    txtLine: {
        display: 'flex', 
        paddingTop: 15, 
        alignItems: 'baseline'
    },
    txt: {
        fontStyle: "italic",
        fontSize: 26,
        fontFamily: "charter"
    },
    txt1: {
        fontFamily: "Charter - Roman",
        fontSize: 14, 
        paddingRight: 15 , 
        fontWeight: 400, 
        textDecoration: 'underline'
    },
    txt2: {
        fontFamily: "Charter - Roman", 
        color: '#f32362',
        fontSize: 14, 
        fontWeight: 400, 
        textDecoration: 'underline'
    },
    hrLine: {
        width: "93%",
        height: "1px",
        border: "1px solid #e7e7e7", 
        marginTop: 0
    },
    hrSubLine: {
        width: "42%",
        height: "1px",
        border: "1px solid #e7e7e7", 
        marginTop: 15
    },
    icon: {
        width: 30,
        height: 30,
    }
}

class Contents extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12" style={styles.txtLine}>
                    <div className="col-sm-6">
                        <p style={styles.txt}>Drinks</p>
                    </div>
                    <div className="col-sm-6" style={{textAlign: "right"}}>
                        <div>
                            <a style={styles.txt1}>Edit</a>
                            <a style={styles.txt2}>Delete Category</a>
                        </div>
                    </div>
                </div>
                <hr style={styles.hrLine}></hr>
                <div className="col-sm-12" style={{display:'flex'}}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6" style={{display:'flex'}}>
                        <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                            <div>
                                <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>Coca-Cola</a><br />
                                <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400}}>$2.25</a>  <a style={{fontStyle: "italic"}}>500ml</a>
                            </div>
                        </div>
                        <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                            <div>
                                <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Edit</a><br />
                                <a style={{fontFamily: "Charter - Roman", color: '#f32362',fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Delete Item</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <hr style={styles.hrSubLine}></hr>
                <div className="col-sm-12" style={{display:'flex'}}>
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
                <hr style={styles.hrSubLine}></hr>
            </div>
        );
    }
}

export default Contents;