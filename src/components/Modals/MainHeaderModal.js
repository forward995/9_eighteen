/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { courseActions } from '../../actions/course.actions';

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
    hrLineEnd: {
        width: '91%',
        marginTop: 0,
        paddingBottom: '35%'
    },
    icon: {
        width: 30,
        height: 30,
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
    },
}

class MainHeaderModal extends Component {
    constructor(props){
        super(props)
    }
    handleEdit(id) {
        alert(id)
        this.props.handleEditClick(id)
    }
    handleDelete (id) {
        this.props.dispatch(courseActions.courseDelete(id))
    }
    render() {
        return (
                <div>
                    <div style={styles.card}>                    
                        {
                            this.props.courses&&this.props.courses.map(item => (
                                <div key={item._id} style={{padding: 0}}>
                                    <div className="col-sm-12" style={{ padding:"5px 0px 0px 0px", display: 'flex', alignItems: 'baseline'}}>
                                        <div className="col-sm-6">
                                            <p style={styles.txt1}>{item.courseName}</p>
                                        </div>
                                        <div className="col-sm-6" style={{textAlign: 'right'}}>
                                            <a onClick={(id) => this.handleEdit(item._id)} style={styles.txt2}>Edit</a>
                                            <a onClick={(id) => this.handleDelete(item._id)} style={styles.txt3}>Delete</a>
                                        </div>
                                    </div>
                                    <hr style={styles.hrLine}></hr>
                                </div>
                            ))
                        }
                        <div className="col-sm-12" style={{display:'flex', paddingBottom: 12}}>
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6" style={{display:'flex', justifyContent:'center'}}>
                                <img 
                                    src={`${process.env.PUBLIC_URL}/assets/images/plus.png`}
                                    alt=""
                                    style={styles.icon}
                                    onClick={this.props.handleAdd}
                                />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <hr style={styles.hrLineEnd}></hr>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary" style={styles.doneBtn}>
                            <p style={{color: 'white'}}>Done</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.props.onClick} type="button" className="btn btn-default" style={styles.cancelBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
        );
    }
}
MainHeaderModal.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(MainHeaderModal)