function Input(props) {
  return (
    <li className="list border-b-2">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type="number"
        id={props.name}
        name={props.name}
        min="0"
        max="10000"
        step="1"
        required="required"
        value={props.value}
        onChange={props.onChangeHandler}
        className="grow text-right outline-none"
      />
      <span>$</span>
    </li>
  );
}

export default Input;
