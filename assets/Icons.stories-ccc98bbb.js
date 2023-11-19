import{a as h}from"./jsx-runtime-03b4ddbf.js";import{u as W,I as P}from"./mdi-685d5538.js";import{r as y,R as S}from"./index-76fb7be0.js";import{i as C,T as G}from"./hooks.esm-cc7a556e.js";import{a as H}from"./Tooltip-53dd1a2c.js";import{B as z}from"./Box-f074bc4b.js";import{S as T}from"./Svg-cfd7f95e.js";import"./_commonjsHelpers-de833af9.js";import"./component-92c13614.js";import"./extends-98964cd2.js";import"./index-45a327ec.js";import"./index-421204d3.js";import"./index-296a96c6.js";import"./index-77dbc890.js";import"./index-add592e3.js";import"./index-f8c8b8ff.js";import"./index-01bbf444.js";import"./index-1a2315aa.js";import"./index-251d008c.js";import"./index-c6da0816.js";import"./index-207695d4.js";import"./Text-561f173c.js";import"./ConditionalWrapper-8865b2c1.js";function X(i){return(...s)=>{i(...s).catch(e=>{typeof e=="string"?console.log(`Error thrown asynchronously ${e}`):e instanceof Error?console.log(`Error thrown asynchronously ${e.message}`):console.log("Error thrown asynchronously")})}}var N=globalThis&&globalThis.__awaiter||function(i,s,e,n){function t(o){return o instanceof e?o:new e(function(r){r(o)})}return new(e||(e=Promise))(function(o,r){function a(d){try{c(n.next(d))}catch(u){r(u)}}function l(d){try{c(n.throw(d))}catch(u){r(u)}}function c(d){d.done?o(d.value):t(d.value).then(a,l)}c((n=n.apply(i,s||[])).next())})},Y=globalThis&&globalThis.__rest||function(i,s){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&s.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(i);t<n.length;t++)s.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(i,n[t])&&(e[n[t]]=i[n[t]]);return e};const J=i=>N(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(i)}),Q=i=>{var{css:s,content:e,copy:n,children:t}=i,o=Y(i,["css","content","copy","children"]);const[r,{setTrue:a,setFalse:l}]=C(!1),[c,{setTrue:d,setFalse:u}]=C(!1);G(()=>{l(),u()},c?2e3:null);const p=f=>{f?a():c||l()};return h(H,Object.assign({open:r,content:c?`Copied ${n||e} to clipboard`:e,onOpenChange:p},o,{children:h(z,{css:s,onClick:X(f=>N(void 0,void 0,void 0,function*(){f.stopPropagation(),f.nativeEvent.stopImmediatePropagation(),yield J(n??`${e}`),d(),a()})),children:t})}))};/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},E.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},O.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function g(i,s,e){var n,t=(n=e.initialDeps)!=null?n:[],o;return function(){var r;e.key&&e.debug!=null&&e.debug()&&(r=Date.now());var a=i(),l=a.length!==t.length||a.some(function(v,m){return t[m]!==v});if(!l)return o;t=a;var c;if(e.key&&e.debug!=null&&e.debug()&&(c=Date.now()),o=s.apply(void 0,a),e.key&&e.debug!=null&&e.debug()){var d=Math.round((Date.now()-r)*100)/100,u=Math.round((Date.now()-c)*100)/100,p=u/16,f=function(m,x){for(m=String(m);m.length<x;)m=" "+m;return m};console.info("%c⏱ "+f(u,5)+" /"+f(d,5)+" ms",`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(`+Math.max(0,Math.min(120-120*p,120))+"deg 100% 31%);",e==null?void 0:e.key)}return e==null||e.onChange==null||e.onChange(o),o}}function w(i,s){if(i===void 0)throw new Error("Unexpected undefined"+(s?": "+s:""));return i}var Z=function(s,e){return Math.abs(s-e)<1};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ee=function(s){return s},ne=function(s){for(var e=Math.max(s.startIndex-s.overscan,0),n=Math.min(s.endIndex+s.overscan,s.count-1),t=[],o=e;o<=n;o++)t.push(o);return t},te=function(s,e){var n=s.scrollElement;if(n){var t=function(a){var l=a.width,c=a.height;e({width:Math.round(l),height:Math.round(c)})};t(n.getBoundingClientRect());var o=new ResizeObserver(function(r){var a=r[0];if(a!=null&&a.borderBoxSize){var l=a.borderBoxSize[0];if(l){t({width:l.inlineSize,height:l.blockSize});return}}t(n.getBoundingClientRect())});return o.observe(n,{box:"border-box"}),function(){o.unobserve(n)}}},oe=function(s,e){var n=s.scrollElement;if(n){var t=function(){e(n[s.options.horizontal?"scrollLeft":"scrollTop"])};return t(),n.addEventListener("scroll",t,{passive:!0}),function(){n.removeEventListener("scroll",t)}}},re=function(s,e,n){if(e!=null&&e.borderBoxSize){var t=e.borderBoxSize[0];if(t){var o=Math.round(t[n.options.horizontal?"inlineSize":"blockSize"]);return o}}return Math.round(s.getBoundingClientRect()[n.options.horizontal?"width":"height"])},ie=function(s,e,n){var t,o,r=e.adjustments,a=r===void 0?0:r,l=e.behavior,c=s+a;(t=n.scrollElement)==null||t.scrollTo==null||t.scrollTo((o={},o[n.options.horizontal?"left":"top"]=c,o.behavior=l,o))},se=function(s){var e=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=function(){var n=null,t=function(){return n||(typeof ResizeObserver<"u"?n=new ResizeObserver(function(r){r.forEach(function(a){e._measureElement(a.target,a)})}):null)};return{disconnect:function(){var r;return(r=t())==null?void 0:r.disconnect()},observe:function(r){var a;return(a=t())==null?void 0:a.observe(r,{box:"border-box"})},unobserve:function(r){var a;return(a=t())==null?void 0:a.unobserve(r)}}}(),this.range={startIndex:0,endIndex:0},this.setOptions=function(n){Object.entries(n).forEach(function(t){var o=t[0],r=t[1];typeof r>"u"&&delete n[o]}),e.options=O({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:ee,rangeExtractor:ne,onChange:function(){},measureElement:re,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},n)},this.notify=function(){e.options.onChange==null||e.options.onChange(e)},this.cleanup=function(){e.unsubs.filter(Boolean).forEach(function(n){return n()}),e.unsubs=[],e.scrollElement=null},this._didMount=function(){return e.measureElementCache.forEach(e.observer.observe),function(){e.observer.disconnect(),e.cleanup()}},this._willUpdate=function(){var n=e.options.getScrollElement();e.scrollElement!==n&&(e.cleanup(),e.scrollElement=n,e._scrollToOffset(e.scrollOffset,{adjustments:void 0,behavior:void 0}),e.unsubs.push(e.options.observeElementRect(e,function(t){var o=e.scrollRect;e.scrollRect=t,(e.options.horizontal?t.width!==o.width:t.height!==o.height)&&e.maybeNotify()})),e.unsubs.push(e.options.observeElementOffset(e,function(t){e.scrollAdjustments=0,e.scrollOffset!==t&&(e.isScrollingTimeoutId!==null&&(clearTimeout(e.isScrollingTimeoutId),e.isScrollingTimeoutId=null),e.isScrolling=!0,e.scrollDirection=e.scrollOffset<t?"forward":"backward",e.scrollOffset=t,e.maybeNotify(),e.isScrollingTimeoutId=setTimeout(function(){e.isScrollingTimeoutId=null,e.isScrolling=!1,e.scrollDirection=null,e.maybeNotify()},e.options.scrollingDelay))})))},this.getSize=function(){return e.scrollRect[e.options.horizontal?"width":"height"]},this.memoOptions=g(function(){return[e.options.count,e.options.paddingStart,e.options.scrollMargin,e.options.getItemKey]},function(n,t,o,r){return e.pendingMeasuredCacheIndexes=[],{count:n,paddingStart:t,scrollMargin:o,getItemKey:r}},{key:!1}),this.getFurthestMeasurement=function(n,t){for(var o=new Map,r=new Map,a=t-1;a>=0;a--){var l=n[a];if(!o.has(l.lane)){var c=r.get(l.lane);if(c==null||l.end>c.end?r.set(l.lane,l):l.end<c.end&&o.set(l.lane,!0),o.size===e.options.lanes)break}}return r.size===e.options.lanes?Array.from(r.values()).sort(function(d,u){return d.end-u.end})[0]:void 0},this.getMeasurements=g(function(){return[e.memoOptions(),e.itemSizeCache]},function(n,t){var o=n.count,r=n.paddingStart,a=n.scrollMargin,l=n.getItemKey,c=e.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,e.pendingMeasuredCacheIndexes):0;e.pendingMeasuredCacheIndexes=[];for(var d=e.measurementsCache.slice(0,c),u=c;u<o;u++){var p=l(u),f=e.options.lanes===1?d[u-1]:e.getFurthestMeasurement(d,u),v=f?f.end:r+a,m=t.get(p),x=typeof m=="number"?m:e.options.estimateSize(u),q=v+x,U=f?f.lane:u%e.options.lanes;d[u]={index:u,start:v,size:x,end:q,key:p,lane:U}}return e.measurementsCache=d,d},{key:!1,debug:function(){return e.options.debug}}),this.calculateRange=g(function(){return[e.getMeasurements(),e.getSize(),e.scrollOffset]},function(n,t,o){return e.range=ae({measurements:n,outerSize:t,scrollOffset:o})},{key:!1,debug:function(){return e.options.debug}}),this.maybeNotify=g(function(){var n=e.calculateRange();return[n.startIndex,n.endIndex,e.isScrolling]},function(){e.notify()},{key:!1,debug:function(){return e.options.debug},initialDeps:[this.range.startIndex,this.range.endIndex,this.isScrolling]}),this.getIndexes=g(function(){return[e.options.rangeExtractor,e.calculateRange(),e.options.overscan,e.options.count]},function(n,t,o,r){return n(O({},t,{overscan:o,count:r}))},{key:!1,debug:function(){return e.options.debug}}),this.indexFromElement=function(n){var t=e.options.indexAttribute,o=n.getAttribute(t);return o?parseInt(o,10):(console.warn("Missing attribute name '"+t+"={index}' on measured element."),-1)},this._measureElement=function(n,t){var o,r=e.indexFromElement(n),a=e.measurementsCache[r];if(a){var l=e.measureElementCache.get(a.key);if(!n.isConnected){e.observer.unobserve(n),n===l&&e.measureElementCache.delete(a.key);return}l!==n&&(l&&e.observer.unobserve(l),e.observer.observe(n),e.measureElementCache.set(a.key,n));var c=e.options.measureElement(n,t,e),d=(o=e.itemSizeCache.get(a.key))!=null?o:a.size,u=c-d;u!==0&&(a.start<e.scrollOffset&&e._scrollToOffset(e.scrollOffset,{adjustments:e.scrollAdjustments+=u,behavior:void 0}),e.pendingMeasuredCacheIndexes.push(r),e.itemSizeCache=new Map(e.itemSizeCache.set(a.key,c)),e.notify())}},this.measureElement=function(n){n&&e._measureElement(n,void 0)},this.getVirtualItems=g(function(){return[e.getIndexes(),e.getMeasurements()]},function(n,t){for(var o=[],r=0,a=n.length;r<a;r++){var l=n[r],c=t[l];o.push(c)}return o},{key:!1,debug:function(){return e.options.debug}}),this.getVirtualItemForOffset=function(n){var t=e.getMeasurements();return w(t[K(0,t.length-1,function(o){return w(t[o]).start},n)])},this.getOffsetForAlignment=function(n,t){var o=e.getSize();t==="auto"&&(n<=e.scrollOffset?t="start":n>=e.scrollOffset+o?t="end":t="start"),t==="start"?n=n:t==="end"?n=n-o:t==="center"&&(n=n-o/2);var r=e.options.horizontal?"scrollWidth":"scrollHeight",a=e.scrollElement?"document"in e.scrollElement?e.scrollElement.document.documentElement[r]:e.scrollElement[r]:0,l=a-e.getSize();return Math.max(Math.min(l,n),0)},this.getOffsetForIndex=function(n,t){t===void 0&&(t="auto"),n=Math.max(0,Math.min(n,e.options.count-1));var o=w(e.getMeasurements()[n]);if(t==="auto")if(o.end>=e.scrollOffset+e.getSize()-e.options.scrollPaddingEnd)t="end";else if(o.start<=e.scrollOffset+e.options.scrollPaddingStart)t="start";else return[e.scrollOffset,t];var r=t==="end"?o.end+e.options.scrollPaddingEnd:o.start-e.options.scrollPaddingStart;return[e.getOffsetForAlignment(r,t),t]},this.isDynamicMode=function(){return e.measureElementCache.size>0},this.cancelScrollToIndex=function(){e.scrollToIndexTimeoutId!==null&&(clearTimeout(e.scrollToIndexTimeoutId),e.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(n,t){var o=t===void 0?{}:t,r=o.align,a=r===void 0?"start":r,l=o.behavior;e.cancelScrollToIndex(),l==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.getOffsetForAlignment(n,a),{adjustments:void 0,behavior:l})},this.scrollToIndex=function(n,t){var o=t===void 0?{}:t,r=o.align,a=r===void 0?"auto":r,l=o.behavior;n=Math.max(0,Math.min(n,e.options.count-1)),e.cancelScrollToIndex(),l==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var c=e.getOffsetForIndex(n,a),d=c[0],u=c[1];e._scrollToOffset(d,{adjustments:void 0,behavior:l}),l!=="smooth"&&e.isDynamicMode()&&(e.scrollToIndexTimeoutId=setTimeout(function(){e.scrollToIndexTimeoutId=null;var p=e.measureElementCache.has(e.options.getItemKey(n));if(p){var f=e.getOffsetForIndex(n,u),v=f[0];Z(v,e.scrollOffset)||e.scrollToIndex(n,{align:u,behavior:l})}else e.scrollToIndex(n,{align:u,behavior:l})}))},this.scrollBy=function(n,t){var o=t===void 0?{}:t,r=o.behavior;e.cancelScrollToIndex(),r==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.scrollOffset+n,{adjustments:void 0,behavior:r})},this.getTotalSize=function(){var n;return(((n=e.getMeasurements()[e.options.count-1])==null?void 0:n.end)||e.options.paddingStart)-e.options.scrollMargin+e.options.paddingEnd},this._scrollToOffset=function(n,t){var o=t.adjustments,r=t.behavior;e.options.scrollToFn(n,{behavior:r,adjustments:o},e)},this.measure=function(){e.itemSizeCache=new Map,e.notify()},this.setOptions(s),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(function(n){e.itemSizeCache.set(n.key,n.size)}),this.maybeNotify()},K=function(s,e,n,t){for(;s<=e;){var o=(s+e)/2|0,r=n(o);if(r<t)s=o+1;else if(r>t)e=o-1;else return o}return s>0?s-1:0};function ae(i){for(var s=i.measurements,e=i.outerSize,n=i.scrollOffset,t=s.length-1,o=function(c){return s[c].start},r=K(0,t,o,n),a=r;a<t&&s[a].end<n+e;)a++;return{startIndex:r,endIndex:a}}/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var le=typeof document<"u"?y.useLayoutEffect:y.useEffect;function ce(i){var s=y.useReducer(function(){return{}},{})[1],e=E({},i,{onChange:function(r){s(),i.onChange==null||i.onChange(r)}}),n=y.useState(function(){return new se(e)}),t=n[0];return t.setOptions(e),y.useEffect(function(){return t._didMount()},[]),le(function(){return t._willUpdate()}),t}function R(i){return ce(E({observeElementRect:te,observeElementOffset:oe,scrollToFn:ie},i))}const ke={title:"Components/Icons",component:T,parameters:{docs:{description:{component:"Use `@mdi/js` for icons. \n        \nImport the required path and uses it as a `path` prop in an `Svg` component. \nAll Icons are shown below but you can get a searchable version at <https://materialdesignicons.com/>. \n\nWe recommend setting up a project Icons file to allow easy changing of all semantically equivalent icons. \nOnly the imported paths should be included in your final bundle through tree-shaking."}}}},I=i=>h(T,{...i,path:W}),L=Object.keys(P),j=L.length,M=56,ue=({name:i})=>{const s=P[i];return h(Q,{css:{p:"$4"},content:i,multiline:!0,copy:`import { ${i} } from '@mdi/js'
export const ${i.substring(3)}: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={${i}} {...props} />
)`,children:h(T,{path:s})})};function b(){const i=S.useRef(null),[s,e]=S.useState({rows:0,columns:0}),n=R({count:s.rows,getScrollElement:()=>i.current,estimateSize:()=>M,overscan:20}),t=R({horizontal:!0,count:s.columns,getScrollElement:()=>i.current,estimateSize:()=>M,overscan:20});return S.useEffect(()=>{const o=i.current,r=o===null?0:Math.floor(o.offsetWidth/M),a=o===null?0:Math.ceil(j/r);e({columns:r,rows:a})},[i.current,e]),h(z,{ref:i,css:{height:"80vh",overflow:"auto"},children:h(z,{css:{margin:"auto",position:"relative"},style:{height:`${n.getTotalSize()}px`,width:`${t.getTotalSize()}px`},children:n.getVirtualItems().map(o=>h(S.Fragment,{children:t.getVirtualItems().map(r=>h(z,{css:{position:"absolute",top:0,left:0},style:{width:`${r.size}px`,height:`${o.size}px`,transform:`translateX(${r.start}px) translateY(${o.start}px)`},children:h(ue,{name:L[Math.min(s.columns*o.index+r.index,j-1)]})},r.index))},o.index))})})}var $,D,k;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:"(args: Omit<React.ComponentProps<typeof Svg>, 'path'>) => <Svg {...args} path={Icons.mdiAccount} />",...(k=(D=I.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var _,F,B,V,A;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`function IconGrid() {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({
    rows: 0,
    columns: 0
  });
  const rowVirtualizer = useVirtualizer({
    count: dimensions.rows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => iconSize,
    overscan: 20
  });
  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: dimensions.columns,
    getScrollElement: () => parentRef.current,
    estimateSize: () => iconSize,
    overscan: 20
  });
  React.useEffect(() => {
    const current = parentRef.current;
    const columns = current === null ? 0 : Math.floor(current.offsetWidth / iconSize);
    const rows = current === null ? 0 : Math.ceil(numberOfIcons / columns);
    setDimensions({
      columns,
      rows
    });
  }, [parentRef.current, setDimensions]);
  return <Box ref={parentRef} css={{
    height: \`80vh\`,
    overflow: 'auto'
  }}>
      <Box css={{
      margin: 'auto',
      position: 'relative'
    }} style={{
      height: \`\${rowVirtualizer.getTotalSize()}px\`,
      width: \`\${columnVirtualizer.getTotalSize()}px\`
    }}>
        {rowVirtualizer.getVirtualItems().map(virtualRow => <React.Fragment key={virtualRow.index}>
            {columnVirtualizer.getVirtualItems().map(virtualColumn => <Box key={virtualColumn.index} css={{
          position: 'absolute',
          top: 0,
          left: 0
        }} style={{
          width: \`\${virtualColumn.size}px\`,
          height: \`\${virtualRow.size}px\`,
          transform: \`translateX(\${virtualColumn.start}px) translateY(\${virtualRow.start}px)\`
        }}>
                <Icon name={keys[Math.min(dimensions.columns * virtualRow.index + virtualColumn.index, numberOfIcons - 1)]} />
              </Box>)}
          </React.Fragment>)}
      </Box>
    </Box>;
}`,...(B=(F=b.parameters)==null?void 0:F.docs)==null?void 0:B.source},description:{story:`All the icons are shown below.

If you can spot the icon you need here then click to copy a the code required e.g..

\`\`\`
import { mdiAccount } from '@mdi/js'

export const Account: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
    <Svg path={mdiAccount} {...props} />
)
\`\`\``,...(A=(V=b.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};const _e=["Default","IconGrid"];export{I as Default,b as IconGrid,_e as __namedExportsOrder,ke as default};
//# sourceMappingURL=Icons.stories-ccc98bbb.js.map
