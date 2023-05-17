import { TasksDispatchContext } from "./TasksContext";
import { useContext, useState } from "react";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({ type: "added", id: nextId++, text: text });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
