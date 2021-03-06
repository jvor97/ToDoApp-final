import React, { Component } from "react";

import axios from "../axios";

import TodoButtons from "./TodoButtons";
import moment from "moment";

class Todo extends Component {
  renderText = () => {
    const { text } = this.props.todo;
    if (!text) return null;

    return (
      <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
    );
  };

  handleFinish = async () => {
    await axios.patch("/todos/" + this.props.todo.id, {
      finished: true
    });
    this.props.onFinish();
  };

  handleRemove = async () => {
    await axios.delete("/todos/" + this.props.todo.id);
    this.props.onRemove();
  };

  render() {
    const { createdAt, title, finished } = this.props.todo;

    let formatedCreatedAt = moment(createdAt).format("hh:mm:ss DD. MMMM YYYY");
    let currentTime = moment();
    let timeDifference = currentTime.diff(createdAt, "minutes") <= 10;
    let classes = "card";
    let borderColor = finished ? "red" : "green";
    let borderStyle = {
      borderTopWidth: 5,
      borderTopColor: borderColor
    };

    function Badge(props) {
      if (timeDifference && !finished) {
        return <span className="badge badge-danger ml-2">New</span>;
      }
    }

    return (
      <div className="todo mb-2">
        <div className={classes} style={borderStyle}>
          <div className="card-body">
            <h5 className="card-title">
              {title}
              {Badge()}
            </h5>
            <h6 className="card-subtitle text-muted mb-2 createdAt">
              Created at {formatedCreatedAt}
            </h6>
            {this.renderText()}
            <TodoButtons
              todo={this.props.todo}
              onFinish={this.handleFinish}
              onRemove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
