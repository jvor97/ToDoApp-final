import React, { Component } from "react";
import Masonry from "react-masonry-component";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

import Todo from "../components/Todo";

class TodoList extends Component {
  render() {
    const todos = this.props.todos;

    return (
      <Masonry className="todos">
        <div className="todo mb-2 ">
          <Link className="card add-tab card" to="/add">
            <GoPlus className="plus-icon" />
            Add todo
          </Link>
        </div>
        {todos.map(todoData => {
          const handleFinishTodo = () => {
            todoData.finished = true;
            this.props.onEdit(todoData);
          };

          const handleRemoveTodo = () => {
            this.props.onRemove(todoData);
          };

          return (
            <Todo
              todo={todoData}
              key={todoData.id}
              onFinish={handleFinishTodo}
              onRemove={handleRemoveTodo}
            />
          );
        })}
      </Masonry>
    );
  }
}

// this.props.todo == todoData ,,, this.props.key == tododata.id

export default TodoList;
