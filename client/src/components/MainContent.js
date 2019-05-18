/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Contents from './Contents'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { categoryActions } from '../actions/category.actions';
import { subCategoryActions } from '../actions/subCategory.actions';
import { itemActions } from '../actions/item.actions';

const styles = {
    bg: {
        background: '#ffffff',
        borderTopLeftRadius: '10px 10px',
        borderBottomLeftRadius: '10px 10px',
        marginBottom: 10,
    },
    bgActive: {
        background: '#ffffff',
        borderTopLeftRadius: '10px 10px',
        borderBottomLeftRadius: '10px 10px',
        marginBottom: 10,
        opacity: 1
    },
    icon: {
        width: 30,
        height: 30
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

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            activeIndex: false,
            categoryName: '',
            categoryId: ''
        }
    }
    componentDidMount() {
        this.setState({
            categories: this.props.categories
        })
    }

    handleCategory = async (index) => {
        // alert("hello"+index)
        await this.setState({ activeIndex: index, categoryId: index })
        await this.props.handleCategoryClickedId(index)
        await this.props.dispatch(subCategoryActions.subCategoryGet(index))
        await this.props.dispatch(itemActions.itemGet(index))
    }

    handleCategoryName = async (categoryName) => {
        await this.setState({
            categoryName: categoryName
        })
    }

    handleDeleteCategoryClick = async () => {
        await this.props.dispatch(categoryActions.categoryDelete(this.state.categoryId))
    }

    render() {
        const { categories } = this.props
        const { categoryId } = this.state
        return (
            <div>
                <div style={{paddingLeft: '17.5%', boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)"}}>
                    <div className="tab">
                        {
                            categories&&categories.map((item, index) => (
                                <button key={index} onClick={() => this.handleCategory(item._id)} index={item._id} className="tablinks" style={this.state.activeIndex===item._id? styles.bgActive: styles.bg}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/${item.categoryIcon}.png`}
                                        alt=""
                                        style={styles.icon}
                                        onClick={() => this.handleCategoryName(item.categoryName)}
                                    />
                                </button>
                            ))
                        }
                        <button onClick={this.props.onClick} className="tablinks" style={styles.bg}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/5.png`}
                                alt=""
                                style={styles.icon}
                            />
                        </button>
                    </div>
                    <div className="tabcontent">
                        {
                            categories&&this.props.categories&&
                            <Contents 
                                onClick={this.props.handleOnClick}
                                handleSubCategoryClick={this.props.handleSubCategoryClick}
                                handleEditCategoryClick={this.props.handleEditCategoryClick}
                                handleEditSubCategoryClick={(id) => this.props.handleEditSubCategoryClick(id)}
                                handleDeleteCategoryClick={this.handleDeleteCategoryClick}
                                handleEditItemClick={(id) => this.props.handleEditItemClick(id)}
                                handleDeleteItemClick={(id) => this.props.handleDeleteItemClick(id)}
                                handleEditItemSubClick={(id) => this.props.handleEditItemSubClick(id)}
                                handleDeleteItemSubClick={(id) => this.props.handleDeleteItemSubClick(id)}
                                categoryName={this.state.categoryName}
                                categoryId={categoryId}
                                subCategories={this.props.subCategories}
                                items={this.props.items}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}


MainContent.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    const {categories, activeCategory} =  state.category
    const {subCategories} = state.subCategory
    const {items} = state.item
    // console.log(categories, activeCategory)
    return {
        categories,
        activeCategory,
        subCategories,
        items
    }
}

export default connect(mapStateToProps)(MainContent);
