/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux'
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }
    render() {
        const { items } = this.props
        return (
            <div>
                {
                    items&&items.map((item, index) => (
                        <div key={index} className="col-sm-12" style={{display:'flex'}}>
                            {
                                !item.subCategoryId&&
                                <React.Fragment>
                                    <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                                        <div>
                                            <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>{item.itemName}</a><br />
                                            <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400}}>${item.itemPrice}</a>  <a style={{fontStyle: "italic"}}>{item.itemAmount}ml</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                                        <div>
                                            <a href="#" onClick={(id) => this.props.handleEditItemClick(item._id)} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: "#000000"}}>Edit</a>
                                            <img 
                                                src={`${process.env.PUBLIC_URL}/assets/images/upTriangle.png`}
                                                alt=""
                                                style={{paddingLeft:'5%'}}
                                            /><br />
                                            <a onClick={(id) => this.props.handleDeleteItemClick(item._id)} style={{fontFamily: "Charter - Roman", color: '#f32362',fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Delete Item</a>
                                            <img 
                                                src={`${process.env.PUBLIC_URL}/assets/images/downTriangle.png`}
                                                alt=""
                                                style={{paddingLeft:'5%'}}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { items} =  state.item
    // console.log( items)
    return {
        items
    }
}

export default connect(mapStateToProps)(Item);