import{k as ge,p as xt,s as Ne,j as Mt,v as tn,x as In,l as Y,m as nt,a2 as Tn,a3 as Fn,o as R,c as U,a as P,b as E,u as v,w as Z,d as oe,t as F,i as X,h as Be,a4 as nn,P as En,W as _t,R as rn,C as on,O as ot,D as st,_ as $t,M as Rn,e as Ln,F as Fe,r as sn,n as Dn,Q as Vn,X as On,Y as zn,a5 as qe,a0 as Un,I as Nn,V as Gn}from"./index-DrPdeLhs.js";import{r as jn,l as Hn,m as an,s as Xn,b as Wn,u as Yn,a as qn,_ as ke,M as Ke}from"./mapbox-gl-geocoder-C8gh--uK.js";import{z as Kn}from"./archive-Dz16c6AW.js";import{d as Zn}from"./download-B6B1Q6H-.js";import{m as xe,c as It,B as Qn,Q as lt,a as Jn,s as er,M as ln,b as tr,d as rt,L as Le,C as be,e as nr,f as rr,A as ir,g as or,r as un,F as cn,h as dn,G as sr,P as ar,p as fn,i as kt,j as We,l as Tt,v as lr,V as Ye,k as ur,n as cr,o as dr,q as gn,t as fr,u as Ft,w as gr,x as pr,y as Et,z as hr,D as mr,E as pn,S as Rt,H as hn,I as Lt,J as ut,K as mn,N as yr,O as wr,R as Dt,T as br,U as vr,W as xr,X as Mr,Y as _r,Z as Vt,_ as Ot,$ as zt,a0 as $r,a1 as kr,a2 as Sr}from"./volumeSource-DNtrUhsT.js";import{M as ct}from"./mapbox-gl-draw-CaSdvSJs.js";import{D as yn,d as Br,a as Pr,S as Ar}from"./drawShapes-iQ4QgmOK.js";import{a as it}from"./projection-CdzuvAui.js";import{M as Ut,P as Ze,V as pe,S as Cr,C as Ir,a as Tr,m as Fr,i as Er,n as Rr,o as dt,k as gt,W as Lr,D as Nt,R as Gt,c as Dr,L as jt,H as Vr,B as Or,d as zr,l as Ur}from"./MapActions-Ix3Q_LjU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./orient2d-DArCjZZA.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";const he="flume-detailed-buildings",me="flume-region-domain",Qe="flume-main-domain";function pt(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(he)&&n.removeLayer(he),n.getSource(he)&&n.removeSource(he);return}n.getSource(he)?n.getSource(he).setData(e):n.addSource(he,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(he)||n.addLayer({id:he,type:"fill-extrusion",source:he,minzoom:0,paint:{"fill-extrusion-color":xe().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function Nr(n,e){if(!e){n.getLayer(Qe)&&n.removeLayer(Qe),n.getLayer(me)&&n.removeLayer(me),n.getSource(me)&&n.removeSource(me);return}const r={type:"FeatureCollection",features:e.mainDomain?[{...e.polygon,properties:{role:"outer"}},{...e.mainDomain.polygon,properties:{role:"main"}}]:[{...e.polygon,properties:{role:"main"}}]};n.getSource(me)?n.getSource(me).setData(r):(n.addSource(me,{type:"geojson",data:r}),n.addLayer({id:me,type:"line",source:me,filter:["==",["get","role"],"outer"],paint:{"line-color":xe().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),n.getLayer(Qe)||n.addLayer({id:Qe,type:"line",source:me,filter:["==",["get","role"],"main"],paint:{"line-color":xe().mainArea,"line-width":3}})}const Ht=["draw.create","draw.update","draw.delete"];function Gr({getMap:n,ready:e,onChange:t,accessToken:r}){const i=Mt({source:"concordia",bufferPercent:Qn*100,shape:"polygon",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let l=null,o=!1,f=null,u=0,a=null;function g(C=!1){u++,f==null||f.abort(),C||(a=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function h(){const C=n();!C||!e.value||(pt(C,a==null?void 0:a.preview),Nr(C,i.region??(a==null?void 0:a.area)??null))}function c(){return(a==null?void 0:a.preview)??null}function d(C){g(!i.region&&!i.snapshot),i.error="";try{i.region=Ne(It(C))}catch(T){i.region=null,i.error=T.message}h()}function s(C){var j;if(o||!l)return;const T=(j=C.features)==null?void 0:j.at(-1);if(C.type==="draw.create"&&T)for(const H of l.getAll().features)H.id!==T.id&&l.delete(H.id);const z=l.getAll().features.find(H=>H.geometry.type==="Polygon");z?(d(z),l.deleteAll()):(g(),i.region=null,h()),i.drawing=!1}function p(C){i.drawing=Pr.has(C.mode)}function y(){const C=n();if(!C||!e.value)throw new Error("Wait for the map to load.");if(!l){const T={...ct.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};l=new ct({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...ct.modes,...Ar,simple_select:T},styles:Br(xe().mainArea,xe().drawFillOpacity)}),C.addControl(l,"bottom-left");for(const z of Ht)C.on(z,s);C.on("draw.modechange",p)}return l}function w(){const C=n();if(!(!l||!C)){for(const T of Ht)C.off(T,s);C.off("draw.modechange",p),C.removeControl(l),l=null,i.drawing=!1}}function _(){var C;if(!i.loading)try{const T=y();n().stop(),g(!i.region&&!i.snapshot),i.region=null,T.deleteAll(),h(),T.changeMode(((C=yn.find(z=>z.value===i.shape))==null?void 0:C.mode)??"draw_polygon"),i.drawing=!0,i.error=""}catch(T){i.error=T.message}}function m(){l&&l.changeMode("simple_select"),i.drawing=!1}function x(){var C;(C=n())==null||C.stop(),l==null||l.deleteAll(),l==null||l.changeMode("simple_select"),i.drawing=!1,g(),i.region=null,i.error="",h()}async function M(C){const T=new AbortController,z=u;f=T,i.loading=!0,i.progress=0,i.error="";const j=()=>o||T.signal.aborted||z!==u;try{return await C({signal:T.signal,epoch:z,isStale:j})}catch(H){return T.abort(),!o&&z===u&&H.name!=="AbortError"&&(i.error=H.message),null}finally{f===T&&(f=null,o||(i.loading=!1))}}async function b(C,T,{signal:z,epoch:j,isStale:H}){if(z.throwIfAborted(),(a==null?void 0:a.source)===T){const[D,W,Q,ie]=C.bounds,J=a.area.bounds;if(D>=J[0]&&W>=J[1]&&Q<=J[2]&&ie<=J[3])return a.tiles}const se=n(),V=T==="osm"?"composite":"city-concordia",L=jn({map:se,sourceId:V,source:T,bounds:C.bounds})??await Hn({sourceConfig:se.getStyle().sources[V],source:T,bounds:C.bounds,accessToken:r,signal:z,paddingTiles:1,onProgress:D=>{j===u&&(i.progress=D)}});if(H())throw new DOMException("Cancelled","AbortError");const N=rt(L.features);return a={source:T,area:C,tiles:L,preview:N},i.loadedArea=Ne({source:T,bounds:[...C.bounds],extentM:[...C.extentM],count:N.features.length,fromMap:!!L.fromMap}),h(),L}function k(C){var j;const T=n(),z=T.getCanvas().clientWidth;(j=T.resize)==null||j.call(T),T.fitBounds([C.bounds.slice(0,2),C.bounds.slice(2,4)],{padding:z>=640?{top:40,bottom:40,left:Math.min(320,z*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function A(){if(i.loading||o)return null;const C=n();if(!C||!e.value)return i.error="Wait for the map to load.",null;const T=i.source;return M(async z=>{const j=lt/2,H=C.getCenter().wrap().toArray(),se=it(H)([-j,-j]),V=Jn(se,it(se)([lt,lt]));return k(V),await b(V,T,z),z.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function S(){if(i.loading||o)return null;!i.region&&(a==null?void 0:a.source)===i.source&&d(a.area.polygon);const C=n(),T=i.region,z=i.source;return!C||!e.value||!T?(i.error="Draw and finish a valid polygon first.",null):M(async j=>{const H=It(T.selection??T.polygon);let se=H,V,de;for(let D=0;D<4;D++){if(de=await b(se,z,j),j.isStale())return null;V=er(de.features,H);const[W,Q,ie,J]=V.bounds,q=de.coverageBounds,fe=1e-8;if(W>q[0]+fe&&Q>q[1]+fe&&ie<q[2]-fe&&J<q[3]-fe||!V.buildings.features.length)break;if(D===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");se=V}const L=Math.min(Math.max(Number(i.bufferPercent)||0,0),ln*100)/100;V=tr(V,L),V.source=z,V.dataZoom=de.zoom,V.tileCount=de.tileCount,V.surroundings=rt(V.surroundings.features),V.warnings=V.warnings.filter(D=>!D.startsWith("Loaded map tiles only"));const N=de.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return V.warnings.push(N+de.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(V.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=Ne(V),i.region=Ne({origin:V.origin,bounds:V.bounds,extentM:V.extentM,polygon:V.polygon,selection:V.selection,mainDomain:V.mainDomain,buffer:V.buffer}),h(),k(V),t==null||t(),V})}function $(){f==null||f.abort(),w()}function I(){h(),y()}function B(){o=!0,u++,f==null||f.abort(),w()}return ge(()=>i.source,()=>{g(),h(),i.error=""}),xt(B),{state:i,startSelection:_,stopSelection:m,clearSelection:x,setSelection:d,captureRegion:S,loadBuildings:A,getPreview:c,restore:I,beforeStyleChange:$}}const wn=14,Xt=Math.round(nr/Le),jr=(n,e,t)=>-1e4+(n*65536+e*256+t)*.1;function Hr(n,e){const t=2**wn,r=e*Math.PI/180;return[(n+180)/360*t,(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*t]}async function Xr(n,e,t,r){const i=`https://api.mapbox.com/v4/mapbox.mapbox-terrain-dem-v1/${wn}/${n}/${e}@2x.pngraw?access_token=${encodeURIComponent(t)}`,l=await fetch(i,{signal:r});if(!l.ok)throw new Error(`Terrain data request failed (HTTP ${l.status}).`);const o=await createImageBitmap(await l.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),u=new OffscreenCanvas(o.width,o.height).getContext("2d",{willReadFrequently:!0});u.drawImage(o,0,0);const{data:a}=u.getImageData(0,0,o.width,o.height),g=new Float32Array(o.width*o.height);for(let h=0;h<g.length;h++)g[h]=jr(a[4*h],a[4*h+1],a[4*h+2]);return{heights:g,size:o.width}}async function Wr(n,e,t){const r=it(n.origin),i=n.nx*n.ny,l=new Float64Array(i*2);let o=1/0,f=1/0,u=-1/0,a=-1/0;for(let y=0;y<n.ny;y++)for(let w=0;w<n.nx;w++){const[_,m]=Hr(...r([(w+.5)*be,(y+.5)*be])),x=y*n.nx+w;l[2*x]=_,l[2*x+1]=m,o=Math.min(o,_),f=Math.min(f,m),u=Math.max(u,_),a=Math.max(a,m)}const g=1/256,h=[];for(let y=Math.floor(f-g);y<=Math.floor(a+g);y++)for(let w=Math.floor(o-g);w<=Math.floor(u+g);w++)h.push([w,y]);const c=new Map;await Promise.all(h.map(async([y,w])=>c.set(`${y}/${w}`,await Xr(y,w,e,t))));const d=c.values().next().value.size,s=(y,w)=>{const _=Math.floor(y/d),m=Math.floor(w/d);return c.get(`${_}/${m}`).heights[(w-m*d)*d+(y-_*d)]},p=new Float32Array(i);for(let y=0;y<i;y++){const w=l[2*y]*d-.5,_=l[2*y+1]*d-.5,m=Math.floor(w),x=Math.floor(_),M=w-m,b=_-x;p[y]=(s(m,x)*(1-M)+s(m+1,x)*M)*(1-b)+(s(m,x+1)*(1-M)+s(m+1,x+1)*M)*b}return p}function Yr(n,e){let t=1/0,r=-1/0;for(const f of e)t=Math.min(t,f),r=Math.max(r,f);const i=new Float32Array(n.layers.length),l=new Float32Array(n.layers.length);let o=0;for(let f=0;f<i.length;f++)l[f]=Math.min(Xt,Math.round((e[f]-t)/Le)),i[f]=Math.min(Xt,l[f]+n.layers[f]),o=Math.max(o,i[f]);return{...n,layers:i,groundLayers:l,statistics:{...n.statistics,maximumHeightM:o*Le},terrain:{lowM:t,highM:r}}}const qr=16,Kr=4;function Zr(){let n=null,e=null,t=[];async function r(u){if(n)return;const a="/cityffdv2-demo/flume/model-v2/",[g,h]=await Promise.all(["metadata.json","weights.bin"].map(async c=>{const d=await fetch(a+c,{signal:u});if(!d.ok)throw new Error("Could not load model v2 "+c+" (HTTP "+d.status+").");return c.endsWith(".bin")?d.arrayBuffer():d.json()}));n=await sr.create(),e=g,t=[0,1].map(()=>({predictor:new ar(n,e,h,{batchSize:qr,layerStride:1}),grid:null,key:""}))}async function i(u,a,g,h){const c=g.join(",");(a!==u.grid||c!==u.key)&&(u.predictor.setCity({layers:a.layers,nx:a.nx,ny:a.ny},g),u.grid=a,u.key=c);const{nx:d,ny:s}=a,p=[[-.5,-.5],[d-.5,-.5],[d-.5,s-.5],[-.5,s-.5]];return u.predictor.predict(null,null,h,{polygon:p,overlap:e.inference.overlap})}function l(u,a,g){const h=a.gx*a.gy,c=new Float32Array(h*5),d=new Uint8Array(h),s=g-a.firstLayer;for(let y=0;y<a.gy;y++)for(let w=0;w<a.gx;w++){const _=((y*a.gz+s)*a.gx+w)*Kr,m=y*a.gx+w;c[m*5]=a.values[_],c[m*5+1]=a.values[_+1],c[m*5+2]=a.values[_+2],d[m]=a.values[_+3]>0?0:2}const p={width:a.gx,height:a.gy,originX:a.layout.gridX0,values:c,solid:d};fn(u,u.plan.indexOf(g),p)}async function o(u,a,g,{signal:h,onFirstWave:c,onMoreLayers:d}={}){await r(h),or(a[0],a.at(-1));const s=un(a).slice(0,cn),p=a.filter(x=>s.includes(x)),y=a.filter(x=>!s.includes(x)),w=await i(t[0],u,p,g);if(!w)return null;const _=dn({width:w.gx,height:w.gy,originX:w.layout.gridX0,originY:w.layout.gridY0,theta:g},a,!1);for(const x of p)l(_,w,x);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(c==null||c({volume:_,referenceSpeed:m}),y.length){const x=await i(t[1],u,y,g);if(!x)return null;for(const M of y)l(_,x,M);d==null||d()}return _}async function f(u,a,g){await r(g);const{predictor:h}=t[0],c=h.inputPlan.stored,d=Math.ceil(h.patch*Math.SQRT2),s=new rr(n,u,d,h.fno.store,h.inputPlan),p=s.gx*s.gy*c.length*4;let y=null;s.packGroup=async()=>{y=await n.readBack(p,(m,x)=>m.copyBufferToBuffer(s.sumsBuffer,0,x,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(x=>x/ir))};try{const m=s.planGroups([a],h.bufferLimit);s.allocate(m),await s.scan(m[0],()=>{})}finally{s.destroy()}if(!y)throw new Error("Model v2 MDDF could not be read.");const w=c.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:y,ny:s.gy,nx:s.gx,margin:d,layerIndex:a,channels:w,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:o,readMddf:f,cancel(){for(const u of t)u.predictor.cancel()},destroy(){for(const u of t)u.predictor.destroy();n==null||n.device.destroy(),t=[],n=null}}}const De=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class Ve extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const ce=()=>new Ve(De.MODEL,"the model data does not match this page"),O=256;class St{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Ve(De.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(l=>setTimeout(l,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new Ve(De.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new St(i,r)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const r=Math.max(4,Math.ceil(e/4)*4),i=this.device.createBuffer({size:r,usage:t});return i.tracked=!0,i}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),l=new Int32Array(r),o=new Float32Array(r);e.forEach(([u,a],g)=>{u==="u"?i[g]=a:u==="i"?l[g]=a:o[g]=a});const f=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(f,0,r),f}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,l=O){this.dispatchGroups(e,t,r,...this.workgroups(i,l))}workgroups(e,t=O){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((l,o)=>({binding:o,resource:{buffer:l}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r){const i=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),l=this.device.createCommandEncoder();t(l,i),this.device.queue.submit([l.finish()]);try{await i.mapAsync(GPUMapMode.READ);const o=await r(i.getMappedRange());return i.unmap(),o}finally{this.free(i)}}}const ht=4,Ge=1.5;function bn(n,e,t){const r=(e-1)/2,i=(t-1)/2,l=Math.cos(n),o=Math.sin(n);return{theta:n,cX:r,cY:i,cos:l,sin:o,toWind:([f,u])=>{const a=f-r,g=u-i;return[r+a*l+g*o,i-a*o+g*l]},toCity:([f,u])=>{const a=f-r,g=u-i;return[r+a*l-g*o,i+a*o+g*l]}}}const re=64,te=180,vn=1600,Qr=640,ye=8,G=32,ve=n=>n.toFixed(6),we=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Jr=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,ei=()=>`
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
@compute @workgroup_size(${re})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${re}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${ve(Ge)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${ve(Ge)}, has1);
  let cutoff = ${ve(vn)};
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
}`;function ti(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${re})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${re}u;
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
}`}const Se=64,ae=8,Ee=Se/ae,le=Ee*Ee,mt=ae*ae,Wt=Math.log2(Se),Yt=Math.log2(ae),Je=ae-1,Bt="15u",yt="4u",xn="0xfffu",wt="2048",ni="4095",Pt="16u",qt=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(we).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${ve(te)} / STEPS[c]));
}
@compute @workgroup_size(${re})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${re}u;
  if (g >= u.nTiles * ${le}u) { return; }
  let t = g / ${le}u;
  let b = g % ${le}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${le}u + b];
  let w = h & ${Bt};
  if (w == 0u) { return; }
  let base = i32((h >> ${yt}) & ${xn}) - ${wt};
  var wi = field[t] + (h >> ${Pt});
  let x0 = tx * ${Se}u + (b % ${Ee}u) * ${ae}u;
  let y0 = ty * ${Se}u + (b / ${Ee}u) * ${ae}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${mt}u; j++) {
    let x = x0 + j % ${ae}u; let y = y0 + j / ${ae}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${Se}u + (b % ${Ee}u) * ${ae}u;
  let y0 = ty * ${Se}u + (b / ${Ee}u) * ${ae}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${mt}u; j++) {
    let x = x0 + j % ${ae}u; let y = y0 + j / ${ae}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${le}u + b] = w | (u32(clamp(mn + ${wt}, 0, ${ni})) << ${yt});`}
}`,ri=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${re})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${re}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${le}u; b++) {
    let h = headers[t * ${le}u + b];
    headers[t * ${le}u + b] = h | (local << ${Pt});
    local += ${mt/32}u * (h & ${Bt});
  }
  tileWords[t] = local;
}`,ii=n=>{const e=`array<f32, ${ye}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Jr}
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
@compute @workgroup_size(${re})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${re}u;
  let groupsPerPixel = (u.layerCount + ${ye-1}u) / ${ye}u;
  let cells = ${G*G}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${G} + i32(cell % ${G}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${G} + i32(cell / ${G}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${ye}u;
  let count = min(${ye}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${ye}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${ve(Ge)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${ve(ht)};
    let gyr = u.sinU / ${ve(ht)};
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
    let cutoff = ${ve(vn)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${ye}>;
    for (var k = 0u; k < ${ye}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${Qr}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${ye}u; k++) {
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
}`},oi=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:l}=e,o=[["field","array<u32>"]];l&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),i&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const f=o.map(([g,h],c)=>`@group(0) @binding(${c}) var<storage, read> ${g}: ${h};`);f.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${n}>;`),f.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const u=(g,h)=>`(${g} - ${we(h.center)}) / ${we(h.scale)}`,a=e.inputs.map((g,h)=>{let c;if(g.source==="r1")if(g.part==="dc")c=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(g.signal,"dc",0)}u)`,g)};`;else{const d=e.storedIndex(g.signal,"re",g.mode),s=e.storedIndex(g.signal,"im",g.mode);c=`let re = sampleField(ry, rx, slot, ${d}u);
      let im = sampleField(ry, rx, slot, ${s}u);
      let angle = ${we(g.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(g.part==="im"?"(re * s + im * c)":"(re * c - im * s)",g)};`}else if(g.source==="geo"){const d=g.index===0?"h / 100.0":"asinh((h - z) / 10.0)";c=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${d})`,g)};`}else g.source==="up"?c=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(g.index)}u)`,g)};`:g.source==="solid"?c=`let roofLayer = round(roofHeight(iy, ix) / ${ve(Ge)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:g.axis==="y"?c=`value = (sy - u.centreY) / ${we(g.scale)};`:g.axis==="z"?c=`value = (f32(layer) - ${we(g.center)}) / ${we(g.scale)};`:c=`value = (sx - ${we(g.center)}) / ${we(g.scale)};`;return`    case ${h}u: {
      ${c}
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
${f.join(`
`)}
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(we).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${Wt}u)) * ${t.tx}u + (x >> ${Wt}u);
  let h = field[u.packTiles + t * ${le}u + ((y >> ${Yt}u) & ${Je}u) * ${Ee}u + ((x >> ${Yt}u) & ${Je}u)];
  let w = h & ${Bt};
  var q = i32((h >> ${yt}) & ${xn}) - ${wt};
  if (w > 0u) {
    let bit = (((y & ${Je}u) * ${ae}u) + (x & ${Je}u)) * w;
    let word = field[t] + (h >> ${Pt}) + (bit >> 5u);
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
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(G)}u) >= u.upTW || u32(ty >> ${Math.log2(G)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(G)}u) * u.upTW + u32(tx >> ${Math.log2(G)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${G*G}u + u32(ty & ${G-1}) * ${G}u + u32(tx & ${G-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${l?`fn roofHeight(iy: f32, ix: f32) -> f32 {
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
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
  let z = (f32(layer) + 0.5) * ${ve(Ge)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${a.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},si=4,ai=3,li=.016,ui=256;class Mn{constructor(e,{layers:t,ny:r,nx:i},l,o,f){this.context=e,this.inputPlan=f,this.ny=r,this.nx=i,this.margin=l,this.gy=r+2*l,this.gx=i+2*l;const u=new Float32Array(this.gy*this.gx);for(let s=0;s<r;s++)for(let p=0;p<i;p++)u[(s+l)*this.gx+p+l]=t[s*i+p]*Ge;this.heightBuffer=e.upload(u);const a=new Float32Array(te),g=new Float32Array(te);for(let s=0;s<te;s++)a[s]=Math.cos(2*Math.PI*s/te),g[s]=Math.sin(2*Math.PI*s/te);this.cosT=a,this.sinT=g,this.scanPipeline=e.pipeline(ei()),this.accumulatePipeline=e.pipeline(ti(f.stored)),this.upWind=f.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(ii(f.up)));const h=f.stored.map(s=>2*li*s.scale),c=Math.ceil(this.gx/Se),d=Math.ceil(this.gy/Se);this.packed={steps:h,tx:c,ty:d},this.packHeaderPipeline=e.pipeline(qt(f.stored,h,c,d,!1)),this.packPayloadPipeline=e.pipeline(qt(f.stored,h,c,d,!0)),this.packTilePipeline=e.pipeline(ri()),this.assemblePipeline=e.pipeline(oi(o,f,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let l=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(l=Math.min(l,si),i>t)throw new Ve(De.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let f=0;f<e.length;f+=l){const u=e.slice(f,f+l),a=new Int32Array(ui).fill(-1);u.forEach((g,h)=>{a[g]=h}),o.push({layers:u,slots:a,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots),r.layerBuffer=t.upload(new Uint32Array(r.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(te*r),l=new ArrayBuffer(te*32),o=new Uint32Array(l),f=new Int32Array(l),u=new Float32Array(l),a=new Float32Array(te*4);let g=0;for(let h=0;h<te;h++){const c=this.cosT[h],d=this.sinT[h],s=Math.abs(c)>=Math.abs(d),p=s?c:d,y=s?d:c,w=Math.abs(y/p),_=s?e:t,m=s?t:e;for(let b=0;b<_;b++)i[h*r+b]=Math.round(w*b);const x=i[h*r+_-1],M=m+x;g=Math.max(g,M),o[8*h]=s?1:0,f[8*h+1]=p>=0?1:-1,f[8*h+2]=y>=0?1:-1,f[8*h+3]=x,o[8*h+4]=M,o[8*h+5]=h*r,u[8*h+6]=ht*Math.sqrt(1+w*w),a.set([c,d,Math.cos(4*Math.PI*h/te),Math.sin(4*Math.PI*h/te)],4*h)}return this.offsetBuffer=this.context.upload(i),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(a),this.scanInfo={lineMax:g},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:r,gy:i}=this,{lineMax:l}=this.scanTables(),o=r*i,f=this.inputPlan.stored.length,u=e.layers.length,a=Math.ceil(u/2),g=Math.max(1,Math.min(te,Math.floor(this.scanRawBytes/(a*o*4)))),h=g*a*o*4,c=u*o*f*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<c)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(c));const d=t.device.createCommandEncoder();d.clearBuffer(this.sumsBuffer,0,u*o*f*4),t.device.queue.submit([d.finish()]);const s=[];for(let p=0;p<te;p+=g){if(this.destroyed)return;const y=Math.min(g,te-p),w=t.device.createCommandEncoder(),_=w.beginComputePass(),m=t.uniform([["u",r],["u",i],["u",o],["u",0],["u",u],["u",a],["u",p],["u",y],["u",l],["u",0],["u",0],["u",0]]);t.dispatch(_,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],l*a*y,re);const x=t.uniform([["u",o],["u",u],["u",a],["u",p],["u",y],["u",0],["u",0],["u",0]]);t.dispatch(_,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,x],o*u,re),_.end(),t.device.queue.submit([w.finish()]),s.push(t.device.queue.onSubmittedWorkDone()),s.length>=ai&&await s.shift()}this.destroyed||(await this.packGroup(e,u,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:l,gy:o}=this,{tx:f,ty:u}=this.packed,a=t*this.inputPlan.stored.length*f*u,g=i.storage(a*le*4),h=i.storage(a*4),c=i.uniform([["u",l],["u",o],["u",r],["u",t],["u",a],["u",0],["u",0],["u",0]]),d=i.uniform([["u",a],["u",0],["u",0],["u",0]]),s=()=>{i.free(g),i.free(h)},p=(b,k)=>{const A=b.beginComputePass();i.dispatch(A,this.packHeaderPipeline,[this.sumsBuffer,g,c],a*le,re),i.dispatch(A,this.packTilePipeline,[g,h,d],a,re),A.end(),b.copyBufferToBuffer(h,0,k,0,a*4)};let y;try{y=await i.readBack(a*4,p,b=>this.destroyed?null:new Uint32Array(b.slice(0)))}catch(b){throw s(),b}if(!y){s();return}const w=new Uint32Array(a);let _=a+a*le;for(let b=0;b<a;b++)w[b]=_,_+=y[b];i.free(e.field),e.field=i.storage(Math.max(4,_*4)),e.packTiles=a,i.write(e.field,w);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(g,0,e.field,a*4,a*le*4);const x=m.beginComputePass(),M=i.uniform([["u",l],["u",o],["u",r],["u",t],["u",a],["u",0],["u",0],["u",0]]);i.dispatch(x,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],a*le,re),x.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),s()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*te,i=Math.round(r)%te;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=bn(e,this.nx,this.ny);let i=1/0,l=-1/0,o=1/0,f=-1/0;for(const c of[-.5,this.nx-.5])for(const d of[-.5,this.ny-.5]){const[s,p]=r.toWind([c,d]);i=Math.min(i,s),l=Math.max(l,s),o=Math.min(o,p),f=Math.max(f,p)}const u=Math.floor((i-t)/G)*G,a=Math.floor((o-t)/G)*G,g=Math.ceil((l+t+1-u)/G),h=Math.ceil((f+t+1-a)/G);return{theta:e,x0:u,y0:a,tw:g,th:h,table:new Int32Array(g*h).fill(-1),count:0}}ensureUpTiles(e,t,r,i){const{context:l}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,i));const f=[];for(const[m,x]of r){const M=Math.floor((x-o.x0)/G),b=Math.floor((x+i-1-o.x0)/G),k=Math.floor((m-o.y0)/G),A=Math.floor((m+i-1-o.y0)/G);if(M<0||k<0||b>=o.tw||A>=o.th)throw new Error("internal layout error");for(let S=k;S<=A;S++)for(let $=M;$<=b;$++){const I=S*o.tw+$;o.table[I]<0&&(o.table[I]=o.count+f.length/3,f.push($,S,o.table[I]))}}const u=f.length/3;if(!u)return 0;const a=o.count,g=a+u,h=this.inputPlan.up.length,c=G*G,d=l.device.createCommandEncoder(),s=[];for(const m of e){const x=m.layers.length*c*h*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<g){const M=Math.min(o.tw*o.th,Math.max(g,Math.ceil(m.upCapacity*1.5))),b=l.storage(M*x);m.upTiles&&m.upCount&&d.copyBufferToBuffer(m.upTiles,0,b,0,m.upCount*x),m.upTiles&&s.push(m.upTiles),m.upTiles=b,m.upCapacity=M}m.upGrid=o,d.clearBuffer(m.upTiles,a*x,u*x),m.upCount=g}const p=l.upload(new Int32Array(f)),[y,w]=this.upwindDirection(t),_=d.beginComputePass();for(const m of e){const x=[this.heightBuffer,m.layerBuffer,m.upTiles,p];l.dispatch(_,this.alongPipeline,[...x,l.uniform([["u",this.gx],["u",this.gy],["u",u],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",y],["f",w],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*c*Math.ceil(m.layers.length/ye),re)}_.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(l.free(this.upTableBuffer),this.upTableBuffer=l.storage(o.table.byteLength)),l.write(this.upTableBuffer,o.table),l.device.queue.submit([d.finish()]);for(const m of s)l.free(m);return l.free(p),o.count=g,u}assemble(e,t,r,i,l,o){var y,w,_,m;const{context:f,inputPlan:u,gx:a,gy:g}=this,h=t.length/3,c=f.upload(t),d=f.uniform([["u",h],["u",u.inputs.length],["u",l],["u",l],["u",a],["u",g],["u",0],["u",0],["u",a],["u",g],["u",a*g],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((y=this.upGrid)==null?void 0:y.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((_=this.upGrid)==null?void 0:_.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),s=[r.field];if(u.usesHeight&&s.push(this.heightBuffer),s.push(c,r.slotBuffer),u.up.length){if(r.upGrid!==this.upGrid)throw new Error("internal layout error");s.push(r.upTiles,this.upTableBuffer)}s.push(o,d);const p=e.beginComputePass();return f.dispatch(p,this.assemblePipeline,s,h*u.inputs.length*l*l),p.end(),c}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function ci(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw ce();const t=[],r=(u,a,g)=>t.findIndex(h=>h.key===`${u}:${a}:${g}`),i=(u,a,g)=>{r(u.signal,a,g)>=0||t.push({key:`${u.signal}:${a}:${g}`,signal:u.signal,part:a,mode:g,scale:u.scale})},l=[];for(const u of e){if(u.source==="r1")u.part==="dc"?i(u,"dc",0):(i(u,"re",u.mode),i(u,"im",u.mode));else if(u.source==="up")l.includes(u.index)||l.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw ce();if(u.source==="geo"&&![0,1].includes(u.index)||u.source==="up"&&!(u.index>=0&&u.index<4))throw ce()}for(const u of t)if(u.mode>2)throw ce();const o=[...new Set(t.map(u=>u.signal))].sort();if(o.length!==1||o[0]!==0)throw ce();const f=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:l,usesHeight:f}}function bt(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let Ce=null;function di(){if(Ce)return Ce;Ce=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?Ce[n]=e*r*2**-24:t===31?Ce[n]=r?NaN:e*(1/0):Ce[n]=e*(1+r/1024)*2**(t-15)}return Ce}function fi(n){const e=new Float32Array(n.length),t=di();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function gi(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const l=r[0],o=l>>>16&32768,f=l>>>23&255;let u=l&8388607;if(f===255){e[i]=o|31744|(u?1:0);continue}const a=f-127+15;if(a>=31){e[i]=o|31744;continue}if(a<=0){if(a<-10){e[i]=o;continue}u|=8388608;const h=14-a;let c=u>>>h;u>>>h-1&1&&(c+=1),e[i]=o|c;continue}let g=a<<10|u>>>13;u&4096&&(g+=1),e[i]=o|g}return e}const At=`
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
`,pi=`
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
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`;function Kt(n,e,t){const{enable:r,load:i,save:l}=je(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${O}>;
@compute @workgroup_size(${O})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${O}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${O/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${O}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${O/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${O}u) {
    Y[base + i] = ${l("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const vt=32,Zt=1e-5,tt=16;function je(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function hi(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:l,save:o}=je(e);return`${i}${At}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${tt}u;
var<workgroup> w: array<f32, ${tt*n.cinMax}>;
@compute @workgroup_size(${O})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/O}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/O}u;
  let p = (wg % ${r/O}u) * ${O}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${O}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${l("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${tt}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${l("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${l("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${o("v")};
  }
}`}function mi(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:l,save:o}=je(e);return`${i}${At}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${l("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${l("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function yi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:l,load:o}=je(e);return`${l}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`}function wi(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`}function bi(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`}function vi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:l,save:o}=je(e);return`${l}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
  Y[g] = ${o("acc * "+1/vt)};
}`}function xi(n){const{store:e}=n,{enable:t,load:r,save:i}=je(e);return`${t}${At}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function Mi(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:hi(n),gate:mi(n),instanceNorm:Kt(e,r,Zt),instanceNormScaled:Kt(e,r,Zt/(vt*vt)),forwardColumns:yi(n),rowMix:wi(n),spectralMix:bi(n),inverseColumns:vi(n),residual:xi(n)}}function _i(n,e,t){const r=2*e,i=[];for(let d=0;d<e;d++)i.push(d);for(let d=n-e;d<n;d++)i.push(d);const l=new Float32Array(n*t),o=new Float32Array(n*t);for(let d=0;d<n;d++)for(let s=0;s<t;s++){const p=2*Math.PI*d*s/n;l[d*t+s]=Math.cos(p),o[d*t+s]=-Math.sin(p)}const f=new Float32Array(r*n),u=new Float32Array(r*n);for(let d=0;d<r;d++)for(let s=0;s<n;s++){const p=2*Math.PI*i[d]*s/n;f[d*n+s]=Math.cos(p),u[d*n+s]=-Math.sin(p)}const a=new Float32Array(n*r),g=new Float32Array(n*r);for(let d=0;d<n;d++)for(let s=0;s<r;s++){const p=2*Math.PI*i[s]*d/n;a[d*r+s]=Math.cos(p)/n,g[d*r+s]=Math.sin(p)/n}const h=new Float32Array(t*n),c=new Float32Array(t*n);for(let d=0;d<t;d++){const s=(d===0?1:2)/n;for(let p=0;p<n;p++){const y=2*Math.PI*d*p/n;h[d*n+p]=s*Math.cos(y),c[d*n+p]=-s*Math.sin(y)}}return{forwardCos:l,forwardSin:o,rowRe:f,rowIm:u,inverseRowRe:a,inverseRowIm:g,inverseColCos:h,inverseColSin:c}}function $i(n,e,t){const r=n.tensors[t];if(!r)throw ce();return fi(new Uint16Array(e,r.offset,r.count))}class ki{constructor(e,t,r,i){const l=t.model;if(this.context=e,this.metadata=t,this.width=l.width,this.depth=l.layers,this.inputChannels=l.input_channels,this.outputChannels=l.output_channels,this.patch=t.inference.patch[0],this.modes1=l.modes[0],this.modes2=l.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%O)throw ce();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[a,g]of Object.entries(Mi(o)))this.pipelines[a]=e.pipeline(g);this.contractPipeline=e.pipeline(pi);const f=a=>$i(t,r,a);this.tables={};for(const[a,g]of Object.entries(_i(this.patch,this.modes1,this.modes2)))this.tables[a]=e.upload(g);this.weights={};const u=(a,g)=>{const h=f(g);this.weights[a]=this.store==="f16"?e.upload(gi(h)):e.upload(h)};u("p1w","a.m1.weight"),u("p1b","a.m1.bias"),u("p2w","a.m2.weight"),u("p2b","a.m2.bias"),u("q1w","b.m1.weight"),u("q1b","b.m1.bias"),u("q2w","b.m2.weight"),u("q2b","b.m2.bias");for(let a=0;a<this.depth;a++)u(`m1w${a}`,`c.${a}.m1.weight`),u(`m1b${a}`,`c.${a}.m1.bias`),u(`m2w${a}`,`c.${a}.m2.weight`),u(`m2b${a}`,`c.${a}.m2.bias`),u(`lw${a}`,`d.${a}.weight`),u(`lb${a}`,`d.${a}.bias`);this.buildSpectralWeights(f),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.factored;let l=i.core_shape.slice(),o=t.upload(e(`${i.core}.re`)),f=t.upload(e(`${i.core}.im`));for(const a of i.factors){const[g,h]=a.shape;if(l[a.mode]!==h)throw ce();const c=l.slice();c[a.mode]=g;const d=c.reduce((b,k)=>b*k,1),s=c.slice(a.mode+1).reduce((b,k)=>b*k,1),p=t.storage(d*4),y=t.storage(d*4),w=t.upload(e(`${a.name}.re`)),_=t.upload(e(`${a.name}.im`)),m=t.uniform([["u",c[0]],["u",c[1]],["u",c[2]],["u",c[3]],["u",c[4]],["u",a.mode],["u",g],["u",h],["u",s],["u",0],["u",d],["u",0]]),x=t.device.createCommandEncoder(),M=x.beginComputePass();t.dispatch(M,this.contractPipeline,[o,f,w,_,p,y,m],d),M.end(),t.device.queue.submit([x.finish()]),t.free(o),t.free(f),t.free(w),t.free(_),o=p,f=y,l=c}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(l.join()!==u.join())throw ce();this.spectralRe=o,this.spectralIm=f}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,l=2*this.modes1,o=c=>t.storage(e*c*r*this.elementBytes),f=c=>t.storage(e*i*c*4),u=o(Math.max(4*i,this.inputChannels,this.outputChannels)),a=o(2*i),g=f(this.patch*this.modes2),h=f(this.patch*this.modes2);this.buffers={x:o(i),input:u,t2:u,gates:u,spectral:u,output:u,wide:a,t1:a,hidden:a,local:a,xRe:g,xIm:h,yRe:f(l*this.modes2),yIm:f(l*this.modes2),zRe:f(l*this.modes2),zIm:f(l*this.modes2),wRe:g,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/tt)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:l}=this,o=this.width,f=this.patch*this.patch,u=2*this.modes1,a=[],g=(c,d,s,p)=>{a.push(t.prepared(c,[...d,t.keptUniform(s)],t.workgroups(p)))},h=(c,d,s=i.instanceNorm)=>{a.push(t.prepared(s,[c,d],[e*o]))};g(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),g(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let c=0;c<this.depth;c++)h(r.x,r.t1),g(i.forwardColumns,[r.t1,l.forwardCos,l.forwardSin,r.xRe,r.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),g(i.rowMix,[r.xRe,r.xIm,l.rowRe,l.rowIm,r.yRe,r.yIm],[["u",e],["u",o],["u",u],["u",this.patch]],e*o*u*this.modes2),g(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",o],["u",2*c],["u",0]],e*o*u*this.modes2),g(i.rowMix,[r.zRe,r.zIm,l.inverseRowRe,l.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",o],["u",this.patch],["u",u]],e*o*this.patch*this.modes2),g(i.inverseColumns,[r.wRe,r.wIm,l.inverseColCos,l.inverseColSin,r.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*f),h(r.t2,r.t1,i.instanceNormScaled),g(i.conv1x1,[r.t1,this.weights[`m1w${c}`],this.weights[`m1b${c}`],r.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),g(i.gate,[r.gates,r.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*f),g(i.conv1x1,[r.hidden,this.weights[`m2w${c}`],this.weights[`m2b${c}`],r.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),g(i.conv1x1,[r.x,this.weights[`lw${c}`],this.weights[`lb${c}`],r.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),g(i.residual,[r.spectral,r.local,r.x],[["u",e*o*f],["u",c<this.depth-1?1:0],["u",0],["u",0]],e*o*f);return g(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),g(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),a}}const Si=(n,e)=>`${n==="f16"?`enable f16;
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
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`;function Qt(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,l=[];for(let o=0;o<i;o++)l.push(n+o*t-bt(o*(i*t-e)/(i-1)));return l}function Bi(n,e,t){let r=1/0,i=-1/0;const l=o=>{r=Math.min(r,o),i=Math.max(i,o)};for(let o=0;o<n.length;o++){const f=n[o],u=n[(o+1)%n.length];f[0]>=e&&f[0]<=t&&l(f[1]);for(const a of[e,t])(f[0]-a)*(u[0]-a)<0&&l(f[1]+(a-f[0])/(u[0]-f[0])*(u[1]-f[1]))}return r<=i?[r,i]:null}const Pi=(n,e)=>Math.max(1,Math.round(n*(1-e)));function _n(n,e,t,r,i){const l=bn(n,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(l.toWind),f=Math.floor(Math.min(...o.map(c=>c[0]))),u=Math.floor(Math.min(...o.map(c=>c[1]))),a=Math.ceil(Math.max(...o.map(c=>c[0])))-f+1,g=Math.ceil(Math.max(...o.map(c=>c[1])))-u+1,h=[];for(const c of Qt(f,a,r,i)){const d=Bi(o,c,c+r-1);if(!d)continue;const s=Math.floor(d[0]),p=Math.max(r,Math.ceil(d[1])-s+1);for(const y of Qt(s,p,r,i))h.push([y,c])}return{theta:n,gx:a,gy:g,gridX0:f,gridY0:u,patches:h,frame:l}}const Ai=8,$n=new MessageChannel,kn=[];$n.port1.onmessage=()=>{var n;return(n=kn.shift())==null?void 0:n()};const Ci=()=>new Promise(n=>{kn.push(n),$n.port2.postMessage(0)}),Ii=n=>Math.ceil(n*Math.SQRT2),Ti=128<<20,Fi=2,He=1e-6,Ie=6e4,Ei=4,Ri=48<<20,Li=16;function Te(n,e,t){let r;const i=new Promise((l,o)=>{r=setTimeout(()=>o(new Ve(De.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,i]).finally(()=>clearTimeout(r))}function Di(n,e,t,r){let i=1/0,l=-1/0,o=1/0,f=-1/0,u=1/0,a=-1/0;for(const[g,h,c]of n)i=Math.min(i,g-e.gridY0),l=Math.max(l,g-e.gridY0+t),o=Math.min(o,c-e.gridX0),f=Math.max(f,c-e.gridX0+t),u=Math.min(u,h-r),a=Math.max(a,h-r+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,l),rx0:Math.max(0,o),rx1:Math.min(e.gx,f),rz0:u,rz1:a}}function Vi(n,e,t){const{gx:r,gy:i}=n,l=new Int32Array(i).fill(r),o=new Int32Array(i).fill(0);for(const[a,g]of n.patches){const h=Math.max(0,a-n.gridY0),c=Math.min(i,a-n.gridY0+e),d=Math.max(0,g-n.gridX0),s=Math.min(r,g-n.gridX0+e);for(let p=h;p<c;p++)d<l[p]&&(l[p]=d),s>o[p]&&(o[p]=s)}const f=new Uint32Array(3*i+1);let u=0;for(let a=0;a<i;a++){const g=Math.max(0,o[a]-l[a]);f[a]=u,f[i+1+a]=g?l[a]:0,f[2*i+1+a]=g,u+=g*t}return f[i]=u,{table:f,count:u}}function Oi(n,e){const t=new Float32Array(n);for(let r=0;r<n;r++)t[r]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*r/(n-1)));return t}function zi(n,e,t){const{gx:r,gy:i,gridX0:l,gridY0:o,patches:f}=n,u=new Float32Array(r*i),a=Oi(e,t);for(const[g,h]of f)for(let c=0;c<e;c++){const d=g-o+c;if(d<0||d>=i)continue;const s=d*r,p=a[c];for(let y=0;y<e;y++){const w=h-l+y;w>=0&&w<r&&(u[s+w]+=p*a[y])}}return u}function Ui(n,e,t,r){const{gx:i,gy:l,gridX0:o,gridY0:f,frame:{cX:u,cY:a,cos:g,sin:h}}=n,c=new Float32Array(i*l);for(let d=0;d<l;d++){const s=f+d-a;for(let p=0;p<i;p++){const y=o+p-u,w=u+y*g-s*h,_=a+y*h+s*g;if(w<-.5||_<-.5||w>r-.5||_>t-.5){c[d*i+p]=-1;continue}const m=Math.min(r-1,Math.max(0,bt(w))),x=Math.min(t-1,Math.max(0,bt(_)));c[d*i+p]=e[x*r+m]}}return c}class Ni{constructor(e,t,r,{batchSize:i}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,this.channels=t.model.output_channels,this.bufferLimit=Math.min(Ti,e.device.limits.maxStorageBufferBindingSize),this.network=new ki(e,t,r,i),this.blendPipeline=e.pipeline(Si(this.network.store,this.channels)),this.inputPlan=ci(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,r){var l;this.cancel(),(l=this.city)==null||l.distanceField.destroy();const i=new Mn(this.context,{layers:e,ny:t,nx:r},Ii(this.patch),this.network.store,this.inputPlan);i.scanRawBytes=Math.ceil(Ri*Math.min(1,this.batchSize/Li)),this.city={distanceField:i,ny:t,nx:r,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:r,patch:i}=this,l=`${e}:${t}`;return((o=r.frame)==null?void 0:o.key)!==l&&(r.frame={key:l,layout:_n(e,r.nx,r.ny,i,t),final:null,roof:null}),r.frame}finalOf(e){return e.final??(e.final=zi(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=Ui(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,r=e.join();if(t.storedKey===r)return!1;const{distanceField:i}=t;i.releaseGroups(),i.upGrid=null,t.storedKey=null;const[l]=i.planGroups(e,this.bufferLimit);return i.allocate([l]),await Te(i.scan(l),4*Ie,"the computation"),i.destroyed?!1:(t.group=l,t.storedKey=r,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>Te(e.popErrorScope().catch(()=>null),Ie,"the graphics device"),r=await t(),i=await t();if(r)throw new Ve(De.GPU,`out of graphics memory: ${r.message}`);if(i)throw new Ve(De.GPU,`the graphics device refused the work: ${i.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,r){const i=++this.generation,l=()=>i!==this.generation,{context:o,city:f,patch:u}=this,{device:a}=o;this.openScopes();let g=null;const h=()=>this.closeScopes();try{const c=this.frameOf(t,Pi(u,r.overlap)),{layout:d}=c;if(await this.ensureLayers(e),l()||f.distanceField.destroyed)return null;const{distanceField:s,group:p}=f;if(s.upWind&&s.ensureUpTiles([p],t,d.patches,u)&&(await Te(a.queue.onSubmittedWorkDone(),Ie,"the computation"),o.releaseScratch()),l())return null;const y=Vi(d,u,e.length),w=o.storage(y.count*(this.channels+1)*4);try{if(!await this.runNetwork(p,e,c,y,w,t,r,l))return null;g=await this.readField(e,d,y,w)}finally{o.free(w),o.releaseScratch()}}finally{await h()}return l()?null:g}async runNetwork(e,t,r,i,l,o,f,u){var x;const{context:a,patch:g}=this,{layout:h}=r,{device:c}=a,{distanceField:d}=this.city,s=a.upload(i.table),p=[],y=t[0],w=!!(f.shouldDraw&&f.onDraw)&&t.length===1;let _=null,m=null;w&&(_={final:this.finalOf(r),roof:this.roofOf(r)},(x=f.onStart)==null||x.call(f,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const M=t.length*h.patches.length;for(let b=0;b<M;){if(u())return!1;const k=Math.floor(b/h.patches.length),A=b%h.patches.length,S=h.patches.slice(A,A+this.batchSize).map(([z,j])=>[z,t[k],j]);b+=S.length;const $=new Int32Array(S.flat()),I=c.createCommandEncoder(),B=d.assemble(I,$,e,o,g,this.network.inputBuffer),C=this.network.encode(I,S.length),T=Di(S,h,g,y);if(this.encodeBlend(I,C,B,l,s,S.length,T,h,y),c.queue.submit([I.finish()]),a.free(B),a.releaseScratch(),p.push(c.queue.onSubmittedWorkDone()),p.length>Fi&&await Te(p.shift(),Ie,"the computation"),w){m=Gi(m,T);const z=b>=M;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(z||f.shouldDraw())){const j=m;m=null;const H=await this.readRect(j,h,i,l,_,t[0]);if(u())return!1;f.onDraw({...H,stride:this.channels+2,channels:this.channels,theta:o,readyCount:b,patchCount:M})}}}return await Te(Promise.all(p),Ie,"the computation"),!0}finally{a.free(s)}}encodeBlend(e,t,r,i,l,o,f,u,a){const{context:g,patch:h}=this,{gy:c}=u,{ry0:d,ry1:s,rx0:p,rx1:y,rz0:w,rz1:_}=f;if(!(s>d&&y>p))return;const m=e.beginComputePass();g.dispatch(m,this.blendPipeline,[t,r,i,l,g.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",c],["u",a],["u",0],["u",0],["u",d],["u",w],["u",p],["u",s-d],["u",_-w],["u",y-p],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(s-d)*(_-w)*(y-p)),m.end()}async readRect({ry0:e,ry1:t,rx0:r,rx1:i},l,{table:o},f,{final:u,roof:a},g){const{gx:h,gy:c}=l,d=this.channels,s=(d+1)*4,p=i-r,y=t-e,w=(b,k)=>{for(let A=e;A<t;A++){const S=o[c+1+A],$=o[2*c+1+A],I=Math.max(r,S),B=Math.min(i,S+$);B>I&&b.copyBufferToBuffer(f,(o[A]+I-S)*s,k,((A-e)*p+I-r)*s,(B-I)*s)}},_=await Te(this.context.readBack(p*y*s,w,b=>new Float32Array(b.slice(0))),Ie,"reading the wind back"),{center:m,scale:x}=this.metadata.target,M=new Float32Array(p*y*(d+2));for(let b=0;b<p*y;b++){const k=_[b*(d+1)+d],A=b*(d+2),S=k>He?1/k:0;for(let B=0;B<d;B++)M[A+B]=_[b*(d+1)+B]*S*x[B]+m[B];const $=(e+Math.floor(b/p))*h+r+b%p,I=a[$];M[A+d]=I<0||k<=He?2:I>g?1:0,M[A+d+1]=u[$]>He?Math.min(1,k/u[$]):0}return{x0:r,y0:e,width:p,height:y,values:M}}async readField(e,t,{table:r,count:i},l){const{gx:o,gy:f}=t,u=this.channels,a=u+1,{center:g,scale:h}=this.metadata.target,c=(y,w)=>y.copyBufferToBuffer(l,0,w,0,w.size),d=await Te(this.context.readBack(i*a*4,c,y=>new Float32Array(y.slice(0))),4*Ie,"reading the wind back"),s=e.map(y=>({layer:y,values:new Float32Array(o*f*u),weights:new Float32Array(o*f)}));let p=performance.now();for(let y=0;y<f;y++){performance.now()-p>Ai&&(await Ci(),p=performance.now());const w=r[y],_=r[f+1+y],m=r[2*f+1+y];for(let x=0;x<e.length;x++){const{values:M,weights:b}=s[x];for(let k=0;k<m;k++){const A=(w+x*m+k)*a,S=y*o+_+k,$=d[A+u];if($>He){b[S]=$;const I=1/$;for(let B=0;B<u;B++)M[S*u+B]=d[A+B]*I*h[B]+g[B]}else for(let I=0;I<u;I++)M[S*u+I]=g[I]}}}return{layout:t,gx:o,gy:f,layers:s}}async predict(e,t={}){const{city:r}=this,i=r.layerIndex,l=await this.predictLayers([i],e,t);if(!l)return null;const{gx:o,gy:f,layers:[{values:u,weights:a}]}=l,g=this.channels,h=this.roofOf(r.frame),c=new Uint8Array(o*f);let d=0;for(let s=0;s<o*f;s++){if(h[s]<0){c[s]=2;continue}if(a[s]<=He){c[s]=2;continue}c[s]=h[s]>i?1:0;for(let p=0;p<g;p++)if(!Number.isFinite(u[s*g+p])){d+=1;break}}return{values:u,solid:c,theta:e,height:f,width:o,nonFinite:d}}}function Gi(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const ji=16,Hi=.4,Xi=6.278,Wi=1e-6;function Yi(){let n=null,e=null,t=null,r=null,i=null,l=0;async function o({allowF16:c=!0}={},d){if(!t){const s="/cityffdv2-demo/flume/model-v3/";[t,r]=await Promise.all(["metadata.json","weights.bin"].map(async p=>{const y=await fetch(s+p,{signal:d});if(!y.ok)throw new Error("Could not load model v3 "+p+" (HTTP "+y.status+").");return p.endsWith(".bin")?y.arrayBuffer():y.json()}))}n&&(c||!n.useF16)||(f(),n=await St.create({allowF16:c}),e=new Ni(n,t,r,{batchSize:ji}))}function f(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,i=null}function u(c,d,s){const p=d.gx*d.gy,y=e.roofOf(e.city.frame),w=new Uint8Array(p);let _=0;for(let x=0;x<p;x++)y[x]<0||s.weights[x]<=Wi?w[x]=2:w[x]=y[x]>s.layer?1:0,!w[x]&&!Number.isFinite(s.values[x*5])&&_++;const m={width:d.gx,height:d.gy,originX:d.layout.gridX0,values:s.values,solid:w};return fn(c,c.plan.indexOf(s.layer),m),_}async function a(c,d,s,p,y){const{gx:w,gy:_}=_n(p,d.nx,d.ny,e.patch,e.patch),m=Math.max(1,Math.floor(e.bufferLimit/(w*_*(e.channels+1)*4))),x=Math.min(Ei,m);for(let M=0;M<s.length;M+=x){if(c.generation!==l||y!=null&&y.aborted)return!1;const b=await e.predictLayers(s.slice(M,M+x),p,{overlap:Hi});if(!b||c.generation!==l)return!1;c.volume??(c.volume=dn({width:b.gx,height:b.gy,originX:b.layout.gridX0,originY:b.layout.gridY0,theta:p},c.layers,!1));for(const k of b.layers)c.nonFinite+=u(c.volume,b,k)}return!0}async function g(c,d,s,{signal:p,onFirstWave:y,onMoreLayers:w}={},_=!0){await o({allowF16:_},p),c!==i&&(e.setCity(c.layers,c.ny,c.nx),i=c);const m=un(d).slice(0,cn),x={layers:d,volume:null,nonFinite:0,generation:++l};if(!await a(x,c,d.filter(b=>m.includes(b)),s,p))return null;if(x.nonFinite&&n.useF16&&_)return g(c,d,s,{signal:p,onFirstWave:y,onMoreLayers:w},!1);if(x.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");y==null||y({volume:x.volume,referenceSpeed:Xi});const M=d.filter(b=>!m.includes(b));if(M.length){if(!await a(x,c,M,s,p))return null;if(x.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");w==null||w()}return e.releaseLayers(),x.volume}async function h(c,d,s){await o({},s);const p=e.inputPlan.stored,y=Math.ceil(e.patch*Math.SQRT2),w=new Mn(n,{layers:c.layers,ny:c.ny,nx:c.nx},y,e.network.store,e.inputPlan),_=w.gx*w.gy*p.length*4;let m=null;w.packGroup=async()=>{m=await n.readBack(_,(b,k)=>b.copyBufferToBuffer(w.sumsBuffer,0,k,0,_),b=>new Float32Array(b.slice(0)).map(k=>k/te))};try{const b=w.planGroups([d],e.bufferLimit);w.allocate(b),await w.scan(b[0])}finally{w.destroy()}if(!m)throw new Error("Model v3 MDDF could not be read.");const x=p.map(b=>"upper_distance_"+b.part+(b.part==="dc"?"":b.mode));return{values:m,ny:w.gy,nx:w.gx,margin:y,layerIndex:d,channels:x,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:g,readMddf:h,cancel(){l++,e==null||e.cancel()},destroy:f}}const Jt={v2:Zr,v3:Yi};function qi(){const n=Mt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=!1,r=0;const i={},l=new AbortController;function o(){try{for(const s of Object.values(i))s.destroy()}finally{for(const s of Object.keys(i))delete i[s]}}async function f(){if(e)return;const s=await fetch("/cityffdv2-demo/flume/colorbar.json",{signal:l.signal});if(!s.ok)throw new Error("Could not load colorbar.json (HTTP "+s.status+").");e=await s.json()}async function u(s,p){if(t||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const y=++r,w=()=>t||y!==r;try{if(!Jt[p.model])throw new Error("Unknown model: "+p.model+".");return n.stage="Loading model",await f(),w()?null:await a(s,p,w,y)}catch(_){return!t&&y===r&&(n.error=_.message,n.stage="Prediction failed",n.prediction=null),o(),null}finally{t?o():n.busy=!1}}async function a(s,p,y,w){var k;const _=kt[p.model],m=i[k=p.model]??(i[k]=Jt[p.model]());n.stage=_+" · predicting the first layers";const x=performance.now();let M=null;if(!await m.run(s,p.layers,p.thetaRad,{signal:l.signal,onFirstWave({volume:A,referenceSpeed:S}){y()||(M={...A,grid:s,settings:{...p},referenceSpeed:S,modelLabel:_,colorbar:e,patchCount:0,milliseconds:performance.now()-x,inputRevision:w},n.prediction=Ne(M),n.layersReady=A.layers.length,n.progress=.3,n.stage=_+" · predicting the remaining layers")},onMoreLayers(){y()||!M||(M.milliseconds=performance.now()-x,n.layersReady=M.layers.length)}})||y())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",M}async function g(s){const p=n.prediction&&i[n.prediction.settings.model];if(!p||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{return await p.readMddf(n.prediction.grid,s,l.signal)}finally{n.downloading=!1,t&&o()}}function h(){n.busy&&r++;for(const s of Object.values(i))s.cancel()}function c(){r++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function d(){t=!0,r++,l.abort(),!n.busy&&!n.downloading&&o()}return xt(d),{state:n,run:u,readMddf:g,cancel:h,invalidate:c,dispose:d}}const _e="flume-retained-buildings",en="flume-retained-selected";function Ki(n,e){let t=null,r=null,i=null,l=null,o=null;function f(){if(t){n.getSource(_e)?i!==l&&n.getSource(_e).setData(i):n.addSource(_e,{type:"geojson",data:i,maxzoom:22,tolerance:0}),l=i;for(const[c,d]of[[_e,!1],[en,!0]]){const s=t.filters[d?"selected":"surroundings"],p=d?1:t.surroundingsOpacity;n.getLayer(c)?n.setFilter(c,s):n.addLayer({id:c,type:"fill-extrusion",source:_e,maxzoom:We,filter:s,layout:{visibility:"visible"},paint:{"fill-extrusion-color":d?xe().selectedBuildings:xe().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),n.setPaintProperty(c,"fill-extrusion-opacity",p),n.setLayoutProperty(c,"visibility",d||t.showSurroundings?"visible":"none")}}}function u(){if(!(!t||n.getZoom()<We||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const c=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(d=>!d.tile||d.tile.z>=(t.dataZoom??We));i=rt([...i.features,...c]),f()}catch(c){e==null||e(c)}}function a(c){!t||c!=null&&c.sourceId&&c.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(u,120))}function g(c){var d;(r!==c.collection||(t==null?void 0:t.sourceId)!==c.sourceId||(t==null?void 0:t.sourceLayer)!==c.sourceLayer)&&(i=rt(((d=c.collection)==null?void 0:d.features)??[]),r=c.collection),t=c,f(),a()}function h(){clearTimeout(o),t=null,r=null,i=null,l=null;for(const c of[en,_e])n.getLayer(c)&&n.removeLayer(c);n.getSource(_e)&&n.removeSource(_e)}return n.on("sourcedata",a),n.on("moveend",a),{update:g,clear:h,dispose(){n.off("sourcedata",a),n.off("moveend",a),h()}}}const $e=4,Zi=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,Qi=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function Ji(n,e,t){var de;let r,i,l,o,f,u,a=null,g,h,c,d,s,p="",y=0;const w=new Ut,_=new Ut,m=an.MercatorCoordinate.fromLngLat(n.grid.origin,((de=n.grid.terrain)==null?void 0:de.lowM)??0),x=m.meterInMercatorCoordinateUnits(),[M,b]=Tt(n,n.width/2-.5,n.height/2-.5),k=[new Ze(new pe(1,0,0),0),new Ze(new pe(-1,0,0),n.grid.nx*be),new Ze(new pe(0,1,0),0),new Ze(new pe(0,-1,0),n.grid.ny*be)],A=()=>Number(e.speedMps)/n.referenceSpeed,S=new Map;function $(L){let N=1/0,D=-1/0;for(let W=0;W<n.layers.length;W++){const Q=L+"@"+n.slots[W];S.has(Q)||S.set(Q,Ft(mr(n,W),L));const[ie,J]=S.get(Q);N=Math.min(N,ie),D=Math.max(D,J)}return[N,D]}let I=[0,0],B=null,C=null;function T(L,N){var ne;const D=it(n.grid.origin),W=((ne=n.grid.terrain)==null?void 0:ne.lowM)??0,Q=Math.cos(n.theta),ie=Math.sin(n.theta),J=a.attributes.position,q=Math.ceil((L-1)/$e)+1,fe=Math.ceil((N-1)/$e)+1,Me=new Float32Array(q*fe);for(let ee=0;ee<fe;ee++)for(let ue=0;ue<q;ue++){const K=Math.min(N-1,ee*$e)*L+Math.min(L-1,ue*$e),Pe=J.getX(K),Ae=J.getY(K),Oe=D([M+Pe*Q-Ae*ie,b+Pe*ie+Ae*Q]),ze=r.queryTerrainElevation(Oe,{exaggerated:!1});Me[ee*q+ue]=ze==null?NaN:ze-W}return{values:Me,columns:q,rows:fe}}function z(L){const{width:N,height:D,liftM:W}=L;if(N<2||D<2)return u;a??(a=new dt(N*be,D*be,N-1,D-1)),B=L,C=T(N,D);const{values:Q,columns:ie,rows:J}=C,q=(ne,ee)=>Q[ee*ie+ne],fe=L.settings.heightM,Me=a.attributes.position;for(let ne=0;ne<D;ne++)for(let ee=0;ee<N;ee++){const ue=Math.min(Math.max(0,ie-2),Math.floor(ee/$e)),K=Math.min(Math.max(0,J-2),Math.floor(ne/$e)),Pe=Math.min(ie-1,ue+1),Ae=Math.min(J-1,K+1),Oe=Math.min(1,ee/$e-ue),ze=Math.min(1,ne/$e-K),Ct=(q(ue,K)*(1-Oe)+q(Pe,K)*Oe)*(1-ze)+(q(ue,Ae)*(1-Oe)+q(Pe,Ae)*Oe)*ze,Cn=Number.isFinite(Ct)?Math.max(0,Ct+hr-fe):W[(D-1-ne)*N+ee];Me.setZ(ne*N+ee,Cn)}return Me.needsUpdate=!0,a}let j=!1;const H=()=>j=!0;function se(){if(!j||!r||!B||(f==null?void 0:f.geometry)!==a)return;j=!1;const L=C.values;T(B.width,B.height).values.every((D,W)=>Number.isNaN(D)&&Number.isNaN(L[W])||Math.abs(D-L[W])<.05)||(z(B),r.triggerRepaint())}function V(){if(!i)return;const L=Ye.find(K=>K.id===e.variable)??Ye[0];d==null||d.dispose(),d=new Nt(ur(L.ramp),256,1,Gt),d.colorSpace=Dr,d.minFilter=d.magFilter=jt,d.needsUpdate=!0;const N=e.plane==="3d"?"h":e.plane,D=cr(n,e.planeOffsetM),W=!!(e.sliceAboveGround&&n.grid.groundLayers),Q=e.view==="slice"||e.view==="particles"&&e.particles==="white";f.visible=Q&&N==="h",g.visible=Q&&N==="v";const ie=L.id+"@"+(N==="v"?"v"+D:e.sliceHeightM+(W?" above ground":""));if(ie!==p){let K;if(N==="v"){K=dr(n,D);const[Pe,Ae]=Tt(n,(n.width-1)/2,D);g.position.set(Pe,Ae,K.height*Le/2)}else K=gn(n,Number(e.sliceHeightM),W),f.position.z=K.settings.heightM,f.geometry=W?z(K):u;c==null||c.dispose(),c=new Nt(fr(K,L.id),K.width,K.height,Gt,Vr),c.minFilter=c.magFilter=jt,c.needsUpdate=!0,I=Ft(K,L.id),p=ie}const J=A();let q=J;L.id==="T"&&(q=1),L.id==="tke"&&(q=J*J);const Me=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?$(L.id):I,ne=gr(Me,L.id)??pr(n.colorbar,L.id,n.settings.layers.at(-1),"99.9",1);s.uniforms.field.value=c??null,s.uniforms.palette.value=d,s.uniforms.range.value.set(...ne),h.enabled=e.view!=="off",h.mesh.visible=h.enabled;const ee=e.view==="slice"||e.particles==="white",ue=ee?N:e.plane;ue==="h"?h.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:ee,aboveGround:W}):ue==="v"?h.setPlane({kind:"v",row:D,flat:ee}):h.setPlane(null),h.setCount(Et[e.density]??Et.medium),h.setColouring(ee?"white":e.particles,L.id,d,ne),t==null||t({low:ne[0]*q,high:ne[1]*q,...L}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:V,refresh(){p="",V()},onAdd(L,N){r=L,l=new Cr,o=new Ir,i=new Tr({canvas:r.getCanvas(),context:N,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,s=new Fr({vertexShader:Zi,fragmentShader:Qi,uniforms:{field:{value:null},palette:{value:null},range:{value:new Rr(0,1)}},transparent:!0,depthWrite:!1,side:Er,clipping:!0,clippingPlanes:k}),u=new dt(n.width*be,n.height*be),f=new gt(u,s),f.position.set(M,b,0),f.rotation.z=n.theta,f.frustumCulled=!1,l.add(f);const D=new dt(n.width*be,(n.layers.at(-1)+1)*Le);D.rotateX(Math.PI/2),g=new gt(D,s),g.rotation.z=n.theta,g.frustumCulled=!1,l.add(g),h=new Lr(lr(n)),l.add(h.mesh),r.on("moveend",H),r.on("sourcedata",H),r.on("idle",se),V()},render(L,N){const D=performance.now(),W=Math.min(y?(D-y)/1e3:0,.05);y=D,w.makeTranslation(m.x,m.y,m.z).scale(new pe(x,-x,x)),o.projectionMatrix.copy(_.fromArray(N)).multiply(w),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),h.setViewport(L.drawingBufferWidth,L.drawingBufferHeight);const Q=h.enabled&&!e.paused;Q&&h.step(W,A()),i.resetState(),i.setViewport(0,0,L.drawingBufferWidth,L.drawingBufferHeight),i.render(l,o),Q&&r.triggerRepaint()},onRemove(){r==null||r.off("moveend",H),r==null||r.off("sourcedata",H),r==null||r.off("idle",se),c==null||c.dispose(),d==null||d.dispose(),u==null||u.dispose(),a==null||a.dispose(),g==null||g.geometry.dispose(),s==null||s.dispose(),h==null||h.dispose(),i==null||i.dispose(),r=null,i=null}}}const ft="flume-field",Xe="flume-buildings";function Sn(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function eo(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function to(n,e,t){let r=null,i=null;const l=new Map,o=Ki(n,t);function f(){n.getLayer(ft)&&n.removeLayer(ft),r=null}function u(){for(const[h,c]of l)n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",c.visibility),n.setPaintProperty(h,c.property,c.opacity),n.setFilter(h,c.filter),n.setLayerZoomRange(h,c.minzoom,c.maxzoom),c.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",c.color));l.clear()}function a(h){for(const c of n.getStyle().layers){if(c.id.startsWith("flume-"))continue;const d=eo(c);if(!d)continue;const s=c.type==="fill-extrusion";l.set(c.id,{visibility:n.getLayoutProperty(c.id,"visibility")??"visible",property:d,opacity:n.getPaintProperty(c.id,d)??1,filter:n.getFilter(c.id)??null,minzoom:c.minzoom??0,maxzoom:c.maxzoom??24,color:s?n.getPaintProperty(c.id,"fill-extrusion-color")??null:void 0}),n.setPaintProperty(c.id,d,Rt),s&&n.setPaintProperty(c.id,"fill-extrusion-color",xe().previewBuildings),h||n.setLayoutProperty(c.id,"visibility","none")}}function g({source:h,input:c,prediction:d,preview:s,display:p}){if(d!==i&&(f(),i=d),!d&&n.getLayer(Xe)&&n.removeLayer(Xe),u(),Xn(n,Sn(h)),!d){o.clear(),pt(n,s);return}pt(n,null);const y=Wn.find(_=>_.id===(h==="osm"?"city-osm-3d":"city-concordia-3d")),w=pn(c.buildings.features,n.getFilter(y.id));a(p.showSurroundings),n.setFilter(y.id,w.surroundings),n.setLayerZoomRange(y.id,We,y.layer.maxzoom??24),n.getLayer(Xe)?n.setFilter(Xe,w.selected):n.addLayer({...y.layer,id:Xe,minzoom:We,layout:{visibility:"visible"},filter:w.selected,paint:{...y.layer.paint,"fill-extrusion-color":xe().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:y.layer.source,sourceLayer:y.layer["source-layer"],collection:s,dataZoom:c.dataZoom,filters:w,surroundingsOpacity:Rt,showSurroundings:p.showSurroundings}),n.getLayer(ft)||(r=Ji(d,p,e),n.addLayer(r)),n.triggerRepaint()}return{update:g,configure(){r==null||r.configure()},refresh(){r==null||r.refresh()},beforeStyleChange(){f(),i=null,l.clear()},dispose(){f(),o.dispose(),l.clear()}}}const Ue="flume-terrain-dem",et="flume-terrain-hillshade";function no(n,e){var t,r,i;if(e){if(n.getSource(Ue)||n.addSource(Ue,{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),!n.getLayer(et)){const l=(t=n.getStyle().layers.find(o=>o.type==="symbol"))==null?void 0:t.id;n.addLayer({id:et,type:"hillshade",source:Ue,paint:{"hillshade-exaggeration":.8,"hillshade-shadow-color":"#1b1f24","hillshade-highlight-color":"#f4f1e8","hillshade-accent-color":"#5b5544"}},l)}((r=n.getTerrain())==null?void 0:r.source)!==Ue&&n.setTerrain({source:Ue,exaggeration:1})}else((i=n.getTerrain())==null?void 0:i.source)===Ue&&n.setTerrain(null),n.getLayer(et)&&n.removeLayer(et)}function Re(n,e,t,r,i){if(t.reduce((f,u)=>f*u,1)!==e.length)throw new Error("Invalid "+n+" shape.");const l=new Uint8Array(e.length*4),o=new DataView(l.buffer);for(let f=0;f<e.length;f++){if(!Number.isFinite(e[f]))throw new Error("Cannot export non-finite "+n);o.setFloat32(f*4,e[f],!0)}return{name:n,content:l,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function Bn(n,e,t,r,i=null){var o,f,u;const l={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((o=n.selection)==null?void 0:o.geometry)??((f=n.polygon)==null?void 0:f.geometry),computationalDomain:(u=n.polygon)==null?void 0:u.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:r.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(l.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(a=>(a+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),l.files=Object.fromEntries(t.map(a=>[a.name,a.description])),[{name:"metadata.json",content:JSON.stringify(l,null,2)},...t.map(({name:a,content:g})=>({name:a,content:g}))]}function Pn(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(f=>o+"_"+f)),i=Re("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),l=e.channels??r;return[Re("mddf.f32.bin",e.values,[e.ny,e.nx,l.length],l,"m"),i]}function ro(n){const e=hn(n),t=n.width*n.height,r=new Float32Array(t*3),i=new Float32Array(t),l=new Float32Array(t),o=new Float32Array(t);for(let a=0;a<t;a++){const g=a*5;r.set([e[g],e[g+2],e[g+1]],a*3),i[a]=e[g+3],l[a]=e[g+4],o[a]=Math.hypot(e[g],e[g+1],e[g+2])}const f=[n.height,n.width],u=[Re("velocity.f32.bin",r,[...f,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:f,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Re("speed.f32.bin",o,f,["speed"],"m/s")];return n.settings.model!=="v2"&&u.push(Re("temperature.f32.bin",i,f,["T"],"degC"),Re("tke.f32.bin",l,f,["TKE"],"m2/s2")),u}function io(n){const e=n.width*n.height,t=n.settings.layers.length,r=hn(n),i=new Float32Array(t*e*3);for(let l=0;l<t*e;l++)i.set([r[l*5],r[l*5+2],r[l*5+1]],l*3);return[Re("velocity3d.f32.bin",i,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function oo(n,e,t){return Bn(n,t,Pn(t,e),e)}function so(n,e,t,r=null){const i=[...Pn(t,e),...ro(t)];return r&&i.push(...io(r)),i.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),Bn(n,t,i,e,r)}class ao{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let l=0;e.traverse(function(w){if(w.isMesh){const _=w.geometry,m=_.index,x=_.getAttribute("position");l+=m!==null?m.count/3:x.count/3,i.push({object3d:w,geometry:_})}});let o,f=80;if(r===!0){const w=l*2+l*3*4*4+80+4,_=new ArrayBuffer(w);o=new DataView(_),o.setUint32(f,l,!0),f+=4}else o="",o+=`solid exported
`;const u=new pe,a=new pe,g=new pe,h=new pe,c=new pe,d=new pe;for(let w=0,_=i.length;w<_;w++){const m=i[w].object3d,x=i[w].geometry,M=x.index,b=x.getAttribute("position");if(M!==null)for(let k=0;k<M.count;k+=3){const A=M.getX(k+0),S=M.getX(k+1),$=M.getX(k+2);s(A,S,$,b,m)}else for(let k=0;k<b.count;k+=3){const A=k+0,S=k+1,$=k+2;s(A,S,$,b,m)}}return r===!1&&(o+=`endsolid exported
`),o;function s(w,_,m,x,M){u.fromBufferAttribute(x,w),a.fromBufferAttribute(x,_),g.fromBufferAttribute(x,m),M.isSkinnedMesh===!0&&(M.applyBoneTransform(w,u),M.applyBoneTransform(_,a),M.applyBoneTransform(m,g)),u.applyMatrix4(M.matrixWorld),a.applyMatrix4(M.matrixWorld),g.applyMatrix4(M.matrixWorld),p(u,a,g),y(u),y(a),y(g),r===!0?(o.setUint16(f,0,!0),f+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(w,_,m){h.subVectors(m,_),c.subVectors(w,_),h.cross(c).normalize(),d.copy(h).normalize(),r===!0?(o.setFloat32(f,d.x,!0),f+=4,o.setFloat32(f,d.y,!0),f+=4,o.setFloat32(f,d.z,!0),f+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function y(w){r===!0?(o.setFloat32(f,w.x,!0),f+=4,o.setFloat32(f,w.y,!0),f+=4,o.setFloat32(f,w.z,!0),f+=4):o+="			vertex "+w.x+" "+w.y+" "+w.z+`
`}}}async function lo(n,e,t={}){var w,_;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((w=e.layers)==null?void 0:w.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:l,spacingM:o,layerSpacingM:f}=e,u=(m,x)=>m<0||x<0||m>=r||x>=i?0:l[x*r+m],a=async()=>{var m;if(await new Promise(x=>setTimeout(x,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let g=0;for(let m=0;m<i;m++){m%32===0&&await a();for(let x=0;x<r;x++){const M=u(x,m);if(!Number.isInteger(M)||M<0||M>160)throw new Error("Invalid MDDF building height.");M&&(g+=2+ +(M>u(x-1,m))+ +(M>u(x+1,m))+ +(M>u(x,m-1))+ +(M>u(x,m+1)))}}if(!g)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(g*18);let c=0;const d=(m,x,M,b)=>{for(const k of[m,x,M,m,M,b])h.set(k,c),c+=3};for(let m=0;m<i;m++){m%32===0&&await a();for(let x=0;x<r;x++){const M=u(x,m)*f;if(!M)continue;const b=x*o,k=b+o,A=-m*o,S=A-o;d([b,M,A],[k,M,A],[k,M,S],[b,M,S]),d([b,0,A],[b,0,S],[k,0,S],[k,0,A]);let $=u(x-1,m)*f;M>$&&d([b,$,S],[b,$,A],[b,M,A],[b,M,S]),$=u(x+1,m)*f,M>$&&d([k,$,A],[k,$,S],[k,M,S],[k,M,A]),$=u(x,m-1)*f,M>$&&d([b,$,A],[k,$,A],[k,M,A],[b,M,A]),$=u(x,m+1)*f,M>$&&d([k,$,S],[b,$,S],[b,M,S],[k,M,S])}}const s=new Or;s.setAttribute("position",new zr(h,3));const p=new gt(s);let y;try{y=new ao().parse(p,{binary:!0}).buffer}finally{s.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:y},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(_=n.polygon)==null?void 0:_.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:o,layerSpacingM:f,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:g*2}}},null,2)}]}const An=Symbol("flume");function at(){return Tn(An)}function uo(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=nt(null),t=nt(!1);let r=null,i=null,l=null,o=!1,f=!1,u=null;const a=()=>r,{currentPresetName:g}=tn();Lt(g.value);const h=Yn({getMap:a,accessToken:n}),c=Gr({getMap:a,ready:t,onChange:y,accessToken:n}),d=qi(),s=Mt({mapCreated:!1,mapReady:t,error:"",area:c.state,grid:null,terrain:!1,terrainLoading:!1,wind:{...Dt},engine:d.state,display:{variable:"speed",speedMps:Dt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:wr,sliceAboveGround:!0,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=Y(()=>s.downloading||s.engine.downloading||s.area.loading);function y(){clearTimeout(u),f=!1,_++,s.terrainLoading=!1,s.grid=null,s.legend=null,s.error="",s.downloadError="",d.invalidate(),k()}let w=null,_=0;async function m(){if(p.value)return;const $=await c.captureRegion();if(!(!$||o))try{pn($.buildings.features),w=$,await x($)}catch(I){s.error=I.message}}async function x($){const I=++_;let B=br($);if(s.terrain){s.terrainLoading=!0;try{B=Yr(B,await Wr(B,n))}finally{I===_&&(s.terrainLoading=!1)}}I!==_||o||(s.grid=Ne(B),s.error="",M())}ge(()=>s.terrain,async()=>{if(!s.grid||!w)return;const $=w;y();try{await x($)}catch(I){s.error=I.message}});function M(){clearTimeout(u),u=setTimeout(()=>b(),vr)}async function b(){if(clearTimeout(u),!(o||!s.grid||p.value)){if(s.engine.busy){f=!0,d.cancel();return}try{const $={...yr(s.wind),model:s.wind.model,layers:mn(s.grid)};s.display.speedMps=$.speedMps,s.error="",await d.run(s.grid,$)}catch($){s.error=$.message}f&&!o&&(f=!1,await b())}}function k(){!r||!t.value||(no(r,s.terrain),i==null||i.update({source:s.area.source,input:s.area.snapshot,prediction:s.engine.prediction,preview:c.getPreview(),display:s.display}))}async function A($){if(!(p.value||!s.grid)&&!($!=="model"&&(s.engine.busy||!s.engine.prediction))){s.downloading=!0,s.downloadError="";try{const I=s.area.snapshot;let B;if($==="model")B=await lo(I,s.grid,{shouldCancel:()=>o});else{const T=Number(s.display.speedMps);if(!ut(T))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const z=s.engine.prediction,j={...z,settings:{...z.settings,speedMps:T}},H=gn(j,s.display.sliceHeightM),se=await d.readMddf(H.settings.layerIndex);$==="mddf"?B=oo(I,se,H):B=so(I,se,H,j)}const C=await Kn(B);o||Zn(C,"flume-"+$+".zip","application/zip")}catch(I){o||(s.downloadError=I.message)}finally{o||(s.downloading=!1)}}}ge([()=>s.terrain,()=>s.grid,()=>s.engine.prediction,()=>s.area.source,()=>s.display.showSurroundings],k),ge(()=>s.engine.layersReady,()=>i==null?void 0:i.refresh()),ge(()=>[s.wind.directionDeg,s.wind.model],()=>{s.grid&&M()}),ge(()=>s.wind.speedMps,$=>{ut($)&&(s.display.speedMps=Number($))}),ge(()=>s.engine.prediction,$=>{const I=Ye.find(B=>B.id===s.display.variable);($==null?void 0:$.settings.model)==="v2"&&(I!=null&&I.notInV2)&&(s.display.variable="speed")}),ge(()=>[s.display.variable,s.display.particles,s.display.density,s.display.speedMps,s.display.view,s.display.plane,s.display.sliceHeightM,s.display.sliceAboveGround,s.display.planeOffsetM],()=>{ut(s.display.speedMps)?(s.downloadError="",i==null||i.configure()):s.downloadError="Use a wind speed between 0.5 and 20 m/s."}),ge(()=>s.display.paused,()=>r==null?void 0:r.triggerRepaint()),ge(g,$=>Lt($)),ge(h.mapStyle,$=>{r&&(c.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),r.setStyle($,{diff:!1}))}),In(()=>{if(!(n!=null&&n.startsWith("pk."))){s.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new an.Map({container:e.value,accessToken:n,style:h.mapStyle.value,center:Mr,zoom:xr,pitch:0,antialias:!0,attributionControl:!1}),i=to(r,$=>{o||(s.legend=$)},$=>{o||(s.error=$.message)}),s.mapCreated=!0,r.on("style.load",()=>{if(!o)try{qn(r,Sn(s.area.source)),t.value=!0,c.restore(),k()}catch($){s.error=$.message}}),r.on("error",$=>{if(o)return;const I=$.sourceId?" ("+$.sourceId+")":"";s.error="Map data unavailable"+I+". Check token, allowed domains and connection."}),h.attach(),l=new ResizeObserver(()=>r==null?void 0:r.resize()),l.observe(e.value)}catch($){s.error=$.message}}),xt(()=>{o=!0,clearTimeout(u),d.dispose(),i==null||i.dispose(),l==null||l.disconnect(),r==null||r.remove(),r=null});const S={mapElement:e,store:s,controls:h,locked:p,area:c,acceptArea:m,runPrediction:b,download:A};return Fn(An,S),S}const co={class:"flume-compact"},fo={class:"map-hud-field"},go={key:0,class:"map-hud-muted",role:"status"},po={key:1,class:"map-hud-muted"},ho={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},mo={key:2,class:"map-hud-muted",role:"status"},yo={key:3,class:"map-hud-muted",role:"status"},wo={class:"map-hud-field"},bo={class:"map-hud-actions"},vo={key:4,role:"status",class:"map-hud-muted"},xo={key:5,class:"map-hud-muted"},Mo={key:6,class:"map-hud-muted"},_o={__name:"AreaHud",setup(n){const{store:e,area:t,locked:r,acceptArea:i}=at(),l=ln*100,o=e.area,f=Y(()=>!e.mapReady||r.value),u=Y(()=>!!(o.region||o.loadedArea)),a=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],g=yn.map(({label:s,value:p})=>({label:s,value:p}));function h(s){o.shape=s,t.startSelection()}const c={rectangle:"Click one corner, then the opposite corner.",circle:"Click the centre, then a point on the edge.",polygon:"Click the corners; click the first point to finish."},d=_r.map(s=>({label:kt[s],value:s}));return(s,p)=>{var k,A;const y=nn,w=En,_=_t,m=rn,x=on,M=ot,b=st;return R(),U("div",co,[P("div",fo,[p[5]||(p[5]=P("span",{class:"map-hud-field__label"},"Wind model",-1)),E(y,{modelValue:v(e).wind.model,"onUpdate:modelValue":p[0]||(p[0]=S=>v(e).wind.model=S),options:v(d),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:v(r)},null,8,["modelValue","options","disabled"])]),E(w,{modelValue:v(o).source,"onUpdate:modelValue":p[1]||(p[1]=S=>v(o).source=S),label:"Buildings","aria-label":"Building source",size:"small",options:a,"text-by":"text","value-by":"value",disabled:v(r)},null,8,["modelValue","disabled"]),E(ke,{block:"",icon:"mso-location_city",disabled:f.value,loading:v(o).loading,onClick:v(t).loadBuildings},{default:Z(()=>[...p[6]||(p[6]=[oe("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),v(o).loadedArea?(R(),U("p",go," Loaded detailed buildings: "+F(v(o).loadedArea.count)+" parts · "+F((v(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+F((v(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km ",1)):(R(),U("p",po,"3 × 3 km around the map centre, or draw an area below.")),P("div",ho,[p[7]||(p[7]=P("span",{class:"map-hud-muted"},"Buffer",-1)),E(_,{modelValue:v(o).bufferPercent,"onUpdate:modelValue":p[2]||(p[2]=S=>v(o).bufferPercent=S),min:0,max:l,step:5,"aria-label":"Buffer per side (%)",disabled:v(r)},null,8,["modelValue","disabled"]),E(m,{modelValue:v(o).bufferPercent,"onUpdate:modelValue":p[3]||(p[3]=S=>v(o).bufferPercent=S),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:l,step:5,disabled:v(r)},null,8,["modelValue","disabled"]),p[8]||(p[8]=P("span",{class:"map-hud-muted"},"%",-1))]),E(x,{modelValue:v(e).terrain,"onUpdate:modelValue":p[4]||(p[4]=S=>v(e).terrain=S),label:"Terrain as solid ground (test)",size:"small",disabled:v(r)||v(e).terrainLoading},null,8,["modelValue","disabled"]),v(e).terrainLoading?(R(),U("p",mo,"Loading ground heights…")):(k=v(e).grid)!=null&&k.terrain?(R(),U("p",yo," Ground "+F(Math.round(v(e).grid.terrain.lowM))+"–"+F(Math.round(v(e).grid.terrain.highM))+" m · test only ",1)):X("",!0),P("div",wo,[p[9]||(p[9]=P("span",{class:"map-hud-field__label"},"Draw an area",-1)),E(y,{"model-value":v(o).shape,options:v(g),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Area shape",class:"even-toggle",disabled:f.value,"onUpdate:modelValue":h},null,8,["model-value","options","disabled"])]),P("div",bo,[E(ke,{icon:"mso-crop_free",disabled:f.value,"aria-label":"Select region",onClick:v(t).startSelection},{default:Z(()=>[...p[10]||(p[10]=[oe("Draw area",-1)])]),_:1},8,["disabled","onClick"]),v(o).region?(R(),Be(ke,{key:0,icon:"mso-close",disabled:v(r),onClick:v(t).clearSelection},{default:Z(()=>[...p[11]||(p[11]=[oe("Clear",-1)])]),_:1},8,["disabled","onClick"])):X("",!0)]),v(o).drawing?(R(),U("p",vo,F(c[v(o).shape])+" Esc cancels.",1)):(A=v(o).region)!=null&&A.mainDomain?(R(),U("p",xo,F(v(o).region.mainDomain.extentM[0])+" × "+F(v(o).region.mainDomain.extentM[1])+" m + "+F((v(o).region.buffer.fraction*100).toFixed(0))+"% buffer ",1)):v(o).region?(R(),U("p",Mo,F(v(o).region.extentM[0])+" × "+F(v(o).region.extentM[1])+" m ",1)):X("",!0),E(ke,{block:"",disabled:!v(e).mapReady||!u.value||v(r),loading:v(o).loading,"aria-label":v(o).region?"Use selected region":"Use full loaded area",onClick:v(i)},{default:Z(()=>[oe(F(v(o).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"]),v(o).loading?(R(),Be(M,{key:7,"model-value":v(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):X("",!0),v(o).error?(R(),Be(b,{key:8,color:"danger"},{default:Z(()=>[oe(F(v(o).error),1)]),_:1})):X("",!0)])}}},$o={class:"flex flex-col gap-3"},ko={key:0,class:"map-hud-muted"},So={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Bo={class:"map-hud-field"},Po={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Ao=["aria-valuenow","aria-disabled"],Co=["x1","y1","x2","y2"],Io=["cx","cy"],To={class:"flex flex-col gap-2 min-w-0"},Fo={class:"cardinals grid grid-cols-4 gap-1"},Eo={key:3,class:"flex flex-col gap-1"},Ro={role:"status",class:"map-hud-muted"},Lo={key:4,class:"map-hud-muted"},Do={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:r}=at(),i=e.wind,l=e.engine,o=Y(()=>!!e.grid&&!t.value),f=Y(()=>{if(!e.grid)return null;const d=mn(e.grid);return{topM:Math.round((d.at(-1)+.5)*Le),layers:d.length}}),u=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],a=nt(null),g=Y(()=>Number(i.directionDeg)*Math.PI/180);function h(d){if(!o.value||d.type==="pointermove"&&!d.buttons)return;d.type==="pointerdown"&&d.currentTarget.setPointerCapture(d.pointerId);const s=a.value.getBoundingClientRect(),p=d.clientX-s.left-s.width/2,y=-(d.clientY-s.top-s.height/2);i.directionDeg=(Math.round(Math.atan2(y,p)*180/Math.PI)+360)%360}function c(d){if(!o.value)return;const s={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[d.key]??0;s&&(d.preventDefault(),i.directionDeg=(Number(i.directionDeg)+s+360)%360)}return(d,s)=>{const p=_t,y=rn,w=st,_=ot;return R(),U("div",$o,[v(e).grid?X("",!0):(R(),U("p",ko,"Choose a simulation area in step 1 first.")),P("div",So,[s[3]||(s[3]=P("span",{class:"map-hud-muted"},"Speed",-1)),E(p,{modelValue:v(i).speedMps,"onUpdate:modelValue":s[0]||(s[0]=m=>v(i).speedMps=m),min:v(Ot),max:v(Vt),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),E(y,{modelValue:v(i).speedMps,"onUpdate:modelValue":s[1]||(s[1]=m=>v(i).speedMps=m),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:v(Ot),max:v(Vt),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),s[4]||(s[4]=P("span",{class:"map-hud-muted"},"m/s",-1))]),P("div",Bo,[s[6]||(s[6]=P("span",{class:"map-hud-field__label"},"Wind direction (blowing towards)",-1)),P("div",Po,[(R(),U("svg",{ref_key:"dial",ref:a,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":v(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Rn(h,["prevent"]),onPointermove:h,onKeydown:c},[s[5]||(s[5]=Ln('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-b60f625f></circle><text x="80" y="18" text-anchor="middle" data-v-b60f625f>90°</text><text x="146" y="84" text-anchor="middle" data-v-b60f625f>0°</text><text x="80" y="152" text-anchor="middle" data-v-b60f625f>270°</text><text x="1" y="84" text-anchor="start" data-v-b60f625f>180°</text>',5)),P("line",{x1:80-Math.cos(g.value)*30,y1:80+Math.sin(g.value)*30,x2:80+Math.cos(g.value)*42,y2:80-Math.sin(g.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Co),P("circle",{cx:80+Math.cos(g.value)*42,cy:80-Math.sin(g.value)*42,r:"5",class:"needle-tip"},null,8,Io)],40,Ao)),P("div",To,[E(y,{modelValue:v(i).directionDeg,"onUpdate:modelValue":s[2]||(s[2]=m=>v(i).directionDeg=m),modelModifiers:{number:!0},type:"number",label:"Degrees","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),P("div",Fo,[(R(),U(Fe,null,sn(u,m=>E(ke,{key:m.text,disabled:!o.value,"aria-label":"Wind towards "+m.text,onClick:x=>v(i).directionDeg=m.value},{default:Z(()=>[oe(F(m.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])])]),v(e).error?(R(),Be(w,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Z(()=>[oe(F(v(e).error),1)]),_:1})):X("",!0),v(l).error?(R(),Be(w,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Z(()=>[oe(F(v(l).error),1)]),_:1})):X("",!0),v(l).busy?(R(),U("div",Eo,[E(_,{"model-value":v(l).progress*100,indeterminate:v(l).progress===0},null,8,["model-value","indeterminate"]),P("p",Ro,F(v(l).stage),1)])):X("",!0),f.value&&!v(l).busy?(R(),U("p",Lo," 3D wind: ground to "+F(f.value.topM)+" m · "+F(f.value.layers)+" layers ",1)):X("",!0),E(ke,{primary:"",block:"",disabled:!o.value,loading:v(l).busy,"aria-label":"Run prediction",onClick:v(r)},{default:Z(()=>[...s[7]||(s[7]=[oe("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},Vo=$t(Do,[["__scopeId","data-v-b60f625f"]]),Oo={class:"flex flex-col gap-3"},zo={key:0,class:"map-hud-muted"},Uo={class:"map-hud-field"},No={class:"map-hud-muted"},Go={class:"map-hud-field"},jo={class:"map-hud-muted"},Ho={key:0,class:"hud-row hud-row--value"},Xo={class:"hud-value"},Wo={key:1,class:"map-hud-field"},Yo={class:"map-hud-muted"},qo={key:2,class:"hud-row hud-row--value"},Ko={class:"hud-value"},Zo={key:0,class:"map-hud-field"},Qo={class:"map-hud-muted"},Jo={class:"hud-row"},es={class:"map-hud-field"},ts={key:0,class:"flex flex-col gap-1 text-xs"},ns={class:"flex justify-between gap-2 map-hud-muted"},rs={class:"map-hud-muted"},is={__name:"VisualizeHud",setup(n){const{store:e}=at(),t=e.display,r=Y(()=>e.engine.prediction),i=Y(()=>{var M;return e.engine.layersReady||((M=r.value)==null?void 0:M.layers.length)||0}),l=Y(()=>r.value?$r(r.value):zt),o=Y(()=>r.value?kr(r.value):[0,0]),f=Y(()=>Ye.filter(M=>{var b;return!(M.notInV2&&((b=r.value)==null?void 0:b.settings.model)==="v2")}).map(M=>({label:M.label,value:M.id}))),u={particles:"Moving dots that follow the wind.",slice:"A coloured plane through the wind."},a={"3d":"The whole 3D wind volume.",h:"A level plane at one height.",v:"An upright plane along the wind."},g={coloured:"Each particle has the colour of its value.",white:"White particles over a coloured slice at Height."},h=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],c=Y(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(M=>M.value!=="3d"||t.view==="particles")),d=Y({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:M=>t.plane=M}),s=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],p=Y(()=>d.value==="h"||d.value==="3d"&&t.view==="particles"&&t.particles==="white"),y=[{label:"Follow ground",value:!0},{label:"Flat",value:!1}],w=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],_=Y(()=>{const M=Math.round(Number(t.planeOffsetM));return(M>0?"+":"")+M+" m"}),m=Y(()=>{var M;return((M=Ye.find(b=>b.id===t.variable))==null?void 0:M.ramp)??"turbo"}),x=Y(()=>"linear-gradient(to right,"+Array.from({length:17},(M,b)=>"rgb("+Sr(m.value,b/16).join(",")+") "+b*100/16+"%").join(",")+")");return(M,b)=>{var I;const k=nn,A=_t,S=on,$=Vn;return R(),U("div",Oo,[r.value?(R(),U(Fe,{key:1},[P("div",Uo,[b[10]||(b[10]=P("span",{class:"map-hud-field__label"},"Show",-1)),E(k,{modelValue:v(t).view,"onUpdate:modelValue":b[0]||(b[0]=B=>v(t).view=B),options:h,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),P("p",No,F(u[v(t).view]),1)]),v(t).view!=="off"?(R(),U(Fe,{key:0},[P("div",Go,[b[11]||(b[11]=P("span",{class:"map-hud-field__label"},"Plane",-1)),E(k,{modelValue:d.value,"onUpdate:modelValue":b[1]||(b[1]=B=>d.value=B),options:c.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),P("p",jo,F(a[d.value]),1)]),p.value?(R(),U("div",Ho,[b[12]||(b[12]=P("span",{class:"hud-label"},"Height",-1)),E(A,{modelValue:v(t).sliceHeightM,"onUpdate:modelValue":b[2]||(b[2]=B=>v(t).sliceHeightM=B),min:v(zt),max:l.value,step:v(Le),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),P("span",Xo,F(Number(v(t).sliceHeightM).toFixed(1))+" m",1)])):X("",!0),p.value&&((I=r.value)!=null&&I.grid.terrain)?(R(),U("div",Wo,[b[13]||(b[13]=P("span",{class:"map-hud-field__label"},"Over hills",-1)),E(k,{modelValue:v(t).sliceAboveGround,"onUpdate:modelValue":b[3]||(b[3]=B=>v(t).sliceAboveGround=B),options:y,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Slice height from",class:"even-toggle"},null,8,["modelValue"]),P("p",Yo,F(v(t).sliceAboveGround?"The slice rises over hills higher than Height.":"The slice stays at Height and cuts through hills."),1)])):X("",!0),d.value==="v"?(R(),U("div",qo,[b[14]||(b[14]=P("span",{class:"hud-label"},"Position",-1)),E(A,{modelValue:v(t).planeOffsetM,"onUpdate:modelValue":b[4]||(b[4]=B=>v(t).planeOffsetM=B),min:o.value[0],max:o.value[1],step:v(be),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),P("span",Ko,F(_.value),1)])):X("",!0)],64)):X("",!0),v(t).view!=="off"?(R(),U(Fe,{key:1},[v(t).view==="particles"?(R(),U("div",Zo,[b[15]||(b[15]=P("span",{class:"map-hud-field__label"},"Colour on",-1)),E(k,{modelValue:v(t).particles,"onUpdate:modelValue":b[5]||(b[5]=B=>v(t).particles=B),options:s,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"]),P("p",Qo,F(g[v(t).particles]),1)])):X("",!0),P("div",Jo,[b[16]||(b[16]=P("span",{class:"hud-label"},"Density",-1)),E(k,{modelValue:v(t).density,"onUpdate:modelValue":b[6]||(b[6]=B=>v(t).density=B),options:w,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),E(S,{modelValue:v(t).paused,"onUpdate:modelValue":b[7]||(b[7]=B=>v(t).paused=B),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):X("",!0),v(t).view!=="off"?(R(),U(Fe,{key:2},[E($,{class:"!my-0"}),P("div",es,[b[17]||(b[17]=P("span",{class:"map-hud-field__label"},"Colour by",-1)),E(k,{modelValue:v(t).variable,"onUpdate:modelValue":b[8]||(b[8]=B=>v(t).variable=B),options:f.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"])]),v(e).legend?(R(),U("div",ts,[P("div",{class:"colorbar",style:Dn({background:x.value})},null,4),P("div",ns,[P("span",null,F(v(e).legend.low.toFixed(2)),1),P("strong",null,F(v(e).legend.legend)+" ("+F(v(e).legend.unit)+")",1),P("span",null,F(v(e).legend.high.toFixed(2)),1)])])):X("",!0)],64)):X("",!0),E($,{class:"!my-0"}),E(S,{modelValue:v(t).showSurroundings,"onUpdate:modelValue":b[9]||(b[9]=B=>v(t).showSurroundings=B),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),P("p",rs,F(v(kt)[r.value.settings.model])+" · up to "+F(l.value.toFixed(0))+" m · "+F(i.value)+" / "+F(r.value.settings.layers.length)+" layers · "+F((r.value.milliseconds/1e3).toFixed(1))+" s ",1)],64)):(R(),U("p",zo,"The 3D wind shows here once the prediction has run."))])}}},os=$t(is,[["__scopeId","data-v-29c81680"]]),ss={class:"space-y-2"},as={key:0,class:"map-hud-muted"},ls={class:"grid grid-cols-2 gap-2"},us={__name:"DownloadsHud",setup(n){const{store:e,download:t}=at(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(l){const o=e.engine;return e.downloading||o.downloading||l!=="model"&&(o.busy||!o.prediction)}return(l,o)=>{const f=ot,u=st;return R(),U("div",ss,[v(e).grid?(R(),U(Fe,{key:1},[P("div",ls,[(R(),U(Fe,null,sn(r,a=>E(ke,{key:a.id,icon:"mso-download","aria-label":a.label,disabled:i(a.id),onClick:g=>v(t)(a.id)},{default:Z(()=>[oe(F(a.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),v(e).downloading?(R(),Be(f,{key:0,indeterminate:"","aria-label":"Preparing download"})):X("",!0),v(e).downloadError?(R(),Be(u,{key:1,color:"danger"},{default:Z(()=>[oe(F(v(e).downloadError),1)]),_:1})):X("",!0)],64)):(R(),U("p",as,"Choose an area in step 1 first."))])}}},cs={class:"flume-hud-stack map-hud-column"},ds={class:"flume-heading map-hud-heading city-glass"},fs={class:"flume-heading__row"},gs={key:0,class:"flume-info"},ps={class:"flume-info__title"},hs={class:"flume-info__copyright"},ms=["href"],ys={class:"map-hud-muted normal-case"},ws={class:"map-hud-muted normal-case"},bs={key:0,class:"flume-status"},vs={__name:"FlumeCityView",setup(n){const{mapElement:e,store:t,controls:r,locked:i,area:l}=uo(),{controlsVisible:o}=r,{currentPresetName:f}=tn(),u=Y(()=>f.value==="dark"),a=nt(!1),g=Y(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),h={particles:"Particles",slice:"Slice",off:"Off"},c=Y(()=>t.engine.prediction?h[t.display.view]:""),d={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(s,p)=>{const y=Gn,w=st,_=ot;return R(),U("section",{class:Nn(["flume-page map-glass",{"map-glass--dark":u.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=Un((...m)=>v(l).stopSelection&&v(l).stopSelection(...m),["esc"]))},[On(P("div",cs,[P("header",ds,[P("div",fs,[p[2]||(p[2]=P("h1",null,"Flume City",-1)),E(y,{preset:"secondary",color:"textPrimary",size:"small",icon:a.value?"mso-close":"mso-info","aria-label":a.value?"Hide Flume City information":"Show Flume City information","aria-expanded":a.value,onClick:p[0]||(p[0]=m=>a.value=!a.value)},null,8,["icon","aria-label","aria-expanded"])]),a.value?(R(),U("div",gs,[P("p",ps,F(d.title),1),P("p",null,F(d.authors),1),P("p",null,F(d.summary),1),E(ke,{icon:"mso-description",href:d.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:Z(()=>[...p[3]||(p[3]=[oe("arXiv",-1)])]),_:1},8,["href"]),P("div",hs,[P("p",null,[p[4]||(p[4]=oe(" Developed and maintained by ",-1)),P("a",{href:v(qe).lab.url,target:"_blank",rel:"noopener"},F(v(qe).lab.name),9,ms),p[5]||(p[5]=P("br",null,null,-1)),oe("("+F(v(qe).lead)+") ",1)]),P("p",null,F(v(qe).place),1)])])):X("",!0)]),E(Ke,{title:"1 · Simulation area",inert:v(i)},{default:Z(()=>[E(_o)]),_:1},8,["inert"]),E(Ke,{title:"2 · Wind configuration",collapsed:!v(t).grid},{"header-extra":Z(()=>[P("span",ys,F(g.value),1)]),default:Z(()=>[E(Vo)]),_:1},8,["collapsed"]),E(Ke,{title:"3 · Wind visualization",collapsed:!v(t).engine.prediction},{"header-extra":Z(()=>[P("span",ws,F(c.value),1)]),default:Z(()=>[E(os)]),_:1},8,["collapsed"]),E(Ke,{title:"4 · Downloads",collapsed:!v(t).grid},{default:Z(()=>[E(us)]),_:1},8,["collapsed"]),v(t).error&&!v(t).grid?(R(),Be(w,{key:0,color:"danger"},{default:Z(()=>[oe(F(v(t).error),1)]),_:1})):X("",!0)],512),[[zn,v(o)]]),P("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),E(Ur,{controls:v(r),shown:v(t).mapCreated,disabled:v(i)},null,8,["controls","shown","disabled"]),!v(t).mapReady&&!v(t).error?(R(),U("div",bs,[E(_,{indeterminate:"","aria-label":"Loading Flume map"})])):X("",!0)],34)}}},Es=$t(vs,[["__scopeId","data-v-9866eea3"]]);export{Es as default};
