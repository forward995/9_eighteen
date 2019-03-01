/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'
import ContentModal from './Modals/ContentModal'

import AddCategoryModal from './Modals/AddCategoryModal'
import AddSubCategoryModal from './Modals/AddSubCategoryModal'
import EditCategoryModal from './Modals/EditCategoryModal';
import EditItemModal from './Modals/EditItemModal';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { categoryActions } from '../actions/category.actions';

const styles = {
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
    }
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showMultiModal: false,
            showSubCategoryModal: false,
            showEditCategoryModal: false,
            showEditItemModal: false
        }
    }

    //Open Modal

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,            
        })
    }
    handleOnClick = () => {
        this.setState({
            showMultiModal: !this.state.showMultiModal
        })
    }
    handleSubCategoryClick = () => {
        this.setState({
            showSubCategoryModal: !this.state.showSubCategoryModal
        })
    }
    handleEditCategoryClick = () => {
        this.setState({
            showEditCategoryModal: !this.state.showEditCategoryModal
        })
    }
    handleEditItemClick = () => {
        this.setState({
            showEditItemModal: !this.state.showEditItemModal
        })
    }

    // Modal close 

    handleClose = () => {
        this.setState({
            showModal: !this.state.showModal,            
        })
    }
    MultihandleClose = () => {
        this.setState({
            showMultiModal: !this.state.showMultiModal
        })
    }
    handleSubCategoryClose = () => {
        this.setState({
            showSubCategoryModal: !this.state.showSubCategoryModal
        })
    }
    handleEditCategoryClose = () => {
        this.setState({
            showEditCategoryModal: !this.state.showEditCategoryModal
        })
    }
    handleEditItemClose = () => {
        this.setState({
            showEditItemModal: !this.state.showEditItemModal
        })
    }

    getCourseId (id) {
        this.props.dispatch(categoryActions.categoryGet(id))
    }
    render() {
        return (
            <div>
                <MainHeader getCourseId={(id)=> this.getCourseId(id)}/>
                <div className="col-sm-12" style={{display: 'flex', marginTop: '1%'}}>
                    <div className="col-sm-8">
                        <MainContent 
                            onClick={this.handleClick} 
                            handleOnClick={this.handleOnClick}
                            handleSubCategoryClick={this.handleSubCategoryClick}
                            handleEditCategoryClick={this.handleEditCategoryClick}
                            handleEditItemClick={this.handleEditItemClick}
                            categories={this.props.categories}
                        />
                    </div>
                    <div className="col-sm-4">
                        <MainSidebar onClick={this.handleOnClick}/>
                    </div>
                </div>
                {
                    this.state.showMultiModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <ContentModal 
                                MultihandleClose={this.MultihandleClose}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <AddCategoryModal handleClose={this.handleClose}/>
                        </div>
                    </div>
                }
                {
                    this.state.showSubCategoryModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <AddSubCategoryModal 
                                handleSubCategoryClose={this.handleSubCategoryClose}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showEditCategoryModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditCategoryModal handleEditCategoryClose={this.handleEditCategoryClose}/>
                        </div>
                    </div>
                }
                {
                    this.state.showEditItemModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditItemModal handleEditItemClose={this.handleEditItemClose}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}


Main.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {categories} =  state.category
    console.log(categories)
    return {
        categories
    }
}

export default connect(mapStateToProps)(Main)