/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import MainSidebar from './MainSidebar'
import ItemModal from './Modals/ItemModal'

import AddCategoryModal from './Modals/AddCategoryModal'
import AddSubCategoryModal from './Modals/AddSubCategoryModal'
import EditCategoryModal from './Modals/EditCategoryModal';
import EditItemModal from './Modals/EditItemModal';
import EditSubCategoryModal from './Modals/EditSubCategoryModal'
import PlanModal from './Modals/PlanModal'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { categoryActions } from '../actions/category.actions';
import { subCategoryActions } from '../actions/subCategory.actions';
import { itemActions } from '../actions/item.actions';
import EditPlanModal from './Modals/EditPlanModal';
// import { planActions } from '../actions/plan.actions';

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
    }
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showMultiModal: false,
            showSubCategoryModal: false,
            showEditSubCategoryModal: false,
            showEditCategoryModal: false,
            showEditItemModal: false,
            showPlanModal: false,
            showEditPlanModal: false,
            category: {
                courseId: '',
                categoryName: '',
                categoryIcon: '' ,
                categoryId: '' 
            },
            subCategoryId: '',
            itemId: '',
            planSelectedDate: '',
            plan: ''
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
        // alert(this.state.category.categoryId)
        this.props.dispatch(categoryActions.categoryEdit(this.state.category.categoryId))
        this.setState({
            showEditCategoryModal: !this.state.showEditCategoryModal
        })
    }

    handleEditSubCategoryClick = async (id) => {
        this.props.dispatch(subCategoryActions.subCategoryEdit(id))
        await this.setState({
            showEditSubCategoryModal: !this.state.showEditSubCategoryModal,
            subCategoryId: id
        })
    }

    handleEditItemClick = (id) => {
        this.setState({
            showEditItemModal: !this.state.showEditItemModal,
            itemId: id
        })
        this.props.dispatch(itemActions.itemEdit(id))
    }

    handleEditItemSubClick = (id) => {
        // alert(id)
        this.setState({
            showEditItemModal: !this.state.showEditItemModal,
            itemId: id
        })
        this.props.dispatch(itemActions.itemEdit(id))
    }
    handleDeleteItemSubClick = (id) => {
        this.props.dispatch(itemActions.itemDelete(id))
    }

    handleDeleteItemClick = (id) => {
        this.props.dispatch(itemActions.itemDelete(id))
    }

    handleEditPlanModal = async (item) => {
        // this.props.dispatch(planActions.planEdit(item._id))
        await this.setState({
            showEditPlanModal: !this.state.showEditPlanModal,
            plan: item
        })
        // alert(this.state.plan.itemName)
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
    handleEditSubCategoryClose = () => {
        this.setState({
            showEditSubCategoryModal: !this.state.showEditSubCategoryModal
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

    handleEditPlanModalClose = () => {
        this.setState({
            showEditPlanModal: !this.state.showEditPlanModal
        })
        
    }

    async getCourseId (id) {
        const {category} = this.state
        await this.setState({
            category: {
                ...category,
                courseId: id   
            }
        })
        await this.props.dispatch(categoryActions.categoryGet(id))
    }

    handleCategoryClickedId = async (id) => {
        const {category} = this.state
        await this.setState({
            category: {
                ...category,
                categoryId: id   
            }
        })
        // alert("categoryid"+this.state.category.categoryId)
    }

    handleAddCategory = async (category) => {
        // console.log(category)
        await this.props.dispatch(categoryActions.categoryAdd(category))
        await this.props.dispatch(categoryActions.categoryGet(category.courseId))
    }

    handlePlanClick = () => {
        this.setState({
            showPlanModal: !this.state.showPlanModal
        })
    }

    handlePlanClickCancel = () => {
        this.setState({
            showPlanModal: !this.state.showPlanModal
        })
    }

    getPlanDate = async (date) => {
        await this.setState({
            planSelectedDate: date
        })
        // alert(this.state.planSelectedDate)
    }

    render() {
        const {categoryId}=this.state.category
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
                            handleEditItemClick={(id) => this.handleEditItemClick(id)}
                            handleDeleteItemClick={(id) => this.handleDeleteItemClick(id)}
                            handleEditItemSubClick={(id) => this.handleEditItemSubClick(id)}
                            handleDeleteItemSubClick={(id) => this.handleDeleteItemSubClick(id)}
                            categories={this.props.categories}
                            handleCategoryClickedId={(id) => this.handleCategoryClickedId(id)}
                            handleEditSubCategoryClick={this.handleEditSubCategoryClick}
                        />
                    </div>
                    <div className="col-sm-4">
                        <MainSidebar 
                            onClick={this.handlePlanClick}
                            getPlanDate = {this.getPlanDate}
                            handleEditPlanModal={(id) => this.handleEditPlanModal(id)}
                        />
                    </div>
                </div>
                {
                    this.state.showMultiModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <ItemModal 
                                MultihandleClose={this.MultihandleClose}
                                subCategories={this.props.subCategories}
                                categoryId={categoryId}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <AddCategoryModal 
                                handleClose={this.handleClose}
                                courseId={this.state.category.courseId}
                                handleAddCategory={(category) => this.handleAddCategory(category)}
                            />
                            {/* <div>
                                <button onClick={this.handleAddCategory} type="button" className="btn btn-primary" style={styles.doneBtn}>
                                    <p style={{color: 'white'}}>Done</p>
                                </button>
                            </div>
                            <div>
                                <button onClick={this.handleClose} type="button" className="btn btn-default" style={styles.cancelBtn}>
                                    <p style={{color: 'white'}}>Cancel</p>
                                </button>   
                            </div> */}
                        </div>
                    </div>
                }
                {
                    this.state.showSubCategoryModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <AddSubCategoryModal 
                                handleSubCategoryClose={this.handleSubCategoryClose}
                                categoryId={categoryId}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showEditCategoryModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditCategoryModal 
                                handleEditCategoryClose={this.handleEditCategoryClose}
                                category={this.props.category}
                                categoryId={this.state.category.categoryId}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showEditItemModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditItemModal 
                                handleEditItemClose={this.handleEditItemClose}
                                item={this.props.item}
                                itemId={this.state.itemId}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showEditSubCategoryModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditSubCategoryModal 
                                subCategory={this.props.subCategory}
                                handleEditSubCategoryClose={this.handleEditSubCategoryClose}
                                subCategoryId={this.state.subCategoryId}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showPlanModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <PlanModal 
                                onClick={this.handlePlanClickCancel}
                                planSelectedDate={this.state.planSelectedDate}
                            />
                        </div>
                    </div>
                }
                {
                    this.state.showEditPlanModal&&
                    <div style={styles.modal}>
                        <div style={{display: 'block'}}>
                            <EditPlanModal 
                                plan={this.state.plan}
                                handleEditPlanModalClose={this.handleEditPlanModalClose}
                            />
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
    const {categories, category} = state.category
    const {subCategories, subCategory}=state.subCategory
    const { item } = state.item
    // console.log(categories, category)
    return {
        categories, category, subCategories, subCategory, item
    }
}

export default connect(mapStateToProps)(Main)