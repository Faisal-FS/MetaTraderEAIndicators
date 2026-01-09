/******/ var __webpack_modules__ = ({

/***/ 945:
/***/ (function(module) {

!function(T,E){ true?module.exports=E():0}(this,(()=>(()=>{"use strict";var T,E,_,O,A,S,R,I,L,M,N,P,B,C,t,D,F,e,Y,o,U,n={d:(T,E)=>{for(var _ in E)n.o(E,_)&&!n.o(T,_)&&Object.defineProperty(T,_,{enumerable:!0,get:E[_]})},o:(T,E)=>Object.prototype.hasOwnProperty.call(T,E),r:T=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(T,"__esModule",{value:!0})}},J={};n.r(J),n.d(J,{ActionButtonPosition:()=>e,AnchorPoint:()=>Y,ENUM_STATISTICS:()=>R,ENUM_SYMBOL_INFO_NUMBER:()=>O,ENUM_SYMBOL_INFO_STRING:()=>A,ENUM_TIMEFRAMES:()=>S,E_MAType:()=>B,IndicatorImplementation:()=>H,MacdMode:()=>t,ObjProp:()=>U,TDrawStyle:()=>E,TIndexPos:()=>o,TObjectType:()=>M,TOptionType:()=>P,TOutputWindow:()=>C,TPenStyle:()=>T,TPriceType:()=>D,TTradePositionType:()=>_,TValueType:()=>F,TimeUnit:()=>I,TimeValue:()=>N,TimeZoneMode:()=>L});class H{get api(){if(!this._api)throw new Error("api is not set");return this._api}OnAttach(T){console.log("OnAttach",T),this._api=T}OnParamsChange(){}Done(){}OnHide(){}OnShow(){}}return function(T){T[T.SOLID=0]="SOLID",T[T.DASH=1]="DASH",T[T.DOT=2]="DOT",T[T.DASH_DOT=3]="DASH_DOT",T[T.DASH_DOT_DOT=4]="DASH_DOT_DOT",T[T.CLEAR=5]="CLEAR",T[T.INSIDE_FRAME=6]="INSIDE_FRAME",T[T.USER_STYLE=7]="USER_STYLE",T[T.ALTERNATE=8]="ALTERNATE"}(T||(T={})),function(T){T[T.LINE=0]="LINE",T[T.HISTOGRAM=1]="HISTOGRAM",T[T.FILL=2]="FILL",T[T.SYMBOL=3]="SYMBOL",T[T.SECTION=4]="SECTION",T[T.HISTOGRAM_FILL=5]="HISTOGRAM_FILL",T[T.COLORED_CANDLES=6]="COLORED_CANDLES",T[T.NONE=7]="NONE"}(E||(E={})),function(T){T[T.BUY=0]="BUY",T[T.SELL=1]="SELL",T[T.BUY_LIMIT=2]="BUY_LIMIT",T[T.SELL_LIMIT=3]="SELL_LIMIT",T[T.BUY_STOP=4]="BUY_STOP",T[T.SELL_STOP=5]="SELL_STOP",T[T.DEPOSIT=6]="DEPOSIT",T[T.WITHDRAWAL=7]="WITHDRAWAL",T[T.CREDIT=8]="CREDIT",T[T.CANCELLED=9]="CANCELLED"}(_||(_={})),function(T){T[T.SYMBOL_PRICE_BID=1]="SYMBOL_PRICE_BID",T[T.SYMBOL_PRICE_ASK=4]="SYMBOL_PRICE_ASK",T[T.SYMBOL_POINT_VALUE=11]="SYMBOL_POINT_VALUE",T[T.SYMBOL_TICK_VALUE=16]="SYMBOL_TICK_VALUE",T[T.SYMBOL_TICK_SIZE=17]="SYMBOL_TICK_SIZE",T[T.SYMBOL_CONTRACT_SIZE=28]="SYMBOL_CONTRACT_SIZE",T[T.SYMBOL_MIN_VOLUME=34]="SYMBOL_MIN_VOLUME",T[T.SYMBOL_MAX_VOLUME=35]="SYMBOL_MAX_VOLUME",T[T.SYMBOL_VOLUME_STEP_SIZE=36]="SYMBOL_VOLUME_STEP_SIZE",T[T.SYMBOL_SWAP_LONG_RATE=38]="SYMBOL_SWAP_LONG_RATE",T[T.SYMBOL_SWAP_SHORT_RATE=39]="SYMBOL_SWAP_SHORT_RATE",T[T.SYMBOL_INITIAL_MARGIN=42]="SYMBOL_INITIAL_MARGIN",T[T.SYMBOL_MAINTENANCE_MARGIN=43]="SYMBOL_MAINTENANCE_MARGIN",T[T.SYMBOL_IS_SELECTED=0]="SYMBOL_IS_SELECTED",T[T.SYMBOL_IS_VISIBLE=785]="SYMBOL_IS_VISIBLE",T[T.SYMBOL_LAST_QUOTE_TIME=15]="SYMBOL_LAST_QUOTE_TIME",T[T.SYMBOL_DECIMAL_PLACES=12]="SYMBOL_DECIMAL_PLACES",T[T.SYMBOL_FLOATING_SPREAD=41]="SYMBOL_FLOATING_SPREAD",T[T.SYMBOL_CURRENT_SPREAD=18]="SYMBOL_CURRENT_SPREAD",T[T.SYMBOL_PROFIT_CALCULATION_MODE=29]="SYMBOL_PROFIT_CALCULATION_MODE",T[T.SYMBOL_TRADING_MODE=30]="SYMBOL_TRADING_MODE",T[T.SYMBOL_TRADING_START_TIME=51]="SYMBOL_TRADING_START_TIME",T[T.SYMBOL_ORDER_EXPIRATION_TIME=52]="SYMBOL_ORDER_EXPIRATION_TIME",T[T.SYMBOL_STOPS_LEVEL=31]="SYMBOL_STOPS_LEVEL",T[T.SYMBOL_FREEZE_LEVEL=32]="SYMBOL_FREEZE_LEVEL",T[T.SYMBOL_SWAP_CALCULATION_MODE=37]="SYMBOL_SWAP_CALCULATION_MODE",T[T.SYMBOL_SWAP_TRIPLE_DAY=40]="SYMBOL_SWAP_TRIPLE_DAY"}(O||(O={})),function(T){T[T.SYMBOL_BASE_CURRENCY=22]="SYMBOL_BASE_CURRENCY",T[T.SYMBOL_PROFIT_CURRENCY=23]="SYMBOL_PROFIT_CURRENCY",T[T.SYMBOL_MARGIN_CURRENCY=24]="SYMBOL_MARGIN_CURRENCY",T[T.SYMBOL_DISPLAY_NAME=20]="SYMBOL_DISPLAY_NAME",T[T.SYMBOL_MARKET_PATH=21]="SYMBOL_MARKET_PATH"}(A||(A={})),function(T){T[T.TIMEFRAME_CURRENT=0]="TIMEFRAME_CURRENT",T[T.TIMEFRAME_M1=1]="TIMEFRAME_M1",T[T.TIMEFRAME_M5=5]="TIMEFRAME_M5",T[T.TIMEFRAME_M15=15]="TIMEFRAME_M15",T[T.TIMEFRAME_M30=30]="TIMEFRAME_M30",T[T.TIMEFRAME_H1=60]="TIMEFRAME_H1",T[T.TIMEFRAME_H4=240]="TIMEFRAME_H4",T[T.TIMEFRAME_D1=1440]="TIMEFRAME_D1",T[T.TIMEFRAME_W1=10080]="TIMEFRAME_W1",T[T.TIMEFRAME_MN1=43200]="TIMEFRAME_MN1",T[T.TIMEFRAME_M2=2]="TIMEFRAME_M2",T[T.TIMEFRAME_M3=3]="TIMEFRAME_M3",T[T.TIMEFRAME_M4=4]="TIMEFRAME_M4",T[T.TIMEFRAME_M6=6]="TIMEFRAME_M6",T[T.TIMEFRAME_M10=10]="TIMEFRAME_M10",T[T.TIMEFRAME_M12=12]="TIMEFRAME_M12",T[T.TIMEFRAME_M20=20]="TIMEFRAME_M20",T[T.TIMEFRAME_H2=120]="TIMEFRAME_H2",T[T.TIMEFRAME_H3=180]="TIMEFRAME_H3",T[T.TIMEFRAME_H6=360]="TIMEFRAME_H6",T[T.TIMEFRAME_H8=480]="TIMEFRAME_H8",T[T.TIMEFRAME_H12=720]="TIMEFRAME_H12"}(S||(S={})),function(T){T[T.STAT_STARTING_DEPOSIT=0]="STAT_STARTING_DEPOSIT",T[T.STAT_NET_PROFIT=2]="STAT_NET_PROFIT",T[T.STAT_TOTAL_GROSS_PROFIT=3]="STAT_TOTAL_GROSS_PROFIT",T[T.STAT_TOTAL_GROSS_LOSS=4]="STAT_TOTAL_GROSS_LOSS",T[T.STAT_LARGEST_PROFIT=5]="STAT_LARGEST_PROFIT",T[T.STAT_LARGEST_LOSS=6]="STAT_LARGEST_LOSS",T[T.STAT_CONSECUTIVE_PROFITS_MAX=7]="STAT_CONSECUTIVE_PROFITS_MAX",T[T.STAT_CONSECUTIVE_PROFITS_MAX_COUNT=35]="STAT_CONSECUTIVE_PROFITS_MAX_COUNT",T[T.STAT_MAX_CONSECUTIVE_WINS=8]="STAT_MAX_CONSECUTIVE_WINS",T[T.STAT_MAX_CONSECUTIVE_PROFIT_COUNT=36]="STAT_MAX_CONSECUTIVE_PROFIT_COUNT",T[T.STAT_CONSECUTIVE_LOSSES_MAX=9]="STAT_CONSECUTIVE_LOSSES_MAX",T[T.STAT_CONSECUTIVE_LOSSES_MAX_COUNT=37]="STAT_CONSECUTIVE_LOSSES_MAX_COUNT",T[T.STAT_MAX_CONSECUTIVE_LOSSES=10]="STAT_MAX_CONSECUTIVE_LOSSES",T[T.STAT_MAX_CONSECUTIVE_LOSS_COUNT=38]="STAT_MAX_CONSECUTIVE_LOSS_COUNT",T[T.STAT_BALANCE_MINIMUM=11]="STAT_BALANCE_MINIMUM",T[T.STAT_BALANCE_DRAWDOWN=12]="STAT_BALANCE_DRAWDOWN",T[T.STAT_BALANCE_DRAWDOWN_PERCENT=13]="STAT_BALANCE_DRAWDOWN_PERCENT",T[T.STAT_BALANCE_DRAWDOWN_REL_PERCENT=15]="STAT_BALANCE_DRAWDOWN_REL_PERCENT",T[T.STAT_BALANCE_DRAWDOWN_RELATIVE=14]="STAT_BALANCE_DRAWDOWN_RELATIVE",T[T.STAT_EQUITY_MINIMUM=16]="STAT_EQUITY_MINIMUM",T[T.STAT_EQUITY_DRAWDOWN=17]="STAT_EQUITY_DRAWDOWN",T[T.STAT_EQUITY_DRAWDOWN_PERCENT=18]="STAT_EQUITY_DRAWDOWN_PERCENT",T[T.STAT_EQUITY_DRAWDOWN_REL_PERCENT=20]="STAT_EQUITY_DRAWDOWN_REL_PERCENT",T[T.STAT_EQUITY_DRAWDOWN_RELATIVE=19]="STAT_EQUITY_DRAWDOWN_RELATIVE",T[T.STAT_EXPECTED_PROFIT=21]="STAT_EXPECTED_PROFIT",T[T.STAT_PROFITABILITY_FACTOR=22]="STAT_PROFITABILITY_FACTOR",T[T.STAT_MINIMUM_MARGIN_LEVEL=25]="STAT_MINIMUM_MARGIN_LEVEL",T[T.STAT_CUSTOM_OPTIMIZATION_METRIC=26]="STAT_CUSTOM_OPTIMIZATION_METRIC",T[T.STAT_TOTAL_TRADES=28]="STAT_TOTAL_TRADES",T[T.STAT_TOTAL_PROFITABLE_TRADES=29]="STAT_TOTAL_PROFITABLE_TRADES",T[T.STAT_TOTAL_LOSING_TRADES=30]="STAT_TOTAL_LOSING_TRADES",T[T.STAT_TOTAL_SHORT_TRADES=31]="STAT_TOTAL_SHORT_TRADES",T[T.STAT_TOTAL_LONG_TRADES=32]="STAT_TOTAL_LONG_TRADES",T[T.STAT_PROFIT_FROM_SHORT_TRADES=33]="STAT_PROFIT_FROM_SHORT_TRADES",T[T.STAT_PROFIT_FROM_LONG_TRADES=34]="STAT_PROFIT_FROM_LONG_TRADES",T[T.STAT_AVG_CONSECUTIVE_PROFITS=39]="STAT_AVG_CONSECUTIVE_PROFITS",T[T.STAT_AVG_CONSECUTIVE_LOSSES=40]="STAT_AVG_CONSECUTIVE_LOSSES"}(R||(R={})),function(T){T[T.SECONDS=0]="SECONDS",T[T.MILLISECONDS=1]="MILLISECONDS"}(I||(I={})),function(T){T[T.PROJECT=0]="PROJECT",T[T.UTC=1]="UTC"}(L||(L={})),function(T){T[T.ANY_OBJECT=0]="ANY_OBJECT",T[T.V_LINE=1]="V_LINE",T[T.H_LINE=2]="H_LINE",T[T.TREND_LINE=3]="TREND_LINE",T[T.RAY=4]="RAY",T[T.POLYLINE=5]="POLYLINE",T[T.FIBO_RETRACEMENT=6]="FIBO_RETRACEMENT",T[T.FIBO_TIME_ZONES=7]="FIBO_TIME_ZONES",T[T.FIBO_ARC=8]="FIBO_ARC",T[T.FIBO_FAN=9]="FIBO_FAN",T[T.ANDREWS_PITCHFORK=10]="ANDREWS_PITCHFORK",T[T.TEXT=11]="TEXT",T[T.TEXT_LABEL=12]="TEXT_LABEL",T[T.RECTANGLE=13]="RECTANGLE",T[T.ELLIPSE=14]="ELLIPSE",T[T.TRIANGLE=15]="TRIANGLE",T[T.FIBO_CHANNEL=16]="FIBO_CHANNEL",T[T.LR_CHANNEL=17]="LR_CHANNEL",T[T.FIBO_EXTENSION=18]="FIBO_EXTENSION",T[T.GANN_BOX=19]="GANN_BOX",T[T.H_RAY=20]="H_RAY"}(M||(M={})),function(T){T["00:00"]="00:00",T["00:15"]="00:15",T["00:30"]="00:30",T["00:45"]="00:45",T["01:00"]="01:00",T["01:15"]="01:15",T["01:30"]="01:30",T["01:45"]="01:45",T["02:00"]="02:00",T["02:15"]="02:15",T["02:30"]="02:30",T["02:45"]="02:45",T["03:00"]="03:00",T["03:15"]="03:15",T["03:30"]="03:30",T["03:45"]="03:45",T["04:00"]="04:00",T["04:15"]="04:15",T["04:30"]="04:30",T["04:45"]="04:45",T["05:00"]="05:00",T["05:15"]="05:15",T["05:30"]="05:30",T["05:45"]="05:45",T["06:00"]="06:00",T["06:15"]="06:15",T["06:30"]="06:30",T["06:45"]="06:45",T["07:00"]="07:00",T["07:15"]="07:15",T["07:30"]="07:30",T["07:45"]="07:45",T["08:00"]="08:00",T["08:15"]="08:15",T["08:30"]="08:30",T["08:45"]="08:45",T["09:00"]="09:00",T["09:15"]="09:15",T["09:30"]="09:30",T["09:45"]="09:45",T["10:00"]="10:00",T["10:15"]="10:15",T["10:30"]="10:30",T["10:45"]="10:45",T["11:00"]="11:00",T["11:15"]="11:15",T["11:30"]="11:30",T["11:45"]="11:45",T["12:00"]="12:00",T["12:15"]="12:15",T["12:30"]="12:30",T["12:45"]="12:45",T["13:00"]="13:00",T["13:15"]="13:15",T["13:30"]="13:30",T["13:45"]="13:45",T["14:00"]="14:00",T["14:15"]="14:15",T["14:30"]="14:30",T["14:45"]="14:45",T["15:00"]="15:00",T["15:15"]="15:15",T["15:30"]="15:30",T["15:45"]="15:45",T["16:00"]="16:00",T["16:15"]="16:15",T["16:30"]="16:30",T["16:45"]="16:45",T["17:00"]="17:00",T["17:15"]="17:15",T["17:30"]="17:30",T["17:45"]="17:45",T["18:00"]="18:00",T["18:15"]="18:15",T["18:30"]="18:30",T["18:45"]="18:45",T["19:00"]="19:00",T["19:15"]="19:15",T["19:30"]="19:30",T["19:45"]="19:45",T["20:00"]="20:00",T["20:15"]="20:15",T["20:30"]="20:30",T["20:45"]="20:45",T["21:00"]="21:00",T["21:15"]="21:15",T["21:30"]="21:30",T["21:45"]="21:45",T["22:00"]="22:00",T["22:15"]="22:15",T["22:30"]="22:30",T["22:45"]="22:45",T["23:00"]="23:00",T["23:15"]="23:15",T["23:30"]="23:30",T["23:45"]="23:45",T["23:59"]="23:59"}(N||(N={})),function(T){T[T.LONGWORD=0]="LONGWORD",T[T.INTEGER=1]="INTEGER",T[T.DOUBLE=2]="DOUBLE",T[T.STRING=3]="STRING",T[T.BOOLEAN=4]="BOOLEAN",T[T.ENUM_TYPE=5]="ENUM_TYPE",T[T.TIMEFRAME=6]="TIMEFRAME",T[T.CURRENCY=7]="CURRENCY",T[T.LINE_STYLE=8]="LINE_STYLE",T[T.SEPARATOR=9]="SEPARATOR",T[T.INDICATOR=10]="INDICATOR",T[T.COLOR=11]="COLOR",T[T.DATE_TIME=12]="DATE_TIME",T[T.LEVELS=13]="LEVELS",T[T.SESSION=14]="SESSION",T[T.SESSIONS_ARRAY=15]="SESSIONS_ARRAY",T[T.LINE=16]="LINE",T[T.DATE_ONLY=17]="DATE_ONLY",T[T.TIME_ONLY=18]="TIME_ONLY"}(P||(P={})),function(T){T[T.SMA=0]="SMA",T[T.EMA=1]="EMA",T[T.SMMA=2]="SMMA",T[T.LWMA=3]="LWMA"}(B||(B={})),function(T){T[T.CHART_WINDOW=0]="CHART_WINDOW",T[T.SEPARATE_WINDOW=1]="SEPARATE_WINDOW"}(C||(C={})),function(T){T[T.MAIN=0]="MAIN",T[T.SIGNAL=1]="SIGNAL"}(t||(t={})),function(T){T[T.CLOSE=0]="CLOSE",T[T.OPEN=1]="OPEN",T[T.HIGH=2]="HIGH",T[T.LOW=3]="LOW",T[T.HL2=4]="HL2",T[T.HLC3=5]="HLC3",T[T.HLCC4=6]="HLCC4",T[T.OHLC4=7]="OHLC4"}(D||(D={})),function(T){T[T.OPEN=0]="OPEN",T[T.HIGH=1]="HIGH",T[T.LOW=2]="LOW",T[T.CLOSE=3]="CLOSE",T[T.VOLUME=4]="VOLUME"}(F||(F={})),function(T){T.TopRight="top-right",T.TopLeft="top-left",T.BottomRight="bottom-right",T.BottomLeft="bottom-left",T.TopBar="top-bar",T.BottomBar="bottom-bar",T.PriceRight="price-right",T.PriceLeft="price-left",T.PriceBar="price-bar",T.ObjectTopLeft="object-top-left",T.ObjectTopCenter="object-top-center",T.ObjectTopRight="object-top-right",T.ObjectRightCenter="object-right-center",T.ObjectBottomRight="object-bottom-right",T.ObjectBottomCenter="object-bottom-center",T.ObjectBottomLeft="object-bottom-left",T.ObjectLeftCenter="object-left-center"}(e||(e={})),function(T){T[T.LEFT_TOP=0]="LEFT_TOP",T[T.LEFT_CENTER=1]="LEFT_CENTER",T[T.LEFT_BOTTOM=2]="LEFT_BOTTOM",T[T.CENTER_BOTTOM=3]="CENTER_BOTTOM",T[T.RIGHT_BOTTOM=4]="RIGHT_BOTTOM",T[T.RIGHT_CENTER=5]="RIGHT_CENTER",T[T.RIGHT_TOP=6]="RIGHT_TOP",T[T.CENTER_TOP=7]="CENTER_TOP",T[T.CENTER=8]="CENTER"}(Y||(Y={})),function(T){T[T.VALID=0]="VALID",T[T.INVALID=1]="INVALID",T[T.INV_BEFORE=2]="INV_BEFORE",T[T.INV_AFTER=3]="INV_AFTER"}(o||(o={})),function(T){T[T.OBJPROP_TIME1=0]="OBJPROP_TIME1",T[T.OBJPROP_PRICE1=1]="OBJPROP_PRICE1",T[T.OBJPROP_FILLCOLOR=2]="OBJPROP_FILLCOLOR",T[T.OBJPROP_COLOR=3]="OBJPROP_COLOR",T[T.OBJPROP_STYLE=4]="OBJPROP_STYLE",T[T.OBJPROP_WIDTH=5]="OBJPROP_WIDTH",T[T.OBJPROP_TIME2=6]="OBJPROP_TIME2",T[T.OBJPROP_PRICE2=7]="OBJPROP_PRICE2",T[T.OBJPROP_TIME3=8]="OBJPROP_TIME3",T[T.OBJPROP_PRICE3=9]="OBJPROP_PRICE3",T[T.OBJPROP_LEVELVALUE=10]="OBJPROP_LEVELVALUE",T[T.OBJPROP_LEVELCOLOR=11]="OBJPROP_LEVELCOLOR",T[T.OBJPROP_LEVELSTYLE=12]="OBJPROP_LEVELSTYLE",T[T.OBJPROP_LEVELWIDTH=13]="OBJPROP_LEVELWIDTH",T[T.OBJPROP_FONTNAME=14]="OBJPROP_FONTNAME",T[T.OBJPROP_FONTSIZE=15]="OBJPROP_FONTSIZE",T[T.OBJPROP_NAME=16]="OBJPROP_NAME",T[T.OBJPROP_FILLINSIDE=17]="OBJPROP_FILLINSIDE",T[T.OBJPROP_ELLIPSE=18]="OBJPROP_ELLIPSE",T[T.OBJPROP_FIBOENDWIDTH=19]="OBJPROP_FIBOENDWIDTH",T[T.OBJPROP_FIBOCLOSEDENDS=20]="OBJPROP_FIBOCLOSEDENDS",T[T.OBJPROP_FIBOSHOWPRICE=21]="OBJPROP_FIBOSHOWPRICE",T[T.OBJPROP_FIBOLEVELS=22]="OBJPROP_FIBOLEVELS",T[T.OBJPROP_SCREENCOORDS=23]="OBJPROP_SCREENCOORDS",T[T.OBJPROP_TEXT=24]="OBJPROP_TEXT",T[T.OBJPROP_SCRHALIGNMENT=25]="OBJPROP_SCRHALIGNMENT",T[T.OBJPROP_SCRVALIGNMENT=26]="OBJPROP_SCRVALIGNMENT",T[T.OBJPROP_HALIGNMENT=27]="OBJPROP_HALIGNMENT",T[T.OBJPROP_YDISTANCE=28]="OBJPROP_YDISTANCE",T[T.OBJPROP_VALIGNMENT=29]="OBJPROP_VALIGNMENT",T[T.OBJPROP_XDISTANCE=30]="OBJPROP_XDISTANCE",T[T.OBJPROP_FIBOLEVELN=31]="OBJPROP_FIBOLEVELN",T[T.BORDER=32]="BORDER",T[T.OBJPROP_TEXT_PARAMS=33]="OBJPROP_TEXT_PARAMS",T[T.OBJPROP_MIDDLE_LINE=34]="OBJPROP_MIDDLE_LINE",T[T.OBJPROP_EXTEND_RIGHT=35]="OBJPROP_EXTEND_RIGHT",T[T.OBJPROP_ANCHOR_POINT=36]="OBJPROP_ANCHOR_POINT",T[T.OBJPROP_BACK=37]="OBJPROP_BACK",T[T.OBJPROP_XSIZE=38]="OBJPROP_XSIZE",T[T.OBJPROP_YSIZE=39]="OBJPROP_YSIZE",T[T.OBJPROP_OPACITY=40]="OBJPROP_OPACITY",T[T.OBJPROP_ANGLE=41]="OBJPROP_ANGLE"}(U||(U={})),J})()));

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (src_r_SimpleMACrossover)
/* harmony export */ });
/* harmony import */ var forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(945);
/* harmony import */ var forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__);
//+------------------------------------------------------------------+
//|                Simple Moving Average Crossover Indicator         |
//|                                by Faisal (Coding Reel)           |
//+------------------------------------------------------------------+

class r_SimpleMACrossover extends forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.IndicatorImplementation {
    constructor() {
        super(...arguments);
        // Execution Variables
        this.lastFirstBarTime = -1;
        this.lastLastBarTime = -1;
    }
    //+------------------------------------------------------------------+
    //| Custom indicator initialization function                         |
    //+------------------------------------------------------------------+
    Init() {
        // --- Input parameters
        this.FastMAPeriod = this.api.createTOptValue_number(9);
        this.SlowMAPeriod = this.api.createTOptValue_number(50);
        this.api.RegOption("FastMA Period", forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TOptionType.INTEGER, this.FastMAPeriod);
        this.api.RegOption("SlowMA Period", forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TOptionType.INTEGER, this.SlowMAPeriod);
        this.api.SetOptionRange("FastMA Period", 1, 1000);
        this.api.SetOptionRange("SlowMA Period", 1, 1000);
        // --- Indicator buffers
        // Set the number of indicator buffers
        this.api.IndicatorBuffers(4);
        // Create the index buffers for the buy and sell signals
        this.BuyBuffer = this.api.CreateIndexBuffer();
        // Create the index buffers for the MA lines
        this.SellBuffer = this.api.CreateIndexBuffer();
        // Create the index buffer for the fast MA
        this.FastMA_Buffer = this.api.CreateIndexBuffer();
        // Create the index buffer for the slow MA
        this.SlowMA_Buffer = this.api.CreateIndexBuffer();
        // Set the index buffers for the buy and sell signals
        this.api.SetIndexBuffer(0, this.BuyBuffer);
        this.api.SetIndexBuffer(1, this.SellBuffer);
        // Set the index buffers for the MA lines
        this.api.SetIndexBuffer(2, this.FastMA_Buffer);
        this.api.SetIndexBuffer(3, this.SlowMA_Buffer);
        // --- Drawing properties for the MA Lines
        // Set the labels for the buy and sell signals
        this.api.SetIndexLabel(0, "BuySignal");
        this.api.SetIndexLabel(1, "SellSignal");
        // Set the labels for the MA lines
        this.api.SetIndexLabel(2, "FastMA");
        this.api.SetIndexLabel(3, "SlowMA");
        // Set the drawing styles for the buy and sell signals
        this.api.SetIndexStyle(0, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TDrawStyle.SYMBOL, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPenStyle.SOLID, 2, "#00ff00"); // Lime
        this.api.SetIndexSymbol(0, 233, 0, -10); // Up arrow
        this.api.SetIndexStyle(1, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TDrawStyle.SYMBOL, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPenStyle.SOLID, 2, "#ff0000"); // Red
        this.api.SetIndexSymbol(1, 234, 0, 10); // Down arrow
        // Set the drawing styles for the MA lines
        this.api.SetIndexStyle(2, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TDrawStyle.LINE, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPenStyle.SOLID, 1, "#ffff00"); // clrYellow
        this.api.SetIndexStyle(3, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TDrawStyle.LINE, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPenStyle.SOLID, 1, "#00ff00"); // clrGreen
        this.api.SetEmptyValue(0);
        // --- General settings
        // Set the indicator name
        this.api.IndicatorShortName("Simple Moving Average Crossover");
        // Set the output window to the chart window
        this.api.SetOutputWindow(forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TOutputWindow.CHART_WINDOW);
        // Set the back offset for calculation based on the max of the two periods
        this.api.SetBackOffsetForCalculation(Math.max(this.FastMAPeriod.value, this.SlowMAPeriod.value) + 1);
    }
    //+------------------------------------------------------------------+
    //| Custom indicator iteration function                              |
    //+------------------------------------------------------------------+
    Calculate(index) {
        // --- Skip first bar (original loop starts at i=1)
        if (index === 0)
            return;
        // --- Ensure we have enough bars for calculation
        if (index + Math.max(this.FastMAPeriod.value, this.SlowMAPeriod.value) >= this.api.Bars())
            return;
        // --- Get the previous and current MA values
        let fastMA_prev = this.api.GetMA(index + 1, 0, this.FastMAPeriod.value, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.E_MAType.SMA, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPriceType.CLOSE);
        let slowMA_prev = this.api.GetMA(index + 1, 0, this.SlowMAPeriod.value, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.E_MAType.SMA, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPriceType.CLOSE);
        let fastMA_curr = this.api.GetMA(index, 0, this.FastMAPeriod.value, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.E_MAType.SMA, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPriceType.CLOSE);
        let slowMA_curr = this.api.GetMA(index, 0, this.SlowMAPeriod.value, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.E_MAType.SMA, forex_tester_custom_indicator_api__WEBPACK_IMPORTED_MODULE_0__.TPriceType.CLOSE);
        // --- Set the MA values to the buffers
        this.FastMA_Buffer.setValue(index, fastMA_curr);
        this.SlowMA_Buffer.setValue(index, slowMA_curr);
        // --- Detect crossovers
        // --- If previous fast MA is less than previous slow MA and current fast MA is greater than current slow MA, set buy signal
        if (fastMA_prev < slowMA_prev && fastMA_curr > slowMA_curr) {
            this.BuyBuffer.setValue(index, this.api.Low(index) - (this.api.Point() * 10));
            this.SellBuffer.setValue(index, 0);
        }
        // --- If previous fast MA is greater than previous slow MA and current fast MA is less than current slow MA, set sell signal
        else if (fastMA_prev > slowMA_prev && fastMA_curr < slowMA_curr) {
            this.SellBuffer.setValue(index, this.api.High(index) + (this.api.Point() * 10));
            this.BuyBuffer.setValue(index, 0);
        }
        // --- If no crossover, set both buffers to 0
        else {
            this.BuyBuffer.setValue(index, 0);
            this.SellBuffer.setValue(index, 0);
        }
    }
    // -------------------------------------------------------------------------------------------------------------------- /
    // This function is called every time the parameters are changed, even on adding indicator to the chart
    // -------------------------------------------------------------------------------------------------------------------- /
    OnParamsChange() {
        // Set the back offset for calculation based on the max of the two periods
        this.api.SetBackOffsetForCalculation(Math.max(this.FastMAPeriod.value, this.SlowMAPeriod.value) + 1);
        this.lastFirstBarTime = -1;
        this.lastLastBarTime = -1;
    }
    // -------------------------------------------------------------------------------------------------------------------- /
    // This function is called when the indicator is hidden (every time you click 👁)
    // -------------------------------------------------------------------------------------------------------------------- /
    OnHide() {
        this.lastFirstBarTime = -1;
        this.lastLastBarTime = -1;
    }
}
/* harmony default export */ const src_r_SimpleMACrossover = (r_SimpleMACrossover);

const __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
