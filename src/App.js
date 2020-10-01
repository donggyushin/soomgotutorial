import "./App.css";

import React, { useEffect, useRef, useState } from "react";

import { BOARDS_DATA } from "./DB";
import BoardComponent from "./components/BoardComponent";
import PopupComponent from "./components/PopupComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState([]);

  const [selectedBoard, setSelectedBoard] = useState({});

  const onBoardComponentClick = (title, writer, content, id) => {
    setSelectedBoard({
      id,
      title,
      content,
      writer,
    });
  };

  const closePopupComponent = () => {
    setSelectedBoard({});
  };

  const postDB = (newBoard) => {
    const updatedDB = boards.push(newBoard);
    setBoards(updatedDB);

    // post api
    // response
    // status code
    // data
    // new board
    setBoards();
  };

  const deleteDB = (boardToDelete) => {
    const updatedBoards = boards.filter(
      (board) => board.id !== boardToDelete.id
    );
    setBoards(updatedBoards);
  };

  const updateDB2 = (id, title, content, writer) => {
    const board = { id, title, content, writer };
  };

  const updateDB = (boardToUpdate) => {
    const boardId = boardToUpdate.id;
    const currentBoards = boards;
    const updatedBoards = boards.map((board) => {
      if (boardId === board.id) {
        return boardToUpdate;
      } else {
        return board;
      }
    });

    setBoards(updatedBoards);

    // 이부분에서 서버랑 통신하는 코드를 작성을 한다.
    // response는 크게 success, fail
    // if (response === fail) {
    //   setBoards(currentBoards);
    // }
  };

  useEffect(() => {
    setBoards(BOARDS_DATA);
    setLoading(false);
  }, []);

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
            onBoardComponentClick={onBoardComponentClick}
          />
        );
      })}
      {selectedBoard.id && (
        <PopupComponent
          closePopupComponent={closePopupComponent}
          selectedBoard={selectedBoard}
          updateDB={updateDB}
          updateDB2={updateDB2}
        />
      )}
    </>
  );
}

export default App;
