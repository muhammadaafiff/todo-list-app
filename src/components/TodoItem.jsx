import React, { useRef } from "react";
import { FaPen, FaTrashAlt, FaCheck } from "react-icons/fa";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, event) => {
    if (event.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea
        className="bg-transparent"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(event) => update(item.id, inputRef.current.value, event)}
      />

      <div className="buttons-action">
        <button onClick={() => changeFocus()}>
          {" "}
          <FaPen className="text-yellow-400 decoration-white" />{" "}
        </button>
        {item.completed === false && (
          <button onClick={() => completeTodo(item.id)}>
            <FaCheck className="text-green-800" />
          </button>
        )}
        <button onClick={() => removeTodo(item.id)}>
          {" "}
          <FaTrashAlt className="text-red-700" />
        </button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
