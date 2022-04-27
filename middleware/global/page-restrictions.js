import { ROUTE_NAMES } from '~/constants/routes';

export default async function (context) {
  const routeName = context.route.name;

  if (routeName === null) {
    // Nuxt returns null when page can not be found
    return;
  }

  // An example of middleware level page redirection
  if (routeName === ROUTE_NAMES.FORBIDDEN.NAME) {
    context.redirect(302, ROUTE_NAMES.HOME.PATH);
    return;
  }
}
