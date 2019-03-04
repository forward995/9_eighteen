/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import MainHeaderModal from './Modals/MainHeaderModal'
// import EditModal from './Modals/EditModal';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { courseActions } from '../actions/course.actions';
import EditModal from './Modals/EditModal';
import AddCourseModal from './Modals/AddCourseModal';

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
    
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            activeIndex: false,
            showEditModal: false,
            showAddModal: false,
            courses: '',
            course: ''
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

    handleCourse = async (index) => {
        alert(this.state.activeIndex)
        await this.setState({ activeIndex: index })
        await this.props.getCourseId(index)
    }

    async handleEditClick (id) {
        alert(id)
        this.props.dispatch(courseActions.courseGet()) 
        this.props.dispatch(courseActions.courseEdit(id))
        await this.setState({
            showEditModal: !this.state.showEditModal,
            showModal: !this.state.showModal,
        })
    }

    handleEditClose = () => {
        this.setState({
            showEditModal: !this.state.showEditModal
        })
    }

    handleAdd = () => {
        this.setState({
            showAddModal: !this.state.showAddModal,
            showModal: !this.state.showModal,
        })
    }

    handleAddClose = () => {
        this.setState({
            // showModal: !this.state.showModal,
            showAddModal: !this.state.showAddModal
        })
    }

    render() {
        const {courses} = this.props
        
        return (
            <div>
                <ul className="nav nav-tabs" style={styles.tab}>
                    {                        
                        courses && courses.map((item, index) => (
                            <li key={item._id} className="nav-item" style={{cursor: 'pointer'}}>
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
                {/* {
                    this.state.showModal&&
                        <div style={styles.modal}>
                            <div style={{display: 'block'}}>
                                {
                                    !this.state.showEditModal&&!this.state.showAddModal&&                
                                        <MainHeaderModal 
                                            courses={this.props.courses} 
                                            onClick={this.handleClose}
                                            handleEditClick={(id) => this.handleEditClick(id)}
                                            handleAdd={this.handleAdd}
                                        />
                                }
                                {
                                    this.state.showEditModal&&course&&
                                        <EditModal 
                                            handleEditClose={this.handleEditClose}
                                            course={this.props.course}
                                        />
                                }
                                {
                                    this.state.showAddModal&&
                                    <AddCourseModal 
                                        handleAddClose={this.handleAddClose}
                                    />
                                }
                            </div>
                        </div>
                } */}
                {
                    this.state.showModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <MainHeaderModal 
                                courses={this.props.courses} 
                                onClick={this.handleClose}
                                handleEditClick={(id) => this.handleEditClick(id)}
                                handleAdd={this.handleAdd}
                            />
                        </div>
                    </div>

                }
                {
                    this.state.showEditModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditModal 
                                handleEditClose={this.handleEditClose}
                                course={this.props.course}
                            />
                        </div>
                    </div>

                }
                {
                    this.state.showAddModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <AddCourseModal 
                                handleAddClose={this.handleAddClose}
                            />
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
    const {courses, activeCourse,course} =  state.course
    console.log("HHHHHHH"+course)
    
    return {
        courses,
        activeCourse,
        course
    }
}

export default connect(mapStateToProps)(MainHeader);
