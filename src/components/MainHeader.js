/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import MainHeaderModal from './Modals/MainHeaderModal'
// import EditModal from './Modals/EditModal';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { courseActions } from '../actions/course.actions';
import EditModal from './Modals/EditModal';

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
        fontWeight: 400,
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
}

class MainHeader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            activeIndex: false,
            showEditModal: false,
        }
    }

    componentDidMount() {
        this.props.dispatch(courseActions.courseGet())    
    }
    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }
    handleClose = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    handleCourse = (index) => {
        this.setState({ activeIndex: index })
        console.log(this.state.active)
    }
    handleEditClick(id){
        alert(id)
        this.setState({
            showEditModal: !this.state.showEditModal
        })
        this.props.dispatch(courseActions.courseEdit(id))
    }
    handleEditClose = () => {
        this.setState({
            showModal: !this.state.showModal,
            showEditModal: !this.state.showEditModal
        })
    }
    render() {
        const {courses, course} = this.props
        return (
            <div>
                <ul className="nav nav-tabs" style={styles.tab}>
                    {
                        courses && courses.map(item => (
                            <li key={item._id} className="nav-item">
                                <a 
                                    onClick={() => this.handleCourse(item._id)}
                                    className="nav-link"
                                    index={item._id}
                                    style={this.state.activeIndex===item._id? styles.txt1: styles.txt2}
                                >
                                    {item.courseName}
                                </a>
                            </li>
                        ))
                    }
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.handleClick} href="#" style={styles.txt3}>Details</a>
                    </li>
                </ul>
                {
                    this.state.showModal&&
                        <div style={styles.modal}>
                            <div style={{display: 'block'}}>
                                {
                                    !this.state.showEditModal&&                
                                        <MainHeaderModal 
                                        courses={this.props.courses} 
                                        onClick={this.handleClose}
                                        handleEditClick={(id) => this.handleEditClick(id)}
                                    />
                                }
                                {
                                    this.state.showEditModal&&course&&
                                        <EditModal 
                                            handleEditClose={this.handleEditClose}
                                            course={this.props.course}
                                        />
                                }
                            </div>
                        </div>
                }
            </div>
        );
    }
}

MainHeader.propTypes = {
    dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    const {courses, course} =  state.course
    console.log(courses,course)
    return {
        courses,
        course
    }
}

export default connect(mapStateToProps)(MainHeader);
