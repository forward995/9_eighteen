/* eslint-disable no-mixed-operators */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

const styles = {
    card: {
        width: "250px",
        height: "175px",
        borderRadius: "10px",
        backgroundColor: "#ffffff"
    },
    categoryTitle: {
        color: "#000000",
        fontFamily: "Charter - Roman",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "24px"
    },
    bg: {
        borderRadius: "10px",
        border: "1px solid #000000",
        backgroundColor: "#ffffff",
        padding: 9,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 22,
        height: 22
    },
    iconText: {
        color: "#000000",
        fontFamily: "Charter - Roman",
        fontSize: "9px",
        fontWeight: 400
    },
    iconActive: {
        textAlign: 'center', 
        paddingLeft: 20,
    },
    iconNonActive: {
        textAlign: 'center', 
        paddingLeft: 17,
        opacity: 0.5
    },
    categoryTitleInput: {
        width: "210px",
        height: "40px",
        border: "1px solid #d6d6d6",
        backgroundColor: "#ffffff",
        marginLeft: 20
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

class AddCategoryModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drinkName: 1,
            shopName: 2,
            specialName: 3,
            foodName: 4,
            categoryName: '',
            drinkState: false,
            shopState: false,
            specialState: false,
            foodState: false
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state.categoryName)
    }
    handleClickDrink = () => {
        this.setState({
            drinkState: true,
            shopState: false,
            specialState: false,
            foodState: false
        })
        this.state.categoryName&&this.state.drinkName&&
        this.props.handleAddCategory(this.state.drinkName, this.state.categoryName)
    }
    handleClickFood = () => {
        this.setState({
            drinkState: false,
            shopState: false,
            specialState: false,
            foodState: true
        })
        this.state.categoryName&&
        this.props.handleAddCategory(this.state.foodName, this.state.categoryName)
    }
    handleClickShop = () => {
        this.setState({
            drinkState: false,
            shopState: true,
            specialState: false,
            foodState: false
        })
        this.state.categoryName&&
        this.props.handleAddCategory(this.state.shopName, this.state.categoryName)
    }
    handleClickSpecial = () => {
        this.setState({
            drinkState: false,
            shopState: false,
            specialState: true,
            foodState: false
        })
        this.state.categoryName&&
        this.props.handleAddCategory(this.state.specialName, this.state.categoryName)
    }
    render() {
        return (
            <div style={{display: 'block'}}>
                <div style={styles.card}>
                    <div style={{paddingLeft: 20, paddingTop: 10}}>
                        <label style={styles.categoryTitle}>Choose an icon</label>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={this.state.drinkState? styles.iconActive: styles.iconNonActive}>
                            <div style={styles.bg}>
                                <img 
                                    src={`${process.env.PUBLIC_URL}/assets/images/1.png`}
                                    alt=""
                                    style={styles.icon}
                                    onClick={this.handleClickDrink}
                                />
                            </div>
                            <label style={styles.iconText}>Drink</label>
                        </div>
                        <div style={this.state.foodState? styles.iconActive: styles.iconNonActive}>
                            <div style={styles.bg}>
                                <img 
                                    src={`${process.env.PUBLIC_URL}/assets/images/2.png`}
                                    alt=""
                                    style={styles.icon}
                                    name="foodName"
                                    onClick={this.handleClickFood}
                                />
                            </div>
                            <label style={styles.iconText}>Food</label>
                        </div>
                        <div style={this.state.shopState? styles.iconActive: styles.iconNonActive}>
                            <div style={styles.bg}>
                                <img 
                                    src={`${process.env.PUBLIC_URL}/assets/images/3.png`}
                                    alt=""
                                    style={styles.icon}
                                    name="shopName"
                                    onClick={this.handleClickShop}
                                />
                            </div>
                            <label style={styles.iconText}>Shop</label>
                        </div>
                        <div style={this.state.specialState? styles.iconActive: styles.iconNonActive}>
                            <div style={styles.bg}>
                                <img 
                                    src={`${process.env.PUBLIC_URL}/assets/images/4.png`}
                                    alt=""
                                    style={styles.icon}
                                    name="specialName"
                                    onClick={this.handleClickSpecial}
                                />
                            </div>
                            <label style={styles.iconText}>Special</label>
                        </div>
                    </div>
                    <input 
                        placeholder="  Category Title" 
                        style={styles.categoryTitleInput}
                        name="categoryName"
                        onChange={this.handleChange}
                        value={this.state.categoryName}
                    />
                </div>
                {/* <div>
                    <button type="button" className="btn btn-primary" style={styles.doneBtn}>
                        <p style={{color: 'white'}}>Done</p>
                    </button>
                </div>
                <div>
                    <button onClick={this.props.handleClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                        <p style={{color: 'white'}}>Cancel</p>
                    </button>   
                </div> */}
            </div>
        );
    }
}

export default AddCategoryModal;