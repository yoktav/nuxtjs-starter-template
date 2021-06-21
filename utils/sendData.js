import axios from 'axios';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response.statusText);
}

async function sendData(url, bodyParameters, config = {}) {
  return axios
    .post(url, bodyParameters, config)
    .then(checkStatus)
    .catch(error => {
      throw new Error(error);
    });
}

function sendDataWithDelay(...args) {
  return new Promise(resolve => {
    setTimeout(() => {
      sendData(...args).then(data => resolve(data));
    }, 2000);
  });
}

export { sendData, sendDataWithDelay };
