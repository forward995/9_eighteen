/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom'
import { userActions } from '../actions'
import { connect } from 'react-redux';

// import axios from 'axios'

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
    },
    registerBtn: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginTop: 20,
        border: '1px solid #000000'
    }
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        // console.log(this.props.logginIn)
        e.preventDefault()
        const {email, password} = this.state
        const {dispatch} = this.props
        // console.log(this.props)
        if(email && password) {
            dispatch(userActions.signin(email, password))
        }
    }

    handleClick = () => {
        this.props.history.push('/register')
    }
    
    render() {
        const {email, password} = this.state
        return (
            <div style={styles.bg}>
                <div style={{display: 'block'}}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} 
                        alt=""
                        style={styles.logo}
                    />
                    <form onSubmit={this.handleSubmit}>
                        <div style={styles.card}>
                            <input 
                                placeholder="  Useremail"
                                type="email"
                                name="email"
                                value={email} 
                                onChange={this.handleChange}
                                style={styles.userInput}
                            />
                            <input 
                                placeholder="  Password" 
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                style={styles.userPassword}
                            />
                            <a style={styles.forgot} href="#">
                                Forgot the Password?
                            </a>
                        </div>
                        <button type="submit" className="btn btn-primary" style={styles.btn}>
                            <p style={{color: 'white'}}>Log In</p>
                        </button>
                    </form>
                    <button onClick={this.handleClick} type="submit" className="btn btn-default" style={styles.registerBtn}>
                        <p style={{color: '#000000'}}>Register</p>
                    </button>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const loggingIn = state.authentication.loggedIn
    return {
        loggingIn
    }
}

export default connect(mapStateToProps)(Login);