import Input from "../UI/Input";

function Card() {
  return (
    <ul>
      <Input name="Purchase Price" value="0" />
      <Input name="Shipping Fee" value="0" />
      <Input name="Selling Price" value="0" />
      <li>
        <span>Amazon Fee: </span>
        <span>$13</span>
      </li>
      <li>
        <span>Net Profit: </span>
        <span>$13</span>
      </li>
      <li>
        <span>Profit Percentage: </span>
        <span>13%</span>
      </li>
      <li>
        <span>Net Profit Margin: </span>
        <span>13%</span>
      </li>
    </ul>
  );
}

export default Card;
