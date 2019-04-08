import React, { Component } from "react";

class Counter extends Component {
  state = {
    //   value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    address: {
      code: "523",
      area: "Nyahururu"
    },

    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // Usages
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        {/* <h5>Counter #{this.props.id}</h5> */}
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm m-2"
          title="plus"
        >
          <strong>+</strong>
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          title="minus"
        >
          <strong>-</strong>
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
          title="delete"
        >
          X
        </button>

        <br />

        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    const { tags } = this.state;

    if (tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
