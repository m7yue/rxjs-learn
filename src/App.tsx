import React from 'react';

import { customDelayOperator } from './Operators/creating-custom-operators/creating-newoperators-from-scratch'

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
import {mergeScanOperator} from './Operators/perators-list/transformation-operators/mergeScan'
import {pairwiseOperator} from './Operators/perators-list/transformation-operators/pairwise'
import {scanOperator} from './Operators/perators-list/transformation-operators/scan'
import {switchMapOperator} from './Operators/perators-list/transformation-operators/switchMap'
import {switchMapToOperator} from './Operators/perators-list/transformation-operators/switchMapTo'
import {windowOperator} from './Operators/perators-list/transformation-operators/window'
import {windowCountOperator} from './Operators/perators-list/transformation-operators/windowCount'
import {windowTimeOperator} from './Operators/perators-list/transformation-operators/windowTime'
import {windowToggleOperator} from './Operators/perators-list/transformation-operators/windowToggle'
import {windowWhenOperator} from './Operators/perators-list/transformation-operators/windowWhen'


import {auditOperator} from './Operators/perators-list/filtering-operators/audit'
import {auditTimeOperator} from './Operators/perators-list/filtering-operators/auditTime'
import {debounceOperator} from './Operators/perators-list/filtering-operators/debounce'
import {debounceTimeOperator} from './Operators/perators-list/filtering-operators/debounceTime'
import {distinctOperator} from './Operators/perators-list/filtering-operators/distinct'
import {distinctUntilChangedOperator} from './Operators/perators-list/filtering-operators/distinctUntilChanged'
import {distinctUntilKeyChangedOperator} from './Operators/perators-list/filtering-operators/distinctUntilKeyChanged'
import {elementAtOperator} from './Operators/perators-list/filtering-operators/elementAt'
import {filterOperator} from './Operators/perators-list/filtering-operators/filter'
import {firstOperator} from './Operators/perators-list/filtering-operators/first'
import {ignoreElementsOperator} from './Operators/perators-list/filtering-operators/ignoreElements'
import {lastOperator} from './Operators/perators-list/filtering-operators/last'
import {sampleOperator} from './Operators/perators-list/filtering-operators/sample'
import {sampleTimeOperator} from './Operators/perators-list/filtering-operators/sampleTime'
import {singleOperator} from './Operators/perators-list/filtering-operators/single'
import {skipOperator} from './Operators/perators-list/filtering-operators/skip'
import {skipLastOperator} from './Operators/perators-list/filtering-operators/skipLast'
import {skipUntilOperator} from './Operators/perators-list/filtering-operators/skipUntil'
import {skipWhileOperator} from './Operators/perators-list/filtering-operators/skipWhile'
import {takeOperator} from './Operators/perators-list/filtering-operators/take'
import {takeLastOperator} from './Operators/perators-list/filtering-operators/takeLast'
import {takeUtilOperator} from './Operators/perators-list/filtering-operators/takeUntil'
import {takeWhileOperator} from './Operators/perators-list/filtering-operators/takeWhile'
import {throttleOperator} from './Operators/perators-list/filtering-operators/throttle'
import {throttleTimeOperator} from './Operators/perators-list/filtering-operators/throttleTime'


import {combineLatestAllOperator} from './Operators/perators-list/join-operators/combineLatestAll'
import {concatAllOperator} from './Operators/perators-list/join-operators/concatAll'
import {exhaustAllOperator} from './Operators/perators-list/join-operators/exhaustAll'
import {mergeAllOperator} from './Operators/perators-list/join-operators/mergeAll'
import {switchAllOperator} from './Operators/perators-list/join-operators/switchAll'
import {startWithOperator} from './Operators/perators-list/join-operators/startWith'
import {withLatestFromOperator} from './Operators/perators-list/join-operators/withLatestFrom'

import {shareOperator} from './Operators/perators-list/multicasting-operators/share'


import {catchErrorOperator} from './Operators/perators-list/error-handling-operators/catchError'
import {retryOperator} from './Operators/perators-list/error-handling-operators/retry'
import {retryWhenOperator} from './Operators/perators-list/error-handling-operators/retryWhen'


import {tapOperator} from './Operators/perators-list/utility-operators/tap'
import {delayOperator} from './Operators/perators-list/utility-operators/delay'
import {delayWhenOperator} from './Operators/perators-list/utility-operators/delayWhen'
import {dematerializeOperator} from './Operators/perators-list/utility-operators/dematerialize'
import {materializeOperator} from './Operators/perators-list/utility-operators/materialize'
import {observeOnOperator} from './Operators/perators-list/utility-operators/observeOn'
import {subscribeOnOperator} from './Operators/perators-list/utility-operators/subscribeOn'
import {timeIntervalOperator} from './Operators/perators-list/utility-operators/timeInterval'
import {timestampOperator} from './Operators/perators-list/utility-operators/timestamp'
import {timeoutOperator} from './Operators/perators-list/utility-operators/timeout'
import {toArrayOperator} from './Operators/perators-list/utility-operators/toArray'


import {defaultIfEmptyOperator} from './Operators/perators-list/conditional-boolean-operators/defaultIfEmpty'
import {everyOperator} from './Operators/perators-list/conditional-boolean-operators/every'
import {findOperator} from './Operators/perators-list/conditional-boolean-operators/find'
import {findIndexOperator} from './Operators/perators-list/conditional-boolean-operators/findIndex'
import {isEmptyOperator} from './Operators/perators-list/conditional-boolean-operators/isEmpty'


import {countOperator} from './Operators/perators-list/mathematical-aggregate-operators/count'
import {maxOperator} from './Operators/perators-list/mathematical-aggregate-operators/max'
import {minOperator} from './Operators/perators-list/mathematical-aggregate-operators/min'
import {reduceOperator} from './Operators/perators-list/mathematical-aggregate-operators/reduce'

import {subscriptionDemo} from './Subscription/index'
import {subjectDemo} from './Subject'
import {behaviorSubjectDemo} from './Subject/behaviorSubject'
import {replaySubjectDemo} from './Subject/replaySubject'
import {asyncSubjectDemo} from './Subject/asyncSubject'

import {asyncSchedulerDemo} from './Scheduler/asyncScheduler'
import {queueSchedulerDemo} from './Scheduler/queueScheduler'
import {asapSchedulerDemo} from './Scheduler/asapScheduler'



import { test } from './Operators/creating-newoperators-from-scratch'

function App() {
  // asapSchedulerDemo()
  // queueSchedulerDemo()
  // asyncSchedulerDemo()

  // subjectDemo()
  // behaviorSubjectDemo()
  // replaySubjectDemo()
  // asyncSubjectDemo()

  // subscriptionDemo()

  // customDelayOperator()

  // countOperator()
  // maxOperator()
  // minOperator()
  // reduceOperator()

  // defaultIfEmptyOperator()
  // everyOperator()
  // findOperator()
  // findIndexOperator()
  // isEmptyOperator()

  // tapOperator()
  // delayOperator()
  // delayWhenOperator()
  // dematerializeOperator()
  // materializeOperator()
  // observeOnOperator()
  // subscribeOnOperator()
  // timeIntervalOperator()
  // timestampOperator()
  // timeoutOperator()
  // toArrayOperator()


  // catchErrorOperator()
  // retryOperator()
  // retryWhenOperator()
  

  // shareOperator()


  // combineLatestAllOperator()
  // concatAllOperator()
  // exhaustAllOperator()
  // mergeAllOperator()
  // switchAllOperator()
  // startWithOperator()
  // withLatestFromOperator()

  // auditOperator()
  // auditTimeOperator()
  // debounceOperator()
  // debounceTimeOperator()
  // distinctOperator()
  // distinctUntilChangedOperator()
  // distinctUntilKeyChangedOperator()
  // elementAtOperator()
  // filterOperator()
  // firstOperator()
  // ignoreElementsOperator()
  // lastOperator()
  // sampleOperator()
  // sampleTimeOperator()
  // singleOperator()
  // skipOperator()
  // skipLastOperator()
  // skipUntilOperator()
  // skipWhileOperator()
  // takeOperator()
  // takeLastOperator()
  // takeUtilOperator()
  // takeWhileOperator()
  // throttleOperator()
  // throttleTimeOperator()


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
  // mergeScanOperator()
  // pairwiseOperator()
  // scanOperator()
  // switchMapOperator()
  // switchMapToOperator()
  // windowOperator()
  // windowCountOperator()
  // windowTimeOperator()
  windowToggleOperator()
  // windowWhenOperator()


  // combineLatestOperator()
  // concatOperator()
  // forkJoinOperator()
  // mergeOperator()
  // partitionOperator()
  // raceOperator()
  // zipOperator()


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

  return (
    <div className="App">
      react
    </div>
  );
}

export default App;
