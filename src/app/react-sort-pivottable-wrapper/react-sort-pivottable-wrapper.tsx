import { useState } from 'react';
import * as React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';

// tslint:disable-next-line: typedef
export function ReactSortPivottableWrapper(props) {
  const [state, setState] = useState({});
  return <PivotTableUI data={props.data} onChange={setState} {...state} />;
}
