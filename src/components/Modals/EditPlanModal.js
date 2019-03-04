/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { planActions } from '../../actions/plan.actions';

const styles = {
    card: {
        width: 250,
        boxShadow: "0 3px 18px rgba(203,203,203,0.49)",
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: "center"
    },
    card1: {
        width: 250,
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

class EditPlanModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            plan: this.props.plan
        }
    }

    handleChange = (e) => {
        const {plan} = this.state
        const {name, value}=e.target
        this.setState({
            plan: {
                ...plan,
                [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(planActions.planUpdate(this.state.plan))
    }

    render() {
        const { plan } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div style={{display:'block'}}>
                <div style={{display: 'flex'}}>
                    <div style={styles.card}>
                        <input 
                            placeholder=" Name" 
                            style={styles.itemNameInput}
                            name="itemName"
                            onChange={this.handleChange}
                            value={plan.itemName}
                        />                        
                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <p style={{marginLeft: 20}}>$</p>
                            <input 
                                placeholder=" Price" 
                                style={styles.moneyInput}
                                name="itemPrice"
                                onChange={this.handleChange}
                                value={plan.itemPrice}
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
                <div style={{display: 'block'}}>
                    <div style={{textAlign: 'center'}}>
                        <button type="submit" className="btn btn-primary" style={styles.doneMulBtn}>
                            <p style={{color: 'white'}}>Done</p>
                        </button>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button onClick={this.props.handleEditPlanModalClose} type="button" className="btn btn-default" style={styles.cancelMulBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
            </div>
            </form>
        );
    }
}

// function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
// }

EditPlanModal.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

// const mapStateToProps = (state) => {
//     const {plan} = state.plan
//     console.log(plan)
//     return {
//         plan
//     }
// }

export default connect()(EditPlanModal)

