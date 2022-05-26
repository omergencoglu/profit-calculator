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

  let dealStatus = "";

  if (profitPercentage <= 0) {
    dealStatus = "bad";
  }

  if (profitPercentage <= 50 && profitPercentage > 0) {
    dealStatus = "fair";
  }

  if (profitPercentage > 50) {
    dealStatus = "good";
  }

  console.log(profitPercentage);
  console.log(dealStatus);

  return (
    <ul className="bg-white shadow-md rounded-lg p-0">
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
      <li className="list justify-between">
        <span>Amazon Fee</span>
        <span>{amazonFee}$</span>
      </li>
      <li className="list justify-between bg-cyan-300">
        <span>Net Profit</span>
        <span>{netProfit}$</span>
      </li>
      <li className="list justify-between bg-teal-300">
        <span>Profit Percentage</span>
        <span>{profitPercentage}%</span>
      </li>
      <li className="list justify-between bg-emerald-300 rounded-b-lg">
        <span>Net Profit Margin</span>
        <span>{profitMargin}%</span>
      </li>
    </ul>
  );
}

export default Card;
