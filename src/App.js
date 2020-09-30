import "./App.css";

import React, { useEffect, useState } from "react";

import { BOARDS_DATA } from "./DB";
import BoardComponent from "./components/BoardComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(BOARDS_DATA);
    setLoading(false);
  });

  return (
    <>
      {boards.map((board) => {
        const { id, title, writer, content } = board;
        return (
          <BoardComponent
            id={id}
            title={title}
            writer={writer}
            content={content}
          />
        );
      })}
    </>
  );
}

export default App;
