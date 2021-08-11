import Vue from 'vue';
import tippy, { animateFill } from 'tippy.js';
import { MOBILE_THRESHOLD_VALUE } from '~/project-constants/breakpoints';
import './Tooltip.scss';

function setOffset(offset) {
  if (offset == undefined) {
    return [0, 4]; // Initial value
  } else {
    return offset
      .replace(/[[\]']+/g, '') // Replace `[` and `]`
      .split(',')
      .map(value => {
        return parseInt(value, 10);
      });
  }
}

Vue.directive('tooltip', {
  inserted: el => {
    const { dataset } = el;
    const {
      tooltipAnimatefill,
      tooltipTheme,
      tooltipContent,
      tooltipInteractive,
      tooltipPlacement,
      tooltipMaxwidth,
      tooltipOffset,
      tooltipHideMobile,
    } = dataset;

    const tooltip = tippy(el, {
      animateFill: tooltipAnimatefill ? tooltipAnimatefill === 'true' : true,
      theme: tooltipTheme ? tooltipTheme : 'material',
      offset: setOffset(tooltipOffset),
      content: tooltipContent ? tooltipContent : 'Set Content!',
      interactive: tooltipInteractive ? tooltipInteractive === 'true' : false,
      placement: tooltipPlacement ? tooltipPlacement : 'bottom',
      maxWidth: tooltipMaxwidth ? parseInt(tooltipMaxwidth, 10) : 350,
      allowHTML: true,
      plugins: [animateFill],
    });

    if (tooltipHideMobile && document.body.clientWidth < MOBILE_THRESHOLD_VALUE) {
      tooltip.disable();
    }
  },
});
