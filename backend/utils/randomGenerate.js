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
