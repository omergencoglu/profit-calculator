import useInput from "../../hooks/use-input";

import Input from "../UI/Input";

function Card() {
  const {
    value: enteredPurchasePrice,
    isValid: purchasePriceIsValid,
    isNumber: purchasePriceIsNumber,
    valueChangeHandler: purchasePriceChangeHandler,
    reset: purchasePriceReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredShippingFee,
    isValid: shippingFeeIsValid,
    isNumber: shippingFeeIsNumber,
    valueChangeHandler: shippingFeeChangeHandler,
    reset: shippingFeeReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSellingPrice,
    isValid: sellingPriceIsValid,
    isNumber: sellingPriceIsNumber,
    valueChangeHandler: sellingPriceChangeHandler,
    reset: sellingPriceReset,
  } = useInput((value) => value.trim() !== "");

  console.log(sellingPriceIsNumber);

  return (
    <ul>
      <Input
        name="Purchase Price"
        value={enteredPurchasePrice}
        onChangeHandler={purchasePriceChangeHandler}
      />
      <Input
        name="Shipping Fee"
        value={enteredShippingFee}
        onChangeHandler={shippingFeeChangeHandler}
      />
      <Input
        name="Selling Price"
        value={enteredSellingPrice}
        onChangeHandler={sellingPriceChangeHandler}
      />
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
