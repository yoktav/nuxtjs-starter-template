function checkApiRequestErrors(params) {
  const { that, error } = params;

  if (process.env.NUXT_ENV_MODE === 'development') console.log(error);

  const TOAST_OPTIONS = {
    position: 'top-right',
    duration: 3000,
    dismissible: true,
    queue: false,
    pauseOnHover: true,
  };

  Object.values(error.graphQLErrors[0].extensions.validation).forEach(message => {
    that.$toast.error(message[0], TOAST_OPTIONS);
  });

  return true;
}
export { checkApiRequestErrors };
