

/**
 * Module allows optionally mixing in helper methods to plots such as xScale, yScale, accessor setters
 * and helpers for defining dispatching methods.
 */
export const plotmixin = function (d3ScaleLinear, d3Functor, techanScaleFinancetime, plotDataselector, plotWidth) {
	var PlotMixin = function (source, priv) {
		var plotMixin = {}

		/**
		 * Where mapper is DataSelector.mapper.unity or DataSelector.mapper.array. For convenience DataSelector is available
		 * at PlotMixin.mapper
		 *
		 * @param mapper
		 * @param key
		 * @returns {{}}
		 */
		plotMixin.dataSelector = function (mapper, key) {
			priv.dataSelector = plotDataselector(mapper).key(key)
			return plotMixin
		}

		plotMixin.xScale = function (binder) {
			priv.xScale = techanScaleFinancetime()

			source.xScale = function (_) {
				if (!arguments.length) return priv.xScale
				priv.xScale = _
				if (binder) binder()
				return source
			}

			return plotMixin
		}

		plotMixin.yScale = function (binder) {
			priv.yScale = d3ScaleLinear()

			source.yScale = function (_) {
				if (!arguments.length) return priv.yScale
				priv.yScale = _
				if (binder) binder()
				return source
			}

			return plotMixin
		}

		plotMixin.accessor = function (accessor, binder) {
			priv.accessor = accessor

			source.accessor = function (_) {
				if (!arguments.length) return priv.accessor
				priv.accessor = _
				if (binder) binder()
				return source
			}

			return plotMixin
		}

		plotMixin.width = function (binder) {
			priv.width = plotWidth

			source.width = function (_) {
				if (!arguments.length) return priv.width
				priv.width = d3Functor(_)
				if (binder) binder()
				return source
			}

			return plotMixin
		}

		plotMixin.on = function (dispatch, binder) {
			source.on = function (type, listener) {
				dispatch.on(type, listener)
				if (binder) binder()
				return source
			}

			return plotMixin
		}

		/**
		* Generic mixin used for most plots
		* @returns {plotMixin}
		*/
		plotMixin.plot = (accessor, binder) =>
			plotMixin.xScale(binder).yScale(binder).accessor(accessor, binder)

		return plotMixin
	}

	// Carry the mappers through for convenience
	PlotMixin.dataMapper = plotDataselector.mapper

	return PlotMixin
}
