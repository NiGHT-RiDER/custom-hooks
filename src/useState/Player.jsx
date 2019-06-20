import React, { useState, useRef, useEffect } from "react";

const Player = props => {
  const [state, changeState] = useState({
    volume: 0,
    position: 0,
    pause: false
  });

  const onClick = () => {
    changeState({
      ...state,
      position: 0,
      pause: true
    });
  };

  return (
    <div>
      {" "}
      Hello those are the variables {state.volume} {state.position}{" "}
      {state.pause} <button onClick={onClick} />
    </div>
  );
};

const TextInputWithFocusButton = props => {
  const inputRef = useRef();
  useEffect(() => {
    return () => {
      console.log("coucou");
    };
  });
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus the button</button>
    </>
  );
};

// const [volume, setVolume] = useState(0);
// const [position, setPosition] = useState(0);
// const [pause, setPause] = useState(true);

// const onClick = () => {
//   setPosition(0);
//   setVolume(0);
//   setPause(true);
// };
// return (
//   <div>
//     {" "}
//     Hello those are the variables {volume} {position} {pause}{" "}
//     <button onClick={onClick} />
//   </div>
// );
export default TextInputWithFocusButton;
