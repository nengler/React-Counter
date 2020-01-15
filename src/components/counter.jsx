import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props", this.props.counter);
    return (
      <div>
        <h2>
          {this.props.counter.title}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm ml-3"
          >
            x
          </button>
        </h2>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div class="btn-group-vertical">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-success btn-sm"
          >
            ^
          </button>
          <button
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="btn btn-danger btn-sm"
          >
            v
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
