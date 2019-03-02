/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { subCategoryActions } from '../actions/subCategory.actions';

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
                    console.log("hello"+this.state.subCategory.subCategoryName)
                });
              
            }
          } catch (err) {
            console.log(err)
          }
    }

    render() {
        const { subCategory } = this.props
        return (
            <div>
                {
                    subCategory&&
                    <div className="col-sm-12" style={{display:'flex', background: '#000000', marginBottom: 20}}>
                        <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                            <div>
                                <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700, color: '#ffffff'}}>{subCategory.subCategoryName}</a><br />
                            </div>
                        </div>
                        <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                            <div>
                                <a href="#" onClick={this.props.handleSubCategoryClick} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: "#ffffff"}}>Edit</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {subCategory} =  state.subCategory
    console.log(subCategory)
    return {
        subCategory
    }
}

export default connect(mapStateToProps)(SubCategory);