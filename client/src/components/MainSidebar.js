/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { planActions } from '../actions/plan.actions';

const styles = {
    txt: {
        color: '#000000',
        fontFamily: 'Charter-Italic',
        fontSize: '26px',
        fontStyle: "italic"
    },
    txt1: {
        color: '#000000',
        fontFamily: 'Charter-Bold Italic',
        fontSize: 14,
        fontWeight: 700,
        fontStyle: "italic",
        paddingTop: 10,
    },
    card: {
        width: "350px",
        height: "90px",
        boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        padding: 0,
        display: 'flex',
        marginBottom: 10
    },
    card1: {
        width: "350px",
        height: "90px",
        boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },
    card2: {
        width: "350px",
        height: "90px",
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        textAlign: 'center', 
        fontSize: 14,
        opacity: 0.4,
        color: '#000000',
        fontWeight: 400,
        fontFamily: 'Charter-Roman'
    },
    icon: {
        width: 30,
        height: 30,
    }
}

class MainSidebar extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            date: new Date(),
            selectedDate: ''
        }
    }

    componentDidMount() {
        // this.props.dispatch(planActions.getPlans(formatDate(this.state.date)))
        this.props.dispatch(planActions.getPlans())
    }

    handleClick = () => {
        // console.log(this.state.date)
    }

    onChange = async date => {
        await this.setState({ date })
        this.props.getPlanDate(formatDate(this.state.date))
    }

    async handleDelete(id) {
        await this.props.dispatch(planActions.deletePlan(id))
        this.props.dispatch(planActions.getPlans())
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
        return (
            <div className="row">
                <div className="col-sm-12" style={{padding: 0}}>
                    <p style={styles.txt}>Special Menu Planner</p>
                </div>
                <div className="col-sm-12" style={{padding: 0}}>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                <div className="col-sm-12" style={{padding: 0}}>
                    <p style={styles.txt1}>Today - {monthNames[this.state.date.getMonth()]} {this.state.date.getDate()}, {this.state.date.getFullYear()}</p>
                </div>
                <div className="col-sm-12" style={{padding: 0}}>
                {
                    this.props.plans&&this.props.plans.map((item, index) => (
                        <React.Fragment key={index}>
                            {
                                item.planSelectedDate===formatDate(this.state.date)&&
                                <div key={index} className="col-sm-8" style={styles.card}>
                                    <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                                        <div>
                                        <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>{item.itemName}</a><br />
                                        <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400}}>${item.itemPrice}</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                                        <div>
                                            <a href="#" onClick={(id) => this.props.handleEditPlanModal(item)} style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Edit</a><br />
                                            <a href="#" onClick={(id) => this.handleDelete(item._id)}style={{fontFamily: "Charter - Roman", color: '#f32362',fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Delete Item</a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    ))
                }
                    {/* <div className="col-sm-8" style={styles.card}>
                        <div className="col-sm-6" style={{textAlign: "left", display: 'flex', alignItems: 'center'}}>
                            <div>
                            <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>Clam Chowder</a><br />
                            <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400}}>$10.35</a>
                            </div>
                        </div>
                        <div className="col-sm-6" style={{textAlign: "right", display: 'grid', alignItems: 'center'}}>
                            <div>
                                <a style={{fontFamily: "Charter - Roman",fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Edit</a><br />
                                <a style={{fontFamily: "Charter - Roman", color: '#f32362',fontSize: 14, fontWeight: 400, textDecoration: 'underline'}}>Delete Item</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-sm-6">
                    </div>
                </div>
                <div className="col-sm-12" style={{padding: 0}}>
                    <div className="col-sm-8" style={styles.card1}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src={`${process.env.PUBLIC_URL}/assets/images/plus.png`}
                                alt=""
                                style={styles.icon}
                                onClick={this.props.onClick}
                            /><br />
                            <a style={{fontFamily: "Charter - Bold",fontSize: 14, fontWeight: 700}}>Plan New Special Menu Item</a>
                        </div>
                    </div> 
                </div>
                <div className="col-sm-12" style={{padding: 0}}>
                    <div className="col-sm-8" style={styles.card2}>
                        <div style={styles.text}>
                            You can schedule a special menu item for a<br />
                            current and future date or set a recurring menu<br />
                            item with a custom interval
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

MainSidebar.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    const {plan, plans} = state.plan
    // console.log(plan)
    return {
        plan, plans
    }
}

export default connect(mapStateToProps)(MainSidebar)

// export default MainSidebar;