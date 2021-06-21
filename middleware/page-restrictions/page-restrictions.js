export default async function (context) {
  if (context.route.name === null) {
    // Nuxt returns null when page can not be found
    return;
  }
}
