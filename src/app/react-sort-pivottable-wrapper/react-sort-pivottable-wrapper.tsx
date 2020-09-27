import { useState } from 'react';
import * as React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// tslint:disable-next-line: typedef
export function ReactSortPivottableWrapper(props) {
  const [state, setState] = useState({});
  return (
    <PivotTableUI
      data={props.data}
      onChange={setState}
      renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
      {...state}
    />
  );
}
