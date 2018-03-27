
// incredibly ugly hack to get the correct d3 version.
import * as d3 from 'NodeModules/d3/build/d3.js'

import { indicators } from './indicator'
import { accessors } from './accessor'
import { svg } from './svg'
import { plot } from './plot'
import { scale } from './scale'

const techan = {
//    version: require('../build/version'),
	accessor:  accessors(),
	indicator: indicators(d3),
	plot:      plot(d3),
	scale:     scale(d3),
	svg:       svg(d3)
}

export default techan
