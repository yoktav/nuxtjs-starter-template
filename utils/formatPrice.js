// For detailed info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

export function formatPrice(params) {
  let { price, moveSymbolToEnd, locale, currency, currencyDisplay, signDisplay, showCurrency } =
    params;

  if (Number.isNaN(price)) return '0,00';

  if (locale == undefined) locale = 'tr-TR';
  if (currency == undefined) currency = 'TRY';
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
