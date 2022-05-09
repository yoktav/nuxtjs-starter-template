import { pageRestrictions } from './page-restrictions';

export default async function (context) {
  const routeName = context.route.name;

  if (routeName === null) {
    // Nuxt returns null when page can not be found
    return;
  }

  if (await pageRestrictions(context)) return;
}
