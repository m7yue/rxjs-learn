import React from 'react';

import { ObservableDemo } from './Observable'

import { customDelayOperator } from './Operators/creating-custom-operators/creating-newoperators-from-scratch'

import {ajaxOperator} from './Operators/perators-list/creation-operators/ajax'
import {bindCallbackOperator} from './Operators/perators-list/creation-operators/bindCallback'
import {bindNodeCallbackOperator} from './Operators/perators-list/creation-operators/bindNodeCallback'
import {deferOperator} from './Operators/perators-list/creation-operators/defer'
import {emptyDemo} from './Operators/perators-list/creation-operators/empty'
import {fromOperator} from './Operators/perators-list/creation-operators/from'
import {fromEventOperator} from './Operators/perators-list/creation-operators/fromEvent'
import {fromEventPatternOperator} from './Operators/perators-list/creation-operators/fromEventPattern'
import {intervalOperator} from './Operators/perators-list/creation-operators/interval'
import {ofOperator} from './Operators/perators-list/creation-operators/of'
import {rangeOperator} from './Operators/perators-list/creation-operators/range'
import {throwErrorOperator} from './Operators/perators-list/creation-operators/throwError'
import {timerOperator} from './Operators/perators-list/creation-operators/timer'
import {iifOperator} from './Operators/perators-list/creation-operators/iif'


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
import {animationFrameSchedulerDemo} from './Scheduler/animationFrameScheduler'



import { test } from './Operators/creating-newoperators-from-scratch'

function App() {
  // ObservableDemo()

  // subscriptionDemo()

  // subjectDemo()
  // behaviorSubjectDemo()
  // replaySubjectDemo()
  // asyncSubjectDemo()


  // asapSchedulerDemo()
  // queueSchedulerDemo()
  // asyncSchedulerDemo()
  // animationFrameSchedulerDemo()


  // customDelayOperator()


  // ajaxOperator()
  // bindCallbackOperator()
  // bindNodeCallbackOperator()
  // deferOperator()
  // emptyDemo()
  // fromOperator()
  // fromEventOperator()
  // fromEventPatternOperator()
  // intervalOperator()
  // ofOperator()
  // rangeOperator()
  // throwErrorOperator()
  // timerOperator()
  // iifOperator()


  // combineLatestOperator()
  // concatOperator()
  // forkJoinOperator()
  // mergeOperator()
  // partitionOperator()
  // raceOperator()
  // zipOperator()


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
  // scanOperator()
  // mergeScanOperator()
  // pairwiseOperator()
  // switchMapOperator()
  // switchMapToOperator()
  // windowOperator()
  // windowCountOperator()
  // windowTimeOperator()
  // windowToggleOperator()
  // windowWhenOperator()


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
  // lastOperator()
  // ignoreElementsOperator()
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


  // combineLatestAllOperator()
  // concatAllOperator()
  // exhaustAllOperator()
  // mergeAllOperator()
  // switchAllOperator()
  // startWithOperator()
  // withLatestFromOperator()


  // shareOperator()


  // catchErrorOperator()
  // retryOperator()
  // retryWhenOperator()


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


  // defaultIfEmptyOperator()
  // everyOperator()
  // findOperator()
  // findIndexOperator()
  // isEmptyOperator()


  // countOperator()
  // maxOperator()
  minOperator()
  // reduceOperator()

  
  return (
    <div className="App">
      react
    </div>
  );
}

export default App;
