/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { itemActions } from '../../actions/item.actions';

const styles = {
    card: {
        width: 250,
        height: 245,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: "center"
    },
    card1: {
        width: 250,
        height: 245,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: "center",
        marginLeft: '20px',
    },
    card2: {
        width: 250,
        height: 190,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        marginLeft: '20px',
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
        paddingTop: 10
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
    },
    dropdownMenu: {
        marginLeft: 20,
        marginRight: 20
    }
}

class ItemModal extends Component {
    constructor(props) {
        super(props)
        this.state={
            item: {
                subCategoryId:'',
                itemName: '',
                itemPrice: '',
                itemAmount: '',
                categoryId: ''
            },
            value: ''
        }
    }

    handleChange = (e) => {
        const {item} = this.state
        const {name, value}=e.target
        this.setState({
            item: {
                ...item,
                [name]: value
            }
        })
    }

    handleOnChange = (e) => {
        const {item} =  this.state
        const subCategoryId = e.target.value
        alert(subCategoryId)
        this.setState({
            item: {
                ...item,
                subCategoryId: subCategoryId,
                categoryId: this.props.categoryId
            },
            value: subCategoryId
        }) 
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {item}=this.state
        const categoryId=this.props.categoryId
        alert(categoryId)
        await this.setState({
            item: {
                ...item,
                categoryId: categoryId
            }
        })
        this.props.dispatch(itemActions.itemAdd(this.state.item))
    }

    render() {
        const {subCategories}=this.props
        const {item} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div style={{display:'block'}}>
                <div style={{display: 'flex'}}>
                    <div style={styles.card}>
                        <input 
                            placeholder="  Mountain Dew" 
                            style={styles.itemNameInput}
                            name="itemName"
                            value={item.itemName}
                            onChange={this.handleChange}
                        />
                        <input 
                            placeholder="  221ml" 
                            style={styles.configurationInput}
                            name="itemAmount"
                            value={item.itemAmount}
                            onChange={this.handleChange}
                        />
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <p style={{marginLeft: 20}}>$</p>
                            <input 
                                placeholder="  2.50" 
                                style={styles.moneyInput}
                                name="itemPrice"
                                value={item.itemPrice}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={styles.dropdownMenu}>
                            <select className="custom-select" value={this.state.value} onChange={this.handleOnChange} id="inputGroupSelect03" >
                                <option defaultValue="selected">None</option>
                                {
                                    subCategories&&subCategories.map((item, index) => (
                                        <option value={item._id} key={index}>
                                            {item.subCategoryName}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div style={styles.card1}>
                        <input 
                            placeholder="  Item Name" 
                            style={styles.itemNameInput}
                        />
                        <input 
                            placeholder="  Configuration" 
                            style={styles.configurationInput}
                        />
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <p style={{marginLeft: 20}}>$</p>
                            <input 
                                placeholder="" 
                                style={styles.moneyInput}
                            />
                        </div>
                        <div style={styles.dropdownMenu}>
                            <select className="custom-select" id="inputGroupSelect03">
                                <option defaultValue="selected">None</option>
                                {
                                    subCategories&&subCategories.map((item, index) => (
                                        <option value={index} key={index}>
                                            {item.subCategoryName}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div style={styles.card2}>
                        <div style={{display: 'block'}}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/Combined_Shape.png`} 
                                alt=""
                            />
                            <p style={styles.txt}>
                                Add another item to<br/>
                                this menu
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'block'}}>
                    <div style={{textAlign: 'center'}}>
                        <button type="submit" className="btn btn-primary" style={styles.doneMulBtn}>
                            <p style={{color: 'white'}}>Done</p>
                        </button>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button onClick={this.props.MultihandleClose} type="button" className="btn btn-default" style={styles.cancelMulBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
            </div>
            </form>
        );
    }
}
ItemModal.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    const {subCategories} = state.subCategory
    const {item} =  state.item
    console.log(item)
    return {
        item,subCategories
    }
}

export default connect(mapStateToProps)(ItemModal)
