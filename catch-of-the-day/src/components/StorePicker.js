import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // One way to bind methods using ES6 Constructors:
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  }
  
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder='Store Name' defaultValue={getFunName()} ref={this.myInput}/>
          <button type='submit'>Visit Store →</button>
        </form>
    );
  }
}

export default StorePicker;