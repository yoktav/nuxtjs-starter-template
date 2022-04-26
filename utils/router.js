export function removeRouteQuery(params = {}) {
  const { name, app = window.$nuxt } = params;

  const routeQuerys = JSON.parse(JSON.stringify(app.$route.query));
  delete routeQuerys[name];

  // In some cases instant router replace throws an error
  // To avoid this add timeout for safe remove
  setTimeout(() => {
    app.$router.replace({ query: routeQuerys });
  }, 1000);
}
