import { useState } from "react";

export default function TodoList() {
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        <button>Edit</button>
        <p>do that thing</p>
        <h3>{num} task</h3>
      </div>
      <button onClick={setNum(num + 1)}>Add</button>
    </>
  );
}
