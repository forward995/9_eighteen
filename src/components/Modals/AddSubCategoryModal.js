/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { subCategoryActions } from '../../actions/subCategory.actions';

const styles = {
    card: {
        width: 250,
        height: 80,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: "center"
    },
    card1: {
        width: 250,
        height: 80,
        boxShadow: "0 3px 18px rgba(122,122,122,0.49)",
        borderRadius: 10,
        marginLeft: '16px',
        textAlign: "center",
        border: '2px dashed #ffffff',
        justifyContent: "center",
        alignItems: "center",
        display: 'flex'
    },
    itemNameInput: {
        width: 210,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        margin: 20
    },
    configurationInput: {
        width: 210,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    moneyInput: {
        width: 180,
        height: 40,
        border: '1px solid #d6d6d6',
        backgroundColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    txt: {
        color: '#ffffff',
        fontFamily: 'Charter - Bold',
        fontSize: 14,
        fontWeight: 700,
        paddingTop: 5,
        marginBottom: 0
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

class AddSubCategoryModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subCategory: {
                subCategoryName: '',
                categoryId: ''
            }
        }
    }
    async componentDidMount() {
        const {subCategory} = this.state
        await this.setState({
            subCategory: {
                ...subCategory,
                categoryId:this.props.categoryId
            }
        })
    }
    handleChange = (e) => {   
        const {subCategory} = this.state     
        this.setState({
            subCategory: {
                ...subCategory,
                subCategoryName: e.target.value,
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.subCategory)
        console.log(this.state.subCategory)
        this.props.dispatch(subCategoryActions.subCategoryAdd(this.state.subCategory))
    }
    render() {
        const {subCategory} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{display: 'block'}}>
                    <div style={{display: 'flex'}}>
                        <div style={styles.card}>
                            <input 
                                placeholder="  Subcategory Name" 
                                style={styles.itemNameInput}
                                onChange={this.handleChange}
                                value={subCategory.subCategoryName}
                                name="subCategoryName"
                            />
                        </div>
                        <div style={styles.card1}>
                            <div style={{display: 'block'}}>
                                <img 
                                    src={`${process.env.PUBLIC_URL}/assets/images/Combined_Shape.png`} 
                                    alt=""
                                />
                                <p style={styles.txt}>
                                    Add another subcategory
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'block'}}>
                        <div>
                            <button type="submit" className="btn btn-primary" style={styles.doneBtn}>
                                <p style={{color: 'white'}}>Done</p>
                            </button>
                        </div>
                        <div>
                            <button onClick={this.props.handleSubCategoryClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                                <p style={{color: 'white'}}>Cancel</p>
                            </button>   
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
AddSubCategoryModal.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    const {subCategory} =  state.subCategory
    console.log(subCategory)
    return {
        subCategory
    }
}

export default connect(mapStateToProps)(AddSubCategoryModal);