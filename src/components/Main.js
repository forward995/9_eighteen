/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'
import MainContentModal from './Modals/MainContentModal'
import ContentModal from './Modals/ContentModal'

const styles = {
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
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#007de9",
        marginTop: 20,
    },
    cancelBtn: {
        width: 250,
        height: 40,
        borderRadius: 10,
        // backgroundColor: "#007de9",
        marginTop: 20,
        border: "1px solid #ffffff"
    },
    doneMulBtn: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#007de9",
        marginTop: 20
    },
    cancelMulBtn: {
        width: 250,
        height: 40,
        borderRadius: 10,
        // backgroundColor: "#007de9",
        marginTop: 20,
        border: "1px solid #ffffff",
    }
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showMultiModal: false
        }
    }
    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,            
        })
    }
    handleOnClick = () => {
        this.setState({
            showMultiModal: !this.state.showMultiModal
        })
    }
    handleClose = () => {
        this.setState({
            showModal: !this.state.showModal,            
        })
    }
    MultihandleClose = () => {
        this.setState({
            showMultiModal: !this.state.showMultiModal
        })
    }
    render() {
        return (
            <div>
                <MainHeader />
                <div className="col-sm-12" style={{display: 'flex', marginTop: '1%'}}>
                    <div className="col-sm-8">
                        <MainContent onClick={this.handleClick} handleOnClick={this.handleOnClick}/>
                    </div>
                    <div className="col-sm-4">
                        <MainSidebar onClick={this.handleOnClick}/>
                    </div>
                </div>
                {
                    this.state.showModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <MainContentModal />
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
                {
                    this.state.showMultiModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <ContentModal />
                            <div style={{textAlign: 'center'}}>
                                <button type="button" className="btn btn-primary" style={styles.doneMulBtn}>
                                    <p style={{color: 'white'}}>Done</p>
                                </button>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <button onClick={this.MultihandleClose} type="button" className="btn btn-default" style={styles.cancelMulBtn}>
                                    <p style={{color: 'white'}}>Cancel</p>
                                </button>   
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Main;