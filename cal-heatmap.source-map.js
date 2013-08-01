{"version":3,"file":"cal-heatmap.min.js","sources":["cal-heatmap.js"],"names":["mergeRecursive","obj1","obj2","p","constructor","Object","e","CalHeatMap","_init","self","_domains","getDomain","options","start","map","d","getTime","root","d3","select","itemSelector","append","attr","paintOnLoad","paint","nextSelector","on","itemNamespace","event","preventDefault","loadNextDomain","previousSelector","loadPreviousDomain","displayLegend","graphDim","width","domainGutter","cellPadding","afterLoad","loadOnInit","getDatas","data","Date","getSubDomain","length","pop","fill","svg","onComplete","this","allowedDataType","range","cellSize","cellRadius","domainMargin","domain","subDomain","weekStartOnMonday","minDate","maxDate","dataType","verticalOrientation","domainDynamicDimension","label","position","align","offset","x","y","rotate","legend","legendCellSize","legendCellPadding","legendMargin","legendVerticalPosition","legendHorizontalPosition","highlight","itemName","domainLabelFormat","subDomainTitleFormat","empty","filled","subDomainDateFormat","subDomainTextFormat","legendTitleFormat","lower","inner","upper","animationDuration","onClick","afterLoadNextDomain","afterLoadPreviousDomain","afterLoadData","onMaxDomainReached","onMinDomainReached","_domainType","min","name","level","row","column","Math","floor","getMinutes","format","date","connector","extractUnit","hour","getEndOfMonth","getDate","getHours","getWeekDay","formatHour","time","getFullYear","getDayOfYear","day","getWeekNumber","getMonth","week","month","year","type","x_day","_completed","height","NAVIGATE_LEFT","NAVIGATE_RIGHT","_maxDomainReached","_minDomainReached","domainPosition","DomainPosition","navigationDir","getDomainPosition","index","axis","domainDim","tmp","pushPosition","enteringDomainDim","exitingDomainDim","getPosition","shiftRight","getLast","unshiftPosition","shiftLeft","radius","selection","domainRotate","s","w","domainHorizontalLabelWidth","verticalDomainLabel","domainVerticalLabelHeight","max","outer","h","domainSvg","selectAll","enter","i","classname","getDay","subDomainSvgGroup","rect","getHighlightClassName","positionSubDomainX","positionSubDomainY","call","text","formatDate","transition","duration","tempWidth","tempHeight","exit","remove","init","settings","validateSelector","selector","Element","hasOwnProperty","substring","console","log","indexOf","Array","isArray","splice","k","push","prototype","itemNb","shift","reached","formatNumber","f","nextDomainStartTimestamp","getNextDomain","maxDomainIsReached","parent","minDomainIsReached","previousDomainStartTimestamp","getPreviousDomain","unshift","datetimestamp","insert","legendWidth","legendItem","delay","down","up","display","each","domainUnit","subDomainUnit","htmlClass","count","dateIsEqual","isNow","date_a","date_b","getWeekDomain","weekStart","setDate","endDate","stop","mondays","sundays","getYearDomain","years","getMinuteDomain","minutes","getHourDomain","hours","getDayDomain","parseInt","days","getMonthDomain","setMonth","months","computeDaySubDomainSize","lastDayOfMonth","computeMinSubDomainSize","computeHourSubDomainSize","endOfMonth","computeWeekSubDomainSize","endWeekNb","startWeekNb","n","isNaN","total","datas","response","parseDatas","source","startDate","callback","json","parseURI","csv","tsv","stats","str","replace","toISOString","next","previous","getSVG","styles",".graph",".graph-rect","rect.highlight","rect.now","text.highlight","text.now",".domain-background",".graph-label",".subdomain-text",".qi","j","whitelistStyles","filterStyles","attribute","property","value","getElement","element","dom","window","cs","getComputedStyle","item","getPropertyValue","css","currentStyle","string","style","l","XMLSerializer","serializeToString","positions","dim","String","formatted","prop","arguments","regexp","RegExp","define","amd"],"mappings":"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"}