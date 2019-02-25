/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class SubCategory extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="col-sm-12" style={{display:'flex', background: '#000000', marginBottom: 20}}>
                    <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                        <div>
                            <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700, color: '#ffffff'}}>Carbonated</a><br />
                        </div>
                    </div>
                    <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                        <div>
                            <a href="#" onClick={this.props.handleSubCategoryClick} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline', color: "#ffffff"}}>Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubCategory;