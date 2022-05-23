function Input(props) {
  return (
    <li>
      <label htmlFor={props.name}>{props.name} :</label>
      <input
        type="number"
        id={props.name}
        name={props.name}
        placeholder="$0.00"
        min="0"
        max="10000"
        step="1"
        required="required"
      />
    </li>
  );
}

export default Input;
