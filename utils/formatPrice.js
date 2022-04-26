// For detailed info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

import { stripNonNumeric } from './stripNonNumeric';

export function formatPrice(params) {
  let { price, currencyDisplay, signDisplay, showCurrency, locale = 'tr-TR', currency = 'TRY', moveSymbolToEnd = true } = params;

  if (Number.isNaN(price)) return '0,00';

  if (currencyDisplay == undefined) currencyDisplay = 'symbol'; // name | symbol | narrowSymbol | code
  if (showCurrency == undefined) showCurrency = 'currency'; // decimal | currency | percent | unit

  //
  // 'auto' sign display for negative numbers only
  // 'never' never display sign
  // 'always' always display sign
  // 'exceptZero' sign display for positive and negative numbers, but not zero
  if (signDisplay == undefined) signDisplay = 'auto';

  const formatter = new Intl.NumberFormat(locale, {
    style: showCurrency,
    currency,
    signDisplay,
    currencyDisplay,
    minimumFractionDigits: 2,

    // minimumFractionDigits: 0, // Round to whole numbers | 5000.10 -> $5,000.1
    // maximumFractionDigits: 0, // Round to whole numbers | 5000.99 -> $5,001
  });

  const formattedPrice = formatter.format(price);

  if (moveSymbolToEnd) {
    const getSymbol = formattedPrice.charAt();
    const removeSymbol = formattedPrice.substring(1);
    const moveCurrencySymbolToEnd = `${removeSymbol}${getSymbol}`;

    return moveCurrencySymbolToEnd;
  }

  return formattedPrice;
}

export function comparePrices(params) {
  let { baseValue, maxValue } = params;

  return Number(stripNonNumeric(baseValue)) > Number(stripNonNumeric(maxValue));
}

export function formatPriceForDB(params = '') {
  const decimalCount = 2;

  const price = stripNonNumeric(params);
  const lastTwoChar = price.slice(-decimalCount);
  const priceWithoutTwoChar = price.slice(0, -decimalCount);

  // Transform type to Number
  return parseInt(`${priceWithoutTwoChar}.${lastTwoChar}`, 10);
}

// In some cases balance is used for if statements (e.g. does user has balance and balance is higher than 1000)
// Since 0 and 1 is equals to false and true, sometimes X statements do not work as expected
export function checkBalanceIsValid(params = {}) {
  const { balance } = params;

  return balance == 0 ? '0' : balance;
}
