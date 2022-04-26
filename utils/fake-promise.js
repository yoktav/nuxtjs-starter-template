export async function fakePromise(params = {}) {
  const { time = 1000 } = params;

  return await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
