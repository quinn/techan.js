
import { arrow as _arrow } from './arrow';
import { util } from '../util';

export const svg = function(d3) {
  return {
    arrow: _arrow(util().functor)()
  };
};