import axios from 'axios';

async function fetchData(url, config = {}) {
  return axios.get(url, config).catch(error => {
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
