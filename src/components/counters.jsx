import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { title: "First Counter", id: 1, value: 0 },
        { title: "Second Counter", id: 2, value: 2 }
      ]
    };
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addCounter = () => {
    var textInput = document.getElementById("text-field").value;
    if (textInput == "" || textInput == null) {
      alert("Must enter title for counter");
    } else {
      const counters = [...this.state.counters];
      counters.push({
        title: textInput,
        id: this.state.counters[this.state.counters.length - 1].id + 1,
        value: 0
      });
      this.setState({ counters });
      document.getElementById("text-field").value = "";
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-4">
            <input
              type="text"
              id="text-field"
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="col-4">
            <button
              onClick={this.addCounter}
              className="btn btn-primary btn-sm m-2"
              id="testing"
              data-toggle="popover"
              title="Popover title"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              Add Count
            </button>
            <button
              onClick={this.handleReset}
              className="btn btn-primary btn-sm m-2"
            >
              Reset
            </button>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="text-center">
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrease={this.handleDecrease}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
