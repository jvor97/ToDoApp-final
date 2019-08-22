import React, { Component } from "react";
import { IoIosCheckmark } from "react-icons/io";

class TodoButtons extends Component {
  render() {
    const { finished } = this.props.todo;
    let finishButton;
    if (!finished) {
      finishButton = (
        <IoIosCheckmark
          className="checkmark"
          onClick={this.props.onFinish}
          size={40}
        />
        //   Dokončiť
        // </IoIosCheckmark>
      );
    }

    return (
      <>
        <button
          type="button"
          className="btn btn-light"
          onClick={this.props.onRemove}
        >
          Zmazať
        </button>
        {finishButton}
      </>
    );
  }
}

export default TodoButtons;
