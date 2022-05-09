export async function sleep(params = {}) {
  const { time = 1000 } = params;

  return await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
