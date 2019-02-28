import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Dropdownfield extends Component {
    constructor(){
    super()
    this.state = {
      fruit: [
        {
          id: 0,
          title: 'Apple',
          selected: false,
          key: 'fruit'
        },
        {
          id: 1,
          title: 'Orange',
          selected: false,
          key: 'fruit'
        },
        {
          id: 2,
          title: 'Grape',
          selected: false,
          key: 'fruit'
        },
        {
          id: 3,
          title: 'Pomegranate',
          selected: false,
          key: 'fruit'
        },
        {
          id: 4,
          title: 'Strawberry',
          selected: false,
          key: 'fruit'
        }
      ]
    }
  }
  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
        <div className="App">
            <div className="wrapper">
                <Dropdown
                    title="Select fruit"
                    list={this.state.fruit}
                    resetThenSet={this.resetThenSet}
                />
            </div>
        </div>
    );
  }
}

export default Dropdownfield;
