const setCookie = (key, value, hour) => {
  let d = new Date().getTime();
  d.setTime(d + hour * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";" + "expires=" + d.toUTCString();
};

export { setCookie };
