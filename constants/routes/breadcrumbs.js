import { ROUTE_NAMES } from './route-names';

const HOME_PAGE = {
  text: 'Anasayfa',
  disabled: false,
  href: ROUTE_NAMES.HOME.PATH,
};

const ACCOUNT = {
  ACCOUNT: [HOME_PAGE, { text: ROUTE_NAMES.ACCOUNT.PAGE_TITLE, disabled: true }],
};

const EXAMPLE_PAGE = {
  EXAMPLE_PAGE: [HOME_PAGE, { text: ROUTE_NAMES.PAGE.PAGE_TITLE, disabled: true }],
};

export const BREADCRUMBS = {
  ...ACCOUNT,
  ...EXAMPLE_PAGE,
};
