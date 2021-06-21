const stripNonNumeric = price => price.replace(/\D/g, '');

const stripNonNumericWithoutDot = price => price.replace(/[^\d.]/g, '');

const stripNonNumericWithoutComma = price => price.replace(/[^\d,]/g, '');

export { stripNonNumeric, stripNonNumericWithoutDot, stripNonNumericWithoutComma };
