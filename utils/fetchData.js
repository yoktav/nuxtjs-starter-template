import axios from 'axios';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response.statusText);
}

async function fetchData(url, options = {}) {
  const config = options;
  config.headers = {
    Accept: 'application/json',
  };

  return axios
    .get(url, config)
    .then(checkStatus)
    .catch(error => {
      throw new Error(error);
    });
}

function fetchDataWithDelay(...args) {
  return new Promise(resolve => {
    setTimeout(() => {
      fetchData(...args).then(data => resolve(data));
    }, 2000);
  });
}

export { fetchData, fetchDataWithDelay };
