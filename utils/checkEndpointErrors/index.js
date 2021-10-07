import { checkGraphQLRequestErrors } from './graphql';

export { checkGraphQLRequestErrors };

export function checkApiResponseErrors(params) {
  const { that, response } = params;

  if (response.status == 200) {
    return false;
  }

  if (process.env.NUXT_ENV_MODE == 'development') console.log(response);

  that.$toast.warning(`An error occurred (${response.status} - ${response.statusText})`);

  return true;
}

export function checkApiRequestErrors(params) {
  const { that, error } = params;

  if (process.env.NUXT_ENV_MODE === 'development') {
    // Throwing an error causes to Nuxt shows 500 error page
    throw new Error(error);
  } else {
    console.log(error);
  }

  if (error.message.includes(401)) that.$toast.error('Unauthorized!');
}

//
// EXAMPLE
//
// import { fetchData } from '~/utils/fetchData';
//
// methods: {
//   async login() {
//     try {
//       const response = await fetchData(url, config);
//
//       if (this.checkApiResponseErrors({ that: this, response })) return;
//
//       this.$toast.success('Successfully logged in');
//     } catch (error) {
//       this.checkApiRequestErrors({ that: this, error });
//     }
//   }
// }
//
