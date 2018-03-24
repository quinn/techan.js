
import  { indicatormixin } from './indicatormixin';
import  { accessors } from '../accessor';
import  { ema_init } from './ema';
import  { sma_init } from './sma';
import  { atr_init } from './atr';
import  { util } from '../util';
import  { sroc_init } from './sroc';
import  { vwap } from './vwap';


import  { atrtrailingstop } from './atrtrailingstop';
import  { heikinashi } from './heikinashi';
import  { ichimoku } from './ichimoku';
import  { macd } from './macd';
import  { rsi } from './rsi';
import  { adx } from './adx';
import  { aroon } from './aroon';
import  { stochastic } from './stochastic';
import  { williams } from './williams';
import  { bollinger } from './bollinger';

export const indicators = function(d3) {
  var indicatorMixin = indicatormixin(),
      accessor = accessors(),
      ema = ema_init(indicatorMixin, accessor.ohlc, ema_alpha_init),
      sma = sma_init(indicatorMixin, accessor.ohlc),
      atr = atr_init(indicatorMixin, accessor.ohlc, sma),
      circularbuffer = util().circularbuffer;

  return {
    atr: atr,
    atrtrailingstop: atrtrailingstop(indicatorMixin, accessor.ohlc, atr),
    ema: ema,
    heikinashi: heikinashi(indicatorMixin, accessor.ohlc, d3.min, d3.max),
    ichimoku: ichimoku(indicatorMixin, accessor.ohlc),
    macd: macd(indicatorMixin, accessor.ohlc, ema),
    rsi: rsi(indicatorMixin, accessor.ohlc, ema),
    sma: sma,
    wilderma: ema_init(indicatorMixin, accessor.ohlc, wilder_alpha_init),
    aroon: aroon(indicatorMixin, accessor.ohlc),
    roc: sroc_init(circularbuffer, indicatorMixin, accessor.ohlc, ema, 1),
    sroc: sroc_init(circularbuffer, indicatorMixin, accessor.ohlc, ema, 13),
    stochastic: stochastic(indicatorMixin, accessor.ohlc, ema),
    williams: williams(indicatorMixin, accessor.ohlc, ema),
    adx: adx(d3.max, indicatorMixin, accessor.ohlc, ema),
    bollinger: bollinger(indicatorMixin, accessor.ohlc, sma),
    vwap: vwap(indicatorMixin, accessor.ohlc)
   };
};

function ema_alpha_init(period) {
  return 2/(period+1);
}

function wilder_alpha_init(period) {
  return 1/period;
}
