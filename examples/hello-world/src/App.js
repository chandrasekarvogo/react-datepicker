import React, { Component } from "react";
import DatePicker from "vogo-react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";

class App extends Component {
  state = {
    startDate: new Date()
  };

  render() {
    const { startDate } = this.state;
    return (
      <DatePicker
        selected={startDate}
        onChange={this.handleChange}
        withPortal
        showTimeSelect
      />
    );
  }

  handleChange = startDate => {
    this.setState({
      startDate
    });
  };
}

export default App;
