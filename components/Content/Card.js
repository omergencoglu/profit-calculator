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

  const amazonFee = (enteredSellingPrice * 0.15).toFixed(2);

  const netProfit = (
    enteredSellingPrice -
    amazonFee -
    enteredShippingFee -
    enteredPurchasePrice
  ).toFixed(2);

  let profitPercentage = ((netProfit * 100) / enteredPurchasePrice).toFixed(2);

  let profitMargin = ((netProfit * 100) / enteredSellingPrice).toFixed(2);

  if (profitPercentage === "Infinity") {
    profitPercentage = 100;
  }

  if (profitMargin === "Infinity") {
    profitMargin = 100;
  }

  if (isNaN(profitPercentage)) {
    profitPercentage = 0;
  }

  if (isNaN(profitMargin)) {
    profitMargin = 0;
  }

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
        <span>{amazonFee}$</span>
      </li>
      <li>
        <span>Net Profit: </span>
        <span>{netProfit}$</span>
      </li>
      <li>
        <span>Profit Percentage: </span>
        <span>{profitPercentage}%</span>
      </li>
      <li>
        <span>Net Profit Margin: </span>
        <span>{profitMargin}%</span>
      </li>
    </ul>
  );
}

export default Card;
