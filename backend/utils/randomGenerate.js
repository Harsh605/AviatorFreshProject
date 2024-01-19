export const randomString = (length) => {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const randomNumber = (min, max) => {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};

export const isNumber = (params) => {
  let pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};

export const ipAddress = (req) => {
  let ip = "";
  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  }
  return ip;
};

export const timeCreate = () => {
  const d = new Date();
  const time = new Date(d.getTime()).toISOString();
  return time;
};

export function generateRandomNumber(min, max) {
  // Generate a random decimal between 0 and 1
  const randomDecimal = Math.random();
  // Scale and shift the random decimal to fit the desired range
  const randomNumber = min + randomDecimal * (max - min);

  // Round to a specific number of decimal places if needed
  // Example: rounding to 2 decimal places
  const roundedNumber = Math.round(randomNumber * 100) / 100;

  return roundedNumber;
}

export function updateSingleValues(
  sp,
  sm,
  min,
  currentValuesArray,
  currentValue
) {
  const lossProbability = (100 - sp) / 10;
  const filteredArray = currentValuesArray.filter((number) => number > sm);
  console.log("🚀 ~ currentValuesArray:", currentValuesArray)
  const count = filteredArray.length;
  console.log("🚀 ~ count:", count);
  if (count >= lossProbability) {
    return generateRandomNumber(min, sm);
  } else {
    return currentValue;
  }
}
