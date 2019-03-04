/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { subCategoryActions } from '../actions/subCategory.actions';
// import Item from './Item'

class SubCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subCategory: []
        };
        try {
            if (this.props.subCategory === true) {
                this.store.subscribe(() => {
                    // When state will be updated(in our case, when items will be fetched), 
                    // we will update local component state and force component to rerender 
                    // with new data.
              
                    this.setState({
                        subCategory: this.store.getState().subCategory
                    });
                });
              
            }
          } catch (err) {
            console.log(err)
          }
    }

    render() {
        const {subCategories, items} = this.props
        return (
            <div>
                {
                    subCategories&&subCategories.map((sub, index) => (
                        <div key={index} className="col-sm-12" style={{display:'block', marginBottom: 20}}>
                            <div style={{display:'flex', background: '#000000', marginBottom: 20}}>
                                <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                                    <div>
                                        <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700, color: '#ffffff'}}>{sub.subCategoryName}</a><br />
                                    </div>
                                </div>
                                <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                                    <div>
                                        <a href="#" onClick={(id) => this.props.handleEditSubCategoryClick(sub._id)} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: "#ffffff"}}>Edit</a>
                                    </div>
                                </div>
                            </div>
                            {
                                items&&items.map((item, index) => (                                    
                                        <div key={index} className="col-sm-12" style={{display:'flex'}}>
                                            {
                                                sub._id===item.subCategoryId&&
                                                <div style={{display: 'flex'}} className="col-sm-12">
                                                    <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                                                        <div>
                                                            <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>{item.itemName}</a><br />
                                                            <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400}}>${item.itemPrice}</a>  <a style={{fontStyle: "italic"}}>{item.itemAmount}ml</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                                                        <div>
                                                            <a href="#" onClick={(id) => this.props.handleEditItemSubClick(item._id)} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: "#000000"}}>Edit</a>
                                                            <img 
                                                                src={`${process.env.PUBLIC_URL}/assets/images/upTriangle.png`}
                                                                alt=""
                                                                style={{paddingLeft:'5%'}}
                                                            /><br />
                                                            <a href="#" onClick={(id) => this.props.handleDeleteItemSubClick(item._id)} style={{fontFamily: "Charter - Roman", color: '#f32362',fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Delete Item</a>
                                                            <img 
                                                                src={`${process.env.PUBLIC_URL}/assets/images/downTriangle.png`}
                                                                alt=""
                                                                style={{paddingLeft:'5%'}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {subCategory, subCategories} =  state.subCategory
    console.log(subCategory, subCategories)
    return {
        subCategory, subCategories
    }
}

export default connect(mapStateToProps)(SubCategory);