import React from 'react';

// import {test1} from './Observable'

// import { test } from './Operators'

// import {test1} from './Observable'

import {ajaxOperators} from './Operators/perators-list/creation-operators/ajax'
import {bindCallbackOperator} from './Operators/perators-list/creation-operators/bindCallback'
import {bindNodeCallbackOperator} from './Operators/perators-list/creation-operators/bindNodeCallback'
import {deferOperators} from './Operators/perators-list/creation-operators/defer'
import {emptyDemo} from './Operators/perators-list/creation-operators/empty'
import {fromOperators} from './Operators/perators-list/creation-operators/from'
import {fromEventOperators} from './Operators/perators-list/creation-operators/fromEvent'
import {fromEventPatternOperators} from './Operators/perators-list/creation-operators/fromEventPattern'
import {intervalOperators} from './Operators/perators-list/creation-operators/interval'
import {ofOperators} from './Operators/perators-list/creation-operators/of'
import {rangeOperators} from './Operators/perators-list/creation-operators/range'
import {throwErrorOperators} from './Operators/perators-list/creation-operators/throwError'
import {timerOperators} from './Operators/perators-list/creation-operators/timer'
import {iifOperators} from './Operators/perators-list/creation-operators/iif'


import {combineLatestOperator} from './Operators/perators-list/join-creation-operators/combineLatest'
import {concatOperator} from './Operators/perators-list/join-creation-operators/concat'
import {forkJoinOperator} from './Operators/perators-list/join-creation-operators/forkJoin'
import {mergeOperator} from './Operators/perators-list/join-creation-operators/merge'
import {partitionOperator} from './Operators/perators-list/join-creation-operators/partition'
import {raceOperator} from './Operators/perators-list/join-creation-operators/race'
import {zipOperator} from './Operators/perators-list/join-creation-operators/zip'


import {bufferOperator} from './Operators/perators-list/transformation-operators/buffer'
import {bufferCountOperator} from './Operators/perators-list/transformation-operators/bufferCount'
import {bufferTimeOperator} from './Operators/perators-list/transformation-operators/bufferTime'
import {bufferToggleOperator} from './Operators/perators-list/transformation-operators/bufferToggle'
import {bufferWhenOperator} from './Operators/perators-list/transformation-operators/bufferWhen'
import {concatMapOperator} from './Operators/perators-list/transformation-operators/concatMap'
import {concatMapToOperator} from './Operators/perators-list/transformation-operators/concatMapTo'
import {exhaustMapOperator} from './Operators/perators-list/transformation-operators/exhaustMap'
import {expandOperator} from './Operators/perators-list/transformation-operators/expand'
import {groupByOperator} from './Operators/perators-list/transformation-operators/groupBy'
import {mapOperator} from './Operators/perators-list/transformation-operators/map'
import {mapToOperator} from './Operators/perators-list/transformation-operators/mapTo'
import {mergeMapOperator} from './Operators/perators-list/transformation-operators/mergeMap'
import {mergeMapToOperator} from './Operators/perators-list/transformation-operators/mergeMapTo'
import {mergeMapScanOperator} from './Operators/perators-list/transformation-operators/mergeMapScan'
import {pairwiseOperator} from './Operators/perators-list/transformation-operators/pairwise'
import {scanOperator} from './Operators/perators-list/transformation-operators/scan'
import {switchMapOperator} from './Operators/perators-list/transformation-operators/switchMap'
import {switchMapToOperator} from './Operators/perators-list/transformation-operators/switchMapTo'
import {windowOperator} from './Operators/perators-list/transformation-operators/window'
import {windowCountOperator} from './Operators/perators-list/transformation-operators/windowCount'
import {windowTimeOperator} from './Operators/perators-list/transformation-operators/windowTime'
import {windowToggleOperator} from './Operators/perators-list/transformation-operators/windowToggle'
import {windowWhenOperator} from './Operators/perators-list/transformation-operators/windowWhen'

import { test } from './Operators/creating-newoperators-from-scratch'

function App() {
  // test()


  // bufferOperator()
  // bufferCountOperator()
  // bufferTimeOperator()
  // bufferToggleOperator()
  // bufferWhenOperator()
  // concatMapOperator()
  // concatMapToOperator()
  // exhaustMapOperator()
  // expandOperator()
  // groupByOperator()
  // mapOperator()
  // mapToOperator()
  // mergeMapOperator()
  // mergeMapToOperator()
  // mergeMapScanOperator()
  // pairwiseOperator()
  // scanOperator()
  // switchMapOperator()
  // switchMapToOperator()
  // windowOperator()
  // windowCountOperator()
  // windowTimeOperator()
  // windowToggleOperator()
  windowWhenOperator()

  // ajaxOperators()
  // bindCallbackOperator()
  // bindNodeCallbackOperator()
  // deferOperators()
  // emptyDemo()
  // fromOperators()
  // fromEventOperators()
  // fromEventPatternOperators()
  // intervalOperators()
  // ofOperators()
  // rangeOperators()
  // throwErrorOperators()
  // timerOperators()
  // iifOperators()

  // combineLatestOperator()
  // concatOperator()
  // forkJoinOperator()
  // mergeOperator()
  // partitionOperator()
  // raceOperator()
  // zipOperator()

  return (
    <div className="App">
      react
    </div>
  );
}

export default App;
