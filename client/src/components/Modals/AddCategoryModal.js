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
            Items: [
                {id: '1', labelName: 'Drink'},
                {id: '2', labelName: 'Food'},
                {id: '3', labelName: 'Shop'},
                {id: '4', labelName: 'Special'}
            ],
            activeIndex: false,
            category: {
                categoryIcon: '',
                categoryName: '',
                courseId: ''
            }
        }
    }
    handleClick (index) {
        const {category} = this.state
        this.setState({ activeIndex: index })
        // console.log(index)
        this.setState({
            category: {
                ...category,
                categoryIcon: index,
                courseId: this.props.courseId
            }
        })
    }
    
    handleChange = (e) => {
        const { name, value } = e.target
        const { category } = this.state
        this.setState({
            category: {
                ...category,
                [name]: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddCategory(this.state.category)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{display: 'block'}}>
                    <div style={styles.card}>
                        <div style={{paddingLeft: 20, paddingTop: 10}}>
                            <label style={styles.categoryTitle}>Choose an icon</label>
                        </div>
                        <div style={{display: 'flex'}}>
                            {
                                this.state.Items.map((item, index) => (
                                    <div key={index} onClick={() => this.handleClick(item.id)}
                                        style={this.state.activeIndex===item.id? styles.iconActive: styles.iconNonActive}>
                                        <div style={styles.bg}>
                                            <img 
                                                src={`${process.env.PUBLIC_URL}/assets/images/${item.id}.png`}
                                                alt=""
                                                style={styles.icon}
                                            />
                                        </div>
                                        <label style={styles.iconText}>{item.labelName}</label>
                                    </div>
                                ))
                            }
                        </div>
                        <input 
                            placeholder="  Category Title" 
                            style={styles.categoryTitleInput}
                            onChange={this.handleChange}
                            value={this.state.categoryName}
                            name="categoryName"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" style={styles.doneBtn}>
                            <p style={{color: 'white'}}>Done</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={this.props.handleClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                            <p style={{color: 'white'}}>Cancel</p>
                        </button>   
                    </div>
                </div>
            </form>
        );
    }
}

export default AddCategoryModal;