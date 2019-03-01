/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Contents from './Contents'

// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import { categoryActions } from '../actions/category.actions';

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
            categories: '',
            activeIndex: false,
        }
    }

    handleCategory = (index) => {
        alert(index)
        this.setState({ activeIndex: index })
    }

    render() {
        const { categories } = this.props
        return (
            <div>
                <div style={{paddingLeft: '17.5%', boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)"}}>
                    <div className="tab">
                        {/* <button className="tablinks" style={styles.bgActive}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/1.png`}
                                alt=""
                                style={styles.icon}
                            />
                        </button>
                        <button className="tablinks" style={styles.bg}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/2.png`}
                                alt=""
                                style={styles.icon}
                            />
                        </button>
                        <button className="tablinks" style={styles.bg}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/3.png`}
                                alt=""
                                style={styles.icon}
                            />
                        </button>
                        <button className="tablinks" style={styles.bg}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/4.png`}
                                alt=""
                                style={styles.icon}
                            />
                        </button> */}
                        {
                            categories&&categories.map((item, index) => (
                                <button key={item._id} onClick={() => this.handleCategory(item._id)} index={item._id} className="tablinks" style={this.state.activeIndex===item._id? styles.bgActive: styles.bg}>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/${item.categoryIcon}.png`}
                                        alt=""
                                        style={styles.icon}
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
                                handleEditItemClick={this.props.handleEditItemClick}
                                categories={this.props.categories}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}


// MainContent.propTypes = {
//     dispatch: PropTypes.func.isRequired
// }

// function mapStateToProps(state) {
//     const {categories} =  state.category
//     console.log(categories)
//     return {
//         categories
//     }
// }

// export default connect(mapStateToProps)(MainContent);
export default MainContent
