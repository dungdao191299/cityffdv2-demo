import{w as Se,o as sr,m as Xe,r as or,u as si,d as Qi,a as te,b as vt,a2 as en,a3 as tn,e as N,v as j,i as U,l as _,h as ne,z as oe,t as D,q as F,x as Z,f as je,a4 as oi,M as rn,N as It,U as ar,P as ai,L as Ct,y as Pt,_ as ur,J as nn,a5 as sn,F as Fe,A as ui,S as on,s as an,O as un,X as ln,Y as cn,a6 as dt,a0 as dn,E as fn}from"./index-lOXPQsP3.js";import{a as gn,m as li,u as hn,M as ft}from"./mapbox-gl-CUqUbekF.js";import{t as Je,u as pn,k as mn,l as Ft,M as Sr,v as gt,V as $e,S as yn,c as bn,d as wn,w as ci,o as di,x as fi,q as $t,y as Yt,W as xn,D as Br,R as Ir,f as vn,L as Cr,H as $n,z as Pr,E as Mn,s as _n,b as kn,B as Sn,g as Bn,a as In,r as Cn}from"./mapbox-gl-geocoder-BR2liNnd.js";import{z as Pn}from"./archive-Dz16c6AW.js";import{d as An}from"./download-B6B1Q6H-.js";import{m as At,c as Qe}from"./geojsonToStl-Bbo8coar.js";import{c as lr}from"./index-D6bWIqpK.js";import{r as Tn,l as Rn}from"./buildingTiles-CgUemryp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./earcut-Drp1yMsm.js";const En=[-73.5673,45.5017],Fn=14,z=4,ae=1.5,gi=240,Lt=3e3,hi=.5,pi=.5,ot=16,Ar={directionDeg:0,speedMps:6,model:"v2"},cr={v1:"Model v1",v2:"Model v2",v3:"Model v3"},Ln=["v2","v3"],Wt=.5,Gt=20,Dn=320,Tr=.35,zn=10,Rr=.75,Er={low:800,medium:1600,high:3200},mi={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.1},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.2}};let yi="dark";function Fr(n){yi=n in mi?n:"dark"}function ve(){return mi[yi]}function bi(n){const e=[1/0,1/0,-1/0,-1/0];return lr(n,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function Tt(n,e){for(const y of[n,e])if(!(Array.isArray(y)&&y.length>=2&&y.every(Number.isFinite)&&Math.abs(y[0])<=180&&Math.abs(y[1])<=85.051129))throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(n[0],e[0]),Math.min(n[1],e[1])];if(Math.abs(n[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=At(t),i=Qe(t),[o,s]=r([Math.max(n[0],e[0]),Math.max(n[1],e[1])]);if(o<=0||s<=0)throw new Error("The region is empty.");const a=Math.ceil((o-1e-6)/z),l=Math.ceil((s-1e-6)/z),u=i([a*z,l*z]),c=[...t,...u],[g,d,h,f]=c,p={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[g,d],[h,d],[h,f],[g,f],[g,d]]]}};return{origin:t,bounds:c,extentM:[a*z,l*z],polygon:p}}function Lr(n){var i;if(((i=n==null?void 0:n.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(lr(n,o=>{if(!Number.isFinite(o[0])||!Number.isFinite(o[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=bi(n);return{...Tt(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(n.geometry)}}}function On(n,e=hi){const t=structuredClone({origin:n.origin,bounds:n.bounds,extentM:n.extentM,polygon:n.polygon}),r=n.extentM.map(l=>Math.ceil(l*e/z)*z),i=Qe(n.origin)([0,-r[1]]),o=Qe(i)([-r[0],0]),s=At(o)(n.bounds.slice(2,4)),a=Tt(o,Qe(o)([s[0]+r[0],s[1]+r[1]]));return{...n,...a,mainDomain:t,buffer:{fraction:e,paddingM:r}}}function wi(n){var r,i,o;const e=new Map,t=new Set;for(const s of n){if(!["Polygon","MultiPolygon"].includes((r=s.geometry)==null?void 0:r.type))continue;lr(s,d=>{if(!Number.isFinite(d[0])||!Number.isFinite(d[1])||Math.abs(d[0])>180||Math.abs(d[1])>85.051129)throw new Error("Invalid building coordinates.")});const a=Number((i=s.properties)==null?void 0:i.height),l=Number((o=s.properties)==null?void 0:o.min_height)||0,u=JSON.stringify([s.geometry,a,l]);if(t.has(u))continue;t.add(u);const c=Je(s),g=c==null?u:JSON.stringify([c,a,l]);e.has(g)||e.set(g,[]),e.get(g).push({type:"Feature",...s.id==null?{}:{id:s.id},properties:structuredClone(s.properties??{}),geometry:structuredClone(s.geometry)})}return Array.from(e.values(),s=>{const a=s[0];if(s.length>1){const l=gn({type:"FeatureCollection",features:s});if(!l)throw new Error("Building parts produced empty geometry.");a.geometry=l.geometry,delete a.bbox}return a})}function Un(n,e){var h,f,p;const t=wi(n),r=e.selection??e.polygon,i=new Set(t.filter(y=>mn(y,r))),o=new Set(Array.from(i,Je).filter(y=>y!=null)),s=[],a=[],l=[];let u=0,c=0;for(const y of t){if(!(i.has(y)||Je(y)!=null&&o.has(Je(y)))){a.push(y);continue}const x=(h=y.properties)==null?void 0:h.height;if(x==null||x===""){u++;continue}const m=Number(x);if(!Number.isFinite(m)||m<0||m>gi)throw new Error("Building height must be finite and between 0 and 240 m.");if(m===0){u++;continue}Number((f=y.properties)==null?void 0:f.min_height)>0&&c++,s.push({...y,properties:{...y.properties,source_height:m,source_min_height:Number((p=y.properties)==null?void 0:p.min_height)||0,height:Math.max(1,Math.round(m/ae))*ae,min_height:0}})}const g={type:"FeatureCollection",features:s};let d=e;if(s.length){const y=bi(g);d=Tt(y.slice(0,2),y.slice(2,4))}return u&&l.push(u+" parts have missing/zero height and were omitted."),c&&l.push(c+" raised parts are treated as solid from the ground to their roof."),s.length||l.push("No buildings found in loaded map data. This run will use open ground."),s.some(y=>Je(y)==null)&&l.push("Selected parts without provider IDs cannot be joined across tile boundaries."),l.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...d,selection:structuredClone(e.selection??e.polygon),buildings:g,surroundings:{type:"FeatureCollection",features:a},warnings:l}}function Mt(n){var t,r;const e=[];for(const i of wi(n)){const o=Number((t=i.properties)==null?void 0:t.height);if(!Number.isFinite(o)||o<=0)continue;const s=Math.min(o,Math.max(0,Number((r=i.properties)==null?void 0:r.min_height)||0));e.push({...i,properties:{...i.properties,height:o,min_height:s}})}return{type:"FeatureCollection",features:e}}function xi(n,e=null){const t=n.map(Je);if(t.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const r=["in",pn,["literal",Array.from(new Set(t))]];return{selected:e?["all",e,r]:r,surroundings:e?["all",e,["!",r]]:["!",r]}}const _e="flume-detailed-buildings",ke="flume-region-domain",Ke="flume-main-domain";function jt(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(_e)&&n.removeLayer(_e),n.getSource(_e)&&n.removeSource(_e);return}n.getSource(_e)?n.getSource(_e).setData(e):n.addSource(_e,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(_e)||n.addLayer({id:_e,type:"fill-extrusion",source:_e,minzoom:0,paint:{"fill-extrusion-color":ve().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function Nn(n,e){if(!e){n.getLayer(Ke)&&n.removeLayer(Ke),n.getLayer(ke)&&n.removeLayer(ke),n.getSource(ke)&&n.removeSource(ke);return}const t=[{...e.polygon,properties:{role:"outer"}}];e.mainDomain&&t.push({...e.mainDomain.polygon,properties:{role:"main"}});const r={type:"FeatureCollection",features:t};n.getSource(ke)?n.getSource(ke).setData(r):(n.addSource(ke,{type:"geojson",data:r}),n.addLayer({id:ke,type:"line",source:ke,filter:["==",["get","role"],"outer"],paint:{"line-color":ve().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!n.getLayer(Ke)&&n.addLayer({id:Ke,type:"line",source:ke,filter:["==",["get","role"],"main"],paint:{"line-color":ve().mainArea,"line-width":3}}),!e.mainDomain&&n.getLayer(Ke)&&n.removeLayer(Ke)}const Dr=["draw.create","draw.update","draw.delete"];function Xn({getMap:n,ready:e,onChange:t,accessToken:r}){const i=or({source:"concordia",bufferPercent:hi*100,drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let o=null,s=!1,a=null,l=0,u=null;function c(B=!1){l++,a==null||a.abort(),B||(u=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function g(){const B=n();!B||!e.value||(jt(B,u==null?void 0:u.preview),Nn(B,i.region??(u==null?void 0:u.area)??null))}function d(){return(u==null?void 0:u.preview)??null}function h(B){c(!i.region&&!i.snapshot),i.error="";try{i.region=Xe(Lr(B))}catch(C){i.region=null,i.error=C.message}g()}function f(B){var L;if(s||!o)return;const C=(L=B.features)==null?void 0:L.at(-1);if(B.type==="draw.create"&&C)for(const G of o.getAll().features)G.id!==C.id&&o.delete(G.id);const A=o.getAll().features.find(G=>G.geometry.type==="Polygon");A?h(A):(c(),i.region=null,g()),i.drawing=!1}function p(B){i.drawing=B.mode==="draw_polygon"||B.mode==="direct_select"}function y(){var C;const B=n();if(!B||!e.value)throw new Error("Wait for the map to load.");if(!o){const A={...Ft.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};o=new Ft({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...Ft.modes,simple_select:A}}),B.addControl(o,"bottom-left");for(const L of Dr)B.on(L,f);B.on("draw.modechange",p),w(B),B.once("idle",()=>w(B)),(C=i.region)!=null&&C.selection&&o.add(i.region.selection)}return o}function w(B){var C;for(const A of((C=B.getStyle())==null?void 0:C.layers)??[])A.id.startsWith("gl-draw-")&&(A.type==="fill"&&(B.setPaintProperty(A.id,"fill-color",ve().mainArea),B.setPaintProperty(A.id,"fill-opacity",ve().drawFillOpacity)),A.type==="line"&&(B.setPaintProperty(A.id,"line-color",ve().mainArea),B.setPaintProperty(A.id,"line-width",3)))}function x(){const B=n();if(!(!o||!B)){for(const C of Dr)B.off(C,f);B.off("draw.modechange",p),B.removeControl(o),o=null,i.drawing=!1}}function m(){if(!i.loading)try{const B=y();n().stop(),c(!i.region&&!i.snapshot),i.region=null,B.deleteAll(),g(),B.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(B){i.error=B.message}}function b(){o&&o.changeMode("simple_select"),i.drawing=!1}function $(){var B;(B=n())==null||B.stop(),x(),c(),i.region=null,i.error="",g()}async function v(B){const C=new AbortController,A=l;a=C,i.loading=!0,i.progress=0,i.error="";const L=()=>s||C.signal.aborted||A!==l;try{return await B({signal:C.signal,epoch:A,isStale:L})}catch(G){return C.abort(),!s&&A===l&&G.name!=="AbortError"&&(i.error=G.message),null}finally{a===C&&(a=null,s||(i.loading=!1))}}async function M(B,C,{signal:A,epoch:L,isStale:G}){if(A.throwIfAborted(),(u==null?void 0:u.source)===C){const[R,Y,J,pe]=B.bounds,me=u.area.bounds;if(R>=me[0]&&Y>=me[1]&&J<=me[2]&&pe<=me[3])return u.tiles}const Q=n(),O=C==="osm"?"composite":"city-concordia",ee=Tn({map:Q,sourceId:O,source:C,bounds:B.bounds})??await Rn({sourceConfig:Q.getStyle().sources[O],source:C,bounds:B.bounds,accessToken:r,signal:A,paddingTiles:1,onProgress:R=>{L===l&&(i.progress=R)}});if(G())throw new DOMException("Cancelled","AbortError");const he=Mt(ee.features);return u={source:C,area:B,tiles:ee,preview:he},i.loadedArea=Xe({source:C,bounds:[...B.bounds],extentM:[...B.extentM],count:he.features.length,fromMap:!!ee.fromMap}),g(),ee}function k(B){var L;const C=n(),A=C.getCanvas().clientWidth;(L=C.resize)==null||L.call(C),C.fitBounds([B.bounds.slice(0,2),B.bounds.slice(2,4)],{padding:A>=640?{top:40,bottom:40,left:Math.min(320,A*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function S(){if(i.loading||s)return null;const B=n();if(!B||!e.value)return i.error="Wait for the map to load.",null;const C=i.source;return v(async A=>{const L=Lt/2,G=B.getCenter().wrap().toArray(),Q=Qe(G)([-L,-L]),O=Tt(Q,Qe(Q)([Lt,Lt]));return k(O),await M(O,C,A),A.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function I(){if(i.loading||s)return null;!i.region&&(u==null?void 0:u.source)===i.source&&h(u.area.polygon);const B=n(),C=i.region,A=i.source;return!B||!e.value||!C?(i.error="Draw and finish a valid polygon first.",null):v(async L=>{const G=Lr(C.selection??C.polygon);let Q=G,O,K;for(let R=0;R<4;R++){if(K=await M(Q,A,L),L.isStale())return null;O=Un(K.features,G);const[Y,J,pe,me]=O.bounds,se=K.coverageBounds,be=1e-8;if(Y>se[0]+be&&J>se[1]+be&&pe<se[2]-be&&me<se[3]-be||!O.buildings.features.length)break;if(R===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");Q=O}const ee=Math.min(Math.max(Number(i.bufferPercent)||0,0),pi*100)/100;O=On(O,ee),O.source=A,O.dataZoom=K.zoom,O.tileCount=K.tileCount,O.surroundings=Mt(O.surroundings.features),O.warnings=O.warnings.filter(R=>!R.startsWith("Loaded map tiles only"));const he=K.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return O.warnings.push(he+K.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(O.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=Xe(O),i.region=Xe({origin:O.origin,bounds:O.bounds,extentM:O.extentM,polygon:O.polygon,selection:O.selection,mainDomain:O.mainDomain,buffer:O.buffer}),g(),k(O),t==null||t(),O})}function T(){a==null||a.abort(),x()}function P(){var B;g(),(B=i.region)!=null&&B.selection&&y()}function E(){s=!0,l++,a==null||a.abort(),x()}return Se(()=>i.source,()=>{c(),g(),i.error=""}),sr(E),{state:i,startSelection:m,stopSelection:b,clearSelection:$,setSelection:h,captureRegion:I,loadBuildings:S,getPreview:d,restore:P,beforeStyleChange:T}}function Yn(n){const[e,t]=n.extentM,r=Math.round(e/z),i=Math.round(t/z);if(r<1||i<1||!Number.isSafeInteger(r*i)||Math.abs(r*z-e)>1e-5||Math.abs(i*z-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const o=At(n.origin),s=new Float32Array(r*i);for(const u of n.buildings.features){const c=Number(u.properties.height);if(!Number.isFinite(c)||c<0||c>gi)throw new Error("Invalid building height (0..240 metres).");if(!c)continue;const g=Math.max(1,Math.round(c/ae)),d=u.geometry.type==="Polygon"?[u.geometry.coordinates]:u.geometry.coordinates;for(const h of d){const f=h.map(m=>m.map(o));let p=1/0,y=-1/0;for(const m of f)for(const b of m)p=Math.min(p,b[1]),y=Math.max(y,b[1]);const w=Math.max(0,Math.ceil(p/z-.5)),x=Math.min(i,Math.ceil(y/z-.5));for(let m=w;m<x;m++){const b=(m+.5)*z,$=[];for(const v of f)for(let M=0,k=v.length-1;M<v.length;k=M++){const S=v[k],I=v[M];(S[1]<=b&&I[1]>b||I[1]<=b&&S[1]>b)&&$.push(S[0]+(b-S[1])*(I[0]-S[0])/(I[1]-S[1]))}$.sort((v,M)=>v-M);for(let v=0;v+1<$.length;v+=2){const M=Math.max(0,Math.ceil($[v]/z-.5-1e-8)),k=Math.min(r,Math.ceil($[v+1]/z-.5-1e-8));for(let S=M;S<k;S++)s[m*r+S]=Math.max(s[m*r+S],g)}}}}let a=0,l=0;for(const u of s)u>0&&a++,l=Math.max(l,u);return{layers:s,nx:r,ny:i,origin:[...n.origin],extentM:[...n.extentM],mainDomain:n.mainDomain,buffer:n.buffer,spacingM:z,layerSpacingM:ae,statistics:{builtCells:a,maximumHeightM:l*ae}}}function yt(n){const e=Number(n);return Number.isFinite(e)&&e>=Wt&&e<=Gt}function Wn({directionDeg:n,speedMps:e}){const t=(s,a)=>{if(s===""||s===null||s===void 0||!Number.isFinite(Number(s)))throw new Error("Invalid "+a+".");return Number(s)},r=t(n,"direction"),i=t(e,"speed");if(!yt(i))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const o=(r%360+360)%360;return{directionDeg:o,thetaRad:o*Math.PI/180,speedMps:i}}const zr=4*1024**3;class dr{constructor(e,t,r){this.adapter=e,this.device=t,this.useF16=r,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),r=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,zr),maxBufferSize:Math.min(e.limits.maxBufferSize,zr)}});return new dr(e,r,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,r){const i=Math.max(4,Math.ceil(e/4)*4),o=this.device.createBuffer({size:i,usage:t,label:r});return o._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),o}storage(e,t,r=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|r,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),o=new Int32Array(r),s=new Float32Array(r);e.forEach(([l,u],c)=>{l==="u"?i[c]=u:l==="i"?o[c]=u:s[c]=u});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,r),this.scratch.push(a),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,r,i,o=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:r.map((l,u)=>({binding:u,resource:{buffer:l}}))}));const s=Math.max(1,Math.ceil(i/o)),a=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(s,a),Math.ceil(s/a))}async readFloat32(e,t){const r=t*4,i=this.buffer(r,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),o=this.device.createCommandEncoder();o.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([o.finish()]),await i.mapAsync(GPUMapMode.READ);const s=new Float32Array(i.getMappedRange().slice(0,r));return i.unmap(),this.free(i),s}}function vi(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const o=r[0],s=o>>>16&32768,a=o>>>23&255;let l=o&8388607;if(a===255){e[i]=s|31744|(l?1:0);continue}const u=a-127+15;if(u>=31){e[i]=s|31744;continue}if(u<=0){if(u<-10){e[i]=s;continue}l|=8388608;const g=14-u;let d=l>>>g;l>>>g-1&1&&(d+=1),e[i]=s|d;continue}let c=u<<10|l>>>13;l&4096&&(c+=1),e[i]=s|c}return e}function Gn(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;t++){const r=n[t],i=r&32768?-1:1,o=r>>10&31,s=r&1023;o===0?e[t]=i*s*2**-24:o===31?e[t]=s?NaN:i*(1/0):e[t]=i*(1+s/1024)*2**(o-15)}return e}const Ee=180,$i=4,Mi=7,fr=$i*Mi,_t=1.5,Or=4,jn=1600,qn=256*1024*1024,bt=n=>n.toFixed(6),Hn=640,Vn=`
struct P { gy: u32, gx: u32, chunk: u32, pixelOffset: u32,
           pixelCount: u32, pad0: u32, pad1: u32, pad2: u32,
           queryHeight: f32, pad3: f32, pad4: f32, pad5: f32 };
@group(0) @binding(0) var<storage, read> height: array<f32>;
@group(0) @binding(1) var<storage, read> cosT: array<f32>;
@group(0) @binding(2) var<storage, read> sinT: array<f32>;
@group(0) @binding(3) var<storage, read_write> raw: array<f32>;
@group(0) @binding(4) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  let angles = ${Ee}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${bt(Or)};
  let gyr = sinT[angle] / ${bt(Or)};

  var stepX = 0; var nextX = 1.0e20; var deltaX = 1.0e20;
  if (abs(gxr) >= 1.0e-10) {
    if (gxr > 0.0) { stepX = 1; nextX = 0.5 / gxr; deltaX = 1.0 / gxr; }
    else { stepX = -1; nextX = -0.5 / gxr; deltaX = -1.0 / gxr; }
  }
  var stepY = 0; var nextY = 1.0e20; var deltaY = 1.0e20;
  if (abs(gyr) >= 1.0e-10) {
    if (gyr > 0.0) { stepY = 1; nextY = 0.5 / gyr; deltaY = 1.0 / gyr; }
    else { stepY = -1; nextY = -0.5 / gyr; deltaY = -1.0 / gyr; }
  }

  let cutoff = ${bt(jn)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Hn}u; step++) {
    if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff) { break; }
    let leaving = min(min(nextX, nextY), cutoff);
    let roof = height[u32(y) * u.gx + u32(x)];
    if (roof >= u.queryHeight) {
      upperDistance = entered;
      upperHeight = roof - u.queryHeight;
      lowerDistance = entered;
      lowerHeight = 0.0;
      break;
    }
    if (roof > 0.0) {
      let slope = (roof - u.queryHeight) / max(leaving, 1.0e-8);
      if (slope > bestSlope) {
        bestSlope = slope;
        lowerDistance = leaving;
        lowerHeight = roof - u.queryHeight;
      }
    }
    let crossX = nextX <= nextY + 1.0e-7;
    let crossY = nextY <= nextX + 1.0e-7;
    if (crossX) { x += stepX; nextX += deltaX; }
    if (crossY) { y += stepY; nextY += deltaY; }
    entered = leaving;
  }
  let base = localPixel * angles + angle;
  let stride = u.chunk * angles;
  raw[base] = upperDistance;
  raw[stride + base] = upperHeight;
  raw[2u * stride + base] = lowerDistance;
  raw[3u * stride + base] = lowerHeight;
}`,Kn=`
struct P { gy: u32, gx: u32, chunk: u32, pixelOffset: u32,
           pixelCount: u32, pad0: u32, pad1: u32, pad2: u32,
           queryHeight: f32, pad3: f32, pad4: f32, pad5: f32 };
@group(0) @binding(0) var<storage, read> raw: array<f32>;
@group(0) @binding(1) var<storage, read_write> field: array<f32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 64u;
  if (g >= u.pixelCount * 4u) { return; }
  let sig = g % 4u;
  let localPixel = g / 4u;
  let angles = ${Ee}u;
  var dc = 0.0;
  var re = vec3<f32>(0.0);
  var im = vec3<f32>(0.0);
  let base = sig * u.chunk * angles + localPixel * angles;
  let n = f32(angles);
  for (var a = 0u; a < angles; a++) {
    let v = raw[base + a];
    let t = 6.283185307179586 * f32(a) / n;
    dc += v;
    re += v * vec3<f32>(cos(t), cos(2.0 * t), cos(3.0 * t));
    im -= v * vec3<f32>(sin(t), sin(2.0 * t), sin(3.0 * t));
  }
  let out = (u.pixelOffset + localPixel) * ${fr}u
          + sig * ${Mi}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Zn=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, channels: u32, mddfChannels: u32, patchSize: u32,
  gy: u32, gx: u32, margin: u32, pad0: u32,
  solidChannel: i32, coordChannel: i32, pad1: i32, pad2: i32,
  cosT: f32, sinT: f32, theta: f32, queryLayer: f32,
  centreY: f32, centreX: f32, coordYScale: f32, coordZ: f32,
  coordXCentre: f32, coordXScale: f32, pad3: f32, pad4: f32,
};
@group(0) @binding(0) var<storage, read> field: array<f32>;
@group(0) @binding(1) var<storage, read> height: array<f32>;
@group(0) @binding(2) var<storage, read> origins: array<f32>;
@group(0) @binding(3) var<storage, read> table: array<u32>;
@group(0) @binding(4) var<storage, read> norm: array<f32>;
@group(0) @binding(5) var<storage, read_write> out: array<${n}>;
@group(0) @binding(6) var<uniform> u: P;

fn sampleField(ey: f32, ex: f32, channel: u32) -> f32 {
  let y0 = floor(ey); let x0 = floor(ex);
  let fy = ey - y0; let fx = ex - x0;
  let iy0 = clamp(i32(y0), 0, i32(u.gy) - 1);
  let ix0 = clamp(i32(x0), 0, i32(u.gx) - 1);
  let iy1 = clamp(iy0 + 1, 0, i32(u.gy) - 1);
  let ix1 = clamp(ix0 + 1, 0, i32(u.gx) - 1);
  let c = ${fr}u;
  let v00 = field[(u32(iy0) * u.gx + u32(ix0)) * c + channel];
  let v01 = field[(u32(iy0) * u.gx + u32(ix1)) * c + channel];
  let v10 = field[(u32(iy1) * u.gx + u32(ix0)) * c + channel];
  let v11 = field[(u32(iy1) * u.gx + u32(ix1)) * c + channel];
  return mix(mix(v00, v01, fx), mix(v10, v11, fx), fy);
}

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  let area = u.patchSize * u.patchSize;
  if (g >= u.batch * u.channels * area) { return; }
  let p = g % area;
  let channel = (g / area) % u.channels;
  let b = g / (area * u.channels);

  // Wind-frame position of this pixel, then the city cell it samples.
  let sx = origins[b * 2u] + f32(p % u.patchSize);
  let sy = origins[b * 2u + 1u] + f32(p / u.patchSize);
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  let ix = u.centreX + dx * u.cosT - dy * u.sinT;
  let iy = u.centreY + dx * u.sinT + dy * u.cosT;
  let ex = ix + f32(u.margin);
  let ey = iy + f32(u.margin);

  var value = 0.0;
  if (channel < u.mddfChannels) {
    let srcRe = table[channel * 4u];
    let srcIm = table[channel * 4u + 1u];
    let mode = table[channel * 4u + 2u];
    let isIm = table[channel * 4u + 3u];
    if (mode == 0u) {
      value = sampleField(ey, ex, srcRe);
    } else {
      let re = sampleField(ey, ex, srcRe);
      let im = sampleField(ey, ex, srcIm);
      let angle = f32(mode) * u.theta;
      let c = cos(angle); let s = sin(angle);
      if (isIm == 1u) { value = re * s + im * c; }
      else { value = re * c - im * s; }
    }
    value = (value - norm[channel * 2u]) / norm[channel * 2u + 1u];
  } else if (i32(channel) == u.solidChannel) {
    let ry = clamp(i32(round(ey)), 0, i32(u.gy) - 1);
    let rx = clamp(i32(round(ex)), 0, i32(u.gx) - 1);
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${bt(_t)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`;class Jn{constructor(e,t,r,i,o,s="f32"){this.context=e,this.store=s,this.ny=r,this.nx=i,this.margin=o,this.gy=r+2*o,this.gx=i+2*o,this.chunk=Math.min(16384,this.gy*this.gx);const a=new Float32Array(this.gy*this.gx);for(let c=0;c<r;c++){const g=c*i,d=(c+o)*this.gx+o;for(let h=0;h<i;h++)a[d+h]=t[g+h]*_t}this.heightBuffer=e.upload(a,"mddf.height");const l=new Float32Array(Ee),u=new Float32Array(Ee);for(let c=0;c<Ee;c++){const g=2*Math.PI*c/Ee;l[c]=Math.cos(g),u[c]=Math.sin(g)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(u,"mddf.sin"),this.rawBuffer=e.storage($i*this.chunk*Ee*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*fr*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(Vn),this.fourierPipeline=e.pipeline(Kn),this.assemblePipeline=e.pipeline(Zn(s)),this.currentLayer=-1}async compute(e,t={}){var l,u,c;const{context:r}=this,i=this.cache.get(e);if(i){this.fieldBuffer=i,this.currentLayer=e,(l=t.onProgress)==null||l.call(t,1);return}const o=(this.cache.size+1)*this.fieldBytes<=qn;this.fieldBuffer=o?r.storage(this.fieldBytes,"mddf.field."+e):this.spare;const s=(e+.5)*_t,a=this.gy*this.gx;for(let g=0;g<a;g+=this.chunk){(u=t.signal)==null||u.throwIfAborted();const d=Math.min(this.chunk,a-g),h=r.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",g],["u",d],["u",0],["u",0],["u",0],["f",s],["f",0],["f",0],["f",0]]),f=r.device.createCommandEncoder(),p=f.beginComputePass();r.dispatch(p,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,h],d*Ee),r.dispatch(p,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,h],d*4,64),p.end(),r.device.queue.submit([f.finish()])}await r.device.queue.onSubmittedWorkDone(),(c=t.onProgress)==null||c.call(t,1),r.releaseScratch(),o&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,t,r,i,o,s,a){const{context:l}=this,u=t.length/2,c=l.upload(t,"assemble.origins"),g=l.uniform([["u",u],["u",r.channels],["u",r.mddfChannels],["u",s],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",r.solidChannel],["i",r.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",o],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",r.coordYScale],["f",(o-r.coordZCentre)/r.coordZScale],["f",r.coordXCentre],["f",r.coordXScale],["f",0],["f",0]]),d=e.beginComputePass();return l.dispatch(d,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,c,r.tableBuffer,r.normBuffer,a,g],u*r.channels*s*s),d.end(),c}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const Dt=`
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
`,Qn=`
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
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.total) { return; }
  // Split the flat output index around the contracted mode.
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
}`;function Ur(n,e,t,r=1e-5){const i=n==="f16"||e==="f16"?`enable f16;
`:"",o=a=>n==="f16"?`f32(${a})`:a,s=a=>e==="f16"?`f16(${a})`:a;return`${i}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${e}>;
var<workgroup> partial: array<f32, 256>;
@compute @workgroup_size(256)
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${t}u;
  var s = 0.0;
  for (var i = lid.x; i < ${t}u; i += 256u) { s += ${o("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = 128u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${t}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${t}u; i += 256u) {
    let d = ${o("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = 128u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${t}.0, 0.0) + ${r.toExponential(12)});
  for (var i = lid.x; i < ${t}u; i += 256u) {
    Y[base + i] = ${s("("+o("X[base + i]")+" - mean) * inverse")};
  }
}`}const zt=32;function es(n){const{store:e,patch:t,modes1:r,modes2:i}=n,o=t*t,s=2*r,a=e==="f16"?`enable f16;
`:"",l=c=>e==="f16"?`f32(${c})`:c,u=c=>e==="f16"?`f16(${c})`:c;return{conv1x1:`${a}${Dt}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.cout * ${o}u) { return; }
  let p = g % ${o}u;
  let o = (g / ${o}u) % u.cout;
  let b = g / (${o}u * u.cout);
  var acc = ${l("B[o]")};
  let xBase = b * u.cin * ${o}u + p;
  let wBase = o * u.cin;
  for (var i = 0u; i < u.cin; i++) {
    acc += ${l("W[wBase + i]")} * ${l("X[xBase + i * "+o+"u]")};
  }
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${u("acc")};
}`,gate:`${a}${Dt}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.mid * ${o}u) { return; }
  let p = g % ${o}u;
  let m = (g / ${o}u) % u.mid;
  let b = g / (${o}u * u.mid);
  let value = ${l("G[(b * 2u * u.mid + m) * "+o+"u + p]")};
  let gateValue = ${l("G[(b * 2u * u.mid + u.mid + m) * "+o+"u + p]")};
  H[g] = ${u("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:Ur(e,e,o),instanceNormScaled:Ur(e,e,o,1e-5/(zt*zt)),forwardColumns:`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.channels * ${t*i}u) { return; }
  let k = g % ${i}u;
  let y = (g / ${i}u) % ${t}u;
  let bc = g / ${t*i}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${o}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${l("X[base + x]")};
    accRe += v * tableCos[x * ${i}u + k];
    accIm += v * tableSin[x * ${i}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,rowMix:`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.channels * u.rows * ${i}u) { return; }
  let k = g % ${i}u;
  let r = (g / ${i}u) % u.rows;
  let bc = g / (${i}u * u.rows);
  var accRe = 0.0; var accIm = 0.0;
  let inBase = bc * u.inner * ${i}u + k;
  let tableBase = r * u.inner;
  for (var j = 0u; j < u.inner; j++) {
    let ar = inRe[inBase + j * ${i}u];
    let ai = inIm[inBase + j * ${i}u];
    let cr = tableRe[tableBase + j];
    let ci = tableIm[tableBase + j];
    accRe += ar * cr - ai * ci;
    accIm += ar * ci + ai * cr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,spectralMix:`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  let block = ${s*i}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${i}u;
  let s = (g / ${i}u) % ${s}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${r}u);
  let sp = s - half * ${r}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${r*i}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${i}u + k;
  let xBase = (b * u.channels * ${s}u + s) * ${i}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,inverseColumns:`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.channels * ${o}u) { return; }
  let p = g % ${o}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${o}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${u("acc * "+1/zt)};
}`,residual:`${a}${Dt}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.total) { return; }
  var acc = ${l("A[g]")} + ${l("B[g]")} + ${l("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${u("acc")};
}`}}function ts(n,e,t){const r=2*e,i=[];for(let h=0;h<e;h++)i.push(h);for(let h=n-e;h<n;h++)i.push(h);const o=new Float32Array(n*t),s=new Float32Array(n*t);for(let h=0;h<n;h++)for(let f=0;f<t;f++){const p=2*Math.PI*h*f/n;o[h*t+f]=Math.cos(p),s[h*t+f]=-Math.sin(p)}const a=new Float32Array(r*n),l=new Float32Array(r*n);for(let h=0;h<r;h++)for(let f=0;f<n;f++){const p=2*Math.PI*i[h]*f/n;a[h*n+f]=Math.cos(p),l[h*n+f]=-Math.sin(p)}const u=new Float32Array(n*r),c=new Float32Array(n*r);for(let h=0;h<n;h++)for(let f=0;f<r;f++){const p=2*Math.PI*i[f]*h/n;u[h*r+f]=Math.cos(p)/n,c[h*r+f]=Math.sin(p)/n}const g=new Float32Array(t*n),d=new Float32Array(t*n);for(let h=0;h<t;h++){const f=(h===0?1:2)/n;for(let p=0;p<n;p++){const y=2*Math.PI*h*p/n;g[h*n+p]=f*Math.cos(y),d[h*n+p]=-f*Math.sin(y)}}return{forwardCos:o,forwardSin:s,rowRe:a,rowIm:l,inverseRowRe:u,inverseRowIm:c,inverseColCos:g,inverseColSin:d}}let rs=class{constructor(e,t,r,i){const o=t.model;if(this.context=e,this.metadata=t,this.width=o.width,this.layers=o.layers,this.inputChannels=o.input_channels,this.outputChannels=o.output_channels,this.patch=t.inference.patch[0],this.modes1=o.modes[0],this.modes2=o.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[u,c]of Object.entries(es(s)))this.pipelines[u]=e.pipeline(c);this.contractPipeline=e.pipeline(Qn);const a=u=>{const c=t.tensors[u];if(!c)throw new Error(`missing tensor ${u}`);return Gn(new Uint16Array(r,c.offset,c.count))};this.read=a,this.tables={};for(const[u,c]of Object.entries(ts(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(c,`fno.table.${u}`);this.weights={};const l=(u,c)=>{const g=a(c);this.weights[u]=this.store==="f16"?e.upload(vi(g),`fno.${u}`):e.upload(g,`fno.${u}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let u=0;u<this.layers;u++)l(`m1w${u}`,`mlp_layers.${u}.mlp1.weight`),l(`m1b${u}`,`mlp_layers.${u}.mlp1.bias`),l(`m2w${u}`,`mlp_layers.${u}.mlp2.weight`),l(`m2b${u}`,`mlp_layers.${u}.mlp2.bias`),l(`lw${u}`,`w_layers.${u}.weight`),l(`lb${u}`,`w_layers.${u}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,r=t.tucker;let i=r.core_shape.slice(),o=e.upload(this.read(`${r.core}.re`),"tucker.core.re"),s=e.upload(this.read(`${r.core}.im`),"tucker.core.im");for(const l of r.factors){const[u,c]=l.shape;if(i[l.mode]!==c)throw new Error(`factor ${l.name} does not match the core`);const g=i.slice();g[l.mode]=u;const d=g.reduce(($,v)=>$*v,1),h=g.slice(l.mode+1).reduce(($,v)=>$*v,1),f=e.storage(d*4,"tucker.re"),p=e.storage(d*4,"tucker.im"),y=e.upload(this.read(`${l.name}.re`),"tucker.f"),w=e.upload(this.read(`${l.name}.im`),"tucker.f"),x=e.uniform([["u",g[0]],["u",g[1]],["u",g[2]],["u",g[3]],["u",g[4]],["u",l.mode],["u",u],["u",c],["u",h],["u",0],["u",d],["u",0]]),m=e.device.createCommandEncoder(),b=m.beginComputePass();e.dispatch(b,this.contractPipeline,[o,s,y,w,f,p,x],d),b.end(),e.device.queue.submit([m.finish()]),e.free(o),e.free(s),e.free(y),e.free(w),o=f,s=p,i=g}e.releaseScratch();const a=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==a.join())throw new Error(`spectral stack is ${i} but ${a} was expected`);this.spectralRe=o,this.spectralIm=s}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,o=2*this.modes1,s=(l,u)=>t.storage(e*l*r*this.elementBytes,u),a=(l,u)=>t.storage(e*i*l*4,u);this.buffers={input:s(this.inputChannels,"fno.input"),x:s(i,"fno.x"),t1:s(i,"fno.t1"),t2:s(i,"fno.t2"),gates:s(4*i,"fno.gates"),hidden:s(2*i,"fno.hidden"),spectral:s(i,"fno.spectral"),local:s(i,"fno.local"),wide:s(2*i,"fno.wide"),output:s(this.outputChannels,"fno.output"),xRe:a(this.patch*this.modes2,"fno.xRe"),xIm:a(this.patch*this.modes2,"fno.xIm"),yRe:a(o*this.modes2,"fno.yRe"),yIm:a(o*this.modes2,"fno.yIm"),zRe:a(o*this.modes2,"fno.zRe"),zIm:a(o*this.modes2,"fno.zIm"),wRe:a(this.patch*this.modes2,"fno.wRe"),wIm:a(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,r=this.width,i=2*this.modes1,o=this.inputChannels+5*r+4*r+2*r+2*r+this.outputChannels,s=r*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(o*t*this.elementBytes+s)}encode(e,t){const{context:r,buffers:i,pipelines:o,tables:s}=this,a=this.width,l=this.patch*this.patch,u=2*this.modes1,c=e.beginComputePass(),g=(h,f,p,y,w=256)=>{r.dispatch(c,h,[...f,r.uniform(p)],y,w)},d=(h,f,p=o.instanceNorm)=>{c.setPipeline(p),c.setBindGroup(0,r.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:f}}]})),c.dispatchWorkgroups(t*a)};g(o.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*a],["u",1]],t*2*a*l),g(o.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*a],["u",a],["u",0]],t*a*l);for(let h=0;h<this.layers;h++)d(i.x,i.t1),g(o.forwardColumns,[i.t1,s.forwardCos,s.forwardSin,i.xRe,i.xIm],[["u",t],["u",a],["u",0],["u",0]],t*a*this.patch*this.modes2),g(o.rowMix,[i.xRe,i.xIm,s.rowRe,s.rowIm,i.yRe,i.yIm],[["u",t],["u",a],["u",u],["u",this.patch]],t*a*u*this.modes2),g(o.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",a],["u",2*h],["u",0]],t*a*u*this.modes2),g(o.rowMix,[i.zRe,i.zIm,s.inverseRowRe,s.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",a],["u",this.patch],["u",u]],t*a*this.patch*this.modes2),g(o.inverseColumns,[i.wRe,i.wIm,s.inverseColCos,s.inverseColSin,i.t2],[["u",t],["u",a],["u",0],["u",0]],t*a*l),d(i.t2,i.t1,o.instanceNormScaled),g(o.conv1x1,[i.t1,this.weights[`m1w${h}`],this.weights[`m1b${h}`],i.gates],[["u",t],["u",a],["u",4*a],["u",0]],t*4*a*l),g(o.gate,[i.gates,i.hidden],[["u",t],["u",2*a],["u",0],["u",0]],t*2*a*l),g(o.conv1x1,[i.hidden,this.weights[`m2w${h}`],this.weights[`m2b${h}`],i.spectral],[["u",t],["u",2*a],["u",a],["u",0]],t*a*l),g(o.conv1x1,[i.x,this.weights[`lw${h}`],this.weights[`lb${h}`],i.local],[["u",t],["u",a],["u",a],["u",0]],t*a*l),g(o.residual,[i.spectral,i.local,i.x],[["u",t*a*l],["u",h<this.layers-1?1:0],["u",0],["u",0]],t*a*l);return g(o.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",a],["u",2*a],["u",1]],t*2*a*l),g(o.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*a],["u",this.outputChannels],["u",0]],t*this.outputChannels*l),c.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}};const is=n=>n.toFixed(6),ns=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  gridH: u32, gridW: u32, patchSize: u32, channels: u32,
  columnCount: u32, patchCount: u32, readyCount: u32, pad0: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  columnStride: f32, minimumWeight: f32, pad1: f32, pad2: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${n}>;
// Cross-wind origin of each patch, in blend coordinates.
@group(0) @binding(1) var<storage, read> origins: array<i32>;
// Per column: first patch index, patch count, streamwise origin.
@group(0) @binding(2) var<storage, read> columns: array<i32>;
@group(0) @binding(3) var<storage, read_write> field: array<f32>;
@group(0) @binding(4) var<storage, read_write> weight: array<f32>;
@group(0) @binding(5) var<uniform> u: P;

fn hann(index: u32, size: u32) -> f32 {
  let t = 6.283185307179586 * f32(index) / f32(size - 1u);
  return u.minimumWeight + (1.0 - u.minimumWeight) * (0.5 - 0.5 * cos(t));
}

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  // The dispatch covers a rectangle of the wind-frame grid, not the whole
  // grid: a progressive fill re-blends only the cells the newest patches
  // touch, so the total work stays proportional to the patch area no matter
  // how often the display is refreshed.
  if (g >= u.rectH * u.rectW) { return; }
  let sy = i32(u.rectY0 + g / u.rectW);
  let sx = i32(u.rectX0 + g % u.rectW);
  let cell = u32(sy) * u.gridW + u32(sx);
  let patchSize = i32(u.patchSize);
  let area = u.patchSize * u.patchSize;

  var sums = array<f32, 8>();
  var total = 0.0;
  // Columns are regularly spaced, so only a couple can cover this cell.
  let firstColumn = max(0,
    i32(floor((f32(sx) - f32(patchSize) + 1.0) / max(u.columnStride, 1.0e-6))));
  let lastColumn = min(i32(u.columnCount) - 1,
    i32(floor(f32(sx) / max(u.columnStride, 1.0e-6))));
  for (var k = firstColumn; k <= lastColumn; k++) {
    let columnBase = u32(k) * 3u;
    let first = columns[columnBase];
    let count = columns[columnBase + 1u];
    let px = sx - columns[columnBase + 2u];
    if (px < 0 || px >= patchSize) { continue; }
    for (var j = 0; j < count; j++) {
      let index = first + j;
      // Patches are submitted in index order, so everything from readyCount
      // onwards has not been computed yet and must not enter the sum.
      if (u32(index) >= u.readyCount) { break; }
      let py = sy - origins[index];
      if (py < 0 || py >= patchSize) { continue; }
      let w = hann(u32(py), u.patchSize) * hann(u32(px), u.patchSize);
      let base = u32(index) * u.channels * area + u32(py) * u.patchSize + u32(px);
      for (var c = 0u; c < u.channels; c++) {
        sums[c] += w * f32(patches[base + c * area]);
      }
      total += w;
    }
  }
  for (var c = 0u; c < u.channels; c++) {
    field[cell * u.channels + c] = sums[c];
  }
  weight[cell] = total;
}`,ss=`
struct P {
  gridH: u32, gridW: u32, channels: u32, pack: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  syStart: i32, sxStart: i32, pad0: i32, pad1: i32,
  cosT: f32, sinT: f32, centreY: f32, centreX: f32,
  gy: f32, gx: f32, margin: f32, queryLayer: f32,
  cityY: f32, cityX: f32, pad2: f32, pad3: f32,
};
@group(0) @binding(0) var<storage, read_write> field: array<f32>;
@group(0) @binding(1) var<storage, read> weight: array<f32>;
@group(0) @binding(2) var<storage, read> centre: array<f32>;
@group(0) @binding(3) var<storage, read> scale: array<f32>;
@group(0) @binding(4) var<storage, read> height: array<f32>;
@group(0) @binding(5) var<storage, read_write> solid: array<f32>;
@group(0) @binding(6) var<storage, read> finalWeight: array<f32>;
@group(0) @binding(7) var<storage, read_write> packed: array<f32>;
@group(0) @binding(8) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.rectH * u.rectW) { return; }
  let ly = g / u.rectW;
  let lx = g % u.rectW;
  let cell = (u.rectY0 + ly) * u.gridW + (u.rectX0 + lx);
  let w = weight[cell];
  let inverse = select(0.0, 1.0 / w, w > 1.0e-6);
  for (var c = 0u; c < u.channels; c++) {
    field[cell * u.channels + c] =
      field[cell * u.channels + c] * inverse * scale[c] + centre[c];
  }
  let sx = f32(i32(u.rectX0 + lx) + u.sxStart);
  let sy = f32(i32(u.rectY0 + ly) + u.syStart);
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  let ix = u.centreX + dx * u.cosT - dy * u.sinT;
  let iy = u.centreY + dx * u.sinT + dy * u.cosT;
  var flag = 0.0;
  if (ix < -0.5 || iy < -0.5 || ix > u.cityX - 0.5 || iy > u.cityY - 0.5
      || w <= 1.0e-6) {
    flag = 2.0;
  } else {
    let ry = clamp(i32(round(iy + u.margin)), 0, i32(u.gy) - 1);
    let rx = clamp(i32(round(ix + u.margin)), 0, i32(u.gx) - 1);
    let layer = round(height[u32(ry) * u32(u.gx) + u32(rx)]
                      / ${is(_t)});
    if (layer > u.queryLayer) { flag = 1.0; }
  }
  solid[cell] = flag;
  if (u.pack == 1u) {
    let fw = finalWeight[cell];
    let coverage = select(0.0, clamp(w / fw, 0.0, 1.0), fw > 1.0e-6);
    let out = g * (u.channels + 2u);
    for (var c = 0u; c < u.channels; c++) {
      packed[out + c] = field[cell * u.channels + c];
    }
    packed[out + u.channels] = flag;
    packed[out + u.channels + 1u] = coverage;
  }
}`;function os(n,e){if(!n)return e;if(!e)return n;const t=Math.min(n.y0,e.y0),r=Math.min(n.x0,e.x0);return{y0:t,x0:r,h:Math.max(n.y0+n.h,e.y0+e.h)-t,w:Math.max(n.x0+n.w,e.x0+e.w)-r}}function as(n,e,t){let r=1/0,i=-1/0;const o=s=>{r=Math.min(r,s),i=Math.max(i,s)};for(let s=0;s<4;s++){const a=n[s],l=n[(s+1)%4];a[1]>=e&&a[1]<=t&&o(a[0]);for(const u of[e,t])if((a[1]-u)*(l[1]-u)<0){const c=(u-a[1])/(l[1]-a[1]);o(a[0]+c*(l[0]-a[0]))}}return r<=i?[r,i]:null}let us=class{constructor(e,t,r,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new rs(e,t,r,this.batchSize),this.blendPipeline=e.pipeline(ns(this.fno.store)),this.finalizePipeline=e.pipeline(ss),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,r=t.features,i=t.mddf.channels_per_signal,o=t.mddf.modes_per_signal,s=r.mddf_source_indices,a=new Uint32Array(s.length*4),l=new Float32Array(s.length*2);s.forEach((c,g)=>{const d=Math.floor(c/i),h=c%i,f=h>o?1:0,p=h===0?0:f?h-o:h;a.set([d*i+p,d*i+(p===0?0:o+p),p,f],g*4),l[g*2]=r.mddf_center[g],l[g*2+1]=r.mddf_scale[g]});const u=t.coordinates;return{channels:t.model.input_channels,mddfChannels:s.length,solidChannel:r.use_building_input?s.length:-1,coordChannel:s.length+(r.use_building_input?1:0),coordYScale:u.y_scale,coordZCentre:u.z_center,coordZScale:u.z_scale,coordXCentre:u.x_center,coordXScale:u.x_scale,tableBuffer:e.upload(a,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,t,r){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),o=(t+2*i)*(r+2*i)*28*4,s=this.context.device.limits.maxStorageBufferBindingSize;if(o>s)throw new Error(`city ${r} x ${t} needs a ${(o/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(s/2**20).toFixed(0)} MiB`);const a=new Jn(this.context,e,t,r,i,this.fno.store);return this.city={field:a,ny:t,nx:r,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:a.gy,gx:a.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:r}=this.city,i=(t-1)/2,o=(r-1)/2,s=Math.cos(e),a=Math.sin(e),l=[[0,0],[r-1,0],[r-1,t-1],[0,t-1]].map(([m,b])=>{const $=m-o,v=b-i;return[o+$*s+v*a,i-$*a+v*s]}),u=Math.floor(Math.min(...l.map(m=>m[1]))),c=Math.ceil(Math.max(...l.map(m=>m[1]))),g=Math.floor(Math.min(...l.map(m=>m[0]))),d=Math.ceil(Math.max(...l.map(m=>m[0]))),h=d-g+1,f=Math.max(1,Math.ceil((h-this.patch)/this.stride)+1),p=f>1?(h-this.patch)/(f-1):0,y=l.map(([m,b])=>[b,m]),w=[],x=[];for(let m=0;m<f;m++){const b=Math.round(g+m*p),$=as(y,b,b+this.patch-1)||[u,u+this.patch-1],v=Math.floor($[0]),M=Math.max(this.patch,Math.ceil($[1])-v+1),k=Math.max(1,Math.ceil((M-this.patch)/this.stride)+1),S=k>1?(M-this.patch)/(k-1):0;x.push([w.length/2,k,b-g]);for(let I=0;I<k;I++)w.push(b,Math.round(v+I*S))}return{origins:new Float32Array(w),columns:x,columnCount:f,columnStride:p,syMin:u,sxMin:g,gridH:c-u+1,gridW:d-g+1,patchCount:w.length/2}}patchRect(e,t,r){let i=1/0,o=1/0,s=-1/0,a=-1/0;for(const[l,u,c]of e.columns)for(let g=0;g<u;g++){const d=l+g;if(d<t||d>=r)continue;const h=e.origins[d*2+1]-e.syMin;i=Math.min(i,h),o=Math.min(o,c),s=Math.max(s,h+this.patch),a=Math.max(a,c+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),o=Math.max(0,o),s=Math.min(e.gridH,s),a=Math.min(e.gridW,a),{y0:i,x0:o,h:Math.max(0,s-i),w:Math.max(0,a-o)}):null}async predict(e,t={}){var K,ee,he;const{context:r,city:i}=this,o=this.tiling(e),s=this.metadata.model.output_channels,a=o.gridH*o.gridW,l=this.patch*this.patch,u=performance.now(),c=!!(t.shouldDraw&&t.onDraw),g=s+2,d=r.storage(o.patchCount*s*l*this.fno.elementBytes,"predict.patches"),h=new Int32Array(o.patchCount);for(let R=0;R<o.patchCount;R++)h[R]=o.origins[R*2+1]-o.syMin;const f=r.upload(h,"blend.origins"),p=r.upload(new Int32Array(o.columns.flat()),"blend.columns"),y=r.storage(a*s*4,"blend.field"),w=r.storage(a*4,"blend.weight"),x=r.storage(a*4,"blend.solid"),m=r.storage(c?a*4:4,"blend.finalWeight"),b=r.storage(c?a*g*4:4,"blend.packed"),$=this.metadata.target,v=r.upload(new Float32Array($.center),"final.centre"),M=r.upload(new Float32Array($.scale),"final.scale"),k={y0:0,x0:0,h:o.gridH,w:o.gridW},S=(R,Y,J,pe)=>{const me=R.beginComputePass();r.dispatch(me,this.blendPipeline,[d,f,p,y,pe,r.uniform([["u",o.gridH],["u",o.gridW],["u",this.patch],["u",s],["u",o.columnCount],["u",o.patchCount],["u",J],["u",0],["u",Y.y0],["u",Y.x0],["u",Y.h],["u",Y.w],["f",o.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],Y.h*Y.w),me.end()},I=(R,Y,J)=>{const pe=R.beginComputePass();r.dispatch(pe,this.finalizePipeline,[y,w,v,M,i.field.heightBuffer,x,m,b,r.uniform([["u",o.gridH],["u",o.gridW],["u",s],["u",J?1:0],["u",Y.y0],["u",Y.x0],["u",Y.h],["u",Y.w],["i",o.syMin],["i",o.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],Y.h*Y.w),pe.end()};if(c){const R=r.device.createCommandEncoder();S(R,k,o.patchCount,m),r.device.queue.submit([R.finish()]),(K=t.onStart)==null||K.call(t,{gridH:o.gridH,gridW:o.gridW,originY:o.syMin,originX:o.sxMin,theta:e,patchCount:o.patchCount})}const T=2,P=[];let E=null;for(let R=0;R<o.patchCount;R+=this.batchSize){(ee=t.signal)==null||ee.throwIfAborted();const Y=Math.min(this.batchSize,o.patchCount-R),J=r.device.createCommandEncoder(),pe=i.field.assemble(J,o.origins.subarray(R*2,(R+Y)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),me=this.fno.encode(J,Y);J.copyBufferToBuffer(me,0,d,R*s*l*this.fno.elementBytes,Y*s*l*this.fno.elementBytes);let se=null;if(c){E=os(E,this.patchRect(o,R,R+Y));const be=R+Y>=o.patchCount;E&&E.h>0&&E.w>0&&(be||t.shouldDraw())&&(se=E,E=null,S(J,se,R+Y,w),I(J,se,!0))}if(r.device.queue.submit([J.finish()]),r.free(pe),P.push(r.device.queue.onSubmittedWorkDone()),P.length>T&&await P.shift(),(he=t.onProgress)==null||he.call(t,(R+Y)/o.patchCount),se){const be=await r.readFloat32(b,se.h*se.w*g);t.onDraw({x0:se.x0,y0:se.y0,width:se.w,height:se.h,stride:g,channels:s,theta:e,values:be,readyCount:R+Y,patchCount:o.patchCount})}}const B=r.device.createCommandEncoder();S(B,k,o.patchCount,w),I(B,k,!1),r.device.queue.submit([B.finish()]);const[C,A,L]=await Promise.all([r.readFloat32(y,a*s),r.readFloat32(x,a),r.readFloat32(w,a)]),G=performance.now()-u;let Q=0,O=0;for(let R=0;R<a;R++)if(A[R]!==2){if(L[R]<=1e-6){Q+=1;continue}for(let Y=0;Y<s;Y++)if(!Number.isFinite(C[R*s+Y])){O+=1;break}}for(const R of[d,y,w,x,f,p,v,M,m,b])r.free(R);return r.releaseScratch(),{values:C,solid:A,theta:e,height:o.gridH,width:o.gridW,originY:o.syMin,originX:o.sxMin,patchCount:o.patchCount,channels:$.channel_names,milliseconds:G,uncovered:Q,nonFinite:O,insideCells:a}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}};function ls(n,e){var t,r,i,o,s,a,l,u,c;if(n.dtype!=="float16"||n.total_bytes!==e||((t=n.grid)==null?void 0:t.horizontal_spacing_m)!==4||((r=n.grid)==null?void 0:r.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=n.model)==null?void 0:i.input_channels)!==24||((o=n.model)==null?void 0:o.output_channels)!==5||((a=(s=n.inference)==null?void 0:s.patch)==null?void 0:a.join())!=="64,64"||((u=(l=n.target)==null?void 0:l.channel_names)==null?void 0:u.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const g of Object.values(n.tensors??{}))if(!Number.isInteger(g.offset)||g.offset<0||g.offset%2||!Number.isInteger(g.count)||g.count<=0||g.offset+g.count*2>e||!Array.isArray(g.shape)||g.shape.some(d=>!Number.isInteger(d)||d<1)||g.shape.reduce((d,h)=>d*h,1)!==g.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(n.tensors??{}).length||!Number.isFinite((c=n.wind)==null?void 0:c.reference_speed_m_s)||n.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function cs(n){if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<1||n.height<1||n.values.length!==n.width*n.height*5||n.solid.length!==n.width*n.height)throw new Error("Invalid prediction shape.");for(let e=0;e<n.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(n.values[e*5+t])||(n.solid[e]=2,n.values[e*5+t]=0)}const ye=5,ds=2,fs=4,gs=.9,hs=159,ps=30,ms=1.2;function ys(n){var t;const e=Math.max(ps,ms*(((t=n.statistics)==null?void 0:t.maximumHeightM)??0));return Math.max(0,Math.min(hs,Math.round(e/ae-.5)))}function bs(n){const e=n.layers.filter(t=>t>0).sort();return e.length?e[Math.floor(gs*(e.length-1))]:0}function ws(n,e=n){const t=[];for(let r=0;r<n;r+=r<e?ds:fs)t.push(r);return t.push(n),t}const _i=n=>ws(ys(n),bs(n)),Rt=5;function gr(n,e=Rt){const t=n.length,r=Math.min(e,t),i=new Set;for(let s=0;s<r;s++)i.add(Math.round(s*(t-1)/Math.max(1,r-1)));const o=[...i].sort((s,a)=>s-a);for(;o.length<t;){const s=[...o].sort((l,u)=>l-u);let a=0;for(let l=1;l+1<s.length;l++)s[l+1]-s[l]>s[a+1]-s[a]&&(a=l);o.push(Math.floor((s[a]+s[a+1])/2))}return o.map(s=>n[s])}function hr(n,e,t=!0){const r=n.width*n.height;return{width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta,plan:[...e],layers:t?[...e]:[],slots:t?e.map((i,o)=>o):[],values:new Float32Array(e.length*r*ye),solid:new Uint8Array(e.length*r)}}function pr(n,e,t){if(t.width!==n.width||t.height!==n.height||t.originX!==n.originX)throw new Error("Wind layers do not share one wind-frame grid.");const r=n.width*n.height;if(n.values.set(t.values,e*r*ye),n.solid.set(t.solid,e*r),n.slots.includes(e))return;const i=n.plan[e];let o=0;for(;o<n.layers.length&&n.layers[o]<i;)o++;n.layers.splice(o,0,i),n.slots.splice(o,0,e)}function xs(n,e){const t=n.width*n.height,r=n.slots[e];return{values:n.values.subarray(r*t*ye,(r+1)*t*ye),solid:n.solid.subarray(r*t,(r+1)*t)}}function mr(n,e){const t=e/ae-.5,{layers:r}=n;if(t<=r[0])return{k0:0,k1:0,f:0};const i=r.length-1;if(t>=r[i])return{k0:i,k1:i,f:0};let o=1;for(;r[o]<t;)o++;const s=o-1;return{k0:s,k1:o,f:(t-r[s])/(r[o]-r[s])}}const yr=n=>(n.layers.at(-1)+.5)*ae;function vs(n,e){const{k0:t,k1:r,f:i}=mr(n,e),o=n.width*n.height,s=o*ye,a=new Float32Array(s),l=n.slots[t]*s,u=n.slots[r]*s;for(let g=0;g<s;g++)a[g]=n.values[l+g]*(1-i)+n.values[u+g]*i;const c=n.slots[i<.5?t:r];return{values:a,solid:n.solid.slice(c*o,(c+1)*o),width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta}}function ki(n,e,t,r,i){const o=(e-1)/2,s=(t-1)/2,a=r/z-.5-o,l=i/z-.5-s,u=Math.cos(n.theta),c=Math.sin(n.theta);return[a*u+l*c+o-n.originX,-a*c+l*u+s-n.originY]}function $s(n,e,t,r,i,o,s){const[a,l]=ki(n,e,t,r,i),{width:u,height:c}=n;if(!(a>=0&&l>=0&&a<=u-1&&l<=c-1))return null;const g=Math.min(u-2,Math.floor(a)),d=Math.min(c-2,Math.floor(l)),h=u>1?a-g:0,f=c>1?l-d:0,{k0:p,k1:y,f:w}=mr(n,o),x=u*c;for(let m=0;m<ye;m++)s[m]=0;for(const[m,b]of[[p,1-w],[y,w]])if(b!==0)for(const[$,v]of[[0,1-f],[1,f]])for(const[M,k]of[[0,1-h],[1,h]]){const S=b*v*k;if(S===0)continue;const I=(n.slots[m]*x+Math.min(c-1,d+$)*u+Math.min(u-1,g+M))*ye;for(let T=0;T<ye;T++)s[T]+=n.values[I+T]*S}return s}function Ms(n,e,t){const r=Math.cos(e),i=Math.sin(e);return t[0]=n[0]*r-n[2]*i,t[1]=n[0]*i+n[2]*r,t[2]=n[1],t}function _s(n,e,t,r){const i=Math.floor(e/z),o=Math.floor(t/z);return i<0||o<0||i>=n.nx||o>=n.ny?!0:r<n.layers[o*n.nx+i]*ae}function Si(n,e){const t=Math.max(ae/2,Math.min(yr(n),Number(e)||0)),r=Math.max(0,Math.round(t/ae-.5));return{...vs(n,t),grid:n.grid,settings:{...n.settings,heightM:t,layerIndex:r},referenceSpeed:n.referenceSpeed,colorbar:n.colorbar,modelLabel:n.modelLabel,patchCount:n.patchCount,milliseconds:n.milliseconds}}function ks(n,e){const t=Math.round((n.height-1)/2+Number(e)/z);return Math.max(0,Math.min(n.height-1,t))}function Ss(n){const{nx:e,ny:t}=n.grid,i=[[0,0],[e,0],[0,t],[e,t]].map(([l,u])=>ki(n,e,t,l*z,u*z)[1]),o=(n.height-1)/2,s=Math.max(0,Math.min(...i))-o,a=Math.min(n.height-1,Math.max(...i))-o;return[Math.ceil(s)*z,Math.floor(a)*z]}function Bs(n,e){const{width:t}=n,r=n.width*n.height,i=n.layers.at(-1)+1,o=new Float32Array(t*i*ye),s=new Uint8Array(t*i);for(let a=0;a<i;a++){const{k0:l,k1:u,f:c}=mr(n,(a+.5)*ae),g=n.slots[c<.5?l:u];for(let d=0;d<t;d++){const h=e*t+d,f=(n.slots[l]*r+h)*ye,p=(n.slots[u]*r+h)*ye,y=(a*t+d)*ye;for(let w=0;w<ye;w++)o[y+w]=n.values[f+w]*(1-c)+n.values[p+w]*c;s[a*t+d]=n.solid[g*r+h]}}return{values:o,solid:s,width:t,height:i}}const ut=Object.freeze({TIMEOUT:"timeout",CANCELLED:"cancelled",DOWNLOAD:"download",GPU:"gpu",PLANNER:"planner",MODEL:"model",MISSION:"mission",TOO_LARGE:"too-large"});let lt=class extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}};const we=n=>new lt(ut.MODEL,n),Bi=8,Ii=new MessageChannel,Ci=[];Ii.port1.onmessage=()=>{var n;return(n=Ci.shift())==null?void 0:n()};const Pi=()=>new Promise(n=>{Ci.push(n),Ii.port2.postMessage(0)});class Ai{constructor(){this.buffers=[null,null],this.slot=1}next(e){var t;return this.slot^=1,((t=this.buffers[this.slot])==null?void 0:t.byteLength)>=e||(this.buffers[this.slot]=new SharedArrayBuffer(e)),this.buffers[this.slot]}}const X=256,Ot=1<<20;let Is=class Ti{constructor(e,t,r){this.adapterInfo=r,this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[],this.halfRing=new Ai}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new lt(ut.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new lt(ut.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Ti(i,r,t.info??null)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t,r){const i=Math.max(4,Math.ceil(e/4)*4),o=this.device.createBuffer({size:i,usage:t,label:r});return o.tracked=!0,o}storage(e,t){const r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,r,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),o=new Int32Array(r),s=new Float32Array(r);e.forEach(([l,u],c)=>{l==="u"?i[c]=u:l==="i"?o[c]=u:s[c]=u});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,r),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,o=X){this.dispatchGroups(e,t,r,...this.workgroups(i,o))}workgroups(e,t=X){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((o,s)=>({binding:s,resource:{buffer:o}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r,i){const o=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,r),s=this.device.createCommandEncoder();t(s,o),this.device.queue.submit([s.finish()]);try{await o.mapAsync(GPUMapMode.READ);const a=await i(o.getMappedRange());return o.unmap(),a}finally{this.free(o)}}async readHalf(e,t,r){const i=(o,s)=>o.copyBufferToBuffer(e,0,s,0,s.size);return this.readBack(t*2,i,"staging",o=>this.copyHalves(o,t,r))}async copyHalves(e,t,r){const i=r?new Uint16Array(this.halfRing.next(t*2),0,t):new Uint16Array(t),o=new Uint16Array(e,0,t);let s=performance.now();for(let a=0;a<t;a+=Ot)i.set(o.subarray(a,Math.min(t,a+Ot)),a),a+Ot<t&&performance.now()-s>Bi&&(await Pi(),s=performance.now());return i}};const kt=4,et=1.5;let Me=20,St=80,at=St-Me+1;function Cs(n,e){Me=n,St=e,at=e-n+1}const Ps=2,As=32,V=4,Ts=()=>!!globalThis.crossOriginIsolated&&typeof SharedArrayBuffer<"u",Rs=()=>navigator.hardwareConcurrency||4;function Es(n){let e=0;for(let t=0;t<n.length;t++){const r=n[t],i=n[(t+1)%n.length];e+=r[0]*i[1]-i[0]*r[1]}return e}function Fs(n,e){const t=e.reduce((o,s)=>o+s[0],0)/e.length,r=e.reduce((o,s)=>o+s[1],0)/e.length;let i=n;for(let o=0;o<e.length&&i.length;o++){const s=e[o],a=e[(o+1)%e.length],l=g=>(a[0]-s[0])*(g[1]-s[1])-(a[1]-s[1])*(g[0]-s[0]),u=l([t,r])>0?1:-1,c=i;i=[];for(let g=0;g<c.length;g++){const d=c[g],h=c[(g+1)%c.length],f=u*l(d),p=u*l(h);if(f>=0&&i.push(d),f>=0!=p>=0){const y=f/(f-p);i.push([d[0]+y*(h[0]-d[0]),d[1]+y*(h[1]-d[1])])}}}return i}function Ri(n,e,t){const r=(e-1)/2,i=(t-1)/2,o=Math.cos(n),s=Math.sin(n);return{theta:n,cX:r,cY:i,cos:o,sin:s,toWind:([a,l])=>{const u=a-r,c=l-i;return[r+u*o+c*s,i-u*s+c*o]},toCity:([a,l])=>{const u=a-r,c=l-i;return[r+u*o-c*s,i+u*s+c*o]}}}const ue=64,re=180,Ei=1600,Ls=640,Be=8,q=32,Ae=n=>n.toFixed(6),Ie=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Ds=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,zs=()=>`
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
@compute @workgroup_size(${ue})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ue}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${Ae(et)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${Ae(et)}, has1);
  let cutoff = ${Ae(Ei)};
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
}`;function Os(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${ue})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ue}u;
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
}`}const Le=64,ce=8,Ye=Le/ce,fe=Ye*Ye,qt=ce*ce,Nr=Math.log2(Le),Xr=Math.log2(ce),ht=ce-1,br="15u",Ht="4u",Fi="0xfffu",Vt="2048",Us="4095",wr="16u",Yr=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(Ie).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${Ae(re)} / STEPS[c]));
}
@compute @workgroup_size(${ue})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ue}u;
  if (g >= u.nTiles * ${fe}u) { return; }
  let t = g / ${fe}u;
  let b = g % ${fe}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${fe}u + b];
  let w = h & ${br};
  if (w == 0u) { return; }
  let base = i32((h >> ${Ht}) & ${Fi}) - ${Vt};
  var wi = field[t] + (h >> ${wr});
  let x0 = tx * ${Le}u + (b % ${Ye}u) * ${ce}u;
  let y0 = ty * ${Le}u + (b / ${Ye}u) * ${ce}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${qt}u; j++) {
    let x = x0 + j % ${ce}u; let y = y0 + j / ${ce}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${Le}u + (b % ${Ye}u) * ${ce}u;
  let y0 = ty * ${Le}u + (b / ${Ye}u) * ${ce}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${qt}u; j++) {
    let x = x0 + j % ${ce}u; let y = y0 + j / ${ce}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${fe}u + b] = w | (u32(clamp(mn + ${Vt}, 0, ${Us})) << ${Ht});`}
}`,Ns=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${ue})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${ue}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${fe}u; b++) {
    let h = headers[t * ${fe}u + b];
    headers[t * ${fe}u + b] = h | (local << ${wr});
    local += ${qt/32}u * (h & ${br});
  }
  tileWords[t] = local;
}`,Xs=n=>{const e=`array<f32, ${Be}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Ds}
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
@compute @workgroup_size(${ue})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ue}u;
  let groupsPerPixel = (u.layerCount + ${Be-1}u) / ${Be}u;
  let cells = ${q*q}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${q} + i32(cell % ${q}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${q} + i32(cell / ${q}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  // expanded-grid position (cell centres at integers), as assemble's ix / iy
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  // position inside its cell, 0..1 from the lower edge (0.5 at the centre)
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${Be}u;
  let count = min(${Be}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${Be}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${Ae(et)};
  }
  // grid traversal along the single upwind azimuth, for up to LAYER_GROUP query heights at once (the cells the ray
  // crosses do not depend on the height, only where it stops and what it records)
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${Ae(kt)};
    let gyr = u.sinU / ${Ae(kt)};
    // first cell boundary crossings from the start position (fx, fy: its place within the start cell)
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
    let cutoff = ${Ae(Ei)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${Be}>;
    for (var k = 0u; k < ${Be}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${Ls}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${Be}u; k++) {
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
    let z = query[k];
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${n.length}u;
${n.map((r,i)=>`    put(e0 + ${i}u, ${t[r]});`).join(`
`)}
  }
}`},Ys=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:o}=e,s=[["field","array<u32>"]];o&&s.push(["height","array<f32>"]),s.push(["origins","array<i32>"],["slots","array<i32>"]),i&&s.push(["up","array<u32>"],["upTable","array<i32>"]);const a=s.map(([c,g],d)=>`@group(0) @binding(${d}) var<storage, read> ${c}: ${g};`);a.push(`@group(0) @binding(${s.length}) var<storage, read_write> out: array<${n}>;`),a.push(`@group(0) @binding(${s.length+1}) var<uniform> u: P;`);const l=(c,g)=>`(${c} - ${Ie(g.center)}) / ${Ie(g.scale)}`,u=e.inputs.map((c,g)=>{let d;if(c.source==="r1")if(c.part==="dc")d=`value = ${l(`sampleField(ry, rx, slot, ${e.storedIndex(c.signal,"dc",0)}u)`,c)};`;else{const h=e.storedIndex(c.signal,"re",c.mode),f=e.storedIndex(c.signal,"im",c.mode);d=`let re = sampleField(ry, rx, slot, ${h}u);
      let im = sampleField(ry, rx, slot, ${f}u);
      let angle = ${Ie(c.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${l(c.part==="im"?"(re * s + im * c)":"(re * c - im * s)",c)};`}else if(c.source==="geo"){const h=c.index===0?"h / 100.0":"asinh((h - z) / 10.0)";d=`let h = roofHeight(iy, ix);
      value = ${l(`f16round(${h})`,c)};`}else c.source==="up"?d=`value = ${l(`upAtWind(sy, sx, slot, ${e.up.indexOf(c.index)}u)`,c)};`:c.source==="solid"?d=`let roofLayer = round(roofHeight(iy, ix) / ${Ae(et)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:c.axis==="y"?d=`value = (sy - u.centreY) / ${Ie(c.scale)};`:c.axis==="z"?d=`value = (f32(layer) - ${Ie(c.center)}) / ${Ie(c.scale)};`:d=`value = (sx - ${Ie(c.center)}) / ${Ie(c.scale)};`;return`    case ${g}u: {  // ${c.name}
      ${d}
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
${a.join(`
`)}

// Round to the nearest float16 value (ties to even), as numpy astype(float16).  Done with bit
// operations: the shader compiler may fold unpack2x16float(pack2x16float(v)) away.
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }   // float16 subnormals
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(Ie).join(", ")});
// one value of the packed field (region = whole padded grid)
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${Nr}u)) * ${t.tx}u + (x >> ${Nr}u);
  let h = field[u.packTiles + t * ${fe}u + ((y >> ${Xr}u) & ${ht}u) * ${Ye}u + ((x >> ${Xr}u) & ${ht}u)];
  let w = h & ${br};
  var q = i32((h >> ${Ht}) & ${Fi}) - ${Vt};
  if (w > 0u) {
    let bit = (((y & ${ht}u) * ${ce}u) + (x & ${ht}u)) * w;
    let word = field[t] + (h >> ${wr}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${i?`// along-wind channels computed at the wind-frame cells (no interpolation): tile table -> tile slot -> value
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(q)}u) >= u.upTW || u32(ty >> ${Math.log2(q)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(q)}u) * u.upTW + u32(tx >> ${Math.log2(q)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${q*q}u + u32(ty & ${q-1}) * ${q}u + u32(tx & ${q-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${o?`fn roofHeight(iy: f32, ix: f32) -> f32 {
  let hy = clamp(i32(round(iy)), 0, i32(u.gy) - 1);
  let hx = clamp(i32(round(ix)), 0, i32(u.gx) - 1);
  return height[u32(hy) * u.gx + u32(hx)];
}`:""}

// Bilinear sample of the stored field at region coordinates (ry, rx).
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

@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${X}u;
  let area = u.py * u.px;
  if (g >= u.batch * u.channels * area) { return; }
  let p = g % area;
  let channel = (g / area) % u.channels;
  let b = g / (area * u.channels);
  let x = p % u.px;
  let y = p / u.px;
  // Patch origin in wind-frame cells: [sy, layer, sx].
  let sy = f32(origins[b * 3u] + i32(y));
  let layer = u32(origins[b * 3u + 1u]);
  let sx = f32(origins[b * 3u + 2u] + i32(x));
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  // City cell, then expanded-grid cell, then region cell.
  let ix = u.centreX + dx * u.cosT - dy * u.sinT + f32(u.margin);
  let iy = u.centreY + dx * u.sinT + dy * u.cosT + f32(u.margin);
  let ry = iy - f32(u.regionY);
  let rx = ix - f32(u.regionX);
  let z = (f32(layer) + 0.5) * ${Ae(et)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${u.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},Ws=4,Gs=48<<20,js=3,qs=.016,Hs=256;class Li{constructor(e,{layers:t,ny:r,nx:i},o,s,a){this.context=e,this.inputPlan=a,this.ny=r,this.nx=i,this.margin=o,this.gy=r+2*o,this.gx=i+2*o;const l=new Float32Array(this.gy*this.gx);for(let f=0;f<r;f++)for(let p=0;p<i;p++)l[(f+o)*this.gx+p+o]=t[f*i+p]*et;this.heightBuffer=e.upload(l,"mddf.height");const u=new Float32Array(re),c=new Float32Array(re);for(let f=0;f<re;f++)u[f]=Math.cos(2*Math.PI*f/re),c[f]=Math.sin(2*Math.PI*f/re);this.cosT=u,this.sinT=c,this.scanPipeline=e.pipeline(zs()),this.accumulatePipeline=e.pipeline(Os(a.stored)),this.upWind=a.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(Xs(a.up)));const g=a.stored.map(f=>2*qs*f.scale),d=Math.ceil(this.gx/Le),h=Math.ceil(this.gy/Le);this.packed={steps:g,tx:d,ty:h},this.packHeaderPipeline=e.pipeline(Yr(a.stored,g,d,h,!1)),this.packPayloadPipeline=e.pipeline(Yr(a.stored,g,d,h,!0)),this.packTilePipeline=e.pipeline(Ns()),this.assemblePipeline=e.pipeline(Ys(s,a,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let o=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(o=Math.min(o,Ws),i>t)throw new lt(ut.TOO_LARGE,`one layer needs ${i} bytes, above the ${t}-byte buffer limit`);const s=[];for(let a=0;a<e.length;a+=o){const l=e.slice(a,a+o),u=new Int32Array(Hs).fill(-1);l.forEach((c,g)=>{u[c]=g}),s.push({layers:l,slots:u,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return s}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots,"mddf.slots"),r.layerBuffer=t.upload(new Uint32Array(r.layers),"mddf.layers");this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(re*r),o=new ArrayBuffer(re*32),s=new Uint32Array(o),a=new Int32Array(o),l=new Float32Array(o),u=new Float32Array(re*4);let c=0;for(let g=0;g<re;g++){const d=this.cosT[g],h=this.sinT[g],f=Math.abs(d)>=Math.abs(h),p=f?d:h,y=f?h:d,w=Math.abs(y/p),x=f?e:t,m=f?t:e;for(let v=0;v<x;v++)i[g*r+v]=Math.round(w*v);const b=i[g*r+x-1],$=m+b;c=Math.max(c,$),s[8*g]=f?1:0,a[8*g+1]=p>=0?1:-1,a[8*g+2]=y>=0?1:-1,a[8*g+3]=b,s[8*g+4]=$,s[8*g+5]=g*r,l[8*g+6]=kt*Math.sqrt(1+w*w),u.set([d,h,Math.cos(4*Math.PI*g/re),Math.sin(4*Math.PI*g/re)],4*g)}return this.offsetBuffer=this.context.upload(i,"mddf.offsets"),this.tableBuffer=this.context.upload(s,"mddf.scanTable"),this.trigBuffer=this.context.upload(u,"mddf.trig"),this.scanInfo={lineMax:c},this.scanInfo}async scan(e,t){if(this.destroyed)return;const{context:r,gx:i,gy:o}=this,{lineMax:s}=this.scanTables(),a=i*o,l=this.inputPlan.stored.length,u=e.layers.length,c=Math.ceil(u/2),g=Math.max(1,Math.min(re,Math.floor(Gs/(c*a*4)))),d=g*c*a*4,h=u*a*l*4;(!this.scanRaw||this.scanRaw.size<d)&&(r.free(this.scanRaw),this.scanRaw=r.storage(d,"mddf.scanRaw")),(!this.sumsBuffer||this.sumsBuffer.size<h)&&(r.free(this.sumsBuffer),this.sumsBuffer=r.storage(h,"mddf.sums"));const f=r.device.createCommandEncoder();f.clearBuffer(this.sumsBuffer,0,u*a*l*4),r.device.queue.submit([f.finish()]);const p=[];for(let y=0;y<re;y+=g){if(this.destroyed)return;const w=Math.min(g,re-y),x=r.device.createCommandEncoder(),m=x.beginComputePass(),b=r.uniform([["u",i],["u",o],["u",a],["u",0],["u",u],["u",c],["u",y],["u",w],["u",s],["u",0],["u",0],["u",0]]);r.dispatch(m,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,b],s*c*w,ue);const $=r.uniform([["u",a],["u",u],["u",c],["u",y],["u",w],["u",0],["u",0],["u",0]]);r.dispatch(m,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,$],a*u,ue),m.end(),r.device.queue.submit([x.finish()]),p.push(r.device.queue.onSubmittedWorkDone()),p.length>=js&&await p.shift(),t((y+w)/re)}this.destroyed||(await this.packGroup(e,u,a),!this.destroyed&&(await r.device.queue.onSubmittedWorkDone(),!this.destroyed&&(r.free(this.scanRaw),this.scanRaw=null,r.free(this.sumsBuffer),this.sumsBuffer=null,r.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:o,gy:s}=this,{tx:a,ty:l}=this.packed,u=t*this.inputPlan.stored.length*a*l,c=i.storage(u*fe*4,"mddf.packHeaders"),g=i.storage(u*4,"mddf.packTileWords"),d=i.uniform([["u",o],["u",s],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]),h=i.uniform([["u",u],["u",0],["u",0],["u",0]]),f=()=>{i.free(c),i.free(g)},p=(v,M)=>{const k=v.beginComputePass();i.dispatch(k,this.packHeaderPipeline,[this.sumsBuffer,c,d],u*fe,ue),i.dispatch(k,this.packTilePipeline,[c,g,h],u,ue),k.end(),v.copyBufferToBuffer(g,0,M,0,u*4)};let y;try{y=await i.readBack(u*4,p,"mddf.packTileWords read",v=>this.destroyed?null:new Uint32Array(v.slice(0)))}catch(v){throw f(),v}if(!y){f();return}const w=new Uint32Array(u);let x=u+u*fe;for(let v=0;v<u;v++)w[v]=x,x+=y[v];i.free(e.field),e.field=i.storage(Math.max(4,x*4),"mddf.field"),e.packTiles=u,i.write(e.field,w);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(c,0,e.field,u*4,u*fe*4);const b=m.beginComputePass(),$=i.uniform([["u",o],["u",s],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]);i.dispatch(b,this.packPayloadPipeline,[this.sumsBuffer,e.field,$],u*fe,ue),b.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),f()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*re,i=Math.round(r)%re;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=Ri(e,this.nx,this.ny);let i=1/0,o=-1/0,s=1/0,a=-1/0;for(const d of[-.5,this.nx-.5])for(const h of[-.5,this.ny-.5]){const[f,p]=r.toWind([d,h]);i=Math.min(i,f),o=Math.max(o,f),s=Math.min(s,p),a=Math.max(a,p)}const l=Math.floor((i-t)/q)*q,u=Math.floor((s-t)/q)*q,c=Math.ceil((o+t+1-l)/q),g=Math.ceil((a+t+1-u)/q);return{theta:e,x0:l,y0:u,tw:c,th:g,table:new Int32Array(c*g).fill(-1),count:0}}ensureUpTiles(e,t,r,i,o){const{context:s}=this;let a=this.upGrid;(!a||a.theta!==t||a.count>0&&e.some(b=>b.upGrid!==a))&&(a=this.upGrid=this.upTileGrid(t,i));const l=[];for(const[b,$]of r){const v=Math.floor(($-a.x0)/q),M=Math.floor(($+i-1-a.x0)/q),k=Math.floor((b-a.y0)/q),S=Math.floor((b+i-1-a.y0)/q);if(v<0||k<0||M>=a.tw||S>=a.th)throw new Error("a patch lies outside the wind-frame tile grid");for(let I=k;I<=S;I++)for(let T=v;T<=M;T++){const P=I*a.tw+T;a.table[P]<0&&(a.table[P]=a.count+l.length/3,l.push(T,I,a.table[P]))}}const u=l.length/3;if(!u)return 0;o();const c=a.count,g=c+u,d=this.inputPlan.up.length,h=q*q,f=s.device.createCommandEncoder(),p=[];for(const b of e){const $=b.layers.length*h*d*2;if(b.upGrid!==a&&(b.upCount=0),!b.upTiles||b.upCapacity<g){const v=Math.min(a.tw*a.th,Math.max(g,Math.ceil(b.upCapacity*1.5))),M=s.storage(v*$,"mddf.upTiles");b.upTiles&&b.upCount&&f.copyBufferToBuffer(b.upTiles,0,M,0,b.upCount*$),b.upTiles&&p.push(b.upTiles),b.upTiles=M,b.upCapacity=v}b.upGrid=a,f.clearBuffer(b.upTiles,c*$,u*$),b.upCount=g}const y=s.upload(new Int32Array(l),"mddf.upTileList"),[w,x]=this.upwindDirection(t),m=f.beginComputePass();for(const b of e){const $=[this.heightBuffer,b.layerBuffer,b.upTiles,y];s.dispatch(m,this.alongPipeline,[...$,s.uniform([["u",this.gx],["u",this.gy],["u",u],["u",b.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",a.x0],["i",a.y0],["u",0],["u",0],["f",w],["f",x],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*h*Math.ceil(b.layers.length/Be),ue)}m.end(),(!this.upTableBuffer||this.upTableBuffer.size!==a.table.byteLength)&&(s.free(this.upTableBuffer),this.upTableBuffer=s.storage(a.table.byteLength,"mddf.upTable")),s.write(this.upTableBuffer,a.table),s.device.queue.submit([f.finish()]);for(const b of p)s.free(b);return s.free(y),a.count=g,u}assemble(e,t,r,i,o,s){var y,w,x,m;const{context:a,inputPlan:l,gx:u,gy:c}=this,g=t.length/3,d=a.upload(t,"assemble.origins"),h=a.uniform([["u",g],["u",l.inputs.length],["u",o],["u",o],["u",u],["u",c],["u",0],["u",0],["u",u],["u",c],["u",u*c],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((y=this.upGrid)==null?void 0:y.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((x=this.upGrid)==null?void 0:x.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),f=[r.field];if(l.usesHeight&&f.push(this.heightBuffer),f.push(d,r.slotBuffer),l.up.length){if(r.upGrid!==this.upGrid)throw new Error("along-wind tiles of another direction (ensureUpTiles first)");f.push(r.upTiles,this.upTableBuffer)}f.push(s,h);const p=e.beginComputePass();return a.dispatch(p,this.assemblePipeline,f,g*l.inputs.length*o*o),p.end(),d}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function Vs(n){const e=n.inputs;if(!e)throw we("the model metadata has no input manifest (metadata.inputs)");if(e.length!==n.model.input_channels)throw we(`manifest has ${e.length} inputs, model expects ${n.model.input_channels}`);const t=[],r=(l,u,c)=>t.findIndex(g=>g.key===`${l}:${u}:${c}`),i=(l,u,c)=>{r(l.signal,u,c)>=0||t.push({key:`${l.signal}:${u}:${c}`,signal:l.signal,part:u,mode:c,scale:l.scale})},o=[];for(const l of e){if(l.source==="r1")l.part==="dc"?i(l,"dc",0):(i(l,"re",l.mode),i(l,"im",l.mode));else if(l.source==="up")o.includes(l.index)||o.push(l.index);else if(!["geo","solid","coord"].includes(l.source))throw we(`unsupported input source ${l.source}`);if(l.source==="geo"&&![0,1].includes(l.index))throw we(`unsupported geo channel ${l.index}`);if(l.source==="up"&&!(l.index>=0&&l.index<4))throw we(`unsupported up channel ${l.index}`)}for(const l of t)if(l.mode>2)throw we("Fourier modes above 2 are not computed");const s=[...new Set(t.map(l=>l.signal))].sort();if(s.length!==1||s[0]!==0)throw we("the stored channels must be those of the upper distance (signal 0) only");const a=e.some(l=>l.source==="solid"||l.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:o,usesHeight:a}}function Kt(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let ze=null;function Di(){if(ze)return ze;ze=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?ze[n]=e*r*2**-24:t===31?ze[n]=r?NaN:e*(1/0):ze[n]=e*(1+r/1024)*2**(t-15)}return ze}function Ks(n){const e=new Float32Array(n.length),t=Di();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function Zs(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const o=r[0],s=o>>>16&32768,a=o>>>23&255;let l=o&8388607;if(a===255){e[i]=s|31744|(l?1:0);continue}const u=a-127+15;if(u>=31){e[i]=s|31744;continue}if(u<=0){if(u<-10){e[i]=s;continue}l|=8388608;const g=14-u;let d=l>>>g;l>>>g-1&1&&(d+=1),e[i]=s|d;continue}let c=u<<10|l>>>13;l&4096&&(c+=1),e[i]=s|c}return e}const xr=`
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
`,Js=`
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
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
  if (g >= u.total) { return; }
  // Split the flat output index around the contracted mode.
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
}`;function Wr(n,e,t){const{enable:r,load:i,save:o}=rt(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${X}>;
@compute @workgroup_size(${X})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${X}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${X/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${X}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${X/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${X}u) {
    Y[base + i] = ${o("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const Zt=32,Gr=1e-5,wt=16;function rt(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function Qs(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:o,save:s}=rt(e);return`${i}${xr}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${wt}u;
var<workgroup> w: array<f32, ${wt*n.cinMax}>;
@compute @workgroup_size(${X})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear workgroup index over a 2-D grid (a single dimension is capped at 65535).
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/X}u;
  if (wg >= u.batch * perSample) { return; }       // whole workgroups only: uniform
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/X}u;
  let p = (wg % ${r/X}u) * ${X}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${X}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${o("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${wt}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${o("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${o("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${s("v")};
  }
}`}function eo(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:o,save:s}=rt(e);return`${i}${xr}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${o("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${o("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${s("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function to(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:o,load:s}=rt(e);return`${o}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${i}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${s("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function ro(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
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
}`}function io(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
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
}`}function no(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:o,save:s}=rt(e);return`${o}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
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
  Y[g] = ${s("acc * "+1/Zt)};
}`}function so(n){const{store:e}=n,{enable:t,load:r,save:i}=rt(e);return`${t}${xr}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${X}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function oo(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:Qs(n),gate:eo(n),instanceNorm:Wr(e,r,Gr),instanceNormScaled:Wr(e,r,Gr/(Zt*Zt)),forwardColumns:to(n),rowMix:ro(n),spectralMix:io(n),inverseColumns:no(n),residual:so(n)}}function ao(n,e,t){const r=2*e,i=[];for(let h=0;h<e;h++)i.push(h);for(let h=n-e;h<n;h++)i.push(h);const o=new Float32Array(n*t),s=new Float32Array(n*t);for(let h=0;h<n;h++)for(let f=0;f<t;f++){const p=2*Math.PI*h*f/n;o[h*t+f]=Math.cos(p),s[h*t+f]=-Math.sin(p)}const a=new Float32Array(r*n),l=new Float32Array(r*n);for(let h=0;h<r;h++)for(let f=0;f<n;f++){const p=2*Math.PI*i[h]*f/n;a[h*n+f]=Math.cos(p),l[h*n+f]=-Math.sin(p)}const u=new Float32Array(n*r),c=new Float32Array(n*r);for(let h=0;h<n;h++)for(let f=0;f<r;f++){const p=2*Math.PI*i[f]*h/n;u[h*r+f]=Math.cos(p)/n,c[h*r+f]=Math.sin(p)/n}const g=new Float32Array(t*n),d=new Float32Array(t*n);for(let h=0;h<t;h++){const f=(h===0?1:2)/n;for(let p=0;p<n;p++){const y=2*Math.PI*h*p/n;g[h*n+p]=f*Math.cos(y),d[h*n+p]=-f*Math.sin(y)}}return{forwardCos:o,forwardSin:s,rowRe:a,rowIm:l,inverseRowRe:u,inverseRowIm:c,inverseColCos:g,inverseColSin:d}}function uo(n,e,t){const r=n.tensors[t];if(!r)throw we(`missing tensor ${t}`);return Ks(new Uint16Array(e,r.offset,r.count))}class lo{constructor(e,t,r,i){const o=t.model;if(this.context=e,this.metadata=t,this.width=o.width,this.depth=o.layers,this.inputChannels=o.input_channels,this.outputChannels=o.output_channels,this.patch=t.inference.patch[0],this.modes1=o.modes[0],this.modes2=o.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw we("only square patches are supported");if(this.patch*this.patch%X)throw we(`the patch area must be a multiple of ${X}`);const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[u,c]of Object.entries(oo(s)))this.pipelines[u]=e.pipeline(c);this.contractPipeline=e.pipeline(Js);const a=u=>uo(t,r,u);this.tables={};for(const[u,c]of Object.entries(ao(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(c,`fno.table.${u}`);this.weights={};const l=(u,c)=>{const g=a(c);this.weights[u]=this.store==="f16"?e.upload(Zs(g),`fno.${u}`):e.upload(g,`fno.${u}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let u=0;u<this.depth;u++)l(`m1w${u}`,`mlp_layers.${u}.mlp1.weight`),l(`m1b${u}`,`mlp_layers.${u}.mlp1.bias`),l(`m2w${u}`,`mlp_layers.${u}.mlp2.weight`),l(`m2b${u}`,`mlp_layers.${u}.mlp2.bias`),l(`lw${u}`,`w_layers.${u}.weight`),l(`lb${u}`,`w_layers.${u}.bias`);this.buildSpectralWeights(a),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.tucker;let o=i.core_shape.slice(),s=t.upload(e(`${i.core}.re`),"tucker.core.re"),a=t.upload(e(`${i.core}.im`),"tucker.core.im");for(const u of i.factors){const[c,g]=u.shape;if(o[u.mode]!==g)throw we(`factor ${u.name} does not match the core`);const d=o.slice();d[u.mode]=c;const h=d.reduce((v,M)=>v*M,1),f=d.slice(u.mode+1).reduce((v,M)=>v*M,1),p=t.storage(h*4,"tucker.re"),y=t.storage(h*4,"tucker.im"),w=t.upload(e(`${u.name}.re`),"tucker.f"),x=t.upload(e(`${u.name}.im`),"tucker.f"),m=t.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",u.mode],["u",c],["u",g],["u",f],["u",0],["u",h],["u",0]]),b=t.device.createCommandEncoder(),$=b.beginComputePass();t.dispatch($,this.contractPipeline,[s,a,w,x,p,y,m],h),$.end(),t.device.queue.submit([b.finish()]),t.free(s),t.free(a),t.free(w),t.free(x),s=p,a=y,o=d}t.releaseScratch();const l=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(o.join()!==l.join())throw we(`spectral stack is ${o} but ${l} was expected`);this.spectralRe=s,this.spectralIm=a}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,o=2*this.modes1,s=(d,h)=>t.storage(e*d*r*this.elementBytes,h),a=(d,h)=>t.storage(e*i*d*4,h),l=s(Math.max(4*i,this.inputChannels,this.outputChannels),"fno.large"),u=s(2*i,"fno.medium"),c=a(this.patch*this.modes2,"fno.xwRe"),g=a(this.patch*this.modes2,"fno.xwIm");this.buffers={x:s(i,"fno.x"),input:l,t2:l,gates:l,spectral:l,output:l,wide:u,t1:u,hidden:u,local:u,xRe:c,xIm:g,yRe:a(o*this.modes2,"fno.yRe"),yIm:a(o*this.modes2,"fno.yIm"),zRe:a(o*this.modes2,"fno.zRe"),zIm:a(o*this.modes2,"fno.zIm"),wRe:c,wIm:g}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/wt)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:o}=this,s=this.width,a=this.patch*this.patch,l=2*this.modes1,u=[],c=(d,h,f,p)=>{u.push(t.prepared(d,[...h,t.keptUniform(f)],t.workgroups(p)))},g=(d,h,f=i.instanceNorm)=>{u.push(t.prepared(f,[d,h],[e*s]))};c(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*s],["u",1]],this.convThreads(e,2*s)),c(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*s],["u",s],["u",0]],this.convThreads(e,s));for(let d=0;d<this.depth;d++)g(r.x,r.t1),c(i.forwardColumns,[r.t1,o.forwardCos,o.forwardSin,r.xRe,r.xIm],[["u",e],["u",s],["u",0],["u",0]],e*s*this.patch*this.modes2),c(i.rowMix,[r.xRe,r.xIm,o.rowRe,o.rowIm,r.yRe,r.yIm],[["u",e],["u",s],["u",l],["u",this.patch]],e*s*l*this.modes2),c(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",s],["u",2*d],["u",0]],e*s*l*this.modes2),c(i.rowMix,[r.zRe,r.zIm,o.inverseRowRe,o.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",s],["u",this.patch],["u",l]],e*s*this.patch*this.modes2),c(i.inverseColumns,[r.wRe,r.wIm,o.inverseColCos,o.inverseColSin,r.t2],[["u",e],["u",s],["u",0],["u",0]],e*s*a),g(r.t2,r.t1,i.instanceNormScaled),c(i.conv1x1,[r.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],r.gates],[["u",e],["u",s],["u",4*s],["u",0]],this.convThreads(e,4*s)),c(i.gate,[r.gates,r.hidden],[["u",e],["u",2*s],["u",0],["u",0]],e*2*s*a),c(i.conv1x1,[r.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],r.spectral],[["u",e],["u",2*s],["u",s],["u",0]],this.convThreads(e,s)),c(i.conv1x1,[r.x,this.weights[`lw${d}`],this.weights[`lb${d}`],r.local],[["u",e],["u",s],["u",s],["u",0]],this.convThreads(e,s)),c(i.residual,[r.spectral,r.local,r.x],[["u",e*s*a],["u",d<this.depth-1?1:0],["u",0],["u",0]],e*s*a);return c(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",s],["u",2*s],["u",1]],this.convThreads(e,2*s)),c(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*s],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),u}}const zi="1.0e-6",co=Number(zi),fo="1.0e-5",Bt=n=>({rowX0:n+1,rowLen:2*n+1,slots:3*n+1});function go(n,e,t){const{half:r,values:i,gy:o,gz:s,gx:a,gridX0:l,gridY0:u,theta:c,nx:g,ny:d,layerMap:h,predicted:f,firstLayer:p,compactTable:y}=n,w=Bt(o),x=Di(),m=s*a*V,b=new Int32Array(t-e),$=new Int32Array(t-e),v=f.length;for(let k=e;k<t;k++){i.fill(0,k*m,(k+1)*m);const S=y[w.rowLen+k],I=y[w.rowX0+k],T=y[k];b[k-e]=I,$[k-e]=I+S;for(let P=0;P<v;P++){const E=(T+P*S)*V,B=((k*s+f[P])*a+I)*V;for(let C=0;C<V*S;C++)i[B+C]=x[r[E+C]]}}if(n.interpolate){const k=(d-1)/2,S=(g-1)/2,I=Math.cos(c),T=Math.sin(c),P=new Float32Array(a);for(let E=e;E<t;E++){for(let A=0;A<a;A++){const L=l+A-S,G=u+E-k,Q=S+L*I-G*T,O=k+L*T+G*I,K=Kt(Q),ee=Kt(O);P[A]=K>=0&&K<g&&ee>=0&&ee<d?h[ee*g+K]:0}const B=b[E-e],C=$[E-e];for(let A=0;A<f.length-1;A++){const L=f[A],G=f[A+1];for(let Q=L+1;Q<G;Q++){const O=(Q-L)/(G-L),K=p+L,ee=p+Q,he=(E*s+L)*a*V,R=(E*s+G)*a*V,Y=(E*s+Q)*a*V;for(let J=B;J<C;J++){const pe=P[J],me=pe>K,se=pe>ee;for(let be=0;be<V;be++){const Ve=V*J+be;i[Y+Ve]=me&&!se?i[R+Ve]:i[he+Ve]+O*(i[R+Ve]-i[he+Ve])}}}}}}let M=0;for(let k=e*m;k<t*m;k+=V)if(i[k+3]>co){const S=i[k]*i[k]+i[k+1]*i[k+1]+i[k+2]*i[k+2];S>M&&(M=S)}return{maxSpeed2:M}}const ho=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, outFirst: u32, pad0: u32, pad1: u32,
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
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${X}u;
  if (g >= u.rectH * u.rectD * u.rectW) { return; }
  let cx = u.rectX0 + g % u.rectW;
  let cz = u.rectZ0 + (g / u.rectW) % u.rectD;
  let cy = u.rectY0 + g / (u.rectW * u.rectD);
  let sy = i32(cy) + u.gridY0;
  let sx = i32(cx) + u.gridX0;
  let layer = i32(cz + u.outFirst);
  let area = u.py * u.px;
  var s0 = 0.0; var s1 = 0.0; var s2 = 0.0; var total = 0.0;
  for (var b = 0u; b < u.batch; b++) {
    if (layer != origins[b * 3u + 1u]) { continue; }
    let py = sy - origins[b * 3u];
    let px = sx - origins[b * 3u + 2u];
    if (py < 0 || px < 0 || py >= i32(u.py) || px >= i32(u.px)) { continue; }
    let w = hann(py, u.py) * hann(px, u.px);
    let base = b * u.channels * area + u32(py) * u.px + u32(px);
    s0 += w * f32(patches[base]);
    s1 += w * f32(patches[base + area]);
    s2 += w * f32(patches[base + 2u * area]);
    total += w;
  }
  if (total == 0.0) { return; }
  // row cy's offset, the layer's slot times the row's length, x from the row's first covered x
  let len = table[2u * u.gy + 1u + cy];
  let cell = (table[cy] + table[3u * u.gy + 1u + cz] * len + cx - table[u.gy + 1u + cy]) * ${V}u;
  sums[cell] += s0; sums[cell + 1u] += s1; sums[cell + 2u] += s2; sums[cell + 3u] += total;
}`,po=`
struct P { count: u32, c0: f32, c1: f32, c2: f32, s0: f32, s1: f32, s2: f32, pad0: f32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed: array<u32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${X})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${X}u;
  if (g >= u.count) { return; }
  let w = sums[g * ${V}u + 3u];
  var a = vec3<f32>(0.0);
  var stored = 0.0;
  if (w > ${zi}) {
    a = vec3<f32>(sums[g * ${V}u], sums[g * ${V}u + 1u], sums[g * ${V}u + 2u]) / w
        * vec3<f32>(u.s0, u.s1, u.s2) + vec3<f32>(u.c0, u.c1, u.c2);
    stored = max(w, ${fo});
  }
  packed[g * 2u] = pack2x16float(vec2<f32>(a.x, a.y));
  packed[g * 2u + 1u] = pack2x16float(vec2<f32>(a.z, stored));
}`,mo=Math.ceil(As/kt+Ps+Math.SQRT2),pt=8,yo=.5;function jr(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,o=[];for(let s=0;s<i;s++)o.push(n+s*t-Kt(s*(i*t-e)/(i-1)));return o}function bo(n,e,t){let r=1/0,i=-1/0;const o=s=>{r=Math.min(r,s),i=Math.max(i,s)};for(let s=0;s<n.length;s++){const a=n[s],l=n[(s+1)%n.length];a[0]>=e&&a[0]<=t&&o(a[1]);for(const u of[e,t])(a[0]-u)*(l[0]-u)<0&&o(a[1]+(u-a[0])/(l[0]-a[0])*(l[1]-a[1]))}return r<=i?[r,i]:null}function wo(n,e){const t=Es(n)>0?1:-1,r=n.map((i,o)=>{const s=n[(o+1)%n.length],a=Math.hypot(s[0]-i[0],s[1]-i[1])||1;return[t*(s[1]-i[1])/a,-t*(s[0]-i[0])/a]});return n.map(([i,o],s)=>{const a=r[(s+n.length-1)%n.length],l=r[s],u=e/(1+a[0]*l[0]+a[1]*l[1]);return[i+u*(a[0]+l[0]),o+u*(a[1]+l[1])]})}function xo(n,e){const t=e[0]-n[0],r=e[1]-n[1],i=Math.hypot(t,r)||1,o=t/i,s=r/i,a=-s,l=o,u=.5*yo*i,c=[n[0]-o*pt,n[1]-s*pt],g=[e[0]+o*pt,e[1]+s*pt];return[[c[0]+a*u,c[1]+l*u],[g[0]+a*u,g[1]+l*u],[g[0]-a*u,g[1]-l*u],[c[0]-a*u,c[1]-l*u]]}function vo(n,e,t,r,i,o){const s=Ri(e,t,r),{toWind:a,toCity:l}=s,u=n.map(a),c=[[-.5,-.5],[t-.5,-.5],[t-.5,r-.5],[-.5,r-.5]].map(a),g=Fs(wo(u,mo),c);if(g.length<3)throw new Error("the corridor does not touch the city");const d=Math.floor(Math.min(...g.map(w=>w[0]))),h=Math.floor(Math.min(...g.map(w=>w[1]))),f=Math.ceil(Math.max(...g.map(w=>w[0])))-d+1,p=Math.ceil(Math.max(...g.map(w=>w[1])))-h+1,y=[];for(const w of jr(d,f,i,o)){const x=bo(g,w,w+i-1);if(!x)continue;const m=Math.floor(x[0]),b=Math.max(i,Math.ceil(x[1])-m+1);for(const $ of jr(m,b,i,o))y.push([$,w])}return{theta:e,gx:f,gy:p,gridX0:d,gridY0:h,patches:y,toWind:a,toCity:l}}const $o=n=>Math.ceil(n*Math.SQRT2),qr=4*1024**3,Mo=128<<20,_o=2,Hr=6e4,ko=4,Vr=1;function So(n,e,t){let r=1/0,i=-1/0,o=1/0,s=-1/0,a=1/0,l=-1/0;for(const[u,c,g]of n)r=Math.min(r,u-e.gridY0),i=Math.max(i,u-e.gridY0+t),o=Math.min(o,g-e.gridX0),s=Math.max(s,g-e.gridX0+t),a=Math.min(a,c-Me),l=Math.max(l,c-Me+1);return{ry0:Math.max(0,r),ry1:Math.min(e.gy,i),rx0:Math.max(0,o),rx1:Math.min(e.gx,s),rz0:a,rz1:l}}function Bo(n){const e=[];for(let t=Me;t<=St;t++)((t-Me)%n===0||t===St)&&e.push(t);return e}let Io=class{constructor(e,t,r,{batchSize:i,layerStride:o}){if(this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,(at-1)%o!==0)throw new Error(`layer stride ${o} does not divide the ${at-1} layer steps of the band`);this.layerStride=o,this.bufferLimit=Math.min(Mo,e.device.limits.maxStorageBufferBindingSize),this.fno=new lo(e,t,r,i),this.blendPipeline=e.pipeline(ho(this.fno.store)),this.finalizePipeline=e.pipeline(po),this.inputPlan=Vs(t),this.city=null,this.generation=0,this.fieldWorkers=null,this.fieldJobs=new Map,this.fieldJobCount=0,this.valuesRing=new Ai}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.mddf.destroy(),this.city=null,this.stopFieldWorkers(t=>t.cancel())}setCity(e,t=null){var u;const{layers:r,ny:i,nx:o}=e;this.cancel(),(u=this.city)==null||u.mddf.destroy();const s=new Li(this.context,e,$o(this.patch),this.fno.store,this.inputPlan),a=t??Bo(this.layerStride),l=s.gx*s.gy*a.length*s.storedBytesPerCellLayer;if(l>qr){s.destroy(),this.city=null;const c=(l/2**20).toFixed(0),g=qr/2**20;throw new lt(ut.TOO_LARGE,`the city's stored field needs ${c} MiB, above the ${g} MiB budget`)}return this.city={mddf:s,ny:i,nx:o,layerMap:r,predictedLayers:a,ready:null,progress:0,groups:null},this.city.ready=this.scanCity(this.city),this.city.ready.catch(()=>{}),this.city}async scanCity(e){const{mddf:t}=e,r=t.planGroups(e.predictedLayers,this.bufferLimit);t.allocate(r),e.progress=0;for(let i=0;i<r.length;i++){if(t.destroyed)return e;await t.scan(r[i],o=>{e.progress=(i+o)/r.length})}return e.progress=1,t.destroyed||(e.groups=r),e}async predict(e,t,r,i){const o=++this.generation,s=()=>o!==this.generation,{context:a}=this,l=this.city,u=i.polygon??xo(e,t),{overlap:c}=i,g=Math.max(1,Math.round(this.patch*(1-c))),d=vo(u,r,l.nx,l.ny,this.patch,g),h=performance.now(),{mddf:f}=l;if(await l.ready,s()||f.destroyed||(f.upWind&&f.ensureUpTiles(l.groups,r,d.patches,this.patch,()=>{var m;return(m=i.onStage)==null?void 0:m.call(i,"geometry")})&&(await a.device.queue.onSubmittedWorkDone(),a.releaseScratch()),s()))return null;const p=Co(d,this.patch,l.predictedLayers.map(x=>x-Me)),y=await this.runNetwork(l,d,p,r,i,s);if(!y)return null;const w=await this.finish(l,d,p,y,r,s);return w?{...w,milliseconds:performance.now()-h}:null}async runNetwork(e,t,r,i,o,s){var w;const{context:a,patch:l}=this,u=a.storage(r.count*V*4,"predictor.sums"),c=a.upload(r.table,"predictor.rows"),g=[],d=e.predictedLayers,h=new Map(d.map(x=>[x,t.patches.length])),f=Math.max(1,o.sweepEvery||1),p=new Set(d.filter((x,m)=>m%f===0||m===d.length-1)),y=()=>(a.free(u),a.free(c),null);for(const x of e.groups){if(s())return y();(w=o.onStage)==null||w.call(o,"network");const m=[];for(const b of x.layers)for(const[$,v]of t.patches)m.push([$,b,v]);for(let b=0;b<m.length;b+=this.batchSize){const $=m.slice(b,b+this.batchSize),v=new Int32Array($.flat()),M=a.device.createCommandEncoder(),k=e.mddf.assemble(M,v,x,i,l,this.fno.inputBuffer),S=this.fno.encode(M,$.length);if(this.encodeBlend(M,S,k,u,c,$.length,So($,t,l),t),a.device.queue.submit([M.finish()]),g.push(a.device.queue.onSubmittedWorkDone()),g.length>_o&&await g.shift(),a.free(k),a.releaseScratch(),o.onLayer)for(const[,I]of $)h.set(I,h.get(I)-1),h.get(I)===0&&p.has(I)&&this.readSweptLayer(u,I,r,t,o,s);if(s())return y()}}return await Promise.all(g),a.free(c),u}encodeBlend(e,t,r,i,o,s,a,l){const{context:u,patch:c}=this,{gy:g}=l,{ry0:d,ry1:h,rx0:f,rx1:p,rz0:y,rz1:w}=a;if(!(h>d&&p>f))return;const x=e.beginComputePass();u.dispatch(x,this.blendPipeline,[t,r,i,o,u.uniform([["u",s],["u",c],["u",this.metadata.model.output_channels],["u",c],["u",g],["u",Me],["u",0],["u",0],["u",d],["u",y],["u",f],["u",h-d],["u",w-y],["u",p-f],["i",l.gridY0],["i",l.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(h-d)*(w-y)*(p-f)),x.end()}readSweptLayer(e,t,r,i,o,s){const a=Bt(i.gy);this.readLayer(e,r.table[a.slots+t-Me],r.table,i).then(l=>{s()||o.onLayer(t,l,i,this.metadata.target)}).catch(()=>{})}async readLayer(e,t,r,{gx:i,gy:o}){const s=Bt(o),a=V*4,l=(u,c)=>{for(let g=0;g<o;g++){const d=r[s.rowLen+g];d&&u.copyBufferToBuffer(e,(r[g]+t*d)*a,c,(g*i+r[s.rowX0+g])*a,d*a)}};return this.context.readBack(o*i*a,l,"layer staging",u=>new Float32Array(u.slice(0)))}async finish(e,t,r,i,o,s){const{context:a}=this,{gx:l,gy:u}=t,c=at,g=l*u*c,{predicted:d}=r,h=this.metadata.target,f=a.storage(Math.max(8,r.count*V*2),"predictor.packed"),p=a.device.createCommandEncoder(),y=p.beginComputePass();a.dispatch(y,this.finalizePipeline,[i,f,a.uniform([["u",r.count],["f",h.center[0]],["f",h.center[1]],["f",h.center[2]],["f",h.scale[0]],["f",h.scale[1]],["f",h.scale[2]],["f",0]])],r.count),y.end(),a.device.queue.submit([p.finish()]),await a.device.queue.onSubmittedWorkDone(),a.free(i);const w=Ts(),x=await a.readHalf(f,r.count*V,w);if(a.free(f),a.releaseScratch(),s())return null;let m;w?m=new Float32Array(this.valuesRing.next(g*V*4),0,g*V):m=new Float32Array(g*V);const b={half:x,values:m,gy:u,gz:c,gx:l,gridX0:t.gridX0,gridY0:t.gridY0,theta:o,nx:e.nx,ny:e.ny,layerMap:e.layerMap,predicted:d,firstLayer:Me,interpolate:this.layerStride>1,compactTable:r.table},$=w?await this.postInWorkers(b,u):await Po(b,u);if(s())return null;let v=0;for(const M of $)M.maxSpeed2>v&&(v=M.maxSpeed2);return{maxSpeed2:v,layout:t,gx:l,gy:u,gz:c,firstLayer:Me,layerStride:this.layerStride,values:m,valuesPerCell:V}}stopFieldWorkers(e){for(const t of this.fieldWorkers??[])t.terminate();this.fieldWorkers=null;for(const t of[...this.fieldJobs.values()])e(t)}failFieldWorkers(e){this.stopFieldWorkers(t=>t.answer({error:e}))}startFieldWorkers(){const e=Math.max(1,Math.min(ko,Math.floor(Rs()/3)));return Array.from({length:e},(t,r)=>{const i=new Worker(new URL("/cityffdv2-demo/assets/field_worker-CNcnW6Nn.js",import.meta.url),{type:"module"});return i.onmessage=({data:o})=>{var s;return(s=this.fieldJobs.get(`${o.id}:${r}`))==null?void 0:s.answer(o)},i.onerror=o=>{o.preventDefault(),this.failFieldWorkers(`field worker failed: ${o.message||"it did not load"}`)},i})}postInWorkers(e,t){this.fieldWorkers??(this.fieldWorkers=this.startFieldWorkers());const r=++this.fieldJobCount,i=this.fieldWorkers,o=i.length,s={...e,half:e.half.buffer,halfLength:e.half.length,values:e.values.buffer,valuesLength:e.values.length};return Promise.all(i.map((a,l)=>new Promise((u,c)=>{const g=`${r}:${l}`,d=()=>{clearTimeout(h),this.fieldJobs.delete(g)},h=setTimeout(()=>{this.failFieldWorkers(`field worker did not answer in ${Hr/1e3} s`)},Hr);this.fieldJobs.set(g,{answer:f=>{d(),f.error?c(new Error(f.error)):u(f)},cancel:()=>{d(),u(null)}}),a.postMessage({id:r,p:s,yLo:Math.floor(l*t/o),yHi:Math.floor((l+1)*t/o)})})))}};function Co(n,e,t){const{gx:r,gy:i}=n,o=new Int32Array(i).fill(r),s=new Int32Array(i).fill(0);for(const[c,g]of n.patches){const d=Math.max(0,c-n.gridY0),h=Math.min(i,c-n.gridY0+e),f=Math.max(0,g-n.gridX0),p=Math.min(r,g-n.gridX0+e);for(let y=d;y<h;y++)f<o[y]&&(o[y]=f),p>s[y]&&(s[y]=p)}const a=Bt(i),l=new Uint32Array(a.slots+at).fill(4294967295,a.slots);let u=0;for(let c=0;c<i;c++){const g=Math.max(0,s[c]-o[c]);l[c]=u,l[a.rowX0+c]=g?o[c]:0,l[a.rowLen+c]=g,u+=g*t.length}return l[i]=u,t.forEach((c,g)=>{l[a.slots+c]=g}),{table:l,count:u,predicted:t}}async function Po(n,e){const t=[];let r=performance.now();for(let i=0;i<e;i+=Vr)t.push(go(n,i,Math.min(e,i+Vr))),performance.now()-r>Bi&&(await Pi(),r=performance.now());return t}const Ao=16,To=4;function Ro(){let n=null,e=null,t=[];async function r(l){if(n)return;const u="/cityffdv2-demo/flume/model-v2/",[c,g]=await Promise.all(["metadata.json","weights.bin"].map(async d=>{const h=await fetch(u+d,{signal:l});if(!h.ok)throw new Error("Could not load model v2 "+d+" (HTTP "+h.status+").");return d.endsWith(".bin")?h.arrayBuffer():h.json()}));n=await Is.create(),e=c,t=[0,1].map(()=>({predictor:new Io(n,e,g,{batchSize:Ao,layerStride:1}),grid:null,key:""}))}async function i(l,u,c,g){const d=c.join(",");(u!==l.grid||d!==l.key)&&(l.predictor.setCity({layers:u.layers,nx:u.nx,ny:u.ny},c),l.grid=u,l.key=d);const{nx:h,ny:f}=u,p=[[-.5,-.5],[h-.5,-.5],[h-.5,f-.5],[-.5,f-.5]];return l.predictor.predict(null,null,g,{polygon:p,overlap:e.inference.overlap})}function o(l,u,c){const g=u.gx*u.gy,d=new Float32Array(g*5),h=new Uint8Array(g),f=c-u.firstLayer;for(let y=0;y<u.gy;y++)for(let w=0;w<u.gx;w++){const x=((y*u.gz+f)*u.gx+w)*To,m=y*u.gx+w;d[m*5]=u.values[x],d[m*5+1]=u.values[x+1],d[m*5+2]=u.values[x+2],h[m]=u.values[x+3]>0?0:2}const p={width:u.gx,height:u.gy,originX:u.layout.gridX0,values:d,solid:h};pr(l,l.plan.indexOf(c),p)}async function s(l,u,c,{signal:g,onFirstWave:d,onMoreLayers:h}={}){await r(g),Cs(u[0],u.at(-1));const f=gr(u).slice(0,Rt),p=u.filter(b=>f.includes(b)),y=u.filter(b=>!f.includes(b)),w=await i(t[0],l,p,c);if(!w)return null;const x=hr({width:w.gx,height:w.gy,originX:w.layout.gridX0,originY:w.layout.gridY0,theta:c},u,!1);for(const b of p)o(x,w,b);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(d==null||d({volume:x,referenceSpeed:m}),y.length){const b=await i(t[1],l,y,c);if(!b)return null;for(const $ of y)o(x,b,$);h==null||h()}return x}async function a(l,u,c){await r(c);const{predictor:g}=t[0],d=g.inputPlan.stored,h=Math.ceil(g.patch*Math.SQRT2),f=new Li(n,l,h,g.fno.store,g.inputPlan),p=f.gx*f.gy*d.length*4;let y=null;f.packGroup=async()=>{y=await n.readBack(p,(m,b)=>m.copyBufferToBuffer(f.sumsBuffer,0,b,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(b=>b/re))};try{const m=f.planGroups([u],g.bufferLimit);f.allocate(m),await f.scan(m[0],()=>{})}finally{f.destroy()}if(!y)throw new Error("Model v2 MDDF could not be read.");const w=d.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:y,ny:f.gy,nx:f.gx,margin:h,layerIndex:u,channels:w,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:s,readMddf:a,cancel(){for(const l of t)l.predictor.cancel()},destroy(){for(const l of t)l.predictor.destroy();n==null||n.device.destroy(),t=[],n=null}}}const qe=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class He extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const xe=()=>new He(qe.MODEL,"the model data does not match this page"),W=256;class vr{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new He(qe.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(o=>setTimeout(o,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new He(qe.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new vr(i,r)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const r=Math.max(4,Math.ceil(e/4)*4),i=this.device.createBuffer({size:r,usage:t});return i.tracked=!0,i}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),o=new Int32Array(r),s=new Float32Array(r);e.forEach(([l,u],c)=>{l==="u"?i[c]=u:l==="i"?o[c]=u:s[c]=u});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,r),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,o=W){this.dispatchGroups(e,t,r,...this.workgroups(i,o))}workgroups(e,t=W){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((o,s)=>({binding:s,resource:{buffer:o}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r){const i=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),o=this.device.createCommandEncoder();t(o,i),this.device.queue.submit([o.finish()]);try{await i.mapAsync(GPUMapMode.READ);const s=await r(i.getMappedRange());return i.unmap(),s}finally{this.free(i)}}}const Jt=4,tt=1.5;function Oi(n,e,t){const r=(e-1)/2,i=(t-1)/2,o=Math.cos(n),s=Math.sin(n);return{theta:n,cX:r,cY:i,cos:o,sin:s,toWind:([a,l])=>{const u=a-r,c=l-i;return[r+u*o+c*s,i-u*s+c*o]},toCity:([a,l])=>{const u=a-r,c=l-i;return[r+u*o-c*s,i+u*s+c*o]}}}const le=64,ie=180,Ui=1600,Eo=640,Ce=8,H=32,Te=n=>n.toFixed(6),Pe=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Fo=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,Lo=()=>`
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
@compute @workgroup_size(${le})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${le}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${Te(tt)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${Te(tt)}, has1);
  let cutoff = ${Te(Ui)};
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
}`;function Do(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${le})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${le}u;
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
}`}const De=64,de=8,We=De/de,ge=We*We,Qt=de*de,Kr=Math.log2(De),Zr=Math.log2(de),mt=de-1,$r="15u",er="4u",Ni="0xfffu",tr="2048",zo="4095",Mr="16u",Jr=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(Pe).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${Te(ie)} / STEPS[c]));
}
@compute @workgroup_size(${le})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${le}u;
  if (g >= u.nTiles * ${ge}u) { return; }
  let t = g / ${ge}u;
  let b = g % ${ge}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${ge}u + b];
  let w = h & ${$r};
  if (w == 0u) { return; }
  let base = i32((h >> ${er}) & ${Ni}) - ${tr};
  var wi = field[t] + (h >> ${Mr});
  let x0 = tx * ${De}u + (b % ${We}u) * ${de}u;
  let y0 = ty * ${De}u + (b / ${We}u) * ${de}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${Qt}u; j++) {
    let x = x0 + j % ${de}u; let y = y0 + j / ${de}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${De}u + (b % ${We}u) * ${de}u;
  let y0 = ty * ${De}u + (b / ${We}u) * ${de}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${Qt}u; j++) {
    let x = x0 + j % ${de}u; let y = y0 + j / ${de}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ge}u + b] = w | (u32(clamp(mn + ${tr}, 0, ${zo})) << ${er});`}
}`,Oo=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${le})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${le}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${ge}u; b++) {
    let h = headers[t * ${ge}u + b];
    headers[t * ${ge}u + b] = h | (local << ${Mr});
    local += ${Qt/32}u * (h & ${$r});
  }
  tileWords[t] = local;
}`,Uo=n=>{const e=`array<f32, ${Ce}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Fo}
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
@compute @workgroup_size(${le})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${le}u;
  let groupsPerPixel = (u.layerCount + ${Ce-1}u) / ${Ce}u;
  let cells = ${H*H}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${H} + i32(cell % ${H}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${H} + i32(cell / ${H}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${Ce}u;
  let count = min(${Ce}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${Ce}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${Te(tt)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${Te(Jt)};
    let gyr = u.sinU / ${Te(Jt)};
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
    let cutoff = ${Te(Ui)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${Ce}>;
    for (var k = 0u; k < ${Ce}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${Eo}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${Ce}u; k++) {
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
}`},No=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:o}=e,s=[["field","array<u32>"]];o&&s.push(["height","array<f32>"]),s.push(["origins","array<i32>"],["slots","array<i32>"]),i&&s.push(["up","array<u32>"],["upTable","array<i32>"]);const a=s.map(([c,g],d)=>`@group(0) @binding(${d}) var<storage, read> ${c}: ${g};`);a.push(`@group(0) @binding(${s.length}) var<storage, read_write> out: array<${n}>;`),a.push(`@group(0) @binding(${s.length+1}) var<uniform> u: P;`);const l=(c,g)=>`(${c} - ${Pe(g.center)}) / ${Pe(g.scale)}`,u=e.inputs.map((c,g)=>{let d;if(c.source==="r1")if(c.part==="dc")d=`value = ${l(`sampleField(ry, rx, slot, ${e.storedIndex(c.signal,"dc",0)}u)`,c)};`;else{const h=e.storedIndex(c.signal,"re",c.mode),f=e.storedIndex(c.signal,"im",c.mode);d=`let re = sampleField(ry, rx, slot, ${h}u);
      let im = sampleField(ry, rx, slot, ${f}u);
      let angle = ${Pe(c.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${l(c.part==="im"?"(re * s + im * c)":"(re * c - im * s)",c)};`}else if(c.source==="geo"){const h=c.index===0?"h / 100.0":"asinh((h - z) / 10.0)";d=`let h = roofHeight(iy, ix);
      value = ${l(`f16round(${h})`,c)};`}else c.source==="up"?d=`value = ${l(`upAtWind(sy, sx, slot, ${e.up.indexOf(c.index)}u)`,c)};`:c.source==="solid"?d=`let roofLayer = round(roofHeight(iy, ix) / ${Te(tt)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:c.axis==="y"?d=`value = (sy - u.centreY) / ${Pe(c.scale)};`:c.axis==="z"?d=`value = (f32(layer) - ${Pe(c.center)}) / ${Pe(c.scale)};`:d=`value = (sx - ${Pe(c.center)}) / ${Pe(c.scale)};`;return`    case ${g}u: {
      ${d}
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
${a.join(`
`)}
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(Pe).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${Kr}u)) * ${t.tx}u + (x >> ${Kr}u);
  let h = field[u.packTiles + t * ${ge}u + ((y >> ${Zr}u) & ${mt}u) * ${We}u + ((x >> ${Zr}u) & ${mt}u)];
  let w = h & ${$r};
  var q = i32((h >> ${er}) & ${Ni}) - ${tr};
  if (w > 0u) {
    let bit = (((y & ${mt}u) * ${de}u) + (x & ${mt}u)) * w;
    let word = field[t] + (h >> ${Mr}) + (bit >> 5u);
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
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(H)}u) >= u.upTW || u32(ty >> ${Math.log2(H)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(H)}u) * u.upTW + u32(tx >> ${Math.log2(H)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${H*H}u + u32(ty & ${H-1}) * ${H}u + u32(tx & ${H-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${o?`fn roofHeight(iy: f32, ix: f32) -> f32 {
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
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
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
  let z = (f32(layer) + 0.5) * ${Te(tt)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${u.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},Xo=4,Yo=3,Wo=.016,Go=256;class Xi{constructor(e,{layers:t,ny:r,nx:i},o,s,a){this.context=e,this.inputPlan=a,this.ny=r,this.nx=i,this.margin=o,this.gy=r+2*o,this.gx=i+2*o;const l=new Float32Array(this.gy*this.gx);for(let f=0;f<r;f++)for(let p=0;p<i;p++)l[(f+o)*this.gx+p+o]=t[f*i+p]*tt;this.heightBuffer=e.upload(l);const u=new Float32Array(ie),c=new Float32Array(ie);for(let f=0;f<ie;f++)u[f]=Math.cos(2*Math.PI*f/ie),c[f]=Math.sin(2*Math.PI*f/ie);this.cosT=u,this.sinT=c,this.scanPipeline=e.pipeline(Lo()),this.accumulatePipeline=e.pipeline(Do(a.stored)),this.upWind=a.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(Uo(a.up)));const g=a.stored.map(f=>2*Wo*f.scale),d=Math.ceil(this.gx/De),h=Math.ceil(this.gy/De);this.packed={steps:g,tx:d,ty:h},this.packHeaderPipeline=e.pipeline(Jr(a.stored,g,d,h,!1)),this.packPayloadPipeline=e.pipeline(Jr(a.stored,g,d,h,!0)),this.packTilePipeline=e.pipeline(Oo()),this.assemblePipeline=e.pipeline(No(s,a,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let o=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(o=Math.min(o,Xo),i>t)throw new He(qe.TOO_LARGE,"the city is too large for this graphics card");const s=[];for(let a=0;a<e.length;a+=o){const l=e.slice(a,a+o),u=new Int32Array(Go).fill(-1);l.forEach((c,g)=>{u[c]=g}),s.push({layers:l,slots:u,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return s}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots),r.layerBuffer=t.upload(new Uint32Array(r.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(ie*r),o=new ArrayBuffer(ie*32),s=new Uint32Array(o),a=new Int32Array(o),l=new Float32Array(o),u=new Float32Array(ie*4);let c=0;for(let g=0;g<ie;g++){const d=this.cosT[g],h=this.sinT[g],f=Math.abs(d)>=Math.abs(h),p=f?d:h,y=f?h:d,w=Math.abs(y/p),x=f?e:t,m=f?t:e;for(let v=0;v<x;v++)i[g*r+v]=Math.round(w*v);const b=i[g*r+x-1],$=m+b;c=Math.max(c,$),s[8*g]=f?1:0,a[8*g+1]=p>=0?1:-1,a[8*g+2]=y>=0?1:-1,a[8*g+3]=b,s[8*g+4]=$,s[8*g+5]=g*r,l[8*g+6]=Jt*Math.sqrt(1+w*w),u.set([d,h,Math.cos(4*Math.PI*g/ie),Math.sin(4*Math.PI*g/ie)],4*g)}return this.offsetBuffer=this.context.upload(i),this.tableBuffer=this.context.upload(s),this.trigBuffer=this.context.upload(u),this.scanInfo={lineMax:c},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:r,gy:i}=this,{lineMax:o}=this.scanTables(),s=r*i,a=this.inputPlan.stored.length,l=e.layers.length,u=Math.ceil(l/2),c=Math.max(1,Math.min(ie,Math.floor(this.scanRawBytes/(u*s*4)))),g=c*u*s*4,d=l*s*a*4;(!this.scanRaw||this.scanRaw.size<g)&&(t.free(this.scanRaw),this.scanRaw=t.storage(g)),(!this.sumsBuffer||this.sumsBuffer.size<d)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(d));const h=t.device.createCommandEncoder();h.clearBuffer(this.sumsBuffer,0,l*s*a*4),t.device.queue.submit([h.finish()]);const f=[];for(let p=0;p<ie;p+=c){if(this.destroyed)return;const y=Math.min(c,ie-p),w=t.device.createCommandEncoder(),x=w.beginComputePass(),m=t.uniform([["u",r],["u",i],["u",s],["u",0],["u",l],["u",u],["u",p],["u",y],["u",o],["u",0],["u",0],["u",0]]);t.dispatch(x,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],o*u*y,le);const b=t.uniform([["u",s],["u",l],["u",u],["u",p],["u",y],["u",0],["u",0],["u",0]]);t.dispatch(x,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,b],s*l,le),x.end(),t.device.queue.submit([w.finish()]),f.push(t.device.queue.onSubmittedWorkDone()),f.length>=Yo&&await f.shift()}this.destroyed||(await this.packGroup(e,l,s),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:o,gy:s}=this,{tx:a,ty:l}=this.packed,u=t*this.inputPlan.stored.length*a*l,c=i.storage(u*ge*4),g=i.storage(u*4),d=i.uniform([["u",o],["u",s],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]),h=i.uniform([["u",u],["u",0],["u",0],["u",0]]),f=()=>{i.free(c),i.free(g)},p=(v,M)=>{const k=v.beginComputePass();i.dispatch(k,this.packHeaderPipeline,[this.sumsBuffer,c,d],u*ge,le),i.dispatch(k,this.packTilePipeline,[c,g,h],u,le),k.end(),v.copyBufferToBuffer(g,0,M,0,u*4)};let y;try{y=await i.readBack(u*4,p,v=>this.destroyed?null:new Uint32Array(v.slice(0)))}catch(v){throw f(),v}if(!y){f();return}const w=new Uint32Array(u);let x=u+u*ge;for(let v=0;v<u;v++)w[v]=x,x+=y[v];i.free(e.field),e.field=i.storage(Math.max(4,x*4)),e.packTiles=u,i.write(e.field,w);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(c,0,e.field,u*4,u*ge*4);const b=m.beginComputePass(),$=i.uniform([["u",o],["u",s],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]);i.dispatch(b,this.packPayloadPipeline,[this.sumsBuffer,e.field,$],u*ge,le),b.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),f()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*ie,i=Math.round(r)%ie;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=Oi(e,this.nx,this.ny);let i=1/0,o=-1/0,s=1/0,a=-1/0;for(const d of[-.5,this.nx-.5])for(const h of[-.5,this.ny-.5]){const[f,p]=r.toWind([d,h]);i=Math.min(i,f),o=Math.max(o,f),s=Math.min(s,p),a=Math.max(a,p)}const l=Math.floor((i-t)/H)*H,u=Math.floor((s-t)/H)*H,c=Math.ceil((o+t+1-l)/H),g=Math.ceil((a+t+1-u)/H);return{theta:e,x0:l,y0:u,tw:c,th:g,table:new Int32Array(c*g).fill(-1),count:0}}ensureUpTiles(e,t,r,i){const{context:o}=this;let s=this.upGrid;(!s||s.theta!==t||s.count>0&&e.some(m=>m.upGrid!==s))&&(s=this.upGrid=this.upTileGrid(t,i));const a=[];for(const[m,b]of r){const $=Math.floor((b-s.x0)/H),v=Math.floor((b+i-1-s.x0)/H),M=Math.floor((m-s.y0)/H),k=Math.floor((m+i-1-s.y0)/H);if($<0||M<0||v>=s.tw||k>=s.th)throw new Error("internal layout error");for(let S=M;S<=k;S++)for(let I=$;I<=v;I++){const T=S*s.tw+I;s.table[T]<0&&(s.table[T]=s.count+a.length/3,a.push(I,S,s.table[T]))}}const l=a.length/3;if(!l)return 0;const u=s.count,c=u+l,g=this.inputPlan.up.length,d=H*H,h=o.device.createCommandEncoder(),f=[];for(const m of e){const b=m.layers.length*d*g*2;if(m.upGrid!==s&&(m.upCount=0),!m.upTiles||m.upCapacity<c){const $=Math.min(s.tw*s.th,Math.max(c,Math.ceil(m.upCapacity*1.5))),v=o.storage($*b);m.upTiles&&m.upCount&&h.copyBufferToBuffer(m.upTiles,0,v,0,m.upCount*b),m.upTiles&&f.push(m.upTiles),m.upTiles=v,m.upCapacity=$}m.upGrid=s,h.clearBuffer(m.upTiles,u*b,l*b),m.upCount=c}const p=o.upload(new Int32Array(a)),[y,w]=this.upwindDirection(t),x=h.beginComputePass();for(const m of e){const b=[this.heightBuffer,m.layerBuffer,m.upTiles,p];o.dispatch(x,this.alongPipeline,[...b,o.uniform([["u",this.gx],["u",this.gy],["u",l],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",s.x0],["i",s.y0],["u",0],["u",0],["f",y],["f",w],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],l*d*Math.ceil(m.layers.length/Ce),le)}x.end(),(!this.upTableBuffer||this.upTableBuffer.size!==s.table.byteLength)&&(o.free(this.upTableBuffer),this.upTableBuffer=o.storage(s.table.byteLength)),o.write(this.upTableBuffer,s.table),o.device.queue.submit([h.finish()]);for(const m of f)o.free(m);return o.free(p),s.count=c,l}assemble(e,t,r,i,o,s){var y,w,x,m;const{context:a,inputPlan:l,gx:u,gy:c}=this,g=t.length/3,d=a.upload(t),h=a.uniform([["u",g],["u",l.inputs.length],["u",o],["u",o],["u",u],["u",c],["u",0],["u",0],["u",u],["u",c],["u",u*c],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((y=this.upGrid)==null?void 0:y.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((x=this.upGrid)==null?void 0:x.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),f=[r.field];if(l.usesHeight&&f.push(this.heightBuffer),f.push(d,r.slotBuffer),l.up.length){if(r.upGrid!==this.upGrid)throw new Error("internal layout error");f.push(r.upTiles,this.upTableBuffer)}f.push(s,h);const p=e.beginComputePass();return a.dispatch(p,this.assemblePipeline,f,g*l.inputs.length*o*o),p.end(),d}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function jo(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw xe();const t=[],r=(l,u,c)=>t.findIndex(g=>g.key===`${l}:${u}:${c}`),i=(l,u,c)=>{r(l.signal,u,c)>=0||t.push({key:`${l.signal}:${u}:${c}`,signal:l.signal,part:u,mode:c,scale:l.scale})},o=[];for(const l of e){if(l.source==="r1")l.part==="dc"?i(l,"dc",0):(i(l,"re",l.mode),i(l,"im",l.mode));else if(l.source==="up")o.includes(l.index)||o.push(l.index);else if(!["geo","solid","coord"].includes(l.source))throw xe();if(l.source==="geo"&&![0,1].includes(l.index)||l.source==="up"&&!(l.index>=0&&l.index<4))throw xe()}for(const l of t)if(l.mode>2)throw xe();const s=[...new Set(t.map(l=>l.signal))].sort();if(s.length!==1||s[0]!==0)throw xe();const a=e.some(l=>l.source==="solid"||l.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:o,usesHeight:a}}function rr(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let Oe=null;function qo(){if(Oe)return Oe;Oe=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?Oe[n]=e*r*2**-24:t===31?Oe[n]=r?NaN:e*(1/0):Oe[n]=e*(1+r/1024)*2**(t-15)}return Oe}function Ho(n){const e=new Float32Array(n.length),t=qo();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function Vo(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const o=r[0],s=o>>>16&32768,a=o>>>23&255;let l=o&8388607;if(a===255){e[i]=s|31744|(l?1:0);continue}const u=a-127+15;if(u>=31){e[i]=s|31744;continue}if(u<=0){if(u<-10){e[i]=s;continue}l|=8388608;const g=14-u;let d=l>>>g;l>>>g-1&1&&(d+=1),e[i]=s|d;continue}let c=u<<10|l>>>13;l&4096&&(c+=1),e[i]=s|c}return e}const _r=`
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
`,Ko=`
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
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
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
}`;function Qr(n,e,t){const{enable:r,load:i,save:o}=it(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${W}>;
@compute @workgroup_size(${W})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${W}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${W/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${W}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${W/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${W}u) {
    Y[base + i] = ${o("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const ir=32,ei=1e-5,xt=16;function it(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function Zo(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:o,save:s}=it(e);return`${i}${_r}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${xt}u;
var<workgroup> w: array<f32, ${xt*n.cinMax}>;
@compute @workgroup_size(${W})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/W}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/W}u;
  let p = (wg % ${r/W}u) * ${W}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${W}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${o("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${xt}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${o("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${o("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${s("v")};
  }
}`}function Jo(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:o,save:s}=it(e);return`${i}${_r}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${o("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${o("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${s("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function Qo(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:o,load:s}=it(e);return`${o}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${i}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${s("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function ea(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
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
}`}function ta(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
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
}`}function ra(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:o,save:s}=it(e);return`${o}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
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
  Y[g] = ${s("acc * "+1/ir)};
}`}function ia(n){const{store:e}=n,{enable:t,load:r,save:i}=it(e);return`${t}${_r}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function na(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:Zo(n),gate:Jo(n),instanceNorm:Qr(e,r,ei),instanceNormScaled:Qr(e,r,ei/(ir*ir)),forwardColumns:Qo(n),rowMix:ea(n),spectralMix:ta(n),inverseColumns:ra(n),residual:ia(n)}}function sa(n,e,t){const r=2*e,i=[];for(let h=0;h<e;h++)i.push(h);for(let h=n-e;h<n;h++)i.push(h);const o=new Float32Array(n*t),s=new Float32Array(n*t);for(let h=0;h<n;h++)for(let f=0;f<t;f++){const p=2*Math.PI*h*f/n;o[h*t+f]=Math.cos(p),s[h*t+f]=-Math.sin(p)}const a=new Float32Array(r*n),l=new Float32Array(r*n);for(let h=0;h<r;h++)for(let f=0;f<n;f++){const p=2*Math.PI*i[h]*f/n;a[h*n+f]=Math.cos(p),l[h*n+f]=-Math.sin(p)}const u=new Float32Array(n*r),c=new Float32Array(n*r);for(let h=0;h<n;h++)for(let f=0;f<r;f++){const p=2*Math.PI*i[f]*h/n;u[h*r+f]=Math.cos(p)/n,c[h*r+f]=Math.sin(p)/n}const g=new Float32Array(t*n),d=new Float32Array(t*n);for(let h=0;h<t;h++){const f=(h===0?1:2)/n;for(let p=0;p<n;p++){const y=2*Math.PI*h*p/n;g[h*n+p]=f*Math.cos(y),d[h*n+p]=-f*Math.sin(y)}}return{forwardCos:o,forwardSin:s,rowRe:a,rowIm:l,inverseRowRe:u,inverseRowIm:c,inverseColCos:g,inverseColSin:d}}function oa(n,e,t){const r=n.tensors[t];if(!r)throw xe();return Ho(new Uint16Array(e,r.offset,r.count))}class aa{constructor(e,t,r,i){const o=t.model;if(this.context=e,this.metadata=t,this.width=o.width,this.depth=o.layers,this.inputChannels=o.input_channels,this.outputChannels=o.output_channels,this.patch=t.inference.patch[0],this.modes1=o.modes[0],this.modes2=o.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%W)throw xe();const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[u,c]of Object.entries(na(s)))this.pipelines[u]=e.pipeline(c);this.contractPipeline=e.pipeline(Ko);const a=u=>oa(t,r,u);this.tables={};for(const[u,c]of Object.entries(sa(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(c);this.weights={};const l=(u,c)=>{const g=a(c);this.weights[u]=this.store==="f16"?e.upload(Vo(g)):e.upload(g)};l("p1w","a.m1.weight"),l("p1b","a.m1.bias"),l("p2w","a.m2.weight"),l("p2b","a.m2.bias"),l("q1w","b.m1.weight"),l("q1b","b.m1.bias"),l("q2w","b.m2.weight"),l("q2b","b.m2.bias");for(let u=0;u<this.depth;u++)l(`m1w${u}`,`c.${u}.m1.weight`),l(`m1b${u}`,`c.${u}.m1.bias`),l(`m2w${u}`,`c.${u}.m2.weight`),l(`m2b${u}`,`c.${u}.m2.bias`),l(`lw${u}`,`d.${u}.weight`),l(`lb${u}`,`d.${u}.bias`);this.buildSpectralWeights(a),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.factored;let o=i.core_shape.slice(),s=t.upload(e(`${i.core}.re`)),a=t.upload(e(`${i.core}.im`));for(const u of i.factors){const[c,g]=u.shape;if(o[u.mode]!==g)throw xe();const d=o.slice();d[u.mode]=c;const h=d.reduce((v,M)=>v*M,1),f=d.slice(u.mode+1).reduce((v,M)=>v*M,1),p=t.storage(h*4),y=t.storage(h*4),w=t.upload(e(`${u.name}.re`)),x=t.upload(e(`${u.name}.im`)),m=t.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",u.mode],["u",c],["u",g],["u",f],["u",0],["u",h],["u",0]]),b=t.device.createCommandEncoder(),$=b.beginComputePass();t.dispatch($,this.contractPipeline,[s,a,w,x,p,y,m],h),$.end(),t.device.queue.submit([b.finish()]),t.free(s),t.free(a),t.free(w),t.free(x),s=p,a=y,o=d}t.releaseScratch();const l=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(o.join()!==l.join())throw xe();this.spectralRe=s,this.spectralIm=a}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,o=2*this.modes1,s=d=>t.storage(e*d*r*this.elementBytes),a=d=>t.storage(e*i*d*4),l=s(Math.max(4*i,this.inputChannels,this.outputChannels)),u=s(2*i),c=a(this.patch*this.modes2),g=a(this.patch*this.modes2);this.buffers={x:s(i),input:l,t2:l,gates:l,spectral:l,output:l,wide:u,t1:u,hidden:u,local:u,xRe:c,xIm:g,yRe:a(o*this.modes2),yIm:a(o*this.modes2),zRe:a(o*this.modes2),zIm:a(o*this.modes2),wRe:c,wIm:g}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/xt)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:o}=this,s=this.width,a=this.patch*this.patch,l=2*this.modes1,u=[],c=(d,h,f,p)=>{u.push(t.prepared(d,[...h,t.keptUniform(f)],t.workgroups(p)))},g=(d,h,f=i.instanceNorm)=>{u.push(t.prepared(f,[d,h],[e*s]))};c(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*s],["u",1]],this.convThreads(e,2*s)),c(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*s],["u",s],["u",0]],this.convThreads(e,s));for(let d=0;d<this.depth;d++)g(r.x,r.t1),c(i.forwardColumns,[r.t1,o.forwardCos,o.forwardSin,r.xRe,r.xIm],[["u",e],["u",s],["u",0],["u",0]],e*s*this.patch*this.modes2),c(i.rowMix,[r.xRe,r.xIm,o.rowRe,o.rowIm,r.yRe,r.yIm],[["u",e],["u",s],["u",l],["u",this.patch]],e*s*l*this.modes2),c(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",s],["u",2*d],["u",0]],e*s*l*this.modes2),c(i.rowMix,[r.zRe,r.zIm,o.inverseRowRe,o.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",s],["u",this.patch],["u",l]],e*s*this.patch*this.modes2),c(i.inverseColumns,[r.wRe,r.wIm,o.inverseColCos,o.inverseColSin,r.t2],[["u",e],["u",s],["u",0],["u",0]],e*s*a),g(r.t2,r.t1,i.instanceNormScaled),c(i.conv1x1,[r.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],r.gates],[["u",e],["u",s],["u",4*s],["u",0]],this.convThreads(e,4*s)),c(i.gate,[r.gates,r.hidden],[["u",e],["u",2*s],["u",0],["u",0]],e*2*s*a),c(i.conv1x1,[r.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],r.spectral],[["u",e],["u",2*s],["u",s],["u",0]],this.convThreads(e,s)),c(i.conv1x1,[r.x,this.weights[`lw${d}`],this.weights[`lb${d}`],r.local],[["u",e],["u",s],["u",s],["u",0]],this.convThreads(e,s)),c(i.residual,[r.spectral,r.local,r.x],[["u",e*s*a],["u",d<this.depth-1?1:0],["u",0],["u",0]],e*s*a);return c(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",s],["u",2*s],["u",1]],this.convThreads(e,2*s)),c(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*s],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),u}}const ua=(n,e)=>`${n==="f16"?`enable f16;
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
@compute @workgroup_size(${W})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${W}u;
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
}`;function ti(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,o=[];for(let s=0;s<i;s++)o.push(n+s*t-rr(s*(i*t-e)/(i-1)));return o}function la(n,e,t){let r=1/0,i=-1/0;const o=s=>{r=Math.min(r,s),i=Math.max(i,s)};for(let s=0;s<n.length;s++){const a=n[s],l=n[(s+1)%n.length];a[0]>=e&&a[0]<=t&&o(a[1]);for(const u of[e,t])(a[0]-u)*(l[0]-u)<0&&o(a[1]+(u-a[0])/(l[0]-a[0])*(l[1]-a[1]))}return r<=i?[r,i]:null}const ca=(n,e)=>Math.max(1,Math.round(n*(1-e)));function Yi(n,e,t,r,i){const o=Oi(n,e,t),s=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(o.toWind),a=Math.floor(Math.min(...s.map(d=>d[0]))),l=Math.floor(Math.min(...s.map(d=>d[1]))),u=Math.ceil(Math.max(...s.map(d=>d[0])))-a+1,c=Math.ceil(Math.max(...s.map(d=>d[1])))-l+1,g=[];for(const d of ti(a,u,r,i)){const h=la(s,d,d+r-1);if(!h)continue;const f=Math.floor(h[0]),p=Math.max(r,Math.ceil(h[1])-f+1);for(const y of ti(f,p,r,i))g.push([y,d])}return{theta:n,gx:u,gy:c,gridX0:a,gridY0:l,patches:g,frame:o}}const da=8,Wi=new MessageChannel,Gi=[];Wi.port1.onmessage=()=>{var n;return(n=Gi.shift())==null?void 0:n()};const fa=()=>new Promise(n=>{Gi.push(n),Wi.port2.postMessage(0)}),ga=n=>Math.ceil(n*Math.SQRT2),ha=128<<20,pa=2,nt=1e-6,Ue=6e4,ma=4,ya=48<<20,ba=16;function Ne(n,e,t){let r;const i=new Promise((o,s)=>{r=setTimeout(()=>s(new He(qe.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,i]).finally(()=>clearTimeout(r))}function wa(n,e,t,r){let i=1/0,o=-1/0,s=1/0,a=-1/0,l=1/0,u=-1/0;for(const[c,g,d]of n)i=Math.min(i,c-e.gridY0),o=Math.max(o,c-e.gridY0+t),s=Math.min(s,d-e.gridX0),a=Math.max(a,d-e.gridX0+t),l=Math.min(l,g-r),u=Math.max(u,g-r+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,o),rx0:Math.max(0,s),rx1:Math.min(e.gx,a),rz0:l,rz1:u}}function xa(n,e,t){const{gx:r,gy:i}=n,o=new Int32Array(i).fill(r),s=new Int32Array(i).fill(0);for(const[u,c]of n.patches){const g=Math.max(0,u-n.gridY0),d=Math.min(i,u-n.gridY0+e),h=Math.max(0,c-n.gridX0),f=Math.min(r,c-n.gridX0+e);for(let p=g;p<d;p++)h<o[p]&&(o[p]=h),f>s[p]&&(s[p]=f)}const a=new Uint32Array(3*i+1);let l=0;for(let u=0;u<i;u++){const c=Math.max(0,s[u]-o[u]);a[u]=l,a[i+1+u]=c?o[u]:0,a[2*i+1+u]=c,l+=c*t}return a[i]=l,{table:a,count:l}}function va(n,e){const t=new Float32Array(n);for(let r=0;r<n;r++)t[r]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*r/(n-1)));return t}function $a(n,e,t){const{gx:r,gy:i,gridX0:o,gridY0:s,patches:a}=n,l=new Float32Array(r*i),u=va(e,t);for(const[c,g]of a)for(let d=0;d<e;d++){const h=c-s+d;if(h<0||h>=i)continue;const f=h*r,p=u[d];for(let y=0;y<e;y++){const w=g-o+y;w>=0&&w<r&&(l[f+w]+=p*u[y])}}return l}function Ma(n,e,t,r){const{gx:i,gy:o,gridX0:s,gridY0:a,frame:{cX:l,cY:u,cos:c,sin:g}}=n,d=new Float32Array(i*o);for(let h=0;h<o;h++){const f=a+h-u;for(let p=0;p<i;p++){const y=s+p-l,w=l+y*c-f*g,x=u+y*g+f*c;if(w<-.5||x<-.5||w>r-.5||x>t-.5){d[h*i+p]=-1;continue}const m=Math.min(r-1,Math.max(0,rr(w))),b=Math.min(t-1,Math.max(0,rr(x)));d[h*i+p]=e[b*r+m]}}return d}class _a{constructor(e,t,r,{batchSize:i}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,this.channels=t.model.output_channels,this.bufferLimit=Math.min(ha,e.device.limits.maxStorageBufferBindingSize),this.network=new aa(e,t,r,i),this.blendPipeline=e.pipeline(ua(this.network.store,this.channels)),this.inputPlan=jo(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,r){var o;this.cancel(),(o=this.city)==null||o.distanceField.destroy();const i=new Xi(this.context,{layers:e,ny:t,nx:r},ga(this.patch),this.network.store,this.inputPlan);i.scanRawBytes=Math.ceil(ya*Math.min(1,this.batchSize/ba)),this.city={distanceField:i,ny:t,nx:r,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var s;const{city:r,patch:i}=this,o=`${e}:${t}`;return((s=r.frame)==null?void 0:s.key)!==o&&(r.frame={key:o,layout:Yi(e,r.nx,r.ny,i,t),final:null,roof:null}),r.frame}finalOf(e){return e.final??(e.final=$a(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=Ma(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,r=e.join();if(t.storedKey===r)return!1;const{distanceField:i}=t;i.releaseGroups(),i.upGrid=null,t.storedKey=null;const[o]=i.planGroups(e,this.bufferLimit);return i.allocate([o]),await Ne(i.scan(o),4*Ue,"the computation"),i.destroyed?!1:(t.group=o,t.storedKey=r,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>Ne(e.popErrorScope().catch(()=>null),Ue,"the graphics device"),r=await t(),i=await t();if(r)throw new He(qe.GPU,`out of graphics memory: ${r.message}`);if(i)throw new He(qe.GPU,`the graphics device refused the work: ${i.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,r){const i=++this.generation,o=()=>i!==this.generation,{context:s,city:a,patch:l}=this,{device:u}=s;this.openScopes();let c=null;const g=()=>this.closeScopes();try{const d=this.frameOf(t,ca(l,r.overlap)),{layout:h}=d;if(await this.ensureLayers(e),o()||a.distanceField.destroyed)return null;const{distanceField:f,group:p}=a;if(f.upWind&&f.ensureUpTiles([p],t,h.patches,l)&&(await Ne(u.queue.onSubmittedWorkDone(),Ue,"the computation"),s.releaseScratch()),o())return null;const y=xa(h,l,e.length),w=s.storage(y.count*(this.channels+1)*4);try{if(!await this.runNetwork(p,e,d,y,w,t,r,o))return null;c=await this.readField(e,h,y,w)}finally{s.free(w),s.releaseScratch()}}finally{await g()}return o()?null:c}async runNetwork(e,t,r,i,o,s,a,l){var b;const{context:u,patch:c}=this,{layout:g}=r,{device:d}=u,{distanceField:h}=this.city,f=u.upload(i.table),p=[],y=t[0],w=!!(a.shouldDraw&&a.onDraw)&&t.length===1;let x=null,m=null;w&&(x={final:this.finalOf(r),roof:this.roofOf(r)},(b=a.onStart)==null||b.call(a,{gridH:g.gy,gridW:g.gx,originY:g.gridY0,originX:g.gridX0,theta:s}));try{const $=t.length*g.patches.length;for(let v=0;v<$;){if(l())return!1;const M=Math.floor(v/g.patches.length),k=v%g.patches.length,S=g.patches.slice(k,k+this.batchSize).map(([C,A])=>[C,t[M],A]);v+=S.length;const I=new Int32Array(S.flat()),T=d.createCommandEncoder(),P=h.assemble(T,I,e,s,c,this.network.inputBuffer),E=this.network.encode(T,S.length),B=wa(S,g,c,y);if(this.encodeBlend(T,E,P,o,f,S.length,B,g,y),d.queue.submit([T.finish()]),u.free(P),u.releaseScratch(),p.push(d.queue.onSubmittedWorkDone()),p.length>pa&&await Ne(p.shift(),Ue,"the computation"),w){m=ka(m,B);const C=v>=$;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(C||a.shouldDraw())){const A=m;m=null;const L=await this.readRect(A,g,i,o,x,t[0]);if(l())return!1;a.onDraw({...L,stride:this.channels+2,channels:this.channels,theta:s,readyCount:v,patchCount:$})}}}return await Ne(Promise.all(p),Ue,"the computation"),!0}finally{u.free(f)}}encodeBlend(e,t,r,i,o,s,a,l,u){const{context:c,patch:g}=this,{gy:d}=l,{ry0:h,ry1:f,rx0:p,rx1:y,rz0:w,rz1:x}=a;if(!(f>h&&y>p))return;const m=e.beginComputePass();c.dispatch(m,this.blendPipeline,[t,r,i,o,c.uniform([["u",s],["u",g],["u",this.channels],["u",g],["u",d],["u",u],["u",0],["u",0],["u",h],["u",w],["u",p],["u",f-h],["u",x-w],["u",y-p],["i",l.gridY0],["i",l.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(f-h)*(x-w)*(y-p)),m.end()}async readRect({ry0:e,ry1:t,rx0:r,rx1:i},o,{table:s},a,{final:l,roof:u},c){const{gx:g,gy:d}=o,h=this.channels,f=(h+1)*4,p=i-r,y=t-e,w=(v,M)=>{for(let k=e;k<t;k++){const S=s[d+1+k],I=s[2*d+1+k],T=Math.max(r,S),P=Math.min(i,S+I);P>T&&v.copyBufferToBuffer(a,(s[k]+T-S)*f,M,((k-e)*p+T-r)*f,(P-T)*f)}},x=await Ne(this.context.readBack(p*y*f,w,v=>new Float32Array(v.slice(0))),Ue,"reading the wind back"),{center:m,scale:b}=this.metadata.target,$=new Float32Array(p*y*(h+2));for(let v=0;v<p*y;v++){const M=x[v*(h+1)+h],k=v*(h+2),S=M>nt?1/M:0;for(let P=0;P<h;P++)$[k+P]=x[v*(h+1)+P]*S*b[P]+m[P];const I=(e+Math.floor(v/p))*g+r+v%p,T=u[I];$[k+h]=T<0||M<=nt?2:T>c?1:0,$[k+h+1]=l[I]>nt?Math.min(1,M/l[I]):0}return{x0:r,y0:e,width:p,height:y,values:$}}async readField(e,t,{table:r,count:i},o){const{gx:s,gy:a}=t,l=this.channels,u=l+1,{center:c,scale:g}=this.metadata.target,d=(y,w)=>y.copyBufferToBuffer(o,0,w,0,w.size),h=await Ne(this.context.readBack(i*u*4,d,y=>new Float32Array(y.slice(0))),4*Ue,"reading the wind back"),f=e.map(y=>({layer:y,values:new Float32Array(s*a*l),weights:new Float32Array(s*a)}));let p=performance.now();for(let y=0;y<a;y++){performance.now()-p>da&&(await fa(),p=performance.now());const w=r[y],x=r[a+1+y],m=r[2*a+1+y];for(let b=0;b<e.length;b++){const{values:$,weights:v}=f[b];for(let M=0;M<m;M++){const k=(w+b*m+M)*u,S=y*s+x+M,I=h[k+l];if(I>nt){v[S]=I;const T=1/I;for(let P=0;P<l;P++)$[S*l+P]=h[k+P]*T*g[P]+c[P]}else for(let T=0;T<l;T++)$[S*l+T]=c[T]}}}return{layout:t,gx:s,gy:a,layers:f}}async predict(e,t={}){const{city:r}=this,i=r.layerIndex,o=await this.predictLayers([i],e,t);if(!o)return null;const{gx:s,gy:a,layers:[{values:l,weights:u}]}=o,c=this.channels,g=this.roofOf(r.frame),d=new Uint8Array(s*a);let h=0;for(let f=0;f<s*a;f++){if(g[f]<0){d[f]=2;continue}if(u[f]<=nt){d[f]=2;continue}d[f]=g[f]>i?1:0;for(let p=0;p<c;p++)if(!Number.isFinite(l[f*c+p])){h+=1;break}}return{values:l,solid:d,theta:e,height:a,width:s,nonFinite:h}}}function ka(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const Sa=16,Ba=.4,Ia=6.278,Ca=1e-6;function Pa(){let n=null,e=null,t=null,r=null,i=null,o=0;async function s({allowF16:d=!0}={},h){if(!t){const f="/cityffdv2-demo/flume/model-v3/";[t,r]=await Promise.all(["metadata.json","weights.bin"].map(async p=>{const y=await fetch(f+p,{signal:h});if(!y.ok)throw new Error("Could not load model v3 "+p+" (HTTP "+y.status+").");return p.endsWith(".bin")?y.arrayBuffer():y.json()}))}n&&(d||!n.useF16)||(a(),n=await vr.create({allowF16:d}),e=new _a(n,t,r,{batchSize:Sa}))}function a(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,i=null}function l(d,h,f){const p=h.gx*h.gy,y=e.roofOf(e.city.frame),w=new Uint8Array(p);let x=0;for(let b=0;b<p;b++)y[b]<0||f.weights[b]<=Ca?w[b]=2:w[b]=y[b]>f.layer?1:0,!w[b]&&!Number.isFinite(f.values[b*5])&&x++;const m={width:h.gx,height:h.gy,originX:h.layout.gridX0,values:f.values,solid:w};return pr(d,d.plan.indexOf(f.layer),m),x}async function u(d,h,f,p,y){const{gx:w,gy:x}=Yi(p,h.nx,h.ny,e.patch,e.patch),m=Math.max(1,Math.floor(e.bufferLimit/(w*x*(e.channels+1)*4))),b=Math.min(ma,m);for(let $=0;$<f.length;$+=b){if(d.generation!==o||y!=null&&y.aborted)return!1;const v=await e.predictLayers(f.slice($,$+b),p,{overlap:Ba});if(!v||d.generation!==o)return!1;d.volume??(d.volume=hr({width:v.gx,height:v.gy,originX:v.layout.gridX0,originY:v.layout.gridY0,theta:p},d.layers,!1));for(const M of v.layers)d.nonFinite+=l(d.volume,v,M)}return!0}async function c(d,h,f,{signal:p,onFirstWave:y,onMoreLayers:w}={},x=!0){await s({allowF16:x},p),d!==i&&(e.setCity(d.layers,d.ny,d.nx),i=d);const m=gr(h).slice(0,Rt),b={layers:h,volume:null,nonFinite:0,generation:++o};if(!await u(b,d,h.filter(v=>m.includes(v)),f,p))return null;if(b.nonFinite&&n.useF16&&x)return c(d,h,f,{signal:p,onFirstWave:y,onMoreLayers:w},!1);if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");y==null||y({volume:b.volume,referenceSpeed:Ia});const $=h.filter(v=>!m.includes(v));if($.length){if(!await u(b,d,$,f,p))return null;if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");w==null||w()}return e.releaseLayers(),b.volume}async function g(d,h,f){await s({},f);const p=e.inputPlan.stored,y=Math.ceil(e.patch*Math.SQRT2),w=new Xi(n,{layers:d.layers,ny:d.ny,nx:d.nx},y,e.network.store,e.inputPlan),x=w.gx*w.gy*p.length*4;let m=null;w.packGroup=async()=>{m=await n.readBack(x,(v,M)=>v.copyBufferToBuffer(w.sumsBuffer,0,M,0,x),v=>new Float32Array(v.slice(0)).map(M=>M/ie))};try{const v=w.planGroups([h],e.bufferLimit);w.allocate(v),await w.scan(v[0])}finally{w.destroy()}if(!m)throw new Error("Model v3 MDDF could not be read.");const b=p.map(v=>"upper_distance_"+v.part+(v.part==="dc"?"":v.mode));return{values:m,ny:w.gy,nx:w.gx,margin:y,layerIndex:h,channels:b,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:c,readMddf:g,cancel(){o++,e==null||e.cancel()},destroy:a}}const ri={v2:Ro,v3:Pa},Aa=32;function Ta(){const n=or({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=null,r=null,i=null,o=null,s=!1,a=0;const l={},u=new AbortController;function c(){try{t==null||t.destroy();for(const x of Object.values(l))x.destroy()}finally{for(const x of Object.keys(l))delete l[x];e==null||e.device.destroy(),t=null,e=null,o=null}}async function g(){if(t)return;n.stage="Loading model";const x="/cityffdv2-demo/flume/",[m,b,$]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async v=>{const M=await fetch(x+v,{signal:u.signal});if(!M.ok)throw new Error("Could not load "+v+" (HTTP "+M.status+").");return v.endsWith(".bin")?M.arrayBuffer():M.json()}));ls(m,b.byteLength),u.signal.throwIfAborted(),e=await dr.create(),u.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",v=>{n.error="WebGPU: "+v.error.message.split(`
`)[0]}),e.device.lost.then(v=>{!s&&v.reason!=="destroyed"&&(n.error="GPU device lost. Run again to initialize a new session.",n.prediction=null,t=null,e=null,o=null)}),r=m,i=$,t=new us(e,r,b,{batchSize:Aa})}async function d(x,m){if(s||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const b=++a,$=()=>s||b!==a;try{if(await g(),$())return null;if(ri[m.model])return await h(x,m,$,b);x!==o&&(t.setCity(x.layers,x.ny,x.nx),o=x);const v=performance.now(),M=(C,A)=>{const L={...C,grid:x,settings:{...m,layers:A},referenceSpeed:r.wind.reference_speed_m_s,modelLabel:r.label,colorbar:i,patchCount:P,milliseconds:performance.now()-v,inputRevision:b};return n.prediction=Xe(L),n.layersReady=C.layers.length,L},k=[...m.layers],S=gr(k);let I=null,T=null,P=0;const E=C=>({signal:u.signal,onProgress:A=>{$()||(n.progress=(C+A*.3)/S.length)}});let B=t.setHeight(S[0],E(0));for(let C=0;C<S.length;C++){if(n.stage="Predicting 3D wind · layer "+(C+1)+" / "+S.length,await B,$())return null;const A=await t.predict(m.thetaRad,{signal:u.signal,onProgress:L=>{$()||(n.progress=(C+.3+L*.7)/S.length)}});if(u.signal.throwIfAborted(),$())return null;if(n.error)throw new Error(n.error);I||(I=hr(A,k,!1)),B=C+1<S.length?t.setHeight(S[C+1],E(C+1)):null,B==null||B.catch(()=>{}),cs(A),P=A.patchCount??P,pr(I,k.indexOf(S[C]),A),T?(T.milliseconds=performance.now()-v,n.layersReady=I.layers.length):C+1>=Math.min(Rt,S.length)&&(T=M(I,k))}return n.progress=1,n.stage="Prediction ready",T}catch(v){return!s&&b===a&&(n.error=v.message,n.stage="Prediction failed",n.prediction=null),c(),null}finally{s?c():n.busy=!1}}async function h(x,m,b,$){var T;const v=cr[m.model],M=l[T=m.model]??(l[T]=ri[m.model]());n.stage=v+" · predicting the first layers";const k=performance.now();let S=null;if(!await M.run(x,m.layers,m.thetaRad,{signal:u.signal,onFirstWave({volume:P,referenceSpeed:E}){b()||(S={...P,grid:x,settings:{...m},referenceSpeed:E,modelLabel:v,colorbar:i,patchCount:0,milliseconds:performance.now()-k,inputRevision:$},n.prediction=Xe(S),n.layersReady=P.layers.length,n.progress=.3,n.stage=v+" · predicting the remaining layers")},onMoreLayers(){b()||!S||(S.milliseconds=performance.now()-k,n.layersReady=S.layers.length)}})||b())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",S}async function f(x){if(!t||!n.prediction||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{const m=l[n.prediction.settings.model];if(m)return await m.readMddf(n.prediction.grid,x,u.signal);Number.isInteger(x)&&await t.setHeight(x,{signal:u.signal});const b=t.city.field,$=await e.readFloat32(b.fieldBuffer,b.gy*b.gx*28);if(s)throw new Error("The page was closed.");return{values:$,ny:b.gy,nx:b.gx,margin:b.margin,layerIndex:t.city.layerIndex}}finally{n.downloading=!1,s&&c()}}function p(){n.busy&&a++;for(const x of Object.values(l))x.cancel()}function y(){a++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function w(){s=!0,a++,u.abort(),!n.busy&&!n.downloading&&c()}return sr(w),{state:n,run:d,readMddf:f,cancel:p,invalidate:y,dispose:w}}const Re="flume-retained-buildings",ii="flume-retained-selected";function Ra(n,e){let t=null,r=null,i=null,o=null,s=null;function a(){if(t){n.getSource(Re)?i!==o&&n.getSource(Re).setData(i):n.addSource(Re,{type:"geojson",data:i,maxzoom:22,tolerance:0}),o=i;for(const[d,h]of[[Re,!1],[ii,!0]]){const f=t.filters[h?"selected":"surroundings"],p=h?1:t.surroundingsOpacity;n.getLayer(d)?n.setFilter(d,f):n.addLayer({id:d,type:"fill-extrusion",source:Re,maxzoom:ot,filter:f,layout:{visibility:"visible"},paint:{"fill-extrusion-color":h?ve().selectedBuildings:ve().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),n.setPaintProperty(d,"fill-extrusion-opacity",p),n.setLayoutProperty(d,"visibility",h||t.showSurroundings?"visible":"none")}}}function l(){if(!(!t||n.getZoom()<ot||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const d=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(h=>!h.tile||h.tile.z>=(t.dataZoom??ot));i=Mt([...i.features,...d]),a()}catch(d){e==null||e(d)}}function u(d){!t||d!=null&&d.sourceId&&d.sourceId!==t.sourceId||(clearTimeout(s),s=setTimeout(l,120))}function c(d){var h;(r!==d.collection||(t==null?void 0:t.sourceId)!==d.sourceId||(t==null?void 0:t.sourceLayer)!==d.sourceLayer)&&(i=Mt(((h=d.collection)==null?void 0:h.features)??[]),r=d.collection),t=d,a(),u()}function g(){clearTimeout(s),t=null,r=null,i=null,o=null;for(const d of[ii,Re])n.getLayer(d)&&n.removeLayer(d);n.getSource(Re)&&n.removeSource(Re)}return n.on("sourcedata",u),n.on("moveend",u),{update:c,clear:g,dispose(){n.off("sourcedata",u),n.off("moveend",u),g()}}}const ji={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},Ut=new Map;function Ea(n){if(!Ut.has(n)){const e=ji[n],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);Ut.set(n,t)}return Ut.get(n)}function qi(n,e){const t=Ea(ji[n]?n:"viridis"),r=Math.min(1,Math.max(0,e))*255,i=Math.floor(r),o=Math.min(255,i+1),s=r-i;return[t[i*3]*(1-s)+t[o*3]*s,t[i*3+1]*(1-s)+t[o*3+1]*s,t[i*3+2]*(1-s)+t[o*3+2]*s]}const Fa=new Set(["u","v","w"]),ct=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis",notInV2:!0},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno",notInV2:!0},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],Ze={u:0,w:1,v:2,T:3,tke:4};function kr(n,e,t,r){const i=n[e+Ze.u]*r,o=n[e+Ze.v]*r;switch(t){case"u":return i;case"v":return o;case"w":return n[e+Ze.w]*r;case"speed":{const s=n[e+Ze.w]*r;return Math.sqrt(i*i+o*o+s*s)}case"T":return n[e+Ze.T];case"tke":return n[e+Ze.tke]*r*r;default:return 0}}function La(n,e,t,r,i){if(e==="T")return n.fixed.T.slice();const s=(n.quantiles[r]||n.quantiles[Object.keys(n.quantiles)[0]])[e],a=Math.min(s.length-1,Math.max(0,Math.round(t))),l=s[a]*(e==="tke"?i*i:i);return n.shape[e]==="symmetric"?[-l,l]:[0,l]}function Da(n,e){const t=n.solid.length,r=new Float32Array(t*4);for(let i=0;i<t;i++){const o=i*4;r[o]=kr(n.values,i*5,e,1),r[o+1]=1}return vi(r)}function za(n){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,i,o]=qi(n,t/255);e[t*4]=r,e[t*4+1]=i,e[t*4+2]=o,e[t*4+3]=255}return e}function ni(n,e){let t=1/0,r=-1/0;for(let i=0;i<n.solid.length;i++){if(n.solid[i]===1)continue;const o=kr(n.values,i*5,e,1);o<t&&(t=o),o>r&&(r=o)}return[t,r]}function Oa([n,e],t){if(t==="T")return e>n?[n,e]:null;if(Fa.has(t)){const r=Math.max(-n,e);return r>0?[-r,r]:null}return e>0?[0,e]:null}function nr(n,e,t){const r=(n.grid.nx-1)/2,i=(n.grid.ny-1)/2,o=n.originX+e-r,s=n.originY+t-i,a=Math.cos(n.theta),l=Math.sin(n.theta);return[(r+o*a-s*l+.5)*4,(i+o*l+s*a+.5)*4]}function Hi(n){const e=n.values.slice(),t=n.settings.speedMps/n.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const Nt=ae/2;function Ua(n){const{grid:e,theta:t}=n,r=yr(n),i=new Float32Array(5),o=(a,l,u)=>$s(n,e.nx,e.ny,a,l,u,i)!==null,s={plane:null,variable:"speed",wind(a,l,u,c){if(!o(a,l,u))return!1;Ms(i,t,c);const g=s.plane;return g!=null&&g.flat&&g.kind==="h"&&(c[2]=0),g!=null&&g.flat&&g.kind==="v"&&(c[0]=i[0]*Math.cos(t),c[1]=i[0]*Math.sin(t)),!0},inside:(a,l,u)=>u>=Nt&&u<=r&&!_s(e,a,l,u)&&o(a,l,u),value:()=>kr(i,0,s.variable,1),valueAt:(a,l,u)=>o(a,l,u)?s.value():0,spawn(a,l){var u,c;for(let g=0;g<20;g++){if(l[0]=a()*e.nx*z,l[1]=a()*e.ny*z,l[2]=Nt+a()**2*(r-Nt),((u=s.plane)==null?void 0:u.kind)==="h"&&(l[2]=s.plane.z),((c=s.plane)==null?void 0:c.kind)==="v"){const[d,h]=nr(n,a()*(n.width-1),s.plane.row);l[0]=d,l[1]=h}if(s.inside(l[0],l[1],l[2]))return}}};return s}const Na=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,Xa=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function Ya(n,e,t){let r,i,o,s,a,l,u,c,g,d,h,f="",p=0;const y=new Sr,w=new Sr,x=li.MercatorCoordinate.fromLngLat(n.grid.origin),m=x.meterInMercatorCoordinateUnits(),[b,$]=nr(n,n.width/2-.5,n.height/2-.5),v=[new gt(new $e(1,0,0),0),new gt(new $e(-1,0,0),n.grid.nx*z),new gt(new $e(0,1,0),0),new gt(new $e(0,-1,0),n.grid.ny*z)],M=()=>Number(e.speedMps)/n.referenceSpeed,k=new Map;function S(P){let E=1/0,B=-1/0;for(let C=0;C<n.layers.length;C++){const A=P+"@"+n.slots[C];k.has(A)||k.set(A,ni(xs(n,C),P));const[L,G]=k.get(A);E=Math.min(E,L),B=Math.max(B,G)}return[E,B]}let I=[0,0];function T(){if(!i)return;const P=ct.find(R=>R.id===e.variable)??ct[0];d==null||d.dispose(),d=new Br(za(P.ramp),256,1,Ir),d.colorSpace=vn,d.minFilter=d.magFilter=Cr,d.needsUpdate=!0;const E=e.plane==="3d"?"h":e.plane,B=ks(n,e.planeOffsetM),C=e.view==="slice"||e.view==="particles"&&e.particles==="white";a.visible=C&&E==="h",l.visible=C&&E==="v";const A=P.id+"@"+(E==="v"?"v"+B:e.sliceHeightM);if(A!==f){let R;if(E==="v"){R=Bs(n,B);const[Y,J]=nr(n,(n.width-1)/2,B);l.position.set(Y,J,R.height*ae/2)}else R=Si(n,Number(e.sliceHeightM)),a.position.z=R.settings.heightM;g==null||g.dispose(),g=new Br(Da(R,P.id),R.width,R.height,Ir,$n),g.minFilter=g.magFilter=Cr,g.needsUpdate=!0,I=ni(R,P.id),f=A}const L=M();let G=L;P.id==="T"&&(G=1),P.id==="tke"&&(G=L*L);const O=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?S(P.id):I,K=Oa(O,P.id)??La(n.colorbar,P.id,n.settings.layers.at(-1),"99.9",1);h.uniforms.field.value=g??null,h.uniforms.palette.value=d,h.uniforms.range.value.set(...K),c.enabled=e.view!=="off",c.mesh.visible=c.enabled;const ee=e.view==="slice"||e.particles==="white",he=ee?E:e.plane;he==="h"?c.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:ee}):he==="v"?c.setPlane({kind:"v",row:B,flat:ee}):c.setPlane(null),c.setCount(Er[e.density]??Er.medium),c.setColouring(ee?"white":e.particles,P.id,d,K),t==null||t({low:K[0]*G,high:K[1]*G,...P}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:T,refresh(){f="",T()},onAdd(P,E){r=P,o=new yn,s=new bn,i=new wn({canvas:r.getCanvas(),context:E,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,h=new ci({vertexShader:Na,fragmentShader:Xa,uniforms:{field:{value:null},palette:{value:null},range:{value:new fi(0,1)}},transparent:!0,depthWrite:!1,side:di,clipping:!0,clippingPlanes:v}),a=new $t(new Yt(n.width*z,n.height*z),h),a.position.set(b,$,0),a.rotation.z=n.theta,a.frustumCulled=!1,o.add(a);const B=new Yt(n.width*z,(n.layers.at(-1)+1)*ae);B.rotateX(Math.PI/2),l=new $t(B,h),l.rotation.z=n.theta,l.frustumCulled=!1,o.add(l),c=new xn(Ua(n)),o.add(c.mesh),u=Wa(n.grid,.5),u&&o.add(u),T()},render(P,E){const B=performance.now(),C=Math.min(p?(B-p)/1e3:0,.05);p=B,y.makeTranslation(x.x,x.y,x.z).scale(new $e(m,-m,m)),s.projectionMatrix.copy(w.fromArray(E)).multiply(y),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),c.setViewport(P.drawingBufferWidth,P.drawingBufferHeight);const A=c.enabled&&!e.paused;A&&c.step(C,M()),i.resetState(),i.setViewport(0,0,P.drawingBufferWidth,P.drawingBufferHeight),i.render(o,s),A&&r.triggerRepaint()},onRemove(){g==null||g.dispose(),d==null||d.dispose(),a==null||a.geometry.dispose(),l==null||l.geometry.dispose(),h==null||h.dispose(),c==null||c.dispose(),u==null||u.geometry.dispose(),u==null||u.material.dispose(),i==null||i.dispose(),r=null,i=null}}}function Wa(n,e){if(!n.mainDomain)return null;const t=At(n.origin),r=[...t(n.mainDomain.bounds.slice(0,2)),...t(n.mainDomain.bounds.slice(2,4))],i=new ci({uniforms:{extent:{value:new fi(n.nx*z,n.ny*z)},mainBounds:{value:new Mn(...r)},mainColour:{value:new Pr(ve().mainArea)},bufferColour:{value:new Pr(ve().bufferArea)}},vertexShader:`
      uniform vec2 extent;
      varying vec2 localPoint;
      void main() {
        localPoint = uv * extent;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec2 extent;
      uniform vec4 mainBounds;
      uniform vec3 mainColour;
      uniform vec3 bufferColour;
      varying vec2 localPoint;
      void main() {
        float d = max(max(mainBounds.x-localPoint.x, localPoint.x-mainBounds.z),
                      max(mainBounds.y-localPoint.y, localPoint.y-mainBounds.w));
        float mainEdge = 1.0-smoothstep(0.0, max(fwidth(d)*2.0, 0.001), abs(d));
        float outer = min(min(localPoint.x, extent.x-localPoint.x), min(localPoint.y, extent.y-localPoint.y));
        float outerEdge = (1.0-smoothstep(0.0, max(fwidth(outer)*2.0, 0.001), outer))
                          * step(0.4, fract((gl_FragCoord.x+gl_FragCoord.y)/14.0));
        float alpha = max(d > 0.0 ? 0.07 : 0.0, max(mainEdge, outerEdge));
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(mix(bufferColour, mainColour, mainEdge), alpha);
        #include <colorspace_fragment>
      }
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:di}),o=new $t(new Yt(n.nx*z,n.ny*z),i);return o.name="flume-domain-overlay",o.position.set(n.nx*z/2,n.ny*z/2,e+.05),o.renderOrder=4,o.frustumCulled=!1,o}const Xt="flume-field",st="flume-buildings";function Vi(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function Ga(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function ja(n,e,t){let r=null,i=null;const o=new Map,s=Ra(n,t);function a(){n.getLayer(Xt)&&n.removeLayer(Xt),r=null}function l(){for(const[g,d]of o)n.getLayer(g)&&(n.setLayoutProperty(g,"visibility",d.visibility),n.setPaintProperty(g,d.property,d.opacity),n.setFilter(g,d.filter),n.setLayerZoomRange(g,d.minzoom,d.maxzoom),d.color!==void 0&&n.setPaintProperty(g,"fill-extrusion-color",d.color));o.clear()}function u(g){for(const d of n.getStyle().layers){if(d.id.startsWith("flume-"))continue;const h=Ga(d);if(!h)continue;const f=d.type==="fill-extrusion";o.set(d.id,{visibility:n.getLayoutProperty(d.id,"visibility")??"visible",property:h,opacity:n.getPaintProperty(d.id,h)??1,filter:n.getFilter(d.id)??null,minzoom:d.minzoom??0,maxzoom:d.maxzoom??24,color:f?n.getPaintProperty(d.id,"fill-extrusion-color")??null:void 0}),n.setPaintProperty(d.id,h,Tr),f&&n.setPaintProperty(d.id,"fill-extrusion-color",ve().previewBuildings),g||n.setLayoutProperty(d.id,"visibility","none")}}function c({source:g,input:d,prediction:h,preview:f,display:p}){if(h!==i&&(a(),i=h),!h&&n.getLayer(st)&&n.removeLayer(st),l(),_n(n,Vi(g)),!h){s.clear(),jt(n,f);return}jt(n,null);const y=kn.find(x=>x.id===(g==="osm"?"city-osm-3d":"city-concordia-3d")),w=xi(d.buildings.features,n.getFilter(y.id));u(p.showSurroundings),n.setFilter(y.id,w.surroundings),n.setLayerZoomRange(y.id,ot,y.layer.maxzoom??24),n.getLayer(st)?n.setFilter(st,w.selected):n.addLayer({...y.layer,id:st,minzoom:ot,layout:{visibility:"visible"},filter:w.selected,paint:{...y.layer.paint,"fill-extrusion-color":ve().selectedBuildings,"fill-extrusion-opacity":1}}),s.update({sourceId:y.layer.source,sourceLayer:y.layer["source-layer"],collection:f,dataZoom:d.dataZoom,filters:w,surroundingsOpacity:Tr,showSurroundings:p.showSurroundings}),n.getLayer(Xt)||(r=Ya(h,p,e),n.addLayer(r)),n.triggerRepaint()}return{update:c,configure(){r==null||r.configure()},refresh(){r==null||r.refresh()},beforeStyleChange(){a(),i=null,o.clear()},dispose(){a(),s.dispose(),o.clear()}}}function Ge(n,e,t,r,i){if(t.reduce((a,l)=>a*l,1)!==e.length)throw new Error("Invalid "+n+" shape.");const o=new Uint8Array(e.length*4),s=new DataView(o.buffer);for(let a=0;a<e.length;a++){if(!Number.isFinite(e[a]))throw new Error("Cannot export non-finite "+n);s.setFloat32(a*4,e[a],!0)}return{name:n,content:o,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function Ki(n,e,t,r,i=null){var s,a,l;const o={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((s=n.selection)==null?void 0:s.geometry)??((a=n.polygon)==null?void 0:a.geometry),computationalDomain:(l=n.polygon)==null?void 0:l.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:r.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(o.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(u=>(u+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),o.files=Object.fromEntries(t.map(u=>[u.name,u.description])),[{name:"metadata.json",content:JSON.stringify(o,null,2)},...t.map(({name:u,content:c})=>({name:u,content:c}))]}function Zi(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(s=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>s+"_"+a)),i=Ge("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),o=e.channels??r;return[Ge("mddf.f32.bin",e.values,[e.ny,e.nx,o.length],o,"m"),i]}function qa(n){const e=Hi(n),t=n.width*n.height,r=new Float32Array(t*3),i=new Float32Array(t),o=new Float32Array(t),s=new Float32Array(t);for(let u=0;u<t;u++){const c=u*5;r.set([e[c],e[c+2],e[c+1]],u*3),i[u]=e[c+3],o[u]=e[c+4],s[u]=Math.hypot(e[c],e[c+1],e[c+2])}const a=[n.height,n.width],l=[Ge("velocity.f32.bin",r,[...a,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:a,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Ge("speed.f32.bin",s,a,["speed"],"m/s")];return n.settings.model!=="v2"&&l.push(Ge("temperature.f32.bin",i,a,["T"],"degC"),Ge("tke.f32.bin",o,a,["TKE"],"m2/s2")),l}function Ha(n){const e=n.width*n.height,t=n.settings.layers.length,r=Hi(n),i=new Float32Array(t*e*3);for(let o=0;o<t*e;o++)i.set([r[o*5],r[o*5+2],r[o*5+1]],o*3);return[Ge("velocity3d.f32.bin",i,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function Va(n,e,t){return Ki(n,t,Zi(t,e),e)}function Ka(n,e,t,r=null){const i=[...Zi(t,e),...qa(t)];return r&&i.push(...Ha(r)),i.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),Ki(n,t,i,e,r)}class Za{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let o=0;e.traverse(function(w){if(w.isMesh){const x=w.geometry,m=x.index,b=x.getAttribute("position");o+=m!==null?m.count/3:b.count/3,i.push({object3d:w,geometry:x})}});let s,a=80;if(r===!0){const w=o*2+o*3*4*4+80+4,x=new ArrayBuffer(w);s=new DataView(x),s.setUint32(a,o,!0),a+=4}else s="",s+=`solid exported
`;const l=new $e,u=new $e,c=new $e,g=new $e,d=new $e,h=new $e;for(let w=0,x=i.length;w<x;w++){const m=i[w].object3d,b=i[w].geometry,$=b.index,v=b.getAttribute("position");if($!==null)for(let M=0;M<$.count;M+=3){const k=$.getX(M+0),S=$.getX(M+1),I=$.getX(M+2);f(k,S,I,v,m)}else for(let M=0;M<v.count;M+=3){const k=M+0,S=M+1,I=M+2;f(k,S,I,v,m)}}return r===!1&&(s+=`endsolid exported
`),s;function f(w,x,m,b,$){l.fromBufferAttribute(b,w),u.fromBufferAttribute(b,x),c.fromBufferAttribute(b,m),$.isSkinnedMesh===!0&&($.applyBoneTransform(w,l),$.applyBoneTransform(x,u),$.applyBoneTransform(m,c)),l.applyMatrix4($.matrixWorld),u.applyMatrix4($.matrixWorld),c.applyMatrix4($.matrixWorld),p(l,u,c),y(l),y(u),y(c),r===!0?(s.setUint16(a,0,!0),a+=2):(s+=`		endloop
`,s+=`	endfacet
`)}function p(w,x,m){g.subVectors(m,x),d.subVectors(w,x),g.cross(d).normalize(),h.copy(g).normalize(),r===!0?(s.setFloat32(a,h.x,!0),a+=4,s.setFloat32(a,h.y,!0),a+=4,s.setFloat32(a,h.z,!0),a+=4):(s+="	facet normal "+h.x+" "+h.y+" "+h.z+`
`,s+=`		outer loop
`)}function y(w){r===!0?(s.setFloat32(a,w.x,!0),a+=4,s.setFloat32(a,w.y,!0),a+=4,s.setFloat32(a,w.z,!0),a+=4):s+="			vertex "+w.x+" "+w.y+" "+w.z+`
`}}}async function Ja(n,e,t={}){var w,x;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((w=e.layers)==null?void 0:w.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:o,spacingM:s,layerSpacingM:a}=e,l=(m,b)=>m<0||b<0||m>=r||b>=i?0:o[b*r+m],u=async()=>{var m;if(await new Promise(b=>setTimeout(b,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let c=0;for(let m=0;m<i;m++){m%32===0&&await u();for(let b=0;b<r;b++){const $=l(b,m);if(!Number.isInteger($)||$<0||$>160)throw new Error("Invalid MDDF building height.");$&&(c+=2+ +($>l(b-1,m))+ +($>l(b+1,m))+ +($>l(b,m-1))+ +($>l(b,m+1)))}}if(!c)throw new Error("The selected MDDF model has no buildings to export.");const g=new Float32Array(c*18);let d=0;const h=(m,b,$,v)=>{for(const M of[m,b,$,m,$,v])g.set(M,d),d+=3};for(let m=0;m<i;m++){m%32===0&&await u();for(let b=0;b<r;b++){const $=l(b,m)*a;if(!$)continue;const v=b*s,M=v+s,k=-m*s,S=k-s;h([v,$,k],[M,$,k],[M,$,S],[v,$,S]),h([v,0,k],[v,0,S],[M,0,S],[M,0,k]);let I=l(b-1,m)*a;$>I&&h([v,I,S],[v,I,k],[v,$,k],[v,$,S]),I=l(b+1,m)*a,$>I&&h([M,I,k],[M,I,S],[M,$,S],[M,$,k]),I=l(b,m-1)*a,$>I&&h([v,I,k],[M,I,k],[M,$,k],[v,$,k]),I=l(b,m+1)*a,$>I&&h([M,I,S],[v,I,S],[v,$,S],[M,$,S])}}const f=new Sn;f.setAttribute("position",new Bn(g,3));const p=new $t(f);let y;try{y=new Za().parse(p,{binary:!0}).buffer}finally{f.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:y},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(x=n.polygon)==null?void 0:x.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:s,layerSpacingM:a,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:c*2}}},null,2)}]}const Ji=Symbol("flume");function Et(){return en(Ji)}function Qa(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=vt(null),t=vt(!1);let r=null,i=null,o=null,s=!1,a=null,l=!1;const u=()=>r,{currentPresetName:c}=si();Fr(c.value);const g=hn({getMap:u,accessToken:n}),d=Xn({getMap:u,ready:t,onChange:y,accessToken:n}),h=Ta(),f=or({mapCreated:!1,mapReady:t,error:"",area:d.state,grid:null,wind:{...Ar},engine:h.state,display:{variable:"speed",speedMps:Ar.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:zn,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=te(()=>f.downloading||f.engine.downloading||f.area.loading);function y(){clearTimeout(a),a=null,l=!1,f.grid=null,f.legend=null,f.error="",f.downloadError="",h.invalidate(),b()}async function w(){if(p.value)return;const M=await d.captureRegion();if(!(!M||s))try{xi(M.buildings.features),f.grid=Xe(Yn(M)),f.error="",x()}catch(k){f.error=k.message}}function x(){!f.grid||s||(clearTimeout(a),a=setTimeout(()=>{a=null,m()},Dn))}async function m(){if(clearTimeout(a),a=null,!(s||!f.grid||p.value)){if(f.engine.busy){l=!0,h.cancel();return}try{const M={...Wn(f.wind),model:f.wind.model,layers:_i(f.grid)};f.display.speedMps=M.speedMps,f.error="",await h.run(f.grid,M)}catch(M){f.error=M.message}l&&!s&&(l=!1,await m())}}function b(){!r||!t.value||i==null||i.update({source:f.area.source,input:f.area.snapshot,prediction:f.engine.prediction,preview:d.getPreview(),display:f.display})}async function $(M){if(!(p.value||!f.grid)&&!(M!=="model"&&(f.engine.busy||!f.engine.prediction))){f.downloading=!0,f.downloadError="";try{const k=f.area.snapshot;let S;if(M==="model")S=await Ja(k,f.grid,{shouldCancel:()=>s});else{const T=Number(f.display.speedMps);if(!yt(T))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const P=f.engine.prediction,E={...P,settings:{...P.settings,speedMps:T}},B=Si(E,f.display.sliceHeightM),C=await h.readMddf(B.settings.layerIndex);M==="mddf"?S=Va(k,C,B):S=Ka(k,C,B,E)}const I=await Pn(S);s||An(I,"flume-"+M+".zip","application/zip")}catch(k){s||(f.downloadError=k.message)}finally{s||(f.downloading=!1)}}}Se([()=>f.engine.prediction,()=>f.area.source,()=>f.display.showSurroundings],b),Se(()=>f.engine.layersReady,()=>i==null?void 0:i.refresh()),Se(()=>[f.wind.directionDeg,f.wind.model],()=>{f.grid&&x()}),Se(()=>f.wind.speedMps,M=>{yt(M)&&(f.display.speedMps=Number(M))}),Se(()=>f.engine.prediction,M=>{const k=ct.find(S=>S.id===f.display.variable);(M==null?void 0:M.settings.model)==="v2"&&(k!=null&&k.notInV2)&&(f.display.variable="speed")}),Se(()=>[f.display.variable,f.display.particles,f.display.density,f.display.speedMps,f.display.view,f.display.plane,f.display.sliceHeightM,f.display.planeOffsetM],()=>{yt(f.display.speedMps)?(f.downloadError="",i==null||i.configure()):f.downloadError="Use a wind speed between 0.5 and 20 m/s."}),Se(()=>f.display.paused,()=>r==null?void 0:r.triggerRepaint()),Se(c,M=>Fr(M)),Se(g.mapStyle,M=>{r&&(d.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),r.setStyle(M,{diff:!1}))}),Qi(()=>{if(!(n!=null&&n.startsWith("pk."))){f.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new li.Map({container:e.value,accessToken:n,style:g.mapStyle.value,center:En,zoom:Fn,pitch:0,antialias:!0,attributionControl:!1}),i=ja(r,M=>{s||(f.legend=M)},M=>{s||(f.error=M.message)}),f.mapCreated=!0,r.on("style.load",()=>{if(!s)try{In(r,Vi(f.area.source)),t.value=!0,d.restore(),b()}catch(M){f.error=M.message}}),r.on("error",M=>{if(s)return;const k=M.sourceId?" ("+M.sourceId+")":"";f.error="Map data unavailable"+k+". Check token, allowed domains and connection."}),g.attach(),o=new ResizeObserver(()=>r==null?void 0:r.resize()),o.observe(e.value)}catch(M){f.error=M.message}}),sr(()=>{s=!0,clearTimeout(a),h.dispose(),i==null||i.dispose(),o==null||o.disconnect(),r==null||r.remove(),r=null});const v={mapElement:e,store:f,controls:g,locked:p,area:d,acceptArea:w,runPrediction:m,download:$};return tn(Ji,v),v}const eu={class:"flume-compact"},tu={key:0,class:"flume-meta",role:"status"},ru={key:1,class:"flume-muted"},iu={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},nu={class:"flume-actions"},su={key:2,role:"status",class:"flume-muted"},ou={key:3,class:"flume-meta"},au=["disabled"],uu={key:4,class:"flume-meta"},lu={__name:"AreaHud",setup(n){const{store:e,area:t,locked:r,acceptArea:i}=Et(),o=pi*100,s=e.area,a=te(()=>!e.mapReady||r.value),l=te(()=>!!(s.region||s.loadedArea)),u=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],c=Ln.map(g=>({label:cr[g],value:g}));return(g,d)=>{var b;const h=oi,f=rn,p=It,y=ar,w=ai,x=Ct,m=Pt;return N(),j("div",eu,[U(h,{modelValue:_(e).wind.model,"onUpdate:modelValue":d[0]||(d[0]=$=>_(e).wind.model=$),options:_(c),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:_(r)},null,8,["modelValue","options","disabled"]),U(f,{modelValue:_(s).source,"onUpdate:modelValue":d[1]||(d[1]=$=>_(s).source=$),label:"Buildings","aria-label":"Building source",size:"small",options:u,"text-by":"text","value-by":"value",disabled:_(r)},null,8,["modelValue","disabled"]),U(p,{block:"",size:"small",preset:l.value?"secondary":void 0,icon:"mso-location_city",disabled:a.value,loading:_(s).loading,onClick:_(t).loadBuildings},{default:ne(()=>[...d[5]||(d[5]=[oe("Show detailed buildings",-1)])]),_:1},8,["preset","disabled","loading","onClick"]),_(s).loadedArea?(N(),j("p",tu," Loaded detailed buildings: "+D(_(s).loadedArea.count)+" parts · "+D((_(s).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+D((_(s).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+D(_(s).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(N(),j("p",ru,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),F("div",iu,[d[6]||(d[6]=F("span",{class:"text-xs text-secondary"},"Buffer",-1)),U(y,{modelValue:_(s).bufferPercent,"onUpdate:modelValue":d[2]||(d[2]=$=>_(s).bufferPercent=$),min:0,max:o,step:5,"aria-label":"Buffer per side (%)",disabled:_(r)},null,8,["modelValue","disabled"]),U(w,{modelValue:_(s).bufferPercent,"onUpdate:modelValue":d[3]||(d[3]=$=>_(s).bufferPercent=$),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:o,step:5,disabled:_(r)},null,8,["modelValue","disabled"]),d[7]||(d[7]=F("span",{class:"text-xs text-secondary"},"%",-1))]),F("div",nu,[U(p,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:a.value,"aria-label":"Select region",onClick:_(t).startSelection},{default:ne(()=>[...d[8]||(d[8]=[oe("Draw area",-1)])]),_:1},8,["disabled","onClick"]),U(p,{size:"small",preset:l.value?void 0:"secondary",disabled:!_(e).mapReady||!l.value||_(r),loading:_(s).loading,"aria-label":_(s).region?"Use selected region":"Use full loaded area",onClick:_(i)},{default:ne(()=>[oe(D(_(s).region?"Use region":"Use full area"),1)]),_:1},8,["preset","disabled","loading","aria-label","onClick"])]),_(s).drawing?(N(),j("p",su," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):_(s).region?(N(),j("p",ou,[oe(D(_(s).region.extentM[0])+" × "+D(_(s).region.extentM[1])+" m · 4 m cells · "+D(_(s).region.buffer?"main + buffer":"main domain")+" ",1),F("button",{type:"button",class:"flume-link",disabled:_(r),onClick:d[4]||(d[4]=(...$)=>_(t).clearSelection&&_(t).clearSelection(...$))},"Clear",8,au)])):Z("",!0),(b=_(s).region)!=null&&b.mainDomain?(N(),j("p",uu," Main: "+D(_(s).region.mainDomain.extentM[0])+" × "+D(_(s).region.mainDomain.extentM[1])+" m. Buffer: "+D((_(s).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):Z("",!0),_(s).loading?(N(),je(x,{key:5,"model-value":_(s).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):Z("",!0),_(s).error?(N(),je(m,{key:6,color:"danger"},{default:ne(()=>[oe(D(_(s).error),1)]),_:1})):Z("",!0)])}}},cu={class:"flex flex-col gap-3"},du={key:0,class:"text-xs text-secondary"},fu={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},gu={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},hu=["aria-valuenow","aria-disabled"],pu=["x1","y1","x2","y2"],mu=["cx","cy"],yu={class:"flex flex-col gap-2 min-w-0"},bu={class:"cardinals grid grid-cols-4 gap-1"},wu={key:3,class:"flex flex-col gap-1"},xu={role:"status",class:"text-xs text-secondary"},vu={key:4,class:"text-xs text-secondary"},$u={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:r}=Et(),i=e.wind,o=e.engine,s=te(()=>!!e.grid&&!t.value),a=te(()=>{if(!e.grid)return null;const h=_i(e.grid);return{topM:Math.round((h.at(-1)+.5)*ae),layers:h.length}}),l=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],u=vt(null),c=te(()=>Number(i.directionDeg)*Math.PI/180);function g(h){if(!s.value||h.type==="pointermove"&&!h.buttons)return;h.type==="pointerdown"&&h.currentTarget.setPointerCapture(h.pointerId);const f=u.value.getBoundingClientRect(),p=h.clientX-f.left-f.width/2,y=-(h.clientY-f.top-f.height/2);i.directionDeg=(Math.round(Math.atan2(y,p)*180/Math.PI)+360)%360}function d(h){if(!s.value)return;const f={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[h.key]??0;f&&(h.preventDefault(),i.directionDeg=(Number(i.directionDeg)+f+360)%360)}return(h,f)=>{const p=ar,y=ai,w=It,x=Pt,m=Ct;return N(),j("div",cu,[_(e).grid?Z("",!0):(N(),j("p",du,"Choose a simulation area in step 1 first.")),F("div",fu,[f[3]||(f[3]=F("span",{class:"text-xs text-secondary"},"Speed",-1)),U(p,{modelValue:_(i).speedMps,"onUpdate:modelValue":f[0]||(f[0]=b=>_(i).speedMps=b),min:_(Wt),max:_(Gt),step:.1,"aria-label":"Wind speed",disabled:!s.value},null,8,["modelValue","min","max","disabled"]),U(y,{modelValue:_(i).speedMps,"onUpdate:modelValue":f[1]||(f[1]=b=>_(i).speedMps=b),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:_(Wt),max:_(Gt),step:.1,disabled:!s.value},null,8,["modelValue","min","max","disabled"]),f[4]||(f[4]=F("span",{class:"text-xs text-secondary"},"m/s",-1))]),F("div",gu,[(N(),j("svg",{ref_key:"dial",ref:u,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":_(i).directionDeg,"aria-disabled":!s.value||void 0,onPointerdown:nn(g,["prevent"]),onPointermove:g,onKeydown:d},[f[5]||(f[5]=sn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-b11a5596></circle><text x="80" y="16" text-anchor="middle" data-v-b11a5596>90°</text><text x="146" y="84" text-anchor="middle" data-v-b11a5596>0°</text><text x="80" y="152" text-anchor="middle" data-v-b11a5596>270°</text><text x="14" y="84" text-anchor="middle" data-v-b11a5596>180°</text>',5)),F("line",{x1:80-Math.cos(c.value)*30,y1:80+Math.sin(c.value)*30,x2:80+Math.cos(c.value)*42,y2:80-Math.sin(c.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,pu),F("circle",{cx:80+Math.cos(c.value)*42,cy:80-Math.sin(c.value)*42,r:"5",class:"needle-tip"},null,8,mu)],40,hu)),F("div",yu,[U(y,{modelValue:_(i).directionDeg,"onUpdate:modelValue":f[2]||(f[2]=b=>_(i).directionDeg=b),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!s.value},null,8,["modelValue","disabled"]),F("div",bu,[(N(),j(Fe,null,ui(l,b=>U(w,{key:b.text,size:"small",preset:"secondary",disabled:!s.value,"aria-label":"Wind towards "+b.text,onClick:$=>_(i).directionDeg=b.value},{default:ne(()=>[oe(D(b.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),_(e).error?(N(),je(x,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:ne(()=>[oe(D(_(e).error),1)]),_:1})):Z("",!0),_(o).error?(N(),je(x,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:ne(()=>[oe(D(_(o).error),1)]),_:1})):Z("",!0),_(o).busy?(N(),j("div",wu,[U(m,{"model-value":_(o).progress*100,indeterminate:_(o).progress===0},null,8,["model-value","indeterminate"]),F("p",xu,D(_(o).stage),1)])):Z("",!0),a.value&&!_(o).busy?(N(),j("p",vu," 3D wind: ground to "+D(a.value.topM)+" m · "+D(a.value.layers)+" layers ",1)):Z("",!0),U(w,{block:"",disabled:!s.value,loading:_(o).busy,"aria-label":"Run prediction",onClick:_(r)},{default:ne(()=>[...f[6]||(f[6]=[oe("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},Mu=ur($u,[["__scopeId","data-v-b11a5596"]]),_u={class:"flex flex-col gap-3"},ku={key:0,class:"text-xs text-secondary"},Su={key:0,class:"hud-row hud-row--value"},Bu={class:"hud-value"},Iu={key:1,class:"hud-row hud-row--value"},Cu={class:"hud-value"},Pu={key:0,class:"hud-row"},Au={class:"hud-row"},Tu={key:0,class:"flex flex-col gap-1 text-xs"},Ru={class:"flex justify-between gap-2 text-secondary"},Eu={class:"text-xs text-secondary"},Fu={__name:"VisualizeHud",setup(n){const{store:e}=Et(),t=e.display,r=te(()=>e.engine.prediction),i=te(()=>{var w;return e.engine.layersReady||((w=r.value)==null?void 0:w.layers.length)||0}),o=te(()=>r.value?yr(r.value):Rr),s=te(()=>r.value?Ss(r.value):[0,0]),a=te(()=>ct.filter(w=>{var x;return!(w.notInV2&&((x=r.value)==null?void 0:x.settings.model)==="v2")}).map(w=>({label:w.label,value:w.id}))),l=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],u=te(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(w=>w.value!=="3d"||t.view==="particles")),c=te({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:w=>t.plane=w}),g=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],d=te(()=>c.value==="h"||c.value==="3d"&&t.view==="particles"&&t.particles==="white"),h=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],f=te(()=>{const w=Math.round(Number(t.planeOffsetM));return(w>0?"+":"")+w+" m"}),p=te(()=>{var w;return((w=ct.find(x=>x.id===t.variable))==null?void 0:w.ramp)??"turbo"}),y=te(()=>"linear-gradient(to right,"+Array.from({length:17},(w,x)=>"rgb("+qi(p.value,x/16).join(",")+") "+x*100/16+"%").join(",")+")");return(w,x)=>{const m=oi,b=ar,$=an,v=un;return N(),j("div",_u,[r.value?(N(),j(Fe,{key:1},[U(m,{modelValue:_(t).view,"onUpdate:modelValue":x[0]||(x[0]=M=>_(t).view=M),options:l,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),_(t).view!=="off"?(N(),j(Fe,{key:0},[U(m,{modelValue:c.value,"onUpdate:modelValue":x[1]||(x[1]=M=>c.value=M),options:u.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),d.value?(N(),j("div",Su,[x[9]||(x[9]=F("span",{class:"hud-label"},"Height",-1)),U(b,{modelValue:_(t).sliceHeightM,"onUpdate:modelValue":x[2]||(x[2]=M=>_(t).sliceHeightM=M),min:_(Rr),max:o.value,step:_(ae),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),F("span",Bu,D(Number(_(t).sliceHeightM).toFixed(1))+" m",1)])):Z("",!0),c.value==="v"?(N(),j("div",Iu,[x[10]||(x[10]=F("span",{class:"hud-label"},"Position",-1)),U(b,{modelValue:_(t).planeOffsetM,"onUpdate:modelValue":x[3]||(x[3]=M=>_(t).planeOffsetM=M),min:s.value[0],max:s.value[1],step:_(z),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),F("span",Cu,D(f.value),1)])):Z("",!0)],64)):Z("",!0),_(t).view!=="off"?(N(),j(Fe,{key:1},[_(t).view==="particles"?(N(),j("div",Pu,[x[11]||(x[11]=F("span",{class:"hud-label"},"View mode",-1)),U(m,{modelValue:_(t).particles,"onUpdate:modelValue":x[4]||(x[4]=M=>_(t).particles=M),options:g,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])])):Z("",!0),F("div",Au,[x[12]||(x[12]=F("span",{class:"hud-label"},"Density",-1)),U(m,{modelValue:_(t).density,"onUpdate:modelValue":x[5]||(x[5]=M=>_(t).density=M),options:h,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),U($,{modelValue:_(t).paused,"onUpdate:modelValue":x[6]||(x[6]=M=>_(t).paused=M),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):Z("",!0),_(t).view!=="off"?(N(),j(Fe,{key:2},[U(v,{class:"!my-0"}),U(m,{modelValue:_(t).variable,"onUpdate:modelValue":x[7]||(x[7]=M=>_(t).variable=M),options:a.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),_(e).legend?(N(),j("div",Tu,[F("div",{class:"colorbar",style:on({background:y.value})},null,4),F("div",Ru,[F("span",null,D(_(e).legend.low.toFixed(2)),1),F("strong",null,D(_(e).legend.legend)+" ("+D(_(e).legend.unit)+")",1),F("span",null,D(_(e).legend.high.toFixed(2)),1)])])):Z("",!0)],64)):Z("",!0),U(v,{class:"!my-0"}),U($,{modelValue:_(t).showSurroundings,"onUpdate:modelValue":x[8]||(x[8]=M=>_(t).showSurroundings=M),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),F("p",Eu,[oe(D(_(cr)[r.value.settings.model])+" · 3D wind up to "+D(o.value.toFixed(0))+" m · "+D(i.value)+" / "+D(r.value.settings.layers.length)+" layers · "+D((r.value.milliseconds/1e3).toFixed(1))+" s ",1),r.value.grid.mainDomain?(N(),j(Fe,{key:0},[oe(" · solid outline: main area, dashed: "+D((r.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):Z("",!0)])],64)):(N(),j("p",ku,"Run a prediction to see the 3D wind."))])}}},Lu=ur(Fu,[["__scopeId","data-v-2ce8fe1f"]]),Du={class:"space-y-2"},zu={key:0,class:"text-xs text-secondary"},Ou={class:"grid grid-cols-2 gap-2"},Uu={__name:"DownloadsHud",setup(n){const{store:e,download:t}=Et(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(o){const s=e.engine;return e.downloading||s.downloading||o!=="model"&&(s.busy||!s.prediction)}return(o,s)=>{const a=It,l=Ct,u=Pt;return N(),j("div",Du,[_(e).grid?(N(),j(Fe,{key:1},[F("div",Ou,[(N(),j(Fe,null,ui(r,c=>U(a,{key:c.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":c.label,disabled:i(c.id),onClick:g=>_(t)(c.id)},{default:ne(()=>[oe(D(c.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),_(e).downloading?(N(),je(l,{key:0,indeterminate:"","aria-label":"Preparing download"})):Z("",!0),_(e).downloadError?(N(),je(u,{key:1,color:"danger"},{default:ne(()=>[oe(D(_(e).downloadError),1)]),_:1})):Z("",!0)],64)):(N(),j("p",zu,"Choose a simulation area before downloading its model."))])}}},Nu={class:"flume-hud-stack"},Xu={class:"flume-heading city-glass"},Yu={class:"flume-heading__row"},Wu={key:0,class:"flume-info"},Gu={class:"flume-info__title"},ju={class:"flume-info__copyright"},qu=["href"],Hu={class:"text-xs normal-case text-secondary"},Vu={class:"text-xs normal-case text-secondary"},Ku={key:0,class:"flume-status"},Zu={__name:"FlumeCityView",setup(n){const{mapElement:e,store:t,controls:r,locked:i,area:o}=Qa(),{controlsVisible:s}=r,{currentPresetName:a}=si(),l=te(()=>a.value==="dark"),u=vt(!1),c=te(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),g={particles:"Particles",slice:"Slice",off:"Off"},d=te(()=>t.engine.prediction?g[t.display.view]:""),h={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(f,p)=>{const y=It,w=Pt,x=Ct;return N(),j("section",{class:fn(["flume-page map-glass",{"map-glass--dark":l.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=dn((...m)=>_(o).stopSelection&&_(o).stopSelection(...m),["esc"]))},[ln(F("div",Nu,[F("header",Xu,[F("div",Yu,[p[2]||(p[2]=F("h1",null,"Flume City",-1)),U(y,{preset:"secondary",color:"textPrimary",size:"small",icon:u.value?"mso-close":"mso-info","aria-label":u.value?"Hide Flume City information":"Show Flume City information","aria-expanded":u.value,onClick:p[0]||(p[0]=m=>u.value=!u.value)},null,8,["icon","aria-label","aria-expanded"])]),u.value?(N(),j("div",Wu,[F("p",Gu,D(h.title),1),F("p",null,D(h.authors),1),F("p",null,D(h.summary),1),U(y,{preset:"secondary",size:"small",icon:"mso-description",href:h.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:ne(()=>[...p[3]||(p[3]=[oe("arXiv",-1)])]),_:1},8,["href"]),F("div",ju,[F("p",null,[p[4]||(p[4]=oe(" Developed and maintained by ",-1)),F("a",{href:_(dt).lab.url,target:"_blank",rel:"noopener"},D(_(dt).lab.name),9,qu),p[5]||(p[5]=F("br",null,null,-1)),oe("("+D(_(dt).lead)+") ",1)]),F("p",null,D(_(dt).place),1)])])):Z("",!0)]),U(ft,{title:"1 · Simulation area",inert:_(i),collapsed:!!_(t).grid},{default:ne(()=>[U(lu)]),_:1},8,["inert","collapsed"]),U(ft,{title:"2 · Wind configuration",collapsed:!_(t).grid},{"header-extra":ne(()=>[F("span",Hu,D(c.value),1)]),default:ne(()=>[U(Mu)]),_:1},8,["collapsed"]),U(ft,{title:"3 · Wind visualization",collapsed:!_(t).engine.prediction},{"header-extra":ne(()=>[F("span",Vu,D(d.value),1)]),default:ne(()=>[U(Lu)]),_:1},8,["collapsed"]),U(ft,{title:"4 · Downloads",collapsed:!_(t).grid},{default:ne(()=>[U(Uu)]),_:1},8,["collapsed"]),_(t).error&&!_(t).grid?(N(),je(w,{key:0,color:"danger"},{default:ne(()=>[oe(D(_(t).error),1)]),_:1})):Z("",!0)],512),[[cn,_(s)]]),F("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),U(Cn,{controls:_(r),shown:_(t).mapCreated,disabled:_(i)},null,8,["controls","shown","disabled"]),!_(t).mapReady&&!_(t).error?(N(),j("div",Ku,[U(x,{indeterminate:"","aria-label":"Loading Flume map"})])):Z("",!0)],34)}}},gl=ur(Zu,[["__scopeId","data-v-5462f93b"]]);export{gl as default};
