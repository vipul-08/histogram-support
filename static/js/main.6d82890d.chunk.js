(this["webpackJsonphistogram-support"]=this["webpackJsonphistogram-support"]||[]).push([[0],{167:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(41),o=i.n(r);i(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=i(49),l=i(8),s=i(28),u=i(42),g=i(43),h=i(50),d=i(48),f=i(46),m=i(5),p=i(169),b=i(10),k=i.n(b),C=i(44),v=i.n(C),x=i(45);var S=k.a.react((function(e){var t=e.parentWidth,i=e.arrowStyle,n=e.legendToggle,r=e.legendScale,o=e.legendShape,c=e.uniqueSeriesLabel,l=e.handleLegendClick;return a.a.createElement(v.a,{parentWidth:t,rightOffset:85,isVisible:!0,arrowStyle:i,wrapperClassName:"list-wrapper-prop"},a.a.createElement(x.LegendOrdinal,{scale:r,direction:"row",labelMargin:"0 15px 0 0",className:"samurai-vx-legend",onClick:l,style:{display:"flex",maxWidth:"".concat(t-85,"px"),whiteSpace:"nowrap",overflow:"hidden",marginLeft:"35px",padding:"15px 0",cursor:"pointer"},fill:function(e){var t=e.datum,i=e.text;return n.map((function(e){return String(e)})).includes(i)?"#cecece":r(t)},shape:o,shapeWidth:10,shapeHeight:10,domain:c,labelTransform:function(e){var t=e.scale,i=e.labelFormat;return function(e,n){return{datum:e,index:n,text:void 0===e?"":"".concat(i(e,n)),value:t(e)}}}}))})),y=i(47),A=i(27),w=i(16);var E=function(e){var t=e.fill,i=e.width,n=e.height;return a.a.createElement("div",{className:"samurai-vx-legend-shape",style:{width:i,height:n,backgroundColor:t}})},M=k.a.reactSimple(E),H=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).defaultConfig={margin:{top:70,left:60,bottom:10,right:50},minHeight:240,colors:["rgb(107, 157, 255)","rgb(252, 137, 159)"],tooltipTimeFormat:"%b %d, %H:%M",tooltipTimeFormatWithoutDate:"%H:%M",fontFamily:"Arial",fontColor:"black",axisLabelSize:10,legendBg:"#eee",legendShape:M,hoverlineColor:"black",axesLabelColor:"black",axisStroke:"#eaf0f6",annotation:{stroke:"#535353",strokeWidth:"1",style:{opacity:".5",cursor:"pointer"}},annotationCircle:{color:"#575d6d",activeColor:"#eb5b59",highlightColor:"#62CCA8",shouldHighlight:function(e){return e.ci}},annotationHover:{strokeWidth:"4",style:{opacity:".8",cursor:"pointer"}},annotationActive:{stroke:"yellow"}},e.arrowStyle={height:"20px",width:"20px",backgroundColor:"#f5f5f5"},e.getConfig=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props;return Object(s.a)(Object(s.a)({},e.defaultConfig),t.config)},e.getAxisStyle=k.a.simple((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getConfig();return{hideTicks:!0,hideAxisLine:!0,stroke:i.axisStroke,tickLabelProps:function(n){return{fill:i.tickTextColor||i.fontColor,fontFamily:e.getConfig().tickTextFontFamily||e.getConfig().fontFamily,fontSize:"bottom"===t&&e.shouldXAxisHighlight(n)?1.1*i.axisLabelSize:i.axisLabelSize,fontWeight:"bottom"===t?e.shouldXAxisHighlight(n)?800:300:void 0,dx:"-0.25em",dy:["left","right"].includes(t)?"0.25em":"",textAnchor:"left"===t?"end":"right"===t?"start":"middle"}}}})),e.getTickValues=function(e,t){var i=e.ticks(t),n=i[i.length-1],a=n+(i[1]-i[0]);n<e.domain()[1]&&(i.push(a),e.domain([e.domain()[0],a]));for(var r=t+1,o=i.length,c=[],l=0;l<r;l+=1)c.push(i[Math.ceil(l*o/r)]);return c},e.formatYAxisTick=function(e){if(e<1)return e.toFixed(2);if(e>=1e3){var t=3*Math.floor((e.toFixed(0).length-1)/3);return(e/"1e".concat(t)).toFixed(2).toString().replace(/\.0+$/,"")+["k","M","B","T"][Math.floor(t/3)-1]}return e},e.getSingleChartHeight=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props,i=t.height,n=t.data,a=e.getConfig(),r=a.minHeight;if(!n.histograms.length)return 0;var o=Math.max((i-e.getConfig(t).margin.bottom)/n.histograms.length,r);return o+21},e.getXMax=function(t){return t.width-e.getConfig(t).margin.left-e.getConfig(t).margin.right},e.getYMax=function(t){return e.getSingleChartHeight(t)-e.getConfig(t).margin.top-e.getConfig(t).margin.bottom},e.renderStackedBarGroup=function(t,i){var n=t.map((function(e){var t=Object.keys(e).filter((function(e){return"bucket"!==e})).reduce((function(t,i){return[].concat(Object(l.a)(t),[[i,e[i]]])}),[]);return{bucket:e.bucket,value:t}})),r=function(e){return e.bucket},o=e.bucketScale,s=e.legendScale;return a.a.createElement(m.Group,{className:"vx-bar-group"},n&&n.map((function(t,n){var u=0,g=t.value.map((function(e){return u=e[1]+u,[].concat(Object(l.a)(e),[u])}));return a.a.createElement(m.Group,{key:"bar-group-".concat(n,"-").concat(r(t)),left:o(r(t))},g.map((function(t){var r=Object(c.a)(t,3),l=r[0],u=r[1],g=r[2];return a.a.createElement("rect",{key:"bar-group-bar-".concat(n,"-").concat(u,"-").concat(l),x:0,y:i(g),style:{cursor:"pointer"},onClick:function(){return alert("".concat(l,": ").concat(u))},width:o.bandwidth(),height:e.singleChartHeight-e.marginTop-i(u),fill:s(l)})})))})))},e.renderBarGroup=function(t,i){var n=t,r=function(e){return e.bucket},o=e.bucketScale,c=Object(w.scaleBand)({domain:e.uniqueSeriesLabel.filter((function(e){return Object.keys(t[0]).includes(e)})),padding:.1,rangeRound:[0,e.bucketScale.bandwidth()]}),l=e.legendScale,s=Object.keys(t[0]).filter((function(e){return"bucket"!==e})),u=e.singleChartHeight-e.marginTop;return a.a.createElement(m.Group,{className:"vx-bar-group"},n&&n.map((function(e,t){return a.a.createElement(m.Group,{key:"bar-group-".concat(t,"-").concat(r(e)),left:o(r(e))},s&&s.map((function(t,n){var r=e[t];return a.a.createElement("rect",{key:"bar-group-bar-".concat(n,"-").concat(r,"-").concat(t),x:c(t),y:i(r),style:{cursor:"pointer"},onClick:function(){return alert("".concat(t,": ").concat(r))},width:c.bandwidth(),height:u-i(r),fill:l(t)})})))})))},e.renderSingleAxis=k()((function(t){var i=t.series,n=t.yScale,r=t.tickValues;return i&&[a.a.createElement(f.GridRows,{top:e.marginTop,left:e.marginLeft,scale:n,numTicks:5,width:e.xMax}),a.a.createElement(m.Group,{id:"xyzw",top:e.marginTop,left:e.marginLeft},e.props.isStacked?e.renderStackedBarGroup(i,n):e.renderBarGroup(i,n)),a.a.createElement(A.AxisLeft,Object.assign({top:e.marginTop,left:e.marginLeft,scale:n,numTicks:5,tickFormat:e.formatYAxisTick,tickValues:r},e.getAxisStyle("left"),{labelProps:{fill:e.getConfig().axesLabelColor}})),a.a.createElement(A.AxisBottom,{width:e.props.width,top:e.singleChartHeight,left:e.marginLeft,scale:e.bucketScale,stroke:"#000000",tickStroke:"#000000",hideAxisLine:!0,tickLabelProps:function(){return{fill:"#00000",fontSize:11,textAnchor:"middle"}}})]})),e.renderHistogram=k()((function(t,i,n){return a.a.createElement(m.Group,{id:"abcd",key:"".concat(i,"-xyz"),top:n*i},a.a.createElement(y.Text,{fontSize:14,x:e.getConfig().margin.left,y:e.getConfig().margin.top-15,textAnchor:"start",fill:e.getConfig().fontColor,fontFamily:e.getConfig().fontFamily,fontWeight:"bold"},t.title),e.renderSingleAxis(t))})),e}return Object(g.a)(i,[{key:"componentWillMount",value:function(){this.update()}},{key:"update",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,i=t.data,n=t.titleDimension,a=t.isStacked;if(i){this.marginLeft=this.getConfig(t).margin.left,this.marginRight=this.getConfig(t).margin.right,this.marginTop=this.getConfig(t).margin.top,this.values=i.values,this.marginBottom=this.getConfig(t).margin.bottom,this.singleChartHeight=this.getSingleChartHeight(t),this.uniqueSeriesLabel=i.histograms.reduce((function(e,t){return t.data.reduce((function(t,i){return e.includes(i.title)?t:t.concat(i.title)}),e)}),[]),this.xMax=this.getXMax(t),this.yMax=this.getYMax(t),this.bucketScale=Object(w.scaleBand)({domain:i.buckets,padding:.2}),this.bucketScale.rangeRound([0,this.xMax]),this.legendScale=Object(w.scaleOrdinal)({domain:this.uniqueSeriesLabel,range:this.getConfig(t).colors}),this.numHistograms=i.histograms.length;var r=i.histograms.map((function(i){var r=i.title,o=i.data,c=n?"".concat(n,": ").concat(r):r,s=o.reduce((function(e,i){var n=i.title;return i.buckets.map((function(i,a){return e.length<=a&&(e=[].concat(Object(l.a)(e),[{bucket:t.data.buckets[a]}])),e[a][n]=i,!0})),e}),[]),u=s.reduce((function(e,t){if(a)return[].concat(Object(l.a)(e),[Object.keys(t).filter((function(e){return"bucket"!==e})).reduce((function(e,i){return e+t[i]}),0)]);var i=Object.keys(t).filter((function(e){return"bucket"!==e})).reduce((function(e,i){return[].concat(Object(l.a)(e),[t[i]])}),[]);return[].concat(Object(l.a)(e),Object(l.a)(i))}),[]),g=Object(w.scaleLinear)({domain:[0,Object(p.a)(u)],range:[e.yMax,0]});return{title:c,series:s,yScale:g,tickValues:e.getTickValues(g,5)}}));this.data={buckets:i.buckets,histograms:r}}}},{key:"render",value:function(){var e=this,t=this.props,i=t.width,n=t.height,r=this.getSingleChartHeight(this.props);return a.a.createElement("div",{style:{background:"#fff"}},a.a.createElement("div",{style:{background:"#eee"}},a.a.createElement(S,{parentWidth:i,arrowStyle:this.arrowStyle,legendScale:this.legendScale,legendShape:this.getConfig().legendShape,handleLegendClick:function(){},legendToggle:[],uniqueSeriesLabel:this.uniqueSeriesLabel})),a.a.createElement("div",{className:"charts-wrapper",style:{height:n-78,overflowY:"auto",overflowX:"hidden"}},a.a.createElement("div",{style:{position:"relative",height:r*this.numHistograms}},a.a.createElement("svg",{width:i,height:r*this.numHistograms+this.getConfig().margin.bottom+this.getConfig().margin.top,ref:function(t){e.svg=t}},a.a.createElement("rect",{x:0,y:0,width:i,height:n*this.numHistograms,fill:"white"}),this.data.histograms.map((function(t,i){return e.renderHistogram(t,i,r)}))))))}}]),i}(a.a.PureComponent);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,{width:1e3,height:1e3,data:{values:["Num Konom Queries (Konom Metrics)"],buckets:["2000-3000","3000-4000","4000-5000","5000-6000","6000-7000","7000-8000","8000-9000","9000-10000","10000++"],histograms:[{title:"samurai",data:[{title:"CM Failover Realtime",buckets:[148,72,47,36,26,33,18,12,158]},{title:"CM Page View",buckets:[239,141,85,42,56,43,32,39,217]},{title:"CM Ad Click",buckets:[277,134,85,52,58,32,28,18,89]},{title:"HB Rendered Ad",buckets:[297,154,116,75,52,38,33,24,194]},{title:"HB Provider Response",buckets:[150,100,75,47,25,32,23,13,255]}]},{title:"Sherlock Drop Alert",data:[{title:"HB Rendered Ad",buckets:[174,82,38,39,18,30,14,8,47]},{title:"CM Page View",buckets:[142,66,55,31,25,24,21,22,200]},{title:"CM Ad Click",buckets:[45,21,17,18,6,12,5,6,52]},{title:"HB Provider Response",buckets:[92,43,30,27,41,61,32,28,462]},{title:"HB Publisher Slot Impressions",buckets:[127,67,42,35,16,13,11,11,67]}]},{title:"Publisher_Dashboard",data:[{title:"HB Rendered Ad",buckets:[34,12,12,3,3,3,0,3,21]},{title:"HB Publisher Slot Impressions",buckets:[35,15,8,3,4,3,0,3,20]},{title:"HB Auction Participants",buckets:[2,1,1,1,1,0,0,0,1]},{title:"CXT Url Reporting",buckets:[3,1,0,0,1,0,1,0,0]}]},{title:"DMM",data:[{title:"DMM Auction Participants",buckets:[1058,444,134,79,43,35,24,18,85]},{title:"DMM Rendered Ad",buckets:[1058,444,134,79,43,35,24,18,85]},{title:"HB Rendered Ad",buckets:[53,12,8,9,2,1,3,0,9]},{title:"CM Page View",buckets:[45,15,19,8,5,3,0,1,4]},{title:"CM Ad Click",buckets:[12,2,1,0,2,0,0,0,3]}]},{title:"CM-ADMIN",data:[{title:"CM Page View",buckets:[52,48,62,77,79,88,103,81,2436]}]}]},titleDimension:"Appname",barDimension:"Datasources",config:{colors:["#EA5B5A","#52ACEE","#8A63AF","#62CCA8","#AECB56","#F36B00","#528CA3","#D02382","#FFDAA7","#45E2EA","#C2C4CC","#DB1F00","#6A3A27","#A4180D","#3D9678","#004FAF","#650C7C","#9E7C00","#EA5B5A","#52ACEE","#62CCA8","#E69EA7","#EDBE00"],fontFamily:"Lato",fontColor:"#545a6a",hoverlineColor:"#cccccc",tickTextColor:"#868ea5",axesLabelColor:"#868ea5",minHeight:240},margin:{top:40,right:0,bottom:40,left:0},isStacked:"?isStacked"===window.location.search})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,i){e.exports=i(167)},58:function(e,t,i){}},[[53,1,2]]]);
//# sourceMappingURL=main.6d82890d.chunk.js.map