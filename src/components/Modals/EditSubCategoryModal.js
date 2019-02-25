/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

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

class AddSubCategoryModal extends Component {
    render() {
        return (
            <div style={{display: 'block'}}>
                <div style={{display: 'flex'}}>
                    <div style={styles.card}>
                        <div style={{display: 'block'}}>
                            <input 
                                placeholder="  Subcategory Name" 
                                style={styles.itemNameInput}
                            />
                            <a href="#" style={styles.txt}>Delete Subcategory</a><br/>
                            <a href="#" style={styles.txt}>Delete Subcategory with Its Items</a>
                        </div>
                    </div>
                </div>
                <div style={{display: 'block'}}>
                    <div>
                        <button type="button" className="btn btn-primary" style={styles.doneBtn}>
                            <p style={{color: 'white'}}>Update</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.props.handleClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSubCategoryModal;