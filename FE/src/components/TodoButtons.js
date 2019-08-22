import React, { Component } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

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
        <IoIosClose
          className="closemark"
          onClick={this.props.onRemove}
          size={40}
        />

        {finishButton}
      </>
    );
  }
}

export default TodoButtons;
