function formatTRYPrice(price) {
  const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  if (isNaN(price)) return '₺0,00';

  return formatter.format(price);
}

function formatTRYPriceWithoutCurrency(price) {
  const formatter = new Intl.NumberFormat('tr-TR', {
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(price);
}

export { formatTRYPrice, formatTRYPriceWithoutCurrency };
