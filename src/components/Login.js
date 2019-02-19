/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const styles = {
    bg: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "-webkit-fill-available",
    },
    card: {
        width: 250,
        height: 170,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: "center"
    },
    logo: {
        width: 58,
        height: 57,
        marginLeft: 96,
        marginBottom: 30
    },
    userInput: {
        width: 210,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        margin: 20
    },
    userPassword: {
        width: 210,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    forgot: {
        width: "85px",
        height: "17px",
        color: "#000000",
        fontFamily: "Charter - Roman",
        fontSize: "9px",
        fontWeight: 400,
        lineHeight: "24px",
        textDecoration: "none",
        textAlign: "center"
    },
    btn: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#007de9",
        marginTop: 20,
    }
}

class Login extends Component {
    render() {
        return (
            <div style={styles.bg}>
                <div style={{display: 'block'}}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} 
                        alt=""
                        style={styles.logo}
                    />
                    <div style={styles.card}>
                        <input 
                            placeholder="  Username" 
                            style={styles.userInput}
                        />
                        <input 
                            placeholder="  Password" 
                            style={styles.userPassword}
                        />
                        <a style={styles.forgot} href="#">
                            Forgot the Password?
                        </a>
                    </div>
                    <button type="button" className="btn btn-primary" style={styles.btn}>
                        <p style={{color: 'white'}}>Log In</p>
                    </button>
                    {/* <Button color="default" style={styles.btn}>
                        <p style={{color: 'white'}}>Log In</p>
                    </Button> */}
                </div>
            </div>
        );
    }
}

export default Login;