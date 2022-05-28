import { useRef } from "react";

function Input(props) {
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
  };

  const focusHandler = () => {
    props.resetHandler();
  };

  return (
    <li
      className="list border-b-2 cursor-pointer focus-within:bg-teal-100"
      onClick={clickHandler}
    >
      <label htmlFor={props.name} className="cursor-pointer">
        {props.name}
      </label>
      <input
        type="number"
        id={props.name}
        name={props.name}
        placeholder="0"
        className="grow text-right outline-none cursor-pointer focus:bg-teal-100 transition-colors duration-500 min-w-0"
        max="999999999"
        min="0"
        step="any"
        value={props.value}
        onChange={props.onChangeHandler}
        onFocus={focusHandler}
        ref={inputRef}
        required
      />
      <span>$</span>
    </li>
  );
}

export default Input;
