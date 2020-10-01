import React from "react";

const BoardComponent = ({
  id,
  title,
  content,
  writer,
  onBoardComponentClick,
}) => {
  return (
    <div onClick={() => onBoardComponentClick(title, writer, content, id)}>
      <span>{id}</span>
      <span>{title}</span>
    </div>
  );
};

export default BoardComponent;
