'use strict';

module.exports = function(accessor_value, plot, plotMixin) {  // Injected dependencies

  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        svgLine = plot.pathLine(),
        svgArea = plot.pathArea();

    function area(g) {
      var group = p.dataSelector(g);

      group.entry.append('path').attr('class', 'line');
      group.entry.append('path').attr('class', 'line area');

      // console.log('refresh');
      area.refresh(g);
    }

    area.refresh = function(g) {
      refresh(p.dataSelector.select(g), p.accessor, p.xScale, p.yScale, plot, svgLine, svgArea);
    };

    function binder() {
      svgLine.init(p.accessor.d, p.xScale, p.accessor, p.yScale);
      svgArea.init(p.accessor.d, p.xScale, p.accessor, p.yScale, 0);
    }

    // Mixin 'superclass' methods and variables
    plotMixin(area, p).plot(accessor_value(), binder).dataSelector(plotMixin.dataMapper.array);
    binder();

    return area;
  };
};

function refresh(selection, accessor, x, y, plot, svgLine, svgArea) {
  selection.select('path.line').attr('d', svgLine);
  selection.select('path.line.area').attr('d', svgArea);
}