//
// Helper Functions
//

function checkUnauthorized(params) {
  const { that, error } = params;

  if (
    error.graphQLErrors[0].message == GRAPHQL_ERROR_MESSAGES.UNAUTHORIZED ||
    error.graphQLErrors[0].message == GRAPHQL_ERROR_MESSAGES.UNAUTHENTICATED
  ) {
    that.$apolloHelpers.onLogout();
    that.$router.push({ name: ROUTE_NAMES.LOGIN.NAME });
    that.$toast.warning('To continue please login.');

    return true;
  }

  return false
}

function showErrors(params) {
  const { that, error } = params;

  if (!that.$toast) {
    alert('An error occured.');
    return;
  }

  if (error.graphQLErrors[0].extensions.validation) {
    error.graphQLErrors.forEach(err => {
      Object.values(err.extensions.validation).forEach(validationMessages => {
        that.$toast.error(validationMessages[0]);
      });
    });
    return;
  }

  that.$toast.error(error.graphQLErrors[0].message);
}

export function checkGraphQLRequestErrors(params) {
  const { error } = params;

  if (!error) return true;

  if (process.env.NUXT_ENV_MODE == 'development') console.log(error);

  if (checkUnauthorized(params)) return true;

  showErrors(params);

  return true;
}
