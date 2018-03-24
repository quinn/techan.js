

import  { atrtrailingstop } from './atrtrailingstop';
import  { crosshair } from './crosshair';
import  { ichimoku } from './ichimoku';
import  { macd } from './macd';
import  { ohlc } from './ohlc';
import  { rsi } from './rsi';
import  { trendline } from './trendline';
import  { value } from './value';
import  { volume } from './volume';
import  { tick } from './tick';
import  { trade } from './trade';
import  { adx } from './adx';
import  { aroon } from './aroon';
import  { stochastic } from './stochastic';
import  { supstance } from './supstance';
import  { williams } from './williams';
import  { bollinger } from './bollinger';


// Provide IDs for all accessors. Default to date, but at least provide an option
export const accessors = ()=>({
    atrtrailingstop: atrtrailingstop,
    crosshair: crosshair,
    ichimoku: ichimoku,
    macd: macd,
    ohlc: ohlc,
    rsi: rsi,
    trendline: trendline,
    value: value,
    volume: volume,
    tick: tick,
    trade: trade,
    adx: adx,
    aroon: aroon,
    stochastic: stochastic,
    supstance: supstance,
    williams: williams,
    bollinger: bollinger
  });
