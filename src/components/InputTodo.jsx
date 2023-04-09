import React from "react";

export const InputTodo = (props) => {
  const styleInputArea = {
    background: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  const { todoText, onChange, onClick, disabled } = props;
  return (
    // <div className="input-area">
    //コンポーネント化するならCSS-in-JSもあり
    <div style={styleInputArea}>
      <input
        disabled={disabled}
        type="text"
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
