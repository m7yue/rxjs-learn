import React from 'react';

import { ObservableDemo } from './Observable'
import { SubscriberDemo } from './Observable/subscriber'
import { AsyncIterableDemo } from './Observable/asyncIterable'

import { customDelayOperator } from './Operators/creating-custom-operators/creating-newoperators-from-scratch'

import { generateOperator } from './Operators/operators-list/creation-operators/generate'
import {ajaxOperator} from './Operators/operators-list/creation-operators/ajax'
import {bindCallbackOperator} from './Operators/operators-list/creation-operators/bindCallback'
import {bindNodeCallbackOperator} from './Operators/operators-list/creation-operators/bindNodeCallback'
import {deferOperator} from './Operators/operators-list/creation-operators/defer'
import {emptyDemo} from './Operators/operators-list/creation-operators/empty'
import {neverDemo} from './Operators/operators-list/creation-operators/never'
import {fromOperator} from './Operators/operators-list/creation-operators/from'
import {fromEventOperator} from './Operators/operators-list/creation-operators/fromEvent'
import {fromEventPatternOperator} from './Operators/operators-list/creation-operators/fromEventPattern'
import {intervalOperator} from './Operators/operators-list/creation-operators/interval'
import {ofOperator} from './Operators/operators-list/creation-operators/of'
import {rangeOperator} from './Operators/operators-list/creation-operators/range'
import {throwErrorOperator} from './Operators/operators-list/creation-operators/throwError'
import {timerOperator} from './Operators/operators-list/creation-operators/timer'
import {iifOperator} from './Operators/operators-list/creation-operators/iif'

import {combineLatestOperator} from './Operators/operators-list/join-creation-operators/combineLatest'
import {concatOperator} from './Operators/operators-list/join-creation-operators/concat'
import {forkJoinOperator} from './Operators/operators-list/join-creation-operators/forkJoin'
import {mergeOperator} from './Operators/operators-list/join-creation-operators/merge'
import {partitionOperator} from './Operators/operators-list/join-creation-operators/partition'
import {raceOperator} from './Operators/operators-list/join-creation-operators/race'
import {zipOperator} from './Operators/operators-list/join-creation-operators/zip'


import {bufferOperator} from './Operators/operators-list/transformation-operators/buffer'
import {bufferCountOperator} from './Operators/operators-list/transformation-operators/bufferCount'
import {bufferTimeOperator} from './Operators/operators-list/transformation-operators/bufferTime'
import {bufferToggleOperator} from './Operators/operators-list/transformation-operators/bufferToggle'
import {bufferWhenOperator} from './Operators/operators-list/transformation-operators/bufferWhen'
import {concatMapOperator} from './Operators/operators-list/transformation-operators/concatMap'
import {concatMapToOperator} from './Operators/operators-list/transformation-operators/concatMapTo'
import {exhaustMapOperator} from './Operators/operators-list/transformation-operators/exhaustMap'
import {expandOperator} from './Operators/operators-list/transformation-operators/expand'
import {groupByOperator} from './Operators/operators-list/transformation-operators/groupBy'
import {mapOperator} from './Operators/operators-list/transformation-operators/map'
import {mapToOperator} from './Operators/operators-list/transformation-operators/mapTo'
import {mergeMapOperator} from './Operators/operators-list/transformation-operators/mergeMap'
import {mergeMapToOperator} from './Operators/operators-list/transformation-operators/mergeMapTo'
import {mergeScanOperator} from './Operators/operators-list/transformation-operators/mergeScan'
import {pairwiseOperator} from './Operators/operators-list/transformation-operators/pairwise'
import {scanOperator} from './Operators/operators-list/transformation-operators/scan'
import {switchMapOperator} from './Operators/operators-list/transformation-operators/switchMap'
import {switchMapToOperator} from './Operators/operators-list/transformation-operators/switchMapTo'
import {windowOperator} from './Operators/operators-list/transformation-operators/window'
import {windowCountOperator} from './Operators/operators-list/transformation-operators/windowCount'
import {windowTimeOperator} from './Operators/operators-list/transformation-operators/windowTime'
import {windowToggleOperator} from './Operators/operators-list/transformation-operators/windowToggle'
import {windowWhenOperator} from './Operators/operators-list/transformation-operators/windowWhen'


import {auditOperator} from './Operators/operators-list/filtering-operators/audit'
import {auditTimeOperator} from './Operators/operators-list/filtering-operators/auditTime'
import {debounceOperator} from './Operators/operators-list/filtering-operators/debounce'
import {debounceTimeOperator} from './Operators/operators-list/filtering-operators/debounceTime'
import {distinctOperator} from './Operators/operators-list/filtering-operators/distinct'
import {distinctUntilChangedOperator} from './Operators/operators-list/filtering-operators/distinctUntilChanged'
import {distinctUntilKeyChangedOperator} from './Operators/operators-list/filtering-operators/distinctUntilKeyChanged'
import {elementAtOperator} from './Operators/operators-list/filtering-operators/elementAt'
import {filterOperator} from './Operators/operators-list/filtering-operators/filter'
import {firstOperator} from './Operators/operators-list/filtering-operators/first'
import {ignoreElementsOperator} from './Operators/operators-list/filtering-operators/ignoreElements'
import {lastOperator} from './Operators/operators-list/filtering-operators/last'
import {sampleOperator} from './Operators/operators-list/filtering-operators/sample'
import {sampleTimeOperator} from './Operators/operators-list/filtering-operators/sampleTime'
import {singleOperator} from './Operators/operators-list/filtering-operators/single'
import {skipOperator} from './Operators/operators-list/filtering-operators/skip'
import {skipLastOperator} from './Operators/operators-list/filtering-operators/skipLast'
import {skipUntilOperator} from './Operators/operators-list/filtering-operators/skipUntil'
import {skipWhileOperator} from './Operators/operators-list/filtering-operators/skipWhile'
import {takeOperator} from './Operators/operators-list/filtering-operators/take'
import {takeLastOperator} from './Operators/operators-list/filtering-operators/takeLast'
import {takeUtilOperator} from './Operators/operators-list/filtering-operators/takeUntil'
import {takeWhileOperator} from './Operators/operators-list/filtering-operators/takeWhile'
import {throttleOperator} from './Operators/operators-list/filtering-operators/throttle'
import {throttleTimeOperator} from './Operators/operators-list/filtering-operators/throttleTime'


import {combineLatestAllOperator} from './Operators/operators-list/join-operators/combineLatestAll'
import {concatAllOperator} from './Operators/operators-list/join-operators/concatAll'
import {exhaustAllOperator} from './Operators/operators-list/join-operators/exhaustAll'
import {mergeAllOperator} from './Operators/operators-list/join-operators/mergeAll'
import {switchAllOperator} from './Operators/operators-list/join-operators/switchAll'
import {startWithOperator} from './Operators/operators-list/join-operators/startWith'
import {withLatestFromOperator} from './Operators/operators-list/join-operators/withLatestFrom'

import {shareOperator} from './Operators/operators-list/multicasting-operators/share'


import {catchErrorOperator} from './Operators/operators-list/error-handling-operators/catchError'
import {retryOperator} from './Operators/operators-list/error-handling-operators/retry'
import {retryWhenOperator} from './Operators/operators-list/error-handling-operators/retryWhen'


import {tapOperator} from './Operators/operators-list/utility-operators/tap'
import {delayOperator} from './Operators/operators-list/utility-operators/delay'
import {delayWhenOperator} from './Operators/operators-list/utility-operators/delayWhen'
import {dematerializeOperator} from './Operators/operators-list/utility-operators/dematerialize'
import {materializeOperator} from './Operators/operators-list/utility-operators/materialize'
import {observeOnOperator} from './Operators/operators-list/utility-operators/observeOn'
import {subscribeOnOperator} from './Operators/operators-list/utility-operators/subscribeOn'
import {timeIntervalOperator} from './Operators/operators-list/utility-operators/timeInterval'
import {timestampOperator} from './Operators/operators-list/utility-operators/timestamp'
import {timeoutOperator} from './Operators/operators-list/utility-operators/timeout'
import {toArrayOperator} from './Operators/operators-list/utility-operators/toArray'


import {defaultIfEmptyOperator} from './Operators/operators-list/conditional-boolean-operators/defaultIfEmpty'
import {everyOperator} from './Operators/operators-list/conditional-boolean-operators/every'
import {findOperator} from './Operators/operators-list/conditional-boolean-operators/find'
import {findIndexOperator} from './Operators/operators-list/conditional-boolean-operators/findIndex'
import {isEmptyOperator} from './Operators/operators-list/conditional-boolean-operators/isEmpty'


import {countOperator} from './Operators/operators-list/mathematical-aggregate-operators/count'
import {maxOperator} from './Operators/operators-list/mathematical-aggregate-operators/max'
import {minOperator} from './Operators/operators-list/mathematical-aggregate-operators/min'
import {reduceOperator} from './Operators/operators-list/mathematical-aggregate-operators/reduce'

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
  // AsyncIterableDemo()
  // ObservableDemo()
  // SubscriberDemo()
  // generateDemo()

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

  // ========== 创建操作符 ===========
  // generateOperator()
  // ajaxOperator()
  // bindCallbackOperator()
  // bindNodeCallbackOperator()
  // deferOperator()
  // emptyDemo()
  // neverDemo()
  // fromOperator()
  // fromEventOperator()
  // fromEventPatternOperator()
  // intervalOperator()
  ofOperator()
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

  // ========== 变换运算符 ==========
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


  // ========== 过滤操作 ===========
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


  // ========== 聚合操作 ===========
  // combineLatestAllOperator()
  // concatAllOperator()
  // exhaustAllOperator()
  // mergeAllOperator()
  // switchAllOperator()
  // startWithOperator()
  // withLatestFromOperator()


  // shareOperator()


  // ========== 错误处理 ===========
  // catchErrorOperator()
  // retryOperator()
  // retryWhenOperator()


  // ========== 通用运算符 ===========
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


  // ========== 条件和布尔运算符 ===========
  // defaultIfEmptyOperator()
  // everyOperator()
  // findOperator()
  // findIndexOperator()
  // isEmptyOperator()


  // ========== 数学和聚合运算符 ===========
  // countOperator()
  // maxOperator()
  // minOperator()
  // reduceOperator()

  
  return (
    <div className="App">
      react
    </div>
  );
}

export default App;
