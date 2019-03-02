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
    dropdownMenu: {
        marginLeft: 20,
        marginRight: 20
    }
}

class EditItemModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                itemName: '',
                itemPrice: '',
                itemAmount: '',
                itemId: ''
            }
        }
    }

    handleChange = async (e) => {
        const { name, value } = e.target
        const { itemId } = this.props
        const {item} = this.state
        await this.setState({
            item: {
                ...item,
                [name]: value,
                itemId: itemId
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(itemActions.itemUpdate(this.state.item))
    }
    render() {
        const {item} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                {
                    item&&
                    <div style={{display: 'block'}}>
                        <div style={{display: 'flex'}}>
                            <div style={styles.card}>
                                <input 
                                    placeholder={`${this.props.item.itemName}`} 
                                    style={styles.itemNameInput}
                                    name="itemName"
                                    onChange={this.handleChange}
                                    value={this.state.item.itemName}
                                />
                                <input 
                                    placeholder={`${this.props.item.itemAmount}`} 
                                    style={styles.configurationInput}
                                    name="itemAmount"
                                    onChange={this.handleChange}
                                    value={this.state.item.itemAmount}
                                />
                                <div style={{display: 'flex', alignItems: 'baseline'}}>
                                    <p style={{marginLeft: 20}}>$</p>
                                    <input 
                                        placeholder={`${this.props.item.itemPrice}`} 
                                        style={styles.moneyInput}
                                        onChange={this.handleChange}
                                        name="itemPrice"
                                        value={this.state.item.itemPrice}
                                    />
                                </div>
                                <div style={styles.dropdownMenu}>
                                    <select className="custom-select" id="inputGroupSelect03">
                                        <option defaultValue="selected">None</option>
                                    </select>
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
                                <button onClick={this.props.handleEditItemClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
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

EditItemModal.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const {item} = state.item
    return {
        item
    }
}

export default connect(mapStateToProps)(EditItemModal)
