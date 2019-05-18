/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userActions } from '../../actions/user.actions';

const styles = {
        bg: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "-webkit-fill-available",
        },
        card: {
            width: 380,
            boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
            borderRadius: 10,
            backgroundColor: '#ffffff',
            textAlign: "center"
        },
        // logo: {
        //     width: 58,
        //     height: 57,
        //     marginBottom: 30
        // },
        emailInput: {
            width: 320,
            height: 40,
            border: '1px solid #d6d6d6',
            backgroundColor: '#ffffff',
            margin:0
            // margin: 20
        },
        userPassword: {
            width: 150,
            height: 40,
            border: '1px solid #d6d6d6',
            backgroundColor: '#ffffff',
        },
        btn: {
            width: 380,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#007de9",
            marginTop: 20,
        },
        contactInput: {
            width: 150,
            height: 40,
            border: '1px solid #d6d6d6',
            backgroundColor: '#ffffff'
        },
        titleText: {
            color: '#000000',
            fontFamily: "Charter - Roman",
            fontSize: 12,
            fontWeight: 400,
            margin: 0
        },
        courseInput: {
            width: 320,
            height: 40,
            border: '1px solid #d6d6d6',
            backgroundColor: '#ffffff'
        },
        personalInfo: {
            width: 100,
            height: 40,
            border: '1px solid #d6d6d6',
            backgroundColor: '#ffffff',
            marginLeft: 10
        },
        cancelBtn: {
            width: 380,
            height: 40,
            borderRadius: 10,
            // backgroundColor: "#007de9",
            marginTop: 20,
            border: "1px solid #ffffff"
        },
        checkboxTxt: {
            // width: "213px",
            color: "#000000",
            fontFamily: "Charter - Roman",
            fontSize: "12px",
            fontWeight: 400,
            paddingLeft: 5
        },
        squareIcon: {
            width: 20,
            height: 20,
            backgroundColor: '#000000',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }

// let user = JSON.parse(localStorage.getItem('user')) || [];

class AccountInfoModal extends Component {
    constructor(props) {
        super(props)
        let user = JSON.parse(localStorage.getItem('user')).user;
        this.state = {        
            user: {
                ...user,
                password: ''
            },
            checkbox: false   
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        const { user } = this.state
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
     }
     handleCheckBox = () => {
         this.setState({
             checkbox: !this.state.checkbox
         })
     }
     handleOnChange = (value) => {
        const { user } = this.state
        this.setState({
            user: {
                ...user,
                phoneNumber: value
            }
        });
     }
     handleSubmit = (e) => {
         e.preventDefault()
         const { user } = this.state
         const { dispatch } = this.props
        //  alert(this.state.user._id)
         if( user.password === user.confirm_password) {
             dispatch(userActions.updateUser(user))
         } else {
             alert('password is incorrect')
         }
     }
    render() {
        const { user } = this.state

        return (
            <div style={styles.bg}>
            <div style={{display: 'block', textAlign: "center"}}>
                {/* <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} 
                    alt=""
                    style={styles.logo}
                /> */}
                <form onSubmit={this.handleSubmit}>
                    <div style={styles.card}>
                        <div style={{display: 'block', textAlign: 'left'}}>
                            <div style={{display: 'flex', paddingTop: 30}}>
                                <div style={{marginLeft: 30, width: 150}}>
                                    <label style={styles.titleText}>Contact Name</label>
                                    <input 
                                        style={styles.contactInput} 
                                        type="text"
                                        name="contactName"
                                        onChange={this.handleChange}
                                        value={user.contactName}
                                    />
                                </div>
                                <div style={{marginLeft: 20, width: 150}}>
                                    <label style={styles.titleText}>Number</label>
                                    <ReactPhoneInput 
                                        defaultCountry={'us'} 
                                        onChange={this.handleOnChange}
                                        inputStyle = {{
                                            width: 150, 
                                            height: 40
                                        }}
                                        containerClass = {{

                                        }}
                                        inputExtraProps={{
                                            name: 'phoneNumber',
                                            required: true,
                                            autoFocus: true
                                        }}
                                        value={user.phoneNumber}
                                    />
                                </div>
                            </div>
                            <div style={{marginLeft: 30, marginRight: 30, paddingTop: 10}}>
                                <p style={styles.titleText}>Email</p>
                                <input 
                                    style={styles.emailInput} 
                                    type="email" 
                                    placeholder=" example@mail.com"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={user.email}
                                />
                            </div>
                            {/* <div style={{marginLeft: 30, marginRight: 30, paddingTop: 10}}>
                                <p style={styles.titleText}>Original Password</p>
                                <input 
                                    style={styles.emailInput} 
                                    type="password" 
                                    onChange={this.handleChange}
                                    name="password"
                                    value={user.password}
                                />
                            </div> */}
                            <div style={{display: 'flex'}}>
                                <div style={{marginLeft: 30, width: 150}}>
                                    <label style={styles.titleText}>Create Password</label>
                                    <input 
                                        style={styles.userPassword} 
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        value={user.password}
                                    />
                                </div>
                                <div style={{marginLeft: 20, width: 150}}>
                                    <label style={styles.titleText}>Confirm Password</label>
                                    <input 
                                        style={styles.userPassword} 
                                        type="password"
                                        name="confirm_password"
                                        onChange={this.handleChange}
                                        value={user.confirm_password}
                                    />
                                </div>
                            </div>
                            <div style={{marginLeft: 30, marginRight: 30, paddingTop: 30}}>
                                <p style={styles.titleText}>GolfCourseName</p>
                                <input 
                                    style={styles.courseInput}
                                    type="text"
                                    name="golfCourseName"
                                    onChange={this.handleChange}
                                    value={user.golfCourseName}
                                />
                            </div>
                            <div style={{marginLeft: 30, marginRight: 30, paddingTop: 10}}>
                                <p style={styles.titleText}>GolfCourseAddress</p>
                                <input 
                                    style={styles.courseInput}
                                    type="text"
                                    name="address"
                                    onChange={this.handleChange}
                                    value={user.address}
                                />
                            </div>
                            <div style={{display: 'flex', marginLeft: 20, marginRight: 30, paddingTop: 10}}>
                                <input 
                                    style={styles.personalInfo} 
                                    placeholder=" City"
                                    name="cityAddr"
                                    type="text"
                                    value={user.cityAddr}
                                    onChange={this.handleChange}
                                />
                                <input 
                                    style={styles.personalInfo} 
                                    placeholder=" State"
                                    name="stateAddr"
                                    type="text"
                                    value={user.stateAddr}
                                    onChange={this.handleChange}
                                />
                                <input 
                                    style={styles.personalInfo} 
                                    placeholder=" Zip"
                                    name="zip"
                                    type="text"
                                    value={user.zip}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div style={{marginLeft: 30, marginRight: 30, paddingTop: 10, paddingBottom: 20}}>
                                <p style={styles.titleText}>GolfCourseUrl</p>
                                <input 
                                    style={styles.courseInput} 
                                    type="text" 
                                    placeholder=" www.example.com"
                                    name="golfCourseUrl"
                                    onChange={this.handleChange}
                                    value={user.golfCourseUrl}
                                />
                            </div>
                            {/* <div className="checkbox" style={{marginLeft: 30, paddingBottom: 20}}>
                                <label style={styles.checkboxTxt}>
                                    <input type="checkbox" value="" />I agree to receive emails and newsletters
                                </label>
                            </div> */}
                            <div style={{display: 'flex', alignItems: 'center',marginLeft: 30, paddingBottom: 20}}>
                                <div onClick={this.handleCheckBox} style={styles.squareIcon}>
                                    {
                                        this.state.checkbox&&
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/assets/images/check.png`}
                                            alt=""
                                        />
                                    }
                                </div>
                                <div>
                                    <label style={styles.checkboxTxt}>I agree to receive emails and newsletters</label>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div style={{display: 'block'}}>
                        <div>
                            <button type="submit" className="btn btn-primary" style={styles.btn}>
                                <p style={{color: 'white'}}>Submit</p>
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={this.props.handleAccountInfoClose} className="btn btn-default" style={styles.cancelBtn}>
                                <p style={{color: 'white'}}>Cancel</p>
                            </button>   
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

AccountInfoModal.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const {user} =  state.registration
    // console.log(user)
    return {
        user
    }
}

export default connect(mapStateToProps)(AccountInfoModal);
