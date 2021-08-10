import axios from 'axios';

async function sendData(url, bodyParameters, config = {}) {
  return axios.post(url, bodyParameters, config).catch(error => {
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
