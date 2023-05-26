const setCookie = (key, value, hour) => {
  let d = new Date();
  d.setTime(d.getTime() + hour * 60 * 60 * 1000);
  let text = key + "=" + value + ";" + "expires=" + d.toUTCString();
  return text;
};

export { setCookie };
