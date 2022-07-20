import { HAS_WINDOW_SUPPORT, WINDOW } from '~/constants/env';
import { isUndefinedOrNullOrEmpty } from './inspect';

export function openInNewTab(url) {
  if (!HAS_WINDOW_SUPPORT && isUndefinedOrNullOrEmpty(url)) {
    return;
  }

  WINDOW.open(url, '_blank').focus();
}
