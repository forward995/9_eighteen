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
    textInput: {
        width: 44,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        marginRight: 2
    },
    labelTxt: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Charter - Roman',
        paddingRight: 2
    },
    itemNameInput: {
        width: 310,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
}

class AddCourseModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            course: {
                courseName: '',
                description: ''
            }
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        const { course } = this.state
        this.setState({
            course: {
                ...course,
                [name]: value
            }
        });
    } 
    handleSubmit = async (e) => {
        e.preventDefault()
        const { course } = this.state
        await this.props.dispatch(courseActions.courseAdd(course))
        await this.props.dispatch(courseActions.courseGet())
        this.props.handleAddClose()
    }
    render() {
        const {course} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{display: 'block'}}>
                    <div style={styles.card}>
                        <div className="col-sm-12" style={{padding:0, paddingTop:10, display: 'flex', alignItems: 'baseline'}}>
                            <input 
                                placeholder="  Course Name" 
                                style={styles.itemNameInput}
                                name="courseName"
                                onChange={this.handleChange}
                                value={course.courseName}
                            />
                        </div>
                        <div className="col-sm-12" style={{padding:0, paddingTop:10, display: 'flex', alignItems: 'baseline'}}>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <p style={styles.txt1}>Description</p>
                                    <textarea 
                                        className="form-control" 
                                        rows="5" 
                                        style={{width: 310}}
                                        onChange={this.handleChange}
                                        name="description"
                                        value={course.description}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" style={styles.doneBtn}>
                            <p style={{color: 'white'}}>Done</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.props.handleAddClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
            </form>
        );
    }
}
AddCourseModal.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {courses, activeCourse,course} =  state.course    
    return {
        courses,
        activeCourse,
        course
    }
}

// export default connect(mapStateToProps)(Main)

export default connect(mapStateToProps)(AddCourseModal);