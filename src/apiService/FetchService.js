const get = (url, successHandler, errorHandler, finallyHandler, options = {}) => {
  const fetchPromise = fetch(url, {
    ...options,
  }).then(response => {
    if ((response.status >= 200 && response.status <= 299) || response.status === 304) {
      return response.json();
    }
    return Promise.reject(response.statusText);
  });
  if (successHandler) {
    fetchPromise.then(successHandler);
    if (finallyHandler) {
      fetchPromise.then(finallyHandler);
    }
  }
  if (errorHandler) {
    if (finallyHandler) {
      fetchPromise.catch(error => {
        errorHandler(error);
        finallyHandler();
      });
    } else {
      fetchPromise.catch(errorHandler);
    }
  }
  return fetchPromise;
};
const post = (url, body, headers, successHandler, errorHandler, finallyHandler) => {
  const fetchPromise = fetch(url, {
    method: 'POST',
    headers,
    body,
  }).then(async response => {
    if ((response.status >= 200 && response.status <= 299) || response.status === 304) {
      return response.json();
    }
    if (response.status === 500) {
      // exceptional case when a body is been passed from server on error
      const res = await response.json();
      return Promise.reject(res);
    }
    return Promise.reject(response.statusText);
  });
  if (successHandler) {
    fetchPromise.then(successHandler);
    if (finallyHandler) {
      fetchPromise.then(finallyHandler);
    }
  }
  if (errorHandler) {
    if (finallyHandler) {
      fetchPromise.catch(error => {
        errorHandler(error);
        finallyHandler();
      });
    } else {
      fetchPromise.catch(errorHandler);
    }
  }
  return fetchPromise;
};
module.exports = {
  get,
  post,
};