import { stripNonNumericWithoutPlus, stripNonNumeric } from '~/utils/stripNonNumeric';
import { RX_PHONE } from '~/constants/regex';

export function maskPhone({ number, format = '(xxx) xxx-xxxx', showCountryCode = false }) {
  //
  // Expected number format is +XX XXXXXXXXXX
  // Splitting occurs as empty character
  //

  if (!number) return 'invalid phone';

  const splitCountryCodeFromNumber = number.split(' ');

  let countryCode;
  let phoneNumber;

  if (splitCountryCodeFromNumber.length <= 1) countryCode = '';

  countryCode = showCountryCode ? `${stripNonNumericWithoutPlus(splitCountryCodeFromNumber[0])} ` : '';
  phoneNumber = stripNonNumeric(splitCountryCodeFromNumber[1]);

  if (format === '(xxx) xxx-xxxx') {
    const splittedPhoneNumber = phoneNumber.replace(/\D/g, '').match(RX_PHONE);
    const XXX1 = splittedPhoneNumber[1];
    const XXX2 = splittedPhoneNumber[2];
    const XXXX = splittedPhoneNumber[3];

    return `${countryCode}(${XXX1}) ${XXX2}-${XXXX}`;
  }

  return 'invalid format';
}

export const maskPhoneInput = value => {
  const replacedValue = value.replace(/\D/g, '').match(RX_PHONE);
  return !replacedValue[2]
    ? replacedValue[1]
    : '(' + replacedValue[1] + ') ' + replacedValue[2] + (replacedValue[3] ? '-' + replacedValue[3] : '');
};
