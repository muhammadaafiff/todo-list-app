import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/Reducer";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  // console.log("props from store", props);

  return (
    <div className="addTodos">
      <input
        type="text"
        className="todo-input"
        onChange={(event) => handleChange(event)}
      ></input>
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
