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
      className="list border-b-2 cursor-pointer focus-within:bg-stone-50 focus-within:text-xl focus-within:p-3"
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
        className="grow text-right outline-none cursor-pointer bg-stone-100 focus:bg-stone-50 transition-colors duration-300 min-w-0 font-semibold font-sans"
        max="999999999"
        min="0"
        step="any"
        value={props.value}
        onChange={props.onChangeHandler}
        onFocus={focusHandler}
        ref={inputRef}
        required
      />
      <span className="font-semibold font-sans">$</span>
    </li>
  );
}

export default Input;
