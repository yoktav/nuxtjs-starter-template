import { createArrayFromObject } from '~/utils/array';

export const HTTP_CODES = {
  SUCCESS: {
    code: 200,
    message: 'Successful!',
  },
  BAD_REQUEST: {
    code: 400,
    message: 'Bad Request!',
  },
  UNAUTHORIZED: {
    code: 401,
    message: 'Unauthorized!',
  },
  FORBIDDEN: {
    code: 403,
    message: 'Forbidden!',
  },
  NOT_FOUND: {
    code: 404,
    message: 'Not Found!',
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    message: 'Unprocessable Entity!',
  },
};

export const HTTP_CODES_ARRAY = createArrayFromObject(HTTP_CODES);
