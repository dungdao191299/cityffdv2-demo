import{k as me,p as At,s as Ye,j as It,v as fn,x as gn,l as q,m as et,a2 as zn,a3 as Nn,o as R,c as N,a as I,b as D,u as M,w as Z,d as ae,t as F,i as j,h as Ae,a4 as pn,P as Gn,W as Tt,R as hn,C as mn,O as gt,D as pt,_ as Ft,M as Hn,e as Wn,F as Ne,r as yn,n as Xn,Q as jn,X as Yn,Y as qn,a5 as rt,a0 as Kn,I as Zn,V as Qn}from"./index-CgfEsQ3M.js";import{r as Jn,l as er,m as wn,s as tr,b as nr,u as rr,a as ir,_ as Ee,M as it}from"./mapbox-gl-geocoder-DM874Y6j.js";import{M as Ot,P as ot,V as we,S as or,C as sr,a as ar,m as lr,i as ur,n as cr,o as mt,k as xt,e as dr,B as Mt,f as fr,W as gr,D as Ut,R as zt,c as pr,L as st,d as bn,H as hr,p as mr,l as yr,w as wr}from"./gpuCheck-BoYOkaBP.js";import{z as br}from"./archive-Dz16c6AW.js";import{d as vr}from"./download-NHVUrqvB.js";import{m as Ce,c as Nt,B as xr,Q as yt,a as Mr,s as _r,M as vn,b as $r,d as dt,C as ye,L as be,e as kr,f as Sr,A as Br,g as Pr,h as xn,i as Mn,G as Cr,P as Ar,j as Ir,r as Tr,p as Fr,k as Lr,l as Lt,n as Je,o as Gt,v as Er,V as tt,q as Rr,t as Dr,u as _n,w as Vr,x as $n,y as Or,z as Ur,D as Ht,E as zr,F as Nr,H as Wt,I as Gr,J as Hr,K as kn,S as Xt,N as Sn,O as jt,R as wt,T as Bn,U as Wr,W as Xr,X as Yt,Y as Pn,Z as jr,_ as Yr,$ as qr,a0 as Kr,a1 as Zr,a2 as Qr,a3 as qt,a4 as Kt,a5 as Zt,a6 as Jr,a7 as ei}from"./volumeSource-D3hXq2gK.js";import{M as bt}from"./mapbox-gl-draw-CcPc8UEO.js";import{D as Cn,d as ti,a as ni,S as ri}from"./drawShapes-Do6PP3Td.js";import{a as ft}from"./projection-CjDDR_2P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./orient2d-DArCjZZA.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";const $e="flume-detailed-buildings",ke="flume-region-domain",at="flume-main-domain";function _t(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer($e)&&n.removeLayer($e),n.getSource($e)&&n.removeSource($e);return}n.getSource($e)?n.getSource($e).setData(e):n.addSource($e,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer($e)||n.addLayer({id:$e,type:"fill-extrusion",source:$e,minzoom:0,paint:{"fill-extrusion-color":Ce().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function ii(n,e){if(!e){n.getLayer(at)&&n.removeLayer(at),n.getLayer(ke)&&n.removeLayer(ke),n.getSource(ke)&&n.removeSource(ke);return}let t;e.mainDomain?t=[{...e.polygon,properties:{role:"outer"}},{...e.mainDomain.polygon,properties:{role:"main"}}]:t=[{...e.polygon,properties:{role:"main"}}];const r={type:"FeatureCollection",features:t};n.getSource(ke)?n.getSource(ke).setData(r):(n.addSource(ke,{type:"geojson",data:r}),n.addLayer({id:ke,type:"line",source:ke,filter:["==",["get","role"],"outer"],paint:{"line-color":Ce().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),n.getLayer(at)||n.addLayer({id:at,type:"line",source:ke,filter:["==",["get","role"],"main"],paint:{"line-color":Ce().mainArea,"line-width":3}})}const Qt=["draw.create","draw.update","draw.delete"];function oi({getMap:n,ready:e,onChange:t,accessToken:r}){const i=It({source:"concordia",bufferPercent:xr*100,shape:"polygon",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let s=null,o=!1,d=null,c=0,a=null;function p(P=!1){c++,d==null||d.abort(),P||(a=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function h(){const P=n();!P||!e.value||(_t(P,a==null?void 0:a.preview),ii(P,i.region??(a==null?void 0:a.area)??null))}function l(){return(a==null?void 0:a.preview)??null}function m(P){const B=!i.region&&!i.snapshot;p(B),i.error="";try{i.region=Ye(Nt(P))}catch(A){i.region=null,i.error=A.message}h()}function g(P){var E;if(o||!s)return;const B=(E=P.features)==null?void 0:E.at(-1);if(P.type==="draw.create"&&B)for(const H of s.getAll().features)H.id!==B.id&&s.delete(H.id);const A=s.getAll().features.find(H=>H.geometry.type==="Polygon");A?(m(A),s.deleteAll()):(p(),i.region=null,h()),i.drawing=!1}function u(P){i.drawing=ni.has(P.mode)}function f(){const P=n();if(!P||!e.value)throw new Error("Wait for the map to load.");if(!s){const B={...bt.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};s=new bt({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...bt.modes,...ri,simple_select:B},styles:ti(Ce().mainArea,Ce().drawFillOpacity)}),P.addControl(s,"bottom-left");for(const A of Qt)P.on(A,g);P.on("draw.modechange",u)}return s}function y(){const P=n();if(!(!s||!P)){for(const B of Qt)P.off(B,g);P.off("draw.modechange",u),P.removeControl(s),s=null,i.drawing=!1}}function _(){if(!i.loading)try{const P=f();n().stop();const B=!i.region&&!i.snapshot;p(B),i.region=null,P.deleteAll(),h();const A=Cn.find(H=>H.value===i.shape);let E=A==null?void 0:A.mode;E==null&&(E="draw_polygon"),P.changeMode(E),i.drawing=!0,i.error=""}catch(P){i.error=P.message}}function w(){s&&s.changeMode("simple_select"),i.drawing=!1}function v(){var P;(P=n())==null||P.stop(),s==null||s.deleteAll(),s==null||s.changeMode("simple_select"),i.drawing=!1,p(),i.region=null,i.error="",h()}async function $(P){const B=new AbortController,A=c;d=B,i.loading=!0,i.progress=0,i.error="";const E=()=>o||B.signal.aborted||A!==c;try{return await P({signal:B.signal,epoch:A,isStale:E})}catch(H){return B.abort(),!o&&A===c&&H.name!=="AbortError"&&(i.error=H.message),null}finally{d===B&&(d=null,o||(i.loading=!1))}}async function b(P,B,{signal:A,epoch:E,isStale:H}){if(A.throwIfAborted(),(a==null?void 0:a.source)===B){const[Ie,O,U,W]=P.bounds,G=a.area.bounds;if(Ie>=G[0]&&O>=G[1]&&U<=G[2]&&W<=G[3])return a.tiles}const ue=n();let V="city-concordia";B==="osm"&&(V="composite");let re=Jn({map:ue,sourceId:V,source:B,bounds:P.bounds});if(re==null&&(re=await er({sourceConfig:ue.getStyle().sources[V],source:B,bounds:P.bounds,accessToken:r,signal:A,paddingTiles:1,onProgress:Ie=>{E===c&&(i.progress=Ie)}})),H())throw new DOMException("Cancelled","AbortError");const ve=dt(re.features);return a={source:B,area:P,tiles:re,preview:ve},i.loadedArea=Ye({source:B,bounds:[...P.bounds],extentM:[...P.extentM],count:ve.features.length,fromMap:!!re.fromMap}),h(),re}function x(P){var H;const B=n(),A=B.getCanvas().clientWidth;(H=B.resize)==null||H.call(B);let E=32;A>=640&&(E={top:40,bottom:40,left:Math.min(320,A*.35),right:40}),B.fitBounds([P.bounds.slice(0,2),P.bounds.slice(2,4)],{padding:E,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function S(){if(i.loading||o)return null;const P=n();if(!P||!e.value)return i.error="Wait for the map to load.",null;const B=i.source;return $(async A=>{const E=yt/2,H=P.getCenter().wrap().toArray(),ue=ft(H)([-E,-E]),V=Mr(ue,ft(ue)([yt,yt]));return x(V),await b(V,B,A),A.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function k(){if(i.loading||o)return null;!i.region&&(a==null?void 0:a.source)===i.source&&m(a.area.polygon);const P=n(),B=i.region,A=i.source;return!P||!e.value||!B?(i.error="Draw and finish a valid polygon first.",null):$(async E=>{const H=Nt(B.selection??B.polygon);let ue=H,V,ne;for(let U=0;U<4;U++){if(ne=await b(ue,A,E),E.isStale())return null;V=_r(ne.features,H);const[W,G,K,ie]=V.bounds,le=ne.coverageBounds,Q=1e-8;if(W>le[0]+Q&&G>le[1]+Q&&K<le[2]-Q&&ie<le[3]-Q||!V.buildings.features.length)break;if(U===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");ue=V}const re=Number(i.bufferPercent)||0,Ie=Math.min(Math.max(re,0),vn*100)/100;V=$r(V,Ie),V.source=A,V.dataZoom=ne.zoom,V.tileCount=ne.tileCount,V.surroundings=dt(V.surroundings.features),V.warnings=V.warnings.filter(U=>!U.startsWith("Loaded map tiles only"));let O="Detailed tiles downloaded at zoom ";return ne.fromMap&&(O="Buildings read from map tiles already loaded at zoom "),V.warnings.push(O+ne.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(V.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=Ye(V),i.region=Ye({origin:V.origin,bounds:V.bounds,extentM:V.extentM,polygon:V.polygon,selection:V.selection,mainDomain:V.mainDomain,buffer:V.buffer}),h(),x(V),t==null||t(),V})}function C(){d==null||d.abort(),y()}function T(){h(),f()}function L(){o=!0,c++,d==null||d.abort(),y()}return me(()=>i.source,()=>{p(),h(),i.error=""}),At(L),{state:i,startSelection:_,stopSelection:w,clearSelection:v,setSelection:m,captureRegion:k,loadBuildings:S,getPreview:l,restore:T,beforeStyleChange:C}}const An=14,Jt=128,en=Math.round(kr/be),si=(n,e,t)=>-1e4+(n*65536+e*256+t)*.1;function ai(n,e){const t=2**An,r=e*Math.PI/180,i=(n+180)/360*t,o=(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*t;return[i,o]}async function li(n,e,t,r){const i=`https://api.mapbox.com/v4/mapbox.mapbox-terrain-dem-v1/${An}/${n}/${e}@2x.pngraw?access_token=${encodeURIComponent(t)}`,s=await fetch(i,{signal:r});if(!s.ok)throw new Error(`Terrain data request failed (HTTP ${s.status}).`);const o=await createImageBitmap(await s.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),c=new OffscreenCanvas(o.width,o.height).getContext("2d",{willReadFrequently:!0});c.drawImage(o,0,0);const{data:a}=c.getImageData(0,0,o.width,o.height),p=new Float32Array(o.width*o.height);for(let h=0;h<p.length;h++)p[h]=si(a[4*h],a[4*h+1],a[4*h+2]);return{heights:p,size:o.width}}async function ui(n,e,t){const r=ft(n.origin),i=n.nx*n.ny,s=new Float64Array(i*2);let o=1/0,d=1/0,c=-1/0,a=-1/0;for(let w=0;w<n.ny;w++)for(let v=0;v<n.nx;v++){const[$,b]=ai(...r([(v+.5)*ye,(w+.5)*ye])),x=w*n.nx+v;s[2*x]=$,s[2*x+1]=b,o=Math.min(o,$),d=Math.min(d,b),c=Math.max(c,$),a=Math.max(a,b)}const p=2/Jt,h=[];for(let w=Math.floor(d-p);w<=Math.floor(a+p);w++)for(let v=Math.floor(o-p);v<=Math.floor(c+p);v++)h.push([v,w]);const l=new Map;await Promise.all(h.map(async([w,v])=>{const $=await li(w,v,e,t);l.set(`${w}/${v}`,$)}));const g=l.values().next().value.size,u=(w,v)=>{const $=Math.floor(w/g),b=Math.floor(v/g);return l.get(`${$}/${b}`).heights[(v-b*g)*g+(w-$*g)]},f=(w,v)=>{const $=w-.5,b=v-.5,x=Math.floor($),S=Math.floor(b),k=$-x,C=b-S,T=u(x,S)*(1-k)+u(x+1,S)*k,L=u(x,S+1)*(1-k)+u(x+1,S+1)*k;return T*(1-C)+L*C},y=g/Jt,_=new Float32Array(i);for(let w=0;w<i;w++){const v=s[2*w]*g/y,$=s[2*w+1]*g/y,b=Math.floor(v),x=Math.floor($),S=v-b,k=$-x,C=b*y,T=(b+1)*y,L=x*y,P=(x+1)*y,B=f(C,L)*(1-S)+f(T,L)*S,A=f(C,P)*(1-S)+f(T,P)*S;_[w]=B*(1-k)+A*k}return _}function ci(n,e){let t=1/0,r=-1/0;for(const d of e)t=Math.min(t,d),r=Math.max(r,d);const i=new Float32Array(n.layers.length),s=new Float32Array(n.layers.length);let o=0;for(let d=0;d<i.length;d++)s[d]=Math.min(en,Math.round((e[d]-t)/be)),i[d]=Math.min(en,s[d]+n.layers[d]),o=Math.max(o,i[d]);return{...n,layers:i,groundLayers:s,statistics:{...n.statistics,maximumHeightM:o*be},terrain:{lowM:t,highM:r}}}const di=500,fi=16,tn=4;function gi(){let n=null,e=null,t=[],r=null;async function i(h,l=!0){n&&(l||!n.useF16)||(n&&o(),e||await s(h),n=await Cr.create({allowF16:l}),t=[0,1].map(()=>({predictor:new Ar(n,e,r,{batchSize:fi,layerStride:1}),grid:null,key:""})))}async function s(h){const l="/cityffdv2-demo/flume/model-v2/",[m,g]=await Promise.all(["metadata.json","weights.bin"].map(async u=>{const f=await fetch(l+u,{signal:h});if(!f.ok)throw new Error("Could not load model v2 "+u+" (HTTP "+f.status+").");return u.endsWith(".bin")?f.arrayBuffer():f.json()}));e=m,r=g}function o(){for(const h of t)h.predictor.destroy();n==null||n.device.destroy(),t=[],n=null}async function d(h,l,m,g,{onScan:u,onLayer:f}={}){const y=m.join(",");(l!==h.grid||y!==h.key)&&(h.predictor.setCity({layers:l.layers,nx:l.nx,ny:l.ny},m),h.grid=l,h.key=y);const{nx:_,ny:w}=l,$={polygon:[[-.5,-.5],[_-.5,-.5],[_-.5,w-.5],[-.5,w-.5]],overlap:e.inference.overlap};f&&($.sweepEvery=1,$.onLayer=()=>f());let b=null;u&&(b=setInterval(()=>{const x=h.predictor.city;x&&u(x.progress)},di));try{return await h.predictor.predict(null,null,g,$)}finally{clearInterval(b)}}function c(h,l,m){if(l.gx!==h.width||l.gy!==h.height||l.layout.gridX0!==h.originX)throw new Error("Wind layers do not share one wind-frame grid.");const g=l.gx*l.gy,u=h.plan.indexOf(m),f=u*g,y=m-l.firstLayer;let _=0,w=0,v=0;for(let $=0;$<l.gy;$++){const b=($*l.gz+y)*l.gx*tn;for(let x=0;x<l.gx;x++){const S=b+x*tn,k=f+$*l.gx+x,C=l.values[S],T=l.values[S+1],L=l.values[S+2];h.values[k*5]=C,h.values[k*5+1]=T,h.values[k*5+2]=L,l.values[S+3]>0?(h.solid[k]=0,_++,!Number.isFinite(C)||!Number.isFinite(T)||!Number.isFinite(L)?w++:(C||T||L)&&v++):h.solid[k]=2}}return Ir(h,u),w||(_&&!v?_:0)}async function a(h,l,m,g={},u=!0){const{signal:f,onFirstWave:y,onMoreLayers:_,onProgress:w}=g;await i(f,u);const v=T=>{if(!T)return!0;if(n.useF16&&u)return!1;throw new Error("Model v2 gave invalid values (no number or no wind) on this graphics card.")};Pr(l[0],l.at(-1));const $=xn(l),b=l.filter(T=>!$.includes(T)),x=await d(t[0],h,$,m);if(!x)return null;const S=Mn({width:x.gx,height:x.gy,originX:x.layout.gridX0,originY:x.layout.gridY0,theta:m},l,!1);let k=0;for(const T of $)k+=c(S,x,T);if(!v(k))return a(h,l,m,g,!1);let C=e.wind.gradient_height_speed_m_s;if(C==null&&(C=e.wind.reference_speed_m_s),y==null||y({volume:S,referenceSpeed:C}),b.length){let T=$.length;const L=await d(t[1],h,b,m,{onScan(P){w==null||w({layersDone:T,scanShare:P})},onLayer(){T=T+1,w==null||w({layersDone:T,scanShare:1})}});if(!L)return null;for(const P of b)k+=c(S,L,P);if(!v(k))return a(h,l,m,g,!1);_==null||_()}return S}async function p(h,l,m){await i(m);const{predictor:g}=t[0],u=g.inputPlan.stored,f=Math.ceil(g.patch*Math.SQRT2),y=new Sr(n,h,f,g.fno.store,g.inputPlan),_=y.gx*y.gy*u.length*4;let w=null;y.packGroup=async()=>{w=await n.readBack(_,(b,x)=>b.copyBufferToBuffer(y.sumsBuffer,0,x,0,_),"mddf download",b=>new Float32Array(b.slice(0)).map(S=>S/Br))};try{const b=y.planGroups([l],g.bufferLimit);y.allocate(b),await y.scan(b[0],()=>{})}finally{y.destroy()}if(!w)throw new Error("Model v2 MDDF could not be read.");const v=u.map(b=>b.part==="dc"?"upper_distance_"+b.part:"upper_distance_"+b.part+b.mode);return{values:w,ny:y.gy,nx:y.gx,margin:f,layerIndex:l,channels:v,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:a,readMddf:p,cancel(){for(const h of t)h.predictor.cancel()},destroy:o}}const We=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class Xe extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const pe=()=>new Xe(We.MODEL,"the model data does not match this page"),z=256;class Et{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Xe(We.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(s=>setTimeout(s,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new Xe(We.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Et(i,r)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const r=Math.max(4,Math.ceil(e/4)*4),i=this.device.createBuffer({size:r,usage:t});return i.tracked=!0,i}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),s=new Int32Array(r),o=new Float32Array(r);e.forEach(([c,a],p)=>{c==="u"?i[p]=a:c==="i"?s[p]=a:o[p]=a});const d=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(d,0,r),d}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,s=z){this.dispatchGroups(e,t,r,...this.workgroups(i,s))}workgroups(e,t=z){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((s,o)=>({binding:o,resource:{buffer:s}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r){const i=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),s=this.device.createCommandEncoder();t(s,i),this.device.queue.submit([s.finish()]);try{await i.mapAsync(GPUMapMode.READ);const o=await r(i.getMappedRange());return i.unmap(),o}finally{this.free(i)}}}const $t=4,qe=1.5;function In(n,e,t){const r=(e-1)/2,i=(t-1)/2,s=Math.cos(n),o=Math.sin(n);return{theta:n,cX:r,cY:i,cos:s,sin:o,toWind:([d,c])=>{const a=d-r,p=c-i;return[r+a*s+p*o,i-a*o+p*s]},toCity:([d,c])=>{const a=d-r,p=c-i;return[r+a*s-p*o,i+a*o+p*s]}}}const se=64,ee=180,Tn=1600,pi=640,Se=8,X=32,Pe=n=>n.toFixed(6),Be=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},hi=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,mi=()=>`
struct P { gx: u32, gy: u32, pixels: u32, layerFirst: u32,
           layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32,
           lineMax: u32, pad0: u32, pad1: u32, pad2: u32 };
struct A { majorX: u32, majorSign: i32, minorSign: i32, maxShift: i32,
           lineCount: u32, offsetBase: u32, stepDist: f32, pad: u32 };
@group(0) @binding(0) var<storage, read> height: array<f32>;
@group(0) @binding(1) var<storage, read> layers: array<u32>;
@group(0) @binding(2) var<storage, read> offsets: array<i32>;
@group(0) @binding(3) var<storage, read> table: array<A>;
@group(0) @binding(4) var<storage, read_write> raw: array<u32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${Pe(qe)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${Pe(qe)}, has1);
  let cutoff = ${Pe(Tn)};
  let majorSize = i32(select(u.gy, u.gx, t.majorX == 1u));
  let minorSize = i32(select(u.gx, u.gy, t.majorX == 1u));
  let lineOffset = i32(line) - t.maxShift;
  let out = (ai * u.pairCount + pair) * u.pixels;
  var o0 = -1;
  var o1 = -1;
  for (var m = majorSize - 1; m >= 0; m--) {
    let om = lineOffset + offsets[t.offsetBase + u32(m)];
    if (om < 0 || om >= minorSize) { continue; }
    let X = select(majorSize - 1 - m, m, t.majorSign > 0);
    let Y = select(minorSize - 1 - om, om, t.minorSign > 0);
    let x = select(Y, X, t.majorX == 1u);
    let y = select(X, Y, t.majorX == 1u);
    let cell = u32(y) * u.gx + u32(x);
    let h = height[cell];
    var d0 = cutoff;
    var d1 = cutoff;
    if (h >= q0) { o0 = m; d0 = 0.0; } else if (o0 >= 0) { d0 = min((f32(o0 - m) - 0.5) * t.stepDist, cutoff); }
    if (h >= q1) { o1 = m; d1 = 0.0; } else if (o1 >= 0) { d1 = min((f32(o1 - m) - 0.5) * t.stepDist, cutoff); }
    raw[out + cell] = pack2x16float(vec2<f32>(d0, d1));
  }
}`;function yi(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  if (g >= u.pixels * u.layerCount) { return; }
  let k = g / u.pixels;
  let pixel = g % u.pixels;
  var dc = 0.0;
  var re = vec2<f32>(0.0);
  var im = vec2<f32>(0.0);
  for (var ai = 0u; ai < u.angleCount; ai++) {
    let v = unpack2x16float(raw[(ai * u.pairCount + k / 2u) * u.pixels + pixel]);
    let d = select(v.x, v.y, (k & 1u) == 1u);
    let w = trig[u.angleFirst + ai];
    dc += d;
    re += d * w.xz;
    im -= d * w.yw;
  }
  let e = (k * u.pixels + pixel) * ${n.length}u;
${t}
}`}const Re=64,de=8,Ge=Re/de,fe=Ge*Ge,kt=de*de,nn=Math.log2(Re),rn=Math.log2(de),lt=de-1,Rt="15u",St="4u",Fn="0xfffu",Bt="2048",wi="4095",Dt="16u",on=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(Be).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${Pe(ee)} / STEPS[c]));
}
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  if (g >= u.nTiles * ${fe}u) { return; }
  let t = g / ${fe}u;
  let b = g % ${fe}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${fe}u + b];
  let w = h & ${Rt};
  if (w == 0u) { return; }
  let base = i32((h >> ${St}) & ${Fn}) - ${Bt};
  var wi = field[t] + (h >> ${Dt});
  let x0 = tx * ${Re}u + (b % ${Ge}u) * ${de}u;
  let y0 = ty * ${Re}u + (b / ${Ge}u) * ${de}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${kt}u; j++) {
    let x = x0 + j % ${de}u; let y = y0 + j / ${de}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${Re}u + (b % ${Ge}u) * ${de}u;
  let y0 = ty * ${Re}u + (b / ${Ge}u) * ${de}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${kt}u; j++) {
    let x = x0 + j % ${de}u; let y = y0 + j / ${de}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${fe}u + b] = w | (u32(clamp(mn + ${Bt}, 0, ${wi})) << ${St});`}
}`,bi=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${se}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${fe}u; b++) {
    let h = headers[t * ${fe}u + b];
    headers[t * ${fe}u + b] = h | (local << ${Dt});
    local += ${kt/32}u * (h & ${Rt});
  }
  tileWords[t] = local;
}`,vi=n=>{const e=`array<f32, ${Se}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${hi}
struct P { gx: u32, gy: u32, tileCount: u32, layerCount: u32,
           margin: u32, nx: u32, ny: u32, pad0: u32,
           upX0: i32, upY0: i32, pad1: u32, pad2: u32,
           cosU: f32, sinU: f32, cosT: f32, sinT: f32,
           centreX: f32, centreY: f32, pad3: f32, pad4: f32 };
@group(0) @binding(0) var<storage, read> height: array<f32>;
@group(0) @binding(1) var<storage, read> layers: array<u32>;
@group(0) @binding(2) var<storage, read_write> field: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read> tiles: array<i32>;
@group(0) @binding(4) var<uniform> u: P;
fn put(e: u32, v: f32) {
  let bits = pack2x16float(vec2<f32>(v, 0.0)) & 0xffffu;
  atomicOr(&field[e >> 1u], select(bits, bits << 16u, (e & 1u) == 1u));
}
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  let groupsPerPixel = (u.layerCount + ${Se-1}u) / ${Se}u;
  let cells = ${X*X}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${X} + i32(cell % ${X}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${X} + i32(cell / ${X}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${Se}u;
  let count = min(${Se}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${Se}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${Pe(qe)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${Pe($t)};
    let gyr = u.sinU / ${Pe($t)};
    var stepX = 0; var nextX = 1.0e20; var deltaX = 1.0e20;
    if (abs(gxr) >= 1.0e-10) {
      if (gxr > 0.0) { stepX = 1; nextX = divr(1.0 - fx, gxr); deltaX = divr(1.0, gxr); }
      else { stepX = -1; nextX = divr(-fx, gxr); deltaX = divr(-1.0, gxr); }
    }
    var stepY = 0; var nextY = 1.0e20; var deltaY = 1.0e20;
    if (abs(gyr) >= 1.0e-10) {
      if (gyr > 0.0) { stepY = 1; nextY = divr(1.0 - fy, gyr); deltaY = divr(1.0, gyr); }
      else { stepY = -1; nextY = divr(-fy, gyr); deltaY = divr(-1.0, gyr); }
    }
    let cutoff = ${Pe(Tn)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${Se}>;
    for (var k = 0u; k < ${Se}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${pi}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${Se}u; k++) {
          if (done[k]) { continue; }
          if (roof >= query[k]) {
            hs[0][k] = entered; hs[1][k] = roof - query[k]; hs[2][k] = entered; hs[3][k] = 0.0;
            done[k] = true;
            remaining -= 1u;
          } else {
            let num = roof - query[k];
            let den = max(leaving, 1.0e-8);
            if (num * bestDen[k] > bestNum[k] * den) { bestNum[k] = num; bestDen[k] = den; hs[2][k] = leaving; hs[3][k] = roof - query[k]; }
          }
        }
      }
      let crossX = nextX <= nextY + 1.0e-7;
      let crossY = nextY <= nextX + 1.0e-7;
      if (crossX) { x += stepX; nextX += deltaX; }
      if (crossY) { y += stepY; nextY += deltaY; }
      entered = leaving;
    }
  }
  for (var k = 0u; k < count; k++) {
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${n.length}u;
${n.map((r,i)=>`    put(e0 + ${i}u, ${t[r]});`).join(`
`)}
  }
}`},xi=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:s}=e,o=[["field","array<u32>"]];s&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),i&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const d=o.map(([p,h],l)=>`@group(0) @binding(${l}) var<storage, read> ${p}: ${h};`);d.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${n}>;`),d.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const c=(p,h)=>`(${p} - ${Be(h.center)}) / ${Be(h.scale)}`,a=e.inputs.map((p,h)=>{let l;if(p.source==="r1")if(p.part==="dc")l=`value = ${c(`sampleField(ry, rx, slot, ${e.storedIndex(p.signal,"dc",0)}u)`,p)};`;else{const m=e.storedIndex(p.signal,"re",p.mode),g=e.storedIndex(p.signal,"im",p.mode);l=`let re = sampleField(ry, rx, slot, ${m}u);
      let im = sampleField(ry, rx, slot, ${g}u);
      let angle = ${Be(p.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${c(p.part==="im"?"(re * s + im * c)":"(re * c - im * s)",p)};`}else if(p.source==="geo"){const m=p.index===0?"h / 100.0":"asinh((h - z) / 10.0)";l=`let h = roofHeight(iy, ix);
      value = ${c(`f16round(${m})`,p)};`}else p.source==="up"?l=`value = ${c(`upAtWind(sy, sx, slot, ${e.up.indexOf(p.index)}u)`,p)};`:p.source==="solid"?l=`let roofLayer = round(roofHeight(iy, ix) / ${Pe(qe)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:p.axis==="y"?l=`value = (sy - u.centreY) / ${Be(p.scale)};`:p.axis==="z"?l=`value = (f32(layer) - ${Be(p.center)}) / ${Be(p.scale)};`:l=`value = (sx - ${Be(p.center)}) / ${Be(p.scale)};`;return`    case ${h}u: {
      ${l}
    }`});return`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, channels: u32, py: u32, px: u32,
  gx: u32, gy: u32, regionX: u32, regionY: u32,
  regionW: u32, regionH: u32, regionPixels: u32, margin: u32,
  cosT: f32, sinT: f32, theta: f32, centreY: f32,
  centreX: f32, packTiles: u32, pad1: f32, pad2: f32,
  upX0: i32, upY0: i32, upTW: u32, upTH: u32,
  upLayers: u32, pad3: u32, pad4: u32, pad5: u32,
};
${d.join(`
`)}
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(Be).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${nn}u)) * ${t.tx}u + (x >> ${nn}u);
  let h = field[u.packTiles + t * ${fe}u + ((y >> ${rn}u) & ${lt}u) * ${Ge}u + ((x >> ${rn}u) & ${lt}u)];
  let w = h & ${Rt};
  var q = i32((h >> ${St}) & ${Fn}) - ${Bt};
  if (w > 0u) {
    let bit = (((y & ${lt}u) * ${de}u) + (x & ${lt}u)) * w;
    let word = field[t] + (h >> ${Dt}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${i?`
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(X)}u) >= u.upTW || u32(ty >> ${Math.log2(X)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(X)}u) * u.upTW + u32(tx >> ${Math.log2(X)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${X*X}u + u32(ty & ${X-1}) * ${X}u + u32(tx & ${X-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${s?`fn roofHeight(iy: f32, ix: f32) -> f32 {
  let hy = clamp(i32(round(iy)), 0, i32(u.gy) - 1);
  let hx = clamp(i32(round(ix)), 0, i32(u.gx) - 1);
  return height[u32(hy) * u.gx + u32(hx)];
}`:""}
fn sampleField(ry: f32, rx: f32, slot: u32, c: u32) -> f32 {
  let y0 = floor(ry); let x0 = floor(rx);
  let fy = ry - y0; let fx = rx - x0;
  let iy0 = u32(clamp(i32(y0), 0, i32(u.regionH) - 1));
  let ix0 = u32(clamp(i32(x0), 0, i32(u.regionW) - 1));
  let iy1 = min(iy0 + 1u, u.regionH - 1u);
  let ix1 = min(ix0 + 1u, u.regionW - 1u);
  let v00 = storedAt(iy0 * u.regionW + ix0, slot, c);
  let v01 = storedAt(iy0 * u.regionW + ix1, slot, c);
  let v10 = storedAt(iy1 * u.regionW + ix0, slot, c);
  let v11 = storedAt(iy1 * u.regionW + ix1, slot, c);
  return mix(mix(v00, v01, fx), mix(v10, v11, fx), fy);
}
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  let area = u.py * u.px;
  if (g >= u.batch * u.channels * area) { return; }
  let p = g % area;
  let channel = (g / area) % u.channels;
  let b = g / (area * u.channels);
  let x = p % u.px;
  let y = p / u.px;
  let sy = f32(origins[b * 3u] + i32(y));
  let layer = u32(origins[b * 3u + 1u]);
  let sx = f32(origins[b * 3u + 2u] + i32(x));
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  let ix = u.centreX + dx * u.cosT - dy * u.sinT + f32(u.margin);
  let iy = u.centreY + dx * u.sinT + dy * u.cosT + f32(u.margin);
  let ry = iy - f32(u.regionY);
  let rx = ix - f32(u.regionX);
  let z = (f32(layer) + 0.5) * ${Pe(qe)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${a.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},Mi=4,_i=3,$i=.016,ki=256;class Ln{constructor(e,{layers:t,ny:r,nx:i},s,o,d){this.context=e,this.inputPlan=d,this.ny=r,this.nx=i,this.margin=s,this.gy=r+2*s,this.gx=i+2*s;const c=new Float32Array(this.gy*this.gx);for(let g=0;g<r;g++)for(let u=0;u<i;u++)c[(g+s)*this.gx+u+s]=t[g*i+u]*qe;this.heightBuffer=e.upload(c);const a=new Float32Array(ee),p=new Float32Array(ee);for(let g=0;g<ee;g++)a[g]=Math.cos(2*Math.PI*g/ee),p[g]=Math.sin(2*Math.PI*g/ee);this.cosT=a,this.sinT=p,this.scanPipeline=e.pipeline(mi()),this.accumulatePipeline=e.pipeline(yi(d.stored)),this.upWind=d.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(vi(d.up)));const h=d.stored.map(g=>2*$i*g.scale),l=Math.ceil(this.gx/Re),m=Math.ceil(this.gy/Re);this.packed={steps:h,tx:l,ty:m},this.packHeaderPipeline=e.pipeline(on(d.stored,h,l,m,!1)),this.packPayloadPipeline=e.pipeline(on(d.stored,h,l,m,!0)),this.packTilePipeline=e.pipeline(bi()),this.assemblePipeline=e.pipeline(xi(o,d,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let s=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(s=Math.min(s,Mi),i>t)throw new Xe(We.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let d=0;d<e.length;d+=s){const c=e.slice(d,d+s),a=new Int32Array(ki).fill(-1);c.forEach((p,h)=>{a[p]=h}),o.push({layers:c,slots:a,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots),r.layerBuffer=t.upload(new Uint32Array(r.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(ee*r),s=new ArrayBuffer(ee*32),o=new Uint32Array(s),d=new Int32Array(s),c=new Float32Array(s),a=new Float32Array(ee*4);let p=0;for(let h=0;h<ee;h++){const l=this.cosT[h],m=this.sinT[h],g=Math.abs(l)>=Math.abs(m),u=g?l:m,f=g?m:l,y=Math.abs(f/u),_=g?e:t,w=g?t:e;for(let b=0;b<_;b++)i[h*r+b]=Math.round(y*b);const v=i[h*r+_-1],$=w+v;p=Math.max(p,$),o[8*h]=g?1:0,d[8*h+1]=u>=0?1:-1,d[8*h+2]=f>=0?1:-1,d[8*h+3]=v,o[8*h+4]=$,o[8*h+5]=h*r,c[8*h+6]=$t*Math.sqrt(1+y*y),a.set([l,m,Math.cos(4*Math.PI*h/ee),Math.sin(4*Math.PI*h/ee)],4*h)}return this.offsetBuffer=this.context.upload(i),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(a),this.scanInfo={lineMax:p},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:r,gy:i}=this,{lineMax:s}=this.scanTables(),o=r*i,d=this.inputPlan.stored.length,c=e.layers.length,a=Math.ceil(c/2),p=Math.max(1,Math.min(ee,Math.floor(this.scanRawBytes/(a*o*4)))),h=p*a*o*4,l=c*o*d*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<l)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(l));const m=t.device.createCommandEncoder();m.clearBuffer(this.sumsBuffer,0,c*o*d*4),t.device.queue.submit([m.finish()]);const g=[];for(let u=0;u<ee;u+=p){if(this.destroyed)return;const f=Math.min(p,ee-u),y=t.device.createCommandEncoder(),_=y.beginComputePass(),w=t.uniform([["u",r],["u",i],["u",o],["u",0],["u",c],["u",a],["u",u],["u",f],["u",s],["u",0],["u",0],["u",0]]);t.dispatch(_,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,w],s*a*f,se);const v=t.uniform([["u",o],["u",c],["u",a],["u",u],["u",f],["u",0],["u",0],["u",0]]);t.dispatch(_,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,v],o*c,se),_.end(),t.device.queue.submit([y.finish()]),g.push(t.device.queue.onSubmittedWorkDone()),g.length>=_i&&await g.shift()}this.destroyed||(await this.packGroup(e,c,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:s,gy:o}=this,{tx:d,ty:c}=this.packed,a=t*this.inputPlan.stored.length*d*c,p=i.storage(a*fe*4),h=i.storage(a*4),l=i.uniform([["u",s],["u",o],["u",r],["u",t],["u",a],["u",0],["u",0],["u",0]]),m=i.uniform([["u",a],["u",0],["u",0],["u",0]]),g=()=>{i.free(p),i.free(h)},u=(b,x)=>{const S=b.beginComputePass();i.dispatch(S,this.packHeaderPipeline,[this.sumsBuffer,p,l],a*fe,se),i.dispatch(S,this.packTilePipeline,[p,h,m],a,se),S.end(),b.copyBufferToBuffer(h,0,x,0,a*4)};let f;try{f=await i.readBack(a*4,u,b=>this.destroyed?null:new Uint32Array(b.slice(0)))}catch(b){throw g(),b}if(!f){g();return}const y=new Uint32Array(a);let _=a+a*fe;for(let b=0;b<a;b++)y[b]=_,_+=f[b];i.free(e.field),e.field=i.storage(Math.max(4,_*4)),e.packTiles=a,i.write(e.field,y);const w=i.device.createCommandEncoder();w.copyBufferToBuffer(p,0,e.field,a*4,a*fe*4);const v=w.beginComputePass(),$=i.uniform([["u",s],["u",o],["u",r],["u",t],["u",a],["u",0],["u",0],["u",0]]);i.dispatch(v,this.packPayloadPipeline,[this.sumsBuffer,e.field,$],a*fe,se),v.end(),i.device.queue.submit([w.finish()]),await i.device.queue.onSubmittedWorkDone(),g()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*ee,i=Math.round(r)%ee;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=In(e,this.nx,this.ny);let i=1/0,s=-1/0,o=1/0,d=-1/0;for(const l of[-.5,this.nx-.5])for(const m of[-.5,this.ny-.5]){const[g,u]=r.toWind([l,m]);i=Math.min(i,g),s=Math.max(s,g),o=Math.min(o,u),d=Math.max(d,u)}const c=Math.floor((i-t)/X)*X,a=Math.floor((o-t)/X)*X,p=Math.ceil((s+t+1-c)/X),h=Math.ceil((d+t+1-a)/X);return{theta:e,x0:c,y0:a,tw:p,th:h,table:new Int32Array(p*h).fill(-1),count:0}}ensureUpTiles(e,t,r,i){const{context:s}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(w=>w.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,i));const d=[];for(const[w,v]of r){const $=Math.floor((v-o.x0)/X),b=Math.floor((v+i-1-o.x0)/X),x=Math.floor((w-o.y0)/X),S=Math.floor((w+i-1-o.y0)/X);if($<0||x<0||b>=o.tw||S>=o.th)throw new Error("internal layout error");for(let k=x;k<=S;k++)for(let C=$;C<=b;C++){const T=k*o.tw+C;o.table[T]<0&&(o.table[T]=o.count+d.length/3,d.push(C,k,o.table[T]))}}const c=d.length/3;if(!c)return 0;const a=o.count,p=a+c,h=this.inputPlan.up.length,l=X*X,m=s.device.createCommandEncoder(),g=[];for(const w of e){const v=w.layers.length*l*h*2;if(w.upGrid!==o&&(w.upCount=0),!w.upTiles||w.upCapacity<p){const $=Math.min(o.tw*o.th,Math.max(p,Math.ceil(w.upCapacity*1.5))),b=s.storage($*v);w.upTiles&&w.upCount&&m.copyBufferToBuffer(w.upTiles,0,b,0,w.upCount*v),w.upTiles&&g.push(w.upTiles),w.upTiles=b,w.upCapacity=$}w.upGrid=o,m.clearBuffer(w.upTiles,a*v,c*v),w.upCount=p}const u=s.upload(new Int32Array(d)),[f,y]=this.upwindDirection(t),_=m.beginComputePass();for(const w of e){const v=[this.heightBuffer,w.layerBuffer,w.upTiles,u];s.dispatch(_,this.alongPipeline,[...v,s.uniform([["u",this.gx],["u",this.gy],["u",c],["u",w.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",f],["f",y],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],c*l*Math.ceil(w.layers.length/Se),se)}_.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(s.free(this.upTableBuffer),this.upTableBuffer=s.storage(o.table.byteLength)),s.write(this.upTableBuffer,o.table),s.device.queue.submit([m.finish()]);for(const w of g)s.free(w);return s.free(u),o.count=p,c}assemble(e,t,r,i,s,o){var f,y,_,w;const{context:d,inputPlan:c,gx:a,gy:p}=this,h=t.length/3,l=d.upload(t),m=d.uniform([["u",h],["u",c.inputs.length],["u",s],["u",s],["u",a],["u",p],["u",0],["u",0],["u",a],["u",p],["u",a*p],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((f=this.upGrid)==null?void 0:f.x0)??0],["i",((y=this.upGrid)==null?void 0:y.y0)??0],["u",((_=this.upGrid)==null?void 0:_.tw)??0],["u",((w=this.upGrid)==null?void 0:w.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),g=[r.field];if(c.usesHeight&&g.push(this.heightBuffer),g.push(l,r.slotBuffer),c.up.length){if(r.upGrid!==this.upGrid)throw new Error("internal layout error");g.push(r.upTiles,this.upTableBuffer)}g.push(o,m);const u=e.beginComputePass();return d.dispatch(u,this.assemblePipeline,g,h*c.inputs.length*s*s),u.end(),l}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function Si(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw pe();const t=[],r=(c,a,p)=>t.findIndex(h=>h.key===`${c}:${a}:${p}`),i=(c,a,p)=>{r(c.signal,a,p)>=0||t.push({key:`${c.signal}:${a}:${p}`,signal:c.signal,part:a,mode:p,scale:c.scale})},s=[];for(const c of e){if(c.source==="r1")c.part==="dc"?i(c,"dc",0):(i(c,"re",c.mode),i(c,"im",c.mode));else if(c.source==="up")s.includes(c.index)||s.push(c.index);else if(!["geo","solid","coord"].includes(c.source))throw pe();if(c.source==="geo"&&![0,1].includes(c.index)||c.source==="up"&&!(c.index>=0&&c.index<4))throw pe()}for(const c of t)if(c.mode>2)throw pe();const o=[...new Set(t.map(c=>c.signal))].sort();if(o.length!==1||o[0]!==0)throw pe();const d=e.some(c=>c.source==="solid"||c.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:s,usesHeight:d}}function Pt(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let Oe=null;function Bi(){if(Oe)return Oe;Oe=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?Oe[n]=e*r*2**-24:t===31?Oe[n]=r?NaN:e*(1/0):Oe[n]=e*(1+r/1024)*2**(t-15)}return Oe}function Pi(n){const e=new Float32Array(n.length),t=Bi();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function Ci(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const s=r[0],o=s>>>16&32768,d=s>>>23&255;let c=s&8388607;if(d===255){e[i]=o|31744|(c?1:0);continue}const a=d-127+15;if(a>=31){e[i]=o|31744;continue}if(a<=0){if(a<-10){e[i]=o;continue}c|=8388608;const h=14-a;let l=c>>>h;c>>>h-1&1&&(l+=1),e[i]=o|l;continue}let p=a<<10|c>>>13;c&4096&&(p+=1),e[i]=o|p}return e}const Vt=`
fn erf_approx(x: f32) -> f32 {
  let s = sign(x);
  let ax = abs(x);
  let t = 1.0 / (1.0 + 0.3275911 * ax);
  let y = 1.0 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t
      - 0.284496736) * t + 0.254829592) * t * exp(-ax * ax);
  return s * y;
}
fn gelu(x: f32) -> f32 {
  return 0.5 * x * (1.0 + erf_approx(x * 0.7071067811865476));
}
`,Ai=`
struct P { d0: u32, d1: u32, d2: u32, d3: u32,
           d4: u32, mode: u32, outer: u32, rank: u32,
           strideMode: u32, blockAbove: u32, total: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> facRe: array<f32>;
@group(0) @binding(3) var<storage, read> facIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.total) { return; }
  let inner = g % u.strideMode;
  let a = (g / u.strideMode) % u.outer;
  let above = g / (u.strideMode * u.outer);
  var accRe = 0.0;
  var accIm = 0.0;
  for (var r = 0u; r < u.rank; r++) {
    let source = (above * u.rank + r) * u.strideMode + inner;
    let xr = inRe[source];
    let xi = inIm[source];
    let fr = facRe[a * u.rank + r];
    let fi = facIm[a * u.rank + r];
    accRe += xr * fr - xi * fi;
    accIm += xr * fi + xi * fr;
  }
  outRe[g] = accRe;
  outIm[g] = accIm;
}`;function sn(n,e,t){const{enable:r,load:i,save:s}=Ke(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${z}>;
@compute @workgroup_size(${z})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${z}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${z/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${z}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${z/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${z}u) {
    Y[base + i] = ${s("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const Ct=32,an=1e-5,ct=16;function Ke(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function Ii(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:s,save:o}=Ke(e);return`${i}${Vt}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${ct}u;
var<workgroup> w: array<f32, ${ct*n.cinMax}>;
@compute @workgroup_size(${z})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/z}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/z}u;
  let p = (wg % ${r/z}u) * ${z}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${z}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${s("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${ct}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${s("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${s("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${o("v")};
  }
}`}function Ti(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:s,save:o}=Ke(e);return`${i}${Vt}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${s("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${s("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function Fi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:s,load:o}=Ke(e);return`${s}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${i}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${o("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Li(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.batch * u.channels * u.rows * ${e}u) { return; }
  let k = g % ${e}u;
  let r = (g / ${e}u) % u.rows;
  let bc = g / (${e}u * u.rows);
  var accRe = 0.0; var accIm = 0.0;
  let inBase = bc * u.inner * ${e}u + k;
  let tableBase = r * u.inner;
  for (var j = 0u; j < u.inner; j++) {
    let ar = inRe[inBase + j * ${e}u];
    let ai = inIm[inBase + j * ${e}u];
    let cr = tableRe[tableBase + j];
    let ci = tableIm[tableBase + j];
    accRe += ar * cr - ai * ci;
    accIm += ar * ci + ai * cr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Ei(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  let block = ${r*t}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${t}u;
  let s = (g / ${t}u) % ${r}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${e}u);
  let sp = s - half * ${e}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${e*t}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${t}u + k;
  let xBase = (b * u.channels * ${r}u + s) * ${t}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Ri(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:s,save:o}=Ke(e);return`${s}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.batch * u.channels * ${i}u) { return; }
  let p = g % ${i}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${i}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${r}u;
  for (var k = 0u; k < ${r}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${o("acc * "+1/Ct)};
}`}function Di(n){const{store:e}=n,{enable:t,load:r,save:i}=Ke(e);return`${t}${Vt}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function Vi(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:Ii(n),gate:Ti(n),instanceNorm:sn(e,r,an),instanceNormScaled:sn(e,r,an/(Ct*Ct)),forwardColumns:Fi(n),rowMix:Li(n),spectralMix:Ei(n),inverseColumns:Ri(n),residual:Di(n)}}function Oi(n,e,t){const r=2*e,i=[];for(let m=0;m<e;m++)i.push(m);for(let m=n-e;m<n;m++)i.push(m);const s=new Float32Array(n*t),o=new Float32Array(n*t);for(let m=0;m<n;m++)for(let g=0;g<t;g++){const u=2*Math.PI*m*g/n;s[m*t+g]=Math.cos(u),o[m*t+g]=-Math.sin(u)}const d=new Float32Array(r*n),c=new Float32Array(r*n);for(let m=0;m<r;m++)for(let g=0;g<n;g++){const u=2*Math.PI*i[m]*g/n;d[m*n+g]=Math.cos(u),c[m*n+g]=-Math.sin(u)}const a=new Float32Array(n*r),p=new Float32Array(n*r);for(let m=0;m<n;m++)for(let g=0;g<r;g++){const u=2*Math.PI*i[g]*m/n;a[m*r+g]=Math.cos(u)/n,p[m*r+g]=Math.sin(u)/n}const h=new Float32Array(t*n),l=new Float32Array(t*n);for(let m=0;m<t;m++){const g=(m===0?1:2)/n;for(let u=0;u<n;u++){const f=2*Math.PI*m*u/n;h[m*n+u]=g*Math.cos(f),l[m*n+u]=-g*Math.sin(f)}}return{forwardCos:s,forwardSin:o,rowRe:d,rowIm:c,inverseRowRe:a,inverseRowIm:p,inverseColCos:h,inverseColSin:l}}function Ui(n,e,t){const r=n.tensors[t];if(!r)throw pe();return Pi(new Uint16Array(e,r.offset,r.count))}class zi{constructor(e,t,r,i){const s=t.model;if(this.context=e,this.metadata=t,this.width=s.width,this.depth=s.layers,this.inputChannels=s.input_channels,this.outputChannels=s.output_channels,this.patch=t.inference.patch[0],this.modes1=s.modes[0],this.modes2=s.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%z)throw pe();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[a,p]of Object.entries(Vi(o)))this.pipelines[a]=e.pipeline(p);this.contractPipeline=e.pipeline(Ai);const d=a=>Ui(t,r,a);this.tables={};for(const[a,p]of Object.entries(Oi(this.patch,this.modes1,this.modes2)))this.tables[a]=e.upload(p);this.weights={};const c=(a,p)=>{const h=d(p);this.weights[a]=this.store==="f16"?e.upload(Ci(h)):e.upload(h)};c("p1w","a.m1.weight"),c("p1b","a.m1.bias"),c("p2w","a.m2.weight"),c("p2b","a.m2.bias"),c("q1w","b.m1.weight"),c("q1b","b.m1.bias"),c("q2w","b.m2.weight"),c("q2b","b.m2.bias");for(let a=0;a<this.depth;a++)c(`m1w${a}`,`c.${a}.m1.weight`),c(`m1b${a}`,`c.${a}.m1.bias`),c(`m2w${a}`,`c.${a}.m2.weight`),c(`m2b${a}`,`c.${a}.m2.bias`),c(`lw${a}`,`d.${a}.weight`),c(`lb${a}`,`d.${a}.bias`);this.buildSpectralWeights(d),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.factored;let s=i.core_shape.slice(),o=t.upload(e(`${i.core}.re`)),d=t.upload(e(`${i.core}.im`));for(const a of i.factors){const[p,h]=a.shape;if(s[a.mode]!==h)throw pe();const l=s.slice();l[a.mode]=p;const m=l.reduce((b,x)=>b*x,1),g=l.slice(a.mode+1).reduce((b,x)=>b*x,1),u=t.storage(m*4),f=t.storage(m*4),y=t.upload(e(`${a.name}.re`)),_=t.upload(e(`${a.name}.im`)),w=t.uniform([["u",l[0]],["u",l[1]],["u",l[2]],["u",l[3]],["u",l[4]],["u",a.mode],["u",p],["u",h],["u",g],["u",0],["u",m],["u",0]]),v=t.device.createCommandEncoder(),$=v.beginComputePass();t.dispatch($,this.contractPipeline,[o,d,y,_,u,f,w],m),$.end(),t.device.queue.submit([v.finish()]),t.free(o),t.free(d),t.free(y),t.free(_),o=u,d=f,s=l}t.releaseScratch();const c=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(s.join()!==c.join())throw pe();this.spectralRe=o,this.spectralIm=d}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,s=2*this.modes1,o=l=>t.storage(e*l*r*this.elementBytes),d=l=>t.storage(e*i*l*4),c=o(Math.max(4*i,this.inputChannels,this.outputChannels)),a=o(2*i),p=d(this.patch*this.modes2),h=d(this.patch*this.modes2);this.buffers={x:o(i),input:c,t2:c,gates:c,spectral:c,output:c,wide:a,t1:a,hidden:a,local:a,xRe:p,xIm:h,yRe:d(s*this.modes2),yIm:d(s*this.modes2),zRe:d(s*this.modes2),zIm:d(s*this.modes2),wRe:p,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/ct)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:s}=this,o=this.width,d=this.patch*this.patch,c=2*this.modes1,a=[],p=(l,m,g,u)=>{a.push(t.prepared(l,[...m,t.keptUniform(g)],t.workgroups(u)))},h=(l,m,g=i.instanceNorm)=>{a.push(t.prepared(g,[l,m],[e*o]))};p(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),p(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let l=0;l<this.depth;l++)h(r.x,r.t1),p(i.forwardColumns,[r.t1,s.forwardCos,s.forwardSin,r.xRe,r.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),p(i.rowMix,[r.xRe,r.xIm,s.rowRe,s.rowIm,r.yRe,r.yIm],[["u",e],["u",o],["u",c],["u",this.patch]],e*o*c*this.modes2),p(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",o],["u",2*l],["u",0]],e*o*c*this.modes2),p(i.rowMix,[r.zRe,r.zIm,s.inverseRowRe,s.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",o],["u",this.patch],["u",c]],e*o*this.patch*this.modes2),p(i.inverseColumns,[r.wRe,r.wIm,s.inverseColCos,s.inverseColSin,r.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*d),h(r.t2,r.t1,i.instanceNormScaled),p(i.conv1x1,[r.t1,this.weights[`m1w${l}`],this.weights[`m1b${l}`],r.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),p(i.gate,[r.gates,r.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*d),p(i.conv1x1,[r.hidden,this.weights[`m2w${l}`],this.weights[`m2b${l}`],r.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),p(i.conv1x1,[r.x,this.weights[`lw${l}`],this.weights[`lb${l}`],r.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),p(i.residual,[r.spectral,r.local,r.x],[["u",e*o*d],["u",l<this.depth-1?1:0],["u",0],["u",0]],e*o*d);return p(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),p(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),a}}const Ni=(n,e)=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, firstLayer: u32, pad0: u32, pad1: u32,
  rectY0: u32, rectZ0: u32, rectX0: u32, rectH: u32,
  rectD: u32, rectW: u32, gridY0: i32, gridX0: i32,
  minimumWeight: f32, pad2: f32, pad3: f32, pad4: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${n}>;
@group(0) @binding(1) var<storage, read> origins: array<i32>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<storage, read> table: array<u32>;
@group(0) @binding(4) var<uniform> u: P;
fn hann(index: i32, size: u32) -> f32 {
  let t = 6.283185307179586 * f32(index) / f32(size - 1u);
  return u.minimumWeight + (1.0 - u.minimumWeight) * (0.5 - 0.5 * cos(t));
}
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.rectH * u.rectD * u.rectW) { return; }
  let cx = u.rectX0 + g % u.rectW;
  let cz = u.rectZ0 + (g / u.rectW) % u.rectD;
  let cy = u.rectY0 + g / (u.rectW * u.rectD);
  let sy = i32(cy) + u.gridY0;
  let sx = i32(cx) + u.gridX0;
  let layer = i32(cz + u.firstLayer);
  let area = u.py * u.px;
  var s = array<f32, ${e}>();
  var total = 0.0;
  for (var b = 0u; b < u.batch; b++) {
    if (layer != origins[b * 3u + 1u]) { continue; }
    let py = sy - origins[b * 3u];
    let px = sx - origins[b * 3u + 2u];
    if (py < 0 || px < 0 || py >= i32(u.py) || px >= i32(u.px)) { continue; }
    let w = hann(py, u.py) * hann(px, u.px);
    let base = b * u.channels * area + u32(py) * u.px + u32(px);
    for (var c = 0u; c < ${e}u; c++) { s[c] += w * f32(patches[base + c * area]); }
    total += w;
  }
  if (total == 0.0) { return; }
  let len = table[2u * u.gy + 1u + cy];
  let cell = (table[cy] + cz * len + cx - table[u.gy + 1u + cy]) * ${e+1}u;
  for (var c = 0u; c < ${e}u; c++) { sums[cell + c] += s[c]; }
  sums[cell + ${e}u] += total;
}`;function ln(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,s=[];for(let o=0;o<i;o++)s.push(n+o*t-Pt(o*(i*t-e)/(i-1)));return s}function Gi(n,e,t){let r=1/0,i=-1/0;const s=o=>{r=Math.min(r,o),i=Math.max(i,o)};for(let o=0;o<n.length;o++){const d=n[o],c=n[(o+1)%n.length];d[0]>=e&&d[0]<=t&&s(d[1]);for(const a of[e,t])(d[0]-a)*(c[0]-a)<0&&s(d[1]+(a-d[0])/(c[0]-d[0])*(c[1]-d[1]))}return r<=i?[r,i]:null}const Hi=(n,e)=>Math.max(1,Math.round(n*(1-e)));function Wi(n,e,t,r,i){const s=In(n,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(s.toWind),d=Math.floor(Math.min(...o.map(l=>l[0]))),c=Math.floor(Math.min(...o.map(l=>l[1]))),a=Math.ceil(Math.max(...o.map(l=>l[0])))-d+1,p=Math.ceil(Math.max(...o.map(l=>l[1])))-c+1,h=[];for(const l of ln(d,a,r,i)){const m=Gi(o,l,l+r-1);if(!m)continue;const g=Math.floor(m[0]),u=Math.max(r,Math.ceil(m[1])-g+1);for(const f of ln(g,u,r,i))h.push([f,l])}return{theta:n,gx:a,gy:p,gridX0:d,gridY0:c,patches:h,frame:s}}const Xi=8,En=new MessageChannel,Rn=[];En.port1.onmessage=()=>{var n;return(n=Rn.shift())==null?void 0:n()};const ji=()=>new Promise(n=>{Rn.push(n),En.port2.postMessage(0)}),Yi=n=>Math.ceil(n*Math.SQRT2),qi=128<<20,Ki=2,Ze=1e-6,Ue=6e4,un=4,Zi=48<<20,Qi=16;function ze(n,e,t){let r;const i=new Promise((s,o)=>{r=setTimeout(()=>o(new Xe(We.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,i]).finally(()=>clearTimeout(r))}function Ji(n,e,t,r){let i=1/0,s=-1/0,o=1/0,d=-1/0,c=1/0,a=-1/0;for(const[p,h,l]of n)i=Math.min(i,p-e.gridY0),s=Math.max(s,p-e.gridY0+t),o=Math.min(o,l-e.gridX0),d=Math.max(d,l-e.gridX0+t),c=Math.min(c,h-r),a=Math.max(a,h-r+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,s),rx0:Math.max(0,o),rx1:Math.min(e.gx,d),rz0:c,rz1:a}}function eo(n,e,t){const{gx:r,gy:i}=n,s=new Int32Array(i).fill(r),o=new Int32Array(i).fill(0);for(const[a,p]of n.patches){const h=Math.max(0,a-n.gridY0),l=Math.min(i,a-n.gridY0+e),m=Math.max(0,p-n.gridX0),g=Math.min(r,p-n.gridX0+e);for(let u=h;u<l;u++)m<s[u]&&(s[u]=m),g>o[u]&&(o[u]=g)}const d=new Uint32Array(3*i+1);let c=0;for(let a=0;a<i;a++){const p=Math.max(0,o[a]-s[a]);d[a]=c,d[i+1+a]=p?s[a]:0,d[2*i+1+a]=p,c+=p*t}return d[i]=c,{table:d,count:c}}function to(n,e){const t=new Float32Array(n);for(let r=0;r<n;r++)t[r]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*r/(n-1)));return t}function no(n,e,t){const{gx:r,gy:i,gridX0:s,gridY0:o,patches:d}=n,c=new Float32Array(r*i),a=to(e,t);for(const[p,h]of d)for(let l=0;l<e;l++){const m=p-o+l;if(m<0||m>=i)continue;const g=m*r,u=a[l];for(let f=0;f<e;f++){const y=h-s+f;y>=0&&y<r&&(c[g+y]+=u*a[f])}}return c}function ro(n,e,t,r){const{gx:i,gy:s,gridX0:o,gridY0:d,frame:{cX:c,cY:a,cos:p,sin:h}}=n,l=new Float32Array(i*s);for(let m=0;m<s;m++){const g=d+m-a;for(let u=0;u<i;u++){const f=o+u-c,y=c+f*p-g*h,_=a+f*h+g*p;if(y<-.5||_<-.5||y>r-.5||_>t-.5){l[m*i+u]=-1;continue}const w=Math.min(r-1,Math.max(0,Pt(y))),v=Math.min(t-1,Math.max(0,Pt(_)));l[m*i+u]=e[v*r+w]}}return l}class io{constructor(e,t,r,{batchSize:i}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,this.channels=t.model.output_channels,this.bufferLimit=Math.min(qi,e.device.limits.maxStorageBufferBindingSize),this.network=new zi(e,t,r,i),this.blendPipeline=e.pipeline(Ni(this.network.store,this.channels)),this.inputPlan=Si(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,r){var s;this.cancel(),(s=this.city)==null||s.distanceField.destroy();const i=new Ln(this.context,{layers:e,ny:t,nx:r},Yi(this.patch),this.network.store,this.inputPlan);i.scanRawBytes=Math.ceil(Zi*Math.min(1,this.batchSize/Qi)),this.city={distanceField:i,ny:t,nx:r,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:r,patch:i}=this,s=`${e}:${t}`;return((o=r.frame)==null?void 0:o.key)!==s&&(r.frame={key:s,layout:Wi(e,r.nx,r.ny,i,t),final:null,roof:null}),r.frame}finalOf(e){return e.final??(e.final=no(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=ro(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,r=e.join();if(t.storedKey===r)return!1;const{distanceField:i}=t;i.releaseGroups(),i.upGrid=null,t.storedKey=null;const[s]=i.planGroups(e,this.bufferLimit);return i.allocate([s]),await ze(i.scan(s),4*Ue,"the computation"),i.destroyed?!1:(t.group=s,t.storedKey=r,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>ze(e.popErrorScope().catch(()=>null),Ue,"the graphics device"),r=await t(),i=await t();if(r)throw new Xe(We.GPU,`out of graphics memory: ${r.message}`);if(i)throw new Xe(We.GPU,`the graphics device refused the work: ${i.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,r){const i=++this.generation,s=()=>i!==this.generation,{context:o,city:d,patch:c}=this,{device:a}=o;this.openScopes();let p=null;const h=()=>this.closeScopes();try{const l=this.frameOf(t,Hi(c,r.overlap)),{layout:m}=l;if(await this.ensureLayers(e),s()||d.distanceField.destroyed)return null;const{distanceField:g,group:u}=d;if(g.upWind&&g.ensureUpTiles([u],t,m.patches,c)&&(await ze(a.queue.onSubmittedWorkDone(),Ue,"the computation"),o.releaseScratch()),s())return null;const f=eo(m,c,e.length),y=o.storage(f.count*(this.channels+1)*4);try{if(!await this.runNetwork(u,e,l,f,y,t,r,s))return null;p=await this.readField(e,m,f,y)}finally{o.free(y),o.releaseScratch()}}finally{await h()}return s()?null:p}async runNetwork(e,t,r,i,s,o,d,c){var v;const{context:a,patch:p}=this,{layout:h}=r,{device:l}=a,{distanceField:m}=this.city,g=a.upload(i.table),u=[],f=t[0],y=!!(d.shouldDraw&&d.onDraw)&&t.length===1;let _=null,w=null;y&&(_={final:this.finalOf(r),roof:this.roofOf(r)},(v=d.onStart)==null||v.call(d,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const $=t.length*h.patches.length;for(let b=0;b<$;){if(c())return!1;const x=Math.floor(b/h.patches.length),S=b%h.patches.length,k=h.patches.slice(S,S+this.batchSize).map(([A,E])=>[A,t[x],E]);b+=k.length;const C=new Int32Array(k.flat()),T=l.createCommandEncoder(),L=m.assemble(T,C,e,o,p,this.network.inputBuffer),P=this.network.encode(T,k.length),B=Ji(k,h,p,f);if(this.encodeBlend(T,P,L,s,g,k.length,B,h,f),l.queue.submit([T.finish()]),a.free(L),a.releaseScratch(),u.push(l.queue.onSubmittedWorkDone()),u.length>Ki&&await ze(u.shift(),Ue,"the computation"),y){w=oo(w,B);const A=b>=$;if(w&&w.ry1>w.ry0&&w.rx1>w.rx0&&(A||d.shouldDraw())){const E=w;w=null;const H=await this.readRect(E,h,i,s,_,t[0]);if(c())return!1;d.onDraw({...H,stride:this.channels+2,channels:this.channels,theta:o,readyCount:b,patchCount:$})}}}return await ze(Promise.all(u),Ue,"the computation"),!0}finally{a.free(g)}}encodeBlend(e,t,r,i,s,o,d,c,a){const{context:p,patch:h}=this,{gy:l}=c,{ry0:m,ry1:g,rx0:u,rx1:f,rz0:y,rz1:_}=d;if(!(g>m&&f>u))return;const w=e.beginComputePass();p.dispatch(w,this.blendPipeline,[t,r,i,s,p.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",l],["u",a],["u",0],["u",0],["u",m],["u",y],["u",u],["u",g-m],["u",_-y],["u",f-u],["i",c.gridY0],["i",c.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(g-m)*(_-y)*(f-u)),w.end()}async readRect({ry0:e,ry1:t,rx0:r,rx1:i},s,{table:o},d,{final:c,roof:a},p){const{gx:h,gy:l}=s,m=this.channels,g=(m+1)*4,u=i-r,f=t-e,y=(b,x)=>{for(let S=e;S<t;S++){const k=o[l+1+S],C=o[2*l+1+S],T=Math.max(r,k),L=Math.min(i,k+C);L>T&&b.copyBufferToBuffer(d,(o[S]+T-k)*g,x,((S-e)*u+T-r)*g,(L-T)*g)}},_=await ze(this.context.readBack(u*f*g,y,b=>new Float32Array(b.slice(0))),Ue,"reading the wind back"),{center:w,scale:v}=this.metadata.target,$=new Float32Array(u*f*(m+2));for(let b=0;b<u*f;b++){const x=_[b*(m+1)+m],S=b*(m+2),k=x>Ze?1/x:0;for(let L=0;L<m;L++)$[S+L]=_[b*(m+1)+L]*k*v[L]+w[L];const C=(e+Math.floor(b/u))*h+r+b%u,T=a[C];$[S+m]=T<0||x<=Ze?2:T>p?1:0,$[S+m+1]=c[C]>Ze?Math.min(1,x/c[C]):0}return{x0:r,y0:e,width:u,height:f,values:$}}async readField(e,t,{table:r,count:i},s){const{gx:o,gy:d}=t,c=this.channels,a=c+1,{center:p,scale:h}=this.metadata.target,l=(f,y)=>f.copyBufferToBuffer(s,0,y,0,y.size),m=await ze(this.context.readBack(i*a*4,l,f=>new Float32Array(f.slice(0))),4*Ue,"reading the wind back"),g=e.map(f=>({layer:f,values:new Float32Array(o*d*c),weights:new Float32Array(o*d)}));let u=performance.now();for(let f=0;f<d;f++){performance.now()-u>Xi&&(await ji(),u=performance.now());const y=r[f],_=r[d+1+f],w=r[2*d+1+f];for(let v=0;v<e.length;v++){const{values:$,weights:b}=g[v];for(let x=0;x<w;x++){const S=(y+v*w+x)*a,k=f*o+_+x,C=m[S+c];if(C>Ze){b[k]=C;const T=1/C;for(let L=0;L<c;L++)$[k*c+L]=m[S+L]*T*h[L]+p[L]}else for(let T=0;T<c;T++)$[k*c+T]=p[T]}}}return{layout:t,gx:o,gy:d,layers:g}}async predict(e,t={}){const{city:r}=this,i=r.layerIndex,s=await this.predictLayers([i],e,t);if(!s)return null;const{gx:o,gy:d,layers:[{values:c,weights:a}]}=s,p=this.channels,h=this.roofOf(r.frame),l=new Uint8Array(o*d);let m=0;for(let g=0;g<o*d;g++){if(h[g]<0){l[g]=2;continue}if(a[g]<=Ze){l[g]=2;continue}l[g]=h[g]>i?1:0;for(let u=0;u<p;u++)if(!Number.isFinite(c[g*p+u])){m+=1;break}}return{values:c,solid:l,theta:e,height:d,width:o,nonFinite:m}}}function oo(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const so=16,ao=.4,lo=6.278,uo=1e-6;function co(){let n=null,e=null,t=null,r=null,i=null,s=0;async function o({allowF16:l=!0}={},m){if(!t){const g="/cityffdv2-demo/flume/model-v3/",u=await Promise.all(["metadata.json","weights.bin"].map(async f=>{const y=await fetch(g+f,{signal:m});if(!y.ok)throw new Error("Could not load model v3 "+f+" (HTTP "+y.status+").");return f.endsWith(".bin")?y.arrayBuffer():y.json()}));t=u[0],r=u[1]}n&&(l||!n.useF16)||(d(),n=await Et.create({allowF16:l}),e=new io(n,t,r,{batchSize:so}))}function d(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,i=null}function c(l,m,g){const u=m.gx*m.gy,f=e.roofOf(e.city.frame),y=new Uint8Array(u);for(let v=0;v<u;v++)f[v]<0||g.weights[v]<=uo?y[v]=2:f[v]>g.layer?y[v]=1:y[v]=0;const _={width:m.gx,height:m.gy,originX:m.layout.gridX0,values:g.values,solid:y},w=l.plan.indexOf(g.layer);return Fr(l,w,_),Lr(g.values,y)}async function a(l,m,g,u,f,y){for(let _=0;_<g.length;_+=un){if(l.generation!==s||f!=null&&f.aborted)return!1;const w=g.slice(_,_+un).sort(($,b)=>$-b),v=await e.predictLayers(w,u,{overlap:ao});if(!v||l.generation!==s)return!1;(l.volume===null||l.volume===void 0)&&(l.volume=Mn({width:v.gx,height:v.gy,originX:v.layout.gridX0,originY:v.layout.gridY0,theta:u},l.layers,!1));for(const $ of v.layers)l.nonFinite+=c(l.volume,v,$);y==null||y()}return!0}async function p(l,m,g,{signal:u,onFirstWave:f,onMoreLayers:y}={},_=!0){await o({allowF16:_},u),l!==i&&(e.setCity(l.layers,l.ny,l.nx),i=l);const w=xn(m);s++;const v={layers:m,volume:null,nonFinite:0,generation:s};if(!await a(v,l,w,g,u))return null;if(v.nonFinite&&n.useF16&&_)return p(l,m,g,{signal:u,onFirstWave:f,onMoreLayers:y},!1);if(v.nonFinite)throw new Error("Model v3 gave invalid values (no number or no wind) on this graphics card.");f==null||f({volume:v.volume,referenceSpeed:lo});const b=Tr(m,w);if(b.length){if(!await a(v,l,b,g,u,()=>y==null?void 0:y()))return null;if(v.nonFinite)throw new Error("Model v3 gave invalid values (no number or no wind) on this graphics card.")}return e.releaseLayers(),v.volume}async function h(l,m,g){await o({},g);const u=e.inputPlan.stored,f=Math.ceil(e.patch*Math.SQRT2),y=new Ln(n,{layers:l.layers,ny:l.ny,nx:l.nx},f,e.network.store,e.inputPlan),_=y.gx*y.gy*u.length*4;let w=null;y.packGroup=async()=>{w=await n.readBack(_,(b,x)=>b.copyBufferToBuffer(y.sumsBuffer,0,x,0,_),b=>new Float32Array(b.slice(0)).map(S=>S/ee))};try{const b=y.planGroups([m],e.bufferLimit);y.allocate(b),await y.scan(b[0])}finally{y.destroy()}if(!w)throw new Error("Model v3 MDDF could not be read.");const v=u.map(b=>b.part==="dc"?"upper_distance_"+b.part:"upper_distance_"+b.part+b.mode);return{values:w,ny:y.gy,nx:y.gx,margin:f,layerIndex:m,channels:v,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:p,readMddf:h,cancel(){s++,e==null||e.cancel()},destroy:d}}const cn={v2:gi,v3:co};function fo(){const n=It({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=!1,r=0;const i={},s=new AbortController;function o(){try{for(const g of Object.values(i))g.destroy()}finally{for(const g of Object.keys(i))delete i[g]}}async function d(){if(e)return;const u=await fetch("/cityffdv2-demo/flume/colorbar.json",{signal:s.signal});if(!u.ok)throw new Error("Could not load colorbar.json (HTTP "+u.status+").");e=await u.json()}async function c(g,u){if(t||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0,r++;const f=r,y=()=>t||f!==r;try{if(!cn[u.model])throw new Error("Unknown model: "+u.model+".");return n.stage="Loading model",await d(),y()?null:await a(g,u,y,f)}catch(_){return!t&&f===r&&(n.error=_.message,n.stage="Prediction failed",n.prediction=null),o(),null}finally{t?o():n.busy=!1}}async function a(g,u,f,y){const _=Lt[u.model];if(!i[u.model]){const k=cn[u.model];i[u.model]=k()}const w=i[u.model];n.stage=_+" · predicting the first layers";const v=performance.now();let $=null;const b=u.layers.length;function x(k){const C=k/b,T=Math.round(C*100);n.progress=C,n.stage=_+" · "+k+" / "+b+" layers ("+T+"%)"}if(!await w.run(g,u.layers,u.thetaRad,{signal:s.signal,onFirstWave({volume:k,referenceSpeed:C}){f()||($={...k,grid:g,settings:{...u},referenceSpeed:C,modelLabel:_,colorbar:e,patchCount:0,milliseconds:performance.now()-v,inputRevision:y},n.prediction=Ye($),n.layersReady=k.layers.length,x(k.layers.length))},onProgress({layersDone:k,scanShare:C}){if(!(f()||!$)){if(C<1){n.progress=k/b,n.stage=_+" · preparing building distances (MDDF) "+Math.round(C*100)+"%";return}x(k)}},onMoreLayers(){f()||!$||($.milliseconds=performance.now()-v,n.layersReady=$.layers.length,x($.layers.length))}})||f())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",$}async function p(g){let u=null;if(n.prediction&&(u=i[n.prediction.settings.model]),!u||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{return await u.readMddf(n.prediction.grid,g,s.signal)}finally{n.downloading=!1,t&&o()}}function h(){n.busy&&r++;for(const g of Object.values(i))g.cancel()}function l(){r++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function m(){t=!0,r++,s.abort(),!n.busy&&!n.downloading&&o()}return At(m),{state:n,run:c,readMddf:p,cancel:h,invalidate:l,dispose:m}}const Fe="flume-retained-buildings",dn="flume-retained-selected";function go(n,e){let t=null,r=null,i=null,s=null,o=null;function d(){if(t){n.getSource(Fe)?i!==s&&n.getSource(Fe).setData(i):n.addSource(Fe,{type:"geojson",data:i,maxzoom:22,tolerance:0}),s=i;for(const[l,m]of[[Fe,!1],[dn,!0]]){let g=t.filters.surroundings,u=t.surroundingsOpacity,f=Ce().previewBuildings;m&&(g=t.filters.selected,u=1,f=Ce().selectedBuildings),n.getLayer(l)?n.setFilter(l,g):n.addLayer({id:l,type:"fill-extrusion",source:Fe,maxzoom:Je,filter:g,layout:{visibility:"visible"},paint:{"fill-extrusion-color":f,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":u}}),n.setPaintProperty(l,"fill-extrusion-opacity",u);let y="none";(m||t.showSurroundings)&&(y="visible"),n.setLayoutProperty(l,"visibility",y)}}}function c(){if(!(!t||n.getZoom()<Je||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const l=t.dataZoom??Je,g=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(u=>!u.tile||u.tile.z>=l);i=dt([...i.features,...g]),d()}catch(l){e==null||e(l)}}function a(l){!t||l!=null&&l.sourceId&&l.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(c,120))}function p(l){var u;const m=r!==l.collection,g=(t==null?void 0:t.sourceId)!==l.sourceId||(t==null?void 0:t.sourceLayer)!==l.sourceLayer;if(m||g){let f=(u=l.collection)==null?void 0:u.features;f==null&&(f=[]),i=dt(f),r=l.collection}t=l,d(),a()}function h(){clearTimeout(o),t=null,r=null,i=null,s=null;for(const l of[dn,Fe])n.getLayer(l)&&n.removeLayer(l);n.getSource(Fe)&&n.removeSource(Fe)}return n.on("sourcedata",a),n.on("moveend",a),{update:p,clear:h,dispose(){n.off("sourcedata",a),n.off("moveend",a),h()}}}function po(n,e){const{nx:t,ny:r,groundLayers:i}=n,s=ye,o=(c,a)=>i[a*t+c]*be>e,d=[];for(let c=1;c<r;c++){let a=-1;for(let p=0;p<=t;p++){const h=p<t&&o(p,c-1)!==o(p,c);h&&a<0&&(a=p),!h&&a>=0&&(d.push(a*s,c*s,p*s,c*s),a=-1)}}for(let c=1;c<t;c++){let a=-1;for(let p=0;p<=r;p++){const h=p<r&&o(c-1,p)!==o(c,p);h&&a<0&&(a=p),!h&&a>=0&&(d.push(c*s,a*s,c*s,p*s),a=-1)}}return new Float32Array(d)}const Le=4,ho=5,mo=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,yo=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function wo(n,e,t){var Ie;let r,i,s,o,d,c,a=null,p,h,l=null,m,g,u,f,y="",_=0;const w=new Ot,v=new Ot,$=((Ie=n.grid.terrain)==null?void 0:Ie.lowM)??0,b=wn.MercatorCoordinate.fromLngLat(n.grid.origin,$),x=b.meterInMercatorCoordinateUnits(),[S,k]=Gt(n,n.width/2-.5,n.height/2-.5),C=[new ot(new we(1,0,0),0),new ot(new we(-1,0,0),n.grid.nx*ye),new ot(new we(0,1,0),0),new ot(new we(0,-1,0),n.grid.ny*ye)],T=()=>Number(e.speedMps)/n.referenceSpeed,L=new Map;function P(O){let U=1/0,W=-1/0;for(let G=0;G<n.layers.length;G++){const K=O+"@"+n.slots[G];L.has(K)||L.set(K,Ht(Gr(n,G),O));const[ie,le]=L.get(K);U=Math.min(U,ie),W=Math.max(W,le)}return[U,W]}let B=[0,0],A=null,E=null;function H(O,U){var oe;const W=ft(n.grid.origin),G=((oe=n.grid.terrain)==null?void 0:oe.lowM)??0,K=Math.cos(n.theta),ie=Math.sin(n.theta),le=a.attributes.position,Q=Math.ceil((O-1)/Le)+1,De=Math.ceil((U-1)/Le)+1,xe=new Float32Array(Q*De);for(let te=0;te<De;te++)for(let J=0;J<Q;J++){const he=Math.min(U-1,te*Le),Te=Math.min(O-1,J*Le),Me=he*O+Te,_e=le.getX(Me),Y=le.getY(Me),ge=W([S+_e*K-Y*ie,k+_e*ie+Y*K]),ce=r.queryTerrainElevation(ge,{exaggerated:!1});ce==null?xe[te*Q+J]=NaN:xe[te*Q+J]=ce-G}return{values:xe,columns:Q,rows:De}}function ue(O){const{width:U,height:W,liftM:G}=O;if(U<2||W<2)return c;a==null&&(a=new mt(U*ye,W*ye,U-1,W-1)),A=O,E=H(U,W);const{values:K,columns:ie,rows:le}=E,Q=(oe,te)=>K[te*ie+oe],De=O.settings.heightM,xe=a.attributes.position;for(let oe=0;oe<W;oe++)for(let te=0;te<U;te++){const J=Math.min(Math.max(0,ie-2),Math.floor(te/Le)),he=Math.min(Math.max(0,le-2),Math.floor(oe/Le)),Te=Math.min(ie-1,J+1),Me=Math.min(le-1,he+1),_e=Math.min(1,te/Le-J),Y=Math.min(1,oe/Le-he),ge=(Q(J,he)*(1-_e)+Q(Te,he)*_e)*(1-Y)+(Q(J,Me)*(1-_e)+Q(Te,Me)*_e)*Y;let ce;Number.isFinite(ge)?ce=Math.max(0,ge+Hr-De):ce=G[(W-1-oe)*U+te],xe.setZ(oe*U+te,ce)}return xe.needsUpdate=!0,a}let V=!1;const ne=()=>{V=!0};function re(){if(!V||!r||!A||(d==null?void 0:d.geometry)!==a)return;V=!1;const O=E.values;H(A.width,A.height).values.every((G,K)=>Number.isNaN(G)&&Number.isNaN(O[K])||Math.abs(G-O[K])<.05)||(ue(A),r.triggerRepaint())}function ve(){if(!i)return;const O=tt.find(Y=>Y.id===e.variable)??tt[0];u==null||u.dispose(),u=new Ut(Rr(O.ramp),256,1,zt),u.colorSpace=pr,u.minFilter=st,u.magFilter=st,u.needsUpdate=!0;let U=e.plane;e.plane==="3d"&&(U="h");const W=Dr(n,e.planeOffsetM),G=!!(e.sliceAboveGround&&n.grid.groundLayers),K=e.view==="slice"||e.view==="particles"&&e.particles==="white";if(d.visible=K&&U==="h",p.visible=K&&U==="v",h.visible=d.visible&&!G&&!!n.grid.groundLayers,h.visible){const Y=Number(e.sliceHeightM)||0,ge=Math.max(be/2,Math.min(_n(n),Y));if(ge!==l){const ce=po(n.grid,ge),nt=new Float32Array(ce.length/2*3);for(let Ve=0;Ve<ce.length/2;Ve++)nt[Ve*3]=ce[Ve*2],nt[Ve*3+1]=ce[Ve*2+1],nt[Ve*3+2]=ge+.3;h.geometry.dispose(),h.geometry=new Mt,h.geometry.setAttribute("position",new bn(nt,3)),l=ge}}let ie;U==="v"?ie="v"+W:G?ie=e.sliceHeightM+" above ground":ie=e.sliceHeightM+"";const le=O.id+"@"+ie,Q=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white";if((K||!Q)&&le!==y){let Y;if(U==="v"){Y=Vr(n,W);const[ge,ce]=Gt(n,(n.width-1)/2,W);p.position.set(ge,ce,Y.height*be/2)}else{const ge=$n(n,Number(e.sliceHeightM),G);Y=Or(ge,ho),d.position.z=Y.settings.heightM,G?d.geometry=ue(Y):d.geometry=c}g==null||g.dispose(),g=new Ut(Ur(Y,O.id),Y.width,Y.height,zt,hr),g.minFilter=st,g.magFilter=st,g.needsUpdate=!0,B=Ht(Y,O.id),y=le}const xe=T();let oe=xe;O.id==="T"&&(oe=1),O.id==="tke"&&(oe=xe*xe);let te=B;Q&&(te=P(O.id));let J=zr(te,O.id);if(J==null){const Y=n.settings.layers.at(-1);J=Nr(n.colorbar,O.id,Y,"99.9",1)}f.uniforms.field.value=g??null,f.uniforms.palette.value=u,f.uniforms.range.value.set(...J),m.enabled=e.view!=="off",m.mesh.visible=m.enabled;const he=e.view==="slice"||e.particles==="white";let Te=e.plane;he&&(Te=U),Te==="h"?m.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:he,aboveGround:G}):Te==="v"?m.setPlane({kind:"v",row:W,flat:he}):m.setPlane(null);let Me=Wt[e.density];Me==null&&(Me=Wt.medium),m.setCount(Me);let _e=e.particles;he&&(_e="white"),m.setColouring(_e,O.id,u,J),t==null||t({low:J[0]*oe,high:J[1]*oe,...O}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:ve,refresh(){y="",ve()},onAdd(O,U){r=O,s=new or,o=new sr,i=new ar({canvas:r.getCanvas(),context:U,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,f=new lr({vertexShader:mo,fragmentShader:yo,uniforms:{field:{value:null},palette:{value:null},range:{value:new cr(0,1)}},transparent:!0,depthWrite:!1,side:ur,clipping:!0,clippingPlanes:C}),c=new mt(n.width*ye,n.height*ye),d=new xt(c,f),d.position.set(S,k,0),d.rotation.z=n.theta,d.frustumCulled=!1,s.add(d),h=new dr(new Mt,new fr({color:Ce().sliceCut})),h.frustumCulled=!1,h.visible=!1,s.add(h);const W=(n.layers.at(-1)+1)*be,G=new mt(n.width*ye,W);G.rotateX(Math.PI/2),p=new xt(G,f),p.rotation.z=n.theta,p.frustumCulled=!1,s.add(p),m=new gr(Er(n)),s.add(m.mesh),r.on("moveend",ne),r.on("sourcedata",ne),r.on("idle",re),ve()},render(O,U){const W=performance.now();let G=0;_&&(G=(W-_)/1e3),G=Math.min(G,.05),_=W,w.makeTranslation(b.x,b.y,b.z).scale(new we(x,-x,x)),o.projectionMatrix.copy(v.fromArray(U)).multiply(w),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),m.setViewport(O.drawingBufferWidth,O.drawingBufferHeight);const K=m.enabled&&!e.paused;K&&m.step(G,T()),i.resetState(),i.setViewport(0,0,O.drawingBufferWidth,O.drawingBufferHeight),i.render(s,o),K&&r.triggerRepaint()},onRemove(){r==null||r.off("moveend",ne),r==null||r.off("sourcedata",ne),r==null||r.off("idle",re),g==null||g.dispose(),u==null||u.dispose(),c==null||c.dispose(),a==null||a.dispose(),p==null||p.geometry.dispose(),h==null||h.geometry.dispose(),h==null||h.material.dispose(),f==null||f.dispose(),m==null||m.dispose(),i==null||i.dispose(),r=null,i=null}}}const vt="flume-field",Qe="flume-buildings";function Dn(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function bo(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function vo(n,e,t){let r=null,i=null;const s=new Map,o=go(n,t);function d(){n.getLayer(vt)&&n.removeLayer(vt),r=null}function c(){for(const[h,l]of s)n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",l.visibility),n.setPaintProperty(h,l.property,l.opacity),n.setFilter(h,l.filter),n.setLayerZoomRange(h,l.minzoom,l.maxzoom),l.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",l.color));s.clear()}function a(h){for(const l of n.getStyle().layers){if(l.id.startsWith("flume-"))continue;const m=bo(l);if(!m)continue;const g=l.type==="fill-extrusion";let u;g&&(u=n.getPaintProperty(l.id,"fill-extrusion-color")??null),s.set(l.id,{visibility:n.getLayoutProperty(l.id,"visibility")??"visible",property:m,opacity:n.getPaintProperty(l.id,m)??1,filter:n.getFilter(l.id)??null,minzoom:l.minzoom??0,maxzoom:l.maxzoom??24,color:u}),n.setPaintProperty(l.id,m,Xt),g&&n.setPaintProperty(l.id,"fill-extrusion-color",Ce().previewBuildings),h||n.setLayoutProperty(l.id,"visibility","none")}}function p({source:h,input:l,prediction:m,preview:g,display:u}){if(m!==i&&(d(),i=m),!m&&n.getLayer(Qe)&&n.removeLayer(Qe),c(),tr(n,Dn(h)),!m){o.clear(),_t(n,g);return}_t(n,null);let f="city-concordia-3d";h==="osm"&&(f="city-osm-3d");const y=nr.find(w=>w.id===f),_=kn(l.buildings.features,n.getFilter(y.id));a(u.showSurroundings),n.setFilter(y.id,_.surroundings),n.setLayerZoomRange(y.id,Je,y.layer.maxzoom??24),n.getLayer(Qe)?n.setFilter(Qe,_.selected):n.addLayer({...y.layer,id:Qe,minzoom:Je,layout:{visibility:"visible"},filter:_.selected,paint:{...y.layer.paint,"fill-extrusion-color":Ce().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:y.layer.source,sourceLayer:y.layer["source-layer"],collection:g,dataZoom:l.dataZoom,filters:_,surroundingsOpacity:Xt,showSurroundings:u.showSurroundings}),n.getLayer(vt)||(r=wo(m,u,e),n.addLayer(r)),n.triggerRepaint()}return{update:p,configure(){r==null||r.configure()},refresh(){r==null||r.refresh()},beforeStyleChange(){d(),i=null,s.clear()},dispose(){d(),o.dispose(),s.clear()}}}const je="flume-terrain-dem",ut="flume-terrain-hillshade";function xo(n,e){var t,r,i;if(e){if(n.getSource(je)||n.addSource(je,{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),!n.getLayer(ut)){const s=(t=n.getStyle().layers.find(o=>o.type==="symbol"))==null?void 0:t.id;n.addLayer({id:ut,type:"hillshade",source:je,paint:{"hillshade-exaggeration":.8,"hillshade-shadow-color":"#1b1f24","hillshade-highlight-color":"#f4f1e8","hillshade-accent-color":"#5b5544"}},s)}((r=n.getTerrain())==null?void 0:r.source)!==je&&n.setTerrain({source:je,exaggeration:1})}else((i=n.getTerrain())==null?void 0:i.source)===je&&n.setTerrain(null),n.getLayer(ut)&&n.removeLayer(ut)}function He(n,e,t,r,i){let s=1;for(const c of t)s*=c;if(s!==e.length)throw new Error("Invalid "+n+" shape.");const o=new Uint8Array(e.length*4),d=new DataView(o.buffer);for(let c=0;c<e.length;c++){if(!Number.isFinite(e[c]))throw new Error("Cannot export non-finite "+n);d.setFloat32(c*4,e[c],!0)}return{name:n,content:o,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function Vn(n,e,t,r,i=null){var o,d,c;const s={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((o=n.selection)==null?void 0:o.geometry)??((d=n.polygon)==null?void 0:d.geometry),computationalDomain:(c=n.polygon)==null?void 0:c.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:r.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(s.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(a=>(a+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),s.files=Object.fromEntries(t.map(a=>[a.name,a.description])),[{name:"metadata.json",content:JSON.stringify(s,null,2)},...t.map(({name:a,content:p})=>({name:a,content:p}))]}function On(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(d=>o+"_"+d)),i=He("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),s=e.channels??r;return[He("mddf.f32.bin",e.values,[e.ny,e.nx,s.length],s,"m"),i]}function Mo(n){const e=Sn(n),t=n.width*n.height,r=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t),o=new Float32Array(t);for(let a=0;a<t;a++){const p=a*5;r.set([e[p],e[p+2],e[p+1]],a*3),i[a]=e[p+3],s[a]=e[p+4],o[a]=Math.hypot(e[p],e[p+1],e[p+2])}const d=[n.height,n.width],c=[He("velocity.f32.bin",r,[...d,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:d,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},He("speed.f32.bin",o,d,["speed"],"m/s")];return n.settings.model!=="v2"&&c.push(He("temperature.f32.bin",i,d,["T"],"degC"),He("tke.f32.bin",s,d,["TKE"],"m2/s2")),c}function _o(n){const e=n.width*n.height,t=n.settings.layers.length,r=Sn(n),i=new Float32Array(t*e*3);for(let s=0;s<t*e;s++)i.set([r[s*5],r[s*5+2],r[s*5+1]],s*3);return[He("velocity3d.f32.bin",i,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function $o(n,e,t){return Vn(n,t,On(t,e),e)}function ko(n,e,t,r=null){const i=[...On(t,e),...Mo(t)];return r&&i.push(..._o(r)),i.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),Vn(n,t,i,e,r)}class So{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let s=0;e.traverse(function(y){if(y.isMesh){const _=y.geometry,w=_.index,v=_.getAttribute("position");s+=w!==null?w.count/3:v.count/3,i.push({object3d:y,geometry:_})}});let o,d=80;if(r===!0){const y=s*2+s*3*4*4+80+4,_=new ArrayBuffer(y);o=new DataView(_),o.setUint32(d,s,!0),d+=4}else o="",o+=`solid exported
`;const c=new we,a=new we,p=new we,h=new we,l=new we,m=new we;for(let y=0,_=i.length;y<_;y++){const w=i[y].object3d,v=i[y].geometry,$=v.index,b=v.getAttribute("position");if($!==null)for(let x=0;x<$.count;x+=3){const S=$.getX(x+0),k=$.getX(x+1),C=$.getX(x+2);g(S,k,C,b,w)}else for(let x=0;x<b.count;x+=3){const S=x+0,k=x+1,C=x+2;g(S,k,C,b,w)}}return r===!1&&(o+=`endsolid exported
`),o;function g(y,_,w,v,$){c.fromBufferAttribute(v,y),a.fromBufferAttribute(v,_),p.fromBufferAttribute(v,w),$.isSkinnedMesh===!0&&($.applyBoneTransform(y,c),$.applyBoneTransform(_,a),$.applyBoneTransform(w,p)),c.applyMatrix4($.matrixWorld),a.applyMatrix4($.matrixWorld),p.applyMatrix4($.matrixWorld),u(c,a,p),f(c),f(a),f(p),r===!0?(o.setUint16(d,0,!0),d+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function u(y,_,w){h.subVectors(w,_),l.subVectors(y,_),h.cross(l).normalize(),m.copy(h).normalize(),r===!0?(o.setFloat32(d,m.x,!0),d+=4,o.setFloat32(d,m.y,!0),d+=4,o.setFloat32(d,m.z,!0),d+=4):(o+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,o+=`		outer loop
`)}function f(y){r===!0?(o.setFloat32(d,y.x,!0),d+=4,o.setFloat32(d,y.y,!0),d+=4,o.setFloat32(d,y.z,!0),d+=4):o+="			vertex "+y.x+" "+y.y+" "+y.z+`
`}}}async function Bo(n,e,t={}){var y,_;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((y=e.layers)==null?void 0:y.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:s,spacingM:o,layerSpacingM:d}=e,c=(w,v)=>w<0||v<0||w>=r||v>=i?0:s[v*r+w],a=async()=>{var w;if(await new Promise(v=>setTimeout(v,0)),(w=t.shouldCancel)!=null&&w.call(t))throw new Error("Model export cancelled.")};let p=0;for(let w=0;w<i;w++){w%32===0&&await a();for(let v=0;v<r;v++){const $=c(v,w);if(!Number.isInteger($)||$<0||$>160)throw new Error("Invalid MDDF building height.");$&&(p+=2+ +($>c(v-1,w))+ +($>c(v+1,w))+ +($>c(v,w-1))+ +($>c(v,w+1)))}}if(!p)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(p*18);let l=0;const m=(w,v,$,b)=>{for(const x of[w,v,$,w,$,b])h.set(x,l),l+=3};for(let w=0;w<i;w++){w%32===0&&await a();for(let v=0;v<r;v++){const $=c(v,w)*d;if(!$)continue;const b=v*o,x=b+o,S=-w*o,k=S-o;m([b,$,S],[x,$,S],[x,$,k],[b,$,k]),m([b,0,S],[b,0,k],[x,0,k],[x,0,S]);let C=c(v-1,w)*d;$>C&&m([b,C,k],[b,C,S],[b,$,S],[b,$,k]),C=c(v+1,w)*d,$>C&&m([x,C,S],[x,C,k],[x,$,k],[x,$,S]),C=c(v,w-1)*d,$>C&&m([b,C,S],[x,C,S],[x,$,S],[b,$,S]),C=c(v,w+1)*d,$>C&&m([x,C,k],[b,C,k],[b,$,k],[x,$,k])}}const g=new Mt;g.setAttribute("position",new bn(h,3));const u=new xt(g);let f;try{f=new So().parse(u,{binary:!0}).buffer}finally{g.dispose(),u.material.dispose()}return[{name:"mddf-model.stl",content:f},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(_=n.polygon)==null?void 0:_.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:o,layerSpacingM:d,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:p*2}}},null,2)}]}const Un=Symbol("flume");function ht(){return zn(Un)}function Po(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=et(null),t=et(!1);let r=null,i=null,s=null,o=!1,d=!1;const c=500;let a=null,p=!1;const h=()=>r,{currentPresetName:l}=fn();jt(l.value);const m=rr({getMap:h,accessToken:n}),g=oi({getMap:h,ready:t,onChange:_,accessToken:n}),u=fo(),f=It({mapCreated:!1,mapReady:t,error:"",area:g.state,grid:null,terrain:!1,terrainLoading:!1,wind:{...Yt},engine:u.state,retryNote:"",display:{variable:"speed",speedMps:Yt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:Xr,sliceAboveGround:!0,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),y=q(()=>f.downloading||f.engine.downloading||f.area.loading);function _(){clearTimeout(a),d=!1,v++,f.terrainLoading=!1,f.grid=null,f.legend=null,f.error="",f.downloadError="",u.invalidate(),C()}let w=null,v=0;async function $(){if(y.value)return;const B=await g.captureRegion();if(!(!B||o))try{kn(B.buildings.features),w=B,await b(B)}catch(A){f.error=A.message}}async function b(B){v++;const A=v;let E=Yr(B);if(f.terrain){f.terrainLoading=!0;try{const H=await ui(E,n);E=ci(E,H)}finally{A===v&&(f.terrainLoading=!1)}}A!==v||o||(f.grid=Ye(E),f.error="",x())}me(()=>f.terrain,async()=>{if(!f.grid||!w)return;const B=w;_();try{await b(B)}catch(A){f.error=A.message}});function x(){clearTimeout(a),a=setTimeout(()=>S(),qr)}async function S(){if(clearTimeout(a),!(o||!f.grid||y.value)){if(p||(f.retryNote=""),p=!1,f.engine.busy){d=!0,u.cancel();return}try{const B=Bn(f.grid,f.wind.layerSpacingM),E={...Wr(f.wind),model:f.wind.model,layers:B};f.display.speedMps=E.speedMps,f.error="",!await u.run(f.grid,E)&&f.engine.error&&!d&&k(f.engine.error)}catch(B){f.error=B.message}d&&!o&&(d=!1,await S())}}function k(B){const A=2*Pn(f.wind.layerSpacingM)*be;if(A>jr||!navigator.gpu)return;const E=B.replace(/\.?$/,".");f.retryNote=E+" Running again with a layer every "+A+" m.",p=!0,f.wind.layerSpacingM=A}function C(){!r||!t.value||(xo(r,f.terrain),i==null||i.update({source:f.area.source,input:f.area.snapshot,prediction:f.engine.prediction,preview:g.getPreview(),display:f.display}))}async function T(B){if(!(y.value||!f.grid)&&!(B!=="model"&&(f.engine.busy||!f.engine.prediction))){f.downloading=!0,f.downloadError="";try{const A=f.area.snapshot;let E;if(B==="model")E=await Bo(A,f.grid,{shouldCancel:()=>o});else{const ue=Number(f.display.speedMps);if(!wt(ue))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const V=f.engine.prediction,ne={...V,settings:{...V.settings,speedMps:ue}},re=$n(ne,f.display.sliceHeightM),ve=await u.readMddf(re.settings.layerIndex);B==="mddf"?E=$o(A,ve,re):E=ko(A,ve,re,ne)}const H=await br(E);o||vr(H,"flume-"+B+".zip","application/zip")}catch(A){o||(f.downloadError=A.message)}finally{o||(f.downloading=!1)}}}me([()=>f.terrain,()=>f.grid,()=>f.engine.prediction,()=>f.area.source,()=>f.display.showSurroundings],C);let L=null;me(()=>f.engine.layersReady,()=>{L||(L=setTimeout(()=>{L=null,i==null||i.refresh()},c))}),me(()=>[f.wind.directionDeg,f.wind.model,f.wind.layerSpacingM],()=>{f.grid&&x()}),me(()=>f.wind.speedMps,B=>{wt(B)&&(f.display.speedMps=Number(B))}),me(()=>f.engine.prediction,B=>{const A=tt.find(E=>E.id===f.display.variable);(B==null?void 0:B.settings.model)==="v2"&&(A!=null&&A.notInV2)&&(f.display.variable="speed")}),me(()=>[f.display.variable,f.display.particles,f.display.density,f.display.speedMps,f.display.view,f.display.plane,f.display.sliceHeightM,f.display.sliceAboveGround,f.display.planeOffsetM],()=>{wt(f.display.speedMps)?(f.downloadError="",i==null||i.configure()):f.downloadError="Use a wind speed between 0.5 and 20 m/s."}),me(()=>f.display.paused,()=>r==null?void 0:r.triggerRepaint()),me(l,B=>jt(B)),me(m.mapStyle,B=>{r&&(g.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),r.setStyle(B,{diff:!1}))}),gn(()=>{if(!(n!=null&&n.startsWith("pk."))){f.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new wn.Map({container:e.value,accessToken:n,style:m.mapStyle.value,center:Zr,zoom:Kr,pitch:0,antialias:!0,attributionControl:!1}),i=vo(r,B=>{o||(f.legend=B)},B=>{o||(f.error=B.message)}),f.mapCreated=!0,r.on("style.load",()=>{if(!o)try{ir(r,Dn(f.area.source)),t.value=!0,g.restore(),C()}catch(B){f.error=B.message}}),r.on("error",B=>{if(o)return;let A="";B.sourceId&&(A=" ("+B.sourceId+")"),f.error="Map data unavailable"+A+". Check token, allowed domains and connection."}),m.attach(),s=new ResizeObserver(()=>r==null?void 0:r.resize()),s.observe(e.value)}catch(B){f.error=B.message}}),At(()=>{o=!0,clearTimeout(a),clearTimeout(L),u.dispose(),i==null||i.dispose(),s==null||s.disconnect(),r==null||r.remove(),r=null});const P={mapElement:e,store:f,controls:m,locked:y,area:g,acceptArea:$,runPrediction:S,download:T};return Nn(Un,P),P}const Co={class:"flume-compact"},Ao={class:"map-hud-field"},Io={key:0,class:"map-hud-muted",role:"status"},To={key:1,class:"map-hud-muted"},Fo={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Lo={key:2,class:"map-hud-muted",role:"status"},Eo={key:3,class:"map-hud-muted",role:"status"},Ro={class:"map-hud-field"},Do={class:"map-hud-actions"},Vo={key:4,role:"status",class:"map-hud-muted"},Oo={key:5,class:"map-hud-muted"},Uo={key:6,class:"map-hud-muted"},zo={__name:"AreaHud",setup(n){const{store:e,area:t,locked:r,acceptArea:i}=ht(),s=vn*100,o=e.area,d=q(()=>!e.mapReady||r.value),c=q(()=>!!(o.region||o.loadedArea)),a=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],p=Cn.map(({label:g,value:u})=>({label:g,value:u}));function h(g){o.shape=g,t.startSelection()}const l={rectangle:"Click one corner, then the opposite corner.",circle:"Click the centre, then a point on the edge.",polygon:"Click the corners; click the first point to finish."},m=Qr.map(g=>({label:Lt[g],value:g}));return(g,u)=>{var x,S;const f=pn,y=Gn,_=Tt,w=hn,v=mn,$=gt,b=pt;return R(),N("div",Co,[I("div",Ao,[u[5]||(u[5]=I("span",{class:"map-hud-field__label"},"Wind model",-1)),D(f,{modelValue:M(e).wind.model,"onUpdate:modelValue":u[0]||(u[0]=k=>M(e).wind.model=k),options:M(m),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:M(r)},null,8,["modelValue","options","disabled"])]),D(y,{modelValue:M(o).source,"onUpdate:modelValue":u[1]||(u[1]=k=>M(o).source=k),label:"Buildings","aria-label":"Building source",size:"small",options:a,"text-by":"text","value-by":"value",disabled:M(r)},null,8,["modelValue","disabled"]),D(Ee,{block:"",icon:"mso-location_city",disabled:d.value,loading:M(o).loading,onClick:M(t).loadBuildings},{default:Z(()=>[...u[6]||(u[6]=[ae("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),M(o).loadedArea?(R(),N("p",Io," Loaded detailed buildings: "+F(M(o).loadedArea.count)+" parts · "+F((M(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+F((M(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km ",1)):(R(),N("p",To,"3 × 3 km around the map centre, or draw an area below.")),I("div",Fo,[u[7]||(u[7]=I("span",{class:"map-hud-muted"},"Buffer",-1)),D(_,{modelValue:M(o).bufferPercent,"onUpdate:modelValue":u[2]||(u[2]=k=>M(o).bufferPercent=k),min:0,max:s,step:5,"aria-label":"Buffer per side (%)",disabled:M(r)},null,8,["modelValue","disabled"]),D(w,{modelValue:M(o).bufferPercent,"onUpdate:modelValue":u[3]||(u[3]=k=>M(o).bufferPercent=k),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:s,step:5,disabled:M(r)},null,8,["modelValue","disabled"]),u[8]||(u[8]=I("span",{class:"map-hud-muted"},"%",-1))]),D(v,{modelValue:M(e).terrain,"onUpdate:modelValue":u[4]||(u[4]=k=>M(e).terrain=k),label:"Terrain as solid ground (test)",size:"small",disabled:M(r)||M(e).terrainLoading},null,8,["modelValue","disabled"]),M(e).terrainLoading?(R(),N("p",Lo,"Loading ground heights…")):(x=M(e).grid)!=null&&x.terrain?(R(),N("p",Eo," Ground "+F(Math.round(M(e).grid.terrain.lowM))+"–"+F(Math.round(M(e).grid.terrain.highM))+" m · test only ",1)):j("",!0),I("div",Ro,[u[9]||(u[9]=I("span",{class:"map-hud-field__label"},"Draw an area",-1)),D(f,{"model-value":M(o).shape,options:M(p),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Area shape",class:"even-toggle",disabled:d.value,"onUpdate:modelValue":h},null,8,["model-value","options","disabled"])]),I("div",Do,[D(Ee,{icon:"mso-crop_free",disabled:d.value,"aria-label":"Select region",onClick:M(t).startSelection},{default:Z(()=>[...u[10]||(u[10]=[ae("Draw area",-1)])]),_:1},8,["disabled","onClick"]),M(o).region?(R(),Ae(Ee,{key:0,icon:"mso-close",disabled:M(r),onClick:M(t).clearSelection},{default:Z(()=>[...u[11]||(u[11]=[ae("Clear",-1)])]),_:1},8,["disabled","onClick"])):j("",!0)]),M(o).drawing?(R(),N("p",Vo,F(l[M(o).shape])+" Esc cancels.",1)):(S=M(o).region)!=null&&S.mainDomain?(R(),N("p",Oo,F(M(o).region.mainDomain.extentM[0])+" × "+F(M(o).region.mainDomain.extentM[1])+" m + "+F((M(o).region.buffer.fraction*100).toFixed(0))+"% buffer ",1)):M(o).region?(R(),N("p",Uo,F(M(o).region.extentM[0])+" × "+F(M(o).region.extentM[1])+" m ",1)):j("",!0),D(Ee,{block:"",disabled:!M(e).mapReady||!c.value||M(r),loading:M(o).loading,"aria-label":M(o).region?"Use selected region":"Use full loaded area",onClick:M(i)},{default:Z(()=>[ae(F(M(o).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"]),M(o).loading?(R(),Ae($,{key:7,"model-value":M(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):j("",!0),M(o).error?(R(),Ae(b,{key:8,color:"danger"},{default:Z(()=>[ae(F(M(o).error),1)]),_:1})):j("",!0)])}}},No={class:"flex flex-col gap-3"},Go={key:0,class:"map-hud-muted"},Ho={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Wo={class:"map-hud-field"},Xo={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},jo=["aria-valuenow","aria-disabled"],Yo=["x1","y1","x2","y2"],qo=["cx","cy"],Ko={class:"flex flex-col gap-2 min-w-0"},Zo={class:"cardinals grid grid-cols-4 gap-1"},Qo={key:4,class:"flex flex-col gap-1"},Jo={role:"status",class:"map-hud-muted"},es={key:5,class:"map-hud-muted"},ts={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:r}=ht(),i=e.wind,s=e.engine,o=q(()=>!!e.grid&&!t.value),d=q(()=>{if(!e.grid)return null;const g=Bn(e.grid,i.layerSpacingM),u=Pn(i.layerSpacingM)*be,f=g.at(-1);return{topM:Math.round((f+.5)*be),layers:g.length,spacingM:u}}),c=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],a=et(null),p=q(()=>Number(i.directionDeg)*Math.PI/180);function h(g){if(!o.value||g.type==="pointermove"&&!g.buttons)return;g.type==="pointerdown"&&g.currentTarget.setPointerCapture(g.pointerId);const u=a.value.getBoundingClientRect(),f=g.clientX-u.left-u.width/2,y=-(g.clientY-u.top-u.height/2),_=Math.round(Math.atan2(y,f)*180/Math.PI);i.directionDeg=(_+360)%360}const l={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1};function m(g){if(!o.value)return;let u=l[g.key];u==null&&(u=0),u&&(g.preventDefault(),i.directionDeg=(Number(i.directionDeg)+u+360)%360)}return(g,u)=>{const f=Tt,y=hn,_=pt,w=gt;return R(),N("div",No,[M(e).grid?j("",!0):(R(),N("p",Go,"Choose a simulation area in step 1 first.")),I("div",Ho,[u[3]||(u[3]=I("span",{class:"map-hud-muted"},"Speed",-1)),D(f,{modelValue:M(i).speedMps,"onUpdate:modelValue":u[0]||(u[0]=v=>M(i).speedMps=v),min:M(Kt),max:M(qt),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),D(y,{modelValue:M(i).speedMps,"onUpdate:modelValue":u[1]||(u[1]=v=>M(i).speedMps=v),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:M(Kt),max:M(qt),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),u[4]||(u[4]=I("span",{class:"map-hud-muted"},"m/s",-1))]),I("div",Wo,[u[6]||(u[6]=I("span",{class:"map-hud-field__label"},"Wind direction (blowing towards)",-1)),I("div",Xo,[(R(),N("svg",{ref_key:"dial",ref:a,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":M(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Hn(h,["prevent"]),onPointermove:h,onKeydown:m},[u[5]||(u[5]=Wn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-6250a322></circle><text x="80" y="18" text-anchor="middle" data-v-6250a322>90°</text><text x="146" y="84" text-anchor="middle" data-v-6250a322>0°</text><text x="80" y="152" text-anchor="middle" data-v-6250a322>270°</text><text x="1" y="84" text-anchor="start" data-v-6250a322>180°</text>',5)),I("line",{x1:80-Math.cos(p.value)*30,y1:80+Math.sin(p.value)*30,x2:80+Math.cos(p.value)*42,y2:80-Math.sin(p.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Yo),I("circle",{cx:80+Math.cos(p.value)*42,cy:80-Math.sin(p.value)*42,r:"5",class:"needle-tip"},null,8,qo)],40,jo)),I("div",Ko,[D(y,{modelValue:M(i).directionDeg,"onUpdate:modelValue":u[2]||(u[2]=v=>M(i).directionDeg=v),modelModifiers:{number:!0},type:"number",label:"Degrees","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),I("div",Zo,[(R(),N(Ne,null,yn(c,v=>D(Ee,{key:v.text,disabled:!o.value,"aria-label":"Wind towards "+v.text,onClick:$=>M(i).directionDeg=v.value},{default:Z(()=>[ae(F(v.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])])]),M(e).error?(R(),Ae(_,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Z(()=>[ae(F(M(e).error),1)]),_:1})):j("",!0),M(s).error?(R(),Ae(_,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Z(()=>[ae(F(M(s).error),1)]),_:1})):j("",!0),M(e).retryNote?(R(),Ae(_,{key:3,color:"warning",dense:"",outline:"",class:"mb-0 text-xs break-words",role:"status"},{default:Z(()=>[ae(F(M(e).retryNote),1)]),_:1})):j("",!0),M(s).busy?(R(),N("div",Qo,[D(w,{"model-value":M(s).progress*100,indeterminate:M(s).progress===0},null,8,["model-value","indeterminate"]),I("p",Jo,F(M(s).stage),1)])):j("",!0),d.value&&!M(s).busy?(R(),N("p",es," 3D wind: ground to "+F(d.value.topM)+" m · "+F(d.value.layers)+" layers · every "+F(d.value.spacingM)+" m ",1)):j("",!0),D(Ee,{primary:"",block:"",disabled:!o.value,loading:M(s).busy,"aria-label":"Run prediction",onClick:M(r)},{default:Z(()=>[...u[7]||(u[7]=[ae("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},ns=Ft(ts,[["__scopeId","data-v-6250a322"]]),rs={class:"flex flex-col gap-3"},is={key:0,class:"map-hud-muted"},os={class:"map-hud-field"},ss={class:"map-hud-muted"},as={class:"map-hud-field"},ls={class:"map-hud-muted"},us={key:0,class:"hud-row hud-row--value"},cs={class:"hud-value"},ds={key:1,class:"map-hud-field"},fs={class:"map-hud-muted"},gs={key:2,class:"hud-row hud-row--value"},ps={class:"hud-value"},hs={key:0,class:"map-hud-field"},ms={class:"map-hud-muted"},ys={class:"hud-row"},ws={class:"map-hud-field"},bs={key:0,class:"flex flex-col gap-1 text-xs"},vs={class:"flex justify-between gap-2 map-hud-muted"},xs={class:"map-hud-muted"},Ms={key:3,class:"map-hud-muted",role:"status"},_s={__name:"VisualizeHud",setup(n){const{store:e}=ht(),t=e.display,r=q(()=>e.engine.prediction),i=q(()=>{var x;if(e.engine.layersReady)return e.engine.layersReady;const b=(x=r.value)==null?void 0:x.layers.length;return b||0}),s=q(()=>r.value?_n(r.value):Zt),o=q(()=>r.value?Jr(r.value):[0,0]),d=q(()=>{var S;const b=((S=r.value)==null?void 0:S.settings.model)==="v2";return tt.filter(k=>!(k.notInV2&&b)).map(k=>({label:k.label,value:k.id}))}),c={particles:"Moving dots that follow the wind.",slice:"A coloured plane through the wind."},a={"3d":"The whole 3D wind volume.",h:"A level plane at one height.",v:"An upright plane along the wind."},p={coloured:"Each particle has the colour of its value.",white:"White particles over a coloured slice at Height."},h=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],l=[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}],m=q(()=>l.filter(b=>b.value!=="3d"?!0:t.view==="particles")),g=q({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:b=>{t.plane=b}}),u=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],f=q(()=>g.value==="h"?!0:g.value==="3d"&&t.view==="particles"&&t.particles==="white"),y=[{label:"Follow ground",value:!0},{label:"Flat",value:!1}],_=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],w=q(()=>{const b=Math.round(Number(t.planeOffsetM));let x="";return b>0&&(x="+"),x+b+" m"}),v=q(()=>{const b=tt.find(x=>x.id===t.variable);return(b==null?void 0:b.ramp)===void 0||(b==null?void 0:b.ramp)===null?"turbo":b.ramp}),$=q(()=>{const b=[];for(let x=0;x<17;x++){const S=ei(v.value,x/16),k=x*100/16;b.push("rgb("+S.join(",")+") "+k+"%")}return"linear-gradient(to right,"+b.join(",")+")"});return(b,x)=>{var L;const S=pn,k=Tt,C=mn,T=jn;return R(),N("div",rs,[r.value?(R(),N(Ne,{key:1},[I("div",os,[x[10]||(x[10]=I("span",{class:"map-hud-field__label"},"Show",-1)),D(S,{modelValue:M(t).view,"onUpdate:modelValue":x[0]||(x[0]=P=>M(t).view=P),options:h,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),I("p",ss,F(c[M(t).view]),1)]),M(t).view!=="off"?(R(),N(Ne,{key:0},[I("div",as,[x[11]||(x[11]=I("span",{class:"map-hud-field__label"},"Plane",-1)),D(S,{modelValue:g.value,"onUpdate:modelValue":x[1]||(x[1]=P=>g.value=P),options:m.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),I("p",ls,F(a[g.value]),1)]),f.value?(R(),N("div",us,[x[12]||(x[12]=I("span",{class:"hud-label"},"Height",-1)),D(k,{modelValue:M(t).sliceHeightM,"onUpdate:modelValue":x[2]||(x[2]=P=>M(t).sliceHeightM=P),min:M(Zt),max:s.value,step:M(be),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),I("span",cs,F(Number(M(t).sliceHeightM).toFixed(1))+" m",1)])):j("",!0),f.value&&((L=r.value)!=null&&L.grid.terrain)?(R(),N("div",ds,[x[13]||(x[13]=I("span",{class:"map-hud-field__label"},"Over hills",-1)),D(S,{modelValue:M(t).sliceAboveGround,"onUpdate:modelValue":x[3]||(x[3]=P=>M(t).sliceAboveGround=P),options:y,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Slice height from",class:"even-toggle"},null,8,["modelValue"]),I("p",fs,F(M(t).sliceAboveGround?"The slice rises over hills higher than Height.":"The slice stays at Height and cuts through hills."),1)])):j("",!0),g.value==="v"?(R(),N("div",gs,[x[14]||(x[14]=I("span",{class:"hud-label"},"Position",-1)),D(k,{modelValue:M(t).planeOffsetM,"onUpdate:modelValue":x[4]||(x[4]=P=>M(t).planeOffsetM=P),min:o.value[0],max:o.value[1],step:M(ye),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),I("span",ps,F(w.value),1)])):j("",!0)],64)):j("",!0),M(t).view!=="off"?(R(),N(Ne,{key:1},[M(t).view==="particles"?(R(),N("div",hs,[x[15]||(x[15]=I("span",{class:"map-hud-field__label"},"Colour on",-1)),D(S,{modelValue:M(t).particles,"onUpdate:modelValue":x[5]||(x[5]=P=>M(t).particles=P),options:u,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"]),I("p",ms,F(p[M(t).particles]),1)])):j("",!0),I("div",ys,[x[16]||(x[16]=I("span",{class:"hud-label"},"Density",-1)),D(S,{modelValue:M(t).density,"onUpdate:modelValue":x[6]||(x[6]=P=>M(t).density=P),options:_,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),D(C,{modelValue:M(t).paused,"onUpdate:modelValue":x[7]||(x[7]=P=>M(t).paused=P),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):j("",!0),M(t).view!=="off"?(R(),N(Ne,{key:2},[D(T,{class:"!my-0"}),I("div",ws,[x[17]||(x[17]=I("span",{class:"map-hud-field__label"},"Colour by",-1)),D(S,{modelValue:M(t).variable,"onUpdate:modelValue":x[8]||(x[8]=P=>M(t).variable=P),options:d.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"])]),M(e).legend?(R(),N("div",bs,[I("div",{class:"colorbar",style:Xn({background:$.value})},null,4),I("div",vs,[I("span",null,F(M(e).legend.low.toFixed(2)),1),I("strong",null,F(M(e).legend.legend)+" ("+F(M(e).legend.unit)+")",1),I("span",null,F(M(e).legend.high.toFixed(2)),1)])])):j("",!0)],64)):j("",!0),D(T,{class:"!my-0"}),D(C,{modelValue:M(t).showSurroundings,"onUpdate:modelValue":x[9]||(x[9]=P=>M(t).showSurroundings=P),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),I("p",xs,F(M(Lt)[r.value.settings.model])+" · up to "+F(s.value.toFixed(0))+" m · "+F(i.value)+" / "+F(r.value.settings.layers.length)+" layers · "+F((r.value.milliseconds/1e3).toFixed(1))+" s ",1),i.value<r.value.settings.layers.length?(R(),N("p",Ms," Heights still being computed stay transparent on the slice; they fill in as the layers arrive. ")):j("",!0)],64)):(R(),N("p",is,"The 3D wind shows here once the prediction has run."))])}}},$s=Ft(_s,[["__scopeId","data-v-607a9bed"]]),ks={class:"space-y-2"},Ss={key:0,class:"map-hud-muted"},Bs={class:"grid grid-cols-2 gap-2"},Ps={__name:"DownloadsHud",setup(n){const{store:e,download:t}=ht(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(s){const o=e.engine,d=e.downloading||o.downloading,c=s!=="model",a=o.busy||!o.prediction;return d||c&&a}return(s,o)=>{const d=gt,c=pt;return R(),N("div",ks,[M(e).grid?(R(),N(Ne,{key:1},[I("div",Bs,[(R(),N(Ne,null,yn(r,a=>D(Ee,{key:a.id,icon:"mso-download","aria-label":a.label,disabled:i(a.id),onClick:p=>M(t)(a.id)},{default:Z(()=>[ae(F(a.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),M(e).downloading?(R(),Ae(d,{key:0,indeterminate:"","aria-label":"Preparing download"})):j("",!0),M(e).downloadError?(R(),Ae(c,{key:1,color:"danger"},{default:Z(()=>[ae(F(M(e).downloadError),1)]),_:1})):j("",!0)],64)):(R(),N("p",Ss,"Choose an area in step 1 first."))])}}},Cs={class:"flume-hud-stack map-hud-column"},As={class:"flume-heading map-hud-heading city-glass"},Is={class:"flume-heading__row"},Ts={"data-testid":"flume-gpu"},Fs={key:0,class:"flume-info"},Ls={class:"flume-info__title"},Es={class:"flume-info__copyright"},Rs=["href"],Ds={class:"map-hud-muted normal-case"},Vs={class:"map-hud-muted normal-case"},Os={key:0,class:"flume-status"},Us={__name:"FlumeCityView",setup(n){const e=mr().name,t=et("");gn(async()=>{try{t.value=await wr()}catch{t.value=""}});const r=q(()=>{let y="GPU: ";return e?y+=e:y+="unknown",t.value?y+=" · WebGPU: "+t.value:navigator.gpu||(y+=" · no WebGPU"),y}),{mapElement:i,store:s,controls:o,locked:d,area:c}=Po(),{controlsVisible:a}=o,{currentPresetName:p}=fn(),h=q(()=>p.value==="dark"),l=et(!1),m=q(()=>{if(!s.grid)return"";const y=Number(s.wind.speedMps).toFixed(1)+" m/s",_=s.wind.directionDeg+"°";return y+" · "+_}),g={particles:"Particles",slice:"Slice",off:"Off"},u=q(()=>s.engine.prediction?g[s.display.view]:""),f={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(y,_)=>{const w=Qn,v=pt,$=gt;return R(),N("section",{class:Zn(["flume-page map-glass",{"map-glass--dark":h.value}]),"aria-label":"Flume City wind prediction",onKeydown:_[1]||(_[1]=Kn((...b)=>M(c).stopSelection&&M(c).stopSelection(...b),["esc"]))},[Yn(I("div",Cs,[I("header",As,[I("div",Is,[_[2]||(_[2]=I("h1",null,"Flume City",-1)),D(w,{preset:"secondary",color:"textPrimary",size:"small",icon:l.value?"mso-close":"mso-info","aria-label":l.value?"Hide Flume City information":"Show Flume City information","aria-expanded":l.value,onClick:_[0]||(_[0]=b=>l.value=!l.value)},null,8,["icon","aria-label","aria-expanded"])]),I("p",Ts,F(r.value),1),l.value?(R(),N("div",Fs,[I("p",Ls,F(f.title),1),I("p",null,F(f.authors),1),I("p",null,F(f.summary),1),D(Ee,{icon:"mso-description",href:f.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:Z(()=>[..._[3]||(_[3]=[ae("arXiv",-1)])]),_:1},8,["href"]),I("div",Es,[I("p",null,[_[4]||(_[4]=ae(" Developed and maintained by ",-1)),I("a",{href:M(rt).lab.url,target:"_blank",rel:"noopener"},F(M(rt).lab.name),9,Rs),_[5]||(_[5]=I("br",null,null,-1)),ae("("+F(M(rt).lead)+") ",1)]),I("p",null,F(M(rt).place),1)])])):j("",!0)]),D(it,{title:"1 · Simulation area",inert:M(d)},{default:Z(()=>[D(zo)]),_:1},8,["inert"]),D(it,{title:"2 · Wind configuration",collapsed:!M(s).grid},{"header-extra":Z(()=>[I("span",Ds,F(m.value),1)]),default:Z(()=>[D(ns)]),_:1},8,["collapsed"]),D(it,{title:"3 · Wind visualization",collapsed:!M(s).engine.prediction},{"header-extra":Z(()=>[I("span",Vs,F(u.value),1)]),default:Z(()=>[D($s)]),_:1},8,["collapsed"]),D(it,{title:"4 · Downloads",collapsed:!M(s).grid},{default:Z(()=>[D(Ps)]),_:1},8,["collapsed"]),M(s).error&&!M(s).grid?(R(),Ae(v,{key:0,color:"danger"},{default:Z(()=>[ae(F(M(s).error),1)]),_:1})):j("",!0)],512),[[qn,M(a)]]),I("div",{ref_key:"mapElement",ref:i,class:"flume-map","aria-label":"Flume City map"},null,512),D(yr,{controls:M(o),shown:M(s).mapCreated,disabled:M(d)},null,8,["controls","shown","disabled"]),!M(s).mapReady&&!M(s).error?(R(),N("div",Os,[D($,{indeterminate:"","aria-label":"Loading Flume map"})])):j("",!0)],34)}}},ea=Ft(Us,[["__scopeId","data-v-e3251833"]]);export{ea as default};
