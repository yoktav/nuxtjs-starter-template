import { TOAST_OPTIONS } from '~/project-constants/global';

export function checkApiResponseErrors(params) {
  const { that, response } = params;

  if (response.status == 200) {
    return false;
  }

  if (process.env.NUXT_ENV_MODE === 'development') console.log(response);

  that.$toast.warning(
    `An error occurred (${response.status} - ${response.statusText})`,
    TOAST_OPTIONS,
  );

  return true;
}

export function checkApiRequestErrors(params) {
  const { error } = params;

  if (process.env.NUXT_ENV_MODE === 'development') {
    // Throwing an error causes to Nuxt shows 500 error page
    throw new Error(error);
  } else {
    console.log(error);
  }
}

//
// EXAMPLE
//
// import { fetchData } from '~/utils/fetchData';
// import { TOAST_OPTIONS } from '~/project-constants/global';
//
// methods: {
//   login() {
//     try {
//       const response = await fetchData(url, config);
//
//       if (this.checkApiResponseErrors({ that: this, response })) return;
//
//       this.$toast.success('Successfully logged in', TOAST_OPTIONS);
//     } catch (err) {
//       this.checkApiRequestErrors({ error: err });
//     }
//   }
// }
//
