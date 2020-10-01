import React, { useState } from "react";

const PopupComponent = ({
  selectedBoard,
  closePopupComponent,
  updateDB,
  updateDB2,
}) => {
  const [id, setId] = useState(selectedBoard.id);
  const [title, setTitle] = useState(selectedBoard.title);
  const [content, setContent] = useState(selectedBoard.content);
  const [writer, setWriter] = useState(selectedBoard.writer);

  const handleContent = (event) => {
    console.log(event.target.name);
    setContent(event.target.value);

    switch (event.target.name) {
      case "content":
        setContent(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleInput = (event) => {
    console.log(event.name);
  };

  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        top: 300,
        left: 500,
        padding: 50,
      }}
    >
      <span style={{ color: "white" }}>{id}</span>
      <span style={{ color: "white" }}>{title}</span>
      <input
        name={"content"}
        style={{ color: "black" }}
        onChange={handleContent}
        value={content}
      />

      <span style={{ color: "white" }}>{writer}</span>
      <div
        onClick={closePopupComponent}
        style={{ color: "white", position: "absolute", top: 20, right: 20 }}
      >
        x
      </div>
      <div
        onClick={() => {
          const board = { id, title, content, writer };
          updateDB(board);
          updateDB2(id, title, content, writer);
        }}
        style={{ color: "white", position: "absolute", bottom: 10, left: 30 }}
      >
        확인
      </div>
    </div>
  );
};

export default PopupComponent;
