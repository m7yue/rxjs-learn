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


import { test } from './Operators/creating-newoperators-from-scratch'

function App() {
  // test()

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
  iifOperators()

  return (
    <div className="App">
      react
    </div>
  );
}

export default App;