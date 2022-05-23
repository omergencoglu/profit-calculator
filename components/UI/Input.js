function Input(props) {
  return (
    <li>
      <label htmlFor={props.name}>{props.name} :</label>
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
      />
      <span>$</span>
    </li>
  );
}

export default Input;
