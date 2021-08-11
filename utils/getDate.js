const ONE_DAY_AS_MILISECOND = 1000 * 60 * 60 * 24;

export const makeDoubleInteger = date => `0${date}`.slice(-2);

const calculateDate = params => {
  let { date, seperator, hasHM: hasHourAndMinute, HMSeperator: hourAndMinuteSeperator } = params;

  if (seperator == undefined) seperator = '.';
  if (hourAndMinuteSeperator == undefined) hourAndMinuteSeperator = '-';
  if (hasHourAndMinute == undefined) hasHourAndMinute = false;

  const utc = new Date(date).toUTCString();

  const month = makeDoubleInteger(new Date(utc).getMonth() + 1); // Since month list indexes starts with 0, we need to add 1 to get proper view
  const day = makeDoubleInteger(new Date(utc).getDate());
  const year = new Date(utc).getFullYear();

  let formattedDate = `${day}${seperator}${month}${seperator}${year}`;

  if (hasHourAndMinute) {
    const hour = makeDoubleInteger(new Date(utc).getHours());
    const minute = makeDoubleInteger(new Date(utc).getMinutes());

    formattedDate = `${formattedDate} ${hourAndMinuteSeperator} ${hour}:${minute}`;
  }

  return formattedDate;
};

export const getDate = params => calculateDate(params);

// prettier-ignore
export const getYesterday = params => calculateDate({ ...params, date: new Date(params.date).valueOf() - ONE_DAY_AS_MILISECOND });

// prettier-ignore
export const getTomorrow = params => calculateDate({ ...params, date: new Date(params.date).valueOf() + ONE_DAY_AS_MILISECOND });
