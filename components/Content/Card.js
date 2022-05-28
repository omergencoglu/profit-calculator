import useInput from "../../hooks/use-input";

import Input from "../UI/Input";

function Card() {
  const {
    value: enteredPurchasePrice,
    valueChangeHandler: purchasePriceChangeHandler,
    reset: purchasePriceReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredShippingFee,
    valueChangeHandler: shippingFeeChangeHandler,
    reset: shippingFeeReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSellingPrice,
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

  let profitPercentage = Math.floor((netProfit * 100) / enteredPurchasePrice);

  let profitMargin = Math.floor((netProfit * 100) / enteredSellingPrice);

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
    <ul className="bg-stone-100 shadow-md rounded-lg p-0 overflow-hidden text-lg font-mono ">
      <Input
        name="Purchase Price"
        value={enteredPurchasePrice}
        onChangeHandler={purchasePriceChangeHandler}
        resetHandler={purchasePriceReset}
      />
      <Input
        name="Shipping Fee"
        value={enteredShippingFee}
        onChangeHandler={shippingFeeChangeHandler}
        resetHandler={shippingFeeReset}
      />
      <Input
        name="Selling Price"
        value={enteredSellingPrice}
        onChangeHandler={sellingPriceChangeHandler}
        resetHandler={sellingPriceReset}
      />
      <li className="list justify-between">
        <span>Amazon Fee</span>
        <span className="font-semibold font-sans">
          {new Intl.NumberFormat("en-CA").format(amazonFee)} $
        </span>
      </li>
      <li
        className={`list justify-between ${
          profitPercentage <= 0
            ? "bg-rose-200"
            : profitPercentage <= 50 && profitPercentage > 0
            ? "bg-yellow-200"
            : profitPercentage > 50
            ? "bg-emerald-200"
            : ""
        }`}
      >
        <span>Net Profit</span>
        <span className="font-semibold font-sans">
          {new Intl.NumberFormat("en-CA").format(netProfit)} $
        </span>
      </li>
      <li
        className={`list justify-between ${
          profitPercentage <= 0
            ? "bg-rose-300"
            : profitPercentage <= 50 && profitPercentage > 0
            ? "bg-yellow-300"
            : profitPercentage > 50
            ? "bg-emerald-300"
            : ""
        }`}
      >
        <span>Profit Percentage</span>
        <span className="font-semibold font-sans">{profitPercentage} %</span>
      </li>
      <li
        className={`list justify-between ${
          profitPercentage <= 0
            ? "bg-rose-400"
            : profitPercentage <= 50 && profitPercentage > 0
            ? "bg-yellow-400"
            : profitPercentage > 50
            ? "bg-emerald-400"
            : ""
        }`}
      >
        <span>Net Profit Margin</span>
        <span className="font-semibold font-sans">{profitMargin} %</span>
      </li>
    </ul>
  );
}

export default Card;
