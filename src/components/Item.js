/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="col-sm-12" style={{display:'flex', paddingBottom: 20}}>
                    <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                        <div>
                            <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>Coca-Cola</a><br />
                            <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400}}>$2.25</a>  <a style={{fontStyle: "italic"}}>500ml</a>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                        <div>
                            <a href="#" onClick={this.props.handleEditItemClick} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: "#000000"}}>Edit</a>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/upTriangle.png`}
                                alt=""
                                style={{paddingLeft:'5%'}}
                            /><br />
                            <a style={{fontFamily: "Charter - Roman", color: '#f32362',fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Delete Item</a>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/downTriangle.png`}
                                alt=""
                                style={{paddingLeft:'5%'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;