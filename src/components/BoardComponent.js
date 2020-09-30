import React from "react";

const BoardComponent = ({ id, title, content, writer }) => {
  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{content}</span>
      <span>{writer}</span>
    </div>
  );
};

export default BoardComponent;
