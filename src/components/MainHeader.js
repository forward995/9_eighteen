/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import MainHeaderModal from './Modals/MainHeaderModal'
// import EditModal from './Modals/EditModal';

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
    doneBtn: {
        width: 344,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#007de9",
        marginTop: 20,
    },
    cancelBtn: {
        width: 344,
        height: 40,
        borderRadius: 10,
        // backgroundColor: "#007de9",
        marginTop: 20,
        border: "1px solid #ffffff"
    }
}

class MainHeader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        console.log(this.state)
    }
    handleClose = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        return (
            <div>
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
                    <a className="nav-link" href="#" onClick={this.handleClick} style={styles.txt3}>Details</a>
                </li>
            </ul>
            {
                this.state.showModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <MainHeaderModal />
                            <div>
                                <button type="button" className="btn btn-primary" style={styles.doneBtn}>
                                    <p style={{color: 'white'}}>Done</p>
                                </button>
                            </div>
                            <div>
                                <button onClick={this.handleClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                                    <p style={{color: 'white'}}>Cancel</p>
                                </button>   
                            </div>
                        </div>
                    </div>
            }
            {/* {
                this.state.showModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditModal />
                        </div>
                    </div>
            } */}
            </div>
        );
    }
}

export default MainHeader;