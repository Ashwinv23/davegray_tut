const apiReq = async (url = "", options = null, errMsg = null) => {
  try {
    const response = await fetch(url, options);
    if (!response) throw Error("Please reload the app");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiReq;
