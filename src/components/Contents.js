/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Subcategory from './SubCategory'
import Item from './Item';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { subCategoryActions } from '../actions/subCategory.actions';

const styles = {
    txtLine: {
        display: 'flex', 
        paddingTop: 15, 
        alignItems: 'baseline'
    },
    txt: {
        fontStyle: "italic",
        fontSize: 26,
        fontFamily: "charter"
    },
    txt1: {
        fontFamily: "Charter - Roman",
        fontSize: 14, 
        paddingRight: 15 , 
        fontWeight: 400, 
        textDecoration: 'underline',
        color: '#000000'
    },
    txt2: {
        fontFamily: "Charter - Roman", 
        color: '#f32362',
        fontSize: 14, 
        fontWeight: 400, 
        textDecoration: 'underline'
    },
    hrLine: {
        width: "93%",
        height: "1px",
        border: "1px solid #e7e7e7", 
        marginTop: 0
    },
    hrSubLine: {
        width: "42%",
        height: "1px",
        border: "1px solid #e7e7e7", 
        marginTop: 15
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconText: {
        color: "#000000",
        fontFamily: "Charter - Bold",
        fontSize: "14px",
        fontWeight: 700,
    },
    modal: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.7)'
    },
}

class Contents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryId: ''
        }
    }

    render() {
    
        return (
            <div className="row">
                <div className="col-sm-12" style={styles.txtLine}>
                    <div className="col-sm-6">
                        <p style={styles.txt}>{this.props.categoryName}</p>
                    </div>
                    <div className="col-sm-6" style={{textAlign: "right"}}>
                        <div>
                            <a href="#" onClick={this.props.handleEditCategoryClick} style={styles.txt1}>Edit</a>
                            <a href="#" onClick={this.props.handleDeleteCategoryClick} style={styles.txt2}>Delete Category</a>
                        </div>
                    </div>
                </div>
                <hr style={styles.hrLine}></hr>
                <div className="col-sm-12" style={{display:'flex'}}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6" style={{display:'block'}}>
                        <Item 
                            items={this.props.items}
                            handleEditItemClick={(id) => this.props.handleEditItemClick(id)}
                            handleDeleteItemClick={(id) => this.props.handleDeleteItemClick(id)}
                            
                        />
                        <Subcategory 
                            items={this.props.items}
                            subCategories={this.props.subCategories} 
                            handleSubCategoryClick={this.props.handleSubCategoryClick}
                            handleEditSubCategoryClick={(id) => this.props.handleEditSubCategoryClick(id)}
                            handleEditItemSubClick={(id) => this.props.handleEditItemSubClick(id)}
                            handleDeleteItemSubClick={(id) => this.props.handleDeleteItemSubClick(id)}
                        />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <hr style={styles.hrSubLine}></hr>
                <div className="col-sm-12" style={{display:'flex'}}>
                    <div className="col-sm-3"></div> 
                    <div className="col-sm-6">
                        <div className="col-sm-12" style={{display: 'flex'}}>
                            <div className="col-sm-6" style={{textAlign: 'center', padding: 0, borderRight: '1px solid #d6d6d6'}}>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/assets/images/plus.png`}
                                        alt=""
                                        style={styles.icon}
                                        onClick={this.props.onClick}
                                    />
                                </div>
                                <label style={styles.iconText}>Add Items...</label>
                            </div>
                            <div className="col-sm-6" style={{textAlign: 'center'}}>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/assets/images/plus.png`}
                                        alt=""
                                        style={styles.icon}
                                        onClick={this.props.handleSubCategoryClick}
                                    />
                                </div>
                                <label style={styles.iconText}>Add Subcategories...</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <hr style={styles.hrSubLine}></hr>
            </div>
        );
    }
}

Contents.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {subCategories} =  state.subCategory
    const {items} = state.item
    console.log(subCategories, items)
    return {
        subCategories, items
    }
}

export default connect(mapStateToProps)(Contents)