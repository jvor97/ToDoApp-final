import React, { Component } from "react";
import AddTodoForm from "../components/AddTodoForm";
import { withRouter } from "react-router-dom";

class AddTodo extends Component {
  handleSubmit = async todo => {
    await this.props.onAdd(todo);
    this.props.history.push("/");
  };

  render() {
    return <AddTodoForm handleSubmit={this.handleSubmit} />;
  }
}

export default withRouter(AddTodo);
