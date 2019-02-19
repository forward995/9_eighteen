import React, { Component } from 'react';

const styles = {
    card: {
        width: 250,
        height: 190,
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
    }
}

class ContentModal extends Component {
    render() {
        return (
            <div style={{display: 'flex'}}>
                <div style={styles.card}>
                    <input 
                        placeholder="  Mountain Dew" 
                        style={styles.itemNameInput}
                    />
                    <input 
                        placeholder="  221ml" 
                        style={styles.configurationInput}
                    />
                    <div style={{display: 'flex', alignItems: 'baseline'}}>
                        <p style={{marginLeft: 20}}>$</p>
                        <input 
                            placeholder="  2.50" 
                            style={styles.moneyInput}
                        />
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
        );
    }
}

export default ContentModal;