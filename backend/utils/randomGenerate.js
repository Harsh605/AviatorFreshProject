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

export function updateSingleValues(sp, sm, sh, sl) {
  function generateBiasedRandomNumber(min, max, probabilityPercentage, range) {
    const probability = Math.max(0, Math.min(100, probabilityPercentage)) / 100;
    let biasedRandom;

    do {
      const randomValue = Math.random();
      if (randomValue < probability) {
        biasedRandom = min + Math.random() * range;
      } else {
        biasedRandom = min + range + Math.random() * (max - (min + range));
      }
    } while (biasedRandom.toFixed(2) === sl);

    return biasedRandom.toFixed(2);
  }

  const customRange = sm - sl;
  const randomValue = generateBiasedRandomNumber(sl, sh, sp, customRange);

  return randomValue;
}

