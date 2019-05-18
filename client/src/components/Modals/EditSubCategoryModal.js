/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { subCategoryActions } from '../../actions/subCategory.actions';
// import {subCategoryActions} from '../../actions/subCategory.actions'

const styles = {
    card: {
        width: 250,
        height: 135,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: "center"
    },
    itemNameInput: {
        width: 210,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    txt: {
        color: '#ff4d4d',
        fontFamily: 'Charter - Bold',
        fontSize: 14,
        fontWeight: 700,
        textDecoration: 'underline',
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
}

class EditSubCategoryModal extends Component {
    constructor(props){
        super(props)
        this.state={
            subCategory: {
                subCategoryName: '',
                subCategoryId: ''
            }
        }
    }
    handleChange = async (e) => {
        const { name, value } = e.target
        const { subCategoryId } = this.props
        const {subCategory} = this.state
    
        await this.setState({
            subCategory: {
                ...subCategory,
                [name]: value,
                subCategoryId: subCategoryId
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // alert(this.state.subCategory.subCategoryId)
        this.props.dispatch(subCategoryActions.subCategoryUpdate(this.state.subCategory))
    }

    handleDelete = () => {
        // alert(this.props.subCategoryId)
        this.props.dispatch(subCategoryActions.subCategoryDelete(this.props.subCategoryId))
    }
    render() {
        const { subCategory } = this.props
        // const { subCategory } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            {
            subCategory&&
            <div style={{display: 'block'}}>
                <div style={{display: 'flex'}}>
                    <div style={styles.card}>
                        <div style={{display: 'block'}}>
                            <input 
                                placeholder={`${this.props.subCategory.subCategoryName}`}
                                style={styles.itemNameInput}
                                value={this.state.subCategory.subCategoryName}
                                name="subCategoryName"
                                onChange={this.handleChange}
                            />
                            <a href="#" onClick={this.handleDelete} style={styles.txt}>Delete Subcategory</a><br/>
                            {/* <a href="#" style={styles.txt}>Delete Subcategory with Its Items</a> */}
                        </div>
                    </div>
                </div>
                <div style={{display: 'block'}}>
                    <div>
                        <button type="submit" className="btn btn-primary" style={styles.doneBtn}>
                            <p style={{color: 'white'}}>Update</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.props.handleEditSubCategoryClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
            </div>
            }
            </form>
        );
    }
}
EditSubCategoryModal.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const {subCategoy} = state.subCategory
    return {
        subCategoy
    }
}

export default connect(mapStateToProps)(EditSubCategoryModal)
